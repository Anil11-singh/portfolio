import logo from "./assets/profile_pic.jpg";
import food from "./assets/food.png";
import leaf from "./assets/leaf.png";
import hospital from "./assets/hospital.jpg";
import "./App.css";

export default function App() {
  const projects = [
    {
      id: 1,
      title: "Online Food Order",
      desc: "Online Food Ordering System built with React, Spring Boot and MySQL.",
      link: "#",
      img: food,
    },
    {
      id: 2,
      title: "Tomato Leaf Disease Detection",
      desc: "Deep learning project using Python, TensorFlow and OpenCV.",
      link: "#",
      img: leaf,
    },
    {
      id: 3,
      title: "Hospital Management System",
      desc: "Web-based hospital management platform.",
      link: "#",
      img: hospital,
    },
  ];

  const skills = [
    "HTML",
    "CSS / Tailwind",
    "JavaScript",
    "Java",
    "Spring Boot",
    "Hibernate",
    "SQL",
    "React",
    "Networking",
    "Firewall",
    "Switches",
  ];

  const about =
    "I am a passionate Java Developer specializing in building scalable and reliable applications.";

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-gray-700">
     <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-3">
  <div className="bg-red text-gray-300 border rounded-2xl p-5 hover:shadow-xl transition mt-5 text-left">
              AK
            </div>

            <h1 className="text-xl font-bold">My Portfolio</h1>
          </div>

          {/* Right */}
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* Hero */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-5xl font-extrabold">
              Hi, I'm Anil Kumar Mahato
            </h2>

            <p className="mt-4 text-gray-300">
              Java Developer from Kathmandu, crafting scalable solutions with
              modern technologies.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="#projects"
                className="bg-indigo-600 px-5 py-3 rounded-lg"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="bg-gray-700 px-5 py-3 rounded-lg"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Profile */}
          <div className="bg-slate-900 rounded-2xl p-6">
            <img
              src={logo}
              alt="Profile"
              className="rounded-2xl w-full"
            />

            <div className="mt-5">
              <h3 className="text-xl font-semibold">Quick Bio</h3>

              <p className="text-gray-300 mt-3">
                I’m Anil Kumar Mahato, a passionate Java Developer specializing
                in Java, Spring Boot, Hibernate and REST APIs.
              </p>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mt-16">
          <h3 className="text-3xl font-bold">About</h3>

          <div className="bg-slate-900 p-6 rounded-2xl mt-5">
            <p className="text-gray-300">{about}</p>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mt-16">
          <h3 className="text-3xl font-bold">Skills</h3>

          <div className="bg-slate-900 p-6 rounded-2xl mt-5 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-indigo-600 px-4 py-2 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-16">
          <h3 className="text-3xl font-bold">Projects</h3>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {projects.map((p) => (
              <div
                key={p.id}
                className="bg-slate-900 rounded-2xl overflow-hidden"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-56 object-cover"
                />

                <div className="p-5">
                  <h4 className="text-xl font-semibold">{p.title}</h4>

                  <p className="text-gray-300 mt-3 text-sm">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mt-16">
          <h3 className="text-3xl font-bold">Experience</h3>

          <div className="bg-slate-900 p-6 rounded-2xl mt-6">
            <h4 className="text-xl font-semibold">
              System and Network Engineer · Big Solutions Pvt Ltd
            </h4>

            <p className="text-gray-400 mt-2">
              2025 – Present
            </p>

            <ul className="list-disc list-inside mt-4 text-gray-300 space-y-2">
              <li>Managing users and workstations via Active Directory.</li>
              <li>Monitoring routers, switches and firewalls.</li>
              <li>Managing SSL certificates and servers.</li>
            </ul>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl mt-6">
            <h4 className="text-xl font-semibold">
              Java Developer · Addc Infotech
            </h4>

            <p className="text-gray-400 mt-2">
              2022 – 2024
            </p>

            <ul className="list-disc list-inside mt-4 text-gray-300 space-y-2">
              <li>Built scalable applications using Spring Boot.</li>
              <li>Integrated REST APIs.</li>
              <li>Improved system performance.</li>
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-16">
          <h3 className="text-3xl font-bold">Contact</h3>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-slate-900 p-6 rounded-2xl">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-slate-800 mb-4"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-slate-800 mb-4"
              />

              <textarea
                placeholder="Your Message"
                className="w-full p-3 rounded-lg bg-slate-800"
              ></textarea>

              <button className="mt-4 bg-indigo-600 px-5 py-3 rounded-lg w-full">
                Send Message
              </button>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl">
              <h4 className="text-xl font-semibold mb-4">
                Reach Me
              </h4>

              <p>Email: aksk5475@gmail.com</p>
              <p className="mt-2">Phone: +977-9827816628</p>

              <div className="flex gap-4 mt-6">
                <a href="https://github.com/" target="_blank">
                  GitHub
                </a>

                <a href="https://linkedin.com/" target="_blank">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-400 mt-16 pb-10">
          © {new Date().getFullYear()} Anil Kumar Mahato
        </footer>
      </main>
    </div>
  );
}