import SkillsPage from "../component/SkillsPage";
import AboutMePage from "../component/AboutMePage";
import HomePage from "../component/HomePage/index";
import NavBar from "../component/NavBar";

const MainPage = () => {
  return (
    <div className="w-full h-auto ">
      <NavBar />
      <HomePage />
      <AboutMePage />
      <SkillsPage />
    </div>
  );
};

export default MainPage;
