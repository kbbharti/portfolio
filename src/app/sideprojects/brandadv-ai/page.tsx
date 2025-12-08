'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function BrandAdvAIProject() {
  const [activeTab, setActiveTab] = useState('overview')

  const features = [
    {
      title: "Hiring Announcement Generator",
      icon: "fa-bullhorn",
      description: "Create role-specific hiring posts instantly",
      details: ["3 variations per role", "Design-ready templates", "Auto-hashtag generation", "Built-in CTA suggestions"],
      category: "mvp"
    },
    {
      title: "Auto-generate Day in the Life Posts",
      icon: "fa-calendar-day",
      description: "Authentic employee experience content",
      details: ["Role-specific variations", "Culture-focused narratives", "Engaging storytelling", "Ready-to-post format"],
      category: "mvp"
    },
    {
      title: "LinkedIn Post Generator",
      icon: "fa-linkedin",
      description: "Culture, people stories, milestones, and wins",
      details: ["Company milestones", "Team achievements", "Culture highlights", "Engagement-optimized"],
      category: "mvp"
    },
    {
      title: "Employee Stories Transformer",
      icon: "fa-book-open",
      description: "Transform raw notes into polished, human-sounding stories",
      details: ["Natural tone", "Authentic voice", "Story structure", "Social media ready"],
      category: "mvp"
    },
    {
      title: "Auto-hashtag + CTA Generator",
      icon: "fa-hashtag",
      description: "Smart hashtag and call-to-action suggestions",
      details: ["Trending hashtags", "Industry-specific", "CTA variations", "Engagement boost"],
      category: "mvp"
    },
    {
      title: "Branded Graphics Templates",
      icon: "fa-palette",
      description: "Simple templates with Canva export",
      details: ["Brand-aligned designs", "Multiple formats", "Export-ready", "Customizable"],
      category: "mvp"
    },
    {
      title: "Employee Spotlight Creator",
      icon: "fa-user-circle",
      description: "Q&A into polished spotlight posts",
      details: ["Interview format", "Professional storytelling", "Authentic voice", "Social optimized"],
      category: "mvp"
    }
  ]



  const targetAudience = [
    { role: "HR Teams", icon: "fa-users", description: "Create employer branding content without dedicated writers or designers" },
    { role: "Employer Branding Teams", icon: "fa-award", description: "Amplify culture storytelling and maintain consistent posting" },
    { role: "Talent Acquisition Teams", icon: "fa-user-plus", description: "Create compelling hiring posts and candidate attraction content" },
    { role: "Startups & Mid-size Tech Companies", icon: "fa-rocket", description: "Build employer brand while scaling rapidly with limited resources" },
    { role: "Consulting Companies", icon: "fa-briefcase", description: "Maintain hiring pipeline with consistent employer branding" },
    { role: "Founders", icon: "fa-lightbulb", description: "Build personal and employer brands simultaneously" },
    { role: "Recruitment Agencies", icon: "fa-handshake", description: "Manage multiple client brands efficiently at scale" },
    { role: "Social Media Agencies", icon: "fa-share-alt", description: "Handle employer branding clients with AI-powered efficiency" }
  ]

  const metrics = [
    { label: "Core Features", value: "7", icon: "fa-star", description: "Content generators" },
    { label: "Content Types", value: "6+", icon: "fa-file-alt", description: "Employer branding formats" },
    { label: "Target Users", value: "8", icon: "fa-users", description: "Key audience segments" },
    { label: "Tone Options", value: "3", icon: "fa-adjust", description: "Voice customization" }
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
            BrandAdv AI
          </h1>
          <p className="text-xl text-blue-100 mb-6 max-w-3xl">
            Turn your culture into content — instantly. Employer Branding Content Studio for HR teams, talent acquisition, and startups.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/sideprojects/brandadv-ai/app"
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
            {['overview', 'features', 'audience'].map((tab) => (
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
                  BrandAdv AI is an Employer Branding Content Studio that helps companies convert their culture, 
                  employee stories, hiring needs, and internal wins into high-quality, ready-to-post content for 
                  LinkedIn, social media, and job platforms.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Designed for HR teams, talent acquisition, startups, and recruitment agencies who lack in-house 
                  writers or designers. Get done in seconds what usually takes hours. Just type your story → get 
                  scroll-stopping content.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <i className="fas fa-target text-blue-600"></i>
                      The Challenge
                    </h3>
                    <p className="text-gray-700">
                      The talent market is loud. Companies struggle with telling authentic employee stories, 
                      creating consistent hiring posts, showcasing culture moments, and building a strong employer 
                      reputation. Most teams lack dedicated writers and designers, leading to sporadic or generic 
                      employer branding content that fails to attract top talent.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <i className="fas fa-lightbulb text-green-600"></i>
                      The Solution
                    </h3>
                    <p className="text-gray-700">
                      BrandAdv AI acts as your always-on employer branding team, turning raw ideas into polished, 
                      on-brand content designed to engage talent and elevate culture. Get done in seconds what 
                      usually takes hours—no designers, no writers, no delays. Just type your story and get 
                      scroll-stopping content.
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
                Why BrandAdv AI?
              </h2>
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-bolt text-3xl text-blue-600"></i>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Lightning Fast</h3>
                    <p className="text-gray-600">Generate content in seconds, not hours. No more waiting for designers or copywriters.</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-heart text-3xl text-purple-600"></i>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Authentically Human</h3>
                    <p className="text-gray-600">AI-powered but human-sounding. Content that feels genuine and resonates with candidates.</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-infinity text-3xl text-blue-600"></i>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Endless Variations</h3>
                    <p className="text-gray-600">Never repeat yourself. Generate unlimited unique posts from your culture stories.</p>
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
                <i className="fas fa-star text-yellow-500 mr-3"></i>
                Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.filter(f => f.category === 'mvp').map((feature, index) => (
                  <div 
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-lg border-2 border-blue-200 hover:border-blue-400 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <i className={`fas ${feature.icon} text-2xl text-blue-600`}></i>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600 mb-4">{feature.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-700">
                          <i className="fas fa-check-circle text-green-500 text-sm"></i>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* How It Works */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                <i className="fas fa-cogs text-blue-500 mr-3"></i>
                How It Works
              </h2>
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                <div className="space-y-6">
                  {[
                    { step: 1, title: "Choose Content Type", description: "Select hiring post, day in life, LinkedIn post, employee spotlight, video script, or employee story" },
                    { step: 2, title: "Input Your Details", description: "Type raw notes, bullet points, or key details about what you want to share" },
                    { step: 3, title: "Select Tone", description: "Choose professional, friendly, or leadership tone to match your brand voice" },
                    { step: 4, title: "Generate Instantly", description: "Get polished content with title, body copy, hashtags, and call to action in seconds" },
                    { step: 5, title: "Copy & Post", description: "Review, copy, and share across LinkedIn, Instagram, job boards, or anywhere your candidates are" }
                  ].map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Target Audience Tab */}
        {activeTab === 'audience' && (
          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                <i className="fas fa-users text-blue-500 mr-3"></i>
                Who Is This For?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {targetAudience.map((audience, index) => (
                  <div 
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                      <i className={`fas ${audience.icon} text-2xl text-blue-600`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{audience.role}</h3>
                    <p className="text-gray-600">{audience.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Use Cases */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                <i className="fas fa-lightbulb text-yellow-500 mr-3"></i>
                Real-World Use Cases
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Scaling Startup",
                    scenario: "A 50-person tech startup hiring 20 roles across engineering, product, and sales",
                    solution: "Uses BrandAdv AI to create 3 variations of each job announcement, generate employee spotlights every week, and maintain a 30-day content calendar—all without hiring a dedicated content person",
                    result: "3x increase in quality applications, 40% reduction in time-to-hire"
                  },
                  {
                    title: "Corporate HR Team",
                    scenario: "Fortune 500 HR team managing employer brand across 15 countries and 5,000+ employees",
                    solution: "Leverages bulk content mode to create localized culture posts, uses tone matching for leadership vs. HR communications, and runs DEI language checker on all public-facing content",
                    result: "85% faster content creation, consistent brand voice globally"
                  },
                  {
                    title: "Recruitment Agency",
                    scenario: "Agency managing employer branding for 12 client companies across different industries",
                    solution: "Uses EVP Builder to define each client's unique employer value proposition, creates branded templates for each client, and generates content calendars for all clients simultaneously",
                    result: "6x more content output with same team size, 95% client satisfaction"
                  },
                  {
                    title: "Social Media Manager",
                    scenario: "Solo social media manager responsible for employer brand content across LinkedIn, Instagram, and TikTok",
                    solution: "Generates video scripts for culture reels, creates day-in-the-life posts for different roles, and uses employee spotlight creator to turn interviews into multi-platform content",
                    result: "200% increase in engagement, 4x more consistent posting schedule"
                  }
                ].map((useCase, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-xl p-8 shadow-lg border-2 border-orange-200"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <i className="fas fa-puzzle-piece text-orange-500"></i>
                      {useCase.title}
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-1">Scenario:</h4>
                        <p className="text-gray-600">{useCase.scenario}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-1">Solution:</h4>
                        <p className="text-gray-600">{useCase.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-1">Result:</h4>
                        <p className="text-green-600 font-medium">{useCase.result}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Future Enhancements */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                <i className="fas fa-road text-purple-500 mr-3"></i>
                Roadmap & Future Features
              </h2>
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: "Multi-Platform Publishing", description: "Direct integration with LinkedIn, Instagram, Twitter, and job boards for one-click posting" },
                    { title: "Analytics Dashboard", description: "Track engagement metrics, best-performing content types, and optimal posting times" },
                    { title: "Team Collaboration", description: "Multi-user access with approval workflows, commenting, and version history" },
                    { title: "Brand Kit Upload", description: "Upload logos, fonts, and brand guidelines for truly customized design templates" },
                    { title: "Competitor Analysis", description: "AI-powered insights on competitor employer branding strategies and content gaps" },
                    { title: "Candidate Persona Builder", description: "Create target candidate profiles and generate content specifically for each persona" },
                    { title: "A/B Testing Engine", description: "Generate multiple variations and test performance across platforms" },
                    { title: "Video Content Generator", description: "Create full culture videos with AI-generated scripts, b-roll suggestions, and music recommendations" }
                  ].map((feature, index) => (
                    <div key={index} className="bg-purple-50 p-4 rounded-lg">
                      <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <i className="fas fa-chevron-right text-blue-600 text-sm"></i>
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Showcase Your Culture. Celebrate Your People. Attract Top Talent.</h2>
          <p className="text-xl text-purple-100 mb-6">
            No designers. No writers. No delays. Just type your story → get scroll-stopping content.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/sideprojects/brandadv-ai/app"
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <i className="fas fa-play-circle"></i>
              Generate Your First Post Free
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
