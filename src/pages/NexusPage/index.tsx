import Nexus from "../../assets/nexus.png";
import Link from "../../assets/link.png";
import GitHubIcon from "../../assets/giticon.png";

const NexusPage = () => {
  return (
    <div className="w-full min-h-screen p-5 bg-[#f8f9fa] flex flex-col items-center justify-center font-inter">
      <div className="w-[80%]  mt-20 xl:mt-0 flex flex-col lg:flex-row gap-7 h-full lg:items-center">
        {/* MacBook Mockup */}
        <div className="w-full  lg:w-[50%] xl:w-[50%] h-full flex justify-center">
          <img
            src={Nexus}
            alt="Gym website mockup"
            className="min-w-[430px] lg:min-w-[700px] lg:mr-[50px] xl:mr-0 xl:w-auto h-full object-cover"
          />
        </div>

        {/* Info Section */}
        <div className="w-full lg:w-[50%]   lg:mt-[100px] xl:w-[40%] text-center lg:text-left flex flex-col justify-between">
          <h1 className="text-4xl font-semibold text-primary">
            Nexus CSS Clone
          </h1>
          <div className="mt-3 flex flex-row justify-center lg:justify-start gap-3 mb-7">
            {/* Link to website */}
            <a
              href="https://nexussus.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-primary bg-primary p-2 rounded-lg"
            >
              <img src={Link} alt="Website link" className="w-[18px]" />
            </a>

            {/* Link to GitHub repository */}
            <a
              href="https://github.com/SaraMecinovic1/project-1"
              target="_blank"
              rel="noopener noreferrer"
              className="border-primary bg-primary p-2 rounded-lg"
            >
              <img src={GitHubIcon} alt="GitHub link" className="w-[18px]" />
            </a>
          </div>

          <p className="text-lg text-gray-700 mt-2">
            Nexus is a website clone I created as part of my final exam in CSS,
            and it also represents my first programming project. The task was to
            clone the entire design, meaning the CSS of the website. The project
            was developed using only <span className="font-semibold">HTML</span>{" "}
            and <span className="font-semibold">CSS</span>.
          </p>
          <hr className="w-full mt-4 border-[1.5px] border-primary" />
          <p className="text-lg text-gray-700 mt-4">
            This project helped me improve my skills in structuring web pages
            and applying styles to create a visually appealing and functional
            clone of the original website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NexusPage;
