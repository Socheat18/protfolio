import { Mail, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-10 mt-20">
      <div className="container mx-auto text-center space-y-4">
        <h3 className="text-xl font-semibold">MANN SOCHEAT</h3>

        <div className="flex justify-center gap-6 text-gray-300">
          <a
            href="mailto:socheatmann18@gmail.com"
            className="hover:text-white transition"
            aria-label="Email"
          >
            <Mail />
          </a>
          <a
            href="https://linkedin.com/in/yourname"
            className="hover:text-white transition"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin />
          </a>
          <a
            href="https://github.com/yourname"
            className="hover:text-white transition"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github />
          </a>
        </div>

        <p className="text-sm text-gray-400">
          © {year} MANN SOCHEAT. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
