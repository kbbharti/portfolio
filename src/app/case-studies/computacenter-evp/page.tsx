'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function ComputacenterEVPCaseStudy() {
  const [activePillar, setActivePillar] = useState(0)

  const pillars = [
    {
      title: "Purposeful Technology",
      tagline: "Technology That Matters",
      description: "At Computacenter, technology isn't about complexity for its own sake—it's about solving real business problems and improving people's lives. Our technologists work on meaningful projects that drive tangible outcomes for clients and end-users.",
      keyMessages: [
        "Your expertise solves real problems for real people",
        "Every project has purpose beyond the technology",
        "Make an impact that extends beyond code and infrastructure"
      ],
      proofPoints: [
        "Client solutions directly impacting healthcare delivery, financial inclusion, education access",
        "Sustainability-focused infrastructure projects",
        "Digital transformation enabling remote work and accessibility"
      ],
      differentiation: "vs. Accenture/Capgemini: Less about scale and brand, more about authentic impact | vs. Big Tech: Focus on diverse client challenges vs. internal product development",
      icon: "fa-lightbulb",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Mastery & Growth",
      tagline: "Build Expertise That Lasts",
      description: "Computacenter invests in deep technical mastery and continuous professional development. We're not a 'up or out' culture - we celebrate specialization, create space for learning, and support long-term career trajectories.",
      keyMessages: [
        "Invest in your skills, we invest in your future",
        "Specialization and breadth - you choose your journey",
        "Learn from the best, become the best"
      ],
      proofPoints: [
        "Comprehensive certification programs (AWS, Azure, Cisco, Microsoft, etc.)",
        "Technical and leadership development tracks",
        "Investment in training budget per employee",
        "Internal mobility and rotation opportunities"
      ],
      differentiation: "vs. Consulting Firms: Sustainable careers vs. high-pressure, high-turnover models | vs. Big Tech: Breadth of technology exposure vs. narrow product focus",
      icon: "fa-graduation-cap",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Collaborative Innovation",
      tagline: "Ideas That Become Reality",
      description: "Innovation at Computacenter is collaborative, inclusive, and practical. We combine diverse perspectives, encourage experimentation, and turn ideas into client solutions—not innovation theater.",
      keyMessages: [
        "Your ideas shape client solutions",
        "Collaborate across disciplines, not in silos",
        "Safe space to experiment, fail, and learn"
      ],
      proofPoints: [
        "Innovation labs and centers of excellence",
        "Cross-functional project teams",
        "Client co-creation workshops",
        "Internal innovation challenges"
      ],
      differentiation: "vs. Enterprise IT Firms: True innovation vs. legacy system maintenance | vs. Startups: Resources to scale ideas vs. constrained experimentation",
      icon: "fa-users",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Flexibility & Balance",
      tagline: "Performance Over Presence",
      description: "Computacenter recognizes that great work happens when people have autonomy, flexibility, and support for holistic wellbeing. We trust our people to manage how, when, and where they work best.",
      keyMessages: [
        "Flexibility as foundation, not exception",
        "Trust to deliver your best work, your way",
        "Career longevity through sustainable practices"
      ],
      proofPoints: [
        "Hybrid work policies with flexibility",
        "Core collaboration hours with asynchronous work options",
        "Generous leave policies and mental health support",
        "Equipment and home office support"
      ],
      differentiation: "vs. Traditional Consulting: No mandatory client site presence or excessive travel | vs. Rigid Enterprises: True flexibility vs. policy-based rigidity",
      icon: "fa-balance-scale",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Inclusive Community",
      tagline: "Different Perspectives, Shared Purpose",
      description: "Computacenter is building a truly inclusive workplace where diverse backgrounds, perspectives, and experiences are valued, respected, and leveraged for better outcomes.",
      keyMessages: [
        "Your unique perspective makes us stronger",
        "Belonging is everyone's responsibility",
        "Diversity drives innovation and better solutions"
      ],
      proofPoints: [
        "Employee resource groups (ERGs) and affinity networks",
        "DEI leadership commitment and accountability",
        "Inclusive hiring practices and diverse interview panels",
        "Pay equity analysis and transparency"
      ],
      differentiation: "vs. Homogeneous Cultures: Active diversity vs. passive hiring | vs. Compliance-Driven DEI: Authentic culture change vs. checkbox initiatives",
      icon: "fa-heart",
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Rewarding Excellence",
      tagline: "Value Delivered, Value Received",
      description: "Computacenter believes in fair, transparent, and holistic rewards that recognize diverse contributions and support financial wellbeing and life goals.",
      keyMessages: [
        "Compensation that reflects your impact",
        "Benefits that adapt to your life stage",
        "Recognition in moments that matter"
      ],
      proofPoints: [
        "Competitive compensation and benefits",
        "Performance-based bonuses and incentives",
        "Share ownership opportunities",
        "Comprehensive benefits package and recognition programs"
      ],
      differentiation: "vs. Lower-Paying Competitors: Clear compensation premium with justification | vs. Benefits-Light Organizations: Comprehensive support beyond salary",
      icon: "fa-trophy",
      color: "from-indigo-500 to-purple-500"
    }
  ]

  const metrics = [
    { label: "Employee Awareness", value: "90%", icon: "fa-users" },
    { label: "Manager Confidence", value: "75%", icon: "fa-chart-line" },
    { label: "Engagement Increase", value: "↑", icon: "fa-arrow-up" },
    { label: "Implementation Time", value: "12mo", icon: "fa-calendar" }
  ]

  const competitiveInsights = [
    {
      competitor: "Accenture",
      evpTheme: '"Let there be change"',
      positioning: "Transformation & Innovation",
      differentiation: "Human-centered technology impact vs. scale and brand focus"
    },
    {
      competitor: "Capgemini",
      evpTheme: '"Get the future you want"',
      positioning: "Career Empowerment",
      differentiation: "Sustainable career development vs. high-turnover consulting models"
    },
    {
      competitor: "DXC Technology",
      evpTheme: '"Where brilliance comes together"',
      positioning: "Collaboration & Diversity",
      differentiation: "Authentic flexibility vs. generic messaging"
    },
    {
      competitor: "Big Tech (Microsoft, AWS)",
      evpTheme: "Product Innovation",
      positioning: "Cutting-edge Product Development",
      differentiation: "Diverse client challenges vs. narrow product focus"
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 whitespace-nowrap">
            Building a Data-Driven Employer Branding Framework
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            Strategic EVP Development for Computacenter
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
              Employer Branding
            </span>
            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
              Talent Strategy
            </span>
            <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
              Competitive Intelligence
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
            In today&apos;s competitive technology services landscape, attracting and retaining top talent requires a 
            differentiated, authentic employer brand. As Marketing & Communications Specialist, I developed a 
            <strong className="text-gray-900">6-pillar EVP framework</strong> grounded in competitive analysis, 
            market intelligence, and predictive talent trends.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <i className="fas fa-target text-green-600 mr-3"></i>
                Strategic Impact
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Differentiate from key IT services competitors
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Align with emerging talent expectations
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Create consistent messaging across touchpoints
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Position as employer of choice for technical talent
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <i className="fas fa-chart-bar text-purple-600 mr-3"></i>
                Key Deliverables
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  6-Pillar EVP Framework
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Competitive Intelligence Analysis
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Predictive Talent Insights
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Implementation Roadmap
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Business Context */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Business Context: The Challenge
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4">
                  <i className="fas fa-user-clock text-red-600 text-xl"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Talent Scarcity</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Critical skills shortage in cloud, cybersecurity, AI/ML</li>
                <li>• War for talent intensifying across tech firms</li>
                <li>• Multi-generational workforce with diverse expectations</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mr-4">
                  <i className="fas fa-chart-line text-orange-600 text-xl"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Competitive Pressure</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Competition from Accenture, Capgemini, DXC Technology</li>
                <li>• Big Tech firms competing for same talent pool</li>
                <li>• Consulting firms expanding into tech services</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <i className="fas fa-users text-blue-600 text-xl"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Evolving Expectations</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Candidates prioritizing purpose & flexibility</li>
                <li>• Increased focus on DEI and sustainability</li>
                <li>• Demand for hybrid work and meaningful impact</li>
              </ul>
            </div>
          </div>
        </div>

        {/* My Role & Approach */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            My Role & Strategic Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-search text-blue-600 mr-3"></i>
                Research & Intelligence
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Conducted comprehensive competitive employer brand analysis</li>
                <li>• Analyzed talent market trends and predictive workforce insights</li>
                <li>• Gathered employee feedback and candidate perception data</li>
                <li>• Synthesized industry benchmarking and best practices</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-lightbulb text-purple-600 mr-3"></i>
                Strategy Development
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Designed 6-pillar EVP framework with messaging architecture</li>
                <li>• Created differentiation strategy against key competitors</li>
                <li>• Developed talent persona mapping and segmentation</li>
                <li>• Built measurement framework for employer brand health</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-users-cog text-green-600 mr-3"></i>
                Stakeholder Engagement
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Collaborated with HR Leadership, Talent Acquisition, Executive Team</li>
                <li>• Facilitated workshops with cross-functional teams</li>
                <li>• Presented strategic recommendations to senior leadership</li>
                <li>• Aligned framework with business strategy and values</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-tasks text-orange-600 mr-3"></i>
                Implementation Planning
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Developed employer brand activation roadmap</li>
                <li>• Created talent marketing campaign blueprints</li>
                <li>• Designed internal communication strategy for EVP rollout</li>
                <li>• Established governance model for consistent application</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Methodology */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Methodology: Building the EVP Framework
          </h2>
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-3 text-sm font-bold">1</span>
                  Competitive Employer Brand Analysis
                </h3>
                <p className="text-gray-700 mb-4">Analyzed 12+ competitors including Accenture, Capgemini, DXC Technology, NTT Data, Big Tech firms, and consulting companies across:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Analysis Areas</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• EVP positioning and messaging themes</li>
                      <li>• Career site experience and content quality</li>
                      <li>• Social media presence and engagement</li>
                      <li>• Recruitment marketing and campaigns</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Insights</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Generic messaging lacks differentiation</li>
                      <li>• Limited focus on work-life integration</li>
                      <li>• Underemphasis on sustainable careers</li>
                      <li>• Opportunity for authentic positioning</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center mr-3 text-sm font-bold">2</span>
                  Predictive Talent Analysis
                </h3>
                <p className="text-gray-700 mb-4">Analyzed emerging workforce trends (2025-2027) to future-proof the EVP:</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Skills Evolution</h4>
                    <p className="text-xs text-gray-700">Hybrid skill sets, AI/ML literacy, cloud-native expertise, cybersecurity</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Work Model Expectations</h4>
                    <p className="text-xs text-gray-700">Flexible by default, results-oriented cultures, borderless talent pools</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Values-Driven Employment</h4>
                    <p className="text-xs text-gray-700">Purpose over perks, transparency, DEI as baseline, ethical AI</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center mr-3 text-sm font-bold">3</span>
                  Internal Discovery
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Employee Research</h4>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Pulse surveys on engagement and satisfaction</li>
                      <li>• Focus groups across functions and geographies</li>
                      <li>• Exit interview analysis</li>
                      <li>• High-performer interviews</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Insights</h4>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Pride in technical expertise and client impact</li>
                      <li>• Value collaborative culture and supportive teams</li>
                      <li>• Desire more visibility into career paths</li>
                      <li>• Want better work-life balance and flexibility</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Dashboard */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Success Metrics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-md text-center hover:shadow-xl hover:border-blue-300 transition-all">
                <i className={`fas ${metric.icon} text-4xl text-blue-600 mb-4`}></i>
                <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                <div className="text-sm text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 6-Pillar EVP Framework */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            The 6-Pillar EVP Framework
          </h2>
          
          {/* Pillar Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {pillars.map((pillar, index) => (
              <button
                key={index}
                onClick={() => setActivePillar(index)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activePillar === index
                    ? 'bg-gradient-to-r ' + pillar.color + ' text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:text-gray-900 border-2 border-gray-300 hover:border-gray-400'
                }`}
              >
                <i className={`fas ${pillar.icon} mr-2`}></i>
                {pillar.title}
              </button>
            ))}
          </div>

          {/* Active Pillar Details */}
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-xl">
            <div className="flex items-center mb-6">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${pillars[activePillar].color} flex items-center justify-center mr-6 shadow-lg`}>
                <i className={`fas ${pillars[activePillar].icon} text-3xl text-white`}></i>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">{pillars[activePillar].title}</h3>
                <p className="text-xl text-blue-600 font-semibold">{pillars[activePillar].tagline}</p>
              </div>
            </div>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              {pillars[activePillar].description}
            </p>

            <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Messages</h4>
            <div className="space-y-3 mb-8">
              {pillars[activePillar].keyMessages.map((message, index) => (
                <div key={index} className="flex items-start bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 border border-gray-200">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${pillars[activePillar].color} flex items-center justify-center mr-4 flex-shrink-0 shadow-md`}>
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{message}</p>
                </div>
              ))}
            </div>

            <h4 className="text-xl font-semibold text-gray-900 mb-4">Proof Points & Programs</h4>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-200 mb-8">
              <ul className="space-y-3">
                {pillars[activePillar].proofPoints.map((point, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <i className="fas fa-check-circle text-green-600 mr-3 mt-1"></i>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h4 className="text-xl font-semibold text-gray-900 mb-4">Competitive Differentiation</h4>
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border border-orange-200">
              <p className="text-gray-700 leading-relaxed">{pillars[activePillar].differentiation}</p>
            </div>
          </div>
        </div>

        {/* Competitive Analysis */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Competitive Differentiation Analysis
          </h2>
          <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
            Comprehensive analysis of key competitors&apos; EVP positioning to identify differentiation opportunities for Computacenter
          </p>
          <div className="space-y-4">
            {competitiveInsights.map((insight, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-xl hover:border-blue-300 transition-all">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">Competitor</h4>
                    <p className="text-gray-900 font-bold">{insight.competitor}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">Their EVP Theme</h4>
                    <p className="text-gray-700 italic">{insight.evpTheme}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">Their Positioning</h4>
                    <p className="text-gray-700">{insight.positioning}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">Computacenter&apos;s Differentiation</h4>
                    <p className="text-blue-600 font-semibold">{insight.differentiation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8 border border-green-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <i className="fas fa-trophy text-green-600 mr-3"></i>
              Computacenter&apos;s Core Differentiation
            </h3>
            <p className="text-gray-700 text-lg font-medium">
              Human-centered technology impact + Sustainable career development + Authentic flexibility
            </p>
          </div>
        </div>

        {/* Implementation Roadmap */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Implementation Roadmap
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Phase 1</h3>
              </div>
              <h4 className="text-blue-600 font-semibold mb-2">Internal Launch (Months 1-3)</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Leadership communication</li>
                <li>• Manager training</li>
                <li>• Employee launch events</li>
                <li>• 90% employee awareness target</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Phase 2</h3>
              </div>
              <h4 className="text-purple-600 font-semibold mb-2">External Activation (Months 4-6)</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Career site redesign</li>
                <li>• LinkedIn campaigns</li>
                <li>• Recruitment marketing</li>
                <li>• Improved offer acceptance</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Phase 3</h3>
              </div>
              <h4 className="text-green-600 font-semibold mb-2">Sustained Engagement (Months 7-12)</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Storytelling campaigns</li>
                <li>• Ambassador program</li>
                <li>• Awards submissions</li>
                <li>• Retention improvements</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Strategic Outcomes */}
        <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-2xl p-8 md:p-12 border-2 border-blue-200 shadow-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Strategic Outcomes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-check-circle text-green-600 mr-3"></i>
                Talent Attraction
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Increased application quality</li>
                <li>• Higher offer acceptance rates</li>
                <li>• Reduced time-to-fill</li>
                <li>• Enhanced employer brand awareness</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-check-circle text-green-600 mr-3"></i>
                Employee Retention
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Improved employee engagement</li>
                <li>• Higher internal mobility</li>
                <li>• Reduced voluntary turnover</li>
                <li>• Increased employee advocacy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
