import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Leaf, 
  ShieldCheck, 
  Droplets, 
  Sun, 
  Recycle, 
  Users, 
  Award, 
  CheckCircle2, 
  Factory, 
  Sparkles, 
  ArrowRight, 
  HeartHandshake, 
  Layers,
  ChevronRight,
  TrendingDown,
  Globe2,
  FileCheck
} from 'lucide-react';

const Sustainability = () => {
  const [activePillar, setActivePillar] = useState(0);

  // Key metrics counter / highlight stats
  const metrics = [
    { value: '100%', label: 'Ethically Audited Facilities', subtext: 'Independent 3rd-party compliance verification' },
    { value: 'BSCI & WRAP', label: 'Aligned Supply Chain', subtext: 'Gold & Platinum partner standards' },
    { value: '65%', label: 'Water Usage Reduction', subtext: 'Through ozone wash and laser processing' },
    { value: '5+', label: 'Global Eco Certifications', subtext: 'GOTS, OEKO-TEX, GRS, BCI, ISO 14001' }
  ];

  // The 6 Pillars aligned with modern textile buying house standards
  const pillars = [
    {
      id: 'materials',
      icon: Leaf,
      title: 'Sustainable Materials',
      subtitle: 'From Seed to Spun Thread',
      desc: 'We curate innovative fabrics, organic fibers, and responsible trims aligned with rigorous international eco-friendly standards, replacing virgin synthetics with circular alternatives.',
      image: 'https://images.unsplash.com/photo-1528458876861-544fd1761a91?auto=format&fit=crop&q=80&w=900',
      tag: 'Circular Sourcing',
      points: [
        'GOTS-certified 100% Organic Cotton sourcing',
        'Better Cotton Initiative (BCI) trace programme',
        'Post-consumer Recycled Polyester (GRS) & blended yarns',
        'Lenzing™ TENCEL™ & EcoVero™ certified cellulose fibers',
        'Low-impact reactive dyes and OEKO-TEX® Standard 100 non-toxic chemistry'
      ],
      impactStats: [
        { label: 'Organic / Recycled Share', stat: '78%' },
        { label: 'Toxic Chemical Discharge', stat: '0%' }
      ]
    },
    {
      id: 'compliance',
      icon: ShieldCheck,
      title: 'Ethical Compliance',
      subtitle: 'Dignity, Safety & Fair Compensation',
      desc: 'Every partner facility is monitored continuously against global social compliance codes. Safe working conditions, living wages, and fair hours are absolute non-negotiables.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=900',
      tag: 'Social Governance',
      points: [
        'amfori BSCI Grade A & B verified manufacturing units',
        'Accord on Fire & Building Safety / RSC full remediation sign-off',
        'Worldwide Responsible Accredited Production (WRAP) certified lines',
        'Strict adherence to International Labour Organization (ILO) conventions',
        'Zero tolerance for child labor, forced labor, or unsafe factory infrastructure'
      ],
      impactStats: [
        { label: 'Factory Safety Audits', stat: '100%' },
        { label: 'Remediation Compliance', stat: '99.4%' }
      ]
    },
    {
      id: 'community',
      icon: Users,
      title: 'People & Community',
      subtitle: 'Investing in the Hands That Craft Fashion',
      desc: 'We champion the artisan and industrial workforce behind every stitch. Through healthcare access, skill-building workshops, and gender equity programs, we nurture lasting community progress.',
      image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=900',
      tag: 'Worker Welfare',
      points: [
        'HERproject™ women health, financial literacy & empowerment training',
        'Inclusive leadership and supervisory development for female garment workers',
        'Clean drinking water filtration systems across factory shop-floors',
        'Subsidized family healthcare coverage and child day-care facilities on-site',
        'Community educational sponsorships in Dhaka & Narayanganj textile zones'
      ],
      impactStats: [
        { label: 'Female Supervisory Growth', stat: '+34%' },
        { label: 'Health Workshop Attendees', stat: '12,000+' }
      ]
    },
    {
      id: 'environment',
      icon: Droplets,
      title: 'Reducing Environmental Impact',
      subtitle: 'Decarbonizing Our Footprint',
      desc: 'We systematically minimize freshwater consumption, carbon emissions, and solid waste across the manufacturing lifecycle, steering our operations toward a climate-resilient future.',
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=900',
      tag: 'Resource Efficiency',
      points: [
        'Closed-loop Biological Effluent Treatment Plants (ETP) at all wet processing mills',
        'Rooftop photovoltaic solar installations generating clean electricity in partner mills',
        'Automated fabric spreading & nesting CAD/CAM to cut textile cutting waste below 3%',
        'Biodegradable & 100% recycled polybag packaging with water-soluble garment clips',
        'Comprehensive Higg Index (FEM/FSLM) sustainability scoring and annual reporting'
      ],
      impactStats: [
        { label: 'Wastewater Recycled', stat: '85%' },
        { label: 'Solar Energy In-Use', stat: '4.2 MW' }
      ]
    },
    {
      id: 'innovation',
      icon: Factory,
      title: 'Innovation in Manufacturing',
      subtitle: 'Next-Generation Clean Technology',
      desc: 'From laser pattern engraving on denim to bio-based water-repellent coatings, we fuse modern textile engineering with ecological responsibility.',
      image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=900',
      tag: 'Clean Tech',
      points: [
        'Jeanologia-style laser wash systems replacing hazardous manual hand-scraping',
        'Ozone bleaching and washing eliminating toxic potassium permanganate (PP)',
        'E-Flow nanobubble chemistry application requiring up to 95% less chemical volume',
        'PFC-free fluorocarbon-free Durable Water Repellent (DWR) surface finishes',
        '3D CLO digital sampling reducing physical sample production by 60%'
      ],
      impactStats: [
        { label: 'Denim Water Savings', stat: '-65%' },
        { label: 'Physical Sample Waste', stat: '-60%' }
      ]
    },
    {
      id: 'circularity',
      icon: Recycle,
      title: 'Circular Thinking',
      subtitle: 'Designing for Disassembly & Regeneration',
      desc: 'We design every silhouette with end-of-life accountability. We empower retail partners to deploy recyclable garments, monomaterial blends, and take-back supply pathways.',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=900',
      tag: 'Closed Loop',
      points: [
        'Post-industrial cutting waste upcycling into regenerated blended cotton yarn',
        'Monomaterial design consultation (100% cotton threads, trims & body for seamless recycling)',
        'Removable shank buttons and biodegradable labels for rapid garment deconstruction',
        'FSC-certified recycled hangtags printed with soy-based non-toxic inks',
        'Collaboration with European and UK retail circular take-back logistics networks'
      ],
      impactStats: [
        { label: 'Recycled Fiber Integration', stat: '40%+' },
        { label: 'Zero-Landfill Cut Waste', stat: 'Goal 2026' }
      ]
    }
  ];

  // Certifications list with visual badges
  const certifications = [
    {
      name: 'amfori BSCI',
      subtitle: 'Business Social Compliance',
      color: '#885203',
      description: 'Systematic auditing guaranteeing workplace health, safety, fair compensation, and zero forced labor throughout the manufacturing supply chain.'
    },
    {
      name: 'Accord / RSC',
      subtitle: 'RMG Sustainability Council',
      color: '#059669',
      description: 'Rigorous structural, electrical, and fire safety compliance ensuring world-class industrial structural integrity in Bangladesh.'
    },
    {
      name: 'WRAP Platinum',
      subtitle: 'Responsible Production',
      color: '#2563EB',
      description: 'Worldwide Responsible Accredited Production certification endorsing lawful, humane, and ethical apparel assembly.'
    },
    {
      name: 'GOTS',
      subtitle: 'Global Organic Textile Standard',
      color: '#16A34A',
      description: 'Certified organic fiber processing from field harvesting through environmentally and socially responsible manufacturing.'
    },
    {
      name: 'OEKO-TEX® 100',
      subtitle: 'Tested for Harmful Substances',
      color: '#7C3AED',
      description: 'Comprehensive chemical testing verifying fabrics, threads, and zips are entirely free from harmful chemical toxins.'
    },
    {
      name: 'GRS Certified',
      subtitle: 'Global Recycled Standard',
      color: '#D97706',
      description: 'Third-party certification verifying recycled fiber content and tracking sustainable chain of custody across spinning mills.'
    },
    {
      name: 'ISO 9001 & 14001',
      subtitle: 'Quality & Environmental Mgt',
      color: '#DC2626',
      description: 'Standardized operational quality control alongside certified environmental resource and waste management systems.'
    },
    {
      name: 'BCI Cotton',
      subtitle: 'Better Cotton Initiative',
      color: '#0891B2',
      description: 'Supporting soil health, water conservation, and fair farmer livelihoods across the upstream agricultural network.'
    }
  ];

  // Comparison Matrix: Conventional vs ETC Sustainable Model
  const comparisonData = [
    {
      parameter: 'Water Consumption (Denim / Piece)',
      conventional: '70 to 100 Liters / Garment',
      etcModel: '15 to 25 Liters (via Laser & Ozone Wash)',
      savings: 'Up to 75% Saved'
    },
    {
      parameter: 'Energy & Power Sourcing',
      conventional: 'Heavy reliance on national fossil grids',
      etcModel: 'Rooftop Solar & Heat Recovery Systems',
      savings: '4.2 MW Clean Solar Capacity'
    },
    {
      parameter: 'Wastewater Treatment',
      conventional: 'Basic chemical neutralization',
      etcModel: 'Biological ETP with 85% water recycling',
      savings: 'Zero Hazardous Discharge (ZDHC)'
    },
    {
      parameter: 'Factory Safety & Auditing',
      conventional: 'Ad-hoc or annual self-assessment',
      etcModel: 'Independent BSCI, WRAP & Accord inspection',
      savings: '100% 3rd-Party Verified'
    },
    {
      parameter: 'Fabric Cut Waste Management',
      conventional: 'Discarded to general landfill waste',
      etcModel: 'Segregated & upcycled into spun yarn',
      savings: '97%+ Yield Efficiency'
    }
  ];

  return (
    <main className="pt-24 bg-surface noise-bg min-h-screen text-on-surface">
      {/* 1. Hero Section */}
      <section className="relative px-6 md:px-16 lg:px-24 py-16 md:py-24 border-b border-outline-variant/15 overflow-hidden">
        {/* Subtle decorative background glows */}
        <div className="absolute top-12 right-12 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
              <Leaf className="w-3.5 h-3.5 text-secondary" />
              <span className="font-label text-[11px] uppercase tracking-[0.25em] text-secondary font-bold">
                Ethical & Sustainable Apparel Sourcing
              </span>
            </div>

            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-primary leading-[1.08] tracking-tight mb-8">
              Pioneering Responsible Textile Sourcing from <span className="italic font-normal text-secondary">Fiber to Fashion.</span>
            </h1>

            <p className="font-body text-base md:text-xl text-on-surface-variant leading-relaxed max-w-3xl mx-auto">
              ETC Apparel Ltd leads with conscience. Operating as a premier UK-Bangladesh buying house, we unite global retail standards with ethical factory environments, circular materials, and cutting-edge water-saving technologies.
            </p>
          </motion.div>

          {/* Key Metrics Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {metrics.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-outline-variant/20 shadow-sm hover:shadow-md hover:border-secondary/30 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-headline text-3xl md:text-4xl font-black text-primary group-hover:text-secondary transition-colors">
                    {item.value}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="font-label text-sm uppercase tracking-wider font-bold text-primary mb-1">
                  {item.label}
                </h3>
                <p className="font-body text-xs text-on-surface-variant/80 leading-relaxed">
                  {item.subtext}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. Interactive Pillars Explorer */}
      <section className="px-6 md:px-16 lg:px-24 py-20 md:py-28 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary font-bold block mb-3">
            Our Architectural Framework
          </span>
          <h2 className="font-headline text-3xl md:text-5xl font-black text-primary tracking-tight mb-5">
            The Six Pillars of Sustainable Execution
          </h2>
          <p className="font-body text-base text-on-surface-variant leading-relaxed">
            Sustainability cannot be an afterthought. It is engineered directly into our fabric selection, factory audits, dyeing methods, and post-consumer product planning.
          </p>
        </div>

        {/* Pillar Selection Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isActive = activePillar === idx;
            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillar(idx)}
                className={`flex flex-col items-center text-center p-5 rounded-xl border transition-all cursor-pointer ${
                  isActive
                    ? 'bg-primary text-white border-primary shadow-lg scale-102'
                    : 'bg-white/70 hover:bg-white text-on-surface-variant border-outline-variant/20 hover:border-secondary/40'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-colors ${
                  isActive ? 'bg-secondary text-white' : 'bg-surface-container text-primary'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className={`font-label text-xs uppercase tracking-wider font-bold leading-tight ${
                  isActive ? 'text-white' : 'text-primary'
                }`}>
                  {pillar.title}
                </span>
                <span className={`text-[10px] mt-1 line-clamp-1 ${
                  isActive ? 'text-secondary-fixed-dim' : 'text-on-surface-variant/60'
                }`}>
                  {pillar.tag}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Detail Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePillar}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl border border-outline-variant/20 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12"
          >
            {/* Visual Column */}
            <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full overflow-hidden">
              <img
                src={pillars[activePillar].image}
                alt={pillars[activePillar].title}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
                <span className="font-label text-[10px] uppercase tracking-[0.25em] text-secondary font-bold mb-2">
                  Pillar Focus #{activePillar + 1}
                </span>
                <h3 className="font-headline text-2xl md:text-3xl font-bold mb-2">
                  {pillars[activePillar].title}
                </h3>
                <p className="font-body text-xs text-white/80">
                  {pillars[activePillar].subtitle}
                </p>

                {/* Impact Badges */}
                <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-white/20">
                  {pillars[activePillar].impactStats.map((statItem, sIdx) => (
                    <div key={sIdx}>
                      <span className="font-headline text-xl md:text-2xl font-black text-secondary block">
                        {statItem.stat}
                      </span>
                      <span className="font-label text-[10px] uppercase tracking-wider text-white/70">
                        {statItem.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Information Column */}
            <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded bg-secondary/10 text-secondary font-label text-[10px] uppercase tracking-widest font-bold">
                    {pillars[activePillar].tag}
                  </span>
                  <span className="text-xs text-on-surface-variant/60 font-label">
                    Audit Standard: Verified
                  </span>
                </div>

                <h4 className="font-headline text-2xl md:text-3xl font-black text-primary mb-4">
                  {pillars[activePillar].subtitle}
                </h4>

                <p className="font-body text-base text-on-surface-variant leading-relaxed mb-8">
                  {pillars[activePillar].desc}
                </p>

                <h5 className="font-label text-xs uppercase tracking-[0.2em] text-primary font-bold mb-4 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-secondary" />
                  Key Operational Directives:
                </h5>

                <div className="space-y-3.5 mb-8">
                  {pillars[activePillar].points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-secondary/15 flex items-center justify-center shrink-0 mt-0.5 text-secondary">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-body text-sm text-on-surface leading-normal">
                        {pt}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-outline-variant/15 flex flex-wrap items-center justify-between gap-4">
                <span className="font-label text-xs text-on-surface-variant/70">
                  Ready to specify this in your tech packs?
                </span>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 font-label text-xs uppercase tracking-wider text-secondary font-bold hover:text-primary transition-colors group"
                >
                  Consult Our Sourcing Team
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* 3. Global Compliance & Certifications Showcase */}
      <section className="bg-white py-20 md:py-28 px-6 md:px-16 lg:px-24 border-y border-outline-variant/15">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary font-bold block mb-3">
                Global Verification
              </span>
              <h2 className="font-headline text-3xl md:text-5xl font-black text-primary tracking-tight">
                Accreditations & Compliance Codes
              </h2>
            </div>
            <p className="font-body text-base text-on-surface-variant max-w-md">
              We operate exclusively within production partner facilities certified by leading international bodies to guarantee flawless workplace and environmental compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, cIdx) => (
              <motion.div
                key={cIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: cIdx * 0.07 }}
                className="p-6 rounded-xl border border-outline-variant/20 bg-surface-container-low hover:bg-white hover:shadow-lg hover:border-secondary/30 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span 
                      className="px-3 py-1 rounded text-[11px] font-label font-bold uppercase tracking-wider text-white"
                      style={{ backgroundColor: cert.color }}
                    >
                      {cert.name}
                    </span>
                    <FileCheck className="w-4 h-4 text-outline-variant group-hover:text-secondary transition-colors" />
                  </div>
                  <h4 className="font-headline text-lg font-bold text-primary mb-2">
                    {cert.subtitle}
                  </h4>
                  <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                    {cert.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-outline-variant/10 flex items-center justify-between">
                  <span className="font-label text-[10px] uppercase tracking-widest text-secondary font-bold">
                    Tier-1 Verification
                  </span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Comparative Impact Matrix: Conventional vs ETC Model */}
      <section className="px-6 md:px-16 lg:px-24 py-20 md:py-28 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary font-bold block mb-3">
            Tangible Impact Metrics
          </span>
          <h2 className="font-headline text-3xl md:text-5xl font-black text-primary tracking-tight mb-5">
            Conventional Sourcing vs. ETC Eco-Standard
          </h2>
          <p className="font-body text-base text-on-surface-variant leading-relaxed">
            See how our proactive environmental investments and technological wash advancements generate measurable resource savings for modern fashion retailers.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-outline-variant/20 shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-primary text-white font-label text-xs uppercase tracking-wider">
                  <th className="py-4 px-6 md:px-8">Operational Focus</th>
                  <th className="py-4 px-6 md:px-8 text-on-primary-container">Conventional Sourcing</th>
                  <th className="py-4 px-6 md:px-8 text-secondary-fixed-dim">ETC Apparel Model</th>
                  <th className="py-4 px-6 md:px-8 text-emerald-400">Net Improvement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/15 font-body text-sm">
                {comparisonData.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-surface-container-low transition-colors">
                    <td className="py-5 px-6 md:px-8 font-bold text-primary font-label text-xs uppercase tracking-wider">
                      {row.parameter}
                    </td>
                    <td className="py-5 px-6 md:px-8 text-on-surface-variant/80">
                      {row.conventional}
                    </td>
                    <td className="py-5 px-6 md:px-8 font-semibold text-primary">
                      {row.etcModel}
                    </td>
                    <td className="py-5 px-6 md:px-8">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-label text-xs font-bold">
                        <TrendingDown className="w-3.5 h-3.5" />
                        {row.savings}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. Worker Welfare & Community Spotlight */}
      <section className="bg-primary text-white py-20 md:py-28 px-6 md:px-16 lg:px-24 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-secondary/10 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-secondary-fixed-dim font-label text-[10px] uppercase tracking-widest font-bold mb-6">
              <HeartHandshake className="w-3.5 h-3.5" />
              Human Dignity In Garmenting
            </div>

            <h2 className="font-headline text-3xl md:text-5xl font-black text-white leading-tight mb-6">
              Empowering the Artisans & Makers of Bangladesh.
            </h2>

            <p className="font-body text-base text-white/80 leading-relaxed mb-8">
              At ETC Apparel Ltd, we recognize that true sustainability cannot exist without human equity. We hold our partner factories accountable for fair, on-time wages, progressive workplace gender parity, and health and safety representation on every sewing floor.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center shrink-0 mt-1 font-bold text-xs">
                  01
                </div>
                <div>
                  <h4 className="font-label text-sm uppercase tracking-wider font-bold text-white mb-1">
                    Continuous Health & Safety Oversight
                  </h4>
                  <p className="font-body text-xs text-white/70 leading-relaxed">
                    Regular unannounced inspections verify clear exit ways, fire suppression systems, and clean drinking water filtration systems.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center shrink-0 mt-1 font-bold text-xs">
                  02
                </div>
                <div>
                  <h4 className="font-label text-sm uppercase tracking-wider font-bold text-white mb-1">
                    Leadership & Technical Career Paths
                  </h4>
                  <p className="font-body text-xs text-white/70 leading-relaxed">
                    Ongoing training empowers female machine operators to advance into quality control, industrial engineering, and floor supervision roles.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center shrink-0 mt-1 font-bold text-xs">
                  03
                </div>
                <div>
                  <h4 className="font-label text-sm uppercase tracking-wider font-bold text-white mb-1">
                    Transparent Grievance Channels
                  </h4>
                  <p className="font-body text-xs text-white/70 leading-relaxed">
                    Independent worker participation committees and confidential grievance helplines ensure worker voices are actively heard and respected.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&q=80&w=900"
                alt="Worker Empowerment & Ethical Garment Assembly"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                <blockquote className="font-headline text-lg italic text-white/90 mb-2">
                  "Sustainable trade is not an aspiration; it is the fundamental moral duty of modern supply chain stewards."
                </blockquote>
                <span className="font-label text-[11px] uppercase tracking-widest text-secondary font-bold">
                  ETC Apparel Ltd Board of Directors
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Call to Action */}
      <section className="px-6 md:px-16 lg:px-24 py-20 max-w-7xl mx-auto text-center">
        <div className="bg-surface-container-low p-10 md:p-16 rounded-3xl border border-outline-variant/20 shadow-xl max-w-4xl mx-auto">
          <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary font-bold block mb-4">
            Start Sourcing Responsibly
          </span>
          <h2 className="font-headline text-3xl md:text-5xl font-black text-primary tracking-tight mb-6">
            Ready to Build a Clean, Compliant Supply Chain?
          </h2>
          <p className="font-body text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed mb-8">
            Whether you require GOTS-certified organic cotton basics, ozone-washed denim, or certified BSCI manufacturing lines, our London and Dhaka teams are ready to support your next collection cycle.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="editorial-gradient text-on-primary px-8 py-4 rounded font-label text-xs uppercase tracking-[0.2em] font-bold shadow-lg hover:opacity-90 transition-all inline-flex items-center gap-2"
            >
              Initiate Sourcing Inquiry
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/products"
              className="bg-white border border-outline-variant text-primary px-8 py-4 rounded font-label text-xs uppercase tracking-[0.2em] font-bold shadow-sm hover:bg-surface-container transition-all"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Sustainability;
