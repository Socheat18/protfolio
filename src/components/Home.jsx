import mannsocheat from "../assets/2. Mann Socheat.jpg";
export default function Home() {
  return (
    <>
      <div className="grid xl:grid-cols-12 grid-cols-1 justify-between items-center mt-10 font-QuickSand">
        <div className="col-span-6">
          <h1 className="xl:text-[60px] text-2xl font-bold text-start">
            Hello,
          </h1>
          <h1 className="xl:text-[60px] text-2xl font-bold text-start">
            I'am <span className="text-blue-700">Mann Socheat</span>
          </h1>
          <h1 className="xl:text-[60px] text-2xl font-bold text-start">
            I'm a Data Analytic
          </h1>
          <button className="btn btn-primary transition ease-in-out delay-150 hover:scale-110 duration-300 mt-5">
            Contact
          </button>
        </div>
        <div className="col-span-5 flex items-end justify-center">
          {/* <img
            src={mannsocheat}
            alt=""
            className="xl:w-[400px] w-[300px] h-max rounded-full border-spacing-10 border-blue-700 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110  duration-200"
          /> */}
          <div className="avatar xl:mt-0 mt-10">
            <div className="xl:w-[400px] w-[300px] mask mask-hexagon hover:-translate-y-1 hover:scale-110  duration-200 ">
              <img src={mannsocheat} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
