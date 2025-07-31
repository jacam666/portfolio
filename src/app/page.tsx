import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-gray-900">Jamie Cameron</h1>
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:block">
              <ul className="flex items-center space-x-8">
                <li>
                  <a 
                    href="#home" 
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
                  >
                    Home
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#data-projects" 
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
                  >
                    Projects
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#about" 
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
                  >
                    Skills
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 transition-all duration-200 shadow-sm hover:shadow-md"
                    aria-label="Contact Jamie Cameron"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                type="button" 
                className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 transition-colors duration-200"
                aria-label="Open mobile menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Intro Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-8 bg-white relative overflow-hidden">
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
                Aspiring Data Analyst & Self-Taught Developer
              </h2>
              
              <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Self-taught developer with a passion for creating digital experiences. Currently pursuing Google Data Analytics certification to transition into data-driven roles.
              </p>
              
              <div className="flex justify-center lg:justify-start">
                <a 
                  href="mailto:ja6cam@gmail.com" 
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 transition-all duration-300 shadow-lg hover:shadow-xl"
                  aria-label="Send email to Jamie Cameron"
                >
                  Get In Touch
                </a>
              </div>
            </div>
            
            {/* Right Content - Profile Image */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
                  <Image
                    src="/images/headshot2.jpg"
                    alt="Jamie Cameron"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover rounded-3xl shadow-2xl"
                  />
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full -z-10"></div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-100 rounded-full -z-10"></div>
                  
                  {/* Floating Cards */}
                  <div className="absolute -left-4 sm:-left-8 top-8 bg-white p-3 sm:p-4 rounded-xl shadow-lg border border-gray-100">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-xs sm:text-sm font-medium text-gray-700">Available for work</span>
                    </div>
                  </div>
                  
                  <div className="absolute -right-4 sm:-right-8 bottom-16 bg-white p-3 sm:p-4 rounded-xl shadow-lg border border-gray-100">
                    <div className="text-center">
                      <div className="text-base sm:text-lg font-bold text-gray-900">Jamie Cameron</div>
                      <div className="text-xs text-blue-600 font-medium">Data Analytics Student</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 px-4 sm:px-8 bg-gray-50">
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
          { src: "/images/uksnc.png", title: "UKSNC Supplements", url: "https://snc-supps.vercel.app/", tech: "Next.js, React, Tailwind" },
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
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
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
      <section className="py-16 px-4 sm:px-8 bg-white" id="data-projects">
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
      <section className="py-16 px-4 sm:px-8 bg-gray-50" id="about">
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
      <section className="py-16 px-4 sm:px-8 bg-white" id="contact">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
          <p className="text-gray-600 mb-8 text-lg">
            I'm always interested in new opportunities and collaborations. Let's discuss how we can work together.
          </p>
          <a
            href="mailto:ja6cam@gmail.com"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="Send email to Jamie Cameron"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Jamie Cameron. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
