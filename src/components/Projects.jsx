import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiShoppingCart, FiMessageSquare, FiBarChart2, FiCheckSquare } from 'react-icons/fi'
import { FaRocket } from 'react-icons/fa'

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'Shopee E-commerce Website',
      description: 'A fully functional, responsive e-commerce application built with React.js. Features global state management via the Context API, Firebase Authentication, real-time database storage, and React Router multi-page navigation.',
      longDescription: 'Developed a feature-rich e-commerce store with high performance and seamless user experience. Integrated user authentication and cloud database services using Google Firebase, custom routing structures, and full Netlify CI/CD automation.',
      image: <FiShoppingCart className="text-purple-650" />,
      tech: ['React.js', 'Context API', 'Firebase Auth', 'Realtime Database', 'React Router', 'Netlify', 'GitHub'],
      github: 'https://github.com/Balwantkiraula/shopease-ecommerce',
      live: 'https://shopeaseeeeee.netlify.app/',
      featured: true
    },
    {
      id: 2,
      title: 'AI Chatbot Portal',
      description: 'A conversational, responsive chat interface with a polished frontend, connected with intelligent backend models and optimized for fast user interactivity.',
      longDescription: 'Sleek, fluid chat experience deployed on Render. Features micro-interactions, responsive sizing for all devices, and an accessible layout perfect for real-time portfolio display.',
      image: <FiMessageSquare className="text-pink-650" />,
      tech: ['React.js', 'API Integration', 'Responsive Design', 'Tailwind CSS', 'Render'],
      github: '',
      live: 'https://chatbot-frontend1-jajq.onrender.com/',
      featured: true
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      description: 'An interactive, clean operations dashboard for visualizing and monitoring data metrics, user growth, and active system events.',
      longDescription: 'Production-ready dashboard shell deployed on Vercel, optimized for screen responsiveness, accessible table navigation, and graphical data representations.',
      image: <FiBarChart2 className="text-cyan-650" />,
      tech: ['React.js', 'Tailwind CSS', 'Vercel', 'Data Visuals', 'UI Shells'],
      github: '',
      live: 'https://dashboard-is48teogz-balwantkiraulas-projects.vercel.app/',
      featured: true
    },
    {
      id: 4,
      title: 'Task Flow Manager',
      description: 'A robust digital task management tool for planning, sorting, and organizing projects, custom lists, workflows, and task tracking.',
      longDescription: 'Fully responsive task manager deployed on Vercel to demonstrate clean CRUD workflows, persistent local state management, and smooth React animations.',
      image: <FiCheckSquare className="text-emerald-650" />,
      tech: ['React.js', 'State Persistence', 'Animations', 'Vercel', 'UX Flow'],
      github: '',
      live: 'https://task-managment-fkbtprpkp-balwantkiraulas-projects.vercel.app/',
      featured: true
    },
    {
      id: 5,
      title: 'FlowPilot — SaaS Landing',
      description: 'A gorgeous, conversion-focused mobile-first landing page for a SaaS platform. Features animated sections, clean pricing tables, and glowing highlights.',
      longDescription: 'Built with Next.js App Router and Tailwind CSS. Offers blazing fast performance, optimized images, semantic structure, and modern clean branding aesthetics.',
      image: <FaRocket className="text-amber-650" />,
      tech: ['Next.js', 'Tailwind CSS', 'App Router', 'Vercel', 'SaaS Branding'],
      github: '',
      live: 'https://landingpage-gamma-nine-76.vercel.app/',
      featured: true
    }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  }

  return (
    <motion.section 
      id="projects" 
      className="py-20 bg-transparent relative overflow-hidden scroll-mt-20" 
      initial="hidden" 
      whileInView="show" 
      viewport={{ once: true, amount: 0.1 }} 
      variants={container}
    >
      {/* Ambient background glow */}
      <div className="absolute left-1/2 bottom-0 w-80 h-80 bg-[#e8dbff]/30 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight" variants={fadeUp}>
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </motion.h2>
          <motion.p className="text-lg text-slate-600 max-w-3xl mx-auto font-medium" variants={fadeUp}>
            Here is a showcase of my recent live applications, demonstrating responsive systems, clean code, and solid state design.
          </motion.p>
          <motion.div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-500 mx-auto rounded-full mt-6" variants={fadeUp}></motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              className="group glass-card rounded-3xl overflow-hidden hover:shadow-lg transition-all duration-300 relative flex flex-col h-full"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              variants={fadeUp}
              whileHover={{ y: -4 }}
            >
              {/* Project Image/Icon Header */}
              <div className="relative h-44 bg-gradient-to-br from-purple-500/10 via-[#f4f0ff]/80 to-cyan-500/10 flex items-center justify-center border-b border-white/50">
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300 select-none">
                  {project.image}
                </div>
                <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"></div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors tracking-tight">
                  {project.title}
                </h3>
                <p className="text-slate-600 font-medium text-sm md:text-base mb-5 leading-relaxed flex-grow">
                  {project.description}
                </p>
                
                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((tech, index) => (
                    <motion.span 
                      key={index}
                      className="px-2.5 py-1 bg-white/70 text-slate-700 font-bold border border-slate-100 rounded-lg text-xs"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Action Links */}
                {(project.github || project.live) && (
                  <div className="flex items-center space-x-3 pt-3 border-t border-slate-100/60 mt-auto">
                    {project.github && (
                      <motion.a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 border border-slate-300 text-slate-700 font-bold rounded-full text-xs hover:bg-slate-50 hover:text-slate-900 transition-all"
                        whileTap={{ scale: 0.96 }}
                      >
                        <svg className="w-3.5 h-3.5 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Source
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a 
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold rounded-full text-xs shadow-sm hover:shadow-purple-500/10 transition-all"
                        whileTap={{ scale: 0.96 }}
                      >
                        <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Projects
