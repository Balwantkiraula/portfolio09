import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
// Use motion explicitly to satisfy certain linters that don't detect JSX usage
void motion
import profileImage from '../assets/1757647829086.jpg'

const TEXTS = [
  'Frontend Developer',
  'React Js Developer',
  'Next Js Developer',
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
      aria-labelledby="hero-heading"
      className="min-h-screen flex items-center justify-center relative overflow-hidden scroll-mt-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Dynamic Ambient Blur Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#ffddcf]/40 rounded-full blur-3xl animate-pulse" aria-hidden="true"></div>
      <div className="absolute top-40 right-20 w-48 h-48 bg-[#e8dbff]/40 rounded-full blur-3xl animate-pulse delay-1000" aria-hidden="true"></div>
      <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-[#cff5fc]/50 rounded-full blur-3xl animate-pulse delay-2000" aria-hidden="true"></div>

      <motion.div 
        className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
      >
        {/* Profile Image with Sleek Shadow */}
        <motion.div 
          className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden shadow-xl border-4 border-white/80"
          variants={itemVariants}
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: 'spring', stiffness: 250, damping: 18 }}
        >
          <img src={profileImage} alt="Balwant Kiraula" className="w-full h-full object-cover" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1 id="hero-heading" className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight text-slate-900" variants={itemVariants}>
          <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
            Balwant Kiraula
          </span>
        </motion.h1>

        {/* Animated Role Text */}
        <motion.div className="h-16 flex items-center justify-center mb-8" variants={itemVariants}>
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-700">
            <span aria-hidden="true">
              I'm a{' '}
              <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent font-extrabold min-h-[2rem] inline-block">
                {displayText}
                <span className="text-purple-600 animate-pulse">|</span>
              </span>
            </span>
            <span className="sr-only">
              Roles include Frontend Developer, React Developer, UI Developer, Problem Solver, and Tech Enthusiast.
            </span>
          </p>
        </motion.div>

        {/* Description */}
        <motion.p 
          className="text-lg md:text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
          variants={itemVariants}
        >
          Passionate about creating beautiful, functional, and user-centered digital experiences. 
          I love turning complex problems into simple, elegant solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div className="flex flex-col sm:flex-row gap-6 justify-center items-center" variants={itemVariants}>
          <motion.button 
            type="button"
            onClick={() => scrollToSection('projects')}
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full font-bold text-white shadow-md hover:shadow-purple-500/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </motion.button>
          
          <motion.button 
            type="button"
            onClick={() => scrollToSection('contact')}
            className="btn-gradient-border px-8 py-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            whileTap={{ scale: 0.97 }}
          >
            <span className="flex items-center gap-2 text-slate-800 font-bold">
              Get In Touch
            </span>
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default Hero
