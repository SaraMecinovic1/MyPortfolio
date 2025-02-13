import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importuj useNavigate
import FilmifyImg from "../../assets/filmify.jpeg";
import FinsmartImg from "../../assets/finsmart.jpeg";
import DataImg from "../../assets/data.jpeg";
import GymImg from "../../assets/gym.jpeg";
import SpotifyImg from "../../assets/spotify.jpeg";
import Todo from "../../assets/todo.jpeg";
import Bella from "../../assets/bella.jpeg";
import Nexus from "../../assets/nexus.jpeg";

const projects = [
  {
    id: 1,
    image: FilmifyImg,
    alt: "Filmify project preview",
    title: "Filmify Web App",
    route: "/filmify",
  },
  {
    id: 2,
    image: FinsmartImg,
    alt: "Finsmart project preview",
    title: "Finansmart Web App",
    route: "/finansmart",
  },
  {
    id: 3,
    image: DataImg,
    alt: "Data project preview",
    title: "Special users data Web App",
    route: "/data",
  },
  {
    id: 4,
    image: GymImg,
    alt: "Gym project preview",
    title: "EvoGym Web Site",
    route: "/evogym",
  },
  {
    id: 5,
    image: SpotifyImg,
    alt: "Spotify clone",
    title: "Spotify clone",
    route: "/spotify",
  },
  { id: 6, image: Todo, alt: "To Do App", title: "To Do App", route: "/todo" },
  {
    id: 7,
    image: Bella,
    alt: "Jewelry project preview",
    title: "Jewerly Web App",
    route: "/jewerly",
  },
  {
    id: 8,
    image: Nexus,
    alt: "Nexus project preview",
    title: "Nexus Web Site",
    route: "/nexus",
  },
];

const ProjectsPage = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);
  const navigate = useNavigate();

  const loadMore = () => {
    setVisibleProjects(projects.length);
  };

  return (
    <section id="projects">
      <div className="w-full min-h-screen mb-20 px-10 flex font-inter items-center flex-col gap-3">
        <h1 className="mt-32 text-4xl md:text-[43px] font-semibold text-primary">
          MY PROJECTS
        </h1>
        <h2 className="text-lg xl:text-xl italic text-center">
          “Talk is cheap. Show me the code.” – Linus Torvalds
        </h2>

        <div className="w-full max-w-7xl mx-auto h-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-10  mt-20">
          {projects.slice(0, visibleProjects).map((project) => (
            <div
              key={project.id}
              className="w-full max-w-[460px] mx-auto mb-5 h-[380px] rounded-lg shadow-lg flex flex-col cursor-pointer relative group transition-transform transform hover:-translate-y-3"
              onClick={() => navigate(project.route)}
            >
              <div className="w-full h-[85%] relative">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-0 flex justify-center items-center text-white font-semibold text-xl rounded-lg group-hover:opacity-95 transition-opacity">
                  Click for more details.
                </div>
              </div>
              <h3 className="text-xl mt-4 text-center">{project.title}</h3>
            </div>
          ))}
        </div>

        {visibleProjects < projects.length && (
          <button
            onClick={loadMore}
            className="mt-10 px-8 py-2 text-white bg-primary rounded-3xl shadow-md hover:bg-opacity-90 transition"
          >
            Load more...
          </button>
        )}
      </div>
    </section>
  );
};

export default ProjectsPage;
