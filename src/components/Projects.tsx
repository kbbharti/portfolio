export default function Projects() {
  const projects = [
    {
      title: "The Event Horizon Protocol: Turning One Time Experiences into Perpetual Programs",
      description: "The event (a user conference, a partner summit, a major launch party) is often treated as a finite project: months of planning, three days of execution, and then closure. This protocol challenges that mindset by showing how to turn one time experiences into perpetual programs that drive continuous value.",
      topics: ["Event Strategy", "Program Marketing", "Sustainable Engagement", "ROI Optimization"],
      link: "https://medium.com/@khushbubharti.97/the-event-horizon-protocol-turning-one-time-experiences-into-perpetual-programs-d855f950eb19",
      category: "Thought Leadership"
    },
    {
      title: "The Comms Flow Framework: Mapping Internal Anxiety to External Trust",
      description: "In today's hyper connected world, a company's greatest PR risk rarely starts in the media: it starts in a private employee Slack channel. This framework maps how internal communication flows directly impact external trust and provides actionable strategies to prevent crises before they escalate.",
      topics: ["Internal Communications", "Crisis Prevention", "Trust Building", "PR Strategy"],
      link: "https://medium.com/@khushbubharti.97/the-comms-flow-framework-mapping-internal-anxiety-to-external-trust-ff6b692623a2",
      category: "Thought Leadership"
    },
    {
      title: "The Employer Brand: Your New First Party Data Strategy for Authentic Communications",
      description: "We are facing a crisis of trust. Consumers are tired of polished corporate narratives, and candidates are experts at spotting culture washing. This article explores how employer branding becomes your most powerful first party data strategy for building authentic communications that resonate.",
      topics: ["Employer Branding", "First-Party Data", "Authentic Communications", "Trust Marketing"],
      link: "https://medium.com/@khushbubharti.97/the-employer-brand-your-new-first-party-data-strategy-for-authentic-communications-75890c5a8c32",
      category: "Thought Leadership"
    },
    {
      title: "The Program Marketer's Guide to Pre Mortem Launches",
      description: "The product launch is the ultimate moment of cross functional chaos. Product Marketing owns the messaging, but Program Marketing owns the orchestration. This guide introduces the Pre Mortem approach to killing your product launch before it kills you by identifying failure points and building resilient go to market strategies.",
      topics: ["Product Launch", "Program Marketing", "Risk Management", "GTM Strategy"],
      link: "https://medium.com/@khushbubharti.97/the-program-marketers-guide-to-pre-mortem-launches-how-to-kill-your-product-before-it-kills-0c40ed53c957",
      category: "Thought Leadership"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-6">
          <i className="fas fa-lightbulb text-purple-600 mr-3"></i>
          Thought Leadership & Work
        </h2>
        <p className="text-xl text-gray-700 text-center mb-16">
          Strategic insights and proven frameworks in communications and marketing
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-gray-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {project.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.topics.map((topic, topicIndex) => (
                  <span 
                    key={topicIndex}
                    className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-xs font-medium"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-sm"
              >
                <i className="fab fa-medium"></i>
                Read on Medium
                <i className="fas fa-external-link-alt text-xs"></i>
              </a>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border-2 border-blue-200 shadow-lg">
            <p className="text-gray-800 font-medium text-lg mb-4">
              <i className="fas fa-brain text-purple-600 mr-2"></i>
              Strategic frameworks and insights developed through hands-on experience across{' '}
              <span className="text-blue-700 font-bold">
                Amazon, Computacenter, and Shoppers Stop
              </span>
            </p>
            <a 
              href="https://medium.com/@khushbubharti.97"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              <i className="fab fa-medium"></i>
              View All Articles on Medium
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
