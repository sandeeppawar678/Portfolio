import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { TECHNOLOGIES } from "../constants/content";

// TechCard Component (Framer Motion boxShadow)
const TechCard = ({ icon, name }) => (
  <motion.div
    initial={{ opacity: 0.9, scale: 0.98, y: 20, boxShadow: "0 0 0 rgba(0,0,0,0)" }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    whileHover={{
      scale: 1.06,
      rotate: 2,
      boxShadow: "0 0 30px rgba(0,234,255,0.9)",
      transition: { duration: 0.25, ease: "easeOut" },
    }}
    whileTap={{ scale: 0.96 }}
    transition={{ duration: 0.35 }}
    className="
      flex flex-col items-center justify-center p-5 
      bg-neutral-900 rounded-xl
      border border-cyan-400/20
      transition-transform
    "
  >
    <img src={icon} alt={name} className="w-12 h-12 mb-3" />
    <span className="text-neutral-200 text-sm text-center">{name}</span>
  </motion.div>
);

const SkillCategory = ({ title, technologies }) => (
  <div>
    <h3 className="text-xl font-semibold mb-4 text-cyan-300">{title}</h3>
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {technologies.map((tech, index) => (
        <TechCard key={index} icon={tech.icon} name={tech.name} />
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <Element name="skills" className="border-b border-neutral-900 pb-20">
      <motion.h1
        initial={{ opacity: 0, y: -80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="my-10 text-center text-4xl font-semibold"
      >
        Skills
      </motion.h1>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {Object.keys(TECHNOLOGIES).map((category) => (
            <div
              key={category}
              className="
                p-6 bg-neutral-900 rounded-2xl
                border border-cyan-400/20
                transition-shadow duration-300
              "
            >
              <SkillCategory
                title={category}
                technologies={TECHNOLOGIES[category]}
              />
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Skills;
