import HtmlImg from "../../assets/html.png";
import CsslImg from "../../assets/css-3.png";
import JsImg from "../../assets/js.png";
import ReactImg from "../../assets/science.png";
import TsImg from "../../assets/typescript.png";
import GitImg from "../../assets/social.png";
import GitHubImg from "../../assets/github.png";
import { ProgressDemo } from "../Progress";

const skills = [
  { img: HtmlImg, name: "HTML", value: 93 },
  { img: CsslImg, name: "CSS", value: 86 },
  { img: JsImg, name: "JavaScript", value: 80 },
  { img: ReactImg, name: "React", value: 85 },
  { img: TsImg, name: "TypeScript", value: 85 },
  { img: GitImg, name: "Git", value: 78 },
  { img: GitHubImg, name: "GitHub", value: 90 },
];

const SkillsPage = () => {
  return (
    <section id="skills">
      <div className="w-full min-h-screen bg-[#f8f9fa] px-5 flex flex-col items-center justify-center gap-6 font-inter pb-20 sm:pb-40">
        <h1 className="mt-32 text-3xl md:text-[43px] font-semibold text-mainText">
          MY SKILLS
        </h1>

        <div className="grid grid-cols-1  gap-6 md:grid-cols-2  w-full max-w-4xl mt-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className=" p-5 rounded-lg shadow-md flex w-full  items-start gap-4"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="h-[35px] md:h-[50px]"
              />
              <div className="w-full">
                <h2 className="text-lg font-semibold text-gray-500 mb-1">
                  {skill.name}
                </h2>
                <ProgressDemo value={skill.value} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
