import React from "react";

const HomePage = () => {
  return (
    <section id="home">
      <div className="w-full h-[100vh] px-10 bg-[#f9faf0] flex justify-center items-center flex-col gap-3 ">
        <h1 className="font-dm text-[27px] font-bold text-primary">
          HEY ! I AM{" "}
        </h1>
        <h1 className=" text-center text-[50px] sm:text-6xl font-dm font-semibold">
          Sara Mecinović
        </h1>
        <h1 className="text-center font-dm text-[27px] font-bold text-primary">
          I'm Frontend Developer
        </h1>
      </div>
    </section>
  );
};

export default HomePage;
