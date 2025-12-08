'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function AmazonSaleEventPlannerCaseStudy() {
  const [activeSection, setActiveSection] = useState(0)

  const strategyPhases = [
    {
      title: "Awareness Phase",
      timeline: "3-4 weeks before deadline",
      objective: "Build awareness and generate interest",
      tactics: [
        "Event announcements with opportunity sizing",
        "Revenue forecasting and demand predictions",
        "Educational content on deal optimization",
        "Homepage hero modules showcasing events"
      ],
      channels: ["Email broadcasts", "Social media", "Homepage placements", "Webinar invitations"],
      icon: "fa-lightbulb",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Consideration Phase",
      timeline: "2-3 weeks before deadline",
      objective: "Drive initial enrollments and showcase value",
      tactics: [
        "Gamification launch (badges, leaderboards)",
        "Early-bird incentives",
        "Success stories and proof points",
        "Live demos and Q&A sessions"
      ],
      channels: ["WhatsApp reminders", "CBA alerts", "Webinars", "In-app notifications"],
      icon: "fa-trophy",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Activation Phase",
      timeline: "1-2 weeks before deadline",
      objective: "Accelerate conversion and maintain momentum",
      tactics: [
        "Eligibility nudges based on seller behavior",
        "Personalized deal recommendations",
        "Peer comparison insights",
        "Progress visualization dashboards"
      ],
      channels: ["In-app banners", "Inventory page contextual messaging", "Category pages", "Email sequences"],
      icon: "fa-rocket",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Urgency Phase",
      timeline: "Final 3-7 days",
      objective: "Maximize last-minute submissions",
      tactics: [
        "Countdown timers creating urgency",
        "Scarcity messaging",
        "One-click enrollment optimization",
        "Multi-channel campaign blitz"
      ],
      channels: ["Email + WhatsApp + CBA + In-app", "Push notifications", "SMS fallback", "Account manager outreach"],
      icon: "fa-clock",
      color: "from-red-500 to-orange-500"
    }
  ]

  const metrics = [
    { label: "Tool Active Users", value: "Growth", icon: "fa-users", description: "Monthly & weekly engagement" },
    { label: "Event Enrollment Rate", value: "Increased", icon: "fa-chart-line", description: "SEP vs. manual submissions" },
    { label: "Deal Quality Score", value: "Improved", icon: "fa-star", description: "Higher approval rates" },
    { label: "GMS Contribution", value: "Material ↑", icon: "fa-dollar-sign", description: "Revenue from SEP deals" }
  ]

  const challenges = [
    {
      title: "Organizational Complexity",
      icon: "fa-sitemap",
      description: "Cross-team dependencies created execution bottlenecks with extended lead times and fixed SLAs",
      details: [
        "Engineering teams required extended lead times for platform updates",
        "Communication teams operated with fixed 2-5 day SLAs",
        "Legal approval workflows added unpredictable delays",
        "Event timing constraints limited marketing preparation windows"
      ],
      impact: "Reduced agility in responding to market opportunities and seller feedback",
      solution: "Established clear coordination protocols, advanced planning timelines, and stakeholder alignment processes"
    },
    {
      title: "Market Fragmentation",
      icon: "fa-puzzle-piece",
      description: "Seller awareness gaps hindered organic adoption of the tool",
      details: [
        "Many sellers unaware of event calendar or deal opportunities",
        "Fragmented information sources created confusion",
        "Competing internal tools caused workflow friction",
        "Low organic discovery requiring heavy marketing investment"
      ],
      impact: "Required significant marketing investment to drive awareness and adoption",
      solution: "Developed comprehensive multi-channel awareness campaigns and consolidated information sources"
    },
    {
      title: "Product Complexity",
      icon: "fa-cogs",
      description: "Category-specific requirements demanded hyper-personalization",
      details: [
        "Each product category maintained unique deal eligibility rules",
        "Overlapping major and minor events created messaging challenges",
        "Risk of over-communication and seller fatigue",
        "Required sophisticated segmentation strategies"
      ],
      impact: "Necessitated complex targeting and messaging frameworks",
      solution: "Built sophisticated segmentation engine and developed category-specific messaging playbooks"
    },
    {
      title: "Change Management",
      icon: "fa-exchange-alt",
      description: "Shifting seller behavior from established manual workflows",
      details: [
        "Sellers accustomed to manual processes resistant to new tools",
        "Perceived complexity barrier to initial adoption",
        "Lack of trust in automated systems for revenue-critical decisions",
        "Required compelling proof of value"
      ],
      impact: "Needed extensive education and trust-building initiatives",
      solution: "Developed comprehensive onboarding, provided tangible ROI proof, and showcased success stories"
    }
  ]

  const keyResults = [
    {
      category: "Adoption Metrics",
      results: [
        "Substantial growth in SEP active user base across all event cycles",
        "Increased tool penetration rate among eligible seller population",
        "Higher feature discovery through improved onboarding",
        "Improved retention with repeat usage across consecutive events"
      ],
      icon: "fa-user-plus",
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Deal Quality & Velocity",
      results: [
        "Accelerated deal submission timelines with earlier enrollment",
        "Enhanced deal approval rates through better requirement understanding",
        "Reduced last-minute rush via sustained mid-cycle engagement",
        "Improved deal mix with better category representation"
      ],
      icon: "fa-tachometer-alt",
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Marketing Performance",
      results: [
        "70%+ WhatsApp open rates and 25%+ CTR",
        "Strong email conversion through optimized messaging",
        "3x higher enrollment rates for webinar attendees",
        "Measurable uplift from gamification mechanics"
      ],
      icon: "fa-chart-bar",
      color: "from-green-500 to-teal-500"
    },
    {
      category: "Business Impact",
      results: [
        "Material increase in GMS from SEP-enrolled deals during major events",
        "Higher seller performance metrics and inventory planning",
        "Increased participation in platform programs",
        "Scalable GTM playbook for future product launches"
      ],
      icon: "fa-trophy",
      color: "from-orange-500 to-red-500"
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
            Accelerating Adoption & Revenue Growth for Amazon's Sale Event Planner
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            Product Marketing: B2B SaaS Tool | Event Participation & Deal Activation Platform
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
              Product Marketing
            </span>
            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
              User Onboarding
            </span>
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
              Feature Adoption
            </span>
            <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
              Revenue Enablement
            </span>
            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
              Product-Led Growth
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
            The <strong className="text-gray-900">Sale Event Planner (SEP)</strong> is Amazon's internal B2B tool designed to streamline seller discovery, planning, and enrollment in marketplace deal events. As deals represent one of the strongest revenue levers on Amazon, maximizing seller participation directly impacts event performance, competitive selection depth, and overall Gross Merchandise Sales (GMS).
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            I owned the <strong className="text-gray-900">complete user acquisition and activation strategy for SEP</strong>, orchestrating integrated marketing campaigns, behavioral engagement programs, cross-category partnerships, and seller enablement initiatives. My product marketing efforts delivered measurable improvements in tool adoption rates, event enrollment velocity, deal pipeline quality, and revenue contribution across Amazon's India marketplace.
          </p>
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-200">
            <p className="text-gray-900 text-lg font-semibold">
              <i className="fas fa-trophy text-indigo-600 mr-2"></i>
              Key Achievement: Transformed SEP from an underutilized internal tool into a revenue-driving platform through strategic positioning, growth marketing tactics, and user-centric product education.
            </p>
          </div>
        </div>

        {/* Product Context */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Product Context: Sale Event Planner
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-calendar-alt text-blue-600 mr-3"></i>
                What SEP Does
              </h3>
              <p className="text-gray-700 mb-4">
                The Sale Event Planner serves as a centralized deal management dashboard that enables sellers to:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <i className="fas fa-search text-blue-600 mr-2 mt-1"></i>
                  <span><strong>Discover opportunities:</strong> View comprehensive calendars of major and minor sale events</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-mouse-pointer text-blue-600 mr-2 mt-1"></i>
                  <span><strong>Simplify enrollment:</strong> One-click deal submission with automated eligibility checks</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-chart-line text-blue-600 mr-2 mt-1"></i>
                  <span><strong>Track performance:</strong> Monitor submission deadlines, deal status, and approval workflows</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-crystal-ball text-blue-600 mr-2 mt-1"></i>
                  <span><strong>Forecast impact:</strong> Predict visibility lift, demand spikes, and revenue potential</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-bolt text-blue-600 mr-2 mt-1"></i>
                  <span><strong>Reduce friction:</strong> Eliminate manual processes and missed opportunities</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8 border border-red-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-exclamation-triangle text-red-600 mr-3"></i>
                The Business Challenge
              </h3>
              <p className="text-gray-700 mb-4 font-semibold">
                Prior to SEP: Sellers experienced significant friction in deal participation
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span><strong>Low event participation rates</strong> across seller cohorts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span><strong>Missed revenue opportunities</strong> from late or incomplete deal submissions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span><strong>Poor deal quality</strong> due to seller confusion about requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span><strong>Suboptimal marketplace performance</strong> during high-traffic sale events</span>
                </li>
              </ul>
              <div className="mt-6 bg-white rounded-lg p-4 border border-red-200">
                <p className="text-gray-900 font-semibold">
                  <i className="fas fa-bullseye text-orange-600 mr-2"></i>
                  Product Marketing Mandate:
                </p>
                <p className="text-gray-700 mt-2">
                  Drive rapid user adoption, increase feature utilization, and demonstrate clear ROI to solidify SEP as the primary tool for event-driven selling on Amazon.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* My Role & Responsibilities */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Product Marketing Responsibilities
          </h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-8 border border-indigo-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-chess text-indigo-600 mr-3"></i>
                Strategic Product Marketing
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Product Launch & Positioning:</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Owned new feature launches and monthly event cycle rollouts</li>
                    <li>• Developed product positioning framework</li>
                    <li>• Created differentiated messaging for major vs. category events</li>
                    <li>• Built competitive positioning</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Market Segmentation:</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Segmented users by seller maturity</li>
                    <li>• Developed category-specific value props</li>
                    <li>• Created persona-based messaging</li>
                    <li>• Targeted different seller needs</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Product Roadmap Input:</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Gathered user feedback</li>
                    <li>• Advocated for seller-requested features</li>
                    <li>• Provided competitive intelligence</li>
                    <li>• Informed product development</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 border border-purple-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-chart-line text-purple-600 mr-3"></i>
                Growth Marketing & Campaign Execution
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Demand Generation:</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Full-funnel marketing campaigns</li>
                    <li>• Automated email nurture sequences</li>
                    <li>• Urgency-driven campaigns</li>
                    <li>• Time-sensitive deadline marketing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Performance Marketing:</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Multi-variant testing</li>
                    <li>• Conversion funnel optimization</li>
                    <li>• Attribution modeling</li>
                    <li>• Channel effectiveness measurement</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Behavioral Marketing:</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Gamification frameworks</li>
                    <li>• Incentive structures</li>
                    <li>• Re-engagement campaigns</li>
                    <li>• Behavioral trigger design</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 border border-green-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-book-open text-green-600 mr-3"></i>
                Content Marketing & Enablement
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">User Education:</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Comprehensive help documentation, video tutorials, FAQs</li>
                    <li>• Onboarding checklists and step-by-step guides</li>
                    <li>• Webinar curriculum covering deal optimization</li>
                    <li>• Self-serve learning resources</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Marketing Collateral:</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Conversion-optimized landing pages</li>
                    <li>• A/B-tested email templates</li>
                    <li>• In-product messaging and tooltips</li>
                    <li>• Feature discovery assets</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 border border-orange-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-users-cog text-orange-600 mr-3"></i>
                Cross-Functional Product Leadership
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="bg-white rounded-lg p-4 border border-orange-200">
                  <i className="fas fa-cube text-orange-600 mb-2 text-xl"></i>
                  <p className="font-semibold text-gray-900">Product Management</p>
                  <p className="text-gray-600 text-xs">Feature priorities & launch timing</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-orange-200">
                  <i className="fas fa-shopping-cart text-orange-600 mb-2 text-xl"></i>
                  <p className="font-semibold text-gray-900">Category Merchandising</p>
                  <p className="text-gray-600 text-xs">Cross-category promotions</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-orange-200">
                  <i className="fas fa-tag text-orange-600 mb-2 text-xl"></i>
                  <p className="font-semibold text-gray-900">Deals Operations</p>
                  <p className="text-gray-600 text-xs">Event config & targeting</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-orange-200">
                  <i className="fas fa-code text-orange-600 mb-2 text-xl"></i>
                  <p className="font-semibold text-gray-900">Engineering</p>
                  <p className="text-gray-600 text-xs">Placement optimization</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-orange-200">
                  <i className="fas fa-graduation-cap text-orange-600 mb-2 text-xl"></i>
                  <p className="font-semibold text-gray-900">Customer Education</p>
                  <p className="text-gray-600 text-xs">Training & webinars</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-orange-200">
                  <i className="fas fa-gavel text-orange-600 mb-2 text-xl"></i>
                  <p className="font-semibold text-gray-900">Legal & Compliance</p>
                  <p className="text-gray-600 text-xs">Marketing claim review</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-orange-200">
                  <i className="fas fa-chart-bar text-orange-600 mb-2 text-xl"></i>
                  <p className="font-semibold text-gray-900">Analytics</p>
                  <p className="text-gray-600 text-xs">Performance tracking</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-orange-200">
                  <i className="fas fa-users text-orange-600 mb-2 text-xl"></i>
                  <p className="font-semibold text-gray-900">Account Managers</p>
                  <p className="text-gray-600 text-xs">Seller outreach</p>
                </div>
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
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">
                  <i className={`fas ${metric.icon} text-indigo-600`}></i>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                <div className="text-sm font-semibold text-gray-900 mb-1">{metric.label}</div>
                <div className="text-xs text-gray-600">{metric.description}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                <i className="fas fa-user-check text-blue-600 mr-2"></i>
                Adoption Metrics
              </h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Active users (MAU/WAU)</li>
                <li>• New user acquisition</li>
                <li>• Feature adoption rate</li>
                <li>• Event enrollment rate</li>
                <li>• User retention rate</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                <i className="fas fa-chart-line text-purple-600 mr-2"></i>
                Marketing KPIs
              </h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Marketing-influenced signups</li>
                <li>• Channel conversion rates</li>
                <li>• Message engagement (open, CTR)</li>
                <li>• Landing page conversion</li>
                <li>• Content effectiveness</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                <i className="fas fa-dollar-sign text-green-600 mr-2"></i>
                Business Impact
              </h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Incremental GMS</li>
                <li>• Deal contribution rate</li>
                <li>• Seller GMV growth</li>
                <li>• Improved deal quality</li>
                <li>• Operational efficiency</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Strategic Challenges */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Strategic Challenges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                <div className="flex items-start mb-4">
                  <div className="text-4xl mr-4">
                    <i className={`fas ${challenge.icon} text-indigo-600`}></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{challenge.title}</h3>
                    <p className="text-gray-700">{challenge.description}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                    <h4 className="font-semibold text-red-900 mb-2 text-sm">Challenge Details:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      {challenge.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <span className="text-red-600 mr-2 text-xs">•</span>
                          <span className="text-xs">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                    <h4 className="font-semibold text-orange-900 mb-2 text-sm">Impact:</h4>
                    <p className="text-gray-700 text-sm">{challenge.impact}</p>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <h4 className="font-semibold text-green-900 mb-2 text-sm">Solution:</h4>
                    <p className="text-gray-700 text-sm">{challenge.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Campaign Strategy Phases */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Multi-Phase Event Marketing Playbook
          </h2>
          
          {/* Phase Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {strategyPhases.map((phase, index) => (
              <button
                key={index}
                onClick={() => setActiveSection(index)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeSection === index
                    ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <i className={`fas ${phase.icon} mr-2`}></i>
                {phase.title}
              </button>
            ))}
          </div>

          {/* Active Phase Details */}
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-xl">
            <div className="flex items-center mb-6">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${strategyPhases[activeSection].color} flex items-center justify-center mr-4 shadow-lg`}>
                <i className={`fas ${strategyPhases[activeSection].icon} text-white text-2xl`}></i>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">{strategyPhases[activeSection].title}</h3>
                <p className="text-gray-600 text-lg">{strategyPhases[activeSection].timeline}</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-200 mb-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Campaign Objective</h4>
              <p className="text-gray-700 text-lg">{strategyPhases[activeSection].objective}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border border-green-200">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  <i className="fas fa-tasks text-green-600 mr-2"></i>
                  Key Tactics
                </h4>
                <ul className="space-y-2">
                  {strategyPhases[activeSection].tactics.map((tactic, tacticIndex) => (
                    <li key={tacticIndex} className="flex items-start text-gray-700">
                      <i className="fas fa-check-circle text-green-600 mr-2 mt-1"></i>
                      <span>{tactic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  <i className="fas fa-broadcast-tower text-yellow-600 mr-2"></i>
                  Marketing Channels
                </h4>
                <ul className="space-y-2">
                  {strategyPhases[activeSection].channels.map((channel, channelIndex) => (
                    <li key={channelIndex} className="flex items-start text-gray-700">
                      <i className="fas fa-arrow-right text-orange-600 mr-2 mt-1"></i>
                      <span>{channel}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Product Marketing Strategy Framework */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Product Marketing Strategy Framework
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-search text-blue-600 mr-3"></i>
                Phase 1: Market Research & Product Intelligence
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">User Research Methodology:</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Analyzed historical deal submission patterns</li>
                    <li>• Conducted seller interviews to identify pain points</li>
                    <li>• Reviewed competitor marketplace tools</li>
                    <li>• Synthesized feedback from support tickets</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Insights Uncovered:</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Sellers prioritize speed and simplicity</li>
                    <li>• Tangible revenue outcomes drive adoption</li>
                    <li>• Visual proof builds trust in new tools</li>
                    <li>• Peer validation accelerates decision-making</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 border border-purple-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-bullseye text-purple-600 mr-3"></i>
                Phase 2: Product Positioning & Value Proposition
              </h3>
              <div className="bg-white rounded-lg p-6 border border-purple-200 mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Core Positioning Statement:</h4>
                <p className="text-gray-700 text-lg font-medium italic">
                  "The fastest path from opportunity discovery to revenue growth - helping sellers win during Amazon's biggest sale events"
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 border border-purple-200">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Functional Benefits:</h4>
                  <ul className="space-y-1 text-gray-700 text-xs">
                    <li>• Save hours on deal research</li>
                    <li>• Never miss high-value events</li>
                    <li>• Reduce approval rejections</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 border border-purple-200">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Emotional Benefits:</h4>
                  <ul className="space-y-1 text-gray-700 text-xs">
                    <li>• Confidence in strategic decisions</li>
                    <li>• Peace of mind with automation</li>
                    <li>• Empowerment to compete</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 border border-purple-200">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Proof Points:</h4>
                  <ul className="space-y-1 text-gray-700 text-xs">
                    <li>• Real-time event forecasting</li>
                    <li>• Historical performance data</li>
                    <li>• Success metrics from peers</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 border border-green-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-gamepad text-green-600 mr-3"></i>
                Behavioral Design & Gamification
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Engagement Mechanics:</h4>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4 border border-green-200">
                      <p className="font-semibold text-gray-900 text-sm mb-1">Progress Visualization:</p>
                      <p className="text-gray-700 text-xs">Deal submission completion bars, event participation milestones, category performance dashboards</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-green-200">
                      <p className="font-semibold text-gray-900 text-sm mb-1">Social Dynamics:</p>
                      <p className="text-gray-700 text-xs">Anonymous peer comparison, regional leaderboards, success story spotlights</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Reward Systems & Triggers:</h4>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4 border border-green-200">
                      <p className="font-semibold text-gray-900 text-sm mb-1">Reward Systems:</p>
                      <p className="text-gray-700 text-xs">Achievement badges, early submission bonuses, category-specific incentive programs</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-green-200">
                      <p className="font-semibold text-gray-900 text-sm mb-1">Behavioral Triggers:</p>
                      <p className="text-gray-700 text-xs">Deadline countdown timers, incomplete submission reminders, post-event performance reports</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 border border-orange-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-broadcast-tower text-orange-600 mr-3"></i>
                Channel Strategy & Mix Optimization
              </h3>
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">High-Impact Channels:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-orange-200">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-orange-600 text-white flex items-center justify-center mr-2 font-bold">1</div>
                      <p className="font-semibold text-gray-900">WhatsApp (Primary for urgency)</p>
                    </div>
                    <p className="text-gray-700 text-sm">70%+ open rates, ideal for time-sensitive nudges</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-orange-200">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-orange-600 text-white flex items-center justify-center mr-2 font-bold">2</div>
                      <p className="font-semibold text-gray-900">Email (Scale & depth)</p>
                    </div>
                    <p className="text-gray-700 text-sm">Detailed explanations, longer-form education</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-orange-200">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-orange-600 text-white flex items-center justify-center mr-2 font-bold">3</div>
                      <p className="font-semibold text-gray-900">In-App Messaging (Contextual)</p>
                    </div>
                    <p className="text-gray-700 text-sm">Homepage tiles, inventory banners, CBA alerts</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-orange-200">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-orange-600 text-white flex items-center justify-center mr-2 font-bold">4</div>
                      <p className="font-semibold text-gray-900">Webinars (Deep engagement)</p>
                    </div>
                    <p className="text-gray-700 text-sm">Live demos, Q&A, advanced strategies</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-orange-200">
                <h4 className="font-semibold text-gray-900 mb-2">Channel Prioritization Logic:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• <strong>Urgency level:</strong> High = WhatsApp/CBA, Medium = Email, Low = Social</li>
                  <li>• <strong>Message complexity:</strong> Simple = Push notification, Complex = Webinar</li>
                  <li>• <strong>Seller segment:</strong> Power sellers = Direct outreach, Long-tail = Automated campaigns</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Results & Business Impact */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Business Outcomes & Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keyResults.map((result, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${result.color} flex items-center justify-center mr-4 shadow-lg`}>
                    <i className={`fas ${result.icon} text-white text-2xl`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{result.category}</h3>
                </div>
                <ul className="space-y-3">
                  {result.results.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-gray-700">
                      <i className="fas fa-check-circle text-green-600 mr-2 mt-1 flex-shrink-0"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Outcomes */}
        <div className="bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 border-2 border-indigo-200 shadow-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Strategic Outcomes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 border border-indigo-200">
              <div className="text-4xl mb-4 text-center">
                <i className="fas fa-rocket text-indigo-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Product Success</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• SEP became high-engagement product</li>
                <li>• Strong user participation rates</li>
                <li>• Product feedback loop established</li>
                <li>• Continuous improvement cycle</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 border border-indigo-200">
              <div className="text-4xl mb-4 text-center">
                <i className="fas fa-chart-line text-green-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Business Growth</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Material GMS increase from SEP deals</li>
                <li>• Improved seller performance metrics</li>
                <li>• Enhanced marketplace competitiveness</li>
                <li>• Revenue contribution validated</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 border border-indigo-200">
              <div className="text-4xl mb-4 text-center">
                <i className="fas fa-book text-purple-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Scalable Playbook</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Scalable GTM framework created</li>
                <li>• Cross-market learning documented</li>
                <li>• Best practices shared globally</li>
                <li>• Replicable for future launches</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
