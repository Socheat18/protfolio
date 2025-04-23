import mannsocheat from "../assets/2. Mann Socheat.jpg";

export default function Home() {
  return (
    <section id="home" className="py-20 bg-white font-QuickSand">
      <div className="grid xl:grid-cols-12 grid-cols-1 items-center gap-10 max-w-7xl mx-auto px-4">
        {/* Text Section */}
        <div className="xl:col-span-6 space-y-4 opacity-0 animate-fadeInLeft">
          <h1 className="text-4xl xl:text-6xl font-bold text-gray-800 leading-tight">
            Hello, <br />
            I’m <span className="text-blue-700">Mann Socheat</span>
          </h1>
          <h2 className="text-2xl xl:text-3xl font-semibold text-gray-600">
            A Passionate Data Analyst & Full-Stack Enthusiast
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            I specialize in turning data into insights and ideas into code.
            Currently diving deeper into full-stack dev & advanced analytics.
          </p>
          <a href="#contact">
            <button className="btn btn-primary mt-6 hover:scale-105 transition duration-300">
              Contact Me
            </button>
          </a>
        </div>

        {/* Image Section */}
        <div className="xl:col-span-6 flex justify-center opacity-0 animate-fadeInUp animation-delay-300">
          <div className="relative group">
            <img
              src={mannsocheat}
              alt="Mann Socheat"
              className="w-[300px] xl:w-[400px] object-cover rounded-3xl shadow-xl transition-transform group-hover:-translate-y-1 group-hover:scale-105 duration-300"
            />
            <div className="absolute inset-0 rounded-3xl bg-blue-600/20 opacity-0 group-hover:opacity-100 transition" />
          </div>
        </div>
      </div>
    </section>
  );
}
