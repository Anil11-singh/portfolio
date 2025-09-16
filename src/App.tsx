import logo from "./assets/profile_pic.jpg";
import food from "./assets/food.png";
import leaf from "./assets/leaf.png";
import hospital from "./assets/hospital.jpg";

export default function App() {
  const projects = [
    {
      id: 1,
      title: "Online Food Order",
      desc: "Online Food Ordering System – A web based platform for browsing menus, placing food orders, and making secure payments online. Built with React, Spring Boot, and MySQL to ensure scalability, real-time tracking, and smooth user experience.",
      link: "#",
      img: food,
    },
    {
      id: 2,
      title: "Tomato Leaf Disease Detection",
      desc: "Tomato Leaf Disease Detection – A deep learning model using Python, TensorFlow, and OpenCV to detect tomato plant diseases from leaf images, enabling early diagnosis and improved crop yield.",
      link: "#",
      img: leaf,
    },
    {
      id: 3,
      title: "Hospital Management System",
      desc: "A web-based platform that helps hospitals manage patient records, doctor appointments, billing, and inventory efficiently. Built with modern technologies to improve hospital workflow and enhance patient care.",
      link: "#",
      img: hospital,
    },
  ];

  const skills = [
    "HTML",
    "CSS / Tailwind",
    "JavaScript / TypeScript",
    "Java",
    "Springboot",
    "Hibernate",
    "SQL",
    "React",
    "Troubleshooting",
    "Routers",
    "Firewall",
    "Switches",
    "Hardware/ Software/ Network/ Administration",
    "Managing SSL Certificates (Domain and Email Portals)",
  ];

  const about =
    "I am a passionate Java Developer specializing in building efficient, scalable, and reliable applications. Skilled in Java, Spring Boot, Hibernate, and REST APIs, I enjoy solving complex problems and delivering clean, maintainable code. I aim to create impactful software solutions that enhance performance and user experience.";

  return (
    <div className="min-h-screen bg-green-50 text-gray-900 antialiased">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">
              A
            </div>
            <div>
              <h1 className="text-lg font-semibold">Anil Kumar Mahato</h1>
              <p className="text-xs text-gray-500">Java Developer</p>
            </div>
          </div>

          {/* Right */}
   <div className="flex items-center gap-6 bg-blue-600 px-6 py-4 shadow">
  <nav className="hidden md:flex gap-6 text-sm text-white">
    <a href="#about" className="hover:text-gray-200">About</a>
    <a href="#skills" className="hover:text-gray-200">Skills</a>
    <a href="#projects" className="hover:text-gray-200">Projects</a>
    <a href="#experience" className="hover:text-gray-200">Experience</a>
    <a href="#contact" className="hover:text-gray-200">Contact</a>
  </nav>
  <a
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-white text-black-600 px-4 py-2 rounded-lg text-sm shadow hover:bg-gray-100 transition"
  > 
    View Resume
  </a>
</div>


        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              Hello, I'm Anil
            </h2>

            <p className="mt-4 text-gray-600 max-w-xl">
              Java Developer from Kathmandu, crafting scalable solutions with
              clean code and modern technologies.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#projects"
                className="inline-block px-5 py-3 bg-gray-900 text-white rounded-lg shadow"
              >
                View projects
              </a>
              <a
                href="#contact"
                className="inline-block px-5 py-3 border border-gray-200 rounded-lg"
              >
                Get in touch
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 text-xs text-gray-500">
              <span>📍 Imadol Kathmandu, Nepal</span>
              <span>•</span>
              <span>📍 Available for remote work</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow p-8">
            <img src={logo} alt="Logo" />
            <div className="mt-6">
              <h3 className="font-semibold">Quick bio</h3>
              <p className="text-sm text-gray-600 mt-1">
                I’m Anil Kumar Mahato, a passionate Java Developer from
                Kathmandu. I specialize in building efficient, scalable, and
                reliable applications using Java, Spring Boot, Hibernate, and
                REST APIs. I enjoy solving complex problems, delivering clean
                code, and creating impactful software that enhances performance
                and user experience.
              </p>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mt-10">
          <h3 className="text-2xl font-semibold">About</h3>
          <div className="bg-white shadow-md rounded-2xl p-5 hover:shadow-xl transition mt-5">
            <p>{about}</p>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mt-12">
          <h4 className="text-2xl font-semibold">Skills</h4>
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition mt-5">
            <div className="flex flex-wrap gap-3">
              {skills.map((s) => (
                <span
                  key={s}
                  className="px-5 py-1 rounded-full bg-gray-100 shadow text-sm"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-14">
          <h5 className="text-2xl font-semibold">Projects</h5>
          <p className="text-gray-600 mt-2">
            A few highlights — click to view details.
          </p>

          <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <a
                key={p.id}
                href={p.link}
                className="block bg-white rounded-2xl shadow overflow-hidden hover:shadow-lg transition"
              >
                <div className="w-full h-80 bg-gray-100 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold">{p.title}</h4>
                  <p className="text-sm text-gray-600 mt-2">{p.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-15">
          <h5 className="text-2xl font-bold text-left mb-7 text-gray-800">
            Experience
          </h5>

          <div className="grid gap-10">
            {/* Experience Card 1 */}
            <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-gray-900">
                Java Developer
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                ADDC INFOTECH | 2022 – 2024
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  Designed and developed scalable web applications using Java,
                  Spring Boot, and Hibernate.
                </li>
                <li>
                  Integrated REST APIs and improved system performance by 25%.
                </li>
                <li>
                  Collaborated with cross-functional teams to deliver
                  high-quality software solutions.
                </li>
              </ul>
            </div>

            {/* Experience Card 2 */}
            <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
              <h6 className="text-xl font-semibold text-gray-900">
                System and Network Engineer
              </h6>
              <p className="text-gray-500 text-sm mb-4">
                BIG Solutions Pvt Ltd (Mypay) | 2025 – Present
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  Managing Users and Workstations via AD - Setting up,
                  Monitoring and troubleshooting network devices (routers,
                  firewalls, switches and APs).
                </li>
                <li>
                  Creating, maintaining & troubleshooting servers (Virtual
                  Machines) using ESXi.
                </li>
                <li>
                  Providing desktop support to users (Hardware/ Software/
                  Network/ Administration).
                </li>
                <li>
                  Managing SSL certificates, Domain names and email admin
                  portals.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-6 bg-white rounded-2xl shadow p-6">
          <div className="md:flex md:items-center md:justify-between">
            <div>
              <h3 className="text-3xl font-semibold">Reach me</h3>
              <p className="text-gray-600 mt-2">
                I'm available for contract and full-time roles. Send a message
                and I'll reply within a few days.
              </p>
            </div>

            <div className="mt-4 md:mt-0">
              <a
                href="mailto:aksk5475@gmail.com"
                className="inline-block px-5 py-3 bg-indigo-600 text-white rounded-lg shadow"
              >
                Email me
              </a>
            </div>
          </div>

          <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              className="p-3 border rounded-lg"
              placeholder="Your name"
            />
            <input className="p-3 border rounded-lg" placeholder="Email" />
            <input
              className="p-3 border rounded-lg md:col-span-2"
              placeholder="Subject"
            />
            <textarea
              className="p-3 border rounded-lg md:col-span-2"
              rows={4}
              placeholder="Message"
            ></textarea>
            <button
              type="button"
              className="md:col-span-2 px-5 py-3 bg-gray-900 text-white rounded-lg"
            >
              Send message
            </button>
          </form>
        </section>

        <footer className="mt-12 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Anil Kumar Mahato. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
