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
      <section id="home" className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center py-16 px-6 bg-sky-950">
        <div className="text-center md:text-left">
          <h2 className="text-5xl font-bold text-gray-100 mb-4">Jamie Cameron</h2>
          <p className="text-xl text-gray-300">Web Developer | Designer | Data Analyst</p>
        </div>
        <div className="flex justify-center">
          <div className="relative">
            <Image
              src="/images/portfolio-headshot.jpg"
              alt="Jamie Cameron"
              width={300}
              height={300}
              className="rounded-xl shadow-lg"
            />
            {/* Multiple ring layers for enhanced glow */}
            <div className="absolute inset-0 rounded-xl ring-4 ring-cyan-200 blur-sm opacity-95 animate-pulse"></div>
            <div className="absolute inset-0 rounded-xl ring-8 ring-cyan-100 blur-xl opacity-80 animate-pulse"></div>
            <div className="absolute inset-0 rounded-xl ring-12 ring-white blur-2xl opacity-60 animate-pulse"></div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md text-gray-700">
          <p className="text-lg leading-relaxed">
            Welcome to my portfolio! Here you’ll find a collection of my work, skills, and projects that showcase my abilities and creativity. Feel free to explore and reach out if you have any questions or opportunities.
          </p>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-green-50 py-12 p-6 rounded-lg">
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
            className="block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <Image
              src={project.src}
              alt={project.title}
              width={1200}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
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
