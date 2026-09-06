export const BRAND_ASSETS = {
  logo: '/images/exterior-placeholder.svg',
  exteriorPhoto: '/images/exterior-photo.webp',
  interiorPhoto: '/images/interior-photo.jpg',
  mapPhoto: '/images/exterior-placeholder.svg',
};

export const SECTORS = [
  {
    id: 'fmcg',
    name: 'FMCG & Retail',
    icon: 'inventory_2',
    palletFactor: 1.25,
    description: 'High-velocity fast-moving consumer packaged goods with strict FIFO/FEFO tracking and clean pest-controlled ambient storage.',
    recommendedBay: 'Bay A (High-Dock)',
    turnaroundTime: '45 mins per 40-ft container',
    floorLoadRequirement: '4.5 MT / sq.m',
  },
  {
    id: 'ecom',
    name: 'E-Commerce D2C',
    icon: 'local_shipping',
    palletFactor: 0.9,
    description: 'Rapid pick, pack, sorting zones with dedicated parcel dispatch aprons for courier 3-wheelers and last-mile vans.',
    recommendedBay: 'Bay B (Cross-Dock)',
    turnaroundTime: '20 mins batch dispatch',
    floorLoadRequirement: '3.5 MT / sq.m',
  },
  {
    id: 'steel',
    name: 'Steel & Metals',
    icon: 'iron',
    palletFactor: 0.6,
    description: 'Ultra-heavy structural loading with 6 MT/sq.m floor tolerance, wide roll-up gates for flatbed trailers, and crane clearance.',
    recommendedBay: 'Bay C (Reinforced Heavy)',
    turnaroundTime: '60 mins flatbed offload',
    floorLoadRequirement: '6.0 MT / sq.m',
  },
  {
    id: 'pharma',
    name: 'Pharma & Agro',
    icon: 'vaccines',
    palletFactor: 1.1,
    description: 'Dust-free, sealed epoxy flooring with continuous environmental stability, pest-trap perimeter, and cold-pack staging zones.',
    recommendedBay: 'Bay A (Climate-Ready)',
    turnaroundTime: '30 mins insulated dispatch',
    floorLoadRequirement: '4.0 MT / sq.m',
  },
  {
    id: '3pl',
    name: '3PL Logistics',
    icon: 'hub',
    palletFactor: 1.15,
    description: 'Multi-client consolidation hub facilitating express transit to Eastern UP, Bihar, and Nepal border transshipment at Sonauli.',
    recommendedBay: 'Master Logistics Annex',
    turnaroundTime: 'Continuous cross-docking',
    floorLoadRequirement: '5.5 MT / sq.m',
  },
  {
    id: 'heavy',
    name: 'Industrial Mfg',
    icon: 'precision_manufacturing',
    palletFactor: 0.75,
    description: 'Raw materials staging, machinery spare parts buffering, and finished equipment storage with 3-phase industrial power feeds.',
    recommendedBay: 'Bay C (Industrial)',
    turnaroundTime: 'Heavy hydraulic handling',
    floorLoadRequirement: '6.0 MT / sq.m',
  },
];

export const BAYS = [
  {
    id: 'bay-a',
    name: 'Bay Alpha (FMCG / High-Bay)',
    totalSqFt: 35000,
    availableSqFt: 11200,
    clearHeight: 32,
    docks: 6,
    floorLoad: '5.0 MT / sq.m',
    status: 'partially-leased',
    rackingReady: true,
    powerKva: 125,
  },
  {
    id: 'bay-b',
    name: 'Bay Bravo (E-Commerce & 3PL Transit)',
    totalSqFt: 28000,
    availableSqFt: 12600,
    clearHeight: 32,
    docks: 5,
    floorLoad: '5.0 MT / sq.m',
    status: 'partially-leased',
    rackingReady: true,
    powerKva: 80,
  },
  {
    id: 'bay-c',
    name: 'Bay Charlie (Heavy Industrial / Steel)',
    totalSqFt: 22000,
    availableSqFt: 0,
    clearHeight: 34,
    docks: 4,
    floorLoad: '6.0 MT / sq.m',
    status: 'reserved',
    rackingReady: false,
    powerKva: 160,
  },
];

