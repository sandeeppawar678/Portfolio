import { useState } from "react";
import { GoCodeReview } from "react-icons/go";
import { Link as ScrollLink, animateScroll } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    "About",
    "Skills",
    "Experience",
    "Education",
    "Projects",
    "Certifications",
    "Contact",
  ];

  const scrollToTop = () => {
    animateScroll.scrollToTop();
    setIsOpen(false);
  };

  return (
    <nav className="w-full py-6 bg-transparent z-50 relative">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div
          className="flex items-center space-x-3 cursor-pointer"
          onClick={scrollToTop}
        >
          <GoCodeReview className="text-neutral-300 text-2xl md:text-3xl" />
          <span className="text-neutral-300 text-base md:text-2xl font-semibold">
            Sandeep | Full Stack Dev
          </span>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg text-neutral-400 hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {navItems.map((item, index) => (
            <li key={index}>
              <ScrollLink
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-80}
                className="text-neutral-300 hover:text-cyan-600 cursor-pointer"
              >
                {item}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-neutral-900 bg-opacity-90 z-50">
          <ul className="flex flex-col space-y-2 p-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <ScrollLink
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="block py-2 px-3 text-neutral-300 rounded hover:bg-neutral-700 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
