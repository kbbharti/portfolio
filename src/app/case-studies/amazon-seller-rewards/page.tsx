'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function AmazonSellerRewardsCaseStudy() {
  const [activePhase, setActivePhase] = useState(0)

  const campaignPhases = [
    {
      title: "Awareness & Discovery",
      duration: "Pre-Event (3-4 weeks)",
      objective: "Build awareness and generate interest",
      tactics: [
        "Event announcements with benefit-focused messaging",
        "Opportunity sizing and forecasting",
        "Educational content on program benefits",
        "Multi-language content rollout"
      ],
      channels: ["Email broadcasts", "Social media", "Homepage placements", "Webinar invitations"],
      icon: "fa-bullhorn",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Consideration & Education",
      duration: "Early Enrollment (2-3 weeks)",
      objective: "Drive initial enrollments and showcase value",
      tactics: [
        "Product education webinars",
        "Success stories and case studies",
        "Feature walkthroughs and tutorials",
        "Early-bird incentive programs"
      ],
      channels: ["WhatsApp campaigns", "Email nurture series", "Help center content", "Video tutorials"],
      icon: "fa-graduation-cap",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Activation & Engagement",
      duration: "Mid-Cycle (1-2 weeks)",
      objective: "Accelerate conversion and maintain momentum",
      tactics: [
        "Eligibility nudges and reminders",
        "Personalized recommendations",
        "Behavioral triggers and automation",
        "Category-specific campaigns"
      ],
      channels: ["In-app notifications", "CBA alerts", "Inventory page banners", "WhatsApp automation"],
      icon: "fa-rocket",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Urgency & Conversion",
      duration: "Final Push (3-7 days)",
      objective: "Maximize last-minute submissions and enrollments",
      tactics: [
        "Countdown timers and scarcity messaging",
        "Multi-channel campaign blitz",
        "One-click enrollment optimization",
        "Final deadline reminders"
      ],
      channels: ["Email + WhatsApp + CBA + In-app", "Push notifications", "SMS fallback", "Direct outreach"],
      icon: "fa-clock",
      color: "from-yellow-500 to-orange-500"
    }
  ]

  const metrics = [
    { label: "Program Adoption Growth", value: "40-70%", icon: "fa-chart-line", description: "During key sale periods" },
    { label: "WhatsApp Open Rate", value: "70%+", icon: "fa-mobile-alt", description: "High engagement channel" },
    { label: "YoY Adoption Increase", value: "13%", icon: "fa-arrow-up", description: "Overall program growth" },
    { label: "Global Coordination", value: "4 Markets", icon: "fa-globe", description: "India, US, UK, China" }
  ]

  const challenges = [
    {
      title: "Tech Dependencies",
      icon: "fa-cogs",
      issues: [
        "Tech team availability delays for inventory page updates",
        "Critical Business Alerts (CBA) implementation delays",
        "Homepage card placement coordination",
        "WhatsApp template deployment timelines"
      ],
      solution: "Established SLA-driven coordination with Email (2 days), WhatsApp (5 days), Legal (15-20 days), and Product/Tech teams"
    },
    {
      title: "Communication Barriers",
      icon: "fa-language",
      issues: [
        "Incorrect or incomplete seller lists causing mistargeted nudges",
        "Vernacular gaps - sellers couldn't understand English-only messaging",
        "Template rejections from Legal if copy wasn't 100% compliant"
      ],
      solution: "Implemented multi-language content strategy, improved seller list validation, and established legal approval workflows"
    },
    {
      title: "Targeting Complexity",
      icon: "fa-bullseye",
      issues: [
        "Sellers in multiple categories = overlapping campaigns",
        "Couldn't send multiple communications simultaneously",
        "Category-specific rules requiring hyper-segmentation"
      ],
      solution: "Developed sophisticated segmentation strategies and coordinated campaign calendars across categories"
    }
  ]

  const keyLearnings = [
    {
      title: "Cross-Functional Alignment is Critical",
      description: "Successfully launching and scaling a product requires seamless coordination across Product Management, Engineering, Legal, Analytics, Customer Success, and Sales teams.",
      icon: "fa-users-cog",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Customer-Centric Positioning Drives Adoption",
      description: "Sellers responded best to outcome-focused messaging that clearly communicated 'what's in it for me.' Benefit-led positioning and vernacular localization significantly improved product adoption.",
      icon: "fa-user-check",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Data-Driven Optimization is Non-Negotiable",
      description: "Continuous measurement and iteration are essential. Engagement analytics, funnel analysis, and A/B testing insights shaped creative strategy, channel allocation, and messaging frameworks.",
      icon: "fa-chart-bar",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Product Education Accelerates Time-to-Value",
      description: "Comprehensive education through webinars, tutorials, and self-serve content significantly reduced onboarding friction and improved activation rates.",
      icon: "fa-book-open",
      color: "from-yellow-500 to-orange-500"
    }
  ]

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Link href="/#experience" className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors mb-4 font-medium">
            <i className="fas fa-arrow-left mr-2"></i>
            Back to Experience
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Driving Adoption & Engagement for Amazon's Seller Rewards Program
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            Product Marketing Strategy: B2B SaaS Product Marketing & Seller Retention
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
              Product Marketing
            </span>
            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
              Go-to-Market Strategy
            </span>
            <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
              Growth Marketing
            </span>
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
              B2B Marketing
            </span>
          </div>
        </div>
      </div>

      {/* Executive Summary */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <i className="fas fa-file-alt text-blue-600 mr-4"></i>
            Executive Summary
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Amazon's <strong className="text-gray-900">Seller Rewards Program (SRP)</strong> is a B2B product marketing initiative designed to drive product adoption, boost seller retention, and increase engagement with Amazon's marketplace platform. As a product-led growth strategy, SRP incentivizes sellers to adopt key features such as FBA (Fulfillment by Amazon), inventory expansion, and unique product selection through rewards and benefits.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            As the <strong className="text-gray-900">Product Marketing Specialist</strong> driving SRP's go-to-market strategy and product adoption campaigns post-launch, I led multi-channel product marketing, customer lifecycle marketing, positioning and messaging, data-driven optimization, and cross-functional GTM execution. My work contributed to significant improvements in product adoption rates, user activation, feature utilization, and customer retention across India's seller marketplace, particularly during high-impact events like Great Indian Festival and Prime Day.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <i className="fas fa-bullseye text-blue-600 mr-3"></i>
                Business Challenge
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Low awareness of product features and incentive offerings
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Poor user activation and feature adoption rates
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  High seller churn and limited engagement
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Weak product-market fit communication
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <i className="fas fa-trophy text-green-600 mr-3"></i>
                Key Results
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  40-70% increase in adoption during key sale periods
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  70%+ open rates on WhatsApp campaigns
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Enhanced seller retention and lifecycle progression
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Improved customer lifetime value (LTV)
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Program Overview */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Program Overview
          </h2>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">What is Seller Rewards Program?</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              The Seller Rewards Program (SRP) rewards Amazon sellers for completing key milestones that drive marketplace growth and seller success. Examples of offers include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-6 border border-blue-200 shadow-md">
                <div className="text-3xl font-bold text-orange-600 mb-2">₹1,400</div>
                <p className="text-gray-700">Rewards for launching on FBA within 30 days</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-blue-200 shadow-md">
                <div className="text-3xl font-bold text-purple-600 mb-2">25</div>
                <p className="text-gray-700">Rewards for bringing new unique products to fulfillment centers</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-blue-200 shadow-md">
                <div className="text-3xl font-bold text-green-600 mb-2"><i className="fas fa-car"></i></div>
                <p className="text-gray-700">Event-based incentives: cars, international trips, category rewards</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-exclamation-triangle text-red-600 mr-3"></i>
                Business Problem
              </h4>
              <div className="space-y-3">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Product Adoption Challenges:</h5>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Low awareness of product features and offerings</li>
                    <li>• Poor user activation and adoption rates</li>
                    <li>• Lack of understanding of value proposition</li>
                    <li>• Limited engagement with platform capabilities</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Retention Issues:</h5>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• High seller churn rates</li>
                    <li>• Low customer lifetime value (LTV)</li>
                    <li>• Poor participation in growth behaviors</li>
                    <li>• Weak product-market fit communication</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-target text-green-600 mr-3"></i>
                Product Marketing Goal
              </h4>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Drive product adoption, user activation, feature engagement, and customer retention by positioning SRP as a value-driven incentive program that aligns seller success with platform growth.
              </p>
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-4 border border-green-200">
                <h5 className="font-semibold text-gray-900 mb-2">Core Value Proposition:</h5>
                <p className="text-gray-700 font-medium italic">
                  "Grow your business faster with Amazon - earn rewards for every milestone you achieve"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* My Role & Responsibilities */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            My Role & Responsibilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
              <div className="text-4xl mb-4">
                <i className="fas fa-lightbulb text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Product Marketing Strategy</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Product positioning & messaging frameworks</li>
                <li>• Go-to-Market (GTM) strategy development</li>
                <li>• Customer segmentation & targeting</li>
                <li>• Product adoption strategy & onboarding flows</li>
                <li>• Competitive intelligence analysis</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
              <div className="text-4xl mb-4">
                <i className="fas fa-rocket text-purple-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Growth Marketing Execution</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Multi-channel campaign management</li>
                <li>• Customer lifecycle marketing</li>
                <li>• Content marketing & product education</li>
                <li>• Performance marketing & A/B testing</li>
                <li>• Marketing analytics & optimization</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
              <div className="text-4xl mb-4">
                <i className="fas fa-users text-green-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cross-Functional Leadership</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Product-led growth collaboration</li>
                <li>• Stakeholder management (Global teams)</li>
                <li>• Sales enablement & account management</li>
                <li>• Customer insights & product roadmap input</li>
                <li>• Legal, tech, and category team coordination</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-8 border border-yellow-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <i className="fas fa-users-cog text-yellow-600 mr-3"></i>
              Stakeholders Worked With
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-gray-700">
                <strong>Global Teams:</strong>
                <p className="text-sm">India, US, China, UK</p>
              </div>
              <div className="text-gray-700">
                <strong>Product Teams:</strong>
                <p className="text-sm">Product & Program Managers</p>
              </div>
              <div className="text-gray-700">
                <strong>Tech & Operations:</strong>
                <p className="text-sm">Engineering, Communication Teams</p>
              </div>
              <div className="text-gray-700">
                <strong>Business Teams:</strong>
                <p className="text-sm">Category, Account Management</p>
              </div>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Success Metrics & KPIs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-md text-center">
                <div className="text-4xl mb-4">
                  <i className={`fas ${metric.icon} text-orange-600`}></i>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                <div className="text-sm font-semibold text-gray-900 mb-1">{metric.label}</div>
                <div className="text-xs text-gray-600">{metric.description}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Product Adoption Metrics</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Adoption rate across seller cohorts</li>
                <li>• User activation rate (first-time actions)</li>
                <li>• Feature utilization & engagement</li>
                <li>• Time to value (TTV)</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Marketing Performance</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Marketing qualified leads (MQLs)</li>
                <li>• Conversion funnel performance</li>
                <li>• Email open rates & CTR</li>
                <li>• WhatsApp engagement rates</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Business Impact</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Customer retention rate</li>
                <li>• Customer lifetime value (LTV)</li>
                <li>• Incremental inventory inflow</li>
                <li>• Seller revenue uplift</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Challenges */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Strategic Challenges & Solutions
          </h2>
          <div className="space-y-6">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                <div className="flex items-start mb-6">
                  <div className="text-4xl mr-4">
                    <i className={`fas ${challenge.icon} text-red-600`}></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{challenge.title}</h3>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                    <h4 className="font-semibold text-red-900 mb-3">Challenges:</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      {challenge.issues.map((issue, issueIndex) => (
                        <li key={issueIndex} className="flex items-start">
                          <span className="text-red-600 mr-2">•</span>
                          {issue}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                    <h4 className="font-semibold text-green-900 mb-3">Solution:</h4>
                    <p className="text-gray-700 text-sm">{challenge.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Campaign Phases */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Multi-Phase Campaign Strategy
          </h2>
          
          {/* Phase Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {campaignPhases.map((phase, index) => (
              <button
                key={index}
                onClick={() => setActivePhase(index)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activePhase === index
                    ? 'bg-gradient-to-r from-orange-600 to-yellow-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <i className={`fas ${phase.icon} mr-2`}></i>
                Phase {index + 1}
              </button>
            ))}
          </div>

          {/* Active Phase Details */}
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-xl">
            <div className="flex items-center mb-6">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${campaignPhases[activePhase].color} flex items-center justify-center mr-4 shadow-lg`}>
                <i className={`fas ${campaignPhases[activePhase].icon} text-white text-2xl`}></i>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">{campaignPhases[activePhase].title}</h3>
                <p className="text-gray-600 text-lg">{campaignPhases[activePhase].duration}</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200 mb-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Objective</h4>
              <p className="text-gray-700 text-lg">{campaignPhases[activePhase].objective}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border border-green-200">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Tactics</h4>
                <ul className="space-y-2">
                  {campaignPhases[activePhase].tactics.map((tactic, tacticIndex) => (
                    <li key={tacticIndex} className="flex items-start text-gray-700">
                      <i className="fas fa-check-circle text-green-600 mr-2 mt-1"></i>
                      <span>{tactic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Marketing Channels</h4>
                <ul className="space-y-2">
                  {campaignPhases[activePhase].channels.map((channel, channelIndex) => (
                    <li key={channelIndex} className="flex items-start text-gray-700">
                      <i className="fas fa-broadcast-tower text-orange-600 mr-2 mt-1"></i>
                      <span>{channel}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Product Marketing Strategy */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Product Marketing Strategy Framework
          </h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-search text-blue-600 mr-3"></i>
                Market Research & Customer Insights
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">User Research Conducted:</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Analyzed historical product adoption patterns</li>
                    <li>• Conducted competitive analysis of marketplace programs</li>
                    <li>• Reviewed seller feedback from webinars & surveys</li>
                    <li>• Segmented sellers by behavior, category, geography</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Insights Discovered:</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Benefit-first messaging drives higher engagement</li>
                    <li>• Vernacular content increases comprehension</li>
                    <li>• Clean UI/UX improves conversion rates</li>
                    <li>• Education gap requires product training</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 border border-purple-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-bullseye text-purple-600 mr-3"></i>
                Product Positioning & Messaging
              </h3>
              <div className="bg-white rounded-lg p-6 border border-purple-200 mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Core Value Proposition:</h4>
                <p className="text-gray-700 text-lg font-medium italic">
                  "Grow your business faster with Amazon - earn rewards for every milestone you achieve"
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Messaging Pillars:</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Benefit-led headlines focusing on outcomes</li>
                    <li>• Clear calls-to-action (CTAs)</li>
                    <li>• Product education & how-to guides</li>
                    <li>• Localized multi-language communication</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Messaging Strategy:</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Short-form content for high engagement</li>
                    <li>• Simplified narratives (no jargon)</li>
                    <li>• Strong reward hooks for immediate action</li>
                    <li>• Consistent brand voice across touchpoints</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 border border-green-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-chart-line text-green-600 mr-3"></i>
                Growth Marketing & Channel Strategy
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Digital Channels:</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Email marketing</li>
                    <li>• WhatsApp automation</li>
                    <li>• In-app messaging</li>
                    <li>• Social media campaigns</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Education Channels:</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Webinars & live demos</li>
                    <li>• Help center content</li>
                    <li>• Learning Management System</li>
                    <li>• Tutorial videos</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Direct Outreach:</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Account management</li>
                    <li>• Sales enablement</li>
                    <li>• Cold calling campaigns</li>
                    <li>• Personalized seller outreach</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <h4 className="font-semibold text-gray-900 mb-2">Channel Prioritization:</h4>
                <p className="text-gray-700 text-sm">
                  1. WhatsApp (highest engagement) → 2. Email (scalable reach) → 3. In-app (contextual relevance) → 4. Webinars (deep education) → 5. Social media (brand awareness)
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-8 border border-yellow-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-flask text-yellow-600 mr-3"></i>
                A/B Testing & Optimization
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Creative Testing:</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Visual design variations (image vs. text-focused)</li>
                    <li>• Color schemes and brand treatments</li>
                    <li>• CTA button design and placement</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Copy Testing:</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Short-form vs. long-form messaging</li>
                    <li>• Benefit-focused vs. feature-focused headlines</li>
                    <li>• Urgency language variations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Channel Testing:</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• WhatsApp vs. Email effectiveness by segment</li>
                    <li>• In-app banners vs. CBA for activation rates</li>
                    <li>• Social media format optimization</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Localization Testing:</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• English vs. vernacular content performance</li>
                    <li>• Regional language preferences by geography</li>
                    <li>• Cultural adaptations in messaging</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results & Impact */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Results & Business Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-8 border border-green-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-chart-line text-green-600 mr-3"></i>
                Product Adoption Success
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-600 mr-2 mt-1"></i>
                  <span><strong>40-70% increase</strong> in adoption during key sale periods (GIF, Prime Day)</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-600 mr-2 mt-1"></i>
                  <span>Higher user activation rates with improved onboarding</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-600 mr-2 mt-1"></i>
                  <span>Increased feature utilization across FBA and rewards redemption</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-600 mr-2 mt-1"></i>
                  <span>Improved time-to-value through streamlined onboarding</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-bullseye text-blue-600 mr-3"></i>
                Marketing Performance
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-blue-600 mr-2 mt-1"></i>
                  <span><strong>70%+ WhatsApp open rates</strong> and 20% increase in engagement</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-blue-600 mr-2 mt-1"></i>
                  <span>Email CTR improved through A/B optimization</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-blue-600 mr-2 mt-1"></i>
                  <span>Landing page conversion rates enhanced through CRO</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-blue-600 mr-2 mt-1"></i>
                  <span>Increased MQLs through targeted campaigns</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-users text-purple-600 mr-3"></i>
                Customer Success Outcomes
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-purple-600 mr-2 mt-1"></i>
                  <span>Growth in seller sign-ups after vernacular rollout</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-purple-600 mr-2 mt-1"></i>
                  <span>Improved seller retention rates</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-purple-600 mr-2 mt-1"></i>
                  <span>Better customer lifecycle progression</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-purple-600 mr-2 mt-1"></i>
                  <span>Higher customer lifetime value (LTV)</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-8 border border-orange-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-dollar-sign text-orange-600 mr-3"></i>
                Revenue & Business Growth
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-orange-600 mr-2 mt-1"></i>
                  <span>Incremental inventory inflow during high-volume events</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-orange-600 mr-2 mt-1"></i>
                  <span>Improved seller performance metrics</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-orange-600 mr-2 mt-1"></i>
                  <span>Increased platform program participation</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-orange-600 mr-2 mt-1"></i>
                  <span>Scalable GTM playbook for future launches</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Learnings */}
        <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-2xl p-8 md:p-12 border-2 border-blue-200 shadow-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Key Product Marketing Learnings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keyLearnings.map((learning, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
                <div className="flex items-start mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${learning.color} flex items-center justify-center mr-4 flex-shrink-0`}>
                    <i className={`fas ${learning.icon} text-white text-xl`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{learning.title}</h3>
                </div>
                <p className="text-gray-700">{learning.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
