import socheat from "../assets/socheat.jpg";
export default function About() {
  return (
    <>
      <h1 className="xl:text-3xl text-2xl font-bold text-blue-700 text-center mt-10 underline font-QuickSand hover:-translate-y-1 hover:scale-105  duration-200">
        About Me
      </h1>
      <div className="grid xl:grid-cols-12 grid-cols-1 mt-10 font-QuickSand">
        <div className="col-span-4 flex items-end justify-center">
          <img
            src={socheat}
            alt=""
            className="w-[300px] h-max rounded-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110  duration-200"
          />
        </div>
        <div className="col-span-5 mt-5">
          <h2 className="text-2xl  text-start font-bold">I'm Mann Socheat</h2>
          <p className="text-md  text-start">
            I'm Mann Socheat I'm BA student, majoring in Information Technology
            from College of Science and Technology at The University of
            Cambodia.
          </p>
        </div>
      </div>
    </>
  );
}
