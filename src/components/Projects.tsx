export default function Projects() {
  const projects = [
    {
      title: "Employer Branding as a Strategic Lever for Growth",
      description: "Thought leadership piece exploring how employer branding is no longer just about showcasing culture on social media — it's a strategic growth driver that attracts top talent, retains high performers, and directly impacts business outcomes.",
      topics: ["Employer Branding", "Strategic Growth", "Talent Attraction", "Business Impact"],
      metrics: "Strategic Framework Development",
      category: "Thought Leadership",
      impact: "Built programs that bridged employer branding with marketing campaigns, positioning employee experience as competitive advantage"
    },
    {
      title: "From Campaigns to Strategy: Marketing's Leadership Role",
      description: "Analysis of marketing's evolution from execution arm to strategic director, emphasizing how marketing teams' proximity to customers makes them critical voices in leadership discussions.",
      topics: ["Marketing Strategy", "Leadership", "Customer Insights", "Business Strategy"],
      metrics: "Strategic Direction Framework",
      category: "Thought Leadership", 
      impact: "Demonstrated how marketing's role extends beyond delivering results to informing strategy that drives long-term growth"
    },
    {
      title: "Data-Driven Communications: Insights into Business Decisions",
      description: "Exploration of how communication cannot rely on intuition alone — data is the bridge between storytelling and business impact, transforming communication into a decision-making tool.",
      topics: ["Data Analytics", "Communications Strategy", "Decision Making", "Business Intelligence"],
      metrics: "Data-Communication Framework",
      category: "Thought Leadership",
      impact: "Showed how data transforms communication from storytelling to influencing outcomes at scale through engagement metrics and insights"
    },
    {
      title: "Multi-Channel Campaign Strategy Implementation",
      description: "Comprehensive campaign development across digital and traditional channels, focusing on consistent messaging and brand alignment for maximum market impact.",
      topics: ["Campaign Management", "Multi-Channel Strategy", "Brand Consistency", "Market Impact"],
      metrics: "40% Program Growth Achievement",
      category: "Strategic Implementation",
      impact: "Achieved 40% growth in Amazon Seller Rewards Program through strategic multi-channel approach and global team coordination"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-6">
          <i className="fas fa-lightbulb text-purple-400 mr-3"></i>
          Thought Leadership & Strategic Work
        </h2>
        <p className="text-xl text-gray-300 text-center mb-16">
          Strategic insights and proven frameworks in communications and marketing
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-700 border border-gray-600 rounded-xl p-6 hover:shadow-xl transition-shadow group">
              <div className="mb-4">
                <span className="bg-blue-600 text-blue-100 text-xs font-medium px-2 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.topics.slice(0, 4).map((topic, topicIndex) => (
                    <span 
                      key={topicIndex}
                      className="bg-gray-600 text-gray-200 text-xs px-2 py-1 rounded"
                    >
                      {topic}
                    </span>
                  ))}
                  {project.topics.length > 4 && (
                    <span className="bg-gray-600 text-gray-200 text-xs px-2 py-1 rounded">
                      +{project.topics.length - 4} more
                    </span>
                  )}
                </div>
              </div>
              
              <div className="mb-3">
                <div className="text-sm text-green-400 font-medium mb-2">
                  <i className="fas fa-chart-line mr-2"></i>
                  {project.metrics}
                </div>
                <p className="text-xs text-gray-400 italic">
                  Impact: {project.impact}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gray-700 rounded-lg p-6 inline-block border border-gray-600">
            <p className="text-purple-300 font-medium">
              <i className="fas fa-brain text-purple-400 mr-2"></i>
              Strategic frameworks and insights developed through{' '}
              <span className="text-purple-200 font-semibold">
                hands-on experience across Amazon, Computacenter, and Shoppers Stop
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
