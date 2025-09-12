import { useState } from 'react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  const handleDownloadResume = () => {
    // Create a simple resume content (in a real app, this would be a PDF)
    const resumeContent = `
John Doe - Full Stack Developer
Email: john.doe@email.com
Phone: +1 (555) 123-4567
Location: San Francisco, CA

EXPERIENCE:
- 5+ years of full-stack development
- React, Node.js, Python expertise
- UI/UX design experience
- Agile/Scrum methodology

EDUCATION:
- Computer Science Degree
- Various certifications in web technologies

SKILLS:
- Frontend: React, Vue.js, TypeScript, Tailwind CSS
- Backend: Node.js, Python, Express.js
- Databases: MongoDB, PostgreSQL
- Tools: Git, Docker, AWS, Figma
    `
    
    const blob = new Blob([resumeContent], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'John_Doe_Resume.txt'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <section id="about" className="py-20 bg-gray-800 relative overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
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
            </div>

            {/* Personality Traits */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">What drives me:</h4>
              <div className="flex flex-wrap gap-3">
                {['Problem Solver', 'Team Player', 'Continuous Learner', 'Detail Oriented', 'Creative Thinker'].map((trait, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-sm font-medium text-white hover:scale-105 transition-transform duration-200"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            {/* Resume Download Button */}
            <div className="pt-4">
              <button
                onClick={handleDownloadResume}
                className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <svg className="w-5 h-5 mr-2 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </button>
            </div>
          </div>

          {/* Right Column - Image and Stats */}
          <div className="space-y-8">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/src/assets/1757647829086.jpg" 
                  alt="Balwant Kiraula" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center text-2xl animate-pulse">
                💻
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-green-400 rounded-full flex items-center justify-center text-xl animate-pulse delay-1000">
                ⚡
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-700 rounded-xl p-6 text-center hover:bg-gray-600 transition-colors duration-300">
                <div className="text-3xl font-bold text-blue-400 mb-2">Fresher</div>
                <div className="text-gray-300">Experience Level</div>
              </div>
              <div className="bg-gray-700 rounded-xl p-6 text-center hover:bg-gray-600 transition-colors duration-300">
                <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="bg-gray-700 rounded-xl p-6 text-center hover:bg-gray-600 transition-colors duration-300">
                <div className="text-3xl font-bold text-green-400 mb-2">React</div>
                <div className="text-gray-300">Specialization</div>
              </div>
              <div className="bg-gray-700 rounded-xl p-6 text-center hover:bg-gray-600 transition-colors duration-300">
                <div className="text-3xl font-bold text-yellow-400 mb-2">Eager</div>
                <div className="text-gray-300">To Learn</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
