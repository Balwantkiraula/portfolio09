import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(''), 3000)
    }, 1500)
  }

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/Balwantkiraula',
      color: 'hover:text-purple-600'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/balwant-kiraula/',
      color: 'hover:text-cyan-600'
    }
  ]

  const contactInfo = [
    {
      icon: <FiMail className="text-purple-600" />,
      title: 'Email',
      value: 'balwantkiraula123@gmail.com',
      link: 'mailto:balwantkiraula123@gmail.com'
    },
    {
      icon: <FiPhone className="text-cyan-600" />,
      title: 'Phone',
      value: '+91 7618135309',
      link: 'tel:+917618135309'
    },
    {
      icon: <FiMapPin className="text-pink-600" />,
      title: 'Location',
      value: 'Uttarakhand, India',
      link: '#'
    }
  ]

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
      id="contact" 
      className="py-20 bg-transparent relative overflow-hidden scroll-mt-20" 
      initial="hidden" 
      whileInView="show" 
      viewport={{ once: true, amount: 0.15 }} 
      variants={container}
    >
      {/* Background Glow */}
      <div className="absolute right-0 bottom-1/4 w-72 h-72 bg-[#ffeae5]/30 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight" variants={fadeUp}>
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </motion.h2>
          <motion.p className="text-lg text-slate-600 max-w-3xl mx-auto font-medium" variants={fadeUp}>
            I'm always open to new opportunities, contract work, or discussing your next big idea. Get in touch!
          </motion.p>
          <motion.div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-500 mx-auto rounded-full mt-6" variants={fadeUp}></motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <motion.div className="space-y-8 flex flex-col justify-between" variants={fadeUp}>
            <div className="space-y-6">
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">Get In Touch</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                I'm open to discussing frontend positions, React applications, pixel-perfect design-to-code alignments, or consulting. 
                Use the details below or drop a quick note in the form.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 my-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="group flex items-center space-x-4 p-4 glass-card rounded-2xl hover:shadow-md transition-all duration-300 hover:scale-[1.01]"
                >
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-2xl group-hover:scale-105 transition-transform border border-purple-550/10">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-slate-400 uppercase tracking-wider">
                      {info.title}
                    </h4>
                    <p className="text-slate-700 font-bold text-base md:text-lg group-hover:text-purple-600 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-white/70 backdrop-blur-md rounded-2xl flex items-center justify-center text-2xl border border-slate-100 text-slate-700 ${social.color} shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div className="glass-card rounded-3xl p-6 md:p-8" variants={fadeUp}>
            <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-600 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/80 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-550 focus:border-transparent transition-all shadow-sm"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-slate-600 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/80 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-550 focus:border-transparent transition-all shadow-sm"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-slate-600 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/80 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-550 focus:border-transparent transition-all shadow-sm"
                  placeholder="What is this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-slate-600 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/80 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-550 focus:border-transparent transition-all resize-none shadow-sm"
                  placeholder="Describe your project, timeline, or scope..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3.5 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-750 hover:to-cyan-600 text-white font-bold rounded-xl transition-all shadow-sm hover:shadow-purple-500/10 disabled:opacity-50 disabled:cursor-not-allowed"
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <div className="loading mr-2"></div>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 text-green-700 font-semibold rounded-xl text-center shadow-sm">
                  ✅ Message sent successfully! I will get back to you soon.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
