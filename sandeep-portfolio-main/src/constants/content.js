import html5Icon from "/assets/icons/frontend/html5.svg";
import css3Icon from "/assets/icons/frontend/css3.svg";
import jsIcon from "/assets/icons/frontend/js.svg";
import reactIcon from "/assets/icons/frontend/react.svg";
import reduxIcon from "/assets/icons/frontend/redux.svg";
import bootstrapIcon from "/assets/icons/frontend/bootstrap.svg";
import tailwindCssIcon from "/assets/icons/frontend/tailwind-css.svg";

import pythonIcon from "/assets/icons/backend/python.svg";
import java from "/assets/icons/backend/java.svg";
import mysqlIcon from "/assets/icons/backend/mysql.svg";
import postgresqlIcon from "/assets/icons/backend/postgresql.svg";
import springbootIcon from "/assets/icons/backend/springboot.svg";
import hibernateIcon from "/assets/icons/backend/hibernate.svg";

import gitIcon from "/assets/icons/others/git.svg";
import githubIcon from "/assets/icons/others/github.svg";
import postmanIcon from "/assets/icons/others/postman.png";

export const ABOUT_CONTENT = `Motivated Full Stack Developer and Bachelor of Engineering student specializing in IT. Skilled in designing, developing, and deploying web and mobile applications, with hands-on experience in full stack development.Proficient in creating responsive, user-friendly interfaces.`;

export const TECHNOLOGIES = {
  Frontend: [
    { icon: html5Icon, name: "HTML5" },
    { icon: css3Icon, name: "CSS3" },
    { icon: jsIcon, name: "JavaScript" },
    { icon: reactIcon, name: "React" },
    { icon: reduxIcon, name: "Redux" },
    { icon: bootstrapIcon, name: "BootStrap" },
    { icon: tailwindCssIcon, name: "Tailwind CSS" },
  ],
  Backend: [
    { icon: java, name: "java" },
    { icon: pythonIcon, name: "Python" },
    { icon: springbootIcon, name: "Spring Boot" },
    { icon: hibernateIcon, name: "Hibernate" },
  ],
  Database: [
    { icon: mysqlIcon, name: "MySQL" },
    { icon: postgresqlIcon, name: "PostgreSQL" },
  ],
  Others: [
    { icon: gitIcon, name: "Git" },
    { icon: githubIcon, name: "GitHub" },
    { icon: postmanIcon, name: "Postman" },
  ],
};

export const EXPERIENCES = [
  {
    year: "Mar 2021 - May 2021",
    role: "Mobile Android App Development",
    company: " Mountreach Solution",
    description: `During this workshop, I gained hands-on experience in Android app development using Android Studio. I learned the fundamentals of building mobile applications and worked on practical exercises that strengthened my understanding of the Android development process..`,
    technologies: ["Core Python", "Java", "Xml"],
  },
  {
    year: "Feb 2025 - Dec 2025",
    role: "Full Stack Developer Trainee",
    company: "Seven Mentor",
    description: `Completed an intensive full stack development program covering frontend, backend, databases, APIs, and deployment. Gained hands-on experience building responsive web applications using HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. Worked on real-time projects, debugging, REST API development, and deploying applications to cloud platforms.`,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "SQL",
      "Java",
      "Bootstrap",
    ],
  },
];

 export const EDUCATION = [
  {
    level: "college",
    institution:
      "Dr. D. Y. Patil College of Engineering and Innovation",
    university: "Savitribai Phule Pune University",
    percentage: "7.30 CGPA",
    year: "2022 - 2025",
    degree: "Computer Engineering",
    location: "Pune, Maharashtra",
  },
  {
    level: "higher-secondary",
    institution:
      "Central Institute of Engineering Plastic and Technology",
    university: "Chennai Board",
    percentage: "85.44%",
    year: "2021",
    degree: "Diploma in Plastic Molding",
    location: "Ahmedabad, Gujarat",
  },
  {
    level: "high-school",
    institution: "R. N. Lathi Vidyalaya, Bhokar",
    university:
      "Maharashtra State Board of Secondary and Higher Secondary Education",
    percentage: "80.60%",
    year: "2018",
    degree: "High School (10th)",
    location: "Bhokar, Maharashtra",
  },
];


export const PROJECTS = [
  {
    title: " Employee Management System",
    description:
      " Developed a full-stack Employee Management System with a React.js frontend and Spring Boot backend, implementing complete CRUD (Create, Read, Update, Delete) functionality through RESTful APIs. Integrated JPA and Hibernate for efficient object–relational mapping and database persistence, ensured seamless client–server communication, and tested API endpoints using Postman for reliability and correctness.",
    technologies: [
      "React JS",
      "Spring Boot",
      "RESTful APIs",
      "JPA",
      "Hibernate",
      "MySQL",
      "Postman",
      "Maven",
      "Git",
    ],
    githubLink: "https://github.com/",
    link: "",
  },

  {
    title: "Car Rental System",
    description:
      " Designed and implemented a fully normalized relational SQL database consisting of five interconnected tables to efficiently manage customers, rentals, payments, and insurance data. Established primary and foreign key relationships to maintain data integrity, and applied advanced SQL techniques including complex joins, nested subqueries, and database views to support optimized querying, reporting, and business analytics.",
    technologies: ["MySql"],
    githubLink: "https://github.com/SanketShelke01/CAR-RENTAL-SYSTEM",
    link: " ",
  },
  {
    title: " Bank Management System ",
    description:
      "Developed a full-stack Bank Management System using React.js for the user interface and Spring Boot for the backend to handle core banking operations including account creation, deposits, withdrawals, and fund transfers. Designed and implemented RESTful APIs to manage transactional workflows and business logic, integrated JPA and Hibernate for secure and efficient data persistence, enforced relational database constraints for data integrity, and validated API functionality using Postman.",
    technologies: [
      "React JS",
      "Spring Boot",
      "RESTful APIs",
      "JPA",
      "Hibernate",
      "MySQL",
      "Postman",
      "Maven",
      "Git",
    ],
    githubLink: "https://github.com/",
    link: "",
  },
  {
    title: " Portfolio",
    description:
      "Developed a personal portfolio website using React.js, implementing core and advanced React concepts such as component-based architecture, JSX, props, state management, hooks, and conditional rendering. Built a responsive and dynamic user interface to showcase projects, technical skills, and professional details, with smooth navigation and reusable components. Deployed the application on GitHub Pages using Git for version control, demonstrating end-to-end development and deployment workflow.",
    technologies: [
      "React JS",
      "BootStrap",
      "Framer Motion",
      "Git",
      "Router DOM",
    ],
    githubLink: "https://github.com/",
    link: "",
  },
];

export const CERTIFICATIONS = [{}];

export const CONTACT = {
  phoneNo: "+91 7741829872",
  email: "sanketshelke149@gmail.com",
  linkedin:
    "https://www.linkedin.com/in/sanket-shelke-aa6399254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  github: "https://github.com/SanketShelke01",
  x: "https://x.com/",
  instagram: "https://www.instagram.com/___sanket.s?igsh=MXRsZjNmcnZneWthZw==",
};
