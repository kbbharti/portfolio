export default function Education() {
  const education = [
    {
      year: "2019",
      degree: "PG Diploma in Fashion Design",
      institute: "JD Institute of Fashion Technology",
      instituteLink: "https://jdinstitute.edu.in/",
      description: "Postgraduate specialization in Fashion Design",
      icon: "fas fa-palette"
    },
    {
      year: "2018",
      degree: "Bachelor of Commerce (B.Com.)",
      institute: "Kanoria PG Mahavidhyalaya",
      instituteLink: "#",
      description: "Undergraduate programme in Commerce",
      icon: "fas fa-graduation-cap"
    },
    {
      year: "2015",
      degree: "12th Grade",
      institute: "Subodh Public School",
      instituteLink: "#",
      description: "Higher secondary education",
      icon: "fas fa-school"
    }
  ]

  const certifications = [
    {
      category: "Strategic & Leadership",
      items: [
        { name: "Strategic Thinking", provider: "LinkedIn Learning", status: "Completed" },
        { name: "Strategic Leadership & Management Specialization", provider: "University of Illinois", status: "Ongoing" },
        { name: "Negotiation Professional Certificate", provider: "American Negotiation Institute", status: "Ongoing" }
      ]
    },
    {
      category: "Marketing & Data",
      items: [
        { name: "Marketing Strategy Specialization", provider: "IE Business School", status: "Ongoing" },
        { name: "How to Turn Data into Strategies", provider: "Professional Course", status: "Completed" },
        { name: "Marketing Automation", provider: "Professional Course", status: "Completed" }
      ]
    },
    {
      category: "Technical & Finance",
      items: [
        { name: "CFI Corporate Finance Foundation Professional Certificate", provider: "Corporate Finance Institute", status: "Ongoing" },
        { name: "Atlassian Agile Project Management Professional Certificate", provider: "Atlassian", status: "Ongoing" },
        { name: "Research & Writing with AI Tools", provider: "Professional Course", status: "Completed" }
      ]
    }
  ]

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Continuous learning and professional development in communications, marketing, and strategic leadership
          </p>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            <i className="fas fa-graduation-cap text-blue-400 mr-3"></i>
            Education
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="group">
                <div className="bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-700 hover:border-blue-400">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-gray-600 transition-colors">
                      <i className={`${edu.icon} text-blue-400 text-lg`}></i>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-700 text-blue-400">
                          <i className="fas fa-calendar-alt mr-2"></i>
                          {edu.year}
                        </span>
                      </div>
                      <a 
                        href={edu.instituteLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-purple-300 font-semibold text-lg mb-2 inline-block transition-colors"
                      >
                        {edu.institute}
                      </a>
                      <p className="text-gray-400">{edu.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            <i className="fas fa-certificate text-green-400 mr-3"></i>
            Professional Certifications
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-700 hover:border-green-400">
                <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                  <i className="fas fa-award text-green-400 mr-2"></i>
                  {cert.category}
                </h4>
                <div className="space-y-3">
                  {cert.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-l-4 border-green-400 pl-4">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-semibold text-white text-sm">{item.name}</p>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          item.status === 'Completed' 
                            ? 'bg-green-600 text-green-100' 
                            : 'bg-yellow-600 text-yellow-100'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                      <p className="text-gray-400 text-xs">{item.provider}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

