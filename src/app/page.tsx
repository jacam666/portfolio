import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header */}
      {/* <header className="flex items-center justify-between p-6 bg-white shadow-md sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-gray-800">Jamie Cameron</h1>
        <nav>
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <li><a href="#home" className="hover:text-blue-600">Home</a></li>
            <li><a href="#about" className="hover:text-blue-600">About</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </nav>
      </header> */}

      {/* Intro Section */}
            {/* Intro Section */}
      <section id="home" className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center py-16 px-6 bg-gradient-to-br from-sky-950 via-sky-900 to-slate-900 relative overflow-hidden">
        {/* Background animated elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10 animate-pulse"></div>
        
        <div className="text-center md:text-left relative z-10">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 mb-4 animate-pulse">Jamie Cameron</h2>
          <p className="text-xl text-gray-300">Web Developer | Designer | Data Analyst</p>
        </div>
        
        <div className="flex justify-center relative z-10">
          <div className="relative animate-float">
            <Image
              src="/images/portfolio-headshot.jpg"
              alt="Jamie Cameron"
              width={300}
              height={300}
              className="rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300"
            />
            {/* Multiple ring layers for enhanced glow */}
            <div className="absolute inset-0 rounded-xl ring-4 ring-cyan-200 blur-sm opacity-95 animate-pulse"></div>
            <div className="absolute inset-0 rounded-xl ring-8 ring-cyan-100 blur-xl opacity-80 animate-pulse"></div>
            <div className="absolute inset-0 rounded-xl ring-12 ring-white blur-2xl opacity-60 animate-pulse"></div>
            {/* Additional sparkle effect */}
            {/* <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-300 rounded-full animate-ping"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-300 rounded-full animate-ping delay-1000"></div> */}
          </div>
        </div>

        <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-cyan-200/30 relative z-10 hover:bg-white transition-colors duration-300">
          <p className="text-lg leading-relaxed text-gray-700">
            Welcome to my portfolio! Here you'll find a collection of my work, skills, and projects that showcase my abilities and creativity. Feel free to explore and reach out if you have any questions or opportunities.
          </p>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-gradient-to-br from-green-50 to-emerald-100 py-12 p-6 rounded-lg relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-200/20 via-transparent to-green-200/20 animate-pulse"></div>
        {[
          { src: "/images/k-drama.png", title: "K-Drama", url: "https://k-dramas-blue.vercel.app" },
          { src: "/images/Funko.png", title: "Funko Collection", url: "https://caids-funko-pops.vercel.app/" },
          { src: "/images/sightline.png", title: "Sightline Windows", url: "https://www.sightlinewindows.co.uk" },
          { src: "/images/CapeVerde.png", title: "My Cape Verde", url: "https://mycapeverde.org" },
          { src: "/images/waters.png", title: "Waters Construction", url: "https://waters-construction.vercel.app" },
          { src: "/images/fosters.png", title: "Fosters and Sons", url: "https://fosters-sons.vercel.app/" },
        ].map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 relative z-10 border border-emerald-200/50"
          >
            <div className="relative overflow-hidden">
              <Image
                src={project.src}
                alt={project.title}
                width={1200}
                height={400}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-2 right-2 w-3 h-3 bg-emerald-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-4 relative">
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-emerald-600 transition-colors duration-300">{project.title}</h3>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 group-hover:w-full transition-all duration-500"></div>
            </div>
          </a>
        ))}
      </div>


      {/* Projects List */}
      {/* <section className="py-12 px-6 bg-white" id="projects">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Other Projects</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Data Dashboard: EV Range vs Charge Speed Analysis</li>
          <li>Gym Attendance Trends : Google Sheets & Looker Studio</li>
          <li>Funko Pop Tracker App : Next.js, Tailwind CSS</li>
        </ul>
      </section> */}
      <section className="py-12 px-6 bg-blue-50" id="data-projects">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Data Analytics Projects</h2>
        <ul className="list-disc list-inside text-blue-800 space-y-2">
          <li>EV Range vs Charge Speed Dashboard : Google Sheets & Tableau</li>
          <li>Gym Attendance Trend Visuals : Tableau</li>
        </ul>
      </section>


      {/* Skills */}
      <section className="py-12 px-6 bg-gray-50" id="about">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skills</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Frontend: HTML, CSS, Tailwind, React, Next.js</li>
          <li>Data Tools: Google Sheets, Tableau, BigQuery</li>
          <li>Version Control: Git & GitHub</li>
        </ul>
      </section>

      {/* Contact */}
      <section className="py-12 px-6 bg-green-50" id="contact">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact</h2>
        <p className="text-gray-700">
          Feel free to reach out at{" "}
          <a
            href="mailto:jamie@example.com"
            className="text-blue-600 underline hover:text-blue-800 font-medium"
          >
            jamie@example.com
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-white text-center">
        <p>&copy; {new Date().getFullYear()} Jamie Cameron. All rights reserved.</p>
      </footer>
    </div>
  );
}
