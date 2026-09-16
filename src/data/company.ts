export interface Leader {
  name: string;
  role: string;
  initials: string;
  accentColor: string;
}

export const company = {
  name: 'Zemprolabs',
  legalName: 'Zemprolabs',
  tagline: 'Technology, Commerce & Beyond',
  positioning: 'Qualified Engineers. Trusted Technology.',
  positioningSub:
    'Zemprolabs brings together qualified engineers and technology professionals to design, build, maintain and manage digital solutions for businesses.',
  email: 'Info@zemprolabs.com',
  emailHref: 'mailto:Info@zemprolabs.com',
  // Primary Phone: +91 744 755 7577
  phone: '744 755 7577',
  phoneHref: 'tel:+917447557577',
  // Secondary Phone: +91 744 755 7599
  phone2: '744 755 7599',
  phone2Href: 'tel:+917447557599',
  phones: [
    { display: '744 755 7577', href: 'tel:+917447557577', isPrimary: true },
    { display: '744 755 7599', href: 'tel:+917447557599', isPrimary: false }
  ],
  address: {
    line1: '6th Floor, Ehtesham Heights',
    line2: 'Golden Heights Colony',
    line3: 'Upperpally, Hyderabad',
    full: '6th Floor, Ehtesham Heights, Golden Heights Colony, Upperpally, Hyderabad',
    city: 'Hyderabad',
    country: 'India'
  },
  recruitment: {
    contactName: 'Syed Roshan Zameer',
    role: 'Recruitment Contact',
    policy:
      'Recruitment services are available for international markets. We currently do not provide recruitment services for India.'
  },
  // Public leadership presentation removed per HR instruction ("No leaders")
  leadership: [] as Leader[]
};

// Aliases for compatibility
export const companyInfo = company;
export const founders: Leader[] = company.leadership;