export const FAQS = [
  {
    id: 'faq-1',
    category: 'logistics',
    question: 'What are the heavy vehicle access dimensions and are there municipal no-entry restrictions?',
    answer:
      'Our facility boasts an exceptional 36-meter (118-ft) direct road frontage on Gorakhnath Mandir Road, Bargadwa. Because of this prime arterial classification, heavy commercial trucks, multi-axle freight trailers, and 40-foot shipping containers enjoy unrestricted 24×7 ingress and egress with zero municipal daylight curfew delays.',
  },
  {
    id: 'faq-2',
    category: 'compliance',
    question: 'What safety, fire protection, and 24x7 security protocols are implemented?',
    answer:
      'The facility is fully compliant with state and national industrial fire codes, featuring continuous fire hydrant ring mains, hose reels, and smoke alarm sensors. The entire campus is enclosed with reinforced boundary walls, monitored by multi-angle 4K IP CCTV surveillance with 60-day archival, and staffed 24 hours daily with trained physical security guards.',
  },
  {
    id: 'faq-3',
    category: 'commercial',
    question: 'What is the minimum leasable carpet area and standard lock-in period?',
    answer:
      'Minimum leasable bay footprints begin at 3,000 sq.ft, with scalable multi-bay configurations scaling up to 80,000+ sq.ft for enterprise master tenants. We offer flexible arrangements ranging from 3-month seasonal surge leases to long-term 3-to-9 year registered lease deeds with built-to-suit racking provisions.',
  },
  {
    id: 'faq-4',
    category: 'engineering',
    question: 'Are administrative office amenities and driver dormitories included?',
    answer:
      'Yes. The property features a Grade-A attached administrative complex equipped with air-conditioned manager cabins, high-speed dual optical fiber, inventory audit desks, dedicated washrooms, and clean rest quarters for long-haul drivers during turnaround loading.',
  },
  {
    id: 'faq-5',
    category: 'engineering',
    question: 'How is electrical power backup and floor structural loading handled?',
    answer:
      'The facility features a dedicated 3-phase industrial power feeder supported by 100% DG generator backup systems to run high-bay lighting, automated sorting systems, and administrative computers without interruption. The reinforced concrete flooring supports up to 6 Metric Tons per sq.meter.',
  },
  {
    id: 'faq-6',
    category: 'logistics',
    question: 'How close is Vardha Warehousing to the Nepal Sonauli Border and Railway Freight Rake?',
    answer:
      'We are situated directly along the primary northern logistics spine: just 95 km from the international Sonauli Integrated Check Post (ICP) at the Indo-Nepal border, 15 minutes from Gorakhpur Railway Junction (NER Headquarters) for container rake offloading, and 12 minutes from the NH-27 East-West highway corridor.',
  },
];

export const TESTIMONIALS = [
  {
    id: 'test-1',
    clientName: 'Rajesh Kumar Verma',
    designation: 'Regional Supply Chain Director',
    company: 'North India FMCG Logistics',
    sector: 'FMCG Distribution',
    rating: 5,
    quote:
      '“Vardha Warehousing transformed our regional distribution throughput across Purvanchal and Nepal. The 118-ft frontage eliminates hours of turnaround delay our 40-ft trailers faced in town. Their clear plinth height and 24x7 security have resulted in zero damage or inventory loss across three years.”',
    initials: 'RK',
    leasedArea: '24,000 SQ.FT',
    tenure: '3+ Years Leased',
  },
  {
    id: 'test-2',
    clientName: 'Sunil Agrawal',
    designation: 'Vice President of Operations',
    company: 'Purvanchal Steel & Structural Infra',
    sector: 'Heavy Metals',
    rating: 5,
    quote:
      '“Finding a facility in Gorakhpur with authentic 6 MT/sq.m floor loading and direct flatbed trailer drive-in bays seemed impossible until we partnered with Vardha. The laser-screed floor handles our reach trucks and coil loads with absolute structural zero-deflection.”',
    initials: 'SA',
    leasedArea: '18,500 SQ.FT',
    tenure: '4 Years Leased',
  },
  {
    id: 'test-3',
    clientName: 'Amitabh Nambiar',
    designation: 'National Head of Logistics',
    company: 'Apex Express 3PL Network',
    sector: 'Express Freight & Transit',
    rating: 5,
    quote:
      '“Zero daylight truck curfews on Gorakhnath Mandir Road allows us to maintain 24-hour delivery commitments to retail partners across eastern UP and the Terai region. Their attached air-conditioned office gave our audit team an immediate operational base.”',
    initials: 'AN',
    leasedArea: '15,000 SQ.FT',
    tenure: '2 Years Leased',
  },
];
