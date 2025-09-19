import { useState } from 'react'
import { motion } from 'framer-motion'
import profileImage from '@assets/1757647829086.jpg'
import resumePdf from '@assets/balwant resume.pdf'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = resumePdf
    link.download = 'Balwant_Kiraula_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } }
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  return (
    <motion.section id="about" className="py-20 bg-gray-800 relative overflow-hidden scroll-mt-20" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={container}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 className="text-4xl md:text-5xl font-bold mb-6" variants={fadeUp}>
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h2>
          <motion.div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" variants={fadeUp}></motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div className="space-y-8" variants={container}>
            <motion.div className="space-y-6" variants={fadeUp}>
              <h3 className="text-3xl font-bold text-white">
                Hello! I'm <span className="text-blue-400">Balwant Kiraula</span>
              </h3>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate frontend developer specializing in React and modern web 
                technologies. As a fresher, I bring fresh perspectives and enthusiasm to 
                creating beautiful, functional, and user-centered digital experiences.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm constantly learning new technologies and best practices in frontend 
                development. I love building responsive web applications and turning design 
                concepts into interactive user interfaces that users love.
              </p>
            </motion.div>

            {/* Personality Traits */}
            <motion.div className="space-y-4" variants={fadeUp}>
              <h4 className="text-xl font-semibold text-white">What drives me:</h4>
              <div className="flex flex-wrap gap-3">
                {['Problem Solver', 'Team Player', 'Continuous Learner', 'Detail Oriented', 'Creative Thinker'].map((trait, index) => (
                  <motion.span 
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-sm font-medium text-white"
                    whileHover={{ scale: 1.06 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    {trait}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Resume Download Button */}
            <motion.div className="pt-4" variants={fadeUp}>
              <motion.button
                onClick={handleDownloadResume}
                className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Image and Stats */}
          <motion.div className="space-y-8" variants={container}>
            {/* Profile Image */}
            <motion.div className="relative" variants={fadeUp}>
              <div className="w-80 h-80 mx-auto rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={profileImage} 
                  alt="Balwant Kiraula" 
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center text-2xl" animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 3 }}>
                💻
              </motion.div>
              <motion.div className="absolute -bottom-4 -left-4 w-20 h-20 bg-green-400 rounded-full flex items-center justify-center text-xl" animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}>
                ⚡
              </motion.div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div className="grid grid-cols-2 gap-6" variants={container}>
              {[
                { value: 'Fresher', label: 'Experience Level', color: 'text-blue-400' },
                { value: '5+', label: 'Projects Completed', color: 'text-purple-400' },
                { value: 'React', label: 'Specialization', color: 'text-green-400' },
                { value: 'Eager', label: 'To Learn', color: 'text-yellow-400' }
              ].map((stat, i) => (
                <motion.div key={i} className="bg-gray-700 rounded-xl p-6 text-center" variants={fadeUp} whileHover={{ scale: 1.03 }}>
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default About
