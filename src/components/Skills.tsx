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
      skills: ["Go-to-market Strategy", "Product Positioning & Messaging", "Product Pricing", "Program Marketing", "Performance Marketing", "Campaign Management"]
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
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Areas of Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive expertise in communications strategy, marketing execution, and data-driven decision making
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              <div className="flex items-start mb-6">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">
                    {category.icon}
                  </span>
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {category.description}
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-sm font-medium"
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
