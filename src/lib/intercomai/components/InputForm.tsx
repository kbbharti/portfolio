import React from 'react';
import { Settings2, PenTool, Users, FileType, Globe } from 'lucide-react';
import { Tone, Format, Language, GenerationSettings } from '../types';

interface InputFormProps {
  rawText: string;
  setRawText: (text: string) => void;
  settings: GenerationSettings;
  setSettings: (settings: GenerationSettings) => void;
  onSubmit: () => void;
  isGenerating: boolean;
}

export const InputForm: React.FC<InputFormProps> = ({
  rawText,
  setRawText,
  settings,
  setSettings,
  onSubmit,
  isGenerating
}) => {
  const handleChange = <K extends keyof GenerationSettings>(
    key: K,
    value: GenerationSettings[K]
  ) => {
    setSettings({ ...settings, [key]: value });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden h-full flex flex-col">
      <div className="p-4 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
        <h2 className="font-semibold text-slate-800 flex items-center gap-2">
          <PenTool className="w-4 h-4 text-indigo-500" />
          Drafting Workspace
        </h2>
        <span className="text-xs text-slate-500 font-medium px-2 py-1 bg-white rounded border border-slate-200">
          Step 1 of 2
        </span>
      </div>

      <div className="p-6 flex-1 flex flex-col gap-6 overflow-y-auto">
        {/* Configuration Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Format */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <FileType className="w-3.5 h-3.5" /> Format
            </label>
            <div className="relative">
              <select
                value={settings.format}
                onChange={(e) => handleChange('format', e.target.value as Format)}
                className="w-full appearance-none bg-white border border-slate-300 text-slate-900 py-2.5 px-3 pr-8 rounded-lg leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm font-medium transition-shadow"
              >
                {Object.values(Format).map((fmt) => (
                  <option key={fmt} value={fmt}>{fmt}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>

          {/* Tone */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <Settings2 className="w-3.5 h-3.5" /> Tone
            </label>
            <div className="relative">
              <select
                value={settings.tone}
                onChange={(e) => handleChange('tone', e.target.value as Tone)}
                className="w-full appearance-none bg-white border border-slate-300 text-slate-900 py-2.5 px-3 pr-8 rounded-lg leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm font-medium transition-shadow"
              >
                {Object.values(Tone).map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>

          {/* Language */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5" /> Language
            </label>
            <div className="relative">
              <select
                value={settings.language}
                onChange={(e) => handleChange('language', e.target.value as Language)}
                className="w-full appearance-none bg-white border border-slate-300 text-slate-900 py-2.5 px-3 pr-8 rounded-lg leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm font-medium transition-shadow"
              >
                {Object.values(Language).map((lang) => (
                  <option key={lang} value={lang}>{lang}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>

          {/* Audience */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5" /> Audience
            </label>
            <input
              type="text"
              value={settings.targetAudience}
              onChange={(e) => handleChange('targetAudience', e.target.value)}
              placeholder="e.g. All Employees"
              className="w-full bg-white border border-slate-300 text-slate-900 py-2.5 px-3 rounded-lg leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm transition-shadow placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Text Area */}
        <div className="flex-1 flex flex-col space-y-2 min-h-[200px]">
          <label className="text-sm font-bold text-slate-900">
            Raw Notes / Key Points
          </label>
          <textarea
            value={rawText}
            onChange={(e) => setRawText(e.target.value)}
            placeholder="Paste your rough notes here.&#10;Example:&#10;- New remote work policy starts June 1st&#10;- Hybrid model: 3 days in office, 2 days remote&#10;- Need to update calendar by Friday&#10;- Town hall meeting on Thursday to discuss details..."
            className="flex-1 w-full p-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none bg-slate-900 text-white placeholder:text-slate-400 leading-relaxed font-mono text-sm shadow-inner"
          />
        </div>

        <button
          onClick={onSubmit}
          disabled={isGenerating || !rawText.trim()}
          className={`w-full py-4 px-6 rounded-lg text-white font-semibold text-lg shadow-lg flex items-center justify-center gap-2 transition-all transform active:scale-[0.99] ${
            isGenerating || !rawText.trim()
              ? 'bg-slate-300 cursor-not-allowed shadow-none'
              : 'bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 shadow-indigo-500/30'
          }`}
        >
          {isGenerating ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Polishing your text...
            </>
          ) : (
            <>
              Generate Communication
              <Settings2 className="w-5 h-5" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};
