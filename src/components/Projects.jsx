import { useState } from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'E-Commerce App',
      description: 'A modern e-commerce application built with React. Features include product catalog, shopping cart, user authentication, and responsive design for seamless shopping experience.',
      longDescription: 'Developed a comprehensive e-commerce application using React and modern frontend technologies. Implemented product filtering, search functionality, shopping cart management, and responsive design for optimal user experience across all devices.',
      image: '🛒',
      screenshot: '/api/placeholder/400/250',
      tech: ['React', 'JavaScript', 'CSS3', 'HTML5', 'Local Storage', 'Responsive Design'],
      github: 'https://github.com/Balwantkiraula/shopease-ecommerce',
      live: 'https://shopeaseeeeee.netlify.app/',
      featured: true
    },
    {
      id: 2,
      title: 'Voice Interaction Web App',
      description: 'A React-based application that converts text into speech and transcribes user speech into text using the Web Speech API.',
      longDescription: 'Developed a React-based application that converts text into speech and transcribes user speech into text using the Web Speech API. Enhanced user experience with Tailwind CSS styling as part of an LMS project.',
      image: '🎤',
      screenshot: '/api/placeholder/400/250',
      tech: ['React', 'Web Speech API', 'Tailwind CSS', 'JavaScript', 'TTS', 'STT'],
      github: '',
      live: '',
      featured: true
    },
    {
      id: 3,
      title: 'AI Tutor App',
      description: 'AI Tutor App – use OpenAI API for interactive learning.',
      longDescription: 'Developed an AI-powered tutoring application that leverages OpenAI API to provide interactive learning experiences. The app offers personalized educational content and intelligent responses to enhance student learning outcomes.',
      image: '🤖',
      screenshot: '/api/placeholder/400/250',
      tech: ['React', 'OpenAI API', 'JavaScript', 'AI/ML', 'Interactive Learning', 'Educational Technology'],
      github: '',
      live: '',
      featured: false
    },
    {
      id: 4,
      title: 'Expense Tracker',
      description: 'A comprehensive expense tracking application to manage personal finances with detailed analytics and categorization.',
      longDescription: 'Built a full-featured expense tracker application that helps users monitor their spending habits. Features include expense categorization, budget tracking, visual analytics, and data export capabilities for better financial management.',
      image: '💰',
      screenshot: '/api/placeholder/400/250',
      tech: ['React', 'JavaScript', 'CSS3', 'Local Storage', 'Chart.js', 'Responsive Design'],
      github: '',
      live: '',
      featured: false
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects, skills, and professional experience.',
      longDescription: 'Designed and developed a personal portfolio website using React and Tailwind CSS. Features include responsive design, smooth animations, project showcase, contact form, and modern UI/UX design principles.',
      image: '💼',
      screenshot: '/api/placeholder/400/250',
      tech: ['React', 'Tailwind CSS', 'JavaScript', 'Responsive Design', 'Vite', 'Modern UI/UX'],
      github: '',
      live: '',
      featured: false
    }
  ]

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } }
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  return (
    <motion.section id="projects" className="py-20 bg-gray-800 relative overflow-hidden scroll-mt-20" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={container}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 className="text-4xl md:text-5xl font-bold mb-6" variants={fadeUp}>
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </motion.h2>
          <motion.p className="text-xl text-gray-400 max-w-3xl mx-auto" variants={fadeUp}>
            Here are some of my recent projects that showcase my skills and experience
          </motion.p>
          <motion.div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6" variants={fadeUp}></motion.div>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="group bg-gray-700 rounded-2xl overflow-hidden hover:bg-gray-600"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              variants={fadeUp}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 250, damping: 20 }}
            >
              {/* Project Image/Icon */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                
                {/* Overlay Links */}
                {(project.github || project.live) && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-4">
                      {project.github && (
                        <motion.a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                          whileTap={{ scale: 0.96 }}
                        >
                          GitHub
                        </motion.a>
                      )}
                      {project.live && (
                        <motion.a 
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                          whileTap={{ scale: 0.96 }}
                        >
                          Live Demo
                        </motion.a>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <motion.span 
                      key={index}
                      className="px-3 py-1 bg-gray-600 text-gray-300 rounded-full text-sm hover:bg-gray-500 transition-colors"
                      whileHover={{ scale: 1.06 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Action Buttons */}
                {(project.github || project.live) && (
                  <div className="flex space-x-3">
                    {project.github && (
                      <motion.a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 border border-gray-500 text-gray-300 rounded-lg hover:bg-gray-600 hover:text-white transition-colors"
                        whileTap={{ scale: 0.96 }}
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Code
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a 
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        whileTap={{ scale: 0.96 }}
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
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

        {/* Other Projects */}
        <div className="mb-8">
          <motion.h3 className="text-3xl font-bold text-center text-white mb-12" variants={fadeUp}>Other Projects</motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {otherProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                className="group bg-gray-700 rounded-xl overflow-hidden hover:bg-gray-600"
                variants={fadeUp}
                whileHover={{ y: -3, scale: 1.015 }}
                transition={{ type: 'spring', stiffness: 250, damping: 20 }}
              >
                <div className="h-32 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {project.image}
                  </div>
                </div>
                
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tech.slice(0, 3).map((tech, index) => (
                      <motion.span 
                        key={index}
                        className="px-2 py-1 bg-gray-600 text-gray-300 rounded text-xs"
                        whileHover={{ scale: 1.06 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-gray-600 text-gray-300 rounded text-xs">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {(project.github || project.live) && (
                    <div className="flex space-x-2">
                      {project.github && (
                        <motion.a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors"
                          whileTap={{ scale: 0.96 }}
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </motion.a>
                      )}
                      {project.live && (
                        <motion.a 
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors"
                          whileTap={{ scale: 0.96 }}
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </motion.a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Projects
