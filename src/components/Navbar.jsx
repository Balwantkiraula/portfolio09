import { useState, useEffect } from 'react'
import { motion, LayoutGroup } from 'framer-motion'
import profileImage from '../assets/1757647829086.jpg'
import { FiDownload } from 'react-icons/fi'

// Use motion explicitly to satisfy certain linters that don't detect JSX usage
void motion

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'education', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileOpen(false)
  }

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <motion.nav
      aria-label="Primary navigation"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/75 backdrop-blur-md shadow-sm border-b border-slate-200/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            <motion.div 
              className="w-10 h-10 rounded-xl overflow-hidden shadow-sm border border-white/50"
              whileHover={{ rotate: 5, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <img 
                src={profileImage} 
                alt="Balwant Kiraula" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.span 
              className="text-xl font-extrabold text-slate-900 tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
            >
              Balwant Kiraula
            </motion.span>
          </motion.div>

          {/* Desktop Navigation */}
          <LayoutGroup>
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-center space-x-6">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    aria-current={activeSection === item.id ? 'true' : undefined}
                    className={`relative px-1 py-2 text-sm font-semibold transition-all duration-300 hover:text-purple-600 ${
                      activeSection === item.id
                        ? 'text-purple-600 font-bold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.96 }}
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <motion.span 
                        layoutId="active-underline"
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full"
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Header Button with Production-Ready Hover Effect */}
              <motion.button
                onClick={() => {
                  const link = document.createElement('a')
                  link.href = '/BALWANT_resume.pdf'
                  link.download = 'BALWANT_resume.pdf'
                  document.body.appendChild(link)
                  link.click()
                  document.body.removeChild(link)
                }}
                className="group relative px-5 py-2 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full font-bold text-white shadow-sm hover:shadow-purple-500/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                <span className="relative z-10 flex items-center gap-1.5 text-xs">
                  Resume
                  <FiDownload className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
                </span>
              </motion.button>
            </div>
          </LayoutGroup>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button 
              type="button"
              className="text-slate-600 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-550 rounded-md"
              whileTap={{ scale: 0.9 }}
              whileHover={{ rotate: 3 }}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-panel"
              onClick={() => setMobileOpen(prev => !prev)}
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
      </div>
      {/* Mobile menu panel */}
      {mobileOpen && (
        <div id="mobile-nav-panel" className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-100 shadow-lg" role="region" aria-label="Mobile sections">
          <div className="px-4 py-3 space-y-1">
            {navItems.map(item => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                aria-current={activeSection === item.id ? 'true' : undefined}
                className={`w-full text-left px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                  activeSection === item.id ? 'text-purple-600 bg-purple-50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            {/* Mobile Resume CTA */}
            <div className="pt-2">
              <button
                onClick={() => {
                  const link = document.createElement('a')
                  link.href = '/BALWANT_resume.pdf'
                  link.download = 'BALWANT_resume.pdf'
                  document.body.appendChild(link)
                  link.click()
                  document.body.removeChild(link)
                }}
                className="w-full text-center px-4 py-2.5 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full font-bold text-white text-sm"
              >
                Download Resume
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  )
}

export default Navbar
