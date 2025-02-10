import MyPhoto from "../../assets/cvImg.jpeg";

const AboutMePage = () => {
  return (
    <section id="about">
      <div className="w-full h-[100vh] mb-0 px-5 flex  justify-center items-center flex-col md:flex-row gap-3 font-inter">
        {/* Slika */}
        <div className="max-w-[400px] lg:mr-10  max-h-[450px] md:w-[370px] md:h-[440px] lg:h-[600px] m-5 flex justify-center">
          <img
            src={MyPhoto}
            alt="My photo."
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        {/* INFO */}
        <div className="max-w-[600px]  lg:ml-10 h-auto md:w-[500px] p-5 flex flex-col justify-start md:items-start">
          <h1 className="text-3xl md:text-4xl font-semibold mb-3 text-primary">
            ABOUT ME{" "}
          </h1>
          <hr className="w-full mb-10 border-[1.5px] border-primary" />
          <p className="text-[16px] md:text-[18px] text-gray-800 text-left md:text-left">
            My name is Sara Mecinović, and I am a Frontend Developer. I love
            transforming ideas into visually appealing and functional web
            interfaces using JavaScript, React, and TypeScript. My focus is on
            creating intuitive and responsive applications while optimizing the
            user experience. My goal is to create dynamic and interactive web
            applications through innovative solutions and modern technology that
            not only look great but also provide a flawless user experience.
          </p>

          {/* <h1 className="text-2xl md:text-md font-semibold mb-1 mt-5 text-primary">
            EDUCATION{" "}
          </h1>
          <div>
            <h1 className="font-semibold text-lg text-gray-800">
              High School: <span className="font-medium">Medical High School</span>{" "}
            </h1>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutMePage;
