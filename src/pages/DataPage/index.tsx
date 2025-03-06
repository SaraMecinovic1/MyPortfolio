import Data from "../../assets/data.png";
import Link from "../../assets/link.png";
import GitHubIcon from "../../assets/giticon.png";

const DataPage = () => {
  return (
    <div className="w-full min-h-screen p-5 bg-[#f8f9fa] flex flex-col items-center justify-center font-inter">
      <div className="w-[80%] mt-20 xl:mt-0 flex flex-col lg:flex-row gap-7 h-full ">
        {/* MacBook Mockup */}
        <div className="w-full lg:w-[50%] xl:w-[50%] h-full flex justify-center">
          <img
            src={Data}
            alt="Macbook mockup"
            className="min-w-[430px] lg:min-w-[700px] lg:mr-[50px] xl:mr-0 xl:w-auto h-full object-cover"
          />
        </div>

        {/* Info Section */}
        <div className="w-full lg:w-[50%] lg:mt-[100px] xl:w-[40%] text-center lg:text-left flex flex-col justify-between">
          <h1 className="text-4xl font-semibold text-primary">
            Special Users Data
          </h1>
          <div className="mt-3 flex flex-row justify-center lg:justify-start gap-3 mb-7">
            {/* Link to website */}
            <a
              href="https://subclients-sm.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-primary bg-primary p-2 rounded-lg"
            >
              <img src={Link} alt="Website link" className="w-[18px]" />
            </a>

            {/* Link to GitHub repository */}
            <a
              href="https://github.com/SaraMecinovic1/mail-dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="border-primary bg-primary p-2 rounded-lg"
            >
              <img src={GitHubIcon} alt="GitHub link" className="w-[18px]" />
            </a>
          </div>

          <p className="text-lg text-gray-700 mt-2">
            Special Users Data is a web application designed for collecting and
            managing data from special users. Users can submit their{" "}
            <span className="font-semibold">email</span> and{" "}
            <span className="font-semibold">referral code</span>, while the
            application owner can view all submitted data, including the
            submission date, and delete entries if needed.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            The application is built using{" "}
            <span className="font-semibold">React.js</span>, with the user
            interface styled using
            <span className="font-semibold"> Material UI</span> and{" "}
            <span className="font-semibold">Styled Components</span>. User data
            is securely stored in a{" "}
            <span className="font-semibold">Supabase</span> database, ensuring
            efficient data management.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            For validation and notifications,{" "}
            <span className="font-semibold">React Toastify</span> is used, while
            routing is handled with{" "}
            <span className="font-semibold">React Router DOM</span>. The
            application's design is implemented with{" "}
            <span className="font-semibold">Tailwind CSS</span>, providing a
            modern and responsive look. Additionally, date formatting is
            facilitated by <span className="font-semibold">date-fns</span>,
            while development and testing are streamlined using tools like{" "}
            <span className="font-semibold">Vite</span>,
            <span className="font-semibold">ESLint</span>, and{" "}
            <span className="font-semibold">TypeScript</span>.
          </p>
          <hr className="w-full mt-4 border-[1.5px] border-primary" />
          <p className="text-lg text-gray-700 mt-4 mb-5 md:mb-0">
            Through this project, I have gained valuable experience in working
            with databases, managing user data, and optimizing application
            performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DataPage;
