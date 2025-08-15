export default function Projects() {
  const projects = [
    {
      title: "Sparse Linear Regression with Advanced Optimization",
      description: "Implemented sparse linear regression utilizing Accelerated Proximal Gradient Descent and Stochastic Coordinate Gradient Descent optimization techniques.",
      technologies: ["Machine Learning", "Optimization", "Python", "Mathematical Modeling"],
      metrics: "Advanced ML Algorithms",
      category: "ML - IIT Kanpur",
      institution: "IIT Kanpur"
    },
    {
      title: "Multiclass Code Repair Classification",
      description: "Developed multiclass classification system for code repair using Bag of Words representations with Learning with Prototypes, One vs All, and Decision Tree methods.",
      technologies: ["Classification", "NLP", "Decision Trees", "Machine Learning"],
      metrics: "Multiple ML Approaches",
      category: "ML - IIT Kanpur",
      institution: "IIT Kanpur"
    },
    {
      title: "8 Programming Languages in 8 Weeks",
      description: "Comprehensive programming challenge covering 8 different programming languages in 8 weeks, exploring various paradigms and developing foundational understanding.",
      technologies: ["Multi-Language", "Programming Paradigms", "Software Development", "Problem Solving"],
      metrics: "8 Languages Mastered",
      category: "Programming Club - IIT Kanpur",
      institution: "IIT Kanpur"
    },
    {
      title: "ANITA Experiment Data Analysis",
      description: "Analyzed radio pulses and surface topography in ANITA experiment, creating 3D visualizations of mathematical formulations and experimental data using Python.",
      technologies: ["Data Analysis", "3D Visualization", "Python", "Scientific Computing"],
      metrics: "3D Data Visualization",
      category: "Academic Project - IIT Kanpur",
      institution: "IIT Kanpur"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-6">
          <i className="fas fa-graduation-cap text-blue-600 mr-3"></i>
          Academic Projects
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16">
          Research and development projects from IIT Kanpur
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-shadow group">
              <div className="mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>
              
              <div className="text-sm text-green-600 font-medium">
                <i className="fas fa-university mr-2"></i>
                {project.metrics}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-blue-50 rounded-lg p-6 inline-block border border-blue-100">
            <p className="text-blue-800 font-medium">
              <i className="fas fa-university text-blue-600 mr-2"></i>
              Projects completed at{' '}
              <a 
                href="https://www.iitk.ac.in/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-700 hover:text-blue-900 font-semibold underline hover:no-underline transition-colors"
              >
                Indian Institute of Technology, Kanpur
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
