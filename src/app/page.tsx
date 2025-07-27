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
      <section id="home" className="min-h-screen flex items-center justify-center px-8 bg-white relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50 opacity-50"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)`
        }}></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
                  Available for new opportunities
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Hi, I'm <span className="text-blue-600">Jamie</span>
              </h1>
              
              <h2 className="text-2xl lg:text-3xl text-gray-600 mb-8 font-light">
                Web Developer & Data Analyst
              </h2>
              
              <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                I create exceptional digital experiences through clean code, thoughtful design, and data-driven insights.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="mailto:ja6cam@gmail.com" 
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Get In Touch
                </a>
                <a 
                  href="#projects" 
                  className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-colors duration-300"
                >
                  View My Work
                </a>
              </div>
            </div>
            
            {/* Right Content - Profile Image */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
                  <Image
                    src="/images/portfolio-headshot.jpg"
                    alt="Jamie Cameron"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover rounded-3xl shadow-2xl"
                  />
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full -z-10"></div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-100 rounded-full -z-10"></div>
                  
                  {/* Floating Cards */}
                  <div className="absolute -left-8 top-8 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-700">Available for work</span>
                    </div>
                  </div>
                  
                  <div className="absolute -right-8 bottom-16 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">6+</div>
                      <div className="text-xs text-gray-500">Projects Completed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">A selection of my recent work showcasing different technologies and design approaches.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { src: "/images/k-drama.png", title: "K-Drama", url: "https://k-dramas-blue.vercel.app", tech: "React, Next.js" },
          { src: "/images/Funko.png", title: "Funko Collection", url: "https://caids-funko-pops.vercel.app/", tech: "Next.js, Tailwind" },
          { src: "/images/sightline.png", title: "Sightline Windows", url: "https://www.sightlinewindows.co.uk", tech: "HTML, CSS, JavaScript" },
          { src: "/images/CapeVerde.png", title: "My Cape Verde", url: "https://mycapeverde.org", tech: "WordPress, Custom CSS" },
          { src: "/images/waters.png", title: "Waters Construction", url: "https://waters-construction.vercel.app", tech: "React, Vercel" },
          { src: "/images/fosters.png", title: "Fosters and Sons", url: "https://fosters-sons.vercel.app/", tech: "Next.js, React" },
        ].map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200"
          >
            <div className="relative overflow-hidden">
              <Image
                src={project.src}
                alt={project.title}
                width={1200}
                height={400}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{project.title}</h3>
              <p className="text-sm text-gray-500 font-medium">{project.tech}</p>
            </div>
          </a>
        ))}
          </div>
        </div>
      </section>

      {/* Data Analytics Section */}
      <section className="py-16 px-8 bg-white" id="data-projects">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Data Analytics Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">EV Range Analysis</h3>
              <p className="text-blue-800 mb-4">Comprehensive dashboard analyzing electric vehicle range vs charge speed relationships using Google Sheets and Tableau.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Google Sheets</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Tableau</span>
              </div>
            </div>
            <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
              <h3 className="text-xl font-semibold text-indigo-900 mb-3">Gym Attendance Trends</h3>
              <p className="text-indigo-800 mb-4">Visual analysis of gym attendance patterns and trends using advanced data visualization techniques.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Tableau</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Data Visualization</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Skills Section */}
      <section className="py-16 px-8 bg-gray-50" id="about">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Frontend Development</h3>
              <ul className="text-gray-600 space-y-2">
                <li>HTML, CSS, JavaScript</li>
                <li>React, Next.js</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-green-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Analytics</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Google Sheets</li>
                <li>Tableau</li>
                <li>BigQuery</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-purple-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Development Tools</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Git & GitHub</li>
                <li>VS Code</li>
                <li>Vercel</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-8 bg-white" id="contact">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
          <p className="text-gray-600 mb-8 text-lg">
            I'm always interested in new opportunities and collaborations. Let's discuss how we can work together.
          </p>
          <a
            href="mailto:ja6cam@gmail.com"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-8">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Jamie Cameron. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
