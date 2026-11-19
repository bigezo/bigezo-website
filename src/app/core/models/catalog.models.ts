export interface NavLinkItem {
  label: string;
  fragment: string;
}

export interface ValuePillar {
  id: string;
  title: string;
  description: string;
  iconClass: string;
}

export interface ExpertiseItem {
  id: string;
  title: string;
  description: string;
  iconClass: string;
}

export interface ProductItem {
  id: string;
  name: string;
  iconClass: string;
  url?: string;
  displayUrl?: string;
  category: string;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
}

export interface WebsiteShowcaseItem {
  label: string;
  url: string;
}

export interface EngineeringPillar {
  id: string;
  title: string;
  description: string;
  iconClass: string;
}

export interface ContactInquiryPayload {
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  serviceCategory: string;
  budgetRange: string;
  projectDetails: string;
  submittedAt: string;
}

export interface ContactSubmissionResult {
  deliveredViaApi: boolean;
  referenceCode: string;
  message: string;
}
