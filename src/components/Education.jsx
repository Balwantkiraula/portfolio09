import { motion } from 'framer-motion'

const Education = () => {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  }

  const educationItems = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Amrapali Group of Institutes, Haldwani",
      duration: "2020 – 2022",
      description: "Focused on core computer science subjects, application design, software engineering, databases, and programming methodologies."
    },
    {
      degree: "Frontend Development Training",
      institution: "Sharpener",
      duration: "Mar 2025 – Apr 2026",
      description: "Intensive training in modern web engineering, specializing in clean JavaScript, responsive UI components, React structure, state architecture, and CSS systems."
    }
  ]

  return (
    <motion.section 
      id="education" 
      className="py-20 bg-transparent relative overflow-hidden scroll-mt-20"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      {/* Dynamic light blob in background */}
      <div className="absolute left-10 top-1/3 w-64 h-64 bg-[#ffeae5]/30 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight" variants={fadeUp}>
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
              Education & Training
            </span>
          </motion.h2>
          <motion.div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-500 mx-auto rounded-full" variants={fadeUp}></motion.div>
        </div>

        <motion.div className="max-w-4xl mx-auto grid gap-6 md:gap-8" variants={container}>
          {educationItems.map((edu, index) => (
            <motion.div 
              key={index} 
              className="glass-card rounded-3xl p-6 md:p-8 shadow-md border border-white/60 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              variants={fadeUp}
              whileHover={{ scale: 1.015 }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-base text-purple-700 font-bold mb-3">
                    {edu.institution}
                  </p>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    {edu.description}
                  </p>
                </div>
                
                <span className="inline-flex items-center px-4 py-2 text-xs font-extrabold rounded-full bg-cyan-50 text-cyan-700 border border-cyan-100 self-start md:self-auto shadow-sm whitespace-nowrap">
                  {edu.duration}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Education
