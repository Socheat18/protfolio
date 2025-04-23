import { Mail, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100 text-center">
      <h2 className="text-4xl font-extrabold text-blue-600">Contact Me</h2>
      <p className="mt-4 text-lg text-gray-600">Feel free to reach out via email or connect on LinkedIn!</p>
      <div className="mt-8 flex flex-col items-center gap-4">
        <a
          href="mailto:socheatmann18@gmail.com"
          className="flex items-center gap-2 text-blue-500 hover:underline hover:text-blue-700 transition-colors"
        >
          <Mail className="w-5 h-5" />
          socheatmann18@gmail.com
        </a>
        <a
          href="https://linkedin.com/in/yourname"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-500 hover:underline hover:text-blue-700 transition-colors"
        >
          <Linkedin className="w-5 h-5" />
          LinkedIn Profile
        </a>
      </div>
    </section>
  );
};

export default Contact;
