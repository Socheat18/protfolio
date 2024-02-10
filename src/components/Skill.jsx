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

export default function Skill() {
  const data = [
    {
      title: "java",
      image: java,
      percentage: 90,
    },
    {
      title: "python",
      image: python,
      percentage: 100,
    },
    {
      title: "html5",
      image: html5,
      percentage: 100,
    },
    {
      title: "css",
      image: css,
      percentage: 100,
    },
    {
      title: "JavaScript",
      image: js,
      percentage: 100,
    },
    {
      title: "react js",
      image: react,
      percentage: 100,
    },
  ];

  const data2 = [
    {
      title: "Numpy",
      image: Numpy,
      percentage: 100,
    },
    {
      title: "Basic Spring Boot",
      image: springBoot,
      percentage: 100,
    },
    {
      title: "Pandas",
      image: Pandas,
      percentage: 100,
    },
    {
      title: "Power BI",
      image: PowerBI,
      percentage: 100,
    },
    {
      title: "Basic Statistics",
      image: statsitc,
      percentage: 100,
    },
  ];
  return (
    <>
      <h1 className="xl:text-3xl text-2xl font-bold text-blue-700 text-center mt-10 underline font-QuickSand hover:-translate-y-1 hover:scale-105  duration-200">
        Skill
      </h1>
      <div className="grid xl:grid-cols-12 grid-cols-1 mt-10 font-QuickSand">
        <div className="col-span-5">
          <h2 className="text-2xl text-start font-bold">Professional Skills</h2>
          <p className="text-md  text-start mb-5">
            This is some course I study.
          </p>
          <div className="gap-10">
            {data?.map((item) => (
              <div className="bg-gray-100 p-2 rounded-md mt-5 hover:-translate-y-1 hover:scale-105  duration-200">
                <div className="flex justify-between items-end">
                  <div className="gap-5 flex justify-center items-center">
                    <div className="avatar">
                      <div className="w-10 rounded-lg">
                        <img src={item.image} />
                      </div>
                    </div>
                    <h3 className="text-center text-xl font-medium">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xl">{item.percentage}%</p>
                </div>
                <progress
                  className="progress progress-primary w-full"
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
            alt=""
            className=" w-[400px] h-max rounded-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110  duration-200"
          />
        </div>
      </div>
      <h2 className="text-2xl text-start font-bold mt-10">
        Professional Skills
      </h2>
      <p className="text-md  text-start mb-5">This is some course I study.</p>
      <div className="grid xl:grid-cols-12 grid-cols-1 mt-10 font-QuickSand">
        <div className="col-span-6 flex items-center justify-center">
          <img
            src={Ai_bigData}
            alt="data_analysis"
            className=" w-[500px] h-max rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-200"
          />
        </div>
        <div className="col-span-6">
          <div className="gap-10">
            {data2?.map((item) => (
              <div className="bg-gray-100 p-2 rounded-md mt-5 hover:-translate-y-1 hover:scale-105  duration-200">
                <div className="flex justify-between items-end">
                  <div className="gap-5 flex justify-center items-center">
                    <div className="avatar">
                      <div className="w-10 rounded-lg">
                        <img src={item.image} />
                      </div>
                    </div>
                    <h3 className="text-center text-xl font-medium">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xl">{item.percentage}%</p>
                </div>
                <progress
                  className="progress progress-primary w-full"
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
