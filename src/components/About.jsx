import { useState } from 'react'
import { motion } from 'framer-motion'
import profileImage from '@assets/1757647829086.jpg'
import { FaLaptopCode, FaBolt } from 'react-icons/fa'
import { FiDownload } from 'react-icons/fi'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/BALWANT_resume.pdf'
    link.download = 'BALWANT_resume.pdf'
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
    <motion.section 
      id="about" 
      className="py-20 bg-transparent relative overflow-hidden scroll-mt-20" 
      initial="hidden" 
      whileInView="show" 
      viewport={{ once: true, amount: 0.2 }} 
      variants={container}
    >
      {/* Soft Ambient Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-[#e8dbff]/30 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight" variants={fadeUp}>
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h2>
          <motion.div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-500 mx-auto rounded-full" variants={fadeUp}></motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div className="space-y-8" variants={container}>
            <motion.div className="space-y-6" variants={fadeUp}>
              <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Hello! I'm <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent font-extrabold">Balwant Kiraula</span>
              </h3>
              
              <p className="text-lg text-slate-700 leading-relaxed font-medium">
                Frontend Developer with hands-on experience in building responsive, user-friendly 
                web applications using <span className="font-bold text-purple-600">Next.js</span>,{' '}
                <span className="font-bold text-purple-600">React.js</span>,{' '}
                <span className="font-bold text-purple-600">JavaScript</span>, and{' '}
                <span className="font-bold text-purple-600">Tailwind CSS</span>.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                I'm highly skilled in transforming Figma designs into pixel-perfect, responsive UI, 
                developing robust reusable components, and integrating REST APIs. I am passionate 
                about writing clean code, optimizing performance, and delivering exceptionally smooth 
                user experiences while continuously learning modern frontend technologies.
              </p>
            </motion.div>

            {/* Personality Traits */}
            <motion.div className="space-y-4" variants={fadeUp}>
              <h4 className="text-xl font-bold text-slate-800">What drives me:</h4>
              <div className="flex flex-wrap gap-3">
                {['Problem Solver', 'Team Player', 'Continuous Learner', 'Detail Oriented', 'Creative Thinker'].map((trait, index) => (
                  <motion.span 
                    key={index}
                    className="px-4 py-2 bg-white/60 text-purple-700 border border-purple-100 rounded-full text-sm font-semibold shadow-sm"
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
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold rounded-full shadow-md hover:shadow-purple-500/20"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <FiDownload className="w-5 h-5 mr-2 group-hover:translate-y-0.5 transition-transform" />
                Download Resume
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Image and Stats */}
          <motion.div className="space-y-8" variants={container}>
            {/* Profile Image */}
            <motion.div className="relative" variants={fadeUp}>
              <div className="w-80 h-80 mx-auto rounded-3xl overflow-hidden shadow-xl border-4 border-white/60">
                <img 
                  src={profileImage} 
                  alt="Balwant Kiraula" 
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div className="absolute -top-4 -right-4 w-20 h-20 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-purple-100 flex items-center justify-center text-3xl text-purple-600" animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 3 }}>
                <FaLaptopCode />
              </motion.div>
              <motion.div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-cyan-100 flex items-center justify-center text-2xl text-cyan-500" animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}>
                <FaBolt />
              </motion.div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div className="grid grid-cols-2 gap-6" variants={container}>
              {[
                { value: 'Fresher', label: 'Experience Level', color: 'text-purple-600' },
                { value: '5+', label: 'Projects Completed', color: 'text-pink-600' },
                { value: 'React', label: 'Specialization', color: 'text-cyan-600' },
                { value: 'Eager', label: 'To Learn', color: 'text-amber-600' }
              ].map((stat, i) => (
                <motion.div key={i} className="glass-card rounded-2xl p-6 text-center" variants={fadeUp} whileHover={{ scale: 1.03, y: -2 }}>
                  <div className={`text-3xl font-extrabold ${stat.color} mb-2 tracking-tight`}>{stat.value}</div>
                  <div className="text-slate-600 font-semibold text-sm">{stat.label}</div>
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
