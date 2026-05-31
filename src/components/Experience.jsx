import { motion } from 'framer-motion'

const Experience = () => {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } }
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  const experiences = [
    {
      position: "Frontend Developer Intern",
      company: "BLAZYNC TECHNOLOGIES",
      duration: "May 2026 – Present",
      location: "Remote",
      current: true,
      achievements: [
        "Developed a complete Learning Management System (LMS) frontend using Next.js App Router and React.js, enabling course discovery, enrollment, and interactive learning experiences.",
        "Implemented OTP-based authentication, JWT session management, protected routes, and role-based access control.",
        "Built learning modules featuring video lessons, quizzes, assignments, notes, progress tracking, and continue-learning functionality.",
        "Designed and developed a student dashboard for profile management, course progress tracking, purchase history, and certificate access.",
        "Integrated REST APIs using Axios and developed reusable service layers and modular components to improve scalability and maintainability."
      ],
      tech: ['Next.js', 'React.js', 'Redux Toolkit', 'Axios', 'REST APIs', 'Tailwind CSS', 'Git']
    },
    {
      position: "Frontend Developer Intern",
      company: "NURA9",
      duration: "September 2024 – January 2025",
      location: "Remote",
      current: false,
      achievements: [
        "Developed responsive and mobile-friendly UI components ensuring smooth cross-device performance.",
        "Converted Figma design files into functional, pixel-perfect React pages using reusable components.",
        "Implemented client-side routing with React Router, improving navigation speed and UX.",
        "Utilized Tailwind CSS for scalable, consistent styling across the application.",
        "Built a custom toast notification system for real-time user feedback.",
        "Developed interactive animations and page transitions to enhance user engagement on the LMS platform."
      ],
      tech: ['React.js', 'React Router', 'Tailwind CSS', 'Figma', 'JavaScript', 'CSS3', 'LMS UI']
    }
  ]

  return (
    <motion.section
      id="experience"
      className="py-20 bg-transparent relative overflow-hidden scroll-mt-20"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={container}
    >
      {/* Background Soft Ambient Glow */}
      <div className="absolute right-0 top-1/4 w-72 h-72 bg-[#cff5fc]/30 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight" variants={fadeUp}>
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
              Work Experience
            </span>
          </motion.h2>
          <motion.div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-500 mx-auto rounded-full" variants={fadeUp}></motion.div>
        </div>

        <motion.div className="max-w-4xl mx-auto space-y-12" variants={container}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="glass-card rounded-3xl p-8 shadow-md border border-white/60 hover:shadow-lg transition-all duration-300 relative"
              variants={fadeUp}
              whileHover={{ y: -4 }}
            >
              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
                    {exp.position}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-slate-600 font-semibold">
                    <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent font-bold">
                      {exp.company}
                    </span>
                    <span className="text-slate-300 hidden sm:inline">•</span>
                    <span className="text-slate-500">{exp.duration}</span>
                    <span className="text-slate-300 hidden sm:inline">•</span>
                    <span className="text-slate-500">{exp.location}</span>
                  </div>
                </div>

                {/* Status Badge */}
                <motion.div
                  className={`inline-flex items-center px-4 py-2 text-xs font-bold rounded-full self-start md:self-auto border ${exp.current
                    ? 'bg-purple-50 text-purple-700 border-purple-100'
                    : 'bg-slate-50 text-slate-600 border-slate-200'
                    }`}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`w-2 h-2 rounded-full mr-2 ${exp.current ? 'bg-purple-600 animate-pulse' : 'bg-slate-400'}`}></div>
                  {exp.current ? 'Present' : 'Completed'}
                </motion.div>
              </div>

              {/* Achievements */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-slate-800 mb-4">Key Achievements:</h4>
                <div className="grid gap-3">
                  {exp.achievements.map((achievement, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-start gap-4 p-4 bg-white/40 hover:bg-white/80 rounded-2xl border border-white/50 hover:border-purple-100/50 transition-all duration-200"
                      variants={fadeUp}
                      whileHover={{ x: 6 }}
                    >
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-tr from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5 shadow-sm">
                        {idx + 1}
                      </div>
                      <p className="text-slate-600 font-medium leading-relaxed text-sm md:text-base">{achievement}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <motion.div className="mt-8 pt-6 border-t border-slate-100" variants={fadeUp}>
                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((skill, idx) => (
                    <motion.span
                      key={idx}
                      className="px-4 py-1.5 bg-purple-50 text-purple-700 hover:bg-purple-100 border border-purple-100 rounded-full text-xs font-bold"
                      whileHover={{ scale: 1.06 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Experience
