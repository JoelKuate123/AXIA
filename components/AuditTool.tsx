
import React, { useState } from 'react';
import { generateBusinessAudit } from '../services/geminiService';
import { Button } from './ui/Button';
import { Sparkles, ArrowRight, Loader2, CheckCircle2, Zap } from 'lucide-react';
import { AuditResult } from '../types';

export const AuditTool: React.FC = () => {
  const [industry, setIndustry] = useState('');
  const [goal, setGoal] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<AuditResult[] | null>(null);

  const handleAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!industry || !goal) return;

    setIsLoading(true);
    const data = await generateBusinessAudit(industry, goal);
    setResults(data);
    setIsLoading(false);
  };

  return (
    <div className="w-full glass-card rounded-[2rem] md:rounded-[3rem] shadow-2xl border border-white/60 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-2 md:h-3 bg-gradient-to-r from-[#2A4EFA] via-[#C1F4D8] to-[#2A4EFA]" />
      
      <div className="p-6 md:p-12 lg:p-14">
        <div className="flex items-center gap-4 md:gap-5 mb-6 md:mb-10">
          <div className="bg-gradient-to-br from-[#2A4EFA] to-[#6366F1] p-3 md:p-4 rounded-2xl md:rounded-3xl shadow-lg">
            <Zap className="w-5 h-5 md:w-8 md:h-8 text-white fill-white" />
          </div>
          <div>
            <h3 className="text-xl md:text-3xl font-black text-[#111A4D] font-heading leading-none mb-1 md:mb-2">
              Axia Al Scan<span className="text-[#2A4EFA]">™</span>
            </h3>
            <p className="text-gray-400 font-bold uppercase text-[8px] md:text-[10px] tracking-[0.2em]">Diagnostic de Performance</p>
          </div>
        </div>

        {!results ? (
          <form onSubmit={handleAudit} className="space-y-6 md:space-y-8">
            <p className="text-sm md:text-xl text-gray-500 font-medium leading-relaxed">
              Analysez vos processus et découvrez comment l'IA peut décupler votre rentabilité.
            </p>
            
            <div className="space-y-4 md:space-y-6">
              <div className="group">
                <label className="block text-[10px] md:text-sm font-black text-[#111A4D] uppercase tracking-widest mb-2 transition-colors group-focus-within:text-[#2A4EFA]">Votre Secteur</label>
                <input
                  type="text"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl border-2 border-gray-100 focus:border-[#2A4EFA] focus:ring-0 outline-none transition-all bg-white/50 backdrop-blur-sm text-sm md:text-lg font-medium"
                  placeholder="Ex: Agence immobilière, Cabinet médical..."
                  required
                />
              </div>
              <div>
                <label className="block text-[10px] md:text-sm font-black text-[#111A4D] uppercase tracking-widest mb-2">Votre Priorité</label>
                <div className="relative">
                  <select
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="w-full px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl border-2 border-gray-100 focus:border-[#2A4EFA] focus:ring-0 outline-none transition-all bg-white/50 backdrop-blur-sm text-sm md:text-lg font-medium appearance-none"
                    required
                  >
                    <option value="">Choisissez un objectif...</option>
                    <option value="gagner du temps">Gagner 10h par semaine</option>
                    <option value="automatiser le SAV">Libérer mon support client</option>
                    <option value="simplifier la facturation">Zéro paperasse administrative</option>
                    <option value="automatiser la prospection">Générer des leads en continu</option>
                  </select>
                  <div className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 pointer-events-none text-[#2A4EFA]">
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 rotate-90" />
                  </div>
                </div>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full py-3 md:py-4 text-sm md:text-lg font-black group shadow-blue-500/30 whitespace-nowrap"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="animate-spin w-4 h-4 md:w-5 md:h-5" /> Analyse en cours...
                </span>
              ) : (
                <span className="flex items-center justify-between w-full">
                  Lancer le Scan IA
                  <Sparkles className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:scale-125" />
                </span>
              )}
            </Button>
          </form>
        ) : (
          <div className="animate-fadeIn">
            <div className="flex justify-between items-center mb-6 md:mb-10">
                <h4 className="text-xl md:text-3xl font-black text-[#111A4D] font-heading leading-tight">
                  Gisements pour votre <br/><span className="text-[#2A4EFA] capitalize">{industry}</span>
                </h4>
                <div className="bg-[#C1F4D8] p-2 md:p-3 rounded-xl md:rounded-2xl text-[#111A4D] flex-shrink-0 shadow-sm border border-white">
                    <CheckCircle2 className="w-5 h-5 md:w-7 md:h-7" />
                </div>
            </div>
            
            <div className="space-y-4">
              {results.map((item, idx) => (
                <div key={idx} className="group glass-card p-4 md:p-6 rounded-2xl md:rounded-3xl border border-white hover:border-[#2A4EFA]/20 transition-all duration-300 shadow-sm hover:shadow-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h5 className="font-black text-[#111A4D] text-sm md:text-lg leading-tight group-hover:text-[#2A4EFA] transition-colors">{item.title}</h5>
                    <span className="bg-[#2A4EFA] text-white text-[7px] md:text-[10px] font-black px-2 py-1 rounded-lg uppercase tracking-widest whitespace-normal sm:whitespace-nowrap text-center self-start sm:self-auto min-w-[80px]">
                      {item.impact}
                    </span>
                  </div>
                  <p className="text-gray-500 text-[10px] md:text-sm leading-relaxed font-medium">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 md:mt-12 pt-6 md:pt-10 border-t border-gray-100 text-center flex flex-col gap-4">
              <p className="text-xs md:text-sm text-gray-400 font-bold">Voulez-vous implémenter ces solutions ?</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button onClick={() => setResults(null)} variant="outline" className="flex-1 text-xs md:text-sm py-2 whitespace-nowrap">
                  Nouvelle analyse
                </Button>
                <Button onClick={() => window.open('https://meet.brevo.com/joelparfaitkuate/echanger-dun-projet', '_blank')} className="flex-1 text-xs md:text-sm py-2 whitespace-nowrap">
                  En discuter
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
