import { GenerationSettings, GeneratedContent, ComplianceResult } from "../types";

// Demo mode - returns dummy data for demonstration purposes
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const generateDemoContent = (rawText: string, settings: GenerationSettings): GeneratedContent => {
  const tone = settings.tone;
  const format = settings.format;
  const audience = settings.targetAudience;
  
  // Extract key points from raw text
  const lines = rawText.split('\n').filter(line => line.trim());
  const keyPoints = lines.slice(0, 4).map(line => line.replace(/^[-*•]\s*/, '').trim());
  const hasPoints = keyPoints.length > 0;
  
  // Generate subject lines based on tone
  const subjectLines = {
    'Professional': [
      `Important Update for ${audience}`,
      'Key Information - Action Required',
      'Official Announcement: Please Review'
    ],
    'Friendly': [
      `Hey ${audience}! 👋 Quick Update`,
      '📣 Exciting News to Share!',
      'Let\'s Talk About Some Changes'
    ],
    'Leadership': [
      'A Strategic Message from Leadership',
      'Our Path Forward: Key Updates',
      'Leading Together: Important Announcement'
    ],
    'Urgent': [
      '🚨 URGENT: Immediate Action Required',
      '⚠️ Time-Sensitive Update',
      'Critical Notice - Response Needed Today'
    ],
    'Empathetic': [
      'An Important Message for Our Team',
      'Supporting You Through Changes',
      'We\'re Here for You: Update Inside'
    ],
    'Enthusiastic': [
      '🎉 Amazing News You\'ll Love!',
      '🚀 Exciting Developments Ahead!',
      '✨ Something Special Is Happening!'
    ]
  };

  // Generate content based on format and tone
  const generateFormattedContent = () => {
    const isEmail = format === 'Email';
    const isAnnouncement = format === 'Announcement';
    const isNewsletter = format === 'Newsletter Section';
    const isSlack = format === 'Slack/Teams Message';
    
    let content = '';
    
    // Header section based on format
    if (isEmail) {
      content += `---\n\n**To:** ${audience}  \n`;
      content += `**From:** ${tone === 'Leadership' ? 'Leadership Team' : tone === 'Friendly' ? 'Your Team' : 'Management'}  \n`;
      content += `**Date:** ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}  \n`;
      content += `**Subject:** Important Update\n\n---\n\n`;
    } else if (isAnnouncement) {
      content += `# 📢 ANNOUNCEMENT\n\n`;
      content += `**${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}**\n\n`;
      content += `---\n\n`;
    } else if (isNewsletter) {
      content += `# 📰 Newsletter Update\n\n`;
      content += `*${new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} Edition*\n\n`;
      content += `---\n\n`;
    }
    
    // Opening greeting
    const greetings = {
      'Professional': `Dear ${audience},`,
      'Friendly': `Hi team! 👋`,
      'Leadership': 'Team,',
      'Urgent': `${audience} -`,
      'Empathetic': 'Dear colleagues,',
      'Enthusiastic': `Hello everyone! 🌟`
    };
    
    content += `${greetings[tone as keyof typeof greetings] || `Dear ${audience},`}\n\n`;
    
    // Opening paragraph
    const openings = {
      'Professional': `We are writing to inform you of important updates that will impact our team operations. Please review the following information carefully and take note of the action items outlined below.`,
      'Friendly': `Hope you're having a great day! I wanted to reach out with some updates that I think you'll find really interesting. Let me walk you through what's happening! 😊`,
      'Leadership': `As we continue to drive our organization forward, I want to share some strategic updates that reflect our commitment to excellence and innovation. Your dedication makes all the difference, and keeping you informed is essential to our collective success.`,
      'Urgent': `⚠️ **This message requires your immediate attention.** Please read the following information carefully and complete the required actions by end of business today. Time is critical.`,
      'Empathetic': `I understand that changes and updates can sometimes feel overwhelming, which is why I want to take a moment to share some important information with you in a thoughtful way. We're committed to supporting you through any transitions.`,
      'Enthusiastic': `🎉 I am absolutely thrilled to share some fantastic news with you! This is something we've been working really hard on, and I can't wait to tell you all about it. Get ready for something amazing!`
    };
    
    content += `${openings[tone as keyof typeof openings] || openings['Professional']}\n\n`;
    
    // Key points section
    if (hasPoints && keyPoints.length > 0) {
      content += `## ${tone === 'Enthusiastic' ? '🌟 ' : tone === 'Urgent' ? '⚠️ ' : ''}Key Highlights\n\n`;
      keyPoints.forEach((point, idx) => {
        content += `${idx + 1}. **${point}**\n\n`;
      });
    } else {
      content += `## ${tone === 'Enthusiastic' ? '🌟 ' : ''}What's Happening\n\n`;
      content += `1. **Initiative Launch**: We're rolling out new processes to enhance team collaboration\n\n`;
      content += `2. **Timeline**: Implementation begins next week with full rollout by month end\n\n`;
      content += `3. **Training**: Comprehensive support and training sessions will be provided\n\n`;
      content += `4. **Benefits**: Improved efficiency, better communication, and streamlined workflows\n\n`;
    }
    
    content += `---\n\n`;
    
    // What this means section
    const meanings = {
      'Professional': `### Impact and Implications\n\nThese updates represent our ongoing commitment to operational excellence and continuous improvement. We have carefully considered the implications and believe these changes will create positive outcomes for our team and organization.\n\n**Expected Benefits:**\n- Enhanced operational efficiency\n- Improved team collaboration\n- Streamlined processes and workflows\n- Better resource allocation`,
      'Friendly': `### What This Means for You 💡\n\nThis is all about making things better for everyone! We're super committed to creating an amazing workplace where you can do your best work and thrive. These changes have been designed with *you* in mind.\n\n**The good stuff:**\n- Your day-to-day work gets easier\n- More time for what really matters\n- Better tools and support\n- A happier, more productive team!`,
      'Leadership': `### Strategic Context\n\nThese initiatives align directly with our long-term vision and strategic objectives. By making these adjustments now, we position ourselves for sustained growth and market leadership.\n\n**Strategic Benefits:**\n- Strengthens our competitive position\n- Aligns with industry best practices\n- Supports our growth trajectory\n- Demonstrates organizational agility`,
      'Urgent': `### Critical Action Required ⚠️\n\n**This is not optional.** These changes take effect immediately and require prompt action from all team members. Failure to comply by the specified deadline could result in:\n\n- Operational disruptions\n- System access issues\n- Compliance violations\n- Project delays\n\n**Your immediate attention is mandatory.**`,
      'Empathetic': `### Understanding the Impact\n\nWe recognize that any change can feel uncertain, and we want you to know that we've carefully considered how this affects you. Your wellbeing and success are our top priorities.\n\n**Our commitments to you:**\n- Full transparency throughout the process\n- Dedicated support resources\n- Open communication channels\n- Your feedback actively shapes our approach`,
      'Enthusiastic': `### This Is Going to Be AMAZING! 🚀\n\nSeriously, this is such exciting stuff! We're not just making changes—we're creating incredible opportunities for everyone to grow, innovate, and achieve amazing things together.\n\n**Why you'll love this:**\n- Game-changing improvements\n- More opportunities for success\n- Cutting-edge tools and resources\n- A more dynamic, energized workplace!`
    };
    
    content += `${meanings[tone as keyof typeof meanings] || meanings['Professional']}\n\n`;
    content += `---\n\n`;
    
    // Action items
    content += `## ${tone === 'Urgent' ? '⏰ ' : ''}Next Steps\n\n`;
    
    if (tone === 'Urgent') {
      content += `**DEADLINE: ${new Date(Date.now() + 86400000).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - END OF DAY**\n\n`;
    }
    
    const actionItems = {
      'Professional': [
        'Review all information and documentation thoroughly',
        'Complete the required acknowledgment form by Friday',
        'Contact your supervisor with any questions or concerns',
        'Attend the information session scheduled for next week'
      ],
      'Friendly': [
        'Take a few minutes to review the details when you can',
        'Drop me a message if you have any questions (seriously, anytime!)',
        'Join us for the casual Q&A session next Tuesday',
        'Share your thoughts and feedback - we really want to hear from you!'
      ],
      'Leadership': [
        'Review this communication with your direct reports',
        'Provide feedback through official channels by end of week',
        'Align your team objectives with these strategic priorities',
        'Attend the leadership briefing session'
      ],
      'Urgent': [
        '**IMMEDIATE:** Review this message in its entirety right now',
        '**REQUIRED:** Complete mandatory actions by 5 PM today',
        '**CRITICAL:** Confirm completion through the system',
        '**NO EXCEPTIONS:** Contact emergency hotline if unable to comply'
      ],
      'Empathetic': [
        'Take time to process this information - there\'s no rush',
        'Reach out to your manager if you need clarification or support',
        'Access our dedicated support resources anytime',
        'Join optional discussion forums to share your thoughts'
      ],
      'Enthusiastic': [
        'Get excited and spread the word to your team!',
        'Sign up for the kickoff celebration next week',
        'Share your ideas and creative input - we want to hear them!',
        'Join the innovation challenge and win awesome prizes!'
      ]
    };
    
    const items = actionItems[tone as keyof typeof actionItems] || actionItems['Professional'];
    items.forEach((item, idx) => {
      content += `${idx + 1}. ${item}\n\n`;
    });
    
    if (isSlack) {
      content += `\n💬 *React with ✅ when you've read this*\n`;
    }
    
    content += `---\n\n`;
    
    // Closing section
    const closings = {
      'Professional': `### Questions or Concerns?\n\nIf you require additional information or clarification, please contact your direct supervisor or the HR department at your earliest convenience.\n\n**Thank you for your attention to this matter.**`,
      'Friendly': `### Let's Chat! 💬\n\nQuestions? Ideas? Just want to talk things through? My door is always open (virtually or in-person!). We're all in this together, and your input really matters.\n\n**Thanks for being such an amazing team!** You're the best! 🎉`,
      'Leadership': `### Moving Forward Together\n\nYour professionalism and dedication during this period are deeply appreciated. Together, we will continue to achieve remarkable results and maintain our position as industry leaders.\n\n**With gratitude and confidence in our shared success,**`,
      'Urgent': `### Compliance is Mandatory\n\nThis directive is effective immediately. Non-compliance will be documented and may result in disciplinary action. If you are unable to complete the required actions, contact your supervisor immediately.\n\n**Your immediate cooperation is expected.**`,
      'Empathetic': `### We're Here to Support You\n\nRemember, you're not alone in this. We have resources, support systems, and people ready to help. If you're feeling uncertain or overwhelmed, please reach out—that's what we're here for.\n\n**Your wellbeing matters to us.** 💙`,
      'Enthusiastic': `### Let's Make This Incredible! 🌟\n\nI'm so pumped about what's ahead! Your energy, creativity, and passion are what make everything possible. Together, we're going to achieve something truly special.\n\n**Here's to amazing things ahead!** 🚀✨`
    };
    
    content += `${closings[tone as keyof typeof closings] || closings['Professional']}\n\n`;
    
    // Signature
    const signatures = {
      'Professional': 'Management Team  \n*Internal Communications*',
      'Friendly': 'Your Friendly Team 😊  \n*Always here to help!*',
      'Leadership': 'The Leadership Team  \n*Leading with purpose, executing with excellence*',
      'Urgent': 'Operations Management  \n*Effective immediately*',
      'Empathetic': 'Your Support Team  \n*Here for you, always*',
      'Enthusiastic': 'The Dream Team 🎊  \n*Making magic happen!*'
    };
    
    content += `---\n\n${signatures[tone as keyof typeof signatures] || signatures['Professional']}\n\n`;
    
    // Footer
    if (isEmail) {
      content += `---\n\n*This is an internal communication. Please do not forward outside the organization.*`;
    } else if (isSlack) {
      content += `_For questions, reach out in #general or DM me directly_`;
    }
    
    return content;
  };

  const summaries = {
    'Professional': "Professional organizational update with clear action items for all team members",
    'Friendly': "Friendly team announcement about upcoming changes in a casual, approachable tone",
    'Leadership': "Strategic communication from leadership outlining key organizational updates and direction",
    'Urgent': "Urgent update requiring immediate team action with end-of-day deadline",
    'Empathetic': "Supportive message acknowledging change while providing resources and reassurance",
    'Enthusiastic': "High-energy announcement celebrating positive developments and encouraging engagement"
  };

  const ctas = {
    'Professional': "Review and Acknowledge",
    'Friendly': "Let's Chat About This!",
    'Leadership': "Review Strategic Plan",
    'Urgent': "Take Action Now",
    'Empathetic': "Reach Out for Support",
    'Enthusiastic': "Get Involved Today!"
  };

  return {
    subjectLines: subjectLines[tone as keyof typeof subjectLines] || subjectLines['Professional'],
    content: generateFormattedContent(),
    summary: summaries[tone as keyof typeof summaries] || summaries['Professional'],
    callToAction: ctas[tone as keyof typeof ctas] || ctas['Professional']
  };
};

