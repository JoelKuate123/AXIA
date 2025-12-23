import React, { useState } from 'react';
import { Section } from './ui/Section';
import { SectionId } from '../types';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "L'IA est-elle adaptée à une petite entreprise ?",
      answer: "Absolument. L'IA permet de compenser le manque de personnel sur des tâches répétitives (SAV, facturation, mails), permettant à l'équipe de se concentrer sur son cœur de métier."
    },
    {
      question: "Combien coûtent vos services ?",
      answer: "Nos audits commencent à 450€. Les implémentations sont sur devis avec un ROI garanti sous 6 mois."
    },
    {
      question: "Mes données clients sont-elles en sécurité ?",
      answer: "C'est notre priorité. Nous utilisons des architectures privées et conformes au RGPD. Vos données ne sont jamais utilisées pour l'entraînement public."
    },
    {
      question: "Quel est le délai de mise en place ?",
      answer: "Un diagnostic prend 24h. Une automatisation ou un chatbot standard peut être déployé en 7 à 10 jours."
    }
  ];

  return (
    <Section id={SectionId.FAQ} className="bg-gradient-to-b from-white to-[#F8FAFF]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex p-3 rounded-2xl bg-[#E0E7FF] text-[#2A4EFA] mb-4"><HelpCircle className="w-8 h-8" /></div>
          <h2 className="text-4xl md:text-5xl font-black font-heading leading-tight">
            <span className="bg-gradient-to-r from-[#111A4D] via-[#2A4EFA] to-[#6366F1] bg-clip-text text-transparent">
              Questions Fréquentes
            </span>
          </h2>
          <p className="text-gray-500 mt-4 text-lg font-medium">Tout ce que vous devez savoir pour démarrer sereinement.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md">
              <button onClick={() => setOpenIndex(openIndex === idx ? null : idx)} className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors">
                <span className="font-black text-xl text-[#111A4D] pr-4">{faq.question}</span>
                {openIndex === idx ? <ChevronUp className="text-[#2A4EFA]" /> : <ChevronDown className="text-gray-400" />}
              </button>
              {openIndex === idx && (
                <div className="px-8 pb-8 text-gray-600 text-lg font-medium animate-fadeIn leading-relaxed">
                  <div className="h-[1px] bg-gray-100 mb-6" />{faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};