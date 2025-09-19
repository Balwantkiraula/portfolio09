import { motion } from 'framer-motion'

const Experience = () => {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } }
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  const experienceData = {
    position: "Frontend Developer",
    company: "NURA9",
    location: "Remote",
    achievements: [
      "Developed responsive and mobile-compatible UI components ensuring cross-device accessibility and performance.",
      "Converted Figma design files into functional, pixel-perfect React pages with reusable components.",
      "Implemented client-side routing using React Router, enabling smooth navigation and better user experience.",
      "Integrated Tailwind CSS for consistent, scalable styling and improved development speed.",
      "Built toast notification system for real-time feedback on user actions.",
      "Designed and implemented interactive and dynamic animations to enhance the LMS platform's user engagement."
    ]
  }

  return (
    <motion.section id="experience" className="py-20 bg-gray-800 relative overflow-hidden scroll-mt-20" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={container}>
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
              Experience
            </span>
          </motion.h2>
          <motion.div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" variants={fadeUp}></motion.div>
        </div>

        <motion.div className="max-w-4xl mx-auto" variants={container}>
          <motion.div className="bg-gray-700 rounded-2xl p-8 shadow-xl border border-gray-600 hover:border-gray-500 transition-all duration-300" variants={fadeUp}>
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">{experienceData.position}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-lg text-gray-300">
                  <span className="font-semibold text-blue-400">{experienceData.company}</span>
                  <span className="hidden sm:inline text-gray-500">•</span>
                  <span className="text-gray-400">{experienceData.location}</span>
                </div>
              </div>
              <motion.div 
                className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-full bg-green-600/20 text-green-300 border border-green-600/30 self-start md:self-auto"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                Remote
              </motion.div>
            </div>

            {/* Achievements */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white mb-6">Key Achievements:</h4>
              <div className="grid gap-4">
                {experienceData.achievements.map((achievement, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start gap-4 p-4 bg-gray-600/50 rounded-lg hover:bg-gray-600/70 transition-colors duration-200"
                    variants={fadeUp}
                    whileHover={{ x: 8 }}
                  >
                    <motion.div 
                      className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5"
                      whileHover={{ scale: 1.1 }}
                    >
                      {index + 1}
                    </motion.div>
                    <p className="text-gray-300 leading-relaxed">{achievement}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Skills Used */}
            <motion.div className="mt-8 pt-6 border-t border-gray-600" variants={fadeUp}>
              <h4 className="text-lg font-semibold text-white mb-4">Technologies Used:</h4>
              <div className="flex flex-wrap gap-3">
                {['React', 'React Router', 'Tailwind CSS', 'Figma', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design'].map((skill, index) => (
                  <motion.span 
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 rounded-full text-sm font-medium border border-blue-600/30"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.3)' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Experience
