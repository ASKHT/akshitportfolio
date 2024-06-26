import React from "react";
import { techStackDetails } from "../Details";
import nodejs from "../assets/techstack/nodejs.png"
import expressjs from "../assets/techstack/expressjs.webp"
import mysql from "../assets/techstack/mysql.png"
import mongodb from "../assets/techstack/mongodb.png"
import vercel from "../assets/techstack/vercel.png"
import netlify from "../assets/techstack/netlify.png"
function Technologies() {
  const {
    html,
    css,
    js,
    react,
    redux,
    tailwind,
    bootstrap,
    sass,
    vscode,
    git,
    github,
    npm,
    postman,
    figma,
  } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20 bg-[#0E1327]  ">
      <section>
        <h1 className="text-2xl text-white dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-white py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={html} title="html" alt="" />
        <img src={css} title="CSS" alt="" />
        <img src={js} title="JavaScript" alt="" />
        <img src={react} title="React" alt="" />
        <img src={redux} title="Redux" alt="" />
        <img src={tailwind} title="Tailwind CSS" alt="" />
        <img src={bootstrap} title="Bootstrap" alt="" />
        <img src={sass} title="SASS" alt="" />
        <img src={ nodejs} title="SASS" alt="" />
        <img src={ expressjs} title="SASS" alt="" />
        <img src={ mysql} title="SASS" alt="" />
        <img src={ mongodb} title="SASS" alt="" />
        <img src={ vercel} title="SASS" alt="" />
        <img src={ netlify} title="SASS" alt="" />
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-white dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={vscode} title="Visual Studio Code" alt="" />
        <img src={git} title="Git" alt="Git" />
        <img src={github} title="Github" alt="Github" />
        <img src={figma} title="Figma" alt="Figma" />
        <img src={npm} title="NPM" alt="NPM" />
        <img src={postman} title="Postman" alt="Postman" />
      </section>
    </main>
  );
}

export default Technologies;
