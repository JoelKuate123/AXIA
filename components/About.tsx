
import React from 'react';
import { Section } from './ui/Section';
import { SectionId } from '../types';
import { Target, Heart, Shield } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <Section id={SectionId.About} className="bg-gradient-to-b from-white to-[#F0F7FF] px-4">
      <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
        <div>
          <span className="text-[#2A4EFA] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Notre Mission</span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-6">
            <span className="bg-gradient-to-r from-[#111A4D] via-[#2A4EFA] to-[#6366F1] bg-clip-text text-transparent">
              Audit, Outils & Formation.
            </span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed font-medium">
            Axia réconcilie les PME avec l'IA par un accompagnement complet : nous auditons vos processus, développons vos outils sur mesure et formons vos équipes pour une autonomie totale.
          </p>
          <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed font-medium">
            Notre objectif est simple : transformer la technologie en productivité réelle pour que vous puissiez vous concentrer sur votre croissance.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            <div className="space-y-3">
              <div className="text-[#2A4EFA] bg-white shadow-md w-10 h-10 rounded-xl flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-[#111A4D] uppercase text-[10px] tracking-widest">Temps Libéré</h4>
              <p className="text-[11px] text-gray-500 font-medium">Récupérez jusqu'à 10h de productivité par semaine.</p>
            </div>
            <div className="space-y-3">
              <div className="text-[#2A4EFA] bg-white shadow-md w-10 h-10 rounded-xl flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-[#111A4D] uppercase text-[10px] tracking-widest">Accompagnement</h4>
              <p className="text-[11px] text-gray-500 font-medium">Suivi constant et formation sur mesure par nos experts.</p>
            </div>
            <div className="space-y-3">
              <div className="text-[#2A4EFA] bg-white shadow-md w-10 h-10 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-[#111A4D] uppercase text-[10px] tracking-widest">Sur Mesure</h4>
              <p className="text-[11px] text-gray-500 font-medium">Outils propriétaires développés pour vos besoins réels.</p>
            </div>
          </div>
        </div>
        
        <div className="relative group mt-10 lg:mt-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2A4EFA] to-[#C1F4D8] rounded-[2rem] md:rounded-[3rem] rotate-3 opacity-20 group-hover:rotate-6 transition-transform" />
          <div className="aspect-[4/5] md:aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" alt="Équipe Axia - Collaboration Professionnelle" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" />
          </div>
          <div className="absolute -bottom-6 -left-4 md:-bottom-10 md:-left-10 glass-card p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl max-w-[220px] md:max-w-xs z-20 border border-white/60 animate-float">
            <p className="text-[#111A4D] font-bold text-lg md:text-2xl mb-1 md:mb-2 leading-tight">"Récupérez vos vendredis grâce à l'IA."</p>
            <p className="text-[#2A4EFA] font-semibold text-[10px] md:text-sm tracking-widest uppercase">— Stratégie Axia</p>
          </div>
        </div>
      </div>
    </Section>
  );
};
