import mannsocheat from "../assets/2. Mann Socheat.jpg";

export default function Home() {
  return (
    <div className="grid xl:grid-cols-12 grid-cols-1 justify-between items-center mt-10 font-QuickSand">
      <div className="col-span-6">
        {/* Text Animations */}
        <h1 className="xl:text-[60px] text-2xl font-bold text-start opacity-0 animate-fadeInLeft">
          Hello,
        </h1>
        <h1 className="xl:text-[60px] text-2xl font-bold text-start opacity-0 animate-fadeInLeft animation-delay-100">
          I'am <span className="text-blue-700">Mann Socheat</span>
        </h1>
        <h1 className="xl:text-[60px] text-2xl font-bold text-start opacity-0 animate-fadeInLeft animation-delay-200">
          I'm a Data Analytic
        </h1>
        <button className="btn btn-primary transition ease-in-out delay-150 hover:scale-110 duration-300 mt-5 opacity-0 animate-fadeInUp animation-delay-300">
          Contact
        </button>
      </div>
      <div className="col-span-5 flex items-end justify-center">
        <div className="avatar xl:mt-0 mt-10">
          {/* Image animation */}
          <div className="xl:w-[400px] w-[300px] mask mask-hexagon transition-transform transform hover:-translate-y-1 hover:scale-110 duration-300">
            <img
              src={mannsocheat}
              alt="Mann Socheat"
              className="opacity-0 animate-fadeInUp animation-delay-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
