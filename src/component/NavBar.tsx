import { useState } from "react";
import useMediaQuery from "../hooks/ useMediaQuery";
import { Link } from "react-router-dom";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

const NavBar = () => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  return (
    <nav>
      <div className="bg-white fixed flex justify-center  top-0 z-30 w-full h-[70px]">
        <div className=" max-w-screen-xl w-full  flex items-center justify-between px-6">
          {/* Logo - Left side */}
          <div className="flex items-center ">
            <h1 className="text-mainText text-3xl font-notoSerif">SARA</h1>
          </div>

          {/* Menu for larger screens */}
          {isAboveMediumScreen && (
            <div className="flex items-center gap-8 font-sans font-medium sm:mr-10">
              <Link
                to="/movies"
                className="text-mainText text-lg hover:text-primary"
              >
                Home
              </Link>
              <Link
                to="/upcoming"
                className="text-mainText text-lg hover:text-primary"
              >
                About me
              </Link>
              <Link
                to="/upcoming"
                className="text-mainText text-lg hover:text-primary"
              >
                Skills
              </Link>
              <Link
                to="/upcoming"
                className="text-mainText text-lg hover:text-primary"
              >
                Projects
              </Link>
              <Link
                to="/upcoming"
                className="text-mainText text-lg hover:text-primary"
              >
                Experience
              </Link>
              <Link
                to="/upcoming"
                className="text-mainText text-lg hover:text-primary"
              >
                Contact me
              </Link>
            </div>
          )}

          {/* Hamburger Icon for smaller screens */}
          {!isAboveMediumScreen && (
            <div className="flex items-center">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <Bars3Icon className="h-7 w-7  text-mainText" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {!isAboveMediumScreen && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[250px] bg-white drop-shadow-xl">
          <div className="flex justify-end p-6">
            <button onClick={() => setIsMenuToggled(false)}>
              <XMarkIcon className="h-7 w-7 text-mainText" />
            </button>
          </div>

          <div className="flex w-full flex-col gap-10 text-xl p-6 pl-12 font-medium">
            <Link
              to="/movies"
              className="text-mainText text-lg hover:text-primary"
            >
              Home
            </Link>
            <Link
              to="/upcoming"
              className="text-mainText text-lg hover:text-primary"
            >
              About me
            </Link>
            <Link
              to="/upcoming"
              className="text-mainText text-lg hover:text-primary"
            >
              Skills
            </Link>
            <Link
              to="/upcoming"
              className="text-mainText text-lg hover:text-primary"
            >
              Projects
            </Link>
            <Link
              to="/upcoming"
              className="text-mainText text-lg hover:text-primary"
            >
              Experience
            </Link>
            <Link
              to="/upcoming"
              className="text-mainText text-lg hover:text-primary"
            >
              Contact me
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
