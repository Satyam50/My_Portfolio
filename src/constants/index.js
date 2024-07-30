import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate frontend developer with a flair for creating robust and scalable web applications. My skill set shines in front-end technologies like React and Next.js, complemented by a solid foundation in back-end technologies such as Node.js, MySQL, and MongoDB. Driven by a commitment to innovation, I aim to leverage my expertise to develop cutting-edge solutions that propel business growth and deliver unparalleled user experiences.`;

export const ABOUT_TEXT = `I am a final year B.Tech student with a robust understanding and practical experience in the MERN stack, computer networks (CN), database management systems (DBMS), and data structures and algorithms (DSA). Over the past three years, I have diligently honed my skills in these areas through both academic coursework and hands-on projects. My expertise encompasses developing full-stack applications, designing efficient database schemas, optimizing algorithms, and ensuring seamless network communication. I am passionate about leveraging my knowledge to build innovative solutions and contribute effectively to the tech industry.`;

export const EXPERIENCES = [
  {
    year: "May 2024 - June 2024",
    role: "Frontend Developer",
    company: "PW Private ltd.",
    description: `Worked as a frontend developer for the Health Application, focusing on creating a user-friendly interface for nutrition and diet tracking. Developed responsive and interactive features to enhance the overall user experience.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  /*{
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },*/
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: project1,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: [
      "HTML",
      "CSS",
      "React + Vite",
      "Tailwind",
      "Motion Framework",
    ],
    githubLink:"https://github.com/Satyam50/My_Portfolio.git",
    
  },
  {
    title: "Movie Recommendation System",
    image: project2,
    description:
      "A simple movie recommendation system that selects a movie randomly from a predefined list of popular titles. This system provides quick and easy recommendations for users looking for something to watch",
    technologies: ["HTML", "CSS", "Python", "Jupyter Notebook"],
    githubLink: "https://github.com/Satyam50/MOVIE_RECOMMENDER1",
  },
  {
    title: "StockHub",
    image: project3,
    description:
      "An inventory management system designed to streamline the tracking and management of products. It provides features for adding, listing, editing, and deleting inventory items, ensuring efficient and organized inventory control",
    technologies: ["HTML", "CSS", "PHP", "JavaScript"],
    githubLink:"https://github.com/Satyam50/StockHub.git"
  },

  {
    title: "PropertEase",
    image: project4,
    description:
      "A property finder application that simplifies the process of searching for houses and properties. It allows users to easily find properties based on their preferred locality and specific search criteria",
    technologies: ["React + Vite", "JavaScript", "MongoDb"],
    githubLink:"https://github.com/Satyam50/PropertEase"
  },
];

export const CONTACT = {
  address: "INDIA ",
  phoneNo: "+917080362990 ",
  email: "satyamprajapati808.com",
};
