
'use client'

export default function Experience() {
  // Calculate experience from 2020 to current date
  const getExperience = () => {
    const startDate = new Date('2020-01-01')
    const currentDate = new Date()
    
    // Calculate total days
    const totalDays = Math.floor((currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))
    
    // Calculate years and remaining days
    const years = Math.floor(totalDays / 365.25) // Using 365.25 to account for leap years
    const remainingDays = totalDays - (years * 365.25)
    
    // If remaining days are within ±30 days of a full year, show exact years
    // Otherwise show n+ years
    if (Math.abs(remainingDays) <= 30) {
      return `${years} years`
    } else {
      return `${years}+ years`
    }
  }

  const experiences = [
    {
      id: 1,
      company: "COMPUTACENTER",
      position: <>Corporate Communications & Marketing Specialist</>,
      duration: "2025 - Present",
      location: "Bengaluru, India",
      description: <>Leading corporate communications strategies for both internal and external stakeholders, ensuring consistent and impactful messaging across channels.</>,
      achievements: [
        <><span className="font-bold text-blue-400">Corporate Communications Strategy</span>: Design and execute corporate communications strategies for both internal and external stakeholders, ensuring consistent and impactful messaging across channels.</>,
        <><span className="font-bold text-blue-400">Executive Branding & PR</span>: Lead public relations and executive branding initiatives for the company and country head, including PR campaigns, media engagement, and thought-leadership positioning.</>,
        <><span className="font-bold text-blue-400">Content Creation & Scripting</span>: Conceptualize and script video content, speeches, and executive communications, enhancing leadership visibility and brand authority.</>,
        <><span className="font-bold text-blue-400">Employer Branding</span>: Drive employer branding strategies to strengthen the company&apos;s online presence and talent brand, delivering measurable improvements in engagement.</>,
        <><span className="font-bold text-blue-400">Data-Driven Presentations</span>: Create high-impact corporate presentations and market insight decks using data analytics and visualization tools (Power BI, Tableau, Google Analytics, Excel) to support strategic decision-making.</>,
        <><span className="font-bold text-blue-400">Client Partnership Stories</span>: Collaborate with client teams (e.g., Apple, Dell) to design campaign decks and storytelling frameworks that showcase their success as Computacenter partners.</>,
        <><span className="font-bold text-blue-400">Project Management</span>: Manage cross-functional communications projects, ensuring timely delivery, brand consistency, and alignment with corporate objectives.</>
      ],
      technologies: ["Power BI", "Tableau", "Google Analytics", "Excel", "Corporate Communications", "PR", "Employer Branding", "Content Strategy"]
    },
    {
      id: 2,
      company: "AMAZON",
      position: <>Marketing Executive</>,
      duration: "2022 - 2025",
      location: "Bengaluru, India",
      description: <>Spearheaded seller education, retention, and rewards adoption campaigns across Sale Event Planner and Seller Rewards Programs.</>,
      achievements: [
        <><span className="font-bold text-blue-400">Program Marketing Success</span>: Achieved <strong>13% YoY increase in adoption</strong> and <strong>40% growth in Seller Rewards Program</strong> through strategic campaign design and execution.</>,
        <><span className="font-bold text-blue-400">Multi-Channel Campaigns</span>: Delivered onsite marketing, newsletters, and social campaigns targeting SMB sellers across diverse channels for maximum reach and engagement.</>,
        <><span className="font-bold text-blue-400">Global Coordination</span>: Coordinated with cross-functional teams across India, UK, USA, and China for seller education initiatives, ensuring consistent messaging and program delivery.</>,
        <><span className="font-bold text-blue-400">Retention Strategy</span>: Designed and implemented retention-focused messaging and incentive programs that directly contributed to revenue growth and seller satisfaction.</>
      ],
      technologies: ["Program Marketing", "Campaign Management", "Cross-functional Coordination", "Retention Marketing", "Global Marketing"]
    },
    {
      id: 3,
      company: "SHOPPERS STOP",
      position: <>Senior Executive – Marketing</>,
      duration: "2021 - 2022",
      location: "Bengaluru, India",
      description: <>Developed and executed integrated marketing campaigns to boost sales and customer engagement across digital and offline channels.</>,
      achievements: [
        <><span className="font-bold text-blue-400">Campaign Development</span>: Developed and executed in-store and digital marketing campaigns to boost sales and customer engagement across multiple touchpoints.</>,
        <><span className="font-bold text-blue-400">Vendor Coordination</span>: Coordinated with vendors and creative agencies for branding collaterals, PR, and customer activations, ensuring brand consistency.</>,
        <><span className="font-bold text-blue-400">Seasonal Campaigns</span>: Managed seasonal campaigns and promotional events, improving store traffic and conversion rates significantly.</>,
        <><span className="font-bold text-blue-400">Integrated Strategy</span>: Directed integrated performance marketing & content campaigns, working with agencies to unify strategy and ensure brand consistency across touchpoints.</>
      ],
      technologies: ["Integrated Marketing", "Performance Marketing", "Brand Management", "Campaign Coordination", "Vendor Management"]
    },
    {
      id: 4,
      company: "RANANJAY EXPORTS",
      position: <>Content Writer & UX Contributor</>,
      duration: "2020 - 2021",
      location: "Jaipur, India",
      description: <>Produced blogs, UX content & marketing copy for global jewelry markets while enhancing digital storytelling & user journeys.</>,
      achievements: [
        <><span className="font-bold text-blue-400">Content Production</span>: Produced blogs, UX content & marketing copy for global jewelry markets, targeting diverse international audiences.</>,
        <><span className="font-bold text-blue-400">Digital Storytelling</span>: Enhanced digital storytelling & user journeys, increasing engagement and user satisfaction across digital platforms.</>,
        <><span className="font-bold text-blue-400">User Experience</span>: Contributed to improved user experience through strategic content placement and narrative development, optimizing conversion paths.</>
      ],
      technologies: ["Content Writing", "UX Writing", "Digital Storytelling", "Global Marketing", "E-commerce Content"]
    },
    {
      id: 5,
      company: "AMAZON",
      position: <>Site Curator – Fashion & Central Team</>,
      duration: "2019 - 2020",
      location: "Bengaluru, India",
      description: <>Curated and managed fashion content and onsite merchandising for Amazon Fashion, partnering with category managers and brands.</>,
      achievements: [
        <><span className="font-bold text-blue-400">Content Curation</span>: Curated and managed fashion content and onsite merchandising for Amazon Fashion, ensuring brand alignment and trend relevance.</>,
        <><span className="font-bold text-blue-400">Partnership Management</span>: Partnered with category managers, designers, and brands to ensure aligned visual merchandising and current fashion trends.</>,
        <><span className="font-bold text-blue-400">User Experience Enhancement</span>: Enhanced user experience by optimizing product placement and editorial storytelling, improving customer engagement and conversion rates.</>
      ],
      technologies: ["Content Curation", "Visual Merchandising", "Fashion Marketing", "Editorial Strategy", "Brand Partnership"]
    }
  ]

  const caseStudies = [
    {
      title: "Employer Branding at Computacenter",
      challenge: "Attract & retain top talent in a competitive tech market.",
      action: "Built strategic employer branding campaigns, crafted leadership communication, aligned internal & external branding.",
      impact: "Increased visibility in the talent market, improved retention & employee advocacy."
    },
    {
      title: "Amazon Seller Rewards Program",
      challenge: "Low adoption of new seller rewards program.",
      action: "Designed multi-channel program marketing strategy across global teams, using adoption campaigns, retention-focused messaging, and incentives.",
      impact: "Achieved 40% adoption growth, directly contributing to revenue growth."
    },
    {
      title: "Integrated Campaigns at Shoppers Stop",
      challenge: "Fragmented campaigns across digital & offline channels.",
      action: "Directed integrated performance marketing & content campaigns, working with agencies to unify strategy.",
      impact: "Increased customer engagement & ensured brand consistency across touchpoints."
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {getExperience()} of experience in corporate communications, marketing strategy, and brand development across diverse industries
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="group relative">
              <div className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-700 overflow-hidden">
                <div className="p-8 lg:p-10">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">
                            {exp.position}
                          </h3>
                          <div className="flex items-center text-blue-400 font-semibold text-lg mb-2">
                            <i className="fas fa-building mr-2"></i>
                            {exp.company}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-700 text-blue-400 mb-2">
                            <i className="fas fa-calendar-alt mr-2"></i>
                            {exp.duration}
                          </div>
                          <div className="flex items-center text-gray-400 text-sm">
                            <i className="fas fa-map-marker-alt mr-2"></i>
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <p className="text-gray-300 leading-relaxed text-lg">
                          {exp.description}
                        </p>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                          <i className="fas fa-star text-yellow-400 mr-2"></i>
                          Key Achievements
                        </h4>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                              <span className="text-gray-300 leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-white mb-3 flex items-center">
                          <i className="fas fa-tools text-gray-400 mr-2"></i>
                          Technologies & Skills
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-gradient-to-r from-gray-700 to-gray-600 text-gray-300 text-sm rounded-full font-medium hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Strategic Case Studies
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-700">
                <h4 className="text-lg font-bold text-white mb-4">{study.title}</h4>
                <div className="space-y-4">
                  <div>
                    <span className="text-sm font-semibold text-red-400">Challenge:</span>
                    <p className="text-gray-300 text-sm mt-1">{study.challenge}</p>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-blue-400">Action:</span>
                    <p className="text-gray-300 text-sm mt-1">{study.action}</p>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-green-400">Impact:</span>
                    <p className="text-gray-300 text-sm mt-1">{study.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
