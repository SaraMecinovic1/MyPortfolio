import Link from "../../assets/link.png";
import GitHubIcon from "../../assets/giticon.png";
import FinansmartMac from "../../assets/finansmartMac.png";

const FinasmartPage = () => {
  return (
    <div className="w-full min-h-screen p-5 bg-[#f8f9fa] flex flex-col items-center justify-center font-inter">
      <div className="w-[80%] mt-20  xl:mt-20  flex flex-col lg:flex-row gap-7 h-full  ">
        {/* MacBook Mockup */}
        <div className="w-full lg:w-[50%] xl:w-[50%] h-full flex justify-center">
          <img
            src={FinansmartMac}
            alt="Macbook mockup"
            className="min-w-[430px] lg:min-w-[700px] lg:mr-[50px] xl:mr-0 xl:w-auto h-full object-cover"
          />
        </div>

        {/* Info Section */}
        <div className="w-full lg:w-[50%] xl:w-[40%] lg:mt-0 text-center lg:text-left flex flex-col justify-between">
          <h1 className="text-4xl font-semibold text-primary">Finansmart</h1>
          <div className="mt-3 flex flex-row justify-center lg:justify-start gap-3 mb-7">
            {/* Link to website */}
            <a
              href="https://ai-expensestrackerr.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-primary bg-primary p-2 rounded-lg"
            >
              <img src={Link} alt="Website link" className="w-[18px]" />
            </a>

            {/* Link to GitHub repository */}
            <a
              href="https://github.com/SaraMecinovic1/ai-expense-tracker"
              target="_blank"
              rel="noopener noreferrer"
              className="border-primary bg-primary p-2 rounded-lg"
            >
              <img src={GitHubIcon} alt="GitHub link" className="w-[18px]" />
            </a>
          </div>

          <p className="text-lg text-gray-700 mt-2">
            Finansmart is a web application that allows users to track their
            personal finances. The app offers a wide range of features,
            including adding budgets, tracking income, and viewing expenses. One
            of the most exciting features is the{" "}
            <span className="font-semibold">AI</span> that provides
            recommendations based on the user's current financial status.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            The main functionality of the app is to allow users to monitor and
            manage their financial data efficiently. The app provides insights
            and personalized advice to help users better manage their finances.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            This project was developed using{" "}
            <span className="font-semibold">React</span> and{" "}
            <span className="font-semibold">Next.js</span> for efficient
            rendering and performance.{" "}
            <span className="font-semibold">Clerk</span> was used for user
            authentication, and the data is stored in{" "}
            <span className="font-semibold">Neon Database</span>, using{" "}
            <span className="font-semibold">Drizzle ORM</span> for efficient
            data management. The{" "}
            <span className="font-semibold">OpenAI API</span> is integrated for
            the AI features, offering real-time suggestions based on financial
            data. The app also uses
            <span className="font-semibold"> Tailwind CSS</span> for styling and{" "}
            <span className="font-semibold">Radix UI</span> components for a
            modern, accessible interface.
          </p>
          <hr className="w-full mt-4 border-[1.5px] border-primary" />
          <p className="text-lg text-gray-700 mt-4 mb-5 md:mb-0">
            Through this project, I became familiar with more advanced
            techniques for managing global state in applications. I also
            improved my skills in database integration and user authentication
            in real-world projects, which significantly boosted my ability to
            build scalable and efficient apps.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinasmartPage;
