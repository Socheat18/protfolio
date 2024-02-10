import sold from "../assets/sold.png";
import champion from "../assets/champion .png";
import Dashboard from "../assets/1. Dashboard.jpg";
import ExchangeRate from "../assets/2. Exchange Rate.jpg";
import RawMaterials from "../assets/3. Raw Materials.jpg";
import Stock from "../assets/4. Stock.jpg";
import Crypto from "../assets/5. Crypto.jpg";
import Government from "../assets/6. Government Bonds.jpg";
import Cambodia from "../assets/7. Cambodia GDP.jpg";
import AutoScape from "../assets/10. Auto Scrape Data.jpg";
import MuckApi from "../assets/11. Mock API.png";
import read_content from "../assets/Read content-guestHompages guest.png";
import homePage from "../assets/Home-Page-guestHompages guest.jpg";
import manageHero from "../assets/Manage Hero CardAdmin Dashborad.jpg";
import manageArticle from "../assets/Manage Article.jpg";
export default function Work() {
  const data = [
    {
      title: "Sold Analytics",
      image: sold,
      paragraph: "Build dashboard sold product all country with Excel",
    },
    {
      title: "champion Analytics",
      image: champion,
      paragraph: "Build dashboard champion with Excel ",
    },
  ];
  const dataVue = [
    {
      title: "Dashboard",
      image: Dashboard,
    },
    {
      title: "Exchange Rate",
      image: ExchangeRate,
    },
    {
      title: "Raw Materials",
      image: RawMaterials,
    },
    {
      title: "Stock",
      image: Stock,
    },
    {
      title: "Crypto",
      image: Crypto,
    },
    {
      title: "Government Bonds",
      image: Government,
    },
    {
      title: "Cambodia GDP",
      image: Cambodia,
    },
    {
      title: "Auto Scrape Data",
      image: AutoScape,
    },
    {
      title: "Mock API",
      image: MuckApi,
    },
  ];
  const domrra = [
    {
      title: "Home page",
      image: homePage,
    },
    {
      title: "Read article",
      image: read_content,
    },
    {
      title: "manage hero card",
      image: manageHero,
    },
    {
      title: "manage article",
      image: manageArticle,
    },
  ];
  return (
    <>
      <div className="font-QuickSand">
        <h1 className="xl:text-3xl text-xl font-bold text-blue-700 text-center mt-10 underline font-QuickSand hover:-translate-y-1 hover:scale-105  duration-200">
          Work
        </h1>
        <div className="mt-10">
          <h2 className="xl:text-2xl text-md text-start font-bold">
            Build dashboard with Excel
          </h2>
          <p className="xl:text-md text-sm text-start mb-5">
            Make analysis and visualization
          </p>
        </div>
        <div className="flex flex-wrap gap-10 justify-center mt-10 font-QuickSand">
          {data?.map((item) => (
            <div className="card card-compact xl:w-[45%] bg-base-100 shadow-xl hover:-translate-y-1 hover:scale-105  duration-200">
              <figure>
                <img src={item.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold xl:text-md text-sm">{item.title}</h2>
                <p>{item.paragraph}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <h2 className="xl:text-2xl text-xl text-start font-bold">
            Build website DataVue
          </h2>
          <p className="xl:text-md text-sm text-start mb-5">
            DataVue make it for user can view all data in one website and Front
            end using React js and API using Flask Restx
          </p>
        </div>
        <div className="flex flex-wrap gap-5 justify-center mt-10 font-QuickSand">
          {dataVue?.map((item) => (
            <div className="card card-compact xl:w-[30%] bg-base-100 shadow-xl hover:-translate-y-1 hover:scale-105  duration-200">
              <figure>
                <img src={item.image} alt="image" />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold xl:text-md text-sm">{item.title}</h2>
                <p>{item.paragraph}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <h2 className="xl:text-2xl text-xl text-start font-bold">
            Build website Domrra
          </h2>
          <p className="xl:text-md text-sm text-start mb-5">
            Domrra make it for user can read all article about khmer culture in
            one website and Front end using React js and API using Spring Boot
          </p>
        </div>
        <div className="carousel rounded-box gap-5">
          {domrra?.map((item) => (
            <div className="carousel-item w-[40%] h-[60%]">
              <img src={item.image} alt="Burger" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
