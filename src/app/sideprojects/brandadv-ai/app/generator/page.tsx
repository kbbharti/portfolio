'use client'

import React, { useState } from 'react'
import Link from 'next/link'

type ContentType = 'day-in-life' | 'hiring' | 'linkedin' | 'stories' | 'hashtags' | 'graphics' | 'spotlight' | 'video'

interface GeneratorConfig {
  id: ContentType
  title: string
  icon: string
  placeholder: string
  prompts: string[]
}

export default function ContentGenerator() {
  const [selectedType, setSelectedType] = useState<ContentType>('hiring')
  const [inputText, setInputText] = useState('')
  const [tone, setTone] = useState<'professional' | 'friendly' | 'leadership'>('professional')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedContent, setGeneratedContent] = useState<{
    title: string
    content: string
    hashtags: string[]
    cta: string
    hasPreview?: boolean
  } | null>(null)

  const generators: GeneratorConfig[] = [
    {
      id: 'day-in-life',
      title: 'Day in the Life',
      icon: '📅',
      placeholder: 'Describe a typical day for this role (e.g., Software Engineer, Marketing Manager)',
      prompts: ['What does a typical morning look like?', 'What are the main responsibilities?', 'What makes this role unique?']
    },
    {
      id: 'hiring',
      title: 'Hiring Announcement',
      icon: '📢',
      placeholder: 'Enter job title and key details (e.g., Senior Product Manager, Remote, 5+ years experience)',
      prompts: ['Job title and level', 'Key requirements', 'What makes this opportunity exciting?']
    },
    {
      id: 'linkedin',
      title: 'LinkedIn Post',
      icon: '💼',
      placeholder: 'Describe the milestone, culture moment, or achievement you want to share',
      prompts: ['What happened?', 'Why is it significant?', 'Who was involved?']
    },
    {
      id: 'stories',
      title: 'Employee Story',
      icon: '✨',
      placeholder: 'Paste raw notes or bullet points about an employee\'s journey or achievement',
      prompts: ['Employee background', 'Key achievement or story', 'Impact on the team']
    },
    {
      id: 'hashtags',
      title: 'Hashtag & CTA',
      icon: '#️⃣',
      placeholder: 'Enter your post content to generate relevant hashtags and call-to-action',
      prompts: ['Post topic', 'Target audience', 'Desired action']
    },
    {
      id: 'graphics',
      title: 'Branded Graphics',
      icon: '🎨',
      placeholder: 'Describe the graphic you need (e.g., Job announcement for UX Designer)',
      prompts: ['Main message', 'Visual style preference', 'Platform (LinkedIn, Instagram, etc.)']
    },
    {
      id: 'spotlight',
      title: 'Employee Spotlight',
      icon: '⭐',
      placeholder: 'Enter Q&A responses or key points about the employee',
      prompts: ['Employee name and role', 'Years at company', 'Key accomplishments or fun facts']
    },
    {
      id: 'video',
      title: 'Video Script',
      icon: '🎥',
      placeholder: 'Describe the culture moment or story for the video',
      prompts: ['Video purpose', 'Key message', 'Desired length (15s, 30s, 60s)']
    }
  ]

  const currentGenerator = generators.find(g => g.id === selectedType) || generators[0]

  const generateContent = async () => {
    if (!inputText.trim()) return

    setIsGenerating(true)
    
    // Simulate AI generation
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Mock generated content based on type
    const mockContent: Record<ContentType, { title: string; content: string; hashtags: string[]; cta: string; hasPreview?: boolean }> = {
      'hiring': {
        title: '🚀 We\'re Hiring: Join Our Growing Team!',
        content: `Exciting news! We're looking for a talented professional to join our team.\n\n${inputText}\n\nWhat we offer:\n✨ Competitive salary and benefits\n🌟 Professional growth opportunities\n💼 Flexible work environment\n🎯 Impact-driven projects\n\nReady to make a difference? We'd love to hear from you!`,
        hashtags: ['#Hiring', '#JobOpportunity', '#JoinOurTeam', '#CareerGrowth', '#WeAreHiring'],
        cta: 'Apply now or share with someone who\'d be a great fit!'
      },
      'day-in-life': {
        title: '📅 A Day in the Life: Inside Our Team',
        content: `Ever wondered what a typical day looks like at our company?\n\n${inputText}\n\nFrom morning standups to collaborative brainstorming sessions, every day brings new challenges and opportunities to grow.\n\n☕ Morning: Team sync and priority setting\n💻 Midday: Deep work and collaboration\n🎯 Afternoon: Innovation time and project work\n🌟 Always: Learning and growth`,
        hashtags: ['#DayInTheLife', '#CompanyCulture', '#TeamLife', '#WorkCulture', '#EmployeeExperience'],
        cta: 'Want to be part of our journey? Check out our open positions!'
      },
      'linkedin': {
        title: '🎉 Celebrating Our Team Success',
        content: `We're thrilled to share some exciting news!\n\n${inputText}\n\nThis achievement reflects our team's dedication, innovation, and collaborative spirit. We're proud of what we've accomplished together and excited for what's ahead.\n\nThank you to everyone who contributed to this milestone! 🙌`,
        hashtags: ['#TeamSuccess', '#CompanyMilestone', '#ProudMoment', '#TeamWork', '#Celebration'],
        cta: 'Like and share to celebrate with us!'
      },
      'stories': {
        title: '✨ Employee Spotlight: Inspiring Stories',
        content: `Meet one of our amazing team members!\n\n${inputText}\n\nTheir journey showcases the growth opportunities, supportive culture, and meaningful work that define our company. Stories like these remind us why we do what we do.\n\n💡 Innovation meets passion\n🌟 Growth through challenges\n🤝 Team support every step`,
        hashtags: ['#EmployeeSpotlight', '#TeamStories', '#PeopleFirst', '#CompanyCulture', '#EmployeeSuccess'],
        cta: 'Follow us to hear more inspiring stories from our team!'
      },
      'hashtags': {
        title: '🏷️ Optimized Hashtags & CTA',
        content: `Based on your content, here are the most effective hashtags:\n\nPrimary: Target your core audience\nSecondary: Expand reach\nTrending: Tap into current conversations\n\n${inputText}`,
        hashtags: ['#EmployerBranding', '#TalentAcquisition', '#CompanyCulture', '#WeAreHiring', '#GreatPlaceToWork', '#CareerOpportunity', '#JoinUs'],
        cta: 'Ready to boost engagement? Use these hashtags strategically in your next post!'
      },
      'graphics': {
        title: '🎨 Branded Graphic Design Brief',
        content: `Your branded graphic template is ready!\n\n${inputText}\n\nDesign elements:\n🎨 Brand colors and logo placement\n📐 Professional layout optimized for social\n✨ Eye-catching visual hierarchy\n📱 Mobile-optimized dimensions\n\nExport options: LinkedIn (1200x627), Instagram (1080x1080), Story (1080x1920)\n\n📋 REFERENCE EXAMPLE:\n\n[Banner Preview]\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n│  [LOGO]                        │\n│                                 │\n│  🎯 WE'RE HIRING!              │\n│                                 │\n│  ${inputText.split('\n')[0] || 'Position Title'}              │\n│                                 │\n│  ✨ Join our innovative team   │\n│  🚀 Remote-friendly             │\n│  💡 Competitive benefits        │\n│                                 │\n│  Apply Now → www.company.com   │\n│                                 │\n│         [Background Pattern]    │\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nColor Palette:\n• Primary: #8B5CF6 (Purple)\n• Secondary: #EC4899 (Pink)\n• Accent: #10B981 (Green)\n• Background: #F9FAFB (Light Gray)\n\nTypography:\n• Headline: Bold, 48px\n• Subheadline: Semi-bold, 24px\n• Body: Regular, 16px`,
        hashtags: ['#GraphicDesign', '#EmployerBranding', '#SocialMedia', '#BrandIdentity', '#VisualContent'],
        cta: 'Download your template and start posting!',
        hasPreview: true
      },
      'spotlight': {
        title: '⭐ Employee Spotlight Feature',
        content: `Introducing an exceptional member of our team!\n\n${inputText}\n\n🎯 Role & Impact: Making a difference every day\n💡 Innovation: Bringing fresh ideas to life\n🌟 Growth: Continuous learning and development\n🤝 Team Player: Collaboration at its finest\n\nWe're lucky to have talented people who bring their whole selves to work!`,
        hashtags: ['#EmployeeSpotlight', '#TeamMember', '#PeopleOfOurCompany', '#MeetTheTeam', '#EmployeeRecognition'],
        cta: 'Follow us to meet more of our incredible team members!'
      },
      'video': {
        title: '🎥 Culture Video Script',
        content: `📹 COMPLETE VIDEO PRODUCTION GUIDE\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nVIDEO CONCEPT: ${inputText}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n🎬 SCENE-BY-SCENE BREAKDOWN\n\n[OPENING - 0:00-0:03]\n📹 Visual: Dynamic company logo reveal with motion graphics\n🎤 Audio: Upbeat music intro (high energy)\n📝 Text Overlay: "Life at [Company Name]"\n\n[SCENE 1 - 0:03-0:08]\n📹 Visual: Wide shot of office/workspace, team members collaborating\n🎤 Voiceover: "Every day brings new opportunities..."\n📝 Text Overlay: "Innovation Happens Here"\n💡 Shot Type: Drone/establishing shot\n\n[SCENE 2 - 0:08-0:15]\n📹 Visual: Close-ups of employees working, smiling, high-fiving\n🎤 Audio: Ambient office sounds + music\n📝 Text Overlay: Employee testimonial quotes\n💡 Shot Type: B-roll montage (4-5 quick cuts)\n\n[SCENE 3 - 0:15-0:22]\n📹 Visual: Team meeting, brainstorming, diverse perspectives\n🎤 Voiceover: "Where ideas become reality..."\n📝 Text Overlay: Key company values\n💡 Shot Type: Medium shots with natural movement\n\n[SCENE 4 - 0:22-0:28]\n📹 Visual: Product/service impact, customer success stories\n🎤 Audio: Music builds to climax\n📝 Text Overlay: Company mission statement\n💡 Shot Type: Impact shots with emotional resonance\n\n[CLOSING - 0:28-0:30]\n📹 Visual: Company logo + "We\'re Hiring" message\n🎤 Audio: Music outro (powerful finish)\n📝 Text Overlay: "Join Our Team → careers.company.com"\n💡 Effect: Clean fade to branded end card\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n🎵 MUSIC & AUDIO GUIDE\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n• Style: Upbeat, inspiring, modern corporate\n• BPM: 120-130 (energetic but not overwhelming)\n• Mood: Optimistic, confident, inclusive\n• Suggested Tracks:\n  - "Rising Together" (Epidemic Sound)\n  - "Innovation Drive" (Artlist)\n  - "Team Spirit" (AudioJungle)\n\nSound Effects:\n• Whoosh transitions between scenes\n• Subtle typing/clicking for office ambiance\n• Positive notification sounds for achievements\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📸 B-ROLL SHOT LIST (30+ clips)\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nOffice Environment:\n✓ Wide shot of workspace (golden hour lighting)\n✓ Coffee/kitchen area interactions\n✓ Modern office design details\n✓ Collaborative spaces in use\n\nTeam Interactions:\n✓ Whiteboard brainstorming sessions\n✓ High-fives and fist bumps\n✓ Team lunch or coffee breaks\n✓ Video call with remote team members\n✓ Mentor-mentee conversations\n\nWork in Action:\n✓ Hands typing on keyboard (close-up)\n✓ Screens showing product/code\n✓ Notebook sketches and planning\n✓ Product demos or presentations\n\nCulture Moments:\n✓ Team celebrations (birthdays, wins)\n✓ Casual conversations and laughter\n✓ Diverse team members (various angles)\n✓ Office pets or fun workspace elements\n\nImpact Shots:\n✓ Customer testimonials (if available)\n✓ Product in use by end users\n✓ Awards or recognition displays\n✓ Community involvement activities\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📱 PLATFORM OPTIMIZATION\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nLinkedIn (1:1 or 16:9):\n• Add captions (80% watch without sound)\n• Keep first 3 seconds super engaging\n• Include company logo in first frame\n\nInstagram Feed (1:1):\n• Vertical-friendly framing\n• Bright, vibrant colors\n• Quick cuts every 2-3 seconds\n\nInstagram Reels/TikTok (9:16):\n• Vertical format\n• Text overlays for key points\n• Trending audio considerations\n\nYouTube (16:9):\n• Longer format option (1-2 min)\n• Include intro/outro branding\n• End screen with CTAs\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n🎨 TEXT OVERLAY EXAMPLES\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n"Where Innovation Meets Passion"\n"Join 500+ Talented Professionals"\n"Build. Grow. Succeed. Together."\n"Your Next Career Move Starts Here"\n"Making Impact, One Day at a Time"\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n✅ PRE-PRODUCTION CHECKLIST\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n□ Get employee consent forms signed\n□ Scout shooting locations\n□ Coordinate employee availability\n□ Prepare interview questions (if applicable)\n□ Charge all camera equipment\n□ Test audio equipment\n□ Prepare shot list for crew\n□ Set up proper lighting\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
        hashtags: ['#CompanyCulture', '#BehindTheScenes', '#TeamVideo', '#LifeAtCompany', '#CultureVideo', '#EmployerBranding'],
        cta: 'Tag someone who should see this!',
        hasPreview: true
      }
    }

    setGeneratedContent(mockContent[selectedType])
    setIsGenerating(false)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    alert('Copied to clipboard!')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 pb-24">
      {/* Demo Banner */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium">
            ✨ Demo Mode: This application uses simulated AI responses for demonstration purposes
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link 
            href="/sideprojects/brandadv-ai/app"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            <i className="fas fa-arrow-left"></i>
            Back to Overview
          </Link>
          <h1 className="text-xl font-bold text-gray-900">
            Content Generator
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Content Type Selector */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Choose Content Type</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {generators.map((gen) => (
              <button
                key={gen.id}
                onClick={() => {
                  setSelectedType(gen.id)
                  setGeneratedContent(null)
                  setInputText('')
                }}
                className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                  selectedType === gen.id
                    ? 'border-blue-600 bg-blue-50 shadow-lg scale-105'
                    : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md'
                }`}
              >
                <div className="text-4xl mb-2">{gen.icon}</div>
                <div className="text-sm font-semibold text-gray-900">{gen.title}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-3xl">{currentGenerator.icon}</span>
              {currentGenerator.title}
            </h3>

            {/* Tone Selector */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Tone
              </label>
              <div className="flex gap-2">
                {(['professional', 'friendly', 'leadership'] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTone(t)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      tone === t
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {t.charAt(0).toUpperCase() + t.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Prompts */}
            <div className="mb-4 bg-blue-50 p-4 rounded-lg">
              <p className="text-sm font-semibold text-blue-900 mb-2">Quick Prompts:</p>
              <ul className="text-sm text-blue-700 space-y-1">
                {currentGenerator.prompts.map((prompt, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    {prompt}
                  </li>
                ))}
              </ul>
            </div>

            {/* Input Field */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Your Input
              </label>
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={currentGenerator.placeholder}
                rows={8}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>

            {/* Generate Button */}
            <button
              onClick={generateContent}
              disabled={!inputText.trim() || isGenerating}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-bold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isGenerating ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Generating...
                </>
              ) : (
                <>
                  <i className="fas fa-magic"></i>
                  Generate Content
                </>
              )}
            </button>
          </div>

          {/* Output Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Generated Content</h3>

            {!generatedContent && !isGenerating && (
              <div className="flex items-center justify-center h-full min-h-[400px] text-center">
                <div>
                  <div className="text-6xl mb-4">✨</div>
                  <p className="text-gray-500">Your generated content will appear here</p>
                </div>
              </div>
            )}

            {isGenerating && (
              <div className="flex items-center justify-center h-full min-h-[400px]">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
                  <p className="text-gray-700 font-medium">Creating amazing content...</p>
                </div>
              </div>
            )}

            {generatedContent && !isGenerating && (
              <div className="space-y-6">
                {/* Visual Preview for Graphics */}
                {generatedContent.hasPreview && selectedType === 'graphics' && (
                  <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-6 rounded-xl">
                    <div className="bg-white rounded-lg p-8 shadow-2xl">
                      <div className="text-center space-y-6">
                        <div className="flex justify-between items-center">
                          <div className="text-sm font-bold text-blue-600">COMPANY LOGO</div>
                          <div className="text-xs text-gray-400">LinkedIn • 1200x627</div>
                        </div>
                        <div className="space-y-3">
                          <div className="text-4xl">🎯</div>
                          <h2 className="text-3xl font-bold text-gray-900">WE&apos;RE HIRING!</h2>
                          <p className="text-xl font-semibold text-blue-600">
                            {inputText.split('\n')[0] || 'Position Title'}
                          </p>
                          <div className="space-y-2 text-left max-w-md mx-auto">
                            <div className="flex items-center gap-2 text-gray-700">
                              <span>✨</span>
                              <span>Join our innovative team</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-700">
                              <span>🚀</span>
                              <span>Remote-friendly</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-700">
                              <span>💡</span>
                              <span>Competitive benefits</span>
                            </div>
                          </div>
                          <div className="pt-4">
                            <div className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-bold">
                              Apply Now →
                            </div>
                          </div>
                        </div>
                        <div className="text-xs text-gray-400 pt-4 border-t">
                          www.company.com/careers
                        </div>
                      </div>
                    </div>
                    <p className="text-white text-center text-sm mt-4">
                      ✨ Preview: Your branded hiring banner
                    </p>
                  </div>
                )}

                {/* Title */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-700">Title</h4>
                    <button
                      onClick={() => copyToClipboard(generatedContent.title)}
                      className="text-blue-600 hover:text-blue-800 text-sm"
                    >
                      <i className="fas fa-copy"></i> Copy
                    </button>
                  </div>
                  <p className="text-lg font-bold text-gray-900 bg-blue-50 p-3 rounded-lg">
                    {generatedContent.title}
                  </p>
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-700">Content</h4>
                    <button
                      onClick={() => copyToClipboard(generatedContent.content)}
                      className="text-blue-600 hover:text-blue-800 text-sm"
                    >
                      <i className="fas fa-copy"></i> Copy
                    </button>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg whitespace-pre-wrap text-gray-800">
                    {generatedContent.content}
                  </div>
                </div>

                {/* Hashtags */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-700">Hashtags</h4>
                    <button
                      onClick={() => copyToClipboard(generatedContent.hashtags.join(' '))}
                      className="text-blue-600 hover:text-blue-800 text-sm"
                    >
                      <i className="fas fa-copy"></i> Copy
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {generatedContent.hashtags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-700">Call to Action</h4>
                    <button
                      onClick={() => copyToClipboard(generatedContent.cta)}
                      className="text-blue-600 hover:text-blue-800 text-sm"
                    >
                      <i className="fas fa-copy"></i> Copy
                    </button>
                  </div>
                  <p className="bg-blue-50 p-3 rounded-lg text-gray-800 italic">
                    {generatedContent.cta}
                  </p>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-gray-200 flex gap-3">
                  <button
                    onClick={() => {
                      const fullContent = `${generatedContent.title}\n\n${generatedContent.content}\n\n${generatedContent.hashtags.join(' ')}\n\n${generatedContent.cta}`
                      copyToClipboard(fullContent)
                    }}
                    className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    <i className="fas fa-copy mr-2"></i>
                    Copy All
                  </button>
                  <button
                    onClick={() => setGeneratedContent(null)}
                    className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                  >
                    <i className="fas fa-redo mr-2"></i>
                    Generate New
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
