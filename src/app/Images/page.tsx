'use-client'
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";
function page() {
  const SkeletonOne = () => {
    return (
      <div>
        <p className="font-bold text-4xl text-white">Periodic Table </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        The Periodic Table categorizes elements by atomic number and chemical properties, aiding in understanding element relationships and predicting their behavior in chemical reactions.
        </p>
      </div>
    );
  };
   
  const SkeletonTwo = () => {
    return (
      <div>
        <p className="font-bold text-4xl text-white">Electroplating</p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Electroplating with copper involves immersing an object in a copper sulfate electrolyte, passing electric current to deposit a layer of copper onto the surface.
        </p>
      </div>
    );
  };
  const SkeletonThree = () => {
    return (
      <div>
        <p className="font-bold text-4xl text-white">Cellulose Model</p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A ball and stick model of a cellulose molecule. Cellulose is a long-chain carbohydrate polymer consisting of cells of glucose. It forms the cell walls of green plants and, whilst minimally digestable in the human gut, it forms an important part of the diet as "dietary fiber".
        </p>
      </div>
    );
  };
  const SkeletonFour = () => {
    return (
      <div>
        <p className="font-bold text-4xl text-white">Graphene molecular structure</p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Graphene is a single layer of carbon atoms arranged in a hexagonal lattice, renowned for its exceptional strength, electrical conductivity, and flexibility, revolutionizing numerous fields from electronics to materials science.
        </p>
      </div>
    );
  };
  const SkeletonFive = () => {
    return (
      <div>
        <p className="font-bold text-4xl text-white">Glucose</p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Glucose is a simple sugar, a vital energy source for living organisms. It's a carbohydrate, commonly found in foods like fruits and honey, and plays a crucial role in cellular respiration.
        </p>
      </div>
    );
  };
  const SkeletonSix = () => {
    return (
      <div>
        <p className="font-bold text-4xl text-white">Atom</p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Atoms are the basic units of matter, composed of protons, neutrons, and electrons. They form elements and combine to create molecules through chemical bonds.
        </p>
      </div>
    );
  };
  const SkeletonSeven = () => {
    return (
      <div>
        <p className="font-bold text-4xl text-white">Benzine</p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Benzene is an aromatic hydrocarbon with a ring of six carbon atoms. It's a colorless liquid, used as a solvent and precursor in various industries.
        </p>
      </div>
    );
  };
  const SkeletonEight = () => {
    return (
      <div>
        <p className="font-bold text-4xl text-white">DNA</p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        DNA, or deoxyribonucleic acid, is a molecule that carries genetic instructions for the development, functioning, growth, and reproduction of all known organisms.
        </p>
      </div>
    );
  };
  const SkeletonNine = () => {
    return (
      <div>
        <p className="font-bold text-4xl text-white">Water molecule model.</p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A water molecule is comprised of two hydrogen atoms and one oxygen atom bonded together covalently. It has a bent shape and exhibits polar properties due to its unequal electron distribution.
        </p>
      </div>
    );
  };
  const cards = [
    {
      id: 1,
      content: <SkeletonOne />,
      className: "md:col-span-2",
      thumbnail:
        "https://media.istockphoto.com/id/1161971314/vector/periodic-table-of-the-elements.jpg?s=2048x2048&w=is&k=20&c=V3idb8iZTl4tdvaKKee96EPw679Q2Vd0X7EL6kUnyuY=",
    },
    {
      id: 2,
      content: <SkeletonTwo />,
      className: "col-span-1 min-h-96",
      thumbnail:
        "https://media.istockphoto.com/id/1353206720/vector/electroplating-with-copper-using-copper-sulfate-electrolyte.jpg?s=2048x2048&w=is&k=20&c=XAL0niA86wNuv2NKmt9IHxjMxtJxUmi9fkm2fF9Yu_0=",
    },
    {
      id: 3,
      content: <SkeletonThree />,
      className: "col-span-1",
      thumbnail:
        "https://media.istockphoto.com/id/157771739/photo/cellulose-model.jpg?s=2048x2048&w=is&k=20&c=5cjN_dx-fEQu5aviiCWmvfAN2LdJXeB2xfO548HAtpU=",
    },
    {
      id: 4,
      content: <SkeletonFour />,
      className: "md:col-span-2",
      thumbnail:
        "https://media.istockphoto.com/id/642010780/photo/graphene-molecular-structure.jpg?s=2048x2048&w=is&k=20&c=4X7fz2--maQqviKqtVyOvxNjKKVcSC84LJ0dURgVTYQ=",
    },
    {
      id: 5,
      content: <SkeletonFive />,
      className: "col-span-1",
      thumbnail:
        "https://st.adda247.com/https://www.careerpower.in/blog/wp-content/uploads/sites/2/2023/09/18152306/Glucose-2-1.png",
    },
    {
      id: 6,
      content: <SkeletonSix />,
      className: "col-span-1",
      thumbnail:
        "https://lh4.googleusercontent.com/y-NfwXsyg4ehe-28yB6vDta5N-QGn43h9dwBipcHc2-jTDw45jwKtsyuBvhYYPw6Qp1eolZSnU0zoPzuGH0BtSnPvJCOjWkb7qfOo6RjvQKZXUzI9b5pe8Cu4UOTh6oCq_kmS6YPiLlr7KaWAKCwnjiJlsSFkb80G378pxNDTjw--8VzWqCJwqBp0w",
    },
    {
      id: 7,
      content: <SkeletonSeven/>,
      className: "col-span-1",
      thumbnail:
        "https://cdn1.byjus.com/wp-content/uploads/2017/10/Structure-of-Benzene-C6H6-01.png",
    },
    {
      id: 8,
      content: <SkeletonEight/>,
      className: "col-span-1",
      thumbnail:
        "https://cdn1.byjus.com/wp-content/uploads/2022/08/dna-structure.png",
    },
    {
      id: 9,
      content: <SkeletonNine/>,
      className: "md:col-span-2",
      thumbnail:
        "https://media.istockphoto.com/id/1437146514/photo/molecule-or-atom-abstract-molecular-structure-for-science-or-medical-background-3d.jpg?s=2048x2048&w=is&k=20&c=GSWrGP9tOA925U1NwtNYwmbmjcmUUAw0E5uq5PXDJyw=",
    },
  ];
  return (

    <div className="mt-14 py-20 w-full h-screen overflow-y-auto bg-gradient-to-b from-gray-950 to-gray-900">
      <section className="text-center text-teal-400 uppercase ">
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-3xl font-semibold">Enjoy a <span className="text-red-300">visual feast</span> of <span className="text-red-300">chemistry</span></h1>
    </div>
  </section>
    <LayoutGrid cards={cards} />
    
  </div>
  )
}

export default page
