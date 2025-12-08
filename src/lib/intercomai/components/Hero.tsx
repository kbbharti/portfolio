import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <div className="bg-white border-b border-slate-200 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Internal Communications, <span className="text-indigo-600">Perfected in Minutes</span>
        </h1>
        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Transform raw notes into polished leadership updates, newsletters, and announcements. 
          Faster writing. Clearer messaging. Company-wide alignment.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <button 
            onClick={onStart}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-lg font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/30"
          >
            Start Writing for Free
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-3xl mx-auto">
          {[
            "Consistent Leadership Voice",
            "Reduce Review Cycles",
            "Engage Employees"
          ].map((benefit, i) => (
            <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-slate-50 border border-slate-100">
              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="font-medium text-slate-700">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};