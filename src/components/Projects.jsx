import Domrra from "../assets/Domrra.jpg";
import DataVue from "../assets/DataVue.jpg";
const Projects = () => {
  const List_Project = [
    {
      title: "Domrra",
      description:
        "An informative platform for reading articles about Khmer culture.Built using React and Spring Boot.",
      gitLink: "https://github.com/raksmeycoding/we_are_khmer_ui.git",
      images: Domrra,
    },
    {
      title: "DataVue",
      description:
        "A data visualization platform that integrates data from multiple sources. Frontend built with React, API powered by Flask Restx.",
      gitLink:
        "https://github.com/ksga-11th-generation-advance-course/data-vue-ui.git",
      images: DataVue,
    },
  ];
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <h2 className="text-4xl font-extrabold text-center text-blue-600">
        My Projects
      </h2>
      <p className="text-xl text-center text-gray-500 mt-4">
        A showcase of my work using different technologies and frameworks
      </p>
      <div className="mt-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {List_Project.map((list, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <img
              src={list.images}
              alt="E-commerce Web Application"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-semibold text-blue-600">
              {list.title}
            </h3>
            <p className="text-gray-600 mt-2">{list.description}</p>
            <a href={list.gitLink} className="text-blue-500 mt-4 inline-block">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
