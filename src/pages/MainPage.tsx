import AboutMePage from "../component/AboutMePage";
import HomePage from "../component/HomePage/index";
import NavBar from "../component/NavBar";

const MainPage = () => {
  return (
    <div className="w-full h-auto ">
      <NavBar />
      <HomePage />
      <AboutMePage />
    </div>
  );
};

export default MainPage;
