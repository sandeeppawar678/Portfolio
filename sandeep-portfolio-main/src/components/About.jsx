import { useState } from "react";
import { ABOUT_CONTENT } from "../constants/content";
import { Typewriter } from "react-simple-typewriter";
import { Element } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import ResumePDF from "/assets/pdf/resume.pdf";
import ProfileImage from "/assets/images/profile.jpeg";

const animatedContainer = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Spacer to push content below fixed navbar */}
      <div className="h-10 lg:h-14"></div>

      <Element name="about" className="border-b border-neutral-900 pb-8 lg:mb-5">
        <div className="flex justify-center">
          <div className="w-full max-w-4xl px-4 flex flex-col items-center">

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-cyan-400/40 shadow-[0_0_25px_rgba(0,255,255,0.25)] mb-2 cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              <img
                src={ProfileImage}
                alt="Sandeep Pawar"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={animatedContainer(0)}
              initial="hidden"
              animate="visible"
              className=" text-4xl sm:text-5xl font-serif font-light text-white mt-0 mb-8 tracking-tight text-center"
            >
              <span className="bg-gradient-to-r from-cyan-100 via-cyan-300 to-sky-500 bg-clip-text text-transparent font-medium">
              Sandeep Pawar
              </span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              variants={animatedContainer(0.5)}
              initial="hidden"
              animate="visible"
              className="text-2xl sm:text-3xl font-light tracking-tight text-center"
            >
              <span className="text-white">I am a </span>
              <span className="bg-gradient-to-r from-cyan-100 via-cyan-300 to-sky-500 bg-clip-text text-transparent font-medium">
                <Typewriter
                  words={["Full Stack Developer"]}
                  loop={0}
                  cursor
                  cursorStyle=""
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </motion.div>

            {/* About Text */}
            <motion.p
              variants={animatedContainer(1)}
              initial="hidden"
              animate="visible"
              className="max-w-lg py-4 sm:py-6 font-light tracking-wide text-justify text-base sm:text-lg text-neutral-300 leading-relaxed"
            >
              {ABOUT_CONTENT}
            </motion.p>

            {/* Download Resume */}
            <motion.a
              href={ResumePDF}
              download="Sandeep_Pawar_Resume.pdf"
              className="inline-flex items-center mt-4 px-6 py-3 rounded-xl font-semibold text-cyan-100
                         backdrop-blur-xl bg-white/10 border border-cyan-300/40
                         shadow-[0_0_25px_rgba(0,255,255,0.25)]
                         hover:bg-white/20 hover:border-cyan-300/60
                         hover:shadow-[0_0_35px_rgba(0,255,255,0.45)]
                         transition-all duration-300"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <FaDownload className="mr-2 text-lg" />
              Download Resume
            </motion.a>

            {/* Fullscreen Modal */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 cursor-pointer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsOpen(false)}
                >
                  <motion.img
                    src={ProfileImage}
                    alt="Sandeep Pawar"
                    className="max-w-[90%] max-h-[90%] rounded-xl object-cover shadow-2xl"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      </Element>
    </>
  );
};

export default About;
