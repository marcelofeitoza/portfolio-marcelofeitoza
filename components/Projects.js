import React from "react";
import userData from "@constants/data";

export default function Projects() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className="text-4xl md:text-9xl font-bold py-20 text-center md:text-left">
          Projects
        </h1>
      </div>
      {/* Grid starts here */}
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
          {userData.projects.map((proj, idx) => (
            <ProjectCard
              title={proj.title}
              link={proj.link}
              type={proj.type}
              date={proj.date}
              description={proj.description}
              number={`${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ title, link, description, type, date }) => {
  return (
    <a href={link} className="w-full block shadow-2xl scale-95 hover:scale-100 transition duration-300 ease-in-out pb-2">
      <div className="relative overflow-hidden">
        <div className="object-cover">
          <h1 className="absolute top-5 left-4 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
            {title}
          </h1>

          <h1 className="absolute top-5 right-10 text-gray-50 font-bold text-lg bg-yellow-500 rounded-md px-2">
            {date}
          </h1>
          
          <h1 className="pt-16 px-4 bottom-0 left-10 text-gray-800 dark:text-gray-50 font-light text-md h-full">
            <b>{type}</b>
            <br/>
            {description}
          </h1>
        </div>
      </div>
    </a>
  );
};
