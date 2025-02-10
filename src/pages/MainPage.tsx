import SkillsPage from "../component/SkillsPage";
import AboutMePage from "../component/AboutMePage";
import HomePage from "../component/HomePage/index";
import NavBar from "../component/NavBar";
import ProjectsPage from "../component/ProjectsPage";
import ExpiriencePage from "../component/ExperiencePage";

const MainPage = () => {
  return (
    <div className="w-full h-auto ">
      <NavBar />
      <HomePage />
      <AboutMePage />
      <SkillsPage />
      <ProjectsPage />
      <ExpiriencePage />
    </div>
  );
};

export default MainPage;
