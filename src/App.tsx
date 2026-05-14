// App.jsx

import profile from "./assets/profile_pic.jpg";
import food from "./assets/food.png";
import leaf from "./assets/leaf.png";
import hospital from "./assets/hospital.jpg";
import "./App.css";

export default function App() {
  const projects = [
    {
      title: "Online Food Ordering System",
      description:
        "A full-stack food ordering platform built using React, Spring Boot, and MySQL with authentication and secure payments.",
      image: food,
      tech: ["React", "Spring Boot", "MySQL"],
    },
    {
      title: "Tomato Leaf Disease Detection",
      description:
        "AI-powered disease detection system using TensorFlow, OpenCV, and Python for identifying tomato plant diseases.",
      image: leaf,
      tech: ["Python", "TensorFlow", "OpenCV"],
    },
    {
      title: "Hospital Management System",
      description:
        "A hospital management platform for handling patient records, appointments, billing, and inventory.",
      image: hospital,
      tech: ["Java", "Spring Boot", "MySQL"],
    },
  ];

  const skills = [
    "Java",
    "Spring Boot",
    "Hibernate",
    "React",
    "JavaScript",
    "Tailwind CSS",
    "MySQL",
    "REST API",
    "Networking",
    "Firewall",
    "Linux",
    "Git & GitHub",
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* HEADER */}
      <header className="border-b border-slate-800 sticky top-0 bg-slate-950/90 backdrop-blur z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-indigo-400">
              Anil Kumar Mahato
            </h1>
            <p className="text-sm text-slate-400">
              Java Developer • Network Engineer
            </p>
          </div>

          <nav className="hidden md:flex gap-8 text-sm">
            <a href="#about" className="hover:text-indigo-400">
              About
            </a>
            <a href="#skills" className="hover:text-indigo-400">
              Skills
            </a>
            <a href="#projects" className="hover:text-indigo-400">
              Projects
            </a>
            <a href="#experience" className="hover:text-indigo-400">
              Experience
            </a>
            <a href="#contact" className="hover:text-indigo-400">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-indigo-400 font-medium mb-3">
            Welcome to my portfolio
          </p>

          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Hi, I'm <span className="text-indigo-400">Anil</span>
          </h2>

          <p className="mt-6 text-slate-300 text-lg leading-8">
            Passionate Java Developer specializing in scalable web applications,
            REST APIs, and enterprise solutions using Java, Spring Boot,
            Hibernate, and React.
          </p>

          <div className="flex gap-4 mt-8">
            <a
              href="#projects"
              className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-xl transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-slate-700 hover:border-indigo-400 px-6 py-3 rounded-xl transition"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex gap-4 text-slate-400 flex-wrap">
            <span>📍 Kathmandu, Nepal</span>
            <span>💻 Remote Friendly</span>
          </div>
        </div>

        {/* IMAGE CARD */}
        <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
          <img
            src={profile}
            alt="Profile"
            className="rounded-3xl w-full h-[500px] object-cover"
          />

          <div className="mt-6">
            <h3 className="text-2xl font-semibold">Quick Bio</h3>

            <p className="text-slate-300 mt-4 leading-7">
              I enjoy solving complex problems and building clean, scalable, and
              modern applications. My expertise includes backend development,
              REST APIs, networking, and cloud-ready architectures.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="max-w-7xl mx-auto px-6 py-16"
      >
        <h2 className="text-4xl font-bold mb-8">About Me</h2>

        <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8">
          <p className="text-slate-300 leading-8 text-lg">
            I am a dedicated Java Developer with experience in building secure,
            scalable, and efficient applications. I have worked on enterprise
            systems, hospital management systems, AI-based projects, and
            networking infrastructure. My goal is to deliver impactful software
            solutions with clean architecture and great user experience.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="max-w-7xl mx-auto px-6 py-16"
      >
        <h2 className="text-4xl font-bold mb-10">Skills</h2>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 px-5 py-3 rounded-xl hover:border-indigo-500 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="max-w-7xl mx-auto px-6 py-16"
      >
        <h2 className="text-4xl font-bold mb-10">Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:scale-105 transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="text-slate-300 mt-4 leading-7">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-indigo-600/20 text-indigo-400 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="max-w-7xl mx-auto px-6 py-16"
      >
        <h2 className="text-4xl font-bold mb-10">Experience</h2>

        <div className="space-y-8">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl">
            <h3 className="text-2xl font-semibold">
              System & Network Engineer — Big Solutions Pvt Ltd
            </h3>

            <p className="text-indigo-400 mt-2">
              2025 – Present
            </p>

            <ul className="list-disc list-inside text-slate-300 mt-5 space-y-2">
              <li>Managing routers, switches, and firewalls.</li>
              <li>Monitoring servers and virtual machines.</li>
              <li>Managing SSL certificates and domain systems.</li>
              <li>Providing hardware and software support.</li>
            </ul>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl">
            <h3 className="text-2xl font-semibold">
              Java Developer — Addc Infotech
            </h3>

            <p className="text-indigo-400 mt-2">
              2022 – 2024
            </p>

            <ul className="list-disc list-inside text-slate-300 mt-5 space-y-2">
              <li>Built scalable applications using Spring Boot.</li>
              <li>Developed REST APIs and backend systems.</li>
              <li>Integrated databases and authentication systems.</li>
              <li>Improved application performance and security.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="max-w-7xl mx-auto px-6 py-16"
      >
        <h2 className="text-4xl font-bold mb-10">Contact</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* FORM */}
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full mb-4 bg-slate-800 rounded-xl p-4 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full mb-4 bg-slate-800 rounded-xl p-4 outline-none"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full bg-slate-800 rounded-xl p-4 outline-none"
            ></textarea>

            <button className="w-full mt-5 bg-indigo-600 hover:bg-indigo-700 py-4 rounded-xl transition">
              Send Message
            </button>
          </div>

          {/* INFO */}
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl">
            <h3 className="text-2xl font-semibold mb-6">
              Reach Me
            </h3>

            <div className="space-y-4 text-slate-300">
              <p>📧 aksk5475@gmail.com</p>
              <p>📱 +977-9827816628</p>
              <p>📍 Kathmandu, Nepal</p>
            </div>

            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="border border-slate-700 px-5 py-3 rounded-xl hover:border-indigo-400"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="border border-slate-700 px-5 py-3 rounded-xl hover:border-indigo-400"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-400">
        © {new Date().getFullYear()} Anil Kumar Mahato. All rights reserved.
      </footer>
    </div>
  );
}