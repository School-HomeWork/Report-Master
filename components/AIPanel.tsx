
import React, { useState } from 'react';
import { ReportSection } from '../types';

interface AIPanelProps {
  activeSection: ReportSection;
  isProcessing: boolean;
  onAction: (action: 'rewrite' | 'compliance' | 'research', context?: string) => void;
}

const AIPanel: React.FC<AIPanelProps> = ({ activeSection, isProcessing, onAction }) => {
  const [prompt, setPrompt] = useState('');

  return (
    <aside className="w-[340px] bg-white border-l border-gray-200 flex flex-col shrink-0 hidden xl:flex shadow-sm">
      <div className="p-4 border-b border-gray-100 flex items-center justify-between">
        <h2 className="text-xs font-black uppercase tracking-widest text-gray-800">Compliance AI</h2>
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"/>
          <span className="text-[9px] font-bold text-gray-400 uppercase">Live</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar p-5 space-y-6">
        {/* Engineering Command */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <label className="text-[10px] font-bold uppercase text-gray-400 tracking-wider">Refinement Command</label>
          </div>
          <div className="relative">
            <textarea 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Suggest improvements for the aerodynamic stability description..."
              className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-xs text-gray-800 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none h-32 placeholder-gray-400"
            />
          </div>
          <button 
            disabled={isProcessing || !prompt}
            onClick={() => {
              onAction('rewrite', prompt);
              setPrompt('');
            }}
            className={`w-full h-10 flex items-center justify-center gap-2 rounded-lg bg-gray-900 text-white font-bold text-xs uppercase tracking-widest transition-all hover:bg-blue-600 disabled:bg-gray-200 disabled:text-gray-400 shadow-sm`}
          >
            <span className="material-symbols-outlined text-[18px]">auto_fix</span>
            {isProcessing ? 'Processing...' : 'Apply AI Edit'}
          </button>
        </div>

        {/* Automated Analysis */}
        <div className="pt-6 border-t border-gray-100">
          <label className="text-[10px] font-bold uppercase text-gray-400 tracking-widest block mb-4">Deep Analysis Tools</label>
          <div className="grid grid-cols-1 gap-2">
            <button 
              onClick={() => onAction('compliance')}
              className="flex items-center gap-3 w-full p-3 rounded-lg bg-white border border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all group"
            >
              <span className="material-symbols-outlined text-blue-600 text-[20px]">verified_user</span>
              <div className="text-left">
                <span className="block text-xs font-bold text-gray-800 uppercase tracking-tighter">Validate Compliance</span>
                <span className="block text-[9px] text-gray-500 font-medium italic">Check against official 2025 rules</span>
              </div>
            </button>
            <button 
              onClick={() => onAction('rewrite')}
              className="flex items-center gap-3 w-full p-3 rounded-lg bg-white border border-gray-200 hover:border-purple-400 hover:bg-purple-50 transition-all group"
            >
              <span className="material-symbols-outlined text-purple-600 text-[20px]">school</span>
              <div className="text-left">
                <span className="block text-xs font-bold text-gray-800 uppercase tracking-tighter">Academic Polish</span>
                <span className="block text-[9px] text-gray-500 font-medium italic">Improve technical vocabulary</span>
              </div>
            </button>
          </div>
        </div>

        {/* Dynamic Observations */}
        <div className="space-y-3">
          <label className="text-[10px] font-bold uppercase text-gray-400 tracking-widest block">Structural Observations</label>
          <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 flex gap-3">
            <span className="material-symbols-outlined text-orange-600 text-[20px]">lightbulb</span>
            <div>
              <p className="text-[11px] font-bold text-orange-900 mb-0.5">Tone Recommendation</p>
              <p className="text-[10px] text-orange-800 leading-snug">The current description for 2.1 is too colloquial. Use "propulsion system optimization" instead of "faster flight".</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 bg-gray-50 border-t border-gray-100">
        <div className="flex items-center justify-between text-[10px] font-bold text-gray-500 uppercase mb-2">
          <span>Daily AI Quote</span>
          <span className="text-blue-600">62% Used</span>
        </div>
        <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-blue-600 w-[62%]" />
        </div>
      </div>
    </aside>
  );
};

export default AIPanel;
