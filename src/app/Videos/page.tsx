"use-client";
function page() {
  return (
    <div className="bg-gradient-to-b from-gray-950 to-gray-900">
      <section className="mt-14 py-20 text-center text-teal-600 uppercase ">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-semibold">
            Experience the thrill of chemistry with these must-watch videos.
          </h1>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="relative">
              <h2 className="text-2xl font-semibold mb-4 text-red-300">
                Chemical Kinetics
              </h2>
              <video
                className="w-full h-auto"
                style={{ height: "200px" }}
                controls
              >
                <source src="/chemical kinetics.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="relative">
              <h2 className="text-2xl font-semibold mb-4 text-red-300">
                Collision Theory
              </h2>
              <video
                className="w-full h-auto"
                style={{ height: "200px" }}
                controls
              >
                <source src="collision theory.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="relative">
              <h2 className="text-2xl font-semibold mb-4 text-red-300">
                Electrolysis
              </h2>
              <video
                className="w-full h-auto"
                style={{ height: "200px" }}
                controls
              >
                <source src="Electrolysis.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="relative">
              <h2 className="text-2xl font-semibold mb-4 text-red-300">
                Nernst Equation
              </h2>
              <video
                className="w-full h-auto"
                style={{ height: "200px" }}
                controls
              >
                <source src="/nernst equation.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="relative">
              <h2 className="text-2xl font-semibold mb-4 text-red-300">
                Rate of Reaction
              </h2>
              <video
                className="w-full h-auto"
                style={{ height: "200px" }}
                controls
              >
                <source src="/rate of reaction.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="relative">
              <h2 className="text-2xl font-semibold mb-4 text-red-300">
                Standard Hydrogen Electrode
              </h2>
              <video
                className="w-full h-auto"
                style={{ height: "200px" }}
                controls
              >
                <source
                  src="/SHE(Standard Hydrogen Electrode).mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
