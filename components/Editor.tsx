
import React from 'react';
import { ReportSection } from '../types';

interface EditorProps {
  section: ReportSection;
  onUpdate: (content: string) => void;
  isProcessing: boolean;
}

const Editor: React.FC<EditorProps> = ({ section, onUpdate, isProcessing }) => {
  return (
    <div className={`w-full h-full flex flex-col transition-opacity duration-300 ${isProcessing ? 'opacity-40 pointer-events-none' : 'opacity-100'}`}>
      <div className="mb-12 border-b-2 border-gray-900 pb-6">
        <h1 className="text-3xl font-bold text-gray-900 leading-tight mb-2">
          {section.title}
        </h1>
        <div className="flex items-center gap-6 text-gray-500 text-[12px] font-semibold uppercase tracking-wider">
          <span className="flex items-center gap-1.5 text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
            <span className="material-symbols-outlined text-[16px]">priority</span>
            Evaluation Weight: {section.points} Points
          </span>
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px]">rule</span>
            Standard Formatting Required
          </span>
        </div>
      </div>

      <div className="flex-1 relative">
        <textarea
          value={section.content}
          onChange={(e) => onUpdate(e.target.value)}
          placeholder={section.placeholder}
          className="w-full h-full min-h-[700px] bg-transparent border-none focus:ring-0 text-gray-900 text-[11pt] leading-[1.15] resize-none placeholder-gray-300"
          style={{ fontFamily: 'Arial, sans-serif' }}
        />
        
        {section.content.length === 0 && (
          <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center gap-4 opacity-5 mt-20">
            <span className="material-symbols-outlined text-[120px]">edit_document</span>
            <p className="text-2xl font-bold uppercase tracking-[0.2em]">Start Writing Section</p>
          </div>
        )}
      </div>

      {/* Compliance Information Footer */}
      <div className="mt-12 pt-8 border-t border-gray-100 bg-gray-50/50 -mx-20 -mb-20 px-20 pb-20">
        <h4 className="text-[11px] font-extrabold uppercase text-gray-400 tracking-widest mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-[16px]">verified</span>
          Mandatory Compliance Checks
        </h4>
        <div className="flex flex-col gap-2">
          {section.complianceNotes.map((note, idx) => (
            <div key={idx} className="flex items-start gap-3 text-[12px] text-gray-600 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
              {note}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Editor;
