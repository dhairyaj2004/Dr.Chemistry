'use client';
import React, { useEffect, useState } from "react";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import convertToSubcurrency from "../utils/convertToSubcurrency";

const CheckoutPage = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  }, [amount]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    const { error: submitError } = await elements.submit();
    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `${window.location.origin}/payment-success?amount=${amount}`,
      },
    });

    if (error) {
      setErrorMessage(error.message);
      setLoading(false);
    } else {
      setErrorMessage(null);
      setLoading(false);
      // Optionally, you can redirect manually here if needed
    }
  };

  if (!clientSecret || !stripe || !elements) {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-zinc-900">
        <div className="bg-black p-8 rounded-md shadow-md flex">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-100"></div>
          <div className="mt-3 ml-3">Wait for a While</div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-8 bg-white rounded-md shadow-md mt-10">
      {clientSecret && <PaymentElement />}
      {errorMessage && <div className="text-red-500 mt-2">{errorMessage}</div>}
      <button
        disabled={!stripe || loading}
        className="w-full mt-8 bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 rounded-md  transition duration-300"
      >
        {!loading ? `Pay ${amount}₹` : "Processing..."}
      </button>
    </form>
  );
};

export default CheckoutPage;
