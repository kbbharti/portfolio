
import React from 'react';
import { Bot, Sparkles, LayoutTemplate, History, PenTool } from 'lucide-react';
import { AppView } from '../types';

interface HeaderProps {
  currentView: AppView;
  onNavigate: (view: AppView) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  const getLinkClass = (view: AppView) => {
    return `flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
      currentView === view 
        ? 'text-indigo-600 bg-indigo-50 font-semibold' 
        : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50'
    }`;
  };

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <button 
          onClick={() => onNavigate('generator')}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <div className="bg-indigo-600 p-2 rounded-lg">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold text-slate-900 tracking-tight">IntcommAI</span>
        </button>
        
        <nav className="hidden md:flex items-center gap-2 text-sm font-medium">
          <button 
            onClick={() => onNavigate('generator')}
            className={getLinkClass('generator')}
          >
            <PenTool className="w-4 h-4" />
            Generator
          </button>
          
          <button 
            onClick={() => onNavigate('templates')}
            className={getLinkClass('templates')}
          >
            <LayoutTemplate className="w-4 h-4" />
            Templates
          </button>
          
          <button 
            onClick={() => onNavigate('history')}
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
  );
};
