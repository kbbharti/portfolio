'use client'

import React, { useState } from 'react'
import Link from 'next/link'

type FeatureType = 'gtm-plan' | 'feature-email' | 'newsletter' | 'calendar' | 'persona-messaging' | 'landing-page'

interface FormData {
  productName: string
  featureDescription: string
  targetAudience: string
  launchDate: string
}

export default function LaunchPilotAIApp() {
  const [activeFeature, setActiveFeature] = useState<FeatureType | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    productName: 'AI-Powered Analytics Dashboard',
    featureDescription: 'Real-time analytics dashboard with automated insights, custom reports, and intelligent alerts that help teams make data-driven decisions faster. Includes drag-and-drop widgets, automated reporting, and smart anomaly detection.',
    targetAudience: 'Product Managers, Data Analysts, and Business Leaders',
    launchDate: 'January 15, 2026'
  })

  const mainFeatures = [
    {
      id: 'gtm-plan' as FeatureType,
      icon: '🚀',
      title: 'GTM Launch Plan Generator',
      description: 'Complete go to market strategy with timelines, channels, and metrics',
      color: 'from-blue-500 to-blue-600',
      gradient: 'bg-gradient-to-br from-blue-500 to-blue-600',
      demoFeatures: [
        'Executive summary and launch overview',
        'Phased timeline with weekly milestones',
        'Multi channel marketing strategy',
        'Success metrics and KPIs',
        'Stakeholder roles and responsibilities'
      ]
    },
    {
      id: 'feature-email' as FeatureType,
      icon: '📧',
      title: 'Feature Announcement Email Generator',
      description: 'Compelling announcement emails with subject lines and CTAs',
      color: 'from-purple-500 to-purple-600',
      gradient: 'bg-gradient-to-br from-purple-500 to-purple-600',
      demoFeatures: [
        'Three subject line variations',
        'Customer benefit focused content',
        'Clear call to action buttons',
        'Social proof and testimonials section',
        'Help resources and documentation links'
      ]
    },
    {
      id: 'newsletter' as FeatureType,
      icon: '📰',
      title: 'What\'s New Newsletter Generator',
      description: 'Convert product updates into engaging newsletter content',
      color: 'from-emerald-500 to-emerald-600',
      gradient: 'bg-gradient-to-br from-emerald-500 to-emerald-600',
      demoFeatures: [
        'Feature highlights with visual icons',
        'Getting started guide and tutorials',
        'Coming soon preview section',
        'Feedback and feature request CTAs',
        'Newsletter template best practices'
      ]
    },
    {
      id: 'calendar' as FeatureType,
      icon: '📅',
      title: 'Launch Calendar Builder',
      description: 'Strategic timeline planning with milestones and dependencies',
      color: 'from-orange-500 to-orange-600',
      gradient: 'bg-gradient-to-br from-orange-500 to-orange-600',
      demoFeatures: [
        'Pre launch, launch, and post launch phases',
        'Week by week breakdown with tasks',
        'Cross functional team coordination',
        'Critical path and dependencies mapping',
        'Daily launch day hour by hour schedule'
      ]
    },
    {
      id: 'persona-messaging' as FeatureType,
      icon: '👥',
      title: 'Persona Based Messaging Generator',
      description: 'Tailored messaging frameworks for different customer segments',
      color: 'from-indigo-500 to-indigo-600',
      gradient: 'bg-gradient-to-br from-indigo-500 to-indigo-600',
      demoFeatures: [
        'Three detailed persona profiles',
        'Pain points and goals for each segment',
        'Persona specific value propositions',
        'Objection handling and FAQs',
        'Competitive positioning framework'
      ]
    },
    {
      id: 'landing-page' as FeatureType,
      icon: '📄',
      title: 'Landing Page Copy & Value Prop Generator',
      description: 'High converting landing page content with value propositions',
      color: 'from-teal-500 to-teal-600',
      gradient: 'bg-gradient-to-br from-teal-500 to-teal-600',
      demoFeatures: [
        'Hero section with headline and subheadline',
        'Feature sections with benefits',
        'Customer testimonials and social proof',
        'Pricing teaser and comparison table',
        'FAQ section and final CTA'
      ]
    }
  ]

  const handleGenerate = () => {
    setIsGenerating(true)
    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false)
      setShowResult(true)
    }, 2000)
  }

  const handleReset = () => {
    setActiveFeature(null)
    setShowResult(false)
    setFormData({
      productName: 'AI-Powered Analytics Dashboard',
      featureDescription: 'Real-time analytics dashboard with automated insights, custom reports, and intelligent alerts that help teams make data-driven decisions faster. Includes drag-and-drop widgets, automated reporting, and smart anomaly detection.',
      targetAudience: 'Product Managers, Data Analysts, and Business Leaders',
      launchDate: 'January 15, 2026'
    })
  }

  const getDemoContent = (feature: FeatureType) => {
    const demos: Record<FeatureType, { title: string; content: string }> = {
      'gtm-plan': {
        title: 'GTM Launch Plan Generator',
        content: `# Go-to-Market Launch Plan
## Product: ${formData.productName || 'AI-Powered Analytics Dashboard'}

### Executive Summary
Launch a comprehensive analytics solution targeting ${formData.targetAudience || 'B2B SaaS companies'} with a focus on real-time insights and automated reporting.

### Launch Timeline
**Week 1-2:** Pre-launch preparation
• Finalize messaging and positioning
• Brief sales and customer success teams
• Set up tracking and analytics

**Week 3:** Soft launch
• Beta release to existing customers
• Gather initial feedback
• Monitor usage metrics

**Week 4:** Full launch
• Public announcement across all channels
• Press release and media outreach
• Launch event/webinar

### Target Channels
1. **Email Marketing**
   • Existing customer base announcement
   • Prospect nurture campaign
   • Partner notification

2. **Content Marketing**
   • Blog post series
   • Case studies
   • Video demos

3. **Social Media**
   • LinkedIn campaign
   • Twitter launch thread
   • Product Hunt launch

4. **Paid Advertising**
   • Google Ads
   • LinkedIn Ads
   • Retargeting campaigns

### Success Metrics
• 500 signups in first month
• 20% activation rate
• 50+ demo requests
• $50K in new MRR

### Key Stakeholders
• Product Marketing: Messaging & positioning
• Product: Feature readiness & demos
• Sales: Outreach & demos
• Customer Success: Onboarding
• Engineering: Support & monitoring`
      },
      'feature-email': {
        title: 'Feature Announcement Email Generator',
        content: `# Feature Announcement Email

## Subject Line Options:
1. 🚀 Introducing ${formData.productName || 'Our Latest Innovation'} - Transform Your Workflow
2. You asked, we delivered: ${formData.productName || 'Game-changing features'} is here
3. [New Feature] ${formData.productName || 'Boost your productivity'} - Available Now

---

## Email Body:

Hi [First Name],

We're excited to announce the launch of **${formData.productName || 'AI-Powered Analytics Dashboard'}** - a feature our customers have been asking for.

### What's New?

${formData.featureDescription || 'Real-time analytics dashboard with automated insights, custom reports, and intelligent alerts that help you make data-driven decisions faster.'}

### Why This Matters:

For ${formData.targetAudience || 'product managers and data analysts'}, this means:
✓ 80% faster report generation
✓ Real-time insights at your fingertips
✓ Automated alerts for key metrics
✓ Custom dashboards in minutes, not hours

### Get Started Today:

**[View Demo]** | **[Start Free Trial]** | **[Schedule a Call]**

The feature is available to all users starting ${formData.launchDate || 'today'}. No setup required - just log in and explore.

### Need Help?

Check out our comprehensive documentation or reach out to our support team.
[Help Center] | [Watch Tutorial]

Questions? Reply to this email or chat with our team.

Best regards,
The [Company] Team

---

**P.S.** Early adopters get exclusive access to our advanced features roadmap. [Join the Beta Program]

---

## Email Template Reference:

**Best Practices:**
• Keep subject lines under 50 characters
• Use clear, action-oriented CTAs
• Highlight customer benefits, not just features
• Include social proof when available
• Make it easy to get help or ask questions`
      },
      'newsletter': {
        title: '"What\'s New" Newsletter Generator',
        content: `# 📰 What's New Newsletter

## ${formData.productName || 'Product Updates'} - ${formData.launchDate || 'December 2025'}

Hello Team!

We've been busy building and shipping. Here's what's new this month.

---

## 🚀 New Feature: ${formData.productName || 'AI-Powered Analytics Dashboard'}

${formData.featureDescription || 'Get instant insights with our new analytics dashboard. Visualize your data, track key metrics, and make better decisions - all in real-time.'}

**Key Highlights:**
• Real-time data visualization
• Customizable dashboards
• Automated report generation
• Smart alerts and notifications

**Who is this for?**
Perfect for ${formData.targetAudience || 'product managers, data analysts, and team leaders'} who need quick access to key metrics.

**[Try it Now →]**

---

## 🎯 What You Can Do:

### Create Custom Dashboards
Build your perfect view in minutes with our drag-and-drop interface. No technical skills required.

### Set Up Automated Reports
Schedule reports to arrive in your inbox - daily, weekly, or monthly. Stay informed without lifting a finger.

### Get Smart Alerts
Never miss important changes. Set thresholds and get notified instantly when metrics move.

---

## 📚 Resources

**Getting Started:**
• 📺 [Watch 3-Minute Tutorial]
• 📖 [Read Documentation]
• 💬 [Join Live Q&A Session] ${formData.launchDate || 'Dec 15, 2pm EST'}

**Pro Tips:**
• Start with pre-built templates
• Customize widgets to match your workflow
• Share dashboards with your team

---

## 🔮 Coming Soon

We're not stopping here. On the roadmap:
• Advanced filtering and segmentation
• Mobile app for on the go insights
• AI powered anomaly detection
• Team collaboration features

---

## 💬 We Want to Hear From You

Have feedback or feature requests? We're all ears.
[Share Feedback] | [Request a Feature]

Happy building! 🚀

The Product Team

---

## Newsletter Template Reference:

**Structure:**
• Lead with the biggest announcement
• Use clear sections with icons
• Include multiple CTAs throughout
• Add a "Coming Soon" section
• End with feedback request

**Best Practices:**
• Keep it scannable with headers and bullets
• Use visuals when possible
• Link to detailed documentation
• Maintain consistent voice and tone`
      },
      'calendar': {
        title: 'Launch Calendar Builder',
        content: `# Launch Calendar: ${formData.productName || 'Product Launch'}

## Launch Date: ${formData.launchDate || 'December 15, 2025'}

---

## Phase 1: Pre-Launch (Weeks 1-2)

### Week 1: Planning & Preparation
**Monday-Tuesday: Internal Alignment**
• Finalize product messaging and positioning
• Brief cross functional teams (Sales, CS, Engineering)
• Review launch checklist and dependencies

**Wednesday-Thursday: Content Creation**
• Write announcement blog post
• Create feature documentation
• Prepare email templates
• Design social media assets

**Friday: Review & Approval**
• Stakeholder review of all materials
• Final QA of the feature
• Set up tracking and analytics

### Week 2: Soft Launch Preparation
**Monday-Tuesday: Beta Setup**
• Identify beta user group (50-100 users)
• Send beta invitation emails
• Set up feedback collection system

**Wednesday-Friday: Beta Launch**
• Enable feature for beta users
• Monitor usage and collect feedback
• Quick fixes for critical issues
• Prepare final launch materials

---

## Phase 2: Launch Week (Week 3)

### Launch Day ${formData.launchDate || 'December 15'}
**9:00 AM**
• Enable feature for all users
• Deploy in app announcement banner

**10:00 AM**
• Send launch email to customer base
• Publish blog post
• Share on social media (LinkedIn, Twitter)

**12:00 PM**
• Post to Product Hunt
• Engage with early commenters

**3:00 PM**
• Monitor metrics dashboard
• Review initial feedback
• Address any urgent issues

**5:00 PM**
• Send internal update to team
• Celebrate launch! 🎉

### Day 2-3: Momentum Building
• Share customer success stories
• Respond to questions and feedback
• Update documentation based on FAQs
• Continue social media engagement

### Day 4-5: Optimization
• Analyze usage data
• Identify adoption blockers
• Plan quick wins for improvements
• Prepare week 1 summary report

---

## Phase 3: Post-Launch (Week 4+)

### Week 4: Analysis & Iteration
**Monday: Data Review**
• Analyze adoption metrics
• Review customer feedback
• Identify improvement opportunities

**Tuesday-Wednesday: Planning**
• Prioritize enhancement requests
• Plan follow up communications
• Schedule customer interviews

**Thursday-Friday: Communication**
• Send "Week 1 Results" email
• Share success metrics internally
• Plan ongoing marketing activities

### Ongoing Activities
• Weekly usage reports
• Monthly feature spotlight content
• Quarterly roadmap updates
• Continuous improvement iterations

---

## Key Milestones & Dependencies

**Critical Path:**
1. ✅ Product ready for launch (Week 2, Friday)
2. ✅ All marketing materials approved (Week 2, Friday)
3. 🚀 Launch day execution (Week 3, ${formData.launchDate || 'Day 1'})
4. 📊 Week 1 analysis complete (Week 4, Monday)

**Dependencies:**
• Engineering: Feature completion by Week 2
• Design: All assets ready by Week 2
• Marketing: Content calendar finalized Week 1
• Sales: Team training completed Week 2
• CS: Support docs ready Week 2

---

## Success Metrics Tracking

**Week 1 Goals:**
• 500+ feature activations
• 70% email open rate
• 100+ social media engagements
• <5 critical bugs reported

**Month 1 Goals:**
• 2,000+ active users
• 20% weekly active usage
• 4.5+ star feedback rating
• 50+ customer testimonials

---

## Stakeholder Communication Schedule

**Daily Updates (Launch Week):**
• Morning: Metrics snapshot to leadership
• Evening: Progress update to cross functional team

**Weekly Updates (Post-Launch):**
• Monday: Performance dashboard review
• Friday: Week recap and next week preview

---

## Calendar Template Reference:

**Best Practices:**
• Build in buffer time for unexpected issues
• Align stakeholders early and often
• Plan communication cadence upfront
• Track dependencies explicitly
• Celebrate milestones with the team
• Keep a flexible mindset for adjustments`
      },
      'persona-messaging': {
        title: 'Persona-Based Messaging Generator',
        content: `# Messaging Framework: ${formData.productName || 'Product Name'}

## Core Value Proposition
Transform ${formData.targetAudience || 'your business operations'} with intelligent automation that saves time and drives results.

**One-Liner:**
${formData.productName || 'Our product'} helps ${formData.targetAudience || 'teams'} ${formData.featureDescription?.substring(0, 100) || 'work smarter, not harder'}.

---

## Persona 1: Product Managers

### Demographics & Role
• Title: Product Manager, Senior PM, Director of Product
• Company Size: Mid market to Enterprise
• Industry: SaaS, Technology, E commerce
• Reports to: VP Product, CPO

### Pain Points & Challenges
❌ Spending 10+ hours per week creating status reports
❌ Difficulty tracking metrics across multiple tools
❌ Manual data compilation from various sources
❌ Stakeholder updates taking time away from product work
❌ Limited visibility into user behavior and feature performance

### Goals & Motivations
✓ Ship features faster with data-driven decisions
✓ Keep stakeholders informed without manual work
✓ Spend more time on strategy, less on reporting
✓ Demonstrate product impact with clear metrics
✓ Improve team alignment and velocity

### Key Message
**"Ship faster with automated insights that keep your team aligned and stakeholders informed."**

### Value Propositions (Ranked)
1. **Save 10+ hours per week** on manual reporting and data compilation
2. **Real-time visibility** across all product metrics in one dashboard
3. **Automated stakeholder updates** so you can focus on building
4. **Data-driven decisions** with instant access to user behavior insights
5. **Team alignment** through shared dashboards and metrics

### Use Cases
• Weekly stakeholder update preparation
• Sprint planning with real time metrics
• Feature performance analysis
• User behavior tracking
• A/B test results monitoring

### Objection Handling
**"We already have analytics tools"**
→ Unlike traditional tools, we consolidate everything in one place and automate the reporting you do manually.

**"This sounds complex to set up"**
→ Get started in under 5 minutes with pre-built templates. No technical skills required.

**"We need custom metrics"**
→ Fully customizable to track any metric that matters to your product.

---

## Persona 2: Data Analysts

### Demographics & Role
• Title: Data Analyst, Analytics Manager, BI Analyst
• Company Size: All sizes
• Industry: Cross industry
• Reports to: Data Director, Analytics Lead, Product

### Pain Points & Challenges
❌ Repetitive SQL query writing for same reports
❌ Building identical reports every month
❌ Data scattered across multiple platforms
❌ Manual data cleaning and transformation
❌ Stakeholder requests taking up all their time

### Goals & Motivations
✓ Focus on deep analysis, not data prep
✓ Reduce repetitive, low-value work
✓ Provide faster insights to stakeholders
✓ Build scalable analytics infrastructure
✓ Demonstrate strategic value to the business

### Key Message
**"Focus on analysis, not data wrangling. Let AI handle the repetitive work."**

### Value Propositions (Ranked)
1. **Automated data aggregation** from all your sources
2. **Pre-built templates** for common analyses
3. **Custom dashboards** without writing SQL
4. **95% time savings** on routine reporting
5. **Self-service analytics** that empowers stakeholders

### Use Cases
• Automated daily/weekly report generation
• Ad hoc analysis without SQL
• Executive dashboard creation
• Trend analysis and forecasting
• Data democratization for non technical teams

### Objection Handling
**"We need full control over our queries"**
→ You still have full customization. We just eliminate the repetitive parts.

**"Our data is complex and unique"**
→ Built to handle complex data models. Customize everything to match your structure.

---

## Persona 3: Executives & Decision Makers

### Demographics & Role
• Title: VP, C Suite, Director, Head of Department
• Company Size: Mid market to Enterprise
• Industry: Cross industry
• Decision Authority: High budget authority

### Pain Points & Challenges
❌ Lack of real-time visibility into business metrics
❌ Delayed insights impacting decision speed
❌ Information overload from multiple tools
❌ Dependence on team for data and reports
❌ Difficulty seeing the full picture quickly

### Goals & Motivations
✓ Make confident, data-driven decisions fast
✓ Monitor business health in real-time
✓ Spot problems before they escalate
✓ Lead with insights, not gut feelings
✓ Demonstrate results to board/investors

### Key Message
**"Make confident decisions with real-time insights delivered when you need them."**

### Value Propositions (Ranked)
1. **Executive dashboard** with all key metrics in one view
2. **Intelligent alerts** that flag anomalies automatically
3. **Real-time visibility** instead of waiting for reports
4. **Mobile access** to check metrics anywhere, anytime
5. **Consolidated view** across teams and departments

### Use Cases
• Board meeting preparation
• Daily business health monitoring
• Strategic planning with historical trends
• Crisis response with real time data
• ROI tracking and reporting

### Objection Handling
**"We have a BI team for this"**
→ Empower yourself with instant access instead of waiting for reports.

**"This is too detailed for executives"**
→ Pre-configured executive views show only what matters. Drill down when needed.

---

## Competitive Positioning

### vs. Traditional BI Tools (Tableau, PowerBI)
**They say:** Powerful enterprise analytics platform
**We say:** Get insights in minutes, not months - no training required

**Key Differentiators:**
• 10x faster setup (minutes vs. weeks)
• No technical skills required
• AI powered automation
• Modern, intuitive interface

### vs. Spreadsheets (Excel, Google Sheets)
**They say:** Flexible and familiar
**We say:** Automated, real-time, and scalable - no manual work

**Key Differentiators:**
• Automated data updates
• Real time collaboration
• No version control issues
• Built in best practices

### vs. Custom-Built Solutions
**They say:** Tailored to our exact needs
**We say:** Ready to use today - no engineering resources needed

**Key Differentiators:**
• Zero engineering time required
• Launch in days, not quarters
• Continuous updates and improvements
• No maintenance burden

---

## Proof Points & Social Proof

### Quantitative Results
- ⚡ **10x faster** report generation
- 🎯 **95% reduction** in manual data work
- ⭐ **4.8/5** customer satisfaction rating
- 📈 **3,000+** companies using our platform
- ⏱️ **<5 minutes** average setup time

### Customer Testimonials
*"We went from spending 15 hours a week on reports to 15 minutes. Game changer for our product team."*
— Sarah Chen, Senior PM at [Company]

*"Finally, analytics that doesn't require a PhD. Our entire team can now make data-driven decisions."*
— Michael Rodriguez, VP Product at [Company]

---

## Messaging Template Reference:

**Framework Structure:**
1. Persona definition (demographics, role, company)
2. Pain points (what keeps them up at night)
3. Goals & motivations (what they want to achieve)
4. Core message (single sentence value prop)
5. Ranked value propositions (specific benefits)
6. Use cases (how they'll use it)
7. Objection handling (common concerns + responses)
8. Competitive positioning (vs. alternatives)
9. Proof points (data + testimonials)

**Best Practices:**
• Lead with pain points, not features
• Use persona's language and terminology
• Quantify value whenever possible
• Address objections proactively
• Include social proof specific to persona
• Keep messaging concise and scannable`
      },
      'landing-page': {
        title: 'Landing Page Copy & Value Prop Generator',
        content: `# Landing Page Copy: ${formData.productName || 'Product Name'}

## Hero Section

### Headline
**${formData.productName || 'Transform Your Workflow'} for ${formData.targetAudience || 'Modern Teams'}**

### Subheadline
${formData.featureDescription || 'Get real-time insights and automated analytics without the complexity. Launch in minutes, see results today.'}

### Primary CTA
**[Start Free Trial]** - No credit card required

### Secondary CTA
**[Watch 2-Min Demo]** or **[Schedule Live Demo]**

### Hero Image/Video
[Dashboard preview showing key features and real data visualizations]

### Social Proof Line
Trusted by 3,000+ companies including [LogoBar: Company 1, Company 2, Company 3]

---

## Value Proposition Section

### Section Title
**Why ${formData.productName || 'Product Name'}?**

### Three Core Benefits

**⚡ Lightning Fast Setup**
Get started in under 5 minutes. Pre-built templates mean you're productive from day one. No technical skills or training required.

**🎯 All Your Data, One Place**
Connect all your tools and see everything in a unified dashboard. No more switching between platforms or manual data compilation.

**🤖 Automated Intelligence**
AI-powered insights and alerts mean you never miss what matters. Focus on decisions, not data wrangling.

---

## Features Section

### Section Title
**Everything You Need to Make Better Decisions**

### Feature 1: Custom Dashboards
**Build Your Perfect View**
Drag-and-drop interface makes it easy to create dashboards tailored to your workflow. Choose from 50+ pre-built widgets or build your own.

**Key Points:**
• No coding required
• Real-time data updates
• Fully customizable layouts
• Share with your team instantly

**[See Dashboard Examples →]**

### Feature 2: Automated Reports
**Insights Delivered to Your Inbox**
Schedule reports to arrive daily, weekly, or monthly. Spend less time creating presentations, more time taking action.

**Key Points:**
• Multiple export formats (PDF, PPT, CSV)
• Customizable templates
• Automated scheduling
• Smart summarization

**[View Sample Report →]**

### Feature 3: Smart Alerts
**Never Miss What Matters**
Set thresholds and get notified instantly when metrics change. Intelligent anomaly detection flags issues before they become problems.

**Key Points:**
• Real-time notifications
• Custom alert rules
• Slack/Email/SMS integration
• AI-powered anomaly detection

**[Configure Alerts →]**

### Feature 4: Team Collaboration
**Align Your Entire Organization**
Share dashboards, leave comments, and make decisions together. Everyone sees the same data, in real-time.

**Key Points:**
• Unlimited team members
• Role-based permissions
• Real-time collaboration
• Activity feed and comments

**[Learn About Teams →]**

---

## Social Proof Section

### Section Title
**Loved by ${formData.targetAudience || 'Product Teams'} Worldwide**

### Testimonial 1
*"We went from spending 15 hours a week on reports to 15 minutes. Complete game changer for our product team."*

**Sarah Chen**
Senior Product Manager, TechCorp
⭐⭐⭐⭐⭐

### Testimonial 2
*"Finally, analytics that doesn't require a PhD. Our entire team can now make data-driven decisions without waiting for the data team."*

**Michael Rodriguez**
VP of Product, GrowthStart
⭐⭐⭐⭐⭐

### Testimonial 3
*"The ROI was immediate. We identified a $50K revenue leak in the first week. This tool paid for itself 10x over."*

**Jennifer Park**
Head of Analytics, DataDrive
⭐⭐⭐⭐⭐

### Stats Section
**By the Numbers**

**10x Faster**
Report generation time

**95% Time Saved**
On manual data work

**4.8/5 Stars**
Customer satisfaction

**3,000+ Companies**
Trust our platform

---

## Use Cases Section

### Section Title
**Built for How You Work**

### Use Case 1: Product Managers
**Ship Faster with Data-Driven Decisions**
Track feature adoption, monitor user behavior, and keep stakeholders informed - all without manual reporting.

[Read PM Guide →]

### Use Case 2: Data Analysts
**Focus on Insights, Not Data Prep**
Automate routine reports, build self-service dashboards for stakeholders, and spend your time on high-value analysis.

[Read Analyst Guide →]

### Use Case 3: Executives
**Make Confident Decisions Faster**
Monitor business health in real-time, get alerted to anomalies, and access key metrics from anywhere.

[Read Executive Guide →]

---

## Comparison Section

### Section Title
**How We Compare**

| Feature | ${formData.productName || 'Us'} | Traditional BI | Spreadsheets |
|---------|------|----------------|--------------|
| Setup Time | 5 minutes | 2-3 months | Hours-Days |
| Technical Skills | None required | SQL, Data modeling | Formula knowledge |
| Automation | Full automation | Manual queries | Manual updates |
| Real-time Data | ✅ Yes | ⚠️ Depends | ❌ No |
| AI Insights | ✅ Included | ❌ No | ❌ No |
| Maintenance | ✅ Zero | 🔧 High | 🔧 Medium |
| Cost | $$ | $$$$ | $ |

---

## Pricing Teaser Section

### Section Title
**Simple, Transparent Pricing**

**Starter**
$29/month
• Up to 5 users
• Unlimited dashboards
• Basic integrations
• Email support

**Professional** ⭐ Most Popular
$99/month
• Unlimited users
• Advanced features
• All integrations
• Priority support

**Enterprise**
Custom pricing
• Custom features
• Dedicated support
• SLA guarantee
• On-premise option

**[View Full Pricing →]**

---

## FAQ Section

### Section Title
**Frequently Asked Questions**

**How long does it take to set up?**
Most customers are up and running in under 5 minutes. Our pre-built templates mean you don't start from scratch.

**Do I need technical skills?**
No! The interface is designed for non-technical users. If you can use a spreadsheet, you can use our platform.

**What tools do you integrate with?**
We connect to 100+ data sources including all major databases, CRMs, analytics platforms, and business tools.

**Can I try it before buying?**
Absolutely! Start with a 14-day free trial. No credit card required.

**What if I need help?**
We offer email support for all plans, priority support for Professional, and dedicated support for Enterprise customers.

**Is my data secure?**
Yes. We're SOC 2 Type II certified with bank-level encryption. Your data is always private and secure.

**[View All FAQs →]**

---

## Final CTA Section

### Section Title
**Ready to Transform Your Decision-Making?**

### Subtext
Join 3,000+ companies making better decisions with ${formData.productName || 'our platform'}. Start your free trial today.

### Primary CTA
**[Start Free Trial]**
No credit card required • 14-day trial • Cancel anytime

### Secondary CTA
**[Schedule Demo]** or **[Talk to Sales]**

### Trust Badges
[Security Badge] SOC 2 Certified | [SSL Badge] Bank-Level Security | [Support Badge] 24/7 Support

---

## Landing Page Template Reference:

**Page Structure:**
1. Hero (headline, subhead, CTA, social proof)
2. Value props (3 core benefits)
3. Features (4-6 key features with details)
4. Social proof (testimonials + stats)
5. Use cases (3 persona-specific scenarios)
6. Comparison (vs. alternatives)
7. Pricing teaser
8. FAQ (address objections)
9. Final CTA

**Best Practices:**
• Lead with the problem you solve
• Use customer language, not jargon
• Include specific, quantifiable results
• Show, don't just tell (use visuals)
• Address objections proactively in FAQ
• Multiple CTAs throughout page
• Social proof at every section
• Mobile responsive design
• Fast load times (<3 seconds)
• Clear visual hierarchy

**SEO Optimization:**
• Target keyword in H1
• LSI keywords throughout
• Meta description (155 chars)
• Alt text for all images
• Internal linking strategy
• Schema markup for reviews`
      }
    }
    return demos[feature]
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/sideprojects/launchpilot-ai"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              <i className="fas fa-arrow-left"></i>
              Back
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <i className="fas fa-rocket text-white text-lg"></i>
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">LaunchPilot AI</h1>
                <p className="text-xs text-gray-500">Demo Mode</p>
              </div>
            </div>
            <div className="w-16"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!activeFeature ? (
          /* Dashboard View */
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Launch Your Product 10× Faster
              </h2>
              <p className="text-xl text-gray-600">
                Choose what you need to create. Click any card below to see a live demo.
              </p>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mainFeatures.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(feature.id)}
                  className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-300 text-left overflow-hidden"
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  <div className="relative">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-16 h-16 rounded-xl ${feature.gradient} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {feature.description}
                        </p>
                        
                        {/* Unique Demo Features for this generator */}
                        <div className="space-y-2 mt-4 pt-4 border-t border-gray-100">
                          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Demo Includes:</p>
                          {feature.demoFeatures.slice(0, 3).map((demoFeature, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <i className="fas fa-check text-green-500 text-xs mt-1"></i>
                              <span className="text-sm text-gray-600">{demoFeature}</span>
                            </div>
                          ))}
                          {feature.demoFeatures.length > 3 && (
                            <div className="text-xs text-gray-500 mt-2">
                              + {feature.demoFeatures.length - 3} more features
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100">
                      <span className="text-sm font-medium text-gray-500">Click to try demo</span>
                      <i className="fas fa-arrow-right text-blue-600 group-hover:translate-x-2 transition-transform duration-300"></i>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Dashboard Info Section */}
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* How It Works */}
              <div className="bg-white border-2 border-blue-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
                    <i className="fas fa-lightbulb text-white text-lg"></i>
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">How It Works</h3>
                </div>
                <ol className="space-y-3 text-sm text-gray-700">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 font-bold flex items-center justify-center text-xs">1</span>
                    <span>Click any feature card to start</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 font-bold flex items-center justify-center text-xs">2</span>
                    <span>Review pre-filled demo data or customize it</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 font-bold flex items-center justify-center text-xs">3</span>
                    <span>Generate professional launch content instantly</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 font-bold flex items-center justify-center text-xs">4</span>
                    <span>Copy and customize for your needs</span>
                  </li>
                </ol>
              </div>

              {/* What You Get */}
              <div className="bg-white border-2 border-purple-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-600 flex items-center justify-center">
                    <i className="fas fa-gift text-white text-lg"></i>
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">What You Get</h3>
                </div>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <i className="fas fa-check-circle text-green-500 mt-0.5"></i>
                    <span>Complete, ready-to-use launch materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fas fa-check-circle text-green-500 mt-0.5"></i>
                    <span>Professional templates with best practices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fas fa-check-circle text-green-500 mt-0.5"></i>
                    <span>Industry-standard formats and structures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fas fa-check-circle text-green-500 mt-0.5"></i>
                    <span>Personalized content based on your inputs</span>
                  </li>
                </ul>
              </div>

              {/* Demo Notice */}
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-yellow-500 flex items-center justify-center">
                    <i className="fas fa-info-circle text-white text-lg"></i>
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">Demo Mode</h3>
                </div>
                <div className="space-y-3 text-sm text-gray-700">
                  <p>
                    This is a demonstration with pre-filled sample data showing how LaunchPilot AI works.
                  </p>
                  <div className="bg-white/50 rounded-lg p-3 border border-yellow-200">
                    <p className="font-semibold text-gray-900 mb-2">Sample Product:</p>
                    <p className="text-xs text-gray-600">AI-Powered Analytics Dashboard launching January 2026</p>
                  </div>
                  <p className="text-xs text-gray-600">
                    💡 You can edit the demo data to see personalized results
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Dashboard */}
            <div className="mt-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-center">Launch Content Generated in Seconds</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">6</div>
                  <div className="text-blue-100 text-sm">Launch Tools</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">10x</div>
                  <div className="text-blue-100 text-sm">Faster Creation</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">90%</div>
                  <div className="text-blue-100 text-sm">Time Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <div className="text-blue-100 text-sm">Professional Quality</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Feature Detail View */
          <div className="space-y-6">
            <button
              onClick={handleReset}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors mb-4"
            >
              <i className="fas fa-arrow-left"></i>
              Back to Dashboard
            </button>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              {/* Feature Header */}
              <div className={`${mainFeatures.find(f => f.id === activeFeature)?.gradient} p-8 text-white`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-5xl">
                    {mainFeatures.find(f => f.id === activeFeature)?.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-2">
                      {mainFeatures.find(f => f.id === activeFeature)?.title}
                    </h2>
                    <p className="text-white/90 text-lg">
                      {mainFeatures.find(f => f.id === activeFeature)?.description}
                    </p>
                  </div>
                </div>
              </div>

              {!showResult ? (
                /* Input Form */
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Product Details
                    </h3>
                    <p className="text-sm text-gray-600">
                      Pre-filled with demo data. Edit any field to customize your content.
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Product/Feature Name *
                      </label>
                      <input
                        type="text"
                        value={formData.productName}
                        onChange={(e) => setFormData({...formData, productName: e.target.value})}
                        placeholder="e.g., AI-Powered Analytics Dashboard"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Feature Description *
                      </label>
                      <textarea
                        value={formData.featureDescription}
                        onChange={(e) => setFormData({...formData, featureDescription: e.target.value})}
                        placeholder="Describe what this product/feature does and its key benefits..."
                        rows={4}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Target Audience *
                        </label>
                        <input
                          type="text"
                          value={formData.targetAudience}
                          onChange={(e) => setFormData({...formData, targetAudience: e.target.value})}
                          placeholder="e.g., Product Managers, Data Analysts"
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Launch Date
                        </label>
                        <input
                          type="text"
                          value={formData.launchDate}
                          onChange={(e) => setFormData({...formData, launchDate: e.target.value})}
                          placeholder="e.g., December 15, 2025"
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        />
                      </div>
                    </div>

                    <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
                      <div className="flex gap-3">
                        <i className="fas fa-magic text-blue-600 text-xl mt-0.5"></i>
                        <div className="text-sm text-gray-700">
                          <p className="font-semibold text-gray-900 mb-1">✨ Demo Data Pre-filled</p>
                          <p>All fields contain sample data. Click "Generate" to see results instantly, or edit any field to personalize your content.</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <button
                        onClick={handleGenerate}
                        disabled={isGenerating}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                      >
                        {isGenerating ? (
                          <>
                            <i className="fas fa-spinner fa-spin"></i>
                            Generating...
                          </>
                        ) : (
                          <>
                            <i className="fas fa-magic"></i>
                            Generate {mainFeatures.find(f => f.id === activeFeature)?.title}
                          </>
                        )}
                      </button>
                      <button
                        onClick={handleReset}
                        className="px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                /* Generated Result */
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900">
                      Generated Content
                    </h3>
                    <div className="flex gap-3">
                      <button
                        onClick={() => {
                          const content = getDemoContent(activeFeature!)?.content || ''
                          navigator.clipboard.writeText(content)
                          alert('Copied to clipboard!')
                        }}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2"
                      >
                        <i className="fas fa-copy"></i>
                        Copy Content
                      </button>
                      <button
                        onClick={() => setShowResult(false)}
                        className="px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all"
                      >
                        Edit Details
                      </button>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 prose prose-lg max-w-none">
                    <div className="markdown-content">
                      {getDemoContent(activeFeature!)?.content.split('\n').map((line: string, index: number) => {
                        // Handle headers
                        if (line.startsWith('# ')) {
                          return <h1 key={index} className="text-3xl font-bold text-gray-900 mt-6 mb-4">{line.substring(2)}</h1>
                        }
                        if (line.startsWith('## ')) {
                          return <h2 key={index} className="text-2xl font-bold text-gray-900 mt-6 mb-3">{line.substring(3)}</h2>
                        }
                        if (line.startsWith('### ')) {
                          return <h3 key={index} className="text-xl font-bold text-gray-900 mt-4 mb-2">{line.substring(4)}</h3>
                        }
                        
                        // Handle bold text with **
                        if (line.includes('**')) {
                          const parts = line.split('**')
                          return (
                            <p key={index} className="text-gray-700 mb-3 leading-relaxed">
                              {parts.map((part: string, i: number) => 
                                i % 2 === 0 ? part : <strong key={i} className="font-bold text-gray-900">{part}</strong>
                              )}
                            </p>
                          )
                        }
                        
                        // Handle list items
                        if (line.trim().startsWith('- ') || line.trim().startsWith('• ') || line.trim().startsWith('✓ ')) {
                          return (
                            <li key={index} className="text-gray-700 mb-2 ml-6">
                              {line.trim().substring(2)}
                            </li>
                          )
                        }
                        
                        // Handle numbered lists
                        if (/^\d+\./.test(line.trim())) {
                          return (
                            <li key={index} className="text-gray-700 mb-2 ml-6">
                              {line.trim().substring(line.trim().indexOf('.') + 1).trim()}
                            </li>
                          )
                        }
                        
                        // Handle horizontal rules
                        if (line.trim() === '---') {
                          return <hr key={index} className="my-6 border-gray-300" />
                        }
                        
                        // Handle empty lines
                        if (line.trim() === '') {
                          return <div key={index} className="h-2"></div>
                        }
                        
                        // Regular paragraph
                        return <p key={index} className="text-gray-700 mb-3 leading-relaxed">{line}</p>
                      })}
                    </div>
                  </div>

                  <div className="mt-6 flex gap-4">
                    <button
                      onClick={() => {
                        setShowResult(false)
                        setFormData({
                          productName: '',
                          featureDescription: '',
                          targetAudience: '',
                          launchDate: ''
                        })
                      }}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                    >
                      <i className="fas fa-sync-alt"></i>
                      Generate Another
                    </button>
                    <button
                      onClick={handleReset}
                      className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all"
                    >
                      Back to Dashboard
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
