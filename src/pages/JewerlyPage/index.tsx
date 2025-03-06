import Jewerly from "../../assets/jewerly.png";
import Link from "../../assets/link.png";
import GitHubIcon from "../../assets/giticon.png";

const JewerlyPage = () => {
  return (
    <div className="w-full min-h-screen p-5 bg-[#f8f9fa] flex flex-col items-center justify-center font-inter">
      <div className="w-[80%]  mt-20 xl:mt-0 flex flex-col lg:flex-row gap-7 h-full ">
        {/* MacBook Mockup */}
        <div className="w-full  lg:w-[50%] xl:w-[50%] h-full flex justify-center mt-20">
          <img
            src={Jewerly}
            alt="Gym website mockup"
            className="min-w-[430px] lg:min-w-[700px] lg:mr-[50px] xl:mr-0 xl:w-auto h-full object-cover"
          />
        </div>

        {/* Info Section */}
        <div className="w-full lg:w-[50%]  lg:mt-[100px] xl:w-[40%] text-center lg:text-left flex flex-col justify-between">
          <h1 className="text-4xl font-semibold text-primary">Bella Bijoux</h1>
          <div className="mt-3 flex flex-row justify-center lg:justify-start gap-3 mb-7">
            {/* Link to website */}
            <a
              href="https://bellabijoux.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-primary bg-primary p-2 rounded-lg"
            >
              <img src={Link} alt="Website link" className="w-[18px]" />
            </a>

            {/* Link to GitHub repository */}
            <a
              href="https://github.com/SaraMecinovic1/BellaBijoux"
              target="_blank"
              rel="noopener noreferrer"
              className="border-primary bg-primary p-2 rounded-lg"
            >
              <img src={GitHubIcon} alt="GitHub link" className="w-[18px]" />
            </a>
          </div>

          <p className="text-lg text-gray-700 mt-2">
            Bella Bijoux is a web application that allows users to post products
            for sale, view available products, and add items to their wishlist.
            This application represents my final project within the bootcamp,
            during which I gained foundational knowledge in HTML, CSS,
            JavaScript, and React, and it is also my first more complex project.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            The project is developed using{" "}
            <span className="font-semibold">React</span>, leveraging its
            advanced functionality for dynamic user interface management. For
            the database, I used <span className="font-semibold">Firebase</span>
            , which I encountered for the first time, enabling easy user and
            product management in real time.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            For the design of the visual interface, I used{" "}
            <span className="font-semibold">Material UI (MUI)</span>, which
            enables quick implementation of beautiful and responsive components.
            Additionally, I integrated{" "}
            <span className="font-semibold">Formik</span> for efficient form
            management and data validation, while{" "}
            <span className="font-semibold">Yup</span> was used for setting
            validation rules within the forms.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            For better state management and scalability, I used{" "}
            <span className="font-semibold">Redux</span> and{" "}
            <span className="font-semibold">React Redux</span> to globally
            manage the application state and synchronize it across different
            parts of the app.
          </p>

          <hr className="w-full mt-4 border-[1.5px] border-primary" />
          <p className="text-lg text-gray-700 mt-4">
            This project is a great example of my progress in working with
            React, as well as my ability to integrate different technologies to
            create a functional and responsive application.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JewerlyPage;
