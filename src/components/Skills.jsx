import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  FaGlobe, FaReact, FaTools, FaDatabase,
  FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaNpm, FaNodeJs, FaRobot
} from 'react-icons/fa'
import { SiNextdotjs, SiRedux, SiReactrouter, SiTailwindcss, SiVite, SiFirebase, SiExpress, SiMongodb } from 'react-icons/si'
import { FiLink } from 'react-icons/fi'

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState(new Set())

  const skillCategories = [
    {
      title: 'Languages',
      color: 'from-amber-500 to-orange-500',
      icon: <FaGlobe />,
      skills: [
        { name: 'JavaScript (ES6+)', level: 92, icon: <FaJsSquare className="text-[#f7df1e]" /> },
        { name: 'HTML5', level: 98, icon: <FaHtml5 className="text-[#e34f26]" /> },
        { name: 'CSS3', level: 95, icon: <FaCss3Alt className="text-[#1572b6]" /> }
      ]
    },
    {
      title: 'Frontend Development',
      color: 'from-purple-500 to-indigo-500',
      icon: <FaReact />,
      skills: [
        { name: 'React.js', level: 95, icon: <FaReact className="text-[#61dafb]" /> },
        { name: 'Next.js', level: 88, icon: <SiNextdotjs className="text-slate-900" /> },
        { name: 'Redux Toolkit', level: 85, icon: <SiRedux className="text-[#764abc]" /> },
        { name: 'React Router', level: 90, icon: <SiReactrouter className="text-[#ca4245]" /> },
        { name: 'Tailwind CSS', level: 95, icon: <SiTailwindcss className="text-[#38b2ac]" /> }
      ]
    },
    {
      title: 'Tools & Platforms',
      color: 'from-pink-500 to-rose-500',
      icon: <FaTools />,
      skills: [
        { name: 'Git & GitHub', level: 90, icon: <FaGitAlt className="text-[#f05032]" /> },
        { name: 'npm', level: 88, icon: <FaNpm className="text-[#cb3837]" /> },
        { name: 'VS Code & Vite', level: 92, icon: <SiVite className="text-[#646cff]" /> },
        { name: 'Firebase', level: 82, icon: <SiFirebase className="text-[#ffca28]" /> },
        { name: 'Cursor AI', level: 88, icon: <FaRobot className="text-slate-700" /> }
      ]
    },
    {
      title: 'Backend (Basic)',
      color: 'from-cyan-500 to-blue-500',
      icon: <FaDatabase />,
      skills: [
        { name: 'Node.js', level: 80, icon: <FaNodeJs className="text-[#339933]" /> },
        { name: 'Express.js', level: 78, icon: <SiExpress className="text-slate-700" /> },
        { name: 'REST APIs', level: 85, icon: <FiLink className="text-cyan-600" /> },
        { name: 'MongoDB', level: 75, icon: <SiMongodb className="text-[#47a248]" /> }
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
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  }

  return (
    <motion.section 
      id="skills" 
      className="py-20 bg-transparent relative overflow-hidden scroll-mt-20" 
      initial="hidden" 
      whileInView="show" 
      viewport={{ once: true, amount: 0.15 }} 
      variants={container}
    >
      {/* Background Soft Glow */}
      <div className="absolute right-10 top-1/3 w-80 h-80 bg-[#ffeae5]/30 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight" variants={fadeUp}>
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </motion.h2>
          <motion.p className="text-lg text-slate-600 max-w-3xl mx-auto font-medium" variants={fadeUp}>
            Here are the technologies and tools I work with to bring pixel-perfect digital experiences to life.
          </motion.p>
          <motion.div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-500 mx-auto rounded-full mt-6" variants={fadeUp}></motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex}
              className="glass-card rounded-3xl p-6 md:p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              variants={fadeUp}
              whileHover={{ scale: 1.015 }}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-tr from-purple-500 to-cyan-550 rounded-2xl flex items-center justify-center text-xl shadow-sm text-white">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">{category.title}</h3>
                  <div className="w-10 h-0.5 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full mt-1.5"></div>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="group/skill"
                    data-skill={`${categoryIndex}-${skillIndex}`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center space-x-2.5">
                        <span className="text-xl">{skill.icon}</span>
                        <span className="text-slate-700 font-bold text-sm md:text-base">{skill.name}</span>
                      </div>
                      <span className="text-purple-600 font-extrabold text-sm">{skill.level}%</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-purple-100/40 rounded-full h-2.5 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
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

        {/* Additional Core Competencies Section */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-extrabold text-slate-800 mb-6">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Responsive Web Design', 'State Management Architecture', 'Component Reusability', 
              'Version Control Workflows', 'API Integration & Service Layers', 'Web Performance Optimization',
              'Collaborative Problem Solving', 'UI/UX Visual Alignment', 'Cross-browser Compatibility'
            ].map((skill, index) => (
              <span 
                key={index}
                className="px-5 py-3 bg-white/65 text-slate-700 font-bold rounded-full text-xs md:text-sm border border-purple-100/80 shadow-sm hover:bg-white transition-all cursor-default hover:scale-[1.03]"
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
