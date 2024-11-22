"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

function whyChooseUs() {
  const content = [
    {
      title:
        "Why is our website the ultimate resource for chemistry enthusiasts?",
      description:
        "Our website offers a comprehensive collection of resources, including detailed explanations, interactive tools, and up-to-date research findings. We cater to all levels of chemistry knowledge, from beginners to experts, ensuring that everyone can find valuable information and enhance their understanding of this fascinating science.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          <img
            className="rounded-xl px-1"
            src="https://t4.ftcdn.net/jpg/05/63/41/63/360_F_563416386_ruJPhBmQZTDGN90VyCbDFMnVy5sbwkeb.jpg"
            alt="img"
          />
        </div>
      ),
    },
    {
      title: "How does our website ensure high-quality and reliable content?",
      description:
        "We collaborate with experienced chemists and educators to create and review all content on our website. Our team is dedicated to providing accurate, scientifically sound information, regularly updating our resources to reflect the latest advancements in the field. This commitment to quality ensures that our users can trust the information they find here.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <img
            className="rounded-xl px-1"
            src="https://t4.ftcdn.net/jpg/05/52/90/05/360_F_552900530_D4WF1c3zGsvIGfLgKaRBrEmbvPlk6O6E.jpg"
            alt="img"
          />
        </div>
      ),
    },
    {
      title: "What makes our website's learning experience unique and best?",
      description:
        "Our website combines e-learning methods with innovative, interactive features to create an engaging and effective educational experience.Our faculty who teach the subject has doctorate in chemistry so that he has deep knowledge of each topic and teach you with full of enjoyable techniques which helps you to learn with fun. Our personalized learning paths help users focus on their individual needs and goals.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          <img
            className="rounded-xl px-1"
            src="https://www.thoughtco.com/thmb/6MsMmUK27akFhb8i89kj95J5iko=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-545286316-433dd345105e4c6ebe4cdd8d2317fdaa.jpg"
            alt="img"
          />
        </div>
      ),
    },
  ];
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  );
}

export default whyChooseUs;
