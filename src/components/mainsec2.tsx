"use client";
import cardData from "@/data/cards_data.json";
import { BackgroundGradient } from "./ui/background-gradient";
import Link from "next/link";
interface Field {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  pageUrl: string;
  isFeatured: boolean;
}

function MainSec2() {
  // Filter isFeatured=true courses from JSON by filter method for mainsec2
  const featuredCards = cardData.chemistryFields.filter(
    (field: Field) => field.isFeatured
  );

  return (
    <div className="px-8 py-12 bg-gray-900">
      <div className="">
        <h1 className="mt-8 font-serif text-center text-teal-600 font-semibold tracking-wide text-2xl md:text-3xl lg:text-3xl">
          HERO COURSES
        </h1>
        <h2 className="mt-8 text-3xl font-serif leading-8 font-extrabold tracking-tight text-red-300 sm:text-4xl text-center">
          LEARN WITH THE BEST
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center mt-5">
        {featuredCards.map((field: Field) => (
          <div key={field.id} className="text-center">
            <BackgroundGradient>
              <h1 className="text-2xl font-bold uppercase">{field.name}</h1>
              <img
                src={field.imageUrl}
                alt={field.name}
                className="mt-4 rounded-2xl justify-center"
              />
              <p className="mt-6 ml-4 text-left">{field.description}</p>
              <Link
                href={field.pageUrl}
                className="mt-4 inline-block text-teal-600 hover:underline"
              >
                <button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                  VIEW MORE
                </button>
              </Link>
            </BackgroundGradient>
          </div>
        ))}
      </div>
      <h1 className="mt-14 text-3xl font-serif leading-8 font-extrabold tracking-tight text-red-300 sm:text-4xl text-center">
        WHY CHOOSE US?
      </h1>
    </div>
  );
}

export default MainSec2;
