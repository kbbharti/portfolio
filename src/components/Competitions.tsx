export default function Competitions() {
  const competitions = [
    {
      title: "HackerEarth ML Challenge - Marketing Optimization",
      description: "Achieved Rank 1 in HackerEarth Machine Learning Challenge focused on optimizing marketing expenditure by leveraging predictive analytics.",
      technologies: ["Machine Learning", "Predictive Analytics", "Python", "Data Science"],
      metrics: "Rank 1 🏆",
      category: "Competition",
      link: "https://www.hackerearth.com/challenges/competitive/hackerearth-machine-learning-challenge-reduce-marketing-spend/leaderboard/reduce-marketing-waste-24-9c4e0592/",
      date: "Apr 2021"
    },
    {
      title: "HackerEarth ML Challenge - Wind Power Prediction",
      description: "Secured Rank 5 in HackerEarth Machine Learning Challenge centered around predicting power generation on windy days using data-driven approaches.",
      technologies: ["Machine Learning", "Time Series", "Predictive Modeling", "Python"],
      metrics: "Rank 5 🏆",
      category: "Competition",
      link: "https://www.hackerearth.com/challenges/competitive/hackerearth-machine-learning-challenge-predict-windmill-power/leaderboard/predict-the-power-kwh-produced-from-the-windmills-8-f055f832/",
      date: "May 2021"
    },
    {
      title: "GHF Hackathon - Credit Risk Prediction",
      description: "Attained the 21st position in the GHF Hackathon organized by Univ.AI, demonstrating proficiency in credit risk prediction and financial modeling.",
      technologies: ["Credit Risk", "Financial Modeling", "Machine Learning", "Python"],
      metrics: "Rank 21 🏆",
      category: "Hackathon",
      link: "https://certificate.univ.ai/c/14288u23c",
      date: "Apr 2021"
    }
  ]

  return (
    <section id="competitions" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-6">
          <i className="fas fa-trophy text-yellow-500 mr-3"></i>
          Competition Achievements
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16">
          Proven track record in machine learning competitions and hackathons
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {competitions.map((competition, index) => (
            <div key={index} className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 border-2 border-purple-200 rounded-xl p-6 hover:shadow-xl hover:border-purple-300 transition-all group">
              <div className="flex justify-between items-start mb-4">
                <span className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full border border-purple-200">
                  {competition.category}
                </span>
                <span className="text-sm text-gray-600 font-medium bg-white px-2 py-1 rounded-md shadow-sm">{competition.date}</span>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                {competition.title}
              </h3>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                {competition.description}
              </p>
              
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {competition.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs px-2 py-1 rounded-md border border-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                  <i className="fas fa-trophy text-amber-500 mr-2"></i>
                  {competition.metrics}
                </div>
                <a 
                  href={competition.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-800 text-sm font-medium bg-white px-3 py-1 rounded-md shadow-sm hover:shadow-md transition-all"
                >
                  View Results <i className="fas fa-external-link-alt ml-1"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 italic">
            "Excellence in competitive programming and machine learning challenges"
          </p>
        </div>
      </div>
    </section>
  )
}
