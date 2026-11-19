import {
  EngineeringPillar,
  ExpertiseItem,
  NavLinkItem,
  ProcessStep,
  ProductItem,
  ValuePillar,
  WebsiteShowcaseItem,
} from '../models/catalog.models';

export const NAV_LINKS: readonly NavLinkItem[] = [
  { label: 'Focus', fragment: 'focus' },
  { label: 'Services', fragment: 'services' },
  { label: 'Expertise', fragment: 'expertise' },
  { label: 'Our Products', fragment: 'products' },
  { label: 'Process', fragment: 'process' },
  { label: 'Experience', fragment: 'experience' },
  { label: 'Contact', fragment: 'contact' },
];

export const VALUE_PILLARS: readonly ValuePillar[] = [
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    description:
      'Turn specialised business requirements and ambitious digital ideas into working solutions.',
    iconClass: 'fa-solid fa-code',
  },
  {
    id: 'digital-customer-experiences',
    title: 'Digital Customer Experiences',
    description:
      'Enable online bookings, orders, payments and customer self-service.',
    iconClass: 'fa-solid fa-laptop-code',
  },
  {
    id: 'intelligent-business-systems',
    title: 'Intelligent Business Systems',
    description:
      'Use AI and advanced integrations to simplify complex tasks and improve decision-making.',
    iconClass: 'fa-solid fa-microchip',
  },
  {
    id: 'business-automation',
    title: 'Business Automation',
    description:
      'Replace repetitive manual work with efficient, connected systems.',
    iconClass: 'fa-solid fa-gears',
  },
];

export const EXPERTISE_ITEMS: readonly ExpertiseItem[] = [
  {
    id: 'custom-business-platforms',
    title: 'Custom Business Platforms',
    description:
      'End-to-end booking portals, e-commerce, customer self-service accounts, CRM, ERP, and internal business management systems.',
    iconClass: 'fa-solid fa-layer-group',
  },
  {
    id: 'ai-powered-business-tools',
    title: 'AI-Powered Business Tools',
    description:
      'Intelligent customer-support chatbots, AI-generated proposals and quotations, and AI-powered business data analysis.',
    iconClass: 'fa-solid fa-brain',
  },
  {
    id: 'digital-forensics-document-intelligence',
    title: 'Digital Forensics & Document Intelligence',
    description:
      'OCR-based document scanning, data extraction, document analysis and digital forensic investigations.',
    iconClass: 'fa-solid fa-file-shield',
  },
  {
    id: 'payments-api-integrations',
    title: 'Payments & API Integrations',
    description:
      'Secure Payment integrations for MTN Mobile Money, Airtel Money and Visa/Mastercard, WhatsApp Business, and third-party ERPs.',
    iconClass: 'fa-solid fa-credit-card',
  },
  {
    id: 'advanced-web-mobile-applications',
    title: 'Advanced Web & Mobile Applications',
    description:
      'High-performance corporate websites, Android/iOS apps, interactive maps, and live tracking workflows.',
    iconClass: 'fa-solid fa-mobile-screen-button',
  },
];

export const OUR_PRODUCTS: readonly ProductItem[] = [
  {
    id: 'bigezo',
    name: 'BIGEZO',
    iconClass: 'fa-solid fa-pen-nib',
    url: 'https://www.bigezo.com',
    displayUrl: 'www.bigezo.com',
    category: 'Digital Product',
  },
  {
    id: 'g-realm',
    name: 'G-Realm',
    iconClass: 'fa-solid fa-globe',
    url: 'https://www.grealm.org',
    displayUrl: 'www.grealm.org',
    category: 'Digital Product',
  },
  {
    id: 'somero',
    name: 'Somero',
    iconClass: 'fa-solid fa-graduation-cap',
    url: 'https://www.somero.ug',
    displayUrl: 'www.somero.ug',
    category: 'Digital Product',
  },
  {
    id: 'premium-rent-app',
    name: 'Premium Rent App',
    iconClass: 'fa-solid fa-building',
    url: 'https://premium-rent-app.web.app',
    displayUrl: 'premium-rent-app.web.app',
    category: 'Digital Application',
  },
  {
    id: 'sokivibes',
    name: 'G-Realm Music App (Sokivibes)',
    iconClass: 'fa-solid fa-music',
    url: 'https://sokivibes.web.app',
    displayUrl: 'sokivibes.web.app',
    category: 'Digital Application',
  },
];

