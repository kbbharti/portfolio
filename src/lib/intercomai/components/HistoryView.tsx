
import React from 'react';
import { History, Calendar, Trash2, FileText } from 'lucide-react';
import { HistoryItem } from '../types';

interface HistoryViewProps {
  history: HistoryItem[];
  onLoad: (item: HistoryItem) => void;
  onClear: () => void;
}

export const HistoryView: React.FC<HistoryViewProps> = ({ history, onLoad, onClear }) => {
  if (history.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-96 text-center animate-in fade-in duration-500">
        <div className="bg-slate-100 p-6 rounded-full mb-6">
          <History className="w-12 h-12 text-slate-400" />
        </div>
        <h3 className="text-xl font-semibold text-slate-800 mb-2">No history yet</h3>
        <p className="text-slate-500 max-w-sm">
          Communications you generate will be saved here automatically so you can revisit them later.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Generation History</h2>
          <p className="text-slate-600">Your recent communications are stored locally.</p>
        </div>
        <button 
          onClick={onClear}
          className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors border border-transparent hover:border-red-100"
        >
          <Trash2 className="w-4 h-4" />
          Clear History
        </button>
      </div>

      <div className="space-y-4">
        {history.map((item) => (
          <div 
            key={item.id}
            className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition-shadow group"
          >
            <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
              <div className="flex-1">
                <div className="flex items-center gap-3 text-xs text-slate-500 mb-2">
                  <span className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded">
                    <Calendar className="w-3 h-3" />
                    {new Date(item.timestamp).toLocaleDateString()} at {new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                  <span className="px-2 py-1 rounded border border-slate-200">
                    {item.settings.format}
                  </span>
                  <span className="px-2 py-1 rounded border border-slate-200">
                    {item.settings.tone}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-slate-900 mb-1">
                  {item.result.subjectLines[0] || "Untitled Communication"}
                </h3>
                
                <p className="text-slate-600 text-sm line-clamp-1">
                  {item.result.summary}
                </p>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto">
                <button 
                  onClick={() => onLoad(item)}
                  className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 font-medium rounded-lg hover:bg-indigo-100 transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
