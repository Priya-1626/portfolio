import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. 
I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, Laravel, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, Laravel, and MongoDB.
My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. 
I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. 
Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EDUCATION = [
  {
    year: "2023 - 2025",
    role: "Master of Computer Application",
    college: "Goa University",
    cgpa: "6.0",
  },
  {
    year: "2020 - 2023",
    role: "Bachelor in Computer Science",
    college: "Government College of Arts, Science and Commerce, Sanquelim-Goa",
    cgpa: "7.89",
  },
  {
    year: "2018 - 2020",
    role: "HSSC ( Science, PCMB )",
    college: "Mormugao Education Society, Zuarinagar",
    cgpa: "60.33%",
  },
  {
    year: "April 2018",
    role: "Secondary School Certificate",
    college: "Our Lady of Desterro High School, Vasco-Goa",
    cgpa: "74.66%",
  },
];

export const PROJECTS = [
  {
    title: "Avsar",
    image: project1,
    description:
      `A platform connecting daily wage workers with employers
    seeking temporary help, allowing workers to find jobs quickly
    and easily, without the need to wait around for opportunities.
    This platform streamlines the process of connecting employers
    with skilled labor, ensuring that both parties can meet their
    needs efficiently and effectively.`,
    technologies: ["MongoDB", "ExpressJs", "React", "Node.js"],
    role: "Frontend Developer",
  },
  {
    title: "Goa Cafe Management system",
    image: project2,
    description:
      `A sophisticated web application designed to streamline and
    optimize hotel operations. This system encompasses a
    comprehensive range of functionalities to ensure seamless
    management and an enhanced guest experience.`,
    technologies: ["Java", "MySQL"],
    role: "FullStack Developer",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "Tailwind CSS", "React.js", "Bootstrap"],
    role: "FullStack Developer",
  },
  {
    title: "CareShare",
    image: project4,
    description:
      `A unified platform that bridges the gap between NGOs and
    donors, facilitating donors to contribute towards variety of
    social causes.`,
    technologies: ["MongoDB", "Express.js", "Node.js", "React.js", "mySQL"],
    role: "Frontend Developer",
  },
];

export const CONTACT = {
  address: "MB 16, Housing Board Colony, Baina, Vasco-Goa ",
  phoneNo: "+91 7249679539 ",
  email: "priyamvadamaurya26@gmail.com",
};
