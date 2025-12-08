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
      category: "Marketing & Analytics",
      items: [
        { name: "Google Analytics", provider: "Google", status: "Completed", link: "https://skillshop.credential.net/27233ead-2295-4aa3-b851-97f97824e89a#acc.Mg4ZvXh1" },
        { name: "Inbound Marketing", provider: "HubSpot", status: "Completed", link: "https://app-na2.hubspot.com/academy/achievements/v4y9fyr1/en/1/khushbu-na/inbound-marketing" },
        { name: "Generative AI Marketing Professional Certificate", provider: "American Marketing Association", status: "Completed", link: "https://www.linkedin.com/learning/certificates/70307d3542c4d7e98cf7bf47480076583f69f97c6ee0c7e775dd129fda451d17?u=2168817" },
        { name: "Marketing Automation", provider: "Simplilearn", status: "Completed", link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI2NjgiLCJjZXJ0aWZpY2F0ZV91cmwiOiJodHRwczpcL1wvY2VydGlmaWNhdGVzLnNpbXBsaWNkbi5uZXRcL3NoYXJlXC83OTUzNjY0XzgyOTIzNjcxNzQwMzk2MTA4MTQyLnBuZyIsInVzZXJuYW1lIjoiS2h1c2hidSBCaGFydGkgIn0%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion" }
      ]
    },
    {
      category: "Product & Strategy",
      items: [
        { name: "Aha! Product Management Professional Certificate", provider: "LinkedIn Learning", status: "Completed", link: "https://www.linkedin.com/learning/certificates/37684298c95fdd63089f90f1148397f6f3c99e5409988daae7e489cd4b6a6c34?u=2168817" },
        { name: "Negotiation Professional Certificate", provider: "American Negotiation Institute", status: "Completed", link: "https://www.linkedin.com/learning/certificates/ab092aac4997fdc1cb5ac910fc174665b9ba2e52ad09d2c1f32bdb8f235b384b?u=2168817" },
        { name: "Turning Data into Strategies", provider: "LinkedIn Learning", status: "Completed", link: "https://www.linkedin.com/learning/certificates/1270997dc232ea41f31c9cf2b55674481d94c1fa412e87589d867bf04de8c6ce?u=2168817" }
      ]
    }
  ]

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Education & Certifications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Continuous learning and professional development in communications, marketing, and strategic leadership
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Certifications Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center flex items-center justify-center">
            <i className="fas fa-certificate text-green-600 mr-3"></i>
            Professional Certifications
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-green-600">
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <i className="fas fa-award text-green-600 mr-2"></i>
                  {cert.category}
                </h4>
                <div className="space-y-3">
                  {cert.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="border-l-4 border-green-600 pl-4 rounded-r-lg py-2"
                    >
                      <div className="flex items-start justify-between mb-1">
                        <p className="font-semibold text-gray-900 text-sm pr-2">{item.name}</p>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium flex-shrink-0 ${
                          item.status === 'Completed' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-gray-600 text-xs">{item.provider}</p>
                      </div>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-green-600 hover:text-green-700 text-xs font-medium hover:underline"
                      >
                        View Certificate
                        <i className="fas fa-external-link-alt text-xs"></i>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
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
                        <span className="text-gray-900 font-medium">
                          {edu.institute}
                        </span>
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
      </div>
    </section>
  )
}

