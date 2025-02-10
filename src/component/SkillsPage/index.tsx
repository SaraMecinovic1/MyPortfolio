import HtmlImg from "../../assets/html.png";
import CsslImg from "../../assets/css-3.png";
import JsImg from "../../assets/js.png";
import ReactImg from "../../assets/science.png";
import TsImg from "../../assets/typescript.png";
import GitImg from "../../assets/social.png";
import GitHubImg from "../../assets/github.png";
import Coding from "../../assets/coding.png";
import MobileApp from "../../assets/mobile-development.png";
import Learning from "../../assets/learning.png";

const skills = [
  { img: HtmlImg, name: "HTML", value: 93 },
  { img: CsslImg, name: "CSS", value: 86 },
  { img: JsImg, name: "JavaScript", value: 80 },
  { img: ReactImg, name: "React", value: 85 },
  { img: TsImg, name: "TypeScript", value: 85 },
  { img: GitImg, name: "Git", value: 78 },
  { img: GitHubImg, name: "GitHub", value: 90 },
];

const topics = [
  {
    img: Coding,
    desc: "Creating high-performance web applications that ensure smooth and responsive user experiences.",
  },
  {
    img: MobileApp,
    desc: "Focusing on mobile-first, responsive designs for a seamless experience across all devices.",
  },
  {
    img: Learning,
    desc: "Consistently expanding knowledge of emerging technologies and staying up-to-date with the latest industry trends.",
  },
];

const SkillsPage = () => {
  return (
    <section id="skills">
      <div className="w-full min-h-screen bg-[#f8f9fa] px-5 flex flex-col items-center justify-center gap-6 font-inter pb-20 sm:pb-40">
        <h1 className="mt-20 sm:mt-32 text-3xl md:text-[43px] font-semibold text-mainText">
          MY SKILLS
        </h1>
        <hr className="w-[80%] sm:w-[55%] border-[1.5px] border-primary" />

        <div className="grid grid-cols-1 gap-5 sm:gap-7 md:grid-cols-3 mt-10 max-w-6xl w-auto justify-center">
          {topics.map((topic, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-primary rounded-full p-4">
                <img
                  src={topic.img}
                  alt={`Topic ${index}`}
                  className="h-[60px] w-[60px] object-contain"
                />
              </div>
              <p className="mt-4 text-lg text-gray-700">{topic.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-7 gap-5 sm:gap-7 mt-10 max-w-6xl w-auto justify-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center p-5  w-[100px] h-[100px] md:w-[130px] md:h-[130px]"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="h-[40px] w-[40px] md:h-[60px] md:w-[60px] object-contain"
              />
              <h2 className="text-sm sm:text-lg text-center font-semibold text-gray-700 mt-2">
                {skill.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
