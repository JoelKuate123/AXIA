
import React from 'react';
import { Section } from './ui/Section';
import { SectionId, ViewType } from '../types';
import { Button } from './ui/Button';
import { Bot, BarChart3, GraduationCap, ArrowRight, Zap, Database, Settings, Search } from 'lucide-react';

interface ServicesProps {
  setView: (view: ViewType) => void;
}

export const Services: React.FC<ServicesProps> = ({ setView }) => {
  const BREVO_LINK = 'https://meet.brevo.com/joelparfaitkuate/echanger-dun-projet';

  const services = [
    {
      icon: <BarChart3 className="w-6 h-6 text-[#2A4EFA]" />,
      title: "Audit & Stratégie",
      desc: "Analyse chirurgicale de vos flux et roadmap d'automatisation sur mesure.",
      bg: "bg-[#F0F7FF] border-blue-100", 
      darkText: true,
      badge: "Étape 1"
    },
    {
      icon: <Settings className="w-6 h-6 text-[#2A4EFA]" />,
      title: "Développement IA",
      desc: "Conception et déploiement d'outils et d'agents IA propriétaires pour votre métier.",
      bg: "bg-white border-gray-100", 
      darkText: true,
      badge: "Sur-mesure"
    },
    {
      icon: <Database className="w-6 h-6 text-[#2A4EFA]" />,
      title: "Automatisations",
      desc: "Connexion de vos outils (CRM, SAV, Factures) pour un gain de temps immédiat.",
      bg: "bg-[#F2FFF9] border-emerald-100",
      darkText: true,
      badge: "Productivité"
    },
    {
      icon: <Search className="w-6 h-6 text-[#2A4EFA]" />,
      title: "Suivi & Pilotage",
      desc: "Optimisation continue de vos systèmes pour garantir un ROI maximal.",
      bg: "bg-[#F5F3FF] border-purple-100", 
      darkText: true,
      badge: "Performance"
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-[#2A4EFA]" />,
      title: "Formation Équipe",
      desc: "Accompagnement pédagogique complet, du niveau débutant au plus technique.",
      bg: "bg-white border-gray-100",
      darkText: true,
      badge: "Accompagnement"
    },
    {
      icon: <Bot className="w-6 h-6 text-[#2A4EFA]" />,
      title: "Agents SAV 24/7",
      desc: "Support client automatisé haute performance pour libérer votre équipe.",
      bg: "bg-[#F0FDF4] border-green-100",
      darkText: true,
      badge: "Sérénité"
    }
  ];

  return (
    <Section id={SectionId.Services} className="relative overflow-hidden bg-gradient-to-tr from-white via-[#F8FAFF] to-secondary/5 px-4">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full filter blur-[100px] -z-10" />
      
      <div className="flex flex-col items-center text-center mb-10 md:mb-16 relative z-10">
        <div className="flex items-center gap-2 text-[#2A4EFA] font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs mb-4">
          <Zap className="w-3 h-3 md:w-4 md:h-4 fill-[#2A4EFA]" />
          Expertises 360°
        </div>
        <h2 className="text-3xl md:text-5xl font-bold font-heading leading-tight">
          <span className="bg-gradient-to-r from-[#111A4D] via-[#2A4EFA] to-[#6366F1] bg-clip-text text-transparent">
            Une efficacité augmentée.
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
        {services.map((s, idx) => (
          <div key={idx} className={`group rounded-[2rem] p-6 md:p-8 flex flex-col h-full border relative overflow-hidden transition-all duration-500 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] ${s.bg}`}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#2A4EFA]/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000" />
            <div className="flex justify-between items-start mb-6 md:mb-8">
                <div className="p-3 rounded-xl bg-white shadow-sm border border-gray-50 w-fit group-hover:rotate-12 transition-transform">{s.icon}</div>
                <span className={`px-2 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-widest bg-gray-100 text-[#111A4D]`}>{s.badge}</span>
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 font-heading leading-tight text-[#111A4D]">{s.title}</h3>
            <p className="mb-6 text-sm leading-relaxed font-medium text-gray-500">{s.desc}</p>
            <button onClick={() => setView('services-detail')} className="flex items-center gap-2 font-bold mt-auto text-[10px] uppercase tracking-widest text-[#2A4EFA] group/btn transition-all hover:gap-3">En savoir plus<ArrowRight className="w-4 h-4 transition-transform" /></button>
          </div>
        ))}
      </div>
      
      <div className="mt-12 md:mt-16 text-center relative z-10">
        <Button 
            className="px-8 py-3.5 text-base md:text-lg font-bold shadow-blue-500/20 whitespace-nowrap"
            onClick={() => window.open(BREVO_LINK, '_blank')}
        >
            Discuter de mon projet
        </Button>
      </div>
    </Section>
  );
};
