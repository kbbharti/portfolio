export default function Skills() {
  const skillCategories = [
    {
      title: "Cloud Platforms & Services",
      icon: "☁️",
      description: "Enterprise cloud infrastructure and AI services",
      skills: ["Azure", "Azure OpenAI", "GCP", "GitHub", "Databricks"]
    },
    {
      title: "Container & Orchestration",
      icon: "🐳",
      description: "Containerization and deployment automation",
      skills: ["Docker", "Kubernetes", "GKE", "GitHub Actions", "Cloud Build"]
    },
    {
      title: "Data & ML Platforms",
      icon: "🤖",
      description: "Machine learning and data processing platforms",
      skills: ["Databricks", "Unity Catalog", "Spark", "Airflow", "MLOps", "Feast", "EdgeDB", "Snowflake"]
    },
    {
      title: "API & Development",
      icon: "⚡",
      description: "Backend development and API architecture",
      skills: ["FastAPI", "Python", "RESTful APIs", "Microservices", "GitOps", "Semantic Versioning", "Kserve", "Triton Inference Server"]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive expertise in modern cloud technologies, ML platforms, and scalable system architecture
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-blue-200 hover:border-blue-300"
            >
              <div className="flex items-start mb-6">
                <span className="text-3xl text-blue-600 mr-4">
                  {category.icon}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {category.description}
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="bg-blue-100 text-blue-800 hover:bg-blue-200 px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 shadow-sm hover:shadow-md"
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
