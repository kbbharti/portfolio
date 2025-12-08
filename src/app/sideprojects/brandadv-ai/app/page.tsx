'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Briefcase, PenTool, LayoutTemplate, History, Sparkles } from 'lucide-react'

type AppView = 'generator' | 'templates' | 'history'
type ContentType = 'hiring' | 'day-in-life' | 'linkedin' | 'spotlight' | 'video' | 'stories'
type Tone = 'professional' | 'friendly' | 'leadership'

interface Template {
  id: string
  name: string
  contentType: ContentType
  rawText: string
  tone: Tone
}

interface GeneratedContent {
  title: string
  content: string
  hashtags: string[]
  cta: string
}

interface HistoryItem {
  id: string
  timestamp: number
  contentType: ContentType
  tone: Tone
  rawText: string
  result: GeneratedContent
}

export default function BrandAdvAIApp() {
  const [currentView, setCurrentView] = useState<AppView>('generator')
  const [contentType, setContentType] = useState<ContentType>('hiring')
  const [rawText, setRawText] = useState('')
  const [tone, setTone] = useState<Tone>('professional')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null)
  const [history, setHistory] = useState<HistoryItem[]>([])
  const toolRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const savedHistory = localStorage.getItem('brandadv_history')
    if (savedHistory) {
      try {
        setHistory(JSON.parse(savedHistory))
      } catch (e) {
        console.error("Failed to parse history", e)
      }
    }
  }, [])

  const templates: Template[] = [
    {
      id: '1',
      name: 'Software Engineer Hiring',
      contentType: 'hiring',
      rawText: 'Senior Software Engineer\nRemote friendly\n5+ years experience\nReact, Node.js, AWS\nCompetitive salary + equity',
      tone: 'professional'
    },
    {
      id: '2',
      name: 'Day at Tech Startup',
      contentType: 'day-in-life',
      rawText: 'Product Manager role\nMorning standups with engineering team\nAfternoon user interviews\nCollaborative environment\nFlexible schedule',
      tone: 'friendly'
    },
    {
      id: '3',
      name: 'Company Milestone',
      contentType: 'linkedin',
      rawText: 'Reached 1000 customers\n50 team members across 10 countries\nLaunched 3 major features this quarter\nExcited for growth ahead',
      tone: 'leadership'
    },
    {
      id: '4',
      name: 'Employee Success Story',
      contentType: 'spotlight',
      rawText: 'Sarah Chen, Senior Designer\n3 years at company\nLed redesign of flagship product\nMentor to junior designers\nPromoted twice',
      tone: 'friendly'
    }
  ]

  const scrollToTool = () => {
    setCurrentView('generator')
    setTimeout(() => {
      toolRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }

  const saveToHistory = (content: GeneratedContent) => {
    const newItem: HistoryItem = {
      id: Date.now().toString(),
      timestamp: Date.now(),
      contentType,
      tone,
      rawText,
      result: content
    }
    
    const updatedHistory = [newItem, ...history]
    setHistory(updatedHistory)
    localStorage.setItem('brandadv_history', JSON.stringify(updatedHistory))
  }

  const handleGenerate = async () => {
    if (!rawText.trim()) return

    setIsGenerating(true)
    
    await new Promise(resolve => setTimeout(resolve, 2000))

    const mockContent: Record<ContentType, GeneratedContent> = {
      'hiring': {
        title: '🚀 We are Hiring: Join Our Growing Team!',
        content: `Exciting opportunity alert!\n\n${rawText}\n\nWhat we offer:\n✨ Competitive salary and benefits\n🌟 Professional growth opportunities\n💼 Flexible work environment\n🎯 Impact driven projects\n\nReady to make a difference? We would love to hear from you!`,
        hashtags: ['#Hiring', '#JobOpportunity', '#JoinOurTeam', '#CareerGrowth', '#WeAreHiring'],
        cta: 'Apply now or share with someone who would be a great fit!'
      },
      'day-in-life': {
        title: '📅 A Day in the Life: Inside Our Team',
        content: `Ever wondered what a typical day looks like at our company?\n\n${rawText}\n\nFrom morning standups to collaborative brainstorming sessions, every day brings new challenges and opportunities to grow.\n\n☕ Morning: Team sync and priority setting\n💻 Midday: Deep work and collaboration\n🎯 Afternoon: Innovation time and project work\n🌟 Always: Learning and growth`,
        hashtags: ['#DayInTheLife', '#CompanyCulture', '#TeamLife', '#WorkCulture', '#EmployeeExperience'],
        cta: 'Want to be part of our journey? Check out our open positions!'
      },
      'linkedin': {
        title: '🎉 Celebrating Our Team Success',
        content: `We are thrilled to share some exciting news!\n\n${rawText}\n\nThis achievement reflects our team dedication, innovation, and collaborative spirit. We are proud of what we have accomplished together and excited for what lies ahead.\n\nThank you to everyone who contributed to this milestone! 🙌`,
        hashtags: ['#TeamSuccess', '#CompanyMilestone', '#ProudMoment', '#TeamWork', '#Celebration'],
        cta: 'Like and share to celebrate with us!'
      },
      'spotlight': {
        title: '⭐ Employee Spotlight: Meet Our Team',
        content: `Introducing an exceptional member of our team!\n\n${rawText}\n\n🎯 Role and Impact: Making a difference every day\n💡 Innovation: Bringing fresh ideas to life\n🌟 Growth: Continuous learning and development\n🤝 Team Player: Collaboration at its finest\n\nWe are lucky to have talented people who bring their whole selves to work!`,
        hashtags: ['#EmployeeSpotlight', '#TeamMember', '#PeopleOfOurCompany', '#MeetTheTeam', '#EmployeeRecognition'],
        cta: 'Follow us to meet more of our incredible team members!'
      },
      'video': {
        title: '🎥 Culture Video Script',
        content: `Video Script: ${rawText}\n\n[Opening: 0:00 to 0:03]\nHook: Eye catching visual with compelling opening line\n\n[Main Content: 0:03 to 0:25]\n• Showcase authentic moments\n• Highlight team interactions\n• Feature diverse perspectives\n• Show the impact of your work\n\n[Closing: 0:25 to 0:30]\nCTA: Join our team plus company name\n\nB roll suggestions:\nTeam collaboration, Office culture moments, Product impact, Employee testimonials\n\nMusic: Upbeat, professional, energetic`,
        hashtags: ['#CompanyCulture', '#BehindTheScenes', '#TeamVideo', '#LifeAtCompany', '#CultureVideo'],
        cta: 'Tag someone who should see this!'
      },
      'stories': {
        title: '✨ Employee Story: Inspiring Journeys',
        content: `Meet one of our amazing team members!\n\n${rawText}\n\nTheir journey showcases the growth opportunities, supportive culture, and meaningful work that define our company. Stories like these remind us why we do what we do.\n\n💡 Innovation meets passion\n🌟 Growth through challenges\n🤝 Team support every step`,
        hashtags: ['#EmployeeStory', '#TeamStories', '#PeopleFirst', '#CompanyCulture', '#EmployeeSuccess'],
        cta: 'Follow us to hear more inspiring stories from our team!'
      }
    }

    const result = mockContent[contentType]
    setGeneratedContent(result)
    saveToHistory(result)
    setIsGenerating(false)
  }

  const handleLoadTemplate = (template: Template) => {
    setContentType(template.contentType)
    setRawText(template.rawText)
    setTone(template.tone)
    setGeneratedContent(null)
    setCurrentView('generator')
    scrollToTool()
  }

  const handleLoadHistory = (item: HistoryItem) => {
    setContentType(item.contentType)
    setRawText(item.rawText)
    setTone(item.tone)
    setGeneratedContent(item.result)
    setCurrentView('generator')
    scrollToTool()
  }

  const handleReset = () => {
    setGeneratedContent(null)
  }

  const handleClearHistory = () => {
    setHistory([])
    localStorage.removeItem('brandadv_history')
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const contentTypes = [
    { id: 'hiring' as ContentType, icon: '📢', label: 'Hiring Post', desc: 'Role specific hiring announcements' },
    { id: 'day-in-life' as ContentType, icon: '📅', label: 'Day in Life', desc: 'Authentic employee experience posts' },
    { id: 'linkedin' as ContentType, icon: '💼', label: 'LinkedIn Post', desc: 'Culture, milestones, and wins' },
    { id: 'spotlight' as ContentType, icon: '⭐', label: 'Employee Spotlight', desc: 'Q&A into polished stories' },
    { id: 'video' as ContentType, icon: '🎥', label: 'Video Script', desc: 'Culture reels and team videos' },
    { id: 'stories' as ContentType, icon: '✨', label: 'Employee Story', desc: 'Raw notes into human stories' }
  ]

  const getLinkClass = (view: AppView) => {
    return `flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
      currentView === view 
        ? 'text-indigo-600 bg-indigo-50 font-semibold' 
        : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50'
    }`
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-24">
      {/* Demo Banner */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium">
            ✨ Demo Mode: This application uses simulated AI responses for demonstration purposes
          </p>
        </div>
      </div>
      
      {/* Back to Portfolio Link */}
      <div className="bg-white border-b border-slate-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/sideprojects/brandadv-ai"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            <i className="fas fa-arrow-left"></i>
            Back to Project Details
          </Link>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button 
            onClick={() => setCurrentView('generator')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="bg-indigo-600 p-2 rounded-lg">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">BrandAdv AI</span>
          </button>
          
          <nav className="hidden md:flex items-center gap-2 text-sm font-medium">
            <button 
              onClick={() => setCurrentView('generator')}
              className={getLinkClass('generator')}
            >
              <PenTool className="w-4 h-4" />
              Generator
            </button>
            
            <button 
              onClick={() => setCurrentView('templates')}
              className={getLinkClass('templates')}
            >
              <LayoutTemplate className="w-4 h-4" />
              Templates
            </button>
            
            <button 
              onClick={() => setCurrentView('history')}
              className={getLinkClass('history')}
            >
              <History className="w-4 h-4" />
              History
            </button>
            
            <div className="h-4 w-px bg-slate-200 mx-2"></div>
            
            <button className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 px-3 py-2 font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>Upgrade to Pro</span>
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      {currentView === 'generator' && !generatedContent && !rawText && (
        <div className="bg-gradient-to-br from-indigo-600 via-blue-700 to-purple-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Turn Your Culture Into Content — Instantly
            </h1>
            <p className="text-xl text-blue-100 mb-4 max-w-2xl mx-auto">
              Employer Branding Content Studio for HR teams, talent acquisition, and startups.
            </p>
            <p className="text-lg text-blue-50 mb-8 max-w-2xl mx-auto">
              Showcase your culture. Celebrate your people. Attract top talent. No designers. No writers. No delays.
            </p>
            <button 
              onClick={scrollToTool}
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Generate Your First Post Free
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8" ref={toolRef}>
        
        {/* Templates View */}
        {currentView === 'templates' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Templates</h2>
              <p className="text-slate-600">Start with proven templates for hiring posts, culture stories, and employee spotlights</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {templates.map((template) => (
                <button
                  key={template.id}
                  onClick={() => handleLoadTemplate(template)}
                  className="bg-white p-6 rounded-xl border-2 border-slate-200 hover:border-indigo-400 hover:shadow-lg transition-all duration-200 text-left group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {template.name}
                    </h3>
                    <span className="text-2xl">{contentTypes.find(ct => ct.id === template.contentType)?.icon}</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-3 line-clamp-2">{template.rawText}</p>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded-md capitalize">{template.contentType.replace('-', ' ')}</span>
                    <span className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded-md capitalize">{template.tone}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* History View */}
        {currentView === 'history' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">History</h2>
                <p className="text-slate-600">Your previously generated content</p>
              </div>
              {history.length > 0 && (
                <button
                  onClick={handleClearHistory}
                  className="text-red-600 hover:text-red-700 font-medium text-sm"
                >
                  Clear All
                </button>
              )}
            </div>

            {history.length === 0 ? (
              <div className="bg-white rounded-xl border-2 border-dashed border-slate-200 p-12 text-center">
                <History className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-500 mb-2">No history yet</p>
                <p className="text-sm text-slate-400">Generate your first content to see it here</p>
              </div>
            ) : (
              <div className="space-y-4">
                {history.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleLoadHistory(item)}
                    className="w-full bg-white p-6 rounded-xl border-2 border-slate-200 hover:border-indigo-400 hover:shadow-lg transition-all duration-200 text-left group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors mb-1">
                          {item.result.title}
                        </h3>
                        <p className="text-xs text-slate-500">
                          {new Date(item.timestamp).toLocaleString()}
                        </p>
                      </div>
                      <span className="text-2xl">{contentTypes.find(ct => ct.id === item.contentType)?.icon}</span>
                    </div>
                    <p className="text-sm text-slate-600 mb-3 line-clamp-2">{item.result.content}</p>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded-md capitalize">{item.contentType.replace('-', ' ')}</span>
                      <span className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded-md capitalize">{item.tone}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Generator View */}
        {currentView === 'generator' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-[600px]">
            {/* Input Section */}
            <div className={`transition-all duration-500 ${generatedContent ? 'hidden lg:block lg:opacity-50 hover:opacity-100' : 'block'}`}>
              <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Create Your Content</h3>

                {/* Content Type Selector */}
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Content Type
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {contentTypes.map((ct) => (
                      <button
                        key={ct.id}
                        onClick={() => {
                          setContentType(ct.id)
                          setGeneratedContent(null)
                        }}
                        className={`p-3 rounded-lg border-2 transition-all text-left ${
                          contentType === ct.id
                            ? 'border-indigo-600 bg-indigo-50'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{ct.icon}</span>
                          <span className="text-sm font-medium text-slate-900">{ct.label}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tone Selector */}
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Tone
                  </label>
                  <div className="flex gap-2">
                    {(['professional', 'friendly', 'leadership'] as Tone[]).map((t) => (
                      <button
                        key={t}
                        onClick={() => setTone(t)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          tone === t
                            ? 'bg-indigo-600 text-white'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        {t.charAt(0).toUpperCase() + t.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input Field */}
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Your Input
                  </label>
                  <textarea
                    value={rawText}
                    onChange={(e) => setRawText(e.target.value)}
                    placeholder={
                      contentType === 'hiring' ? 'e.g., Senior Product Manager, Remote, 5+ years, Product strategy...' :
                      contentType === 'day-in-life' ? 'e.g., Morning standups, collaborative projects, team culture...' :
                      contentType === 'linkedin' ? 'e.g., Launched new feature, reached 1000 users, team milestone...' :
                      contentType === 'spotlight' ? 'e.g., Name, role, achievements, impact on team...' :
                      contentType === 'video' ? 'e.g., Key moments to show, team highlights, culture elements...' :
                      'e.g., Employee journey, challenges, growth, team impact...'
                    }
                    rows={10}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                  />
                </div>

                {/* Generate Button */}
                <button
                  onClick={handleGenerate}
                  disabled={!rawText.trim() || isGenerating}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-bold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isGenerating ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      Generate Content
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Output Section */}
            <div className="h-full">
              {!generatedContent && !isGenerating && (
                <div className="h-full border-2 border-dashed border-slate-200 rounded-xl flex items-center justify-center p-8 text-center bg-slate-50/50">
                  <div className="max-w-sm">
                    <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Sparkles className="w-8 h-8 text-indigo-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-700 mb-2">Your Content Will Appear Here</h3>
                    <p className="text-slate-500 text-sm">
                      Get done in seconds what usually takes hours. Just type your story → get scroll stopping content.
                    </p>
                  </div>
                </div>
              )}

              {isGenerating && (
                <div className="flex items-center justify-center h-full min-h-[400px]">
                  <div className="text-center">
                    <div className="relative w-16 h-16 mx-auto mb-4">
                      <div className="absolute top-0 left-0 w-full h-full border-4 border-slate-200 rounded-full"></div>
                      <div className="absolute top-0 left-0 w-full h-full border-4 border-indigo-500 rounded-full border-t-transparent animate-spin"></div>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-700 mb-2">Creating amazing content...</h3>
                    <p className="text-sm text-slate-500">This will take just a moment</p>
                  </div>
                </div>
              )}

              {generatedContent && !isGenerating && (
                <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200 h-full overflow-y-auto">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-slate-900">Generated Content</h3>
                    <button
                      onClick={handleReset}
                      className="text-sm text-slate-600 hover:text-slate-900 font-medium"
                    >
                      Generate New
                    </button>
                  </div>

                  <div className="space-y-6">
                    {/* Title */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-sm font-semibold text-slate-700">Title</h4>
                        <button
                          onClick={() => copyToClipboard(generatedContent.title)}
                          className="text-indigo-600 hover:text-indigo-700 text-sm font-medium"
                        >
                          <i className="fas fa-copy mr-1"></i> Copy
                        </button>
                      </div>
                      <p className="text-lg font-bold text-slate-900 bg-indigo-50 p-4 rounded-lg">
                        {generatedContent.title}
                      </p>
                    </div>

                    {/* Content */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-sm font-semibold text-slate-700">Content</h4>
                        <button
                          onClick={() => copyToClipboard(generatedContent.content)}
                          className="text-indigo-600 hover:text-indigo-700 text-sm font-medium"
                        >
                          <i className="fas fa-copy mr-1"></i> Copy
                        </button>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-lg whitespace-pre-wrap text-slate-800 text-sm leading-relaxed">
                        {generatedContent.content}
                      </div>
                    </div>

                    {/* Hashtags */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-sm font-semibold text-slate-700">Hashtags</h4>
                        <button
                          onClick={() => copyToClipboard(generatedContent.hashtags.join(' '))}
                          className="text-indigo-600 hover:text-indigo-700 text-sm font-medium"
                        >
                          <i className="fas fa-copy mr-1"></i> Copy
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {generatedContent.hashtags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="bg-indigo-100 text-indigo-700 px-3 py-1.5 rounded-lg text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-sm font-semibold text-slate-700">Call to Action</h4>
                        <button
                          onClick={() => copyToClipboard(generatedContent.cta)}
                          className="text-indigo-600 hover:text-indigo-700 text-sm font-medium"
                        >
                          <i className="fas fa-copy mr-1"></i> Copy
                        </button>
                      </div>
                      <p className="bg-blue-50 p-4 rounded-lg text-slate-800 italic text-sm">
                        {generatedContent.cta}
                      </p>
                    </div>

                    {/* Copy All Button */}
                    <div className="pt-4 border-t border-slate-200">
                      <button
                        onClick={() => {
                          const fullContent = `${generatedContent.title}\n\n${generatedContent.content}\n\n${generatedContent.hashtags.join(' ')}\n\n${generatedContent.cta}`
                          copyToClipboard(fullContent)
                        }}
                        className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                      >
                        <i className="fas fa-copy mr-2"></i>
                        Copy All Content
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
      
      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 py-4 z-40">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} BrandAdv AI. Employer Branding Content Studio for HR Teams & Startups.</p>
        </div>
      </footer>
    </div>
  )
}
