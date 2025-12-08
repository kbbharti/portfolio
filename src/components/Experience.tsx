
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
      position: <>Marketing & Communications Specialist</>,
      duration: "2025 – Present",
      location: "Bengaluru, Karnataka",
      description: <>Leading employer branding, strategic communications, and leadership visibility initiatives across internal and external channels.</>,
      achievements: [
        {
          title: "Employer Branding & Strategic Communications",
          points: [
            "Designed a 6-pillar EVP framework by conducting competitive benchmarking, employee insight mapping, and predictive talent analysis, resulting in its adoption by HR leadership for global employer branding strategy",
            "Developed a comprehensive Employer Branding Case Study by defining culture narratives, brand pillars, and communication guidelines, leading to consistent recruitment messaging across regions"
          ]
        },
        {
          title: "Executive Communications & PR Planning",
          points: [
            "Created executive communication decks by synthesizing complex organizational updates and leadership messaging, resulting in streamlined communication for the CEO India visit and annual reviews",
            "Led PR planning for CEO visit by crafting messaging strategy, briefing documents, and stakeholder talking points, leading to flawless end-to-end event communication execution",
            "Supported annual PR budget planning by analyzing narrative needs and vendor costs, resulting in optimized event communication spending"
          ]
        },
        {
          title: "Content Strategy & Brand Management",
          points: [
            "Executed multi-platform social media calendars by developing content themes and brand-aligned messaging, increasing employer brand engagement across key channels",
            "Produced culture and talent video scripts by collaborating with branding and leadership teams, enhancing internal engagement and storytelling consistency",
            "Created internal communication assets by aligning content with recognition programs and event themes, leading to improved message clarity across the organization"
          ]
        },
        {
          title: "Cross-Functional Collaboration",
          points: [
            "Partnered with HR, PR, Recruitment, Branding & Global Marketing by aligning on messaging and delivery timelines, resulting in timely and consistent campaign execution"
          ]
        }
      ],
      technologies: ["Employer Branding", "Corporate Communications", "Public Relations", "Leadership Communications", "Content Strategy", "Social Media Strategy", "HubSpot", "Asana"],
      caseStudy: {
        title: "Building a Data-Driven Employer Branding Framework",
        description: "Developed a comprehensive 6-pillar EVP framework grounded in competitive analysis, market intelligence, and predictive talent trends to position Computacenter as an employer of choice.",
        link: "/case-studies/computacenter-evp"
      }
    },
    {
      id: 2,
      company: "AMAZON",
      position: <>Program & Product Marketing Specialist</>,
      duration: "2022 – 2024",
      location: "Bengaluru, Karnataka",
      description: <>Led product marketing, seller education, and program adoption campaigns across multiple seller programs and global markets.</>,
      achievements: [
        {
          title: "Product Marketing & Adoption Growth",
          points: [
            "Increased adoption of SEP, SRP & Rewards Points by designing data-backed communication journeys and targeted messaging, achieving measurable uplift of 13–40% across programs",
            "Developed product positioning for Karigar, Saheli & Launchpad by analyzing seller insights and program differentiators, resulting in improved awareness among SMB sellers",
            "Improved seller engagement by simplifying onboarding content and mapping friction points, leading to smoother product discovery and usage"
          ]
        },
        {
          title: "Marketing Communications & Content Development",
          points: [
            "Created newsletters, email campaigns, and product content by synthesizing product updates and seller insights, resulting in higher communication clarity and engagement",
            "Built global communication playbooks by standardizing messaging for US, UK & China markets, ensuring consistency across geographies",
            "Produced seller education materials by breaking down complex product features into simple guides, reducing onboarding friction and support queries"
          ]
        },
        {
          title: "Cross-Functional Leadership & Event Marketing",
          points: [
            "Collaborated with Product, Legal, PR & Creative by managing approvals and aligning messaging, resulting in smooth cross-team campaign execution",
            "Led execution of Amazon Sambhav booths by coordinating vendors, sellers, and operations, delivering successful engagement across 8 exhibition booths"
          ]
        }
      ],
      technologies: ["Product Marketing", "Program Marketing", "Campaign Management", "Content Strategy", "Global Marketing", "Stakeholder Management"],
      caseStudies: [
        {
          title: "Seller Rewards Program: Driving Adoption & Engagement",
          description: "Led product marketing strategy for Amazon's B2B Seller Rewards Program, achieving 40-70% adoption growth during key sale periods through multi-channel campaigns and data-driven optimization.",
          link: "/case-studies/amazon-seller-rewards"
        },
        {
          title: "Sale Event Planner: Accelerating Revenue Growth",
          description: "Owned complete user acquisition and activation strategy for SEP, transforming an underutilized tool into a revenue-driving platform through strategic positioning and behavioral engagement.",
          link: "/case-studies/amazon-sale-event-planner"
        }
      ]
    },
    {
      id: 3,
      company: "SHOPPERS STOP",
      position: <>Senior Executive</>,
      duration: "2021 – 2022",
      location: "Bengaluru",
      description: <>Produced creative content for seasonal campaigns, loyalty programs, and brand storytelling across digital platforms.</>,
      achievements: [
        {
          title: "Campaign Content & Digital Assets",
          points: [
            "Developed campaign content by analyzing seasonal trends and customer insights, resulting in improved engagement for festive and fashion campaigns",
            "Produced digital assets and visuals by collaborating with creative and merchandising teams, leading to cohesive multi-channel campaign execution"
          ]
        },
        {
          title: "Social Media & Brand Visibility",
          points: [
            "Created social media content and styling guides by interpreting fashion trends, increasing digital brand visibility and customer interaction"
          ]
        }
      ],
      technologies: ["Content Marketing", "Digital Marketing", "Brand Storytelling", "Social Media", "Creative Strategy"]
    },
    {
      id: 4,
      company: "RANANJAY EXPORTS",
      position: <>Content Writer & Creative Strategist</>,
      duration: "2020 – 2021",
      location: "Jaipur & Remote",
      description: <>Delivered content strategy and brand storytelling for multiple global clients across digital platforms.</>,
      achievements: [
        {
          title: "Content Strategy & UX Writing",
          points: [
            "Delivered content strategy by creating brand stories, product descriptions, and website content, resulting in improved brand recall for multiple global clients",
            "Designed UX writing flows by mapping emotional user journeys for their website"
          ]
        },
        {
          title: "Brand Identity Development",
          points: [
            "Created brand identity kits by aligning visuals and messaging across platforms, strengthening the brand presence of D2C and B2B clients"
          ]
        }
      ],
      technologies: ["Content Strategy", "UX Writing", "Brand Storytelling", "Digital Marketing", "Creative Strategy"]
    },
    {
      id: 5,
      company: "AMAZON",
      position: <>Site Curator & Digital Marketing Associate (Fashion & Central Teams)</>,
      duration: "2019 – 2020",
      location: "Bengaluru",
      description: <>Curated Amazon Fashion site content and executed digital + on-site marketing strategies driving traffic and engagement.</>,
      achievements: [
        {
          title: "Content Curation & Digital Marketing",
          points: [
            "Curated Amazon Fashion site content by optimizing storefronts, PDPs, and campaign banners, leading to increased traffic and engagement on fashion pages",
            "Executed on-site and digital marketing strategies by collaborating with central category and design teams, resulting in higher impressions and improved customer navigation"
          ]
        },
        {
          title: "Content Creation & Trend Analysis",
          points: [
            "Created buying guides and trend stories by analyzing customer behavior and fashion insights, enhancing user experience and conversion potential"
          ]
        }
      ],
      technologies: ["Digital Marketing", "Content Curation", "Fashion Marketing", "Campaign Management", "Stakeholder Management"]
    }
  ]

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const caseStudies = [
    {
      title: "Employer Branding at Computacenter",
      challenge: "Attract & retain top talent in a competitive tech market.",
      action: "Built strategic employer branding campaigns, crafted leadership communication, aligned internal & external branding.",
      impact: "Increased visibility in the talent market, improved retention & employee advocacy.",
      link: "/case-studies/computacenter-evp"
    },
    {
      title: "Amazon Seller Rewards Program",
      challenge: "Low adoption of new seller rewards program.",
      action: "Designed multi-channel program marketing strategy across global teams, using adoption campaigns, retention-focused messaging, and incentives.",
      impact: "Achieved 40-70% adoption growth during key sale periods, 70%+ WhatsApp open rates.",
      link: "/case-studies/amazon-seller-rewards"
    },
    {
      title: "Amazon Sale Event Planner",
      challenge: "Low engagement with event enrollment tool, fragmented seller workflows.",
      action: "Owned complete user acquisition & activation strategy with behavioral engagement, gamification, and multi-phase campaigns.",
      impact: "Transformed underutilized tool into revenue-driving platform with material GMS increase.",
      link: "/case-studies/amazon-sale-event-planner"
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-700 font-medium">
            <span className="text-2xl font-bold text-blue-600">{getExperience()}</span> of building scalable communications strategies and marketing campaigns
          </p>
        </div>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative group">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-20 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-400 rounded-full opacity-60"></div>
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-6 top-6 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-xl animate-pulse group-hover:scale-125 transition-transform duration-300"></div>
              
              {/* Content */}
              <div className="ml-20">
                <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] group-hover:border-blue-300">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {exp.position}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-gray-600">
                        <span className="font-bold text-blue-600 text-lg bg-blue-50 px-3 py-1 rounded-full">{exp.company}</span>
                        <span className="hidden sm:block text-blue-400">•</span>
                        <span className="font-medium text-gray-700 bg-gray-100 px-3 py-1 rounded-full">{exp.duration}</span>
                        <span className="hidden sm:block text-blue-400">•</span>
                        <span className="font-medium text-gray-700 bg-gray-100 px-3 py-1 rounded-full flex items-center">
                          <svg className="w-4 h-4 mr-1 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-gray-700 mb-8 leading-relaxed text-lg bg-gray-50 p-4 rounded-xl border-l-4 border-blue-400">
                    {typeof exp.description === 'string' ? exp.description : exp.description}
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                      <svg className="w-6 h-6 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                      </svg>
                      Key Achievements
                    </h4>
                    <div className="space-y-5">
                      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                      {exp.achievements.map((achievement: any, idx: number) => (
                        <div key={idx}>
                          {typeof achievement === 'object' && achievement.title ? (
                            <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-5 border border-gray-200 border-l-4 border-l-blue-500 shadow-sm hover:shadow-md transition-shadow duration-200">
                              <h5 className="font-bold text-gray-900 text-lg mb-3">{achievement.title}</h5>
                              <ul className="space-y-2 list-disc list-inside ml-2">
                                {achievement.points.map((point: string, pointIdx: number) => (
                                  <li key={pointIdx} className="text-gray-700 leading-relaxed text-sm">
                                    {point}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ) : (
                            <div className="text-gray-700 leading-relaxed">
                              {typeof achievement === 'string' ? achievement : achievement}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                      <span className="text-2xl mr-3">🛠️</span>
                      Skills & Tools
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-200 transition-colors duration-200 shadow-sm cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Case Study Section */}
                  {(exp.caseStudy || exp.caseStudies) && (
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                        <svg className="w-6 h-6 mr-3 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                        </svg>
                        {exp.caseStudies ? 'Featured Case Studies' : 'Featured Case Study'}
                      </h4>
                      {exp.caseStudy && (
                        <a 
                          href={exp.caseStudy.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl p-6 hover:from-gray-200 hover:to-gray-300 transition-all duration-300 group shadow-lg hover:shadow-xl border border-gray-300"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h5 className="text-xl font-bold text-gray-900 mb-3 group-hover:underline">
                                {exp.caseStudy.title}
                              </h5>
                              <p className="text-gray-700 text-base leading-relaxed mb-4">
                                {exp.caseStudy.description}
                              </p>
                              <div className="inline-flex items-center text-white font-semibold text-base bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors shadow-md">
                                View Case Study
                                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </a>
                      )}
                      {exp.caseStudies && (
                        <div className="space-y-4">
                          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                          {exp.caseStudies.map((study: any, studyIndex: number) => (
                            <a 
                              key={studyIndex}
                              href={study.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl p-6 hover:from-gray-200 hover:to-gray-300 transition-all duration-300 group shadow-lg hover:shadow-xl border border-gray-300"
                            >
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <h5 className="text-xl font-bold text-gray-900 mb-3 group-hover:underline">
                                    {study.title}
                                  </h5>
                                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                                    {study.description}
                                  </p>
                                  <div className="inline-flex items-center text-white font-semibold text-base bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors shadow-md">
                                    View Case Study
                                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-10 border border-gray-200 shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
            Career Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group hover:shadow-lg transition-shadow duration-300">
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
                <h3 className="text-4xl font-bold text-blue-600 mb-3">
                  6+ Years
                </h3>
                <p className="text-gray-700 font-semibold">Total Experience</p>
                <div className="w-16 h-1 bg-blue-400 mx-auto mt-3 rounded-full"></div>
              </div>
            </div>
            <div className="group hover:shadow-lg transition-shadow duration-300">
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
                <h3 className="text-4xl font-bold text-green-600 mb-3">5</h3>
                <p className="text-gray-700 font-semibold">Companies Worked</p>
                <div className="w-16 h-1 bg-green-400 mx-auto mt-3 rounded-full"></div>
              </div>
            </div>
            <div className="group hover:shadow-lg transition-shadow duration-300">
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
                <h3 className="text-4xl font-bold text-orange-600 mb-3">15+</h3>
                <p className="text-gray-700 font-semibold">Campaigns Delivered</p>
                <div className="w-16 h-1 bg-orange-400 mx-auto mt-3 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
