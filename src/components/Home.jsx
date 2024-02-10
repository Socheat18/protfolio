import socheat from "../assets/socheat.jpg";
export default function Home() {
  return (
    <>
      <div className="grid xl:grid-cols-12 grid-cols-1 justify-between items-center mt-10 font-QuickSand">
        <div className="col-span-6">
          <h1 className="xl:text-3xl text-xl font-bold text-start">Hello,</h1>
          <h1 className="xl:text-3xl text-xl font-bold text-start">
            I'am <span className="text-blue-700">Mann Socheat</span>
          </h1>
          <h1 className="xl:text-3xl text-xl font-bold text-start">I'm a Data Analytic</h1>
          <button className="btn btn-primary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 mt-5">
            Contact
          </button>
        </div>
        <div className="col-span-5 flex items-end justify-center">
          <img
            src={socheat}
            alt=""
            className="w-[400px]  h-max rounded-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110  duration-200"
          />
        </div>
      </div>
    </>
  );
}
