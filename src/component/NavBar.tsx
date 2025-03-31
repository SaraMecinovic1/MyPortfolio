import { useEffect, useState } from "react";
import useMediaQuery from "../hooks/ useMediaQuery";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import useSectionStore from "../store/useSectionStore";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const { activeSection, setActiveSection } = useSectionStore();
  const [hasShadow, setHasShadow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 50);

      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "experience",
        "contact",
      ];
      let currentSection = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setActiveSection]);

  return (
    <nav>
      <div
        className={`bg-white fixed flex justify-center top-0 z-30 w-full h-[70px] transition-shadow ${
          hasShadow ? "shadow-md" : ""
        }`}
      >
        <div className="max-w-screen-xl w-full flex items-center justify-between px-6">
          {/* Logo - Left side */}
          <div className="flex items-center">
            <h1
              onClick={() => navigate("/")}
              className="text-mainText text-2xl sm:text-3xl font-dm font-semibold"
            >
              SARA.
            </h1>
          </div>

          {/* Menu for larger screens */}
          {isAboveMediumScreen && (
            <div className="hidden md:flex items-center gap-8 font-medium">
              {[
                "home",
                "about",
                "skills",
                "projects",
                "experience",
                "contact",
              ].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`text-lg ${
                    activeSection === section ? "text-primary" : "text-mainText"
                  } hover:text-primary transition duration-300`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </div>
          )}

          {/* Hamburger Icon for smaller screens */}
          {!isAboveMediumScreen && (
            <div className="flex items-center">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <Bars3Icon className="h-7 w-7 text-mainText" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {!isAboveMediumScreen && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[220px] bg-white drop-shadow-xl">
          <div className="flex justify-end p-6">
            <button onClick={() => setIsMenuToggled(false)}>
              <XMarkIcon className="h-7 w-7 text-mainText" />
            </button>
          </div>

          <div className="mt-6 pl-[50px] flex flex-col gap-6 text-lg font-medium">
            {[
              "home",
              "about ",
              "skills",
              "projects",
              "experience",
              "contact",
            ].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`${
                  activeSection === section ? "text-primary" : "text-mainText"
                } hover:text-primary transition duration-300`}
                onClick={() => setIsMenuToggled(false)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
