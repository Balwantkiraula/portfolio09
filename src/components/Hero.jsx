import { useState, useEffect } from 'react'

const Hero = () => {
  const [currentText, setCurrentText] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [displayText, setDisplayText] = useState('')

  const texts = [
    'Frontend Developer',
    'React Developer',
    'UI/UX Designer',
    'Problem Solver',
    'Tech Enthusiast'
  ]

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100
    const pauseTime = 2000

    const timeout = setTimeout(() => {
      const current = texts[currentText]
      
      if (!isDeleting && displayText === current) {
        setTimeout(() => setIsDeleting(true), pauseTime)
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false)
        setCurrentText((prev) => (prev + 1) % texts.length)
      } else {
        setDisplayText(isDeleting 
          ? current.substring(0, displayText.length - 1)
          : current.substring(0, displayText.length + 1)
        )
      }
    }, typeSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentText, texts])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
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

      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Image */}
        <div className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl animate-bounce">
          <img 
            src="/src/assets/1757647829086.jpg" 
            alt="Balwant Kiraula" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            Balwant Kiraula
          </span>
        </h1>

        {/* Animated Role Text */}
        <div className="h-16 flex items-center justify-center mb-8">
          <span className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-300">
            I'm a{' '}
            <span className="text-blue-400 font-bold min-h-[2rem] inline-block">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </span>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Passionate about creating beautiful, functional, and user-centered digital experiences. 
          I love turning complex problems into simple, elegant solutions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={() => scrollToSection('projects')}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
          </button>
          
          <button 
            onClick={() => scrollToSection('contact')}
            className="group px-8 py-4 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Get In Touch
          </button>
        </div>

        {/* Scroll Indicator */}
       
      </div>
    </section>
  )
}

export default Hero
