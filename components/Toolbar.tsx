
import React from 'react';
import { ReportSection } from '../types';

interface ToolbarProps {
  activeSection: ReportSection;
}

const Toolbar: React.FC<ToolbarProps> = ({ activeSection }) => {
  return (
    <div className="px-8 py-2 border-b border-gray-200 bg-white flex items-center justify-between sticky top-[73px] z-10 shadow-sm">
      <div className="flex items-center gap-1">
        <button className="p-1.5 hover:bg-gray-100 rounded text-gray-600 transition-colors">
          <span className="material-symbols-outlined text-[20px]">undo</span>
        </button>
        <button className="p-1.5 hover:bg-gray-100 rounded text-gray-600 transition-colors">
          <span className="material-symbols-outlined text-[20px]">redo</span>
        </button>
        <div className="w-px h-5 bg-gray-200 mx-2" />
        
        <button className="px-3 h-8 bg-gray-50 border border-gray-200 rounded text-gray-700 text-xs font-bold flex items-center gap-2 hover:bg-gray-100 transition">
          Arial
          <span className="material-symbols-outlined text-[16px]">keyboard_arrow_down</span>
        </button>
        <button className="px-3 h-8 bg-gray-50 border border-gray-200 rounded text-gray-700 text-xs font-bold flex items-center gap-2 hover:bg-gray-100 transition">
          11 pt
          <span className="material-symbols-outlined text-[16px]">keyboard_arrow_down</span>
        </button>
        
        <div className="w-px h-5 bg-gray-200 mx-2" />
        
        <button className="p-1.5 hover:bg-gray-100 rounded text-gray-900 transition-colors">
          <span className="material-symbols-outlined text-[20px] font-bold">format_bold</span>
        </button>
        <button className="p-1.5 hover:bg-gray-100 rounded text-gray-700 transition-colors">
          <span className="material-symbols-outlined text-[20px]">format_italic</span>
        </button>
        <button className="p-1.5 hover:bg-gray-100 rounded text-gray-700 transition-colors">
          <span className="material-symbols-outlined text-[20px]">format_underlined</span>
        </button>
        <button className="p-1.5 hover:bg-gray-100 rounded text-gray-700 transition-colors">
          <span className="material-symbols-outlined text-[20px]">format_list_bulleted</span>
        </button>
      </div>

      <div className="flex items-center gap-2">
        <button className="flex items-center gap-1.5 px-3 h-8 hover:bg-gray-100 text-gray-700 text-xs font-bold border border-gray-200 rounded transition">
          <span className="material-symbols-outlined text-[18px]">image</span>
          Graphic
        </button>
        <button className="flex items-center gap-1.5 px-3 h-8 hover:bg-gray-100 text-gray-700 text-xs font-bold border border-gray-200 rounded transition">
          <span className="material-symbols-outlined text-[18px]">table_rows</span>
          Table
        </button>
        <div className="w-px h-5 bg-gray-200 mx-2" />
        <div className="flex items-center gap-1.5 px-3 py-1 bg-gray-50 rounded border border-gray-100 text-[10px] font-bold text-gray-500 uppercase">
          <span className="material-symbols-outlined text-[16px] text-blue-600">subject</span>
          {activeSection.content.split(/\s+/).filter(w => w.length > 0).length} Words
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
