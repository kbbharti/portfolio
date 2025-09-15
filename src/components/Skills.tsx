export default function Skills() {
  const skillCategories = [
    {
      title: "Strategic Communications",
      icon: "📢",
      description: "Corporate communications and PR strategy",
      skills: ["Corporate Communications", "Public Relations", "Executive Branding", "Internal Communications", "Crisis Communications"]
    },
    {
      title: "Marketing & Campaigns",
      icon: "🚀",
      description: "Multi-channel marketing and campaign management",
      skills: ["Program Marketing", "Performance Marketing", "Campaign Management", "Content Marketing", "Social Media Strategy"]
    },
    {
      title: "Data Analytics & Tools",
      icon: "📊",
      description: "Data-driven insights and visualization tools",
      skills: ["Power BI", "Tableau", "Google Analytics", "Microsoft Excel", "Data Storytelling", "Market Research"]
    },
    {
      title: "Digital Platforms & Management",
      icon: "💻",
      description: "Digital marketing platforms and project management",
      skills: ["HubSpot", "Asana", "Microsoft PowerPoint", "Employer Branding", "Product Marketing", "Stakeholder Management"]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Areas of Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive expertise in communications strategy, marketing execution, and data-driven decision making
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-700 hover:border-blue-400"
            >
              <div className="flex items-start mb-6">
                <span className="text-3xl text-blue-400 mr-4">
                  {category.icon}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {category.description}
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="bg-gray-700 text-gray-300 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 shadow-sm hover:shadow-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
