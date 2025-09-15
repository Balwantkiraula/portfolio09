const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-900 relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid gap-8">
          <div className="bg-gray-800 rounded-2xl p-6 md:p-8 shadow-xl border border-gray-700 hover:border-gray-600 transition-colors duration-300">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold text-white">Master of Computer Applications (MCA)</h3>
                <p className="text-gray-300 mt-1">Amrapali Group of Institute, Haldwani, Uttarakhand</p>
              </div>
              <span className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-full bg-blue-600/20 text-blue-300 border border-blue-600/30 self-start md:self-auto">
                Current / Completed
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education


