import Spotify from "../../assets/spotify.png";
import Link from "../../assets/link.png";
import GitHubIcon from "../../assets/giticon.png";

const SpotifyPage = () => {
  return (
    <div className="w-full min-h-screen p-5 bg-[#f8f9fa] flex flex-col items-center justify-center font-inter">
      <div className="w-[80%] mt-20 xl:mt-0 flex flex-col lg:flex-row gap-7 h-full ">
        {/* MacBook Mockup */}
        <div className="w-full lg:w-[50%] xl:w-[50%] h-full flex justify-center mt-20">
          <img
            src={Spotify}
            alt="Gym website mockup"
            className="min-w-[430px] lg:min-w-[700px] lg:mr-[50px] xl:mr-0 xl:w-auto h-full object-cover"
          />
        </div>

        {/* Info Section */}
        <div className="w-full lg:w-[50%] lg:mt-[100px] xl:w-[40%] text-center lg:text-left flex flex-col justify-between">
          <h1 className="text-4xl font-semibold text-primary">Spotify Clone</h1>
          <div className="mt-3 flex flex-row justify-center lg:justify-start gap-3 mb-7">
            {/* Link to website */}
            <a
              href="https://spotifyclone-sm.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-primary bg-primary p-2 rounded-lg"
            >
              <img src={Link} alt="Website link" className="w-[18px]" />
            </a>

            {/* Link to GitHub repository */}
            <a
              href="https://github.com/SaraMecinovic1/Spotify-clone"
              target="_blank"
              rel="noopener noreferrer"
              className="border-primary bg-primary p-2 rounded-lg"
            >
              <img src={GitHubIcon} alt="GitHub link" className="w-[18px]" />
            </a>
          </div>

          <p className="text-lg text-gray-700 mt-2">
            Spotify Clone is a web application created as an imitation of the
            popular music streaming platform. The main focus of this project was
            on developing a responsive interface with a{" "}
            <span className="font-semibold">mobile-first</span> approach,
            ensuring an optimal experience on all devices.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            The application is developed using{" "}
            <span className="font-semibold">React</span> for efficient user
            interaction management and{" "}
            <span className="font-semibold">useContext</span> for the global
            state of the application. Users can listen to music through the
            integrated audio player, with functionalities like play and pause.{" "}
            <span className="font-semibold">Framer Motion</span> was used to
            implement smooth animations and transitions, making the user
            interface dynamic and interactive.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            <span className="font-semibold">Tailwind CSS</span> was used for the
            visual styling of the application, enabling fast and flexible
            creation of a modern and clean design.
          </p>
          <hr className="w-full mt-4 border-[1.5px] border-primary" />
        </div>
      </div>
    </div>
  );
};

export default SpotifyPage;
