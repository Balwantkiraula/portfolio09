import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
// Use motion explicitly to satisfy certain linters that don't detect JSX usage
void motion
import profileImage from '../assets/1757647829086.jpg'
import { FaReact, FaJsSquare, FaBolt, FaCodeBranch } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si'
import { FiCopy, FiCheck, FiMail } from 'react-icons/fi'

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
  const [activeTab, setActiveTab] = useState('editor') // 'editor' | 'terminal'
  const [copied, setCopied] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [terminalOutput, setTerminalOutput] = useState([
    { type: 'input', text: 'npx introduce --interactive' },
    { type: 'output', text: 'Initializing Balwant\'s Workspace...' },
    { type: 'output', text: 'Status: 🟢 Available for internships & core roles!' },
    { type: 'output', text: 'Tip: Click the command buttons below to interact.' }
  ])

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

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('balwantkiraula123@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const runTerminalCommand = (cmdText) => {
    if (isTyping) return
    setIsTyping(true)
    
    // Append the fresh prompt line and start typing
    setTerminalOutput(prev => [...prev, { type: 'input', text: '' }])
    
    let currentText = ''
    let index = 0
    const interval = setInterval(() => {
      if (index < cmdText.length) {
        currentText += cmdText[index]
        setTerminalOutput(prev => {
          const next = [...prev]
          next[next.length - 1] = { type: 'input', text: currentText }
          return next
        })
        index++
      } else {
        clearInterval(interval)
        
        // Render corresponding shell outputs
        setTimeout(() => {
          let outputText = []
          if (cmdText === 'npm run dev') {
            outputText = [
              '  vite v7.1.5 ready in 220ms',
              '  ➜  Local:   http://localhost:3000/',
              '  🟢 Status: Balwant is compiled & active!',
              '  🚀 Tech: Next.js, React, Tailwind CSS'
            ]
          } else if (cmdText === 'cat contact.json') {
            outputText = [
              '  {',
              '    "email": "balwantkiraula123@gmail.com",',
              '    "phone": "+91 7618135309",',
              '    "location": "Uttarakhand, India"',
              '  }'
            ]
          } else if (cmdText === 'git status') {
            outputText = [
              '  On branch main',
              '  Your branch is up to date with \'origin/main\'.',
              '  Changes to be committed:',
              '    modified:   src/components/Hero.jsx',
              '  Working tree clean. Ready to deploy! 🚀'
            ]
          } else {
            outputText = ['  Command not found.']
          }
          
          setTerminalOutput(prev => [
            ...prev,
            ...outputText.map(line => ({ type: 'output', text: line }))
          ])
          setIsTyping(false)
        }, 200)
      }
    }, 35)
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

  const floatVariants = (duration, delay = 0) => ({
    animate: {
      y: [0, -12, 0],
      x: [0, 4, 0],
      transition: {
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  })

  return (
    <motion.section
      id="home"
      aria-labelledby="hero-heading"
      className="min-h-screen flex items-center justify-center relative overflow-hidden scroll-mt-20 py-16 md:py-24 lg:py-0"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Subtle Graph/Grid Mesh Overlay (nuralearn.ai style) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808007_1px,transparent_1px),linear-gradient(to_bottom,#80808007_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" aria-hidden="true"></div>

      {/* Dynamic Ambient Blur Elements - with slow drifting animations */}
      <motion.div 
        className="absolute top-20 left-10 w-64 h-64 bg-[#ffddcf]/25 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true"
        animate={{ x: [0, 30, -30, 0], y: [0, -30, 30, 0] }}
        transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-40 right-20 w-80 h-80 bg-[#e8dbff]/25 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true"
        animate={{ x: [0, -40, 40, 0], y: [0, 40, -40, 0] }}
        transition={{ repeat: Infinity, duration: 28, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 left-1/4 w-72 h-72 bg-[#cff5fc]/35 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true"
        animate={{ x: [0, 35, -35, 0], y: [0, 35, -35, 0] }}
        transition={{ repeat: Infinity, duration: 22, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
        {/* Main Content Grid - Fixed layout stretch by defining grid-cols-1 for mobile */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Aligned Copy & CTA */}
          <motion.div 
            className="col-span-1 lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left w-full"
            variants={containerVariants}
          >
            {/* Floating Accent Badges Row */}
            <motion.div 
              variants={itemVariants} 
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6 w-full"
            >
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md border border-purple-100/80 rounded-full text-xs font-bold text-purple-700 shadow-sm cursor-default"
                whilehover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Available for Roles
              </div>
              <div className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-md border border-slate-100 rounded-full text-xs font-bold text-slate-500 shadow-sm cursor-default">
                🟢 GMT +5:30 (India)
              </div>
            </motion.div>

            {/* Profile Image (Mobile/Tablet Only - perfectly centered above heading) */}
            <motion.div 
              className="relative w-32 h-32 mb-6 lg:hidden group mx-auto"
              variants={itemVariants}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-cyan-400 rounded-full blur-md opacity-35 pointer-events-none"></div>
              <div className="w-full h-full rounded-full overflow-hidden shadow-xl border-4 border-white/90 relative z-10">
                <img src={profileImage} alt="Balwant Kiraula" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              id="hero-heading" 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-6 tracking-tight text-slate-900 leading-none w-full" 
              variants={itemVariants}
            >
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
                Balwant Kiraula
              </span>
            </motion.h1>

            {/* Animated Role Text */}
            <motion.div className="h-12 flex items-center justify-center lg:justify-start mb-6 w-full" variants={itemVariants}>
              <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-700">
                <span aria-hidden="true">
                  I'm a{' '}
                  <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent font-extrabold min-h-[2rem] inline-block">
                    {displayText}
                    <span className="text-purple-600 animate-pulse">|</span>
                  </span>
                </span>
                <span className="sr-only">
                  Roles include Frontend Developer, React Js Developer, Next Js Developer, UI Developer, Problem Solver, and Tech Enthusiast.
                </span>
              </p>
            </motion.div>

            {/* Description */}
            <motion.p 
              className="text-base sm:text-lg text-slate-600 mb-8 max-w-xl leading-relaxed font-medium w-full"
              variants={itemVariants}
            >
              Passionate about building highly responsive, pixel-perfect web systems. 
              I specialize in translating designs into beautifully crafted, clean React & Next.js codebases.
            </motion.p>

            {/* CTA Buttons - featuring click-to-copy productivity additions */}
            <motion.div 
              className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start items-center w-full" 
              variants={itemVariants}
            >
              <motion.button 
                type="button"
                onClick={() => scrollToSection('projects')}
                className="group relative w-full sm:w-auto px-7 py-4 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full font-bold text-white shadow-md hover:shadow-purple-500/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 flex justify-center items-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                View My Work
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.button>
              
              <motion.button 
                type="button"
                onClick={() => scrollToSection('contact')}
                className="btn-gradient-border w-full sm:w-auto px-7 py-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 flex justify-center items-center"
                whileTap={{ scale: 0.97 }}
              >
                <span className="flex items-center gap-2 text-slate-800 font-bold">
                  <FiMail /> Get In Touch
                </span>
              </motion.button>

              <motion.button 
                type="button"
                onClick={copyEmailToClipboard}
                title="Copy email address to clipboard"
                className={`w-full sm:w-auto px-7 py-4 rounded-full font-bold shadow-sm border flex items-center justify-center gap-2 transition-all cursor-pointer ${copied ? 'bg-emerald-500 border-emerald-600 text-white' : 'bg-white/80 hover:bg-slate-50 border-slate-200 text-slate-700'}`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                {copied ? (
                  <>
                    <FiCheck className="text-lg animate-bounce" /> Copied!
                  </>
                ) : (
                  <>
                    <FiCopy /> Copy Email
                  </>
                )}
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column: IDE Code Editor Mockup */}
          <motion.div 
            className="col-span-1 lg:col-span-5 flex justify-center items-center relative pt-8 lg:pt-0 w-full px-2 sm:px-4 lg:px-0"
            variants={itemVariants}
          >
            {/* Orbiting Badge Bubbles - Hidden on mobile/tablet (hidden lg:flex) to prevent screen-width overflow */}
            <motion.div 
              className="hidden lg:flex absolute -top-6 right-16 w-12 h-12 rounded-full glass-card items-center justify-center border border-white/50 shadow-md text-cyan-500 z-30 text-xl"
              variants={floatVariants(4)}
              animate="animate"
              whileHover={{ scale: 1.15 }}
            >
              <FaReact style={{ animation: 'spin 12s linear infinite' }} />
            </motion.div>

            <motion.div 
              className="hidden lg:flex absolute top-1/4 -left-6 w-12 h-12 rounded-full glass-card items-center justify-center border border-white/50 shadow-md text-slate-800 z-30 text-xl"
              variants={floatVariants(4.5, 0.5)}
              animate="animate"
              whileHover={{ scale: 1.15 }}
            >
              <SiNextdotjs />
            </motion.div>

            <motion.div 
              className="hidden lg:flex absolute bottom-1/4 -right-6 w-12 h-12 rounded-full glass-card items-center justify-center border border-white/50 shadow-md text-yellow-500 z-30 text-xl"
              variants={floatVariants(5, 1)}
              animate="animate"
              whileHover={{ scale: 1.15 }}
            >
              <FaJsSquare />
            </motion.div>

            <motion.div 
              className="hidden lg:flex absolute -bottom-8 left-1/3 w-12 h-12 rounded-full glass-card items-center justify-center border border-white/50 shadow-md text-cyan-400 z-30 text-xl"
              variants={floatVariants(3.8, 1.5)}
              animate="animate"
              whileHover={{ scale: 1.15 }}
            >
              <SiTailwindcss />
            </motion.div>

            {/* Centered bounding wrapper for IDE + overlapping profile photo */}
            <div className="relative w-full max-w-[460px] mx-auto">
              {/* macOS IDE Code Mockup */}
              <motion.div 
                className="relative w-full glass-card rounded-2xl border border-white/40 shadow-2xl overflow-hidden z-10"
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
              >
                {/* IDE Header Bar with Tabs */}
                <div className="flex items-center justify-between px-4 py-2 bg-slate-900/5 backdrop-blur-md border-b border-white/20 select-none">
                  <div className="flex gap-1.5 items-center">
                    <span className="w-3 h-3 rounded-full bg-red-400/90 block border border-red-500/10"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-400/90 block border border-yellow-500/10"></span>
                    <span className="w-3 h-3 rounded-full bg-green-400/90 block border border-green-500/10"></span>
                  </div>
                  
                  {/* Tab Switchers */}
                  <div className="flex gap-1.5 -mb-2 mt-1.5">
                    <button 
                      onClick={() => setActiveTab('editor')}
                      className={`px-3 py-1.5 text-[10px] sm:text-xs font-mono font-bold rounded-t-lg flex items-center gap-1.5 transition-colors border border-b-0 cursor-pointer ${activeTab === 'editor' ? 'bg-white/40 border-white/30 text-purple-700' : 'bg-transparent border-transparent text-slate-500 hover:text-slate-700'}`}
                    >
                      <FaReact className={`${activeTab === 'editor' ? 'text-cyan-500 animate-spin-slow' : 'text-slate-400'}`} /> developer.jsx
                    </button>
                    <button 
                      onClick={() => setActiveTab('terminal')}
                      className={`px-3 py-1.5 text-[10px] sm:text-xs font-mono font-bold rounded-t-lg flex items-center gap-1.5 transition-colors border border-b-0 cursor-pointer ${activeTab === 'terminal' ? 'bg-white/40 border-white/30 text-emerald-700' : 'bg-transparent border-transparent text-slate-500 hover:text-slate-700'}`}
                    >
                      <span className={`w-2 h-2 rounded-full ${activeTab === 'terminal' ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'} block`}></span> terminal.sh
                    </button>
                  </div>
                  
                  <div className="w-8 sm:w-12"></div> {/* spacer for header alignment */}
                </div>
                
                {/* Tab Content 1: Editor */}
                {activeTab === 'editor' ? (
                  <div className="p-3 sm:p-5 font-mono text-[10px] sm:text-xs lg:text-sm text-left overflow-x-auto bg-white/25 h-[255px]">
                    <table className="w-full border-collapse">
                      <tbody>
                        <tr>
                          <td className="pr-2 sm:pr-4 text-slate-400 text-right select-none w-6 border-r border-slate-300/30 font-bold">1</td>
                          <td className="pl-2 sm:pl-4"><span className="text-purple-600 font-bold">const</span> <span className="text-blue-600 font-bold">Developer</span> = {'{'}</td>
                        </tr>
                        <tr>
                          <td className="pr-2 sm:pr-4 text-slate-400 text-right select-none w-6 border-r border-slate-300/30 font-bold">2</td>
                          <td className="pl-4 sm:pl-8"><span className="text-slate-600">name:</span> <span className="text-emerald-600 font-bold">'Balwant Kiraula'</span>,</td>
                        </tr>
                        <tr>
                          <td className="pr-2 sm:pr-4 text-slate-400 text-right select-none w-6 border-r border-slate-300/30 font-bold">3</td>
                          <td className="pl-4 sm:pl-8"><span className="text-slate-600">role:</span> <span className="text-emerald-600 font-bold">'React & Next.js Dev'</span>,</td>
                        </tr>
                        <tr>
                          <td className="pr-2 sm:pr-4 text-slate-400 text-right select-none w-6 border-r border-slate-300/30 font-bold">4</td>
                          <td className="pl-4 sm:pl-8"><span className="text-slate-600">focus:</span> <span className="text-emerald-600 font-bold">'Clean Code & Performance'</span>,</td>
                        </tr>
                        <tr>
                          <td className="pr-2 sm:pr-4 text-slate-400 text-right select-none w-6 border-r border-slate-300/30 font-bold">5</td>
                          <td className="pl-4 sm:pl-8"><span className="text-slate-600">stack:</span> <span className="text-slate-800">[</span></td>
                        </tr>
                        <tr>
                          <td className="pr-2 sm:pr-4 text-slate-400 text-right select-none w-6 border-r border-slate-300/30 font-bold">6</td>
                          <td className="pl-6 sm:pl-12"><span className="text-emerald-600 font-bold">'React'</span>, <span className="text-emerald-600 font-bold">'Next.js'</span>, <span className="text-emerald-600 font-bold">'Tailwind'</span></td>
                        </tr>
                        <tr>
                          <td className="pr-2 sm:pr-4 text-slate-400 text-right select-none w-6 border-r border-slate-300/30 font-bold">7</td>
                          <td className="pl-4 sm:pl-8"><span className="text-slate-800">]</span>,</td>
                        </tr>
                        <tr>
                          <td className="pr-2 sm:pr-4 text-slate-400 text-right select-none w-6 border-r border-slate-300/30 font-bold">8</td>
                          <td className="pl-4 sm:pl-8"><span className="text-slate-600">live:</span> <span className="text-purple-600 font-bold">true</span></td>
                        </tr>
                        <tr>
                          <td className="pr-2 sm:pr-4 text-slate-400 text-right select-none w-6 border-r border-slate-300/30 font-bold">9</td>
                          <td className="pl-2 sm:pl-4">{'}'}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                ) : (
                  /* Tab Content 2: Interactive shell terminal */
                  <div className="p-3 sm:p-4 font-mono text-[9px] sm:text-[10px] lg:text-xs text-left h-[255px] overflow-y-auto bg-slate-900/90 text-slate-200 flex flex-col justify-between">
                    <div className="space-y-1 overflow-y-auto flex-1 pr-1 scrollbar-thin scrollbar-thumb-slate-700">
                      {terminalOutput.map((line, idx) => (
                        <div key={idx} className={line.type === 'input' ? 'text-cyan-400 font-bold' : 'text-emerald-400'}>
                          {line.type === 'input' ? `$ ${line.text}` : line.text}
                        </div>
                      ))}
                    </div>
                    
                    {/* Script trigger buttons */}
                    <div className="border-t border-slate-700/60 pt-2 mt-2 select-none">
                      <div className="text-[9px] text-slate-400 mb-1.5 font-bold uppercase tracking-wider">Execute workspace routines:</div>
                      <div className="flex flex-wrap gap-1.5">
                        <button 
                          onClick={() => runTerminalCommand('npm run dev')}
                          disabled={isTyping}
                          className="px-2 py-1 bg-slate-800 hover:bg-slate-700 active:bg-slate-950 border border-slate-700 rounded text-[9px] text-cyan-300 font-bold cursor-pointer disabled:opacity-50 transition-colors"
                        >
                          npm run dev
                        </button>
                        <button 
                          onClick={() => runTerminalCommand('cat contact.json')}
                          disabled={isTyping}
                          className="px-2 py-1 bg-slate-800 hover:bg-slate-700 active:bg-slate-950 border border-slate-700 rounded text-[9px] text-yellow-300 font-bold cursor-pointer disabled:opacity-50 transition-colors"
                        >
                          cat contact.json
                        </button>
                        <button 
                          onClick={() => runTerminalCommand('git status')}
                          disabled={isTyping}
                          className="px-2 py-1 bg-slate-800 hover:bg-slate-700 active:bg-slate-950 border border-slate-700 rounded text-[9px] text-pink-300 font-bold cursor-pointer disabled:opacity-50 transition-colors"
                        >
                          git status
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Overlapping Profile Photo Frame - Display ONLY on desktop (hidden lg:block) as mobile centers the avatar at the top */}
              <motion.div 
                className="hidden lg:block absolute -bottom-8 -left-8 z-20 w-36 h-36 rounded-full p-1 bg-gradient-to-tr from-purple-500 to-cyan-400 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white bg-white">
                  <img src={profileImage} alt="Balwant Kiraula" className="w-full h-full object-cover" />
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Developer Key-Stats Ribbon */}
        <motion.div 
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 md:mt-16 lg:mt-24"
          variants={itemVariants}
        >
          <div className="glass-card rounded-2xl p-5 border border-white/50 shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 text-xl font-bold group-hover:scale-110 transition-transform">
              <FaReact style={{ animation: 'spin 12s linear infinite' }} />
            </div>
            <div className="text-left">
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Expertise</h3>
              <p className="text-base font-bold text-slate-800">React & Next.js Core</p>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-5 border border-white/50 shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600 text-xl font-bold group-hover:scale-110 transition-transform">
              <FaBolt />
            </div>
            <div className="text-left">
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Focus</h3>
              <p className="text-base font-bold text-slate-800">Speed & Clean Code</p>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-5 border border-white/50 shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 text-xl font-bold group-hover:scale-110 transition-transform">
              <FaCodeBranch />
            </div>
            <div className="text-left">
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Workflows</h3>
              <p className="text-base font-bold text-slate-800">Agile Git & Rest APIs</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Hero
