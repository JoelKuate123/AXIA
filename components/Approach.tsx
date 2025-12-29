
import React from 'react';
import { Section } from './ui/Section';
import { SectionId } from '../types';
import { Button } from './ui/Button';
import { Microscope, Waypoints, Rocket, GraduationCap, Briefcase } from 'lucide-react';

export const Approach: React.FC = () => {
  const BREVO_LINK = 'https://meet.brevo.com/joelparfaitkuate/echanger-dun-projet';

  const steps = [
    {
      icon: <Microscope className="w-8 h-8 text-[#2A4EFA]" />,
      title: "1. Audit Immédiat",
      desc: "Analyse chirurgicale de vos pertes de temps. Diagnostic précis en 24h.",
      color: "bg-[#F0F7FF]",
      borderColor: "border-blue-100",
      accent: "bg-[#2A4EFA]"
    },
    {
      icon: <Waypoints className="w-8 h-8 text-[#111A4D]" />,
      title: "2. Stratégie & Dev",
      desc: "Création de votre roadmap et développement d'outils IA propriétaires.",
      color: "bg-[#F5F3FF]",
      borderColor: "border-purple-100",
      accent: "bg-[#6366F1]"
    },
    {
      icon: <Rocket className="w-8 h-8 text-[#111A4D]" />,
      title: "3. Déploiement",
      desc: "Installation et synchronisation de vos systèmes automatisés en 10 jours.",
      color: "bg-[#F0FFF4]",
      borderColor: "border-green-100",
      accent: "bg-[#10B981]"
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-[#2A4EFA]" />,
      title: "4. Formation & Suivi",
      desc: "Accompagnement de vos équipes et optimisation continue de votre ROI.",
      color: "bg-[#FFF7ED]",
      borderColor: "border-orange-100",
      accent: "bg-[#F59E0B]"
    }
  ];

  return (
    <Section id={SectionId.Approach} className="bg-gradient-to-br from-[#F0F7FF] via-white to-secondary/10 px-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl -z-10" />
      
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 md:mb-20 relative z-10">
        <span className="text-[#2A4EFA] font-black uppercase tracking-[0.2em] text-xs mb-4">Méthodologie</span>
        <h2 className="text-4xl md:text-5xl font-black font-heading leading-tight mb-6">
          <span className="bg-gradient-to-r from-[#111A4D] via-[#2A4EFA] to-[#6366F1] bg-clip-text text-transparent">
            L'IA sans mal de tête.
          </span>
        </h2>
        <p className="text-xl text-gray-500 font-medium">Un cycle complet d'accompagnement pour des résultats rapides et durables.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className={`group relative p-8 md:p-10 rounded-[2.5rem] border ${step.borderColor} ${step.color} transition-all duration-500 hover:shadow-xl hover:-translate-y-2 overflow-hidden shadow-sm`}
          >
            <div className={`absolute top-0 right-0 w-24 h-24 ${step.accent} opacity-5 rounded-bl-full group-hover:scale-150 transition-transform duration-700`} />
            <div className="mb-6 bg-white w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              {step.icon}
            </div>
            <h3 className="text-xl md:text-2xl font-black text-[#111A4D] mb-4 font-heading">{step.title}</h3>
            <p className="text-gray-600 leading-relaxed font-medium text-sm md:text-base">{step.desc}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-16 md:mt-20 glass-card rounded-[2.5rem] p-8 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 border border-white shadow-2xl relative overflow-hidden z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#2A4EFA]/5 to-secondary/5 -z-10" />
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="bg-[#C1F4D8] p-4 md:p-5 rounded-full shadow-lg animate-bounce"><Briefcase className="w-8 h-8 text-[#111A4D]" /></div>
            <div className="text-center md:text-left">
                <h4 className="font-black text-xl md:text-2xl text-[#111A4D] mb-2">Accélérez votre croissance</h4>
                <p className="text-base md:text-lg text-gray-500 font-medium max-w-md leading-relaxed">Nous transformons vos idées en systèmes automatisés performants. Profitez d'un partenaire IA à vos côtés.</p>
            </div>
        </div>
        <Button 
            className="w-full lg:w-auto text-sm md:text-lg px-8 py-3 bg-[#111A4D] font-black whitespace-nowrap"
            onClick={() => window.open(BREVO_LINK, '_blank')}
        >
            Réserver mon audit gratuit
        </Button>
      </div>
    </Section>
  );
};