const generateDemoCompliance = (content: string, tone: string): ComplianceResult => {
  const hasAbsoluteLanguage = content.toLowerCase().includes('promise') || content.toLowerCase().includes('guarantee');
  const hasUrgentTone = content.includes('🚨') || content.toLowerCase().includes('immediate');
  
  if (hasAbsoluteLanguage) {
    return {
      score: 72,
      status: 'Warning',
      overallFeedback: 'The communication is generally good but contains some phrases that could be improved for compliance.',
      issues: [
        {
          phrase: 'absolute guarantee',
          reason: 'Using absolute promises can create legal liability',
          suggestion: 'Consider using "we are committed to" or "our goal is to" instead',
          severity: 'medium'
        }
      ]
    };
  } else if (hasUrgentTone) {
    return {
      score: 85,
      status: 'Safe',
      overallFeedback: 'The urgent tone is appropriate and the message is clear. Minor improvements could enhance readability.',
      issues: [
        {
          phrase: 'immediate action required',
          reason: 'Very direct language may cause stress',
          suggestion: 'Consider providing a specific timeframe to reduce anxiety',
          severity: 'low'
        }
      ]
    };
  }
  
  return {
    score: 95,
    status: 'Safe',
    overallFeedback: 'Excellent communication! The tone is appropriate, language is inclusive, and the message is clear and professional.',
    issues: []
  };
};

export const generateCommunication = async (
  rawText: string,
  settings: GenerationSettings
): Promise<GeneratedContent> => {
  // Simulate API call delay for realistic demo experience
  await delay(2000);
  
  return generateDemoContent(rawText, settings);
};

export const checkCompliance = async (
  content: string,
  tone: string
): Promise<ComplianceResult> => {
  // Simulate API call delay
  await delay(1500);
  
  return generateDemoCompliance(content, tone);
};
