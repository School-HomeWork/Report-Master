
import React from 'react';
import { ReportSection, ReportMetadata } from '../types';

interface SidebarProps {
  sections: ReportSection[];
  activeId: string;
  onSelect: (id: string) => void;
  metadata: ReportMetadata;
}

const Sidebar: React.FC<SidebarProps> = ({ sections, activeId, onSelect, metadata }) => {
  const completionPercentage = Math.round((sections.filter(s => s.status === 'complete' || s.content.length > 100).length / sections.length) * 100);

  return (
    <aside className="w-[280px] shrink-0 bg-white border-r border-gray-200 flex flex-col hidden lg:flex">
      <div className="p-6 border-b border-gray-100">
        <h3 className="text-[10px] uppercase tracking-widest font-extrabold text-gray-400 mb-4">Submission Progress</h3>
        <div className="mb-2 flex justify-between items-center">
          <span className="text-xs font-bold text-gray-700">Completion</span>
          <span className="text-xs font-mono font-bold text-blue-600">{completionPercentage}%</span>
        </div>
        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-600 transition-all duration-1000 ease-in-out" 
            style={{ width: `${completionPercentage}%` }}
          />
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto custom-scrollbar p-3 space-y-0.5">
        {sections.map(section => (
          <button
            key={section.id}
            onClick={() => onSelect(section.id)}
            className={`w-full group flex items-start gap-3 px-3 py-2.5 rounded transition-all text-left ${
              activeId === section.id 
              ? 'bg-blue-50 text-blue-700' 
              : 'hover:bg-gray-50 text-gray-500'
            }`}
          >
            <span className={`material-symbols-outlined text-[18px] mt-0.5 ${
              activeId === section.id ? 'text-blue-600' : 'text-gray-300'
            }`}>
              {section.content.length > 50 ? 'task_alt' : 'circle'}
            </span>
            <div className="min-w-0">
              <p className={`text-xs font-semibold leading-tight ${
                activeId === section.id ? 'text-blue-900' : 'text-gray-600'
              }`}>
                {section.title}
              </p>
              <div className="flex items-center gap-2 mt-1">
                 <span className="text-[9px] font-bold opacity-60 uppercase">{section.points} pts</span>
                 {section.content.length > 0 && <span className="w-1 h-1 rounded-full bg-gray-300"/>}
                 <span className="text-[9px] opacity-40 italic">{section.content.length} chars</span>
              </div>
            </div>
          </button>
        ))}
      </nav>

      <div className="p-4 bg-gray-50 border-t border-gray-200">
        <div className="p-3 bg-white rounded border border-gray-200 shadow-sm">
          <p className="text-[10px] font-bold text-gray-400 uppercase mb-2">Team Lead</p>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-[10px]">JD</div>
            <p className="text-xs font-bold text-gray-700">{metadata.teamLead}</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
