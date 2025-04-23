import js from "../assets/js.png";
import java from "../assets/java.png";
import html5 from "../assets/html-5.png";
import python from "../assets/python.png";
import css from "../assets/css-3.png";
import react from "../assets/atom.png";
import springBoot from "../assets/Spring Boot.png";
import statsitc from "../assets/statistic.png";
import Numpy from "../assets/Numpy.png";
import PowerBI from "../assets/Power_BI.png";
import Pandas from "../assets/Pandas_logo.png";
import excel from "../assets/excel.png";
import flask from "../assets/flask-logo.png";
import postgresql from "../assets/Postgresql_elephant.png";
import UX_UI from "../assets/UI-UX-Design.png";

export default function Skill() {
  const allSkills = [
    { title: "Java", images: java, percentage: 90 },
    { title: "Python", images: python, percentage: 100 },
    { title: "HTML5", images: html5, percentage: 100 },
    { title: "CSS", images: css, percentage: 100 },
    { title: "JavaScript", images: js, percentage: 100 },
    { title: "React JS", images: react, percentage: 100 },
    { title: "Spring Boot", images: springBoot, percentage: 100 },
    { title: "Flask", images: flask, percentage: 80 },
    { title: "PostgreSQL", images: postgresql, percentage: 80 },
    { title: "Numpy", images: Numpy, percentage: 100 },
    { title: "Pandas", images: Pandas, percentage: 100 },
    { title: "Power BI", images: PowerBI, percentage: 100 },
    { title: "Excel", images: excel, percentage: 100 },
    { title: "Statistics", images: statsitc, percentage: 100 },
    { title: "UX/UI Design", images: UX_UI, percentage: 100 },
  ];

  return (
    <section id="skills" className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold text-blue-700 mb-10">My Skills</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 max-w-6xl mx-auto">
        {allSkills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform"
          >
            <img
              src={skill.images}
              alt={skill.title}
              className="w-12 h-12 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
            <div className="relative w-20 h-20 mx-auto">
              <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 36 36">
                <path
                  className="text-gray-300"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-blue-500"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeDasharray={`${skill.percentage}, 100`}
                  fill="none"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-blue-700 font-bold">
                {skill.percentage}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

