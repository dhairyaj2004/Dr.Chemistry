"use client";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import convertToSubcurrency from "@/utils/convertToSubcurrency";
import CheckoutPage from "@/components/checkout";
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

function Payment() {
  const amount = 99; // Amount in INR
  return (
    <div className="max-w-8xl mx-auto p-10 text-white text-center m-10 rounded-md bg-gradient-to-tr from-black/15 to-gray-900 mt-16">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2 font-serif">
          <span className="font-serif" style={{ color: "red" }}>
            Dr.{" "}
          </span>
          Chemistry
        </h1>
        <h2 className="text-2xl">
          has charged only
          <span className="font-bold"> {amount}₹ </span>
          for the course
        </h2>
      </div>
      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertToSubcurrency(amount),
          currency: "inr", // Set currency to INR
        }}
      >
        <CheckoutPage amount={amount} />
      </Elements>
    </div>
  );
}

export default Payment;
