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
  },
  {
    id: 2,
    image: FinsmartImg,
    alt: "Finsmart project preview",
    title: "Finsmart Web App",
  },
  {
    id: 3,
    image: DataImg,
    alt: "Data project preview",
    title: "Special users data Web App",
  },
  {
    id: 4,
    image: GymImg,
    alt: "Data project preview",
    title: "EvoGym Web Site",
  },
  {
    id: 5,
    image: SpotifyImg,
    alt: "Data project preview",
    title: "EvoGym Web Site",
  },
  {
    id: 6,
    image: Todo,
    alt: "Data project preview",
    title: "EvoGym Web Site",
  },
  {
    id: 7,
    image: Bella,
    alt: "Data project preview",
    title: "EvoGym Web Site",
  },
  {
    id: 8,
    image: Nexus,
    alt: "Data project preview",
    title: "EvoGym Web Site",
  },
];

const ProjectsPage = () => {
  return (
    <section id="projects">
      <div className="w-full h-[100vh] px-10 flex font-inter items-center flex-col gap-3">
        <h1 className="mt-32 text-3xl md:text-[43px] font-semibold text-primary">
          MY PROJECTS
        </h1>
        <h2 className="text-lg italic">
          “Talk is cheap. Show me the code.” – Linus Torvalds
        </h2>

        <div className="w-full h-full  grid grid-cols-4 gap-5 mt-20">
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-[440px] mb-5  h-[400px] rounded-lg shadow-lg flex flex-col cursor-pointer relative group"
            >
              <div className="w-full h-[85%] relative ">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-0 flex justify-center items-center text-white font-semibold text-xl rounded-lg group-hover:opacity-95 transition-opacity">
                  Click for more
                </div>
              </div>
              <h3 className="text-xl mt-4 text-center">{project.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
