
import React, { useEffect } from 'react';
import { Section } from './ui/Section';
import { SectionId } from '../types';
import { Mail, Phone } from 'lucide-react';

declare global {
  interface Window {
    Tally: any;
  }
}

export const Contact: React.FC = () => {
  useEffect(() => {
    // Fonction pour charger Tally de manière sécurisée
    const loadTally = () => {
      if (window.Tally) {
        window.Tally.loadEmbeds();
      } else {
        // Si Tally n'est pas encore prêt, on réessaye un peu plus tard
        setTimeout(loadTally, 500);
      }
    };

    loadTally();
  }, []);

  return (
    <Section id={SectionId.Contact} className="bg-gradient-to-b from-[#F8FAFF] via-white to-secondary/10 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl -z-10" />
      
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 relative z-10">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-6">
            <span className="bg-gradient-to-r from-[#111A4D] via-[#2A4EFA] to-[#6366F1] bg-clip-text text-transparent">
              Libérez votre temps.
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed font-medium">Premier échange gratuit pour évaluer votre potentiel de productivité.</p>
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-6 rounded-[2rem] bg-white border border-gray-100 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
                <div className="bg-[#E0E7FF] p-4 rounded-2xl text-[#2A4EFA]"><Mail className="w-6 h-6" /></div>
                <div>
                    <div className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Email</div>
                    <div className="text-[#111A4D] font-semibold text-lg">hello@dhcompany.pro</div>
                </div>
            </div>
            <div className="flex items-center gap-4 p-6 rounded-[2rem] bg-white border border-gray-100 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
                <div className="bg-[#C1F4D8] p-4 rounded-2xl text-[#111A4D]"><Phone className="w-6 h-6" /></div>
                <div>
                    <div className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Téléphone</div>
                    <div className="text-[#111A4D] font-semibold text-lg">+32 465 55 71 09</div>
                </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[3rem] p-4 md:p-8 border border-gray-100 shadow-2xl min-h-[550px] flex flex-col overflow-hidden">
          <h3 className="text-3xl font-bold text-[#111A4D] mb-4 px-4 md:px-6 font-heading">Une question ?</h3>
          
          <div className="flex-1 w-full min-h-[450px]">
            {/* L'iframe utilise src directement pour éviter les problèmes de chargement asynchrone */}
            <iframe 
              src="https://tally.so/embed/44BZd5?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy" 
              width="100%" 
              height="450" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0} 
              title="Contact Form Axia"
              className="w-full h-full border-none"
            ></iframe>
          </div>
          
          <p className="text-[10px] text-gray-400 text-center font-medium mt-4">
            En envoyant ce formulaire, vous acceptez notre politique de confidentialité.
          </p>
        </div>
      </div>
    </Section>
  );
};
