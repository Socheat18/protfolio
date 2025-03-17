import data_analysis from "../assets/Data_Analytics.png";
import js from "../assets/js.png";
import java from "../assets/java.png";
import html5 from "../assets/html-5.png";
import python from "../assets/python.png";
import css from "../assets/css-3.png";
import react from "../assets/atom.png";
import Ai_bigData from "../assets/AI_bigdata.png";
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
  const data = [
    { title: "Java", image: java, percentage: 90 },
    { title: "Python", image: python, percentage: 100 },
    { title: "Html5", image: html5, percentage: 100 },
    { title: "CSS", image: css, percentage: 100 },
    { title: "JavaScript", image: js, percentage: 100 },
    { title: "React js", image: react, percentage: 100 },
    { title: "UX/UI Designer", image: UX_UI, percentage: 100 },
  ];

  const data2 = [
    { title: "Numpy", image: Numpy, percentage: 100 },
    { title: "Basic Spring Boot", image: springBoot, percentage: 100 },
    { title: "Pandas", image: Pandas, percentage: 100 },
    { title: "Power BI", image: PowerBI, percentage: 100 },
    { title: "Basic Statistics", image: statsitc, percentage: 100 },
    { title: "Advance Excel", image: excel, percentage: 100 },
    { title: "Flask Restx", image: flask, percentage: 80 },
    { title: "PostgreSQL", image: postgresql, percentage: 80 },
  ];

  return (
    <>
      {/* Section Header */}
      <h1 className="xl:text-3xl text-2xl font-bold text-blue-700 text-center mt-10 underline font-QuickSand opacity-0 animate-fadeInUp">
        Skill
      </h1>

      {/* Professional Skills */}
      <div className="grid xl:grid-cols-12 grid-cols-1 mt-10 font-QuickSand">
        <div className="col-span-5">
          <h2 className="xl:text-2xl text-xl text-start font-bold opacity-0 animate-fadeInUp animation-delay-200">
            Professional Skills
          </h2>
          <p className="xl:text-md text-sm text-start mb-5 opacity-0 animate-fadeInUp animation-delay-300">
            These are some of the skills I've gained through my studies.
          </p>
          <div className="gap-10">
            {data?.map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-md mt-5 hover:-translate-y-1 hover:scale-105 transition duration-200"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-5">
                    <div className="avatar">
                      <div className="xl:w-12 w-8 rounded-lg">
                        <img src={item.image} alt={item.title} />
                      </div>
                    </div>
                    <h3 className="text-center xl:text-xl text-md font-medium">
                      {item.title}
                    </h3>
                  </div>
                  <p className="xl:text-xl text-md">{item.percentage}%</p>
                </div>
                <progress
                  className="progress progress-primary w-full mt-2"
                  value={item.percentage}
                  max="100"
                ></progress>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-6 flex items-center justify-center">
          <img
            src={data_analysis}
            alt="Data Analysis"
            className="w-[400px] h-max rounded-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-200"
          />
        </div>
      </div>

      {/* Additional Skills */}
      <h2 className="xl:text-2xl text-xl text-start font-bold mt-10 opacity-0 animate-fadeInUp animation-delay-400">
        Additional Skills
      </h2>
      <p className="xl:text-md text-sm text-start mb-5 opacity-0 animate-fadeInUp animation-delay-500">
        Here are some additional skills I’ve mastered.
      </p>
      <div className="grid xl:grid-cols-12 grid-cols-1 mt-10 font-QuickSand">
        <div className="col-span-6 flex items-center justify-center">
          <img
            src={Ai_bigData}
            alt="AI Big Data"
            className="w-[500px] h-max rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200"
          />
        </div>
        <div className="col-span-6">
          <div className="gap-10">
            {data2?.map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-md mt-5 hover:-translate-y-1 hover:scale-105 transition duration-200"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-5">
                    <div className="avatar">
                      <div className="xl:w-12 w-8 rounded-lg">
                        <img src={item.image} alt={item.title} />
                      </div>
                    </div>
                    <h3 className="text-center xl:text-xl text-md font-medium">
                      {item.title}
                    </h3>
                  </div>
                  <p className="xl:text-xl text-md">{item.percentage}%</p>
                </div>
                <progress
                  className="progress progress-primary w-full mt-2"
                  value={item.percentage}
                  max="100"
                ></progress>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
