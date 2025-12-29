
import React from 'react';
import { SectionId, ViewType } from '../types';
import { Button } from './ui/Button';
import { Section } from './ui/Section';
import { Star, Sparkle, ArrowRight } from 'lucide-react';
import { AuditTool } from './AuditTool';

interface HeroProps {
  setView: (view: ViewType) => void;
}

export const Hero: React.FC<HeroProps> = ({ setView }) => {
  const BREVO_LINK = 'https://meet.brevo.com/joelparfaitkuate/echanger-dun-projet';

  return (
    <Section id={SectionId.Home} className="pt-20 pb-8 md:pt-36 lg:pt-40 relative overflow-hidden bg-transparent px-4">
      {/* Dynamic background gradients */}
      <div className="absolute top-[-15%] right-[-10%] w-[300px] md:w-[900px] h-[300px] md:h-[900px] bg-gradient-to-br from-primary/20 via-secondary/10 to-transparent rounded-full filter blur-[80px] md:blur-[120px] animate-pulse-slow -z-10" />
      <div className="absolute bottom-[-10%] left-[-15%] w-[250px] md:w-[700px] h-[250px] md:h-[700px] bg-gradient-to-tr from-primary-light/40 via-secondary/20 to-transparent rounded-full filter blur-[60px] md:blur-[100px] animate-pulse-slow -z-10" />

      <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center relative z-10">
        <div className="space-y-4 md:space-y-8 animate-slideUp text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-5 py-2.5 rounded-full shadow-[0_4px_20px_-5px_rgba(42,78,250,0.2)] border border-[#2A4EFA]/10 mx-auto lg:mx-0">
            <Sparkle className="w-3.5 h-3.5 text-[#2A4EFA] animate-spin-slow" />
            <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.15em] text-[#2A4EFA]">L'expertise IA N°1 à Bruxelles</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black font-heading leading-[1] tracking-tight max-w-4xl mx-auto lg:mx-0">
            <span className="bg-gradient-to-r from-[#111A4D] via-[#2A4EFA] to-[#6366F1] bg-clip-text text-transparent block">
              Gagnez du temps
            </span>
            <span className="bg-gradient-to-r from-[#111A4D] via-[#2A4EFA] to-[#6366F1] bg-clip-text text-transparent block">
              avec l'IA
            </span>
            <span className="bg-gradient-to-r from-[#111A4D] via-[#2A4EFA] to-[#6366F1] bg-clip-text text-transparent block">
              en automatisant.
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
            Audit, Stratégie & Déploiement : Nous réconcilions les organisations avec l'IA pour libérer votre temps. <span className="bg-[#C1F4D8] px-2 rounded-lg text-[#111A4D]">ROI immédiat.</span>
          </p>
          
          <div className="flex flex-col xs:flex-row justify-center lg:justify-start gap-4 pt-2">
            <Button 
              className="text-sm md:text-lg py-3 px-8 font-black flex gap-2 group shadow-xl"
              onClick={() => window.open(BREVO_LINK, '_blank')}
            >
              Prendre RDV
              <ArrowRight className="w-5 h-5 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="secondary" 
              onClick={() => setView('audit-dedicated')} 
              className="text-sm md:text-lg py-3 px-8 glass-card border-white/60 text-[#111A4D] font-black"
            >
              Scan Business
            </Button>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <div className="flex -space-x-3">
              {[1,2,3].map(i => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-white overflow-hidden shadow-sm">
                    <img src={`https://i.pravatar.cc/100?u=axia${i}`} alt="Client" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex items-center gap-1 mb-0.5">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 text-[#FFB800] fill-[#FFB800]" />)}
              </div>
              <span className="text-[12px] md:text-base font-bold text-[#111A4D]/60 tracking-tight">Accompagnement de 200+ PME</span>
            </div>
          </div>
        </div>

        <div className="animate-fadeIn delay-200 relative mt-8 lg:mt-0 w-full max-w-[550px] mx-auto lg:max-w-none">
          <div className="relative z-10 lg:scale-110 transform origin-center">
            <AuditTool />
          </div>
        </div>
      </div>
    </Section>
  );
};
