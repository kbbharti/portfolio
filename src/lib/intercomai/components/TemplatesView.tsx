
import React from 'react';
import { LayoutTemplate, ArrowRight, ShieldAlert, PartyPopper, Briefcase, Megaphone, Users, Calendar } from 'lucide-react';
import { GenerationSettings, Tone, Format, Language, Template } from '../types';

interface TemplatesViewProps {
  onSelect: (template: Template) => void;
}

const TEMPLATES: Template[] = [
  {
    id: 'leadership-update',
    title: 'Leadership Quarterly Update',
    description: 'Share key wins, strategic focus areas, and financial results with the entire company.',
    rawText: "Q3 Results: Exceeded revenue targets by 15%.\nStrategic Focus: AI integration and market expansion.\nKey Wins: Launched Product X, closed deal with Big Corp.\nThank you to the team for resilience and hard work.\nReminder of upcoming All Hands meeting.",
    settings: {
      tone: Tone.LEADERSHIP,
      format: Format.EMAIL,
      targetAudience: 'All Employees',
      language: Language.ENGLISH
    }
  },
  {
    id: 'policy-change',
    title: 'Policy Change Announcement',
    description: 'Clearly communicate changes to HR policies, benefits, or office protocols.',
    rawText: "Subject: Updates to Remote Work Policy.\nEffective Date: Next Month, 1st.\nChange: Moving to 3 days in-office, 2 days remote.\nReason: To foster better collaboration and culture.\nNext Steps: Discuss schedules with managers by Friday.",
    settings: {
      tone: Tone.PROFESSIONAL,
      format: Format.ANNOUNCEMENT,
      targetAudience: 'All Staff',
      language: Language.ENGLISH
    }
  },
  {
    id: 'crisis-response',
    title: 'Urgent Incident Response',
    description: 'Address system outages, security incidents, or external events swiftly and calmly.',
    rawText: "Incident: Email server outage.\nStatus: IT team is investigating immediately.\nImpact: External emails may be delayed.\nAction Required: Use Slack for urgent internal comms.\nNext Update: We will provide an update in 1 hour.",
    settings: {
      tone: Tone.URGENT,
      format: Format.SLACK,
      targetAudience: 'All Employees',
      language: Language.ENGLISH
    }
  },
  {
    id: 'team-celebration',
    title: 'Team Celebration / Social',
    description: 'Boost morale by inviting the team to a social event, holiday party, or milestone celebration.',
    rawText: "Event: Annual Summer Picnic.\nWhen: Friday, July 15th at 2 PM.\nWhere: Central Park Pavilion.\nDetails: Food and drinks provided. Family friendly.\nRSVP: Please reply by Wednesday.\nLet's celebrate our recent launch success!",
    settings: {
      tone: Tone.ENTHUSIASTIC,
      format: Format.EMAIL,
      targetAudience: 'Team Members',
      language: Language.ENGLISH
    }
  },
  {
    id: 'new-hire',
    title: 'New Hire Welcome',
    description: 'Introduce a new team member to the department or company.',
    rawText: "Name: Sarah Jones.\nRole: Senior Product Manager.\nBackground: 10 years experience in SaaS, previously at TechCorp.\nFun Fact: Avid marathon runner.\nCall to Action: Please stop by her desk to say hi.",
    settings: {
      tone: Tone.FRIENDLY,
      format: Format.EMAIL,
      targetAudience: 'Product Department',
      language: Language.ENGLISH
    }
  },
  {
    id: 'change-management',
    title: 'Change Management Update',
    description: 'Guide employees through organizational changes or restructuring with empathy.',
    rawText: "Topic: Department Restructuring.\nGoal: Streamline operations and speed up decision making.\nImpact: Teams A and B merging into 'Operations'.\nSupport: Managers will have 1:1s today.\nTone: Reassuring and forward-looking.",
    settings: {
      tone: Tone.EMPATHETIC,
      format: Format.EMAIL,
      targetAudience: 'Affected Departments',
      language: Language.ENGLISH
    }
  }
];

export const TemplatesView: React.FC<TemplatesViewProps> = ({ onSelect }) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Choose a Template</h2>
        <p className="text-slate-600">
          Start with a pre-configured scenario to save time. We've set the optimal tone and format for common internal communications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TEMPLATES.map((template) => (
          <div 
            key={template.id}
            className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-indigo-300 transition-all cursor-pointer group flex flex-col"
            onClick={() => onSelect(template)}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-indigo-50 rounded-lg text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                {template.id === 'leadership-update' && <Briefcase className="w-6 h-6" />}
                {template.id === 'policy-change' && <Megaphone className="w-6 h-6" />}
                {template.id === 'crisis-response' && <ShieldAlert className="w-6 h-6" />}
                {template.id === 'team-celebration' && <PartyPopper className="w-6 h-6" />}
                {template.id === 'new-hire' && <Users className="w-6 h-6" />}
                {template.id === 'change-management' && <LayoutTemplate className="w-6 h-6" />}
              </div>
            </div>
            
            <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
              {template.title}
            </h3>
            
            <p className="text-slate-600 text-sm mb-6 flex-1">
              {template.description}
            </p>

            <div className="flex items-center text-sm font-semibold text-indigo-600 gap-2 group-hover:translate-x-1 transition-transform">
              Use Template <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
