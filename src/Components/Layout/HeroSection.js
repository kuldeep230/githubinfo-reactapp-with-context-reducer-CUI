import React from "react";

const HeroSection = () => {
  return (
    <div className="flex justify-around ">
      <section>
        <div className="hero flex flex-col justify-start mt-10 pl-5 rounded h-2/4 bg-inherit text-white">
          <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-black mb-14">
            Hello There ! <br></br>
            <br></br>
            Welcome to GithubInfo.
          </h1>
          <p className=" md:text-3xl sm:text-2xl text-1xl">
            Knowing the github stats made more easy.
            <br></br> Get your Github stats in one App.
          </p>
          <br></br>
          <br></br>
          <p className="pt-4 text-base font-bold flex items-center animate-pulse ">
            *Stay Home Stay Safe. Wear Mask{" "}
            <img
              src="https://img.icons8.com/carbon-copy/100/000000/protection-mask.png"
              alt=""
              className="h-8 fill-current text-green-700 pr-4"
            />
          </p>
        </div>
      </section>
      <section className="sm:flex justify-center shadow-lg rounded max-w-full mh-auto border-none mt-20 object-fit:cover  ">
        <div className="hidden md:block">
          <img
            src="https://cdn.dribbble.com/users/577645/screenshots/15309171/media/3efa6a481a2f75f81c9724007c46ffa1.jpg?compress=1&resize=400x400"
            alt=""
          />
        </div>
      </section>
    </div>
  );
};
export default HeroSection;
