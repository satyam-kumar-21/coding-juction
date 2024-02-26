import React from "react";

const HeroSection = () => {
  const imageUrl = "https://static.vecteezy.com/system/resources/thumbnails/011/153/368/small/3d-website-developer-working-on-laptop-illustration-png.png";

  return (
    <div
      className="w-full min-h-screen bg-zinc-200 flex flex-col justify-around md:pb-20"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="order-2 md:order-1 flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-2xl">Innovative Sequencing & Production</p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold">
            Coding juction
          </h1>
          <p className="text-2xl">Empowering Your Digital Future.</p>
          <button
            className="py-3 px-6 sm:w-[60%] my-4 text-white border bg-indigo-600 border-indigo-600
    hover:bg-transparent hover:text-indigo-600 rounded-md"
          >
            Explore Now
          </button>
        </div>
        <div className="order-1 md:order-2">
          <img
            className="w-full"
            src={imageUrl}
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
