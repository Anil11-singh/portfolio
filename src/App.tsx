

// Single-file React portfolio component
// Tailwind CSS classes are used for styling (no import needed if your project already includes Tailwind)
// This component is ready to drop into a Create React App / Vite / Next.js page.
import logo from "./assets/profile_pic.jpg"; 
export default function App() {
  const projects = [
    {
      id: 1,
      title: "Online Food Order",
      desc: "A short description of your project, tech used and outcome.",
      link: "#",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 2,
      title: "Project Two",
      desc: "Another project — brief summary, role, and tech.",
      link: "#",
      img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      title: "Project Three",
      desc: "Short project blurb that highlights value and outcome.",
      link: "#",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=60",
    },
  ];

  const skills = [
    "HTML",
    "CSS / Tailwind",
    "JavaScript / TypeScript", "Java", "Springboot", "Hibernate","SQL"
    ,"React",
    "Troubleshooting","Networks devices(routers, firewall, switches, Aps)",
     "Providing Desktop support to the users (Hardware/ Software/ Network/ Administration)",
     "Managing SSL Certificates(Domain and email Portals)"
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">A</div>
            <div>
              <h1 className="text-lg font-semibold">Anil Kumar Mahato</h1>
              <p className="text-xs text-gray-500">Software Engineer</p>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 text-sm text-gray-600">
            <a href="#projects" className="hover:text-gray-900">Projects</a>
            <a href="#skills" className="hover:text-gray-900">Skills</a>        
            <a href="#Experience" className="hover:text-gray-900">Experience</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm shadow"
          >
            Hire me
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Hi, This is Anil Kumar Mahato From Kathmandu
            </h2>
            <p className="mt-4 text-gray-600 max-w-xl">
              I'm a Java developer focused on building performant, responsive interfaces with React and good design. I enjoy learning new
              things and turning ideas into production-ready products.
            </p>

            <div className="mt-6 flex gap-3">
              <a href="#projects" className="inline-block px-5 py-3 bg-gray-900 text-white rounded-lg shadow">View projects</a>
              <a href="#contact" className="inline-block px-5 py-3 border border-gray-200 rounded-lg">Get in touch</a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 text-xs text-gray-500">
              <span>📍 Kirtipur Kathmandu, Nepal</span>
              <span>.</span>
              <span>Available for remote work</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
          <img src={logo} alt="Logo" />
            <div className="mt-4">
              <h3 className="font-semibold">Quick bio</h3>
              <p className="text-sm text-gray-600 mt-1">I design and build interfaces that people love to use. I focus on performance, accessibility, and clean code.</p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-16">
          <h3 className="text-2xl font-semibold">Projects</h3>
          <p className="text-gray-600 mt-2">A few highlights — click to view details.</p>

          <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <a key={p.id} href={p.link} className="block bg-white rounded-2xl shadow overflow-hidden hover:shadow-lg transition">
                <div className="w-full h-44 bg-gray-100 overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold">{p.title}</h4>
                  <p className="text-sm text-gray-600 mt-2">{p.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mt-16">
          <h3 className="text-2xl font-semibold"> SKILLS </h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {skills.map((s) => (
              <span key={s} className="px-3 py-1 rounded-full bg-white shadow text-sm">{s}</span>
            ))}
          </div>
        </section>

     
        {/* Contact */}
        <section id="contact" className="mt-16 bg-white rounded-2xl shadow p-6">
          <div className="md:flex md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-semibold">Let's build something</h3>
              <p className="text-gray-600 mt-2">I'm available for contract and full-time roles. Send a message and I'll reply within a few days.</p>
            </div>

            <div className="mt-4 md:mt-0">
              <a href="mailto:youremail@example.com" className="inline-block px-5 py-3 bg-indigo-600 text-white rounded-lg shadow">Email me</a>
            </div>
          </div>

          <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="p-3 border rounded-lg" placeholder="Your name" />
            <input className="p-3 border rounded-lg" placeholder="Email" />
            <input className="p-3 border rounded-lg md:col-span-2" placeholder="Subject" />
            <textarea className="p-3 border rounded-lg md:col-span-2" rows={4} placeholder="Message"></textarea>
            <button type="button" className="md:col-span-2 px-5 py-3 bg-gray-900 text-white rounded-lg">Send message</button>
          </form>
        </section>

        <footer className="mt-12 text-center text-gray-500 text-sm">© {new Date().getFullYear()} Anil Kumar Mahato — Built with React & Tailwind</footer>
      </main>
    </div>
  );
}
