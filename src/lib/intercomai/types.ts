export enum Tone {
  PROFESSIONAL = 'Professional',
  FRIENDLY = 'Friendly',
  LEADERSHIP = 'Leadership',
  URGENT = 'Urgent',
  EMPATHETIC = 'Empathetic',
  ENTHUSIASTIC = 'Enthusiastic'
}

export enum Format {
  EMAIL = 'Email',
  ANNOUNCEMENT = 'Announcement',
  NEWSLETTER = 'Newsletter Section',
  SLACK = 'Slack/Teams Message'
}

export enum Language {
  ENGLISH = 'English',
  SPANISH = 'Spanish',
  FRENCH = 'French',
  GERMAN = 'German',
  MANDARIN = 'Mandarin',
  JAPANESE = 'Japanese',
  PORTUGUESE = 'Portuguese'
}

export interface GenerationSettings {
  tone: Tone;
  format: Format;
  targetAudience: string;
  language: Language;
}

export interface GeneratedContent {
  subjectLines: string[];
  content: string;
  summary: string;
  callToAction: string;
}

export interface ComplianceIssue {
  phrase: string;
  reason: string;
  suggestion: string;
  severity: 'low' | 'medium' | 'high';
}

export interface ComplianceResult {
  score: number;
  status: 'Safe' | 'Warning' | 'Critical';
  issues: ComplianceIssue[];
  overallFeedback: string;
}

export interface GenerationState {
  status: 'idle' | 'generating' | 'success' | 'error';
  error?: string;
  data?: GeneratedContent;
}

export interface ComplianceState {
  status: 'idle' | 'checking' | 'success' | 'error';
  data?: ComplianceResult;
  error?: string;
}

export type AppView = 'generator' | 'templates' | 'history';

export interface HistoryItem {
  id: string;
  timestamp: number;
  rawText: string;
  settings: GenerationSettings;
  result: GeneratedContent;
}

export interface Template {
  id: string;
  title: string;
  description: string;
  icon?: string;
  rawText: string;
  settings: GenerationSettings;
}
