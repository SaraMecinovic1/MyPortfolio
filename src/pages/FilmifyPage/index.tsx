import filmifyMac from "../../assets/filmifyMac.png";
import Link from "../../assets/link.png";
import GitHubIcon from "../../assets/giticon.png";

const FilmifyPage = () => {
  return (
    <div className="w-full min-h-screen p-5 bg-[#f8f9fa] flex flex-col items-center justify-center font-inter">
      <div className="w-[80%] mt-20 xl:mt-0  flex flex-col lg:flex-row gap-7 h-full lg:items-center ">
        {/* MacBook Mockup */}
        <div className="w-full lg:w-[50%] xl:w-[50%] h-full flex justify-center">
          <img
            src={filmifyMac}
            alt="Macbook mockup"
            className="min-w-[430px] lg:min-w-[700px] lg:mr-[50px] xl:mr-0 xl:w-auto h-full object-cover"
          />
        </div>

        {/* Info Section */}
        <div className="w-full lg:w-[50%] lg:mt-[100px] xl:w-[40%]  text-center lg:text-left flex flex-col justify-between">
          <h1 className="text-4xl font-semibold text-primary">Filmify</h1>
          <div className="mt-3 flex flex-row justify-center lg:justify-start gap-3 mb-7">
            {/* Link to website */}
            <a
              href="https://filmifycinema.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-primary bg-primary p-2 rounded-lg"
            >
              <img src={Link} alt="Website link" className="w-[18px]" />
            </a>

            {/* Link to GitHub repository */}
            <a
              href="https://github.com/SaraMecinovic1/Filmify-project"
              target="_blank"
              rel="noopener noreferrer"
              className="border-primary bg-primary p-2 rounded-lg"
            >
              <img src={GitHubIcon} alt="GitHub link" className="w-[18px]" />
            </a>
          </div>

          <p className="text-lg text-gray-700 mt-2">
            Filmify is a web application that allows users to easily book
            tickets for movies in cinemas. The application offers a rich set of
            features, including a view of currently playing movies, upcoming
            films, a list of top movies, and the ability to add favorite films
            to a personalized list.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            The main feature of the app is ticket reservation, which allows
            users to select the number of tickets, the date of the screening,
            their seat preferences, and to generate a QR code containing all the
            details of their reservation.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            This project was developed in{" "}
            <span className="font-semibold">TypeScript</span>, which provides a
            higher level of security and efficiency in coding. I used{" "}
            <span className="font-semibold">Supabase</span> for the database,
            while movie data is pulled from{" "}
            <span className="font-semibold">The Movie Database (TMDB) API</span>
            . For managing server-state data in the application, I used{" "}
            <span className="font-semibold">Tanstack React Query</span>, and for
            handling the global state of the app, I implemented{" "}
            <span className="font-semibold">Zustand</span>, which was my first
            time working with this library. Additionally, for data validation, I
            used <span className="font-semibold">Zod</span>, while the styling
            of the app was handled with{" "}
            <span className="font-semibold">Tailwind CSS</span> and{" "}
            <span className="font-semibold">Shadcn</span> components, which
            enabled fast and easy creation of elegant UI components.
          </p>
          <hr className="w-full mt-4 border-[1.5px] border-primary" />
          <p className="text-lg text-gray-700 mt-4 mb-5 md:mb-0">
            Through this project, I became familiar with more advanced
            techniques for managing global state in applications. I also
            enhanced my knowledge of database integration and authentication
            usage in real-world projects, which further improved my ability to
            build scalable applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FilmifyPage;
