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
    "Managing SSL Certificates (Domain and Email Portals)",];
     <input  className="p-4 border rounded-lg"></input>
  const about =
    "I am a passionate Java Developer specializing in building efficient, scalable, and reliable applications. Skilled in Java, Spring Boot, Hibernate, and REST APIs, I enjoy solving complex problems and delivering clean, maintainable code. I aim to create impactful software solutions that enhance performance and user experience.";

  return (
    <div className="min-h-screen background text-white antialiased">
      
      {/* Header */}
      <header
  className="bg-orange"
  style={{ boxShadow: "0  1px #3c3f41fb" }}
>
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">
              AK
            </div>
            <div>
             <div className="bg-gray-90 bg-gradient from-blue-400 text-slate-400">
              <h1 className="text-black-400 font-bold">MyPortfolio</h1>
          
              </div>

              <h1 className="text-lg font-semibold"></h1>
              {/* <p className="text-xs text-white-400">Java Developer</p> */}
            </div>
          </div>

          {/* Right */}
   <div className="flex items-center gap-6 bgbg-gray-50 bg-gradient-to-r from-blue-300  to-purple-300 text-slate-900 px-6 py-4 shadow">
  <nav className="hidden md:flex gap-6 text-sm text-black-200">
    <a href="#about" className="hover:text-white-200">About</a>
    <a href="#skills" className="hover:text-gray-200">Skills</a>
    <a href="#projects" className="hover:text-gray-200">Projects</a>
    <a href="#experience" className="hover:text-gray-200">Experience</a>
    <a href="#contact" className="hover:text-gray-200">Contact</a>
  </nav>
  <a
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-green-200 text-blue-600 px-4 py-2 rounded-lg text-sm shadow hover:bg-gray-100 transition"> 
    View Resume
  </a>
</div>
                    
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* Hero Section */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
             Hi, I'm Anil 👋
            </h2>

            <p className="mt-4 text- white-500 max-w-xl">
              Java Developer from Kathmandu, crafting scalable solutions with
              clean code and modern technologies.
            </p>
                 
            <div className="mt-6 flex gap-3">
              <a
                href="#projects"
                className="inline-block px-5 py-3 text-center bg-orange-900 text-white border border-gray-700 rounded-lg shadow">
                View projects
              </a>
              <a
                href="#contact"
                className="inline-block px-5 py-3 bg-blue-900 text-white border border-gray-700 rounded- shadow">
              
                Get in touch
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 text-xs text-gray-100">
              <span>📍 Imadol Kathmandu, Nepal</span>
              <span>•</span>
              <span>📍 Available for remote work</span>
            </div>
          </div>
            
          <div className="bg-blue rounded-2xl border p-9">
                                                                        
            <img src={logo} alt="Logo" />          
     {/* <div className="mt-2">                 */}
             <div className="bg-blue shadow-md rounded-2xl p-4 hover:shadow-xl transition mt-2">
             {/* <div className="bg-red shadow-md rounded-2xl p-5 hover:shadow-xl transition mt-5 text-left">        */}
              <h3 className="font-semibold">Quick bio</h3>     
                    
              <p className="text-sm text-gray-300 mt-1 mt-1 text-left">
       
                I’m Anil Kumar Mahato, a passionate Java Developer from
                Kathmandu. I specialize in building efficient, scalable,and
                reliable applications using Java, Spring Boot, Hibernate, and                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
                REST APIs. I enjoy solving complex problems, delivering clean
                code, and creating impactful software that enhances performance
                and user experience.
           
               </p>
            </div>
          </div>
        </section>

        {/* About */}   
      <section id="about" className="mt-12 text-left">
  <h3 className="text-2xl font-semibold">About</h3>
  <div className="bg-red text-gray-300 border rounded-2xl p-5 hover:shadow-x1 transition mt-5 text-left">
    
    <p>{about}</p>
  </div>
</section>

        {/* Skills */}
        <section id="skills" className="mt-14 mt-1 text-left">
          <h4 className="text-2xl font-semibold">Skills</h4>
          <div className="bg-blue text-white-100 border rounded-2xl p-6 hover:shadow-xl transition mt-5">
            <div className="flex flex-wrap gap-3">
              {skills.map((s) => (
                <span
                  key={s}
                  className="px-5 py-1 rounded-full bg-cream-500 shadow text-gray-300 text-sm">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-14 mt-1 text-left">
          <h5 className="text-2xl font-semibold">Projects</h5>
          <p className="text-gray-300 mt-0">
            A few highlights — click to view details.
          </p>
                                  
          <div className="mt-2 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <a
                key={p.id}
                href={p.link}
                className="block bg-blue rounded-2xl border overflow-hidden hover:shadow-lg transition">
                <div className="w-full h-80 bg-gray-100 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold">{p.title}</h4>
                  <p className="text-sm text-gray-200 mt-2">{p.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
                            
        {/* Experience */}
        <section id="experience" className="py-15">
          <h5 className="text-2xl font-bold text-left mb-0 text-gray-200">
            Experience
          </h5>
          <h6 className="text-1xl text-left mb-0 text-gray-400">
            Where I've worked recentlys.
          </h6>
                                                                
          <div className="grid gap-10">

             {/* Experience Card 1 */}
            <div className="bg-blue border rounded-2xl p-6 hover:shadow-xl transition mt-1 text-left">
              <h6 className="text-x1 font-semibold text-white-300">
                  🔵System and Network Engineer · Big Solutions Pvt Ltd (Mypay) 
              </h6>
                  <p className="s text-gray-300 text-sm mb-4">
                       2025 – Present · On-site 
                  </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
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
                  Network/ Administration)
                </li>
                <li>
                  Managing SSL certificates, Domain names and email admin
                  portals.
                </li>
              </ul>
            </div>
          </div>
        </section> 
                                       
            {/* Experience Card 2 */}              
            <div className="bg-blue border rounded-2xl p-6 hover:shadow-xl transition mt-1 text-left">
              <h3 className="text-xl font-semibold text-White-300 ">
                  🔵Java Developer · Addc Infotech
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                  2022 - 2024 · On-site  </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
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

               

      {/* Contact */}
        {
    <div className="min-h-screen bg-gradient-to-br mt-8 from-blue-slate-900 to-blue flex items-center justify-center px-0">
                                                                                                                      
      <div className="m-w-xl w-full">
        {/* Header */}
        <div className="mb-2">
          <h1 className="text-2xl text-left mb-0 font-bold text-white">Contact</h1>
          <p className="text-slate-400 text-left mt-0">
            Got a project? Let’s talk.
          </p>
        </div>  
                                                                                                                                                  
        {/* Main Grid */}
        <div className="grid grid-cols-1 mb-8 md:grid-cols-3 gap-6">
                                                                  
          {/* Contact Form */}
          <div className="md:col-span-2 rounded-2xl border border-white/510 bg-linear-gradient-to-br from-linear-gradient-900 to-slate-950 p-6 shadow-xl">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-slate-300text-left text-sm text-left">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-1 w-full rounded-xl bg-linear-gradient-/5 border border-white/10 px-4 py-2 text-white text-left placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
                                                               
              <div>
                <label className="text-slate-300 text-sm">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-1 w-full rounded-xl bg-linear-gradient/5 border border-white/10 px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
                            
            <div className="mb-6">
              <label className="text-slate-300 text-sm">Message</label>
              <textarea
                placeholder="Tell me about your idea..."
                className="mt-1 w-full rounded-xl bg-linear-gradient/510 border border-white/10 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
                                         
            <button className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 py-3 text-white font-medium hover:opacity-90 transition">
              Send Message
            </button>
          </div>
                                   
          {/* Reach Me Card */}
          <div className="rounded-2xl border border-white/510 bg-linear-gradient-to-b from-slate-900 to-slate-950 p-8 shadow-xl">
            <h2 className="text-xl font-semibold text-white mb-4">
              Reach me
            </h2>
                           
            <p className="text-slate-300 mb-2">  
              Email: <span className="text-slate-200">aksk5475@gmail.com</span>
            </p>
                     
            <p className="text-slate-300 mb-6">
              Phone: <span className="text-slate-200">+977-9827816628</span>
            </p>
                                                    

            <div className="flex gap-3 flex-wrap">
              <a
                href="https://github.com/Anil11-singh"
                className="px-4 py-2 rounded-xl border border-white/20 text-white hover:bg-white/10 transition"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/anil-kumar-mahato-8bbb9924a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app#"
                className="px-4 py-2 rounded-xl border border-white/20 text-white hover:bg-white/10 transition"
              >
                LinkedIn
              </a>
              <a
                href="https://www.facebook.com/share/1JetNCGbXC/#"
                className="px-4 py-2 rounded-xl border border-white/20 text-white hover:bg-white/10 transition"
              >
                FB
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>


/* 

        <section id="contact" className="mt-6 bg-blue rounded-2xl shadow p-6 mt-1 text-left">
          <div className="md:flex md:items-center md:justify-between">
            <div>
              <h3 className="text-3xl font-semibold">Reach me</h3>
              <p className="text-black-800 mt-2">
                I'm available for contract and full-time roles. Send a message
                and I'll reply within a few days.
              </p>
            </div>

            <div className="mt- md:mt-0">
              <a
                href="mailto:aksk5475@gmail.com"
                className="inline-block px-5 py-3 bg-indigo-400 text-black rounded-lg shadow">

                Email me
              </a>
            </div>
          </div>

          <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input  className="p-4 border rounded-lg"
              placeholder="Your name"
            />
            <input className="p-3 border rounded-lg" 
              placeholder="Email"/>
               
            <input
              className="p-3 border rounded-lg md:col-span-2"
              placeholder="Subject"
            />
            <textarea
              className="p-3 bg-black-200 shadow-md border rounded-lg md:col-span-2"
              rows={4}
              placeholder="Message"></textarea>    
            <button
              type="button"
              className="md:col-span-2 px-5 py-3  bg-green-900 text-white rounded-lg">
              Send message
            </button>
          </form>hello this is another code 
        </section> */}

        <footer className="mt-0 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Anil Kumar Mahato.  All rights reserved.
          
        </footer>
        
        {/* <footer className="mt-8 text-right text-gray-400 text-sm">
                  Privacy Terms Sitemap 
            
      </footer>  */}
      </main>
    </div>
  );
}