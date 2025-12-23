
export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface CaseStudy {
  client: string;
  industry: string;
  result: string;
  description: string;
  metric: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface AuditResult {
  title: string;
  description: string;
  impact: string;
}

export enum SectionId {
  Home = 'home',
  About = 'about',
  Approach = 'approach',
  Services = 'services',
  CaseStudies = 'casestudies',
  FAQ = 'faq',
  Audit = 'audit',
  Contact = 'contact'
}

export type ViewType = 'main' | 'mentions-legales' | 'confidentialite' | 'cgv' | 'services-detail' | 'audit-dedicated';
