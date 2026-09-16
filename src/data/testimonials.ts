export interface TrustMetric {
  value: string;
  label: string;
  detail: string;
}

export const agencyMetrics: TrustMetric[] = [
  {
    value: '6',
    label: 'Core Disciplines',
    detail: 'Development, SEO & Growth, Enterprise, Marketing, Research, and International Recruitment.'
  },
  {
    value: '1',
    label: 'Dedicated Point of Contact',
    detail: 'Direct access to your senior engineering lead—no junior account manager middlemen.'
  },
  {
    value: '0',
    label: 'Third-Party Hand-Offs',
    detail: 'Eliminating the friction, delays, and blame-shifting of managing multiple disjointed agencies.'
  },
  {
    value: '<24h',
    label: 'Direct Response Window',
    detail: 'Rapid technical triage and dedicated support availability across all active engagements.'
  }
];

export const clientProjectsList = [
  { name: 'BaeMeds', domain: 'baemeds.com', sector: 'Medical E-Commerce', region: 'USA & India' },
  { name: 'Erus Academy', domain: 'erusacademy.in', sector: 'Digital LMS & Streaming', region: 'India' },
  { name: 'Auvia Behavioral', domain: 'auviatherapy.com', sector: 'Healthcare Intake', region: 'Austin, TX' },
  { name: 'Talent Hunters', domain: 'talenthunters.com', sector: 'Recruitment ATS', region: 'Global' }
];
