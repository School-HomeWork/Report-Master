
import React, { useState } from 'react';
import { OFFICIAL_TEMPLATE } from './constants';
import { ReportSection, ReportMetadata } from './types';
import { aiService } from './services/geminiService';

// Components
import Sidebar from './components/Sidebar';
import Editor from './components/Editor';
import AIPanel from './components/AIPanel';
import Toolbar from './components/Toolbar';

const App: React.FC = () => {
  const [sections, setSections] = useState<ReportSection[]>(OFFICIAL_TEMPLATE);
  const [activeSectionId, setActiveSectionId] = useState<string>(OFFICIAL_TEMPLATE[0].id);
  const [isProcessing, setIsProcessing] = useState(false);
  const [metadata] = useState<ReportMetadata>({
    teamName: 'ALPHA UAV',
    teamType: 'UNIVERSITY',
    uavType: 'FIXED_WING',
    universityName: 'Technical University',
    city: 'Istanbul',
    teamLead: 'John Doe',
    applicationId: 'TK-2025-001'
  });

  const activeSection = sections.find(s => s.id === activeSectionId) || sections[0];

  const updateSectionContent = (id: string, newContent: string) => {
    setSections(prev => prev.map(s => 
      s.id === id ? { ...s, content: newContent, status: newContent.length > 0 ? 'draft' : 'empty' } : s
    ));
  };

  const handleAISuggestion = async (action: 'rewrite' | 'compliance' | 'research', contextText?: string) => {
    setIsProcessing(true);
    try {
      if (action === 'rewrite') {
        const textToRewrite = contextText || activeSection.content;
        const refined = await aiService.rewriteSection(textToRewrite, activeSection.title, 'Academic');
        updateSectionContent(activeSection.id, refined);
      } else if (action === 'compliance') {
        const result = await aiService.checkCompliance(activeSection.content, activeSection.title, activeSection.complianceNotes);
        setSections(prev => prev.map(s => 
          s.id === activeSection.id ? { ...s, complianceNotes: [...OFFICIAL_TEMPLATE.find(t => t.id === s.id)!.complianceNotes, ...result.feedback] } : s
        ));
      }
    } catch (error) {
      console.error("AI Error:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden font-sans text-gray-900">
      {/* Navigation Sidebar */}
      <Sidebar 
        sections={sections} 
        activeId={activeSectionId} 
        onSelect={setActiveSectionId} 
        metadata={metadata}
      />

      {/* Main Workspace */}
      <div className="flex-1 flex flex-col min-w-0 bg-gray-100">
        {/* Top Header */}
        <header className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-200 sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded bg-blue-600 flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-[24px]">description</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900 tracking-tight">Report Master</h1>
              <div className="flex items-center gap-2">
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-100 text-blue-700 font-bold uppercase">Official Template 2025</span>
                <span className="text-[10px] text-gray-400 font-medium">{metadata.teamName} • {metadata.applicationId}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-2 rounded border border-gray-300 bg-white text-gray-700 text-sm font-semibold hover:bg-gray-50 transition shadow-sm">
              <span className="material-symbols-outlined text-[18px]">share</span>
              Share
            </button>
            <button className="flex items-center gap-2 px-6 py-2 rounded bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition shadow-sm shadow-blue-200">
              <span className="material-symbols-outlined text-[18px]">download</span>
              Export .docx
            </button>
          </div>
        </header>

        {/* Styling Toolbar */}
        <Toolbar activeSection={activeSection} />

        {/* Document Editor - Mimicking a real paper page */}
        <main className="flex-1 overflow-y-auto custom-scrollbar p-12 flex justify-center">
          <div className="w-full max-w-[816px] bg-white min-h-[1056px] shadow-2xl shadow-gray-300 border border-gray-200 p-20 relative transition-all">
            <Editor 
              section={activeSection} 
              onUpdate={(val) => updateSectionContent(activeSection.id, val)}
              isProcessing={isProcessing}
            />
          </div>
        </main>
      </div>

      {/* Right Intelligence Panel */}
      <AIPanel 
        activeSection={activeSection} 
        onAction={handleAISuggestion}
        isProcessing={isProcessing}
      />
    </div>
  );
};

export default App;
