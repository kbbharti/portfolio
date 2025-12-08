import Link from 'next/link'

export default function SideProjects() {
  const sideProjects = [
    {
      title: "Intercom AI",
      description: "AI-powered internal communications assistant for Fortune 500 teams. Transforms raw notes into polished emails, announcements, and leadership updates with 6 tone options, 7 languages, and built-in compliance checking.",
      link: "/sideprojects/intercomai",
      isExternal: false
    },
    {
      title: "BrandAdv AI",
      description: "Employer Branding Content Studio that converts culture, employee stories, and hiring needs into ready to post content for LinkedIn and social media. Turn your culture into content instantly.",
      link: "/sideprojects/brandadv-ai",
      isExternal: false
    },
    {
      title: "LaunchPilot AI",
      description: "Your End-to-End Product Launch Assistant. Helps PMMs create GTM plans, launch calendars, feature announcements, and emails. Plan, execute, and announce product launches 10× faster.",
      link: "/sideprojects/launchpilot-ai",
      isExternal: false
    }
  ]

  return (
    <section id="sideprojects" className="py-20 bg-white">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            <i className="fas fa-code text-blue-600 mr-3"></i>
            Side Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Personal projects showcasing technical skills and creative problem-solving
          </p>
        </div>
        
        <div className="space-y-6">
          {sideProjects.map((project, index) => (
            <div key={index}>
              {project.link === "#" ? (
                <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 opacity-75 cursor-not-allowed">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-700 mb-3">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-500 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center gap-2 bg-gray-200 text-gray-600 px-6 py-3 rounded-lg font-semibold cursor-not-allowed">
                        Coming Soon
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <Link 
                  href={project.link}
                  className="block bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-blue-200 hover:border-blue-400 group"
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center gap-2 bg-blue-600 group-hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform group-hover:scale-105 shadow-md group-hover:shadow-lg">
                        View Details
                        <i className="fas fa-arrow-right"></i>
                      </span>
                    </div>
                  </div>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
