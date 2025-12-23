
import React from 'react';
import { Section } from './ui/Section';

export const TrustedBy: React.FC = () => {
  const companies = [
    { name: 'Les ecuadors', font: 'font-serif' },
    { name: 'Hyla', font: 'font-heading' },
    { name: 'Homasys', font: 'font-sans uppercase tracking-tighter' },
    { name: 'Hub brussels', font: 'font-heading lowercase' },
    { name: 'BVGI', font: 'font-mono font-black' },
    { name: 'Kerawa', font: 'font-serif italic' },
  ];

  // On double la liste pour un effet de boucle infinie fluide
  const displayList = [...companies, ...companies];

  return (
    <div className="bg-white border-y border-gray-100 py-8 md:py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-6 md:mb-8 text-center">
        <span className="text-[#2A4EFA] font-black text-[10px] md:text-xs uppercase tracking-[0.3em] block">ILS NOUS FONT CONFIANCE</span>
      </div>
      
      <div className="logo-carousel-container relative">
        <div className="flex animate-scroll whitespace-nowrap gap-12 md:gap-24 items-center w-max">
          {displayList.map((company, index) => (
            <div key={index} className="flex flex-col items-center group cursor-default px-4">
              <span className={`text-2xl md:text-4xl font-bold text-gray-300 group-hover:text-[#111A4D] transition-colors duration-500 whitespace-nowrap ${company.font}`}>
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-8 flex justify-center items-center gap-3 text-[10px] md:text-sm text-gray-400 font-bold uppercase tracking-widest">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        Productivité PME optimisée • Bruxelles & International
      </div>
    </div>
  );
};
