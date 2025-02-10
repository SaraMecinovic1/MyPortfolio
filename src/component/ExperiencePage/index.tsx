import BonisLabs from "../../assets/bonislabs_logo.jpeg";

const ExpiriencePage = () => {
  return (
    <section id="experience">
      <div className="w-full h-auto min-h-[90vh] bg-[#f8f9fa] px-5 flex flex-col items-center gap-6 font-inter py-10">
        <div className="mt-10">
          <h1 className="text-4xl md:text-[43px] font-semibold text-primary">
            EXPERIENCE
          </h1>
        </div>
        <div className="w-full max-w-[600px] mt-10 sm:mt-20 flex flex-col sm:flex-row justify-center items-center sm:items-start gap-6 sm:gap-10 px-5">
          <img
            src={BonisLabs}
            alt="BonisLabs Logo"
            className="w-[120px] h-[130px]  sm:mt-10 sm:mb-0"
          />
          <div className="w-full max-w-[450px] flex flex-col justify-start gap-3 text-center sm:text-left">
            <h1 className="text-3xl font-medium">BonisLabs</h1>
            <p className="text-md text-gray-700 sm:text-lg">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source.
            </p>

            <h1 className="text-lg font-semibold">
              Tech:{" "}
              <span className="font-normal text-gray-700">
                TypeScript, Mantine, Tanstack Query, Zustand
              </span>
            </h1>

            <h1 className="text-lg font-medium">06/2024 - 12/2024</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpiriencePage;
