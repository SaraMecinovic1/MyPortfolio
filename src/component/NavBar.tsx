import { useState, useEffect } from "react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

const NavBar = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
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
  }, []);

  return (
    <nav className="bg-white fixed top-0 z-30 w-full h-[70px] flex justify-center shadow-md">
      <div className="max-w-screen-xl w-full flex items-center justify-between px-6">
        {/* Logo */}
        <h1 className="text-mainText text-3xl font-notoSerif">SARA</h1>

        {/* Navigacija */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          {["home", "about", "skills", "projects", "experience", "contact"].map(
            (section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`text-lg ${
                  activeSection === section ? "text-primary " : "text-mainText"
                } hover:text-primary transition duration-300`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            )
          )}
        </div>

        {/* Hamburger meni za manje ekrane */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
            <Bars3Icon className="h-7 w-7 text-mainText" />
          </button>
        </div>
      </div>

      {/* Mobile meni */}
      {isMenuToggled && (
        <div className="fixed right-0 top-0 z-40 h-full w-[250px] bg-white drop-shadow-xl flex flex-col p-6">
          <button onClick={() => setIsMenuToggled(false)} className="self-end">
            <XMarkIcon className="h-7 w-7 text-mainText" />
          </button>
          <div className="mt-6 flex flex-col gap-6 text-lg font-medium">
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
                className={`${
                  activeSection === section ? "text-primary " : "text-mainText"
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
