"use client"

import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    src: "/images/DataFlow.png",
    title: "Azure Data Engineering Pipeline",
    url: "https://github.com/jacam666/energy-analytics-pipeline",
    tech: "Azure Data Factory, Synapse, SQL, Power BI",
    label: "GitHub Repo",
  },
  { src: "/images/coaching-homepage.png", title: "Coaching Website", url: "https://jc-coach.com", tech: "React, Next.js, Tailwind", label: "Live Site" },
  { src: "/images/k-drama-2.png", title: "K-Drama project for my daughter", url: "https://k-dramas-blue.vercel.app", tech: "React, Next.js", label: "Live Site" },
  { src: "/images/sightline-2.png", title: "Sightline Windows", url: "https://www.sightlinewindows.co.uk", tech: "HTML, CSS, JavaScript", label: "Live Site" },
  { src: "/images/azure-notes.png", title: "Data Engineering Notes", url: "https://azure-engineering-notes.vercel.app/", tech: "Next.js, React, Tailwind", label: "Live Site" },
  { src: "/images/waters-3.png", title: "Construction Company Website", url: "https://waters-construction.vercel.app", tech: "React, Vercel", label: "Live Site" },
  { src: "/images/fosters-2.png", title: "Fosters and Sons", url: "https://fosters-sons.vercel.app/", tech: "Next.js, React", label: "Live Site" },
  { src: "/images/funko-4.png", title: "Funko Collection project for my daughter", url: "https://caids-funko-pops.vercel.app/", tech: "Next.js, Tailwind", label: "Live Site" },
  { src: "/images/rehab-image.png", title: "Exercise rehab project", url: "https://pens-rehab-exercises.vercel.app/", tech: "Next.js, Tailwind", label: "Live Site" },
  { src: "/images/Coles-portfolio.png", title: "Daughters Portfolio", url: "https://coles-portfoilio.vercel.app/", tech: "Next.js, React, Tailwind", label: "Live Site" },
  { src: "/images/serena-image.png", title: "Client Fitness Site", url: "https://serena-fitness-five.vercel.app/", tech: "Next.js, React, Tailwind", label: "Live Site" },
  { src: "/images/CapeVerde-2.png", title: "Charity Project", url: "https://mycapeverde.org", tech: "React, Custom CSS", label: "Live Site" },

];

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const visibleProjects = showAllProjects ? projects : projects.slice(0, 6);

  return (
    <div className="min-h-screen text-slate-900">
      {/* Header */}
      <header className="bg-white/85 backdrop-blur border-b border-cyan-100 sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold tracking-tight text-slate-900">Jamie Cameron</h1>
            </div>

            {/* Navigation */}
            <nav className="hidden md:block">
              <ul className="flex items-center space-x-8">
                <li>
                  <a
                    href="#home"
                    className="text-slate-700 hover:text-cyan-700 font-medium transition-colors duration-200 relative group"
                  >
                    Home
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-700 transition-all duration-200 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="#featured-projects"
                    className="text-slate-700 hover:text-cyan-700 font-medium transition-colors duration-200 relative group"
                  >
                    Projects
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-700 transition-all duration-200 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-slate-700 hover:text-cyan-700 font-medium transition-colors duration-200 relative group"
                  >
                    Skills
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-700 transition-all duration-200 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="/Jamie-Cameron-CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 hover:text-cyan-700 font-medium transition-colors duration-200 relative group"
                    aria-label="Download Jamie Cameron's CV"
                  >
                    CV
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-700 transition-all duration-200 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:ja6cam@gmail.com"
                    className="px-6 py-2 bg-cyan-700 text-white rounded-lg font-medium hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-200 transition-all duration-200 shadow-sm hover:shadow-md"
                    aria-label="Send email to Jamie Cameron"
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
                onClick={toggleMobileMenu}
                className="text-slate-700 hover:text-cyan-700 focus:outline-none focus:text-cyan-700 transition-colors duration-200"
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-cyan-100 bg-white/95 backdrop-blur-sm">
              <div className="px-4 py-3 space-y-3">
                <a
                  href="#home"
                  onClick={toggleMobileMenu}
                  className="block text-slate-700 hover:text-cyan-700 font-medium transition-colors duration-200 py-1"
                >
                  Home
                </a>
                <a
                  href="#featured-projects"
                  onClick={toggleMobileMenu}
                  className="block text-slate-700 hover:text-cyan-700 font-medium transition-colors duration-200 py-1"
                >
                  Projects
                </a>
                <a
                  href="#about"
                  onClick={toggleMobileMenu}
                  className="block text-slate-700 hover:text-cyan-700 font-medium transition-colors duration-200 py-1"
                >
                  Skills
                </a>
                <a
                  href="/Jamie-Cameron-CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={toggleMobileMenu}
                  className="block text-slate-700 hover:text-cyan-700 font-medium transition-colors duration-200 py-1"
                  aria-label="Download Jamie Cameron's CV"
                >
                  Download CV
                </a>
                <a
                  href="mailto:ja6cam@gmail.com"
                  onClick={toggleMobileMenu}
                  className="block w-full text-center px-6 py-3 bg-cyan-700 text-white rounded-lg font-medium hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-200 transition-all duration-200 mt-4"
                  aria-label="Send email to Jamie Cameron"
                >
                  Contact Me
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Intro Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-8 bg-white relative overflow-hidden surface-grid">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-cyan-50/40 to-sky-100/40"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(8, 145, 178, 0.16) 0%, transparent 50%),
                          radial-gradient(circle at 75% 75%, rgba(14, 116, 144, 0.12) 0%, transparent 52%)`
        }}></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left animate-fade-up">
              <div className="mb-5">
                <span className="inline-block px-4 py-2 bg-cyan-100 text-cyan-800 rounded-full text-sm font-semibold mb-4 border border-cyan-200">
                  Available for new opportunities
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
                Aspiring <span className="text-cyan-700">Azure Data Engineer</span>
              </h1>

              <h2 className="text-2xl lg:text-3xl text-slate-600 mb-8 font-light">
                Hi, I&apos;m Jamie. I&apos;m focused on building scalable data pipelines, transformation workflows, and cloud-first data platforms.
              </h2>

              <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                I&apos;m building hands-on Azure data engineering projects using Blob Storage, Data Factory, Synapse Serverless, SQL, Python, and Power BI.              </p>

              <div className="mb-10 grid grid-cols-3 gap-3 max-w-xl mx-auto lg:mx-0">
                <div className="rounded-xl bg-white/80 border border-cyan-100 p-3">
                  <p className="text-2xl font-bold text-slate-900">11+</p>
                  <p className="text-xs text-slate-600">Projects Live</p>
                </div>
                <div className="rounded-xl bg-white/80 border border-cyan-100 p-3">
                  <p className="text-2xl font-bold text-slate-900">3+</p>
                  <p className="text-xs text-slate-600">Core Stacks</p>
                </div>
                <div className="rounded-xl bg-white/80 border border-cyan-100 p-3">
                  <p className="text-2xl font-bold text-slate-900">2026</p>
                  <p className="text-xs text-slate-600">Open to Work</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="mailto:ja6cam@gmail.com"
                  className="px-8 py-4 bg-cyan-700 text-white rounded-lg font-medium hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-200 transition-all duration-300 shadow-lg hover:shadow-xl"
                  aria-label="Send email to Jamie Cameron"
                >
                  Get In Touch
                </a>
                <a
                  href="/Jamie-Cameron-CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border-2 border-cyan-700 text-cyan-700 rounded-lg font-medium hover:bg-cyan-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-cyan-200 transition-all duration-300 shadow-lg hover:shadow-xl"
                  aria-label="Download Jamie Cameron's CV"
                >
                  Download CV
                </a>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="flex-1 flex justify-center lg:justify-end animate-fade-up">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
                  <Image
                    src="/images/headshot2.jpg"
                    alt="Jamie Cameron"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover rounded-3xl shadow-2xl border border-cyan-100"
                  />

                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-100 rounded-full -z-10"></div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-sky-100 rounded-full -z-10"></div>

                  {/* Floating Cards */}
                  <div className="absolute -left-4 sm:-left-8 top-8 bg-white p-3 sm:p-4 rounded-xl shadow-lg border border-cyan-100">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-xs sm:text-sm font-medium text-slate-700">Available for work</span>
                    </div>
                  </div>

                  <div className="absolute -right-4 sm:-right-8 bottom-16 bg-white p-3 sm:p-4 rounded-xl shadow-lg border border-cyan-100">
                    <div className="text-center">
                      <div className="text-base sm:text-lg font-bold text-slate-900">Jamie Cameron</div>
                      <div className="text-xs text-cyan-700 font-medium">Aspiring Azure Data Engineer</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-4 sm:px-8 bg-slate-50" id="featured-projects">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Featured Projects</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">A selection of data engineering and web development projects, focused on practical cloud workflows, clean design, and real-world problem solving.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleProjects.map((project, index) => (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200 hover:border-cyan-300"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.src}
                    alt={project.title}
                    width={1200}
                    height={400}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="absolute top-3 right-3 px-2 py-1 text-xs font-semibold rounded-full bg-white/85 text-slate-700 border border-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.label}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl min-h-[56px] font-semibold text-slate-900 mb-3 group-hover:text-cyan-700 transition-colors duration-300">{project.title}</h3>
                  <p className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs text-cyan-800 font-semibold">
                    {project.tech}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {projects.length > 6 && (
            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAllProjects((prev) => !prev)}
                className="px-6 py-3 rounded-lg bg-cyan-700 text-white font-medium hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-200 transition-all duration-300"
                aria-label={showAllProjects ? "Show fewer projects" : "Show all projects"}
              >
                {showAllProjects ? "Show Fewer Projects" : "View More Projects"}
              </button>
            </div>
          )}
        </div>
      </section>


      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-8 bg-white" id="about">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center tracking-tight">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-cyan-700 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Frontend Development</h3>
              <ul className="text-slate-600 space-y-2">
                <li>HTML, CSS, JavaScript</li>
                <li>React, Next.js</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div className="text-center bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-cyan-700 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Data Engineering</h3>
              <ul className="text-slate-600 space-y-2">
                <li>Azure Data Factory</li>
                <li>Azure Synapse (Serverless SQL)</li>
                <li>SQL (OPENROWSET, Views)</li>
                <li>Power BI</li>
              </ul>
            </div>
            <div className="text-center bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-sky-700 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Development Tools</h3>
              <ul className="text-slate-600 space-y-2">
                <li>Git & GitHub</li>
                <li>VS Code</li>
                <li>Vercel</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-8 bg-slate-900 text-white" id="contact">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 tracking-tight">Get In Touch</h2>
          <p className="text-slate-300 mb-8 text-lg">
            I'm always interested in new opportunities. Let's discuss how we can work together.
          </p>
          <a
            href="mailto:ja6cam@gmail.com"
            className="inline-flex items-center px-8 py-4 bg-cyan-600 text-white font-medium rounded-lg hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-300 transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="Send email to Jamie Cameron"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <p className="text-slate-400">&copy; {new Date().getFullYear()} Jamie Cameron. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
