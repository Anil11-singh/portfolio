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
      desc: "Online Food Ordering System – A web based platform for browsing menus, placing food orders, and making secure payments online.",
      link: "#",
      img: food,
    },
    {
      id: 2,
      title: "Tomato Leaf Disease Detection",
      desc: "Deep learning model using Python, TensorFlow, and OpenCV to detect tomato plant diseases.",
      link: "#",
      img: leaf,
    },
    {
      id: 3,
      title: "Hospital Management System",
      desc: "Hospital management platform for patient records, billing, and appointments.",
      link: "#",
      img: hospital,
    },
  ];

  const skills = [
    "HTML",
    "CSS / Tailwind",
    "JavaScript / TypeScript",
    "Java",
    "Spring Boot",
    "Hibernate",
    "SQL",
    "React",
    "Troubleshooting",
    "Routers",
    "Firewall",
    "Switches",
    "Network Administration",
  ];

  const about =
    "I am a passionate Java Developer specializing in building scalable and reliable applications using Java, Spring Boot, Hibernate, and REST APIs.";

  return (
    <div className="min-h-screen bg-black text-white antialiased">

      {/* Header */}
      <header
        className="bg-gray-900"
        style={{ boxShadow: "0 1px #3c3f41fb" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">

          {/* Left */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">
              AK
            </div>

            <div>
              <h1 className="text-xl font-bold text-white">
                MyPortfolio
              </h1>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex gap-6 text-sm text-white">
              <a href="#about" className="hover:text-gray-300">About</a>
              <a href="#skills" className="hover:text-gray-300">Skills</a>
              <a href="#projects" className="hover:text-gray-300">Projects</a>
              <a href="#experience" className="hover:text-gray-300">Experience</a>
              <a href="#contact" className="hover:text-gray-300">Contact</a>
            </nav>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-600 transition"
            >
              View Resume
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">

        {/* Hero */}
        <section className="grid md:grid-cols-2 gap-8 items-center">

          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Hi, I'm Anil Kumar Mahato
            </h2>

            <p className="mt-4 text-gray-300 max-w-xl">
              Java Developer from Kathmandu, crafting scalable solutions with clean code and modern technologies.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#projects"
                className="px-5 py-3 bg-orange-600 rounded-lg shadow"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-5 py-3 bg-blue-600 rounded-lg shadow"
              >
                Get in Touch
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 text-xs text-gray-300">
              <span>📍 Imadol, Kathmandu, Nepal</span>
              <span>•</span>
              <span>Available for remote work</span>
            </div>
          </div>

          {/* Profile */}
          <div className="bg-gray-900 rounded-2xl border border-gray-700 p-6">
            <img
              src={logo}
              alt="Profile"
              className="rounded-xl w-full"
            />

            <div className="bg-gray-800 shadow-md rounded-2xl p-4 hover:shadow-xl transition mt-4">
              <h3 className="font-semibold text-lg">
                Quick Bio
              </h3>

              <p className="text-sm text-gray-300 mt-3">
                I’m Anil Kumar Mahato, a passionate Java Developer from Kathmandu.
                I specialize in Java, Spring Boot, Hibernate, and REST APIs.
              </p>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mt-14 text-left">

          <h3 className="text-2xl font-semibold">
            About
          </h3>

          <div className="bg-gray-900 text-gray-300 border border-gray-700 rounded-2xl p-5 hover:shadow-xl transition mt-5">
            <p>{about}</p>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mt-14 text-left">

          <h3 className="text-2xl font-semibold">
            Skills
          </h3>

          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 hover:shadow-xl transition mt-5">

            <div className="flex flex-wrap gap-3">
              {skills.map((s) => (
                <span
                  key={s}
                  className="px-5 py-2 rounded-full bg-gray-800 text-gray-300 text-sm"
                >
                  {s}
                </span>
              ))}
            </div>

          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-14 text-left">

          <h3 className="text-2xl font-semibold">
            Projects
          </h3>

          <p className="text-gray-300 mt-2">
            A few highlights of my work.
          </p>

          <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

            {projects.map((p) => (
              <a
                key={p.id}
                href={p.link}
                className="block bg-gray-900 rounded-2xl border border-gray-700 overflow-hidden hover:shadow-lg transition"
              >

                <div className="w-full h-80 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4">
                  <h4 className="font-semibold">
                    {p.title}
                  </h4>

                  <p className="text-sm text-gray-300 mt-2">
                    {p.desc}
                  </p>
                </div>

              </a>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mt-14 text-left">

          <h3 className="text-2xl font-bold text-gray-200">
            Experience
          </h3>

          <p className="text-gray-400 mb-6">
            Where I've worked recently.
          </p>

          <div className="grid gap-6">

            {/* Experience 1 */}
            <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 hover:shadow-xl transition">

              <h4 className="text-xl font-semibold text-white">
                🔵 System and Network Engineer · Big Solutions Pvt Ltd (Mypay)
              </h4>

              <p className="text-gray-300 text-sm mb-4">
                2025 – Present · On-site
              </p>

              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Managing users and workstations via Active Directory.</li>
                <li>Monitoring routers, switches, firewalls, and APs.</li>
                <li>Managing ESXi virtual machines and servers.</li>
                <li>Desktop support and SSL certificate management.</li>
              </ul>

            </div>

            {/* Experience 2 */}
            <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 hover:shadow-xl transition">

              <h4 className="text-xl font-semibold text-white">
                🔵 Java Developer · ADDC Infotech
              </h4>

              <p className="text-gray-300 text-sm mb-4">
                2022 – 2024 · On-site
              </p>

              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Developed scalable web applications using Java and Spring Boot.</li>
                <li>Integrated REST APIs and improved performance.</li>
                <li>Worked with cross-functional development teams.</li>
              </ul>

            </div>

          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-14">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Contact Form */}
            <div className="md:col-span-2 rounded-2xl border border-gray-700 bg-gray-900 p-6 shadow-xl">

              <h3 className="text-2xl font-bold mb-4">
                Contact
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

                <input
                  type="text"
                  placeholder="Your name"
                  className="rounded-xl border border-gray-700 bg-gray-800 px-4 py-3 text-white"
                />

                <input
                  type="email"
                  placeholder="Your email"
                  className="rounded-xl border border-gray-700 bg-gray-800 px-4 py-3 text-white"
                />

              </div>

              <textarea
                placeholder="Message"
                className="w-full rounded-xl border border-gray-700 bg-gray-800 px-4 py-3 text-white mb-4"
                rows={5}
              />

              <button className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 py-3 text-white font-medium hover:opacity-90 transition">
                Send Message
              </button>

            </div>

            {/* Reach Me */}
            <div className="rounded-2xl border border-gray-700 bg-gray-900 p-6 shadow-xl">

              <h3 className="text-xl font-semibold text-white mb-4">
                Reach Me
              </h3>

              <p className="text-gray-300 mb-2">
                Email: aksk5475@gmail.com
              </p>

              <p className="text-gray-300 mb-6">
                Phone: +977-9827816628
              </p>

              <div className="flex gap-3 flex-wrap">

                <a
                  href="https://github.com/Anil11-singh"
                  className="px-4 py-2 rounded-xl border border-gray-600 text-white hover:bg-gray-800 transition"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/"
                  className="px-4 py-2 rounded-xl border border-gray-600 text-white hover:bg-gray-800 transition"
                >
                  LinkedIn
                </a>

              </div>

            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-14 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Anil Kumar Mahato. All rights reserved.
        </footer>

      </main>
    </div>
  );
}