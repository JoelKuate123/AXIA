import React from 'react';
import { AuditTool } from './AuditTool';
import { Button } from './ui/Button';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { ViewType } from '../types';

interface AuditPageProps {
  setView: (view: ViewType) => void;
}

export const AuditPage: React.FC<AuditPageProps> = ({ setView }) => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden bg-gradient-to-br from-[#FAFAFA] via-white to-[#F0F7FF]">
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#2A4EFA]/5 rounded-full filter blur-[100px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#C1F4D8]/10 rounded-full filter blur-[100px]" />

      <div className="max-w-4xl mx-auto relative z-10">
        <button onClick={() => setView('main')} className="flex items-center gap-2 text-[#2A4EFA] font-black uppercase tracking-widest text-sm mb-12 hover:gap-3 transition-all"><ArrowLeft className="w-4 h-4" /> Retour</button>

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#E0E7FF] px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#2A4EFA]" /><span className="text-[10px] font-black uppercase tracking-widest text-[#2A4EFA]">Audit Gratuit</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black font-heading leading-tight mb-6">
            Scanner votre <span className="bg-gradient-to-r from-[#2A4EFA] to-[#6366F1] bg-clip-text text-transparent">productivité.</span>
          </h2>
          <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto">Découvrez immédiatement les 3 domaines où vous perdez le plus de temps.</p>
        </div>

        <div className="bg-white/50 backdrop-blur-xl p-2 rounded-[4rem] shadow-2xl border border-white"><AuditTool /></div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 font-bold text-sm mb-8 italic">Audit humain ?</p>
          <Button className="px-10 py-5 bg-[#111A4D] whitespace-nowrap" onClick={() => window.open('https://meet.brevo.com/joelparfaitkuate/echanger-dun-projet', '_blank')}>Réserver un appel</Button>
        </div>
      </div>
    </div>
  );
};