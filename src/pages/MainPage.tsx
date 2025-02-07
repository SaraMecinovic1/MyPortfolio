import SkillsPage from "../component/SkillsPage";
import AboutMePage from "../component/AboutMePage";
import HomePage from "../component/HomePage/index";
import NavBar from "../component/NavBar";
import ProjectsPage from "../component/ProjectsPage";

const MainPage = () => {
  return (
    <div className="w-full h-auto ">
      <NavBar />
      <HomePage />
      <AboutMePage />
      <SkillsPage />
      <ProjectsPage />
    </div>
  );
};

export default MainPage;
