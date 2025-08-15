export default function Education() {
  const education = [
    {
      year: "2018-2020",
      degree: "Master's in Physics",
      institute: "Indian Institute of Technology Kanpur",
      instituteLink: "https://www.iitk.ac.in/",
      description: "Postgraduate Specialised in Computational Physics",
      icon: "fas fa-atom"
    },
    {
      year: "2015-2018",
      degree: "B.Sc Physics Honours",
      institute: "Maharshi Dayanand University, Rohtak",
      instituteLink: "https://mdu.ac.in/",
      description: "Undergraduate Programme Specialised in Physics",
      icon: "fas fa-flask"
    },
    {
      year: "2014",
      degree: "CBSE Class XII",
      institute: "Jawahar Navodaya Vidyalaya, Bhiwani",
      instituteLink: "https://en.wikipedia.org/wiki/Jawahar_Navodaya_Vidyalaya",
      description: "Higher secondary with Science and Mathematics",
      icon: "fas fa-calculator"
    },
    {
      year: "2012",
      degree: "CBSE Class X",
      institute: "Jawahar Navodaya Vidyalaya, Bhiwani",
      instituteLink: "https://en.wikipedia.org/wiki/Jawahar_Navodaya_Vidyalaya",
      description: "Secondary education with Science and Mathematics",
      icon: "fas fa-school"
    }
  ]

  const achievements = [
    {
      category: "Research Entrance Exams",
      items: [
        { exam: "JEST 2018", rank: "AIR 65", link: undefined },
        { exam: "CSIR-NET 2018", rank: "AIR 70", link: undefined },
        { exam: "CSIR-NET 2019", rank: "AIR 51", link: undefined }
      ]
    },
    {
      category: "Competitive Exams",
      items: [
        { exam: "IIT JAM 2018", rank: "AIR 22", link: undefined },
        { exam: "IIT JEE Advanced 2015", rank: "Qualified", link: undefined },
        { exam: "GATE CSE 2021", rank: "Qualified", link: undefined }
      ]
    },
    {
      category: "Professional Certifications",
      items: [
        { 
          exam: "Machine Learning & AI Certifications", 
          rank: "Industry-recognized specialized courses",
          link: "https://drive.google.com/drive/folders/1JRR0RF-xRKvHhtm6RV5k_Vt7AvIeLmkN?usp=sharing",
          description: "Collection of ML/AI certifications covering deep learning, data science, cloud platforms from leading tech companies and educational institutions."
        }
      ]
    }
  ]

  const positions = [
    {
      title: "Orientation Team Member",
      description: "Assisted in coordinating with the Counseling Service and facilitating the Hall Allocation process and Orientation Program of 2019.",
      year: "2019",
      icon: "fas fa-users"
    },
    {
      title: "Hall Election Officer",
      description: "Successfully organized and executed hall elections in Hall of Residence X, resulting in the formation of HEC for academic year 2019-20.",
      year: "2019-20",
      icon: "fas fa-vote-yea"
    }
  ]

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Academic Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From foundational learning to advanced research, a comprehensive educational pathway 
            spanning prestigious institutions and competitive achievements.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Education Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12 flex items-center justify-center">
            <i className="fas fa-graduation-cap text-blue-600 mr-3"></i>
            Educational Background
          </h3>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-lg">Year</th>
                    <th className="px-6 py-4 text-left font-semibold text-lg">Degree/Certificate</th>
                    <th className="px-6 py-4 text-left font-semibold text-lg">Institute</th>
                    <th className="px-6 py-4 text-left font-semibold text-lg">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {education.reverse().map((edu, index) => (
                    <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-all duration-200`}>
                      <td className="px-6 py-5">
                        <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                          {edu.year}
                        </span>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mr-3">
                            <i className={`${edu.icon} text-blue-600`}></i>
                          </div>
                          <span className="font-semibold text-gray-900">{edu.degree}</span>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <a 
                          href={edu.instituteLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 font-medium hover:underline transition-colors"
                        >
                          {edu.institute}
                          <i className="fas fa-external-link-alt ml-2 text-xs"></i>
                        </a>
                      </td>
                      <td className="px-6 py-5">
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {edu.description}
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Academic Achievements */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12 flex items-center justify-center">
            <i className="fas fa-trophy text-amber-500 mr-3"></i>
            Academic Excellence
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {achievements.map((category, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    {category.category === "Professional Certifications" && (
                      <i className="fas fa-certificate text-blue-600 text-xl"></i>
                    )}
                    {category.category === "Research Entrance Exams" && (
                      <i className="fas fa-microscope text-green-600 text-xl"></i>
                    )}
                    {category.category === "Competitive Exams" && (
                      <i className="fas fa-medal text-amber-600 text-xl"></i>
                    )}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">
                    {category.category}
                  </h4>
                </div>
                
                                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-3 hover:from-blue-50 hover:to-purple-50 transition-all duration-200">
                      <div className="flex justify-between items-center">
                        <div className="flex-1">
                          <h5 className="font-semibold text-gray-900 text-sm">
                            {item.exam}
                          </h5>
                          {item.link && (
                            <div className="mt-2">
                              <p className="text-xs text-gray-600 mb-2">{item.rank}</p>
                              {item.description && (
                                <p className="text-xs text-gray-500 mb-3 leading-relaxed">{item.description}</p>
                              )}
                              <div className="flex flex-wrap gap-2">
                                <a 
                                  href={item.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-xs font-medium transition-colors shadow-sm hover:shadow-md"
                                >
                                  <i className="fas fa-certificate mr-2"></i>
                                  View Certificates
                                </a>
                                <span className="inline-flex items-center bg-green-100 text-green-800 px-3 py-2 rounded-lg text-xs font-medium">
                                  <i className="fas fa-check-circle mr-1"></i>
                                  Verified
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                        {!item.link && (
                          <span className="inline-block bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium ml-3">
                            {item.rank}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Positions */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12 flex items-center justify-center">
            <i className="fas fa-user-tie text-green-600 mr-3"></i>
            Leadership & Responsibilities
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {positions.map((position, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className={`${position.icon} text-green-600 text-lg`}></i>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-bold text-gray-900">
                        {position.title}
                      </h4>
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {position.year}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {position.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

