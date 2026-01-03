
import React from 'react';
import { Section } from './ui/Section';
import { SectionId } from '../types';
import { Quote } from 'lucide-react';

export const CaseStudies: React.FC = () => {
  return (
    <Section id={SectionId.CaseStudies} className="bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-4">
          <span className="bg-gradient-to-r from-[#111A4D] via-[#2A4EFA] to-[#6366F1] bg-clip-text text-transparent">
            Des résultats concrets.
          </span>
        </h2>
        <p className="text-gray-600 font-medium">L'IA au service de la rentabilité réelle des PME.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-[#FAFAFA] rounded-3xl p-8 border border-gray-100 relative group hover:shadow-xl transition-all duration-300">
          <Quote className="absolute top-8 right-8 w-12 h-12 text-[#E5E7EB] fill-[#E5E7EB]" />
          <div className="flex gap-2 mb-6">
            <span className="bg-white border border-gray-200 px-3 py-1 rounded-full text-xs font-semibold text-gray-500 uppercase tracking-wide">Temps</span>
          </div>
          <h3 className="text-3xl font-bold text-[#2A4EFA] mb-2">+22% CA</h3>
          <p className="text-gray-900 font-medium text-lg mb-6 leading-relaxed">"Axia a automatisé nos commandes. Je gagne 1h par jour pour me concentrer sur mon cœur de métier."</p>
          <div className="flex items-center gap-4 border-t border-gray-200 pt-6">
            <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden"><img src="https://i.pravatar.cc/100?u=jean" alt="Jean" className="w-full h-full object-cover" /></div>
            <div>
              <div className="font-semibold text-[#111A4D]">Jean Dubois</div>
              <div className="text-sm text-gray-500">Fondateur, <span className="text-[#2A4EFA] font-semibold">Maison Dubois</span></div>
            </div>
          </div>
        </div>

        <div className="bg-[#FAFAFA] rounded-3xl p-8 border border-gray-100 relative group hover:shadow-xl transition-all duration-300">
          <Quote className="absolute top-8 right-8 w-12 h-12 text-[#E5E7EB] fill-[#E5E7EB]" />
          <div className="flex gap-2 mb-6">
            <span className="bg-white border border-gray-200 px-3 py-1 rounded-full text-xs font-semibold text-gray-500 uppercase tracking-wide">Productivité</span>
          </div>
          <h3 className="text-3xl font-bold text-[#2A4EFA] mb-2">x3 Leads</h3>
          <p className="text-gray-900 font-medium text-lg mb-6 leading-relaxed">"L'agent IA qualifie désormais nos prospects 24/7. Notre efficacité commerciale a explosé."</p>
          <div className="flex items-center gap-4 border-t border-gray-200 pt-6">
            <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden"><img src="https://i.pravatar.cc/100?u=sarah" alt="Sarah" className="w-full h-full object-cover" /></div>
            <div>
              <div className="font-semibold text-[#111A4D]">Sarah L.</div>
              <div className="text-sm text-gray-500">Dir. Associée, <span className="text-[#2A4EFA] font-semibold">LegalTech Sud</span></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-16 bg-[#111A4D] rounded-3xl p-8 md:p-12 text-white grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
        <div><div className="text-4xl font-bold font-heading mb-2 text-[#C1F4D8]">100%</div><div className="text-blue-200 font-semibold">Projets livrés</div></div>
        <div><div className="text-4xl font-bold font-heading mb-2 text-[#C1F4D8]">x4</div><div className="text-blue-200 font-semibold">ROI Moyen</div></div>
        <div><div className="text-4xl font-bold font-heading mb-2 text-[#C1F4D8]">24h</div><div className="text-blue-200 font-semibold">Délai Audit</div></div>
      </div>
    </Section>
  );
};
