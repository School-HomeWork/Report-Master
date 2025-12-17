
import { ReportSection } from './types';

export const OFFICIAL_TEMPLATE: ReportSection[] = [
  {
    id: 'org_summary',
    title: '1. ORGANİZASYON ÖZETİ',
    points: 10,
    content: '',
    placeholder: 'Enter team organization details here...',
    status: 'empty',
    complianceNotes: ['Do not include personal names or photos.', 'Include organization chart description.']
  },
  {
    id: 'team_org',
    title: '1.1. Takım Organizasyonu',
    points: 5,
    content: '',
    placeholder: 'Define roles and unit tasks...',
    status: 'empty',
    complianceNotes: ['No personal info (names/photos) allowed.']
  },
  {
    id: 'timeline',
    title: '1.2. Zaman Çizelgesi ve Geliştirme Süreci',
    points: 5,
    content: '',
    placeholder: 'Describe design phases and prototype development timeline...',
    status: 'empty',
    complianceNotes: ['Mention design process.', 'Mention prototype stages.']
  },
  {
    id: 'uav_specs',
    title: '2. İNSANSIZ HAVA ARACININ ÖZELLİKLERİ',
    points: 80,
    content: '',
    placeholder: 'Main UAV specifications section...',
    status: 'empty',
    complianceNotes: ['Total points: 80 for all subsections.']
  },
  {
    id: 'uav_config',
    title: '2.1. Görevler için İHA Konfigürasyonu ve Yenilikçi Tasarım Özellikleri',
    points: 10,
    content: '',
    placeholder: 'Describe aerodynamic improvements and innovative solutions...',
    status: 'empty',
    complianceNotes: ['Mention task flexibility.', 'Mention border conditions.']
  },
  {
    id: 'materials',
    title: '2.2. Malzeme Seçimi, Gövde ve Mekanik Sistem Üretim Teknikleri',
    points: 15,
    content: '',
    placeholder: 'Materials, durability, modularity, and production techniques...',
    status: 'empty',
    complianceNotes: ['Mention structural durability.', 'Detail production efficiency.']
  },
  {
    id: 'mission_mech',
    title: '2.3. Görev Mekanizması Sistemi',
    points: 10,
    content: '',
    placeholder: 'Mechanism design, operation, and control methods...',
    status: 'empty',
    complianceNotes: ['Specify manual vs autonomous control.', 'Reliability analysis required.']
  },
  {
    id: 'electronics',
    title: '2.4. Elektrik ve Elektronik Donanım ile Güç Sistemleri',
    points: 15,
    content: '',
    placeholder: 'Electronic components, functions, and circuit schematics...',
    status: 'empty',
    complianceNotes: ['Readable circuit schematic required.', 'Include battery details and current breaker.']
  },
  {
    id: 'software',
    title: '2.5. Yazılım ve Kontrol Sistemi',
    points: 10,
    content: '',
    placeholder: 'Software architecture, image processing algorithms, GCS...',
    status: 'empty',
    complianceNotes: ['Define autonomy levels.', 'Control algorithms details.']
  },
  {
    id: 'performance',
    title: '2.6. İHA Performans Parametreleri',
    points: 10,
    content: '',
    placeholder: 'Weights, balance, stall speed, range, flight time...',
    status: 'empty',
    complianceNotes: ['Include explanatory text for program-generated visuals.', 'Stall speed and cruise speed must be defined.']
  },
  {
    id: 'visual_config',
    title: '2.7. Görsel Tasarım Konfigürasyonu',
    points: 10,
    content: '',
    placeholder: '3-view drawings and perspective views...',
    status: 'empty',
    complianceNotes: ['Include Top, Side, Front views.', 'Dimensions must be legible.']
  },
  {
    id: 'cost_analysis',
    title: '3. MALİYET ANALİZİ VE BÜTÇE TABLOSU',
    points: 5,
    content: '',
    placeholder: 'Detailed TÜBİTAK project support request table...',
    status: 'empty',
    complianceNotes: ['Specify brand/model/unit price/total.', 'Define usage justification for each item.']
  },
  {
    id: 'report_layout',
    title: '4. RAPOR DÜZENİ',
    points: 5,
    content: '',
    placeholder: 'Compliance check for formatting...',
    status: 'complete',
    complianceNotes: ['Arial, 11pt, 1.15 line height.', 'Margins: Top 3cm, Others 2.5cm.', 'Max 17 pages total.']
  }
];

export const FORMATTING_RULES = {
  fontFamily: 'Arial',
  fontSize: '11pt',
  lineHeight: 1.15,
  pageSize: 'A4',
  maxPages: 17,
  margins: { top: '3cm', others: '2.5cm' }
};
