export default function Skills() {
  const skillCategories = [
    {
      title: "Cloud Platforms & Services",
      skills: ["Azure", "Azure OpenAI", "GCP",  "GitHub", "Databricks"]
    },
    {
      title: "Container & Orchestration",
      skills: ["Docker", "Kubernetes", "GKE", "GitHub Actions", "Cloud Build"]
    },
    {
      title: "Data & ML Platforms",
      skills: ["Databricks", "Unity Catalog", "Spark", "Airflow", "MLOps", "Feast", "EdgeDB", "Snowflake"]
    },
    {
      title: "API & Development",
      skills: ["FastAPI", "Python", "RESTful APIs", "Microservices", "GitOps", "Semantic Versioning", "Kserve", "Triton Inference Server"]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16">
          Skills & Technologies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="bg-blue-100 text-blue-800 px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors"
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
