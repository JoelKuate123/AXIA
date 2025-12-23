
import React from 'react';
import { Button } from './ui/Button';
import { ArrowLeft, CheckCircle2, Zap } from 'lucide-react';
import { ViewType } from '../types';

interface ServicesPageProps {
  setView: (view: ViewType) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ setView }) => {
  const BREVO_LINK = 'https://meet.brevo.com/joelparfaitkuate/echanger-dun-projet';

  const details = [
    {
      title: "Audit Opérationnel",
      desc: "Nous plongeons dans vos processus pour identifier chaque micro-tâche déléguable.",
      points: ["Flux de travail", "Coûts/Bénéfices", "Roadmap Productivité"],
      icon: <Zap className="w-5 h-5" />
    },
    {
      title: "Agents IA Dédiés",
      desc: "Création de cerveaux numériques qui parlent à vos clients et vendent 24h/24.",
      points: ["Personnalité de marque", "Intégration API", "Apprentissage"],
      icon: <Zap className="w-5 h-5" />
    },
    {
        title: "Growth Automation",
        desc: "Transformez votre base de données en revenus. Relances intelligentes automatiques.",
        points: ["Sync CRM", "Lead Scoring", "Campagnes dynamiques"],
        icon: <Zap className="w-5 h-5" />
      }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <button onClick={() => setView('main')} className="flex items-center gap-2 text-[#2A4EFA] font-black uppercase tracking-widest text-xs mb-8 hover:gap-3 transition-all">
          <ArrowLeft className="w-4 h-4" /> RETOUR
        </button>

        <h2 className="text-3xl md:text-5xl font-black font-heading leading-tight mb-6">
          <span className="bg-gradient-to-r from-[#111A4D] via-[#2A4EFA] to-[#6366F1] bg-clip-text text-transparent">Expertises Sans Limites.</span>
        </h2>
        
        <p className="text-lg md:text-2xl text-gray-500 font-medium mb-12 md:mb-16 max-w-4xl leading-relaxed">
          Nous transformons vos processus en avantages compétitifs grâce à la réconciliation des PME avec l'IA.
        </p>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {details.map((d, i) => (
            <div key={i} className="space-y-4 group p-6 md:p-8 rounded-[2rem] bg-[#FAFAFA] border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-[#2A4EFA] text-white rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">{d.icon}</div>
              <h3 className="text-xl md:text-2xl font-black text-[#111A4D] font-heading">{d.title}</h3>
              <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed">{d.desc}</p>
              <ul className="space-y-2 pt-2">
                {d.points.map((p, pi) => (
                  <li key={pi} className="flex items-center gap-2 text-xs md:text-sm font-black text-[#111A4D]"><CheckCircle2 className="w-4 h-4 text-[#C1F4D8] fill-[#C1F4D8]" />{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 md:mt-32 p-8 md:p-16 bg-[#111A4D] rounded-[2.5rem] md:rounded-[4rem] text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#2A4EFA] opacity-20 filter blur-[100px]" />
            <h2 className="text-3xl md:text-5xl font-black font-heading mb-6">Dominez votre marché.</h2>
            <p className="text-blue-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-medium">Réservez votre audit stratégique aujourd'hui.</p>
            <Button className="px-10 py-4 text-lg md:text-xl font-black whitespace-nowrap" onClick={() => window.open(BREVO_LINK, '_blank')}>Prendre RDV</Button>
        </div>
      </div>
    </div>
  );
};
