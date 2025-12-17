
export interface ReportSection {
  id: string;
  title: string;
  subtitle?: string;
  points: number;
  content: string;
  placeholder: string;
  status: 'empty' | 'draft' | 'review' | 'complete';
  complianceNotes: string[];
}

export interface ReportMetadata {
  teamName: string;
  teamType: 'UNIVERSITY' | 'MIXED';
  uavType: 'FIXED_WING' | 'ROTARY_WING';
  universityName: string;
  city: string;
  teamLead: string;
  applicationId: string;
}

export enum TechnicalTone {
  ACADEMIC = 'Academic',
  TECHNICAL = 'Technical',
  FORMAL = 'Formal'
}
