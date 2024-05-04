// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.jpeg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/Shoppiz.png";
import projectImage2 from "./assets/projects/Swipstory.png";
import projectImage3 from "./assets/projects/Ideabook.png";
import projectImage4 from "./assets/projects/jobs.png";
import projectImage5 from "./assets/projects/photoeditor.png";
import projectImage6 from "./assets/projects/rockpapergame.png";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Akshit Sharma",
  tagline: "I build things for web",
  img: profile,
  about: `Hello there! 👋 I'm Akshit Sharma, a passionate junior full stack web developer with a love for crafting engaging digital experiences. With a solid foundation in both front-end and back-end technologies, I'm eager to contribute to dynamic projects and continue learning and growing in this ever-evolving field.

I bring 2 years of experience working with HTML, CSS, and JavaScript to create responsive and intuitive user interfaces. Whether it's bringing designs to life or optimizing performance, I thrive on the creative challenges of front-end development.

On the back end, I'm proficient in languages like JavaScript (Node.js),c++, etc. and databases such as  SQL, MongoDB. I enjoy building robust APIs, handling server-side logic, and ensuring smooth data flow to bring applications to life.

Collaboration is key to me, and I thrive in team environments where ideas are shared freely and diverse perspectives are valued. I'm excited to leverage my skills and enthusiasm to contribute meaningfully to innovative projects and learn from experienced mentors along the way.

Let's connect and build something amazing together!`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/akshit-s-b1b28821b/",
  github: "https://github.com/ASKHT",
  twitter: "https://twitter.com/sharma_aks96757",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Backend  Developer",
    Company: `Varcons Technology`,
    Location: "Bengaluru",
    Type: "Intern",
    Duration: "FEB 2023 - APR 2023",
  },
  {
    Position: "Trainee",
    Company: `Cuvette`,
    Location: "Bengaluru",
    Type: "Apprenticeship",
    Duration: "NOV 2023 - present",
  }
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Bachelor in Information Science and engineering",
    Company: "Aacharya Institute",
    Location: "Bengaluru",
    Type: "Full Time",
    Duration: "AUG 2019 - 2013",
  }
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Shoppiz",
    image: projectImage1,
    description: `This is an e-commerce platform for clothes. It includes various features including sorting, filtering, payment via Razorpay, and order details, as well as customer details.`,
    techstack: "React,Tailwind css, JavaScript,node js, express.js,jwt,razorpayapi,MongoDb,Reduxtoolkit",
    previewLink: "https://shoppiz-frontend.vercel.app/",
    githubLink: "https://github.com/ASKHT/ShoppizFrontend",
  },
  {
    title: "Swipstory",
    image: projectImage2,
    description: `It is a social media platform where you can share your posts, and others can view them. You can also edit your posts, and others can like or bookmark them.`,
   techstack: "React,Modular css, JavaScript,node js, express.js,jwt,MongoDb,Reduxtoolkit",
    previewLink: "https://swipstory.netlify.app/",
    githubLink: "https://github.com/ASKHT/akshits349-gmail.com_cuvette_final_evaluation_oct",
  },
  {
    title: "Ideabook",
    image: projectImage3,
    description: `Welcome to Pocket Notes, your innovative idea organization platform designed to streamline your note-taking experience. With Pocket Notes, you can effortlessly organize your thoughts, brainstorm ideas, and manage tasks efficiently.`,
    techstack: "React,JavaScript,localstorage",
    previewLink: "https://pocket-notes-wheat.vercel.app/",
    githubLink: "https://github.com/ASKHT/Pocket-Notes",
  },
  {
    title: "jobsterz",
    image: projectImage4,
    description: `Welcome to JobSeeker, your one-stop platform for finding job opportunities across different industries. Browse and search for jobs easily, check out detailed job descriptions, Our platform is designed to make your job search experience simple and hassle-free.`,
    techstack: "MogoDb,jwt,react nodejs,expressjs,modularcss,HTML",
    previewLink: "https://jobsterz.netlify.app/",
    githubLink: "https://github.com/ASKHT/jobsfrontend",
  },
  {
    title: "Photo Editor",
    image: projectImage5,
    description: `A lightweight photo editor built with JavaScript for quick and easy image adjustments.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://askht.github.io/Phot_Editor_using_JS/",
    githubLink: "https://github.com/ASKHT/Phot_Editor_using_JS",
  },
  {
    title: "Rock paper scissor game",
    image: projectImage6,
    description: `Web Based Stone Paper Scissor game implementation.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://askht.github.io/cuvett-rock-paper-game/",
    githubLink: "https://github.com/ASKHT/cuvett-rock-paper-game",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "akshits349@gmail.com",

};
