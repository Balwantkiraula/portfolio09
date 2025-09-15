import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
// Use motion explicitly to satisfy certain linters that don't detect JSX usage
void motion
import profileImage from '../assets/1757647829086.jpg'

const TEXTS = [
  'Frontend Developer',
  'React Developer',
  'UI Developer',
  'Problem Solver',
  'Tech Enthusiast'
]

const Hero = () => {
  const [currentText, setCurrentText] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100
    const pauseTime = 2000

    const timeout = setTimeout(() => {
      const current = TEXTS[currentText]
      
      if (!isDeleting && displayText === current) {
        setTimeout(() => setIsDeleting(true), pauseTime)
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false)
        setCurrentText((prev) => (prev + 1) % TEXTS.length)
      } else {
        setDisplayText(isDeleting 
          ? current.substring(0, displayText.length - 1)
          : current.substring(0, displayText.length + 1)
        )
      }
    }, typeSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentText])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, when: 'beforeChildren' }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  return (
    <motion.section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden scroll-mt-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>

      <motion.div 
        className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
      >
        {/* Profile Image */}
        <motion.div 
          className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl"
          variants={itemVariants}
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: 'spring', stiffness: 250, damping: 18 }}
        >
          <img src={profileImage} alt="Balwant Kiraula" className="w-full h-full object-cover" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6" variants={itemVariants}>
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            Balwant Kiraula
          </span>
        </motion.h1>

        {/* Animated Role Text */}
        <motion.div className="h-16 flex items-center justify-center mb-8" variants={itemVariants}>
          <span className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-300">
            I'm a{' '}
            <span className="text-blue-400 font-bold min-h-[2rem] inline-block">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </span>
        </motion.div>

        {/* Description */}
        <motion.p 
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Passionate about creating beautiful, functional, and user-centered digital experiences. 
          I love turning complex problems into simple, elegant solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div className="flex flex-col sm:flex-row gap-6 justify-center items-center" variants={itemVariants}>
          <motion.button 
            onClick={() => scrollToSection('projects')}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
          </motion.button>
          
          <motion.button 
            onClick={() => scrollToSection('contact')}
            className="group px-8 py-4 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-lg font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button 
          onClick={() => scrollToSection('about')}
          className="mx-auto mt-16 flex items-center gap-2 text-gray-300 hover:text-white"
          variants={itemVariants}
          whileHover={{ y: 2 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="text-sm tracking-wider">Scroll</span>
          <span className="relative inline-flex h-10 w-6 items-start justify-center rounded-full border border-gray-600/70">
            <motion.span 
              className="mt-1 h-2 w-1.5 rounded-full bg-gray-400"
              animate={{ y: [0, 14, 0], opacity: [1, 0.6, 1] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            />
          </span>
        </motion.button>
      </motion.div>
    </motion.section>
  )
}

export default Hero
