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
  return (
    <>
      <div className="font-QuickSand">
        <h1 className="text-3xl font-bold text-blue-700 text-center mt-10 underline font-QuickSand hover:-translate-y-1 hover:scale-105  duration-200">
          Work
        </h1>
        <div className="mt-10">
          <h2 className="text-2xl text-start font-bold">
            Build dashboard with Excel
          </h2>
          <p className="text-md  text-start mb-5">Make analysis and visualization</p>
        </div>
        <div className="flex flex-wrap gap-10 justify-center mt-10 font-QuickSand">
          {data?.map((item) => (
            <div className="card card-compact xl:w-[45%] bg-base-100 shadow-xl hover:-translate-y-1 hover:scale-105  duration-200">
              <figure>
                <img src={item.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold">{item.title}</h2>
                <p>{item.paragraph}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <h2 className="text-2xl text-start font-bold">
            Build website DataVue
          </h2>
          <p className="text-md  text-start mb-5">
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
                <h2 className="card-title font-bold">{item.title}</h2>
                <p>{item.paragraph}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <h2 className="text-2xl text-start font-bold">
            Build website Domrra
          </h2>
          <p className="text-md  text-start mb-5">
            Domrra make it for user can read all article about khmer culture in
            one website and Front end using React js and API using Spring Boot
          </p>
        </div>
        <div className="carousel rounded-box">
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
              alt="Burger"
            />
          </div>
        </div>
      </div>
    </>
  );
}
