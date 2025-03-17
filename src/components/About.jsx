import socheat from "../assets/socheat.jpg";

export default function About() {
  return (
    <>
      {/* About Me Header with Animation */}
      <h1 className="xl:text-3xl text-2xl font-bold text-blue-700 text-center mt-10 underline font-QuickSand opacity-0 animate-fadeInUp">
        About Me
      </h1>

      <div className="grid xl:grid-cols-12 grid-cols-1 mt-10 font-QuickSand">
        {/* Image Section with Hover Animation */}
        <div className="col-span-4 flex items-end justify-center">
          <div className="avatar">
            <div className="w-[300px] mask mask-hexagon hover:-translate-y-1 hover:scale-110 duration-200">
              <img
                src={socheat}
                alt="Socheat"
                className="opacity-0 animate-fadeInUp animation-delay-300"
              />
            </div>
          </div>
        </div>

        {/* Text Section with Animation */}
        <div className="col-span-5 mt-5">
          <h2 className="text-2xl text-start font-bold opacity-0 animate-fadeInUp animation-delay-400">
            I'm Mann Socheat
          </h2>
          <p className="text-md text-start opacity-0 animate-fadeInUp animation-delay-500">
            I'm Mann Socheat, a BA student majoring in Information Technology at
            the College of Science and Technology, The University of Cambodia.
            Currently, I have completed my training at the Korea Software HRD
            Center. I'm studying basic sources for full-stack development and
            advanced sources for data analytics.
          </p>
        </div>
      </div>
    </>
  );
}