export const DIGITAL_PRODUCTS: readonly ProductItem[] = [
  ...OUR_PRODUCTS.slice(0, 3),
  {
    id: 'richieart',
    name: 'RichieArt',
    iconClass: 'fa-solid fa-palette',
    url: 'https://www.richieart.co',
    displayUrl: 'www.richieart.co',
    category: 'Digital Product',
  },
  {
    id: 'ecopharm-crm',
    name: 'Ecopharm Pharmacy CRM',
    iconClass: 'fa-solid fa-notes-medical',
    category: 'Enterprise CRM System',
  },
  ...OUR_PRODUCTS.slice(3),
];

export const PROCESS_STEPS: readonly ProcessStep[] = [
  { stepNumber: 1, title: 'Technical Assessment' },
  { stepNumber: 2, title: 'Define Architecture & Scope' },
  { stepNumber: 3, title: 'Clear, Itemized Quotation' },
  { stepNumber: 4, title: 'Agree on Terms & SLAs' },
  { stepNumber: 5, title: 'Build, Test, Deploy & Handover' },
];

export const LEADERSHIP_ORGANISATIONS: readonly string[] = [
  'World Vision Uganda',
  'Vivo Energy',
  'Monitor Publications Ltd',
  'Ecopharm Pharmacy',
  'MK Publishers',
];

export const SELECTED_WEBSITES: readonly WebsiteShowcaseItem[] = [
  { label: 'www.footnoteconsults.com', url: 'https://www.footnoteconsults.com' },
  { label: 'www.peaceofmindpackage.com', url: 'https://www.peaceofmindpackage.com' },
  { label: 'www.civitas.co.ug', url: 'https://www.civitas.co.ug' },
  { label: 'www.jalivingspaces.com', url: 'https://www.jalivingspaces.com' },
  { label: 'www.kidsclubkampalaug.com', url: 'https://www.kidsclubkampalaug.com' },
  { label: 'www.mtotowafrikauganda.org', url: 'https://www.mtotowafrikauganda.org' },
  { label: 'www.albanislamic.org', url: 'https://www.albanislamic.org' },
];

export const ENGINEERING_PILLARS: readonly EngineeringPillar[] = [
  {
    id: 'enterprise-security',
    title: 'Enterprise Application Security',
    description:
      'Role-based access controls, secure authentication, encrypted data and protected API integrations.',
    iconClass: 'fa-solid fa-shield-halved',
  },
  {
    id: 'reliable-data',
    title: 'Reliable Data',
    description:
      'High-performance databases, efficient record retrieval, transaction integrity and automated backups.',
    iconClass: 'fa-solid fa-database',
  },
  {
    id: 'cost-optimised-infrastructure',
    title: 'Cost-Optimised Infrastructure',
    description:
      "Dedicated VPS hosting configured to your application's storage, processing and expected traffic requirements.",
    iconClass: 'fa-solid fa-server',
  },
  {
    id: 'dependable-delivery',
    title: 'Dependable Delivery',
    description:
      'Clearly defined scope, milestone-based development, rigorous testing, deployment, handover and ongoing technical support.',
    iconClass: 'fa-solid fa-clipboard-check',
  },
];

export const SERVICE_CATEGORIES: readonly string[] = [
  'Custom Business Platform (CRM / ERP / Portal)',
  'AI-Powered Business Tools & Automation',
  'Digital Forensics & Document Intelligence',
  'Payments (Mobile Money / Cards) & API Integration',
  'Advanced Web or Mobile Application',
  'Other Custom Software Requirement',
];

export const BUDGET_RANGES: readonly string[] = [
  'Not sure yet (Recommend after Technical Assessment)',
  'UGX 5M – 15M',
  'UGX 15M – 30M',
  'UGX 30M – 50M+',
];
