import Gym from "../../assets/gym.png";
import Link from "../../assets/link.png";
import GitHubIcon from "../../assets/giticon.png";

const GymPage = () => {
  return (
    <div className="w-full min-h-screen p-5 bg-[#f8f9fa] flex flex-col items-center justify-center font-inter">
      <div className="w-[80%] mt-20 xl:mt-0 flex flex-col lg:flex-row gap-7 h-full ">
        {/* MacBook Mockup */}
        <div className="w-full lg:w-[50%] xl:w-[50%] h-full flex justify-center lg:mt-20">
          <img
            src={Gym}
            alt="Gym website mockup"
            className="min-w-[430px] lg:min-w-[700px] lg:mr-[50px] xl:mr-0 xl:w-auto h-full object-cover"
          />
        </div>

        {/* Info Section */}
        <div className="w-full lg:w-[50%] lg:mt-[100px] xl:w-[40%] text-center lg:text-left flex flex-col justify-between">
          <h1 className="text-4xl font-semibold text-primary">Evo Gym</h1>
          <div className="mt-3 flex flex-row justify-center lg:justify-start gap-3 mb-7">
            {/* Link to website */}
            <a
              href="https://evogym-sm.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-primary bg-primary p-2 rounded-lg"
            >
              <img src={Link} alt="Website link" className="w-[18px]" />
            </a>

            {/* Link to GitHub repository */}
            <a
              href="https://github.com/SaraMecinovic1/gym-website"
              target="_blank"
              rel="noopener noreferrer"
              className="border-primary bg-primary p-2 rounded-lg"
            >
              <img src={GitHubIcon} alt="GitHub link" className="w-[18px]" />
            </a>
          </div>

          <p className="text-lg text-gray-700 mt-2">
            EvoGym is a web application designed as an informational platform
            for a gym. The main focus was on building an intuitive and
            responsive user interface, ensuring optimal viewing experience on
            all devices, especially mobile ones with a{" "}
            <span className="font-semibold">mobile-first </span>approach.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            The project is built using{" "}
            <span className="font-semibold">TypeScript</span> for added type
            safety and reliability. For styling, I used{" "}
            <span className="font-semibold">Tailwind CSS</span> to create a
            modern, clean, and responsive design.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            The app utilizes <span className="font-semibold">React</span> to
            handle user interactions efficiently, with smooth transitions and
            animations powered by{" "}
            <span className="font-semibold">Framer Motion</span>.
          </p>
          <hr className="w-full mt-4 border-[1.5px] border-primary" />
          <p className="text-lg text-gray-700 mt-4 mb-5 md:mb-0">
            Through this project, I focused on perfecting responsive web design
            and creating an efficient, mobile-first interface for users to
            navigate easily and enjoyably.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GymPage;
