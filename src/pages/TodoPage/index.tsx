import Todo from "../../assets/todo.png";
import Link from "../../assets/link.png";
import GitHubIcon from "../../assets/giticon.png";

const TodoPage = () => {
  return (
    <div className="w-full min-h-screen p-5 bg-[#f8f9fa] flex flex-col items-center justify-center font-inter">
      <div className="w-[80%]  mt-20 xl:mt-0 flex flex-col lg:flex-row gap-7 h-full ">
        {/* MacBook Mockup */}
        <div className="w-full  lg:w-[50%] xl:w-[50%] h-full flex justify-center mt-20">
          <img
            src={Todo}
            alt="Gym website mockup"
            className="min-w-[430px] lg:min-w-[700px] lg:mr-[50px] xl:mr-0 xl:w-auto h-full object-cover"
          />
        </div>

        {/* Info Section */}
        <div className="w-full lg:w-[50%]  lg:mt-[100px] xl:w-[40%] text-center lg:text-left flex flex-col justify-between">
          <h1 className="text-4xl font-semibold text-primary">ToDo App</h1>
          <div className="mt-3 flex flex-row justify-center lg:justify-start gap-3 mb-7">
            {/* Link to website */}
            <a
              href="https://todo-react-sm.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-primary bg-primary p-2 rounded-lg"
            >
              <img src={Link} alt="Website link" className="w-[18px]" />
            </a>

            {/* Link to GitHub repository */}
            <a
              href="https://github.com/SaraMecinovic1/todo-list-TS"
              target="_blank"
              rel="noopener noreferrer"
              className="border-primary bg-primary p-2 rounded-lg"
            >
              <img src={GitHubIcon} alt="GitHub link" className="w-[18px]" />
            </a>
          </div>

          <p className="text-lg text-gray-700 mt-2">
            The Todo App is a task management web application that allows users
            to add, delete, and mark tasks as completed. The application
            provides an intuitive interface for tracking tasks. This app was
            built with a focus on usability and smooth interactions, ensuring an
            enjoyable user experience.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            The project is developed using{" "}
            <span className="font-semibold">TypeScript</span> for enhanced type
            safety.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            Users can log in and register using{" "}
            <span className="font-semibold">Kindle</span> for authentication.
            The interface is built with{" "}
            <span className="font-semibold">MUI</span> for Material Design
            components and <span className="font-semibold">Tailwind CSS</span>{" "}
            for styling, ensuring a modern and responsive design.
          </p>

          <hr className="w-full mt-4 border-[1.5px] border-primary" />
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
