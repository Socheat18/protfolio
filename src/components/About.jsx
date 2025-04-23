import socheat from "../assets/socheat.jpg";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white text-gray-800 font-QuickSand">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-blue-700 text-center underline opacity-0 animate-fadeInUp">
        About Me
      </h1>

      {/* Grid Container */}
      <div className="grid xl:grid-cols-12 grid-cols-1 gap-10 mt-10 max-w-6xl mx-auto px-4 items-center">
        
        {/* Image */}
        <div className="xl:col-span-5 flex justify-center">
          <div className="relative group">
            <img
              src={socheat}
              alt="Socheat"
              className="w-[280px] h-[320px] object-cover rounded-3xl shadow-lg transition duration-300 group-hover:scale-105 group-hover:-translate-y-1 opacity-0 animate-fadeInUp animation-delay-300"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-blue-600/30 to-transparent opacity-0 group-hover:opacity-100 transition" />
          </div>
        </div>

        {/* Text Content */}
        <div className="xl:col-span-7 space-y-4 opacity-0 animate-fadeInUp animation-delay-500">
          <h2 className="text-2xl font-bold text-gray-800">
            Hi, I'm Mann Socheat 👋
          </h2>
          <p className="text-lg leading-relaxed">
            I’m currently pursuing a Bachelor’s degree in Information Technology at the University of Cambodia. I recently completed a training program at the Korea Software HRD Center, where I gained hands-on experience with real-world software development tools and practices.
          </p>
          <p className="text-lg leading-relaxed">
            My learning journey focuses on full-stack development and data analytics. I enjoy building clean UIs, designing intuitive systems, and exploring how data can drive smarter decisions.
          </p>
        </div>
      </div>
    </section>
  );
}
