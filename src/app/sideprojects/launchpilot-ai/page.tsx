'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function LaunchPilotAIProject() {
  const [activeTab, setActiveTab] = useState('overview')

  const features = [
    {
      title: "GTM Launch Plan Generator",
      icon: "fa-rocket",
      description: "Comprehensive go-to-market plans for product launches",
      details: ["Timeline planning", "Channel strategy", "Target audience analysis", "Success metrics definition"]
    },
    {
      title: "Feature Announcement Email Generator",
      icon: "fa-envelope",
      description: "Create compelling feature announcements instantly",
      details: ["Multiple email variations", "Subject line options", "A/B testing ready", "CTA optimization"]
    },
    {
      title: '"What\'s New" Newsletter Generator',
      icon: "fa-newspaper",
      description: "Convert product updates into engaging newsletters",
      details: ["Feature highlights", "Customer benefits focus", "Release notes formatting", "Visual hierarchy suggestions"]
    },
    {
      title: "Launch Calendar Builder",
      icon: "fa-calendar-alt",
      description: "Strategic timeline planning for coordinated launches",
      details: ["Multi-channel coordination", "Milestone tracking", "Team alignment", "Deadline management"]
    },
    {
      title: "Persona-based Messaging Generator",
      icon: "fa-users",
      description: "Tailored messaging for different customer segments",
      details: ["ICP-specific value props", "Pain point addressing", "Use case scenarios", "Industry customization"]
    },
    {
      title: "Landing Page Copy + Value Prop Generator",
      icon: "fa-file-alt",
      description: "High-converting landing page content",
      details: ["Hero section copy", "Feature-benefit mapping", "Social proof suggestions", "CTA recommendations"]
    }
  ]

  const advancedFeatures = [
    { title: "Competitive Positioning Analysis", icon: "fa-chart-line", description: "AI-powered competitive landscape analysis and differentiation strategy" },
    { title: "Full Launch Deck Creation", icon: "fa-presentation", description: "Generate complete launch presentations with PPT export capability" },
    { title: "Social Media Launch Rollout", icon: "fa-share-alt", description: "Multi-platform social media campaign planning and content" },
    { title: "Automated Cross-functional Update Emails", icon: "fa-inbox", description: "Keep all stakeholders informed with automated status updates" },
    { title: "Jira → PRD Auto-conversion", icon: "fa-sync-alt", description: "Transform Jira tickets into structured product requirement documents" }
  ]

  const targetAudience = [
    { role: "Product Marketing Managers", icon: "fa-bullhorn", description: "Streamline launch planning and execution workflows" },
    { role: "Product Managers", icon: "fa-cubes", description: "Create compelling product narratives and announcements" },
    { role: "SaaS Startups", icon: "fa-rocket", description: "Launch products faster with professional marketing materials" },
    { role: "E-commerce Companies", icon: "fa-shopping-cart", description: "Coordinate product releases and seasonal campaigns" },
    { role: "Solo Founders", icon: "fa-user-tie", description: "Handle launches single-handedly without marketing resources" }
  ]

  const metrics = [
    { label: "Speed Boost", value: "10x", icon: "fa-clock", description: "Launch faster with AI assistance" },
    { label: "MVP Features", value: "6", icon: "fa-star", description: "Core launch generators" },
    { label: "Advanced Features", value: "5+", icon: "fa-magic", description: "Pro-level capabilities" },
    { label: "Time Saved", value: "90%", icon: "fa-hourglass-half", description: "Reduce manual work dramatically" }
  ]

  const challenges = [
    {
      title: "Multi-format Content Generation",
      description: "Creating consistent messaging across different formats (emails, landing pages, presentations) while maintaining brand voice and technical accuracy",
      solution: "Developed a context-aware generation system that preserves core messaging themes across formats while adapting tone and structure to each medium's best practices"
    },
    {
      title: "GTM Plan Comprehensiveness",
      description: "Ensuring generated GTM plans cover all critical launch elements (timeline, channels, metrics, messaging, target audience) without generic filler content",
      solution: "Built structured prompt templates with required sections and validation checks, ensuring each plan includes actionable tactics, realistic timelines, and measurable success criteria"
    },
    {
      title: "Persona-based Messaging Accuracy",
      description: "Generating truly differentiated messaging for different customer personas without falling into stereotype traps or vague generalizations",
      solution: "Implemented persona profiling framework that analyzes pain points, use cases, and decision drivers specific to each ICP, generating messaging that addresses unique needs with concrete examples"
    },
    {
      title: "Launch Calendar Coordination",
      description: "Creating realistic, coordinated launch calendars that account for cross-functional dependencies, approval cycles, and realistic production timelines",
      solution: "Designed calendar generation logic with built-in buffer times, dependency mapping, and milestone sequencing based on industry best practices and common bottlenecks"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-blue-100 hover:text-white mb-6 transition-colors"
          >
            <i className="fas fa-arrow-left"></i>
            Back to Portfolio
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded-full">
              Completed Project
            </span>
            <span className="bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-full">
              Side Project
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            LaunchPilot AI
          </h1>
          <p className="text-xl text-blue-100 mb-6 max-w-3xl">
            Plan, execute, and announce product launches 10× faster. Your End-to-End Product Launch Assistant for creating GTM plans, launch calendars, feature announcements, and emails.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/sideprojects/launchpilot-ai/app"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <i className="fas fa-play-circle"></i>
              Launch App
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8 overflow-x-auto">
            {['overview', 'features', 'audience', 'challenges'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 font-semibold border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                <i className="fas fa-lightbulb text-yellow-500 mr-3"></i>
                Product Overview
              </h2>
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  LaunchPilot AI is an interactive demo tool that showcases how AI can accelerate product launch 
                  planning. Built as a demonstration project, it features 6 specialized generators that create 
                  professional launch materials instantly—from comprehensive GTM plans to persona-based messaging 
                  frameworks.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  The app demonstrates modern PMM workflows through an intuitive dashboard interface. Users can 
                  explore pre-filled demo data or customize inputs to see how AI generates launch content across 
                  multiple formats. Each generator includes professional templates and best practices, making it 
                  a valuable reference for product marketers planning real launches.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <i className="fas fa-lightbulb text-blue-600"></i>
                      Project Concept
                    </h3>
                    <p className="text-gray-700">
                      This demo project explores how AI can streamline the product launch process by automating 
                      the creation of launch assets. PMMs typically spend weeks creating GTM plans, emails, and 
                      messaging frameworks manually. This tool demonstrates how intelligent generation can reduce 
                      that time to minutes while maintaining professional quality.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <i className="fas fa-rocket text-green-600"></i>
                      The Demo Experience
                    </h3>
                    <p className="text-gray-700">
                      An interactive dashboard with 6 launch generators, each pre-loaded with realistic demo data. 
                      Users can immediately click "Generate" to see professional output, or edit the sample data 
                      to explore personalized results. Every generator includes comprehensive templates and best 
                      practices used by successful product marketing teams.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Metrics Section */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                <i className="fas fa-chart-line text-green-500 mr-3"></i>
                Key Metrics
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {metrics.map((metric, index) => (
                  <div 
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <i className={`fas ${metric.icon} text-3xl text-blue-600`}></i>
                      <span className="text-3xl font-bold text-gray-900">{metric.value}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">{metric.label}</h3>
                    <p className="text-sm text-gray-600">{metric.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Value Proposition */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                <i className="fas fa-bullseye text-blue-500 mr-3"></i>
                Why LaunchPilot AI?
              </h2>
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-bolt text-3xl text-blue-600"></i>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">10× Faster Launches</h3>
                    <p className="text-gray-600">Generate comprehensive launch plans and content in minutes, not weeks. Ship more launches with the same resources.</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-brain text-3xl text-purple-600"></i>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Strategic & Complete</h3>
                    <p className="text-gray-600">AI-generated plans include all critical elements—timelines, channels, metrics, messaging frameworks, and dependencies.</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-users text-3xl text-blue-600"></i>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Team Alignment</h3>
                    <p className="text-gray-600">Coordinate cross-functional teams with clear calendars, automated updates, and shared launch documentation.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Features Tab */}
        {activeTab === 'features' && (
          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                <i className="fas fa-star text-blue-500 mr-3"></i>
                Interactive Launch Generators
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Six specialized tools that demonstrate AI-powered content generation for product launches. 
                Each generator comes with pre-filled demo data and comprehensive template references.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <i className={`fas ${feature.icon} text-2xl text-blue-600`}></i>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600 mb-4">{feature.description}</p>
                        <ul className="space-y-2">
                          {feature.details.map((detail, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                              <i className="fas fa-check text-green-500"></i>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                <i className="fas fa-desktop text-purple-500 mr-3"></i>
                Demo Features & User Experience
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl shadow-md border border-purple-200">
                  <div className="bg-white p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    <i className="fas fa-magic text-2xl text-purple-600"></i>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Pre-filled Demo Data</h3>
                  <p className="text-gray-600 text-sm">All generators start with realistic sample data for an "AI-Powered Analytics Dashboard" product. Users can generate content immediately or customize fields for personalized results.</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-md border border-blue-200">
                  <div className="bg-white p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    <i className="fas fa-th-large text-2xl text-blue-600"></i>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Clean Dashboard Interface</h3>
                  <p className="text-gray-600 text-sm">Intuitive 3-column grid layout with color-coded feature cards. Each card clearly explains what it generates and invites users to try it with a single click.</p>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl shadow-md border border-emerald-200">
                  <div className="bg-white p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    <i className="fas fa-file-alt text-2xl text-emerald-600"></i>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Professional Templates</h3>
                  <p className="text-gray-600 text-sm">Each generator includes comprehensive template references with best practices, structure guidelines, and real-world examples from successful product launches.</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl shadow-md border border-orange-200">
                  <div className="bg-white p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    <i className="fas fa-copy text-2xl text-orange-600"></i>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Copy-Ready Output</h3>
                  <p className="text-gray-600 text-sm">Generated content includes a one-click copy button and proper markdown formatting. Users can easily export and use the content in their actual launches.</p>
                </div>
                <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-xl shadow-md border border-pink-200">
                  <div className="bg-white p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    <i className="fas fa-chart-bar text-2xl text-pink-600"></i>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Stats Dashboard</h3>
                  <p className="text-gray-600 text-sm">Visual metrics showing the value proposition: 6 tools, 10x faster creation, 90% time saved, and 100% professional quality—helping users understand the potential impact.</p>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl shadow-md border border-indigo-200">
                  <div className="bg-white p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    <i className="fas fa-sync-alt text-2xl text-indigo-600"></i>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Regenerate & Iterate</h3>
                  <p className="text-gray-600 text-sm">Users can edit their inputs and regenerate content as many times as needed, exploring different approaches and learning what makes effective launch materials.</p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Audience Tab */}
        {activeTab === 'audience' && (
          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                <i className="fas fa-users text-blue-500 mr-3"></i>
                Target Audience
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {targetAudience.map((audience, index) => (
                  <div 
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-4 rounded-xl">
                        <i className={`fas ${audience.icon} text-3xl text-white`}></i>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{audience.role}</h3>
                        <p className="text-gray-600">{audience.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                <i className="fas fa-comments text-green-500 mr-3"></i>
                Use Cases
              </h2>
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold">1</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Major Product Launch</h3>
                      <p className="text-gray-600">PMM needs to coordinate a multi-channel launch with GTM plan, messaging framework, emails, landing pages, and presentations—all aligned and ready in days, not weeks.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-purple-100 w-10 h-10 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-bold">2</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Weekly Feature Announcements</h3>
                      <p className="text-gray-600">Product team ships features continuously and needs quick, professional announcement emails and &quot;What&apos;s New&quot; newsletter sections every week.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold">3</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Solo Founder Launch</h3>
                      <p className="text-gray-600">Founder without marketing resources needs to launch a new SaaS product professionally—from GTM strategy to landing page copy to launch day calendar.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-purple-100 w-10 h-10 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-bold">4</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Multi-Persona Messaging</h3>
                      <p className="text-gray-600">B2B company launching feature that serves multiple ICPs (developers, CTOs, business users) needs customized messaging for each persona segment.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Challenges Tab */}
        {activeTab === 'challenges' && (
          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                <i className="fas fa-tools text-orange-500 mr-3"></i>
                Design & Implementation Challenges
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Key challenges in building an intuitive demo that showcases AI-powered launch planning while 
                providing real value to product marketers.
              </p>
              <div className="space-y-6">
                {challenges.map((challenge, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-xl shadow-lg border-2 border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
                      <h3 className="text-xl font-bold text-white flex items-center gap-3">
                        <span className="bg-white bg-opacity-20 w-10 h-10 rounded-full flex items-center justify-center">
                          {index + 1}
                        </span>
                        {challenge.title}
                      </h3>
                    </div>
                    <div className="p-6">
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                          <i className="fas fa-exclamation-circle text-red-500"></i>
                          Challenge
                        </h4>
                        <p className="text-gray-700 leading-relaxed">{challenge.description}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                          <i className="fas fa-lightbulb text-green-500"></i>
                          Solution
                        </h4>
                        <p className="text-gray-700 leading-relaxed">{challenge.solution}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Launch 10× Faster?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Ship faster. Align teams better. Launch with confidence.
          </p>
          <Link 
            href="/sideprojects/launchpilot-ai/app"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            <i className="fas fa-rocket"></i>
            Generate Your GTM Plan Free
          </Link>
        </div>
      </div>
    </div>
  )
}
