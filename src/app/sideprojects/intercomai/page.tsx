'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function IntercomAIProject() {
  const [activeTab, setActiveTab] = useState('overview')

  const features = [
    {
      title: "Smart Templates",
      icon: "fa-file-alt",
      description: "Pre-built templates for various internal communication scenarios",
      details: ["Leadership Quarterly Update", "Policy Change Announcement", "Urgent Incident Response", "Team Celebration", "New Hire Welcome", "Change Management Update"]
    },
    {
      title: "Multi-tone Support",
      icon: "fa-adjust",
      description: "Six distinct tone options to match any communication context",
      details: ["Professional", "Friendly", "Leadership", "Urgent", "Empathetic", "Enthusiastic"]
    },
    {
      title: "Format Flexibility",
      icon: "fa-list",
      description: "Generate content in multiple communication formats",
      details: ["Email", "Newsletter Section", "Announcement", "Slack/Teams Message"]
    },
    {
      title: "Multi-language Support",
      icon: "fa-globe",
      description: "Create communications in 7 different languages",
      details: ["English", "Spanish", "French", "German", "Mandarin", "Japanese", "Portuguese"]
    },
    {
      title: "Compliance Check",
      icon: "fa-shield-alt",
      description: "AI-powered compliance validation for corporate communications",
      details: ["Legal risk detection", "Inclusive language verification", "Brand consistency check", "Tone appropriateness"]
    },
    {
      title: "Smart Generation",
      icon: "fa-magic",
      description: "Transform raw notes into polished content with AI",
      details: ["Multiple subject line options", "Markdown formatted content", "One-sentence summary", "Call-to-action suggestions"]
    }
  ]

  const metrics = [
    { label: "Time Saved", value: "10x", icon: "fa-clock", description: "Faster than manual writing" },
    { label: "Templates", value: "6", icon: "fa-file-alt", description: "Pre-built scenarios" },
    { label: "Tone Options", value: "6", icon: "fa-palette", description: "Professional to enthusiastic" },
    { label: "Languages", value: "7", icon: "fa-globe", description: "Multi-language support" }
  ]

  const challenges = [
    {
      title: "Structured Output Consistency",
      description: "Ensuring the AI service returns consistently structured JSON with subject lines, content, summary, and CTA for every generation request",
      solution: "Implemented structured output schema using Google GenAI SDK's responseSchema with Type definitions, enforcing required fields and data types for reliable parsing"
    },
    {
      title: "Tone Calibration Across Languages",
      description: "Maintaining consistent tone characteristics (Professional, Friendly, Leadership, Urgent, Empathetic, Enthusiastic) across 7 different languages while respecting cultural nuances",
      solution: "Developed comprehensive system instructions with tone principles (clarity, engagement, appropriateness) and language-specific generation prompts that preserve intent across translations"
    },
    {
      title: "Compliance Analysis Without False Positives",
      description: "Building an AI compliance checker that identifies real legal risks, discriminatory language, and tone mismatches without flagging legitimate business terminology",
      solution: "Created a specialized compliance prompt with clear detection criteria: absolute guarantees, non-inclusive language, alienating jargon, and tone mismatches. Returns severity-rated issues (low/medium/high) with specific phrase identification and actionable suggestions"
    },
    {
      title: "History Persistence & State Management",
      description: "Managing complex application state across multiple views (generator, templates, history) while persisting user history locally without a backend",
      solution: "Implemented React hooks for local state management with localStorage integration for history persistence. Used structured state objects (GenerationState, ComplianceState) to track loading, success, and error states independently"
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
            Intercom AI
          </h1>
          <p className="text-xl text-blue-100 mb-6 max-w-3xl">
            Your AI assistant for clean, clear, high-impact internal communication. Transform raw notes into polished emails, newsletters, and leadership updates.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/sideprojects/intercomai/app"
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
            {['overview', 'features', 'challenges'].map((tab) => (
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
                Project Overview
              </h2>
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Intercom AI is an intelligent assistant designed to revolutionize internal communications for 
                  Fortune 500 HR and Leadership teams. It transforms raw, unstructured input (notes, bullet points, 
                  rough drafts) into polished, professional communications suitable for various corporate contexts. 
                  Whether you need to draft an email, create a newsletter, announce a policy change, or compose a 
                  leadership update, Intercom AI helps you communicate clearly and effectively.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Built with Google&apos;s AI technology, the tool uses sophisticated prompt engineering and 
                  structured JSON outputs to generate three subject line options, Markdown-formatted content, 
                  one-sentence summaries, and call-to-action recommendations. It features a built-in compliance 
                  checker that analyzes content for legal risks, discriminatory language, jargon, and tone 
                  mismatches—ensuring your communications are both compelling and compliant.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <i className="fas fa-target text-blue-600"></i>
                      Problem Statement
                    </h3>
                    <p className="text-gray-700">
                      Internal communications require significant time to craft—ensuring the right tone, format, 
                      and compliance with company policies is challenging. Leadership teams need to maintain a 
                      consistent voice across announcements, policy changes, and updates while avoiding legal 
                      risks and ensuring inclusivity. Manual writing and multiple review cycles slow down 
                      time-sensitive communications.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <i className="fas fa-lightbulb text-green-600"></i>
                      Solution
                    </h3>
                    <p className="text-gray-700">
                      An AI-powered tool using advanced language models that transforms raw notes into polished, 
                      compliant internal communications. With 6 pre-built templates, 6 tone options, 4 format types, 
                      and 7 language outputs, the tool generates multiple subject lines, Markdown-formatted content, 
                      summaries, and CTAs. A built-in compliance checker identifies legal risks, discriminatory 
                      language, and tone mismatches—reducing review cycles by 10x.
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
          </div>
        )}

        {/* Features Tab */}
        {activeTab === 'features' && (
          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                <i className="fas fa-star text-yellow-500 mr-3"></i>
                Core Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
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
                <i className="fas fa-cogs text-purple-500 mr-3"></i>
                How It Works
              </h2>
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                <div className="space-y-6">
                  {[
                    { step: 1, title: "Choose Starting Point", description: "Start from scratch in Generator view or select one of 6 pre-built Templates (Leadership Update, Policy Change, Crisis Response, etc.)" },
                    { step: 2, title: "Configure Settings", description: "Select Format (Email/Announcement/Newsletter/Slack), Tone (Professional/Friendly/Leadership/Urgent/Empathetic/Enthusiastic), Language (7 options), and Target Audience" },
                    { step: 3, title: "Input Raw Content", description: "Paste rough notes, bullet points, or unstructured text into the drafting workspace. The AI excels at transforming messy input into polished output" },
                    { step: 4, title: "Generate", description: "Click generate—the AI analyzes your input using sophisticated prompts and returns structured JSON with 3 subject line options, Markdown-formatted content, 1-sentence summary, and CTA recommendation" },
                    { step: 5, title: "Review Results", description: "View the polished output in ResultView with formatted content. Copy to clipboard, export as PDF, or create a new version" },
                    { step: 6, title: "Run Compliance Check", description: "Optional AI compliance analysis scans for legal risks (absolute guarantees), discriminatory language, alienating jargon, and tone mismatches. Returns severity-rated issues with specific suggestions" },
                    { step: 7, title: "Access History", description: "All successful generations automatically save to History (localStorage). Load previous communications to iterate or reference past work" }
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

        {/* Challenges Tab */}
        {activeTab === 'challenges' && (
          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                <i className="fas fa-exclamation-triangle text-orange-500 mr-3"></i>
                Challenges & Solutions
              </h2>
              <div className="space-y-6">
                {challenges.map((challenge, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-xl p-8 shadow-lg border-2 border-orange-200"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <i className="fas fa-puzzle-piece text-orange-500"></i>
                      {challenge.title}
                    </h3>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Challenge:</h4>
                      <p className="text-gray-600">{challenge.description}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Solution:</h4>
                      <p className="text-gray-600">{challenge.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Learnings */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                <i className="fas fa-graduation-cap text-blue-500 mr-3"></i>
                Key Learnings
              </h2>
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                <ul className="space-y-4">
                  {[
                    "Structured JSON outputs with responseSchema are essential for reliable AI integrations—eliminating parsing errors and ensuring consistent data structures",
                    "Comprehensive system instructions act as the AI's 'brand guidelines'—defining principles (clarity, engagement, appropriateness) ensures consistent output quality across all generations",
                    "Severity-rated compliance analysis (low/medium/high) with specific phrase identification is more actionable than binary pass/fail checks",
                    "Pre-built templates dramatically improve adoption—users prefer starting with scenarios (Leadership Update, Policy Change, Crisis Response) over blank canvases",
                    "localStorage persistence enables production-ready UX without backend complexity—critical for MVP development and rapid iteration",
                    "Error handling with user-friendly messages (API key issues, rate limits, safety blocks) builds trust even when things go wrong"
                  ].map((learning, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <i className="fas fa-check-circle text-green-500 text-xl mt-1"></i>
                      <span className="text-gray-700 text-lg">{learning}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Future Enhancements */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                <i className="fas fa-rocket text-purple-500 mr-3"></i>
                Future Enhancements
              </h2>
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: "Custom Brand Voice Training", description: "Fine-tune system instructions with company-specific terminology, preferred phrases, and brand guidelines for truly personalized output" },
                    { title: "Version Comparison", description: "Generate multiple variations simultaneously and compare side-by-side to choose the most effective option" },
                    { title: "Engagement Analytics", description: "Track open rates, click-through rates, and employee feedback on sent communications to iterate on what works" },
                    { title: "Team Collaboration", description: "Add commenting, approval workflows, and multi-user editing for communications that require stakeholder sign-off" },
                    { title: "Platform Integrations", description: "Direct publish to Outlook, Slack, Teams, and SharePoint—eliminating copy-paste workflow" },
                    { title: "Smart Scheduling", description: "AI-recommended send times based on employee time zones, historical engagement patterns, and communication type" }
                  ].map((enhancement, index) => (
                    <div key={index} className="bg-purple-50 p-4 rounded-lg">
                      <h3 className="font-bold text-gray-900 mb-2">{enhancement.title}</h3>
                      <p className="text-gray-600 text-sm">{enhancement.description}</p>
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
          <h2 className="text-3xl font-bold mb-4">Interested in This Project?</h2>
          <p className="text-xl text-blue-100 mb-6">
            Feel free to explore the live demo or reach out to discuss the implementation
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/sideprojects/intercomai/app"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <i className="fas fa-play-circle"></i>
              Launch App
            </Link>
            <Link 
              href="/#contact"
              className="inline-flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-all duration-300 border-2 border-white"
            >
              <i className="fas fa-envelope"></i>
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
