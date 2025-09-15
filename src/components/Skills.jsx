import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState(new Set())

  const skillCategories = [
    {
      title: 'Frontend Development',
      color: 'from-blue-500 to-cyan-500',
      icon: '🎨',
      skills: [
        { name: 'React', level: 95, icon: '⚛️' },
        { name: 'JavaScript', level: 92, icon: '🟨' },
        { name: 'Redux Toolkit', level: 85, icon: '🔄' },
        { name: 'React Router DOM', level: 90, icon: '🛣️' },
        { name: 'Formik', level: 80, icon: '📝' },
        { name: 'HTML5/CSS3', level: 98, icon: '🌐' }
      ]
    },
    {
      title: 'Styling',
      color: 'from-purple-500 to-pink-500',
      icon: '🎨',
      skills: [
        { name: 'CSS', level: 95, icon: '🎨' },
        { name: 'Tailwind CSS', level: 92, icon: '🎨' },
        { name: 'Bootstrap', level: 88, icon: '🎯' },
        { name: 'Ant Design', level: 85, icon: '🐜' }
      ]
    },
    {
      title: 'Tools & Others',
      color: 'from-green-500 to-teal-500',
      icon: '🛠️',
      skills: [
        { name: 'Git', level: 90, icon: '📚' },
        { name: 'Docker', level: 75, icon: '🐳' },
        { name: 'Firebase', level: 82, icon: '🔥' },
        { name: 'Cursor AI', level: 88, icon: '🤖' }
      ]
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillName = entry.target.dataset.skill
            if (skillName) {
              setVisibleSkills(prev => new Set([...prev, skillName]))
            }
          }
        })
      },
      { threshold: 0.1 }
    )

    const skillElements = document.querySelectorAll('[data-skill]')
    skillElements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } }
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  return (
    <motion.section id="skills" className="py-20 bg-gray-900 relative overflow-hidden scroll-mt-20" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={container}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm-20-18c9.941 0 18 8.059 18 18s-8.059 18-18 18-18-8.059-18-18 8.059-18 18-18z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 className="text-4xl md:text-5xl font-bold mb-6" variants={fadeUp}>
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </motion.h2>
          <motion.p className="text-xl text-gray-400 max-w-3xl mx-auto" variants={fadeUp}>
            Here are the technologies and tools I work with to bring ideas to life
          </motion.p>
          <motion.div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6" variants={fadeUp}></motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex}
              className="group bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 250, damping: 20 }}
            >
              {/* Category Header */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl group-hover:animate-bounce">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="group/skill"
                    data-skill={`${categoryIndex}-${skillIndex}`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl group-hover/skill:animate-pulse">{skill.icon}</span>
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-blue-400 font-semibold">{skill.level}%</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out ${
                          visibleSkills.has(`${categoryIndex}-${skillIndex}`) ? 'w-full' : 'w-0'
                        }`}
                        style={{ 
                          width: visibleSkills.has(`${categoryIndex}-${skillIndex}`) ? `${skill.level}%` : '0%' 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Additional Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Responsive Design', 'State Management', 'Component Architecture', 
              'Version Control', 'API Integration', 'Performance Optimization',
              'Code Review', 'UI/UX Design', 'Cross-browser Compatibility'
            ].map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-full text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Skills
