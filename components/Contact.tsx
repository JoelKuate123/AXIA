import React, { useState } from 'react';
import { Section } from './ui/Section';
import { SectionId } from '../types';
import { Button } from './ui/Button';
import { Mail, Phone, Loader2, CheckCircle2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <Section id={SectionId.Contact} className="bg-gradient-to-b from-[#F8FAFF] via-white to-secondary/10 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl -z-10" />
      
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 relative z-10">
        <div>
          <h2 className="text-4xl md:text-5xl font-black font-heading leading-tight mb-6">
            <span className="bg-gradient-to-r from-[#111A4D] via-[#2A4EFA] to-[#6366F1] bg-clip-text text-transparent">
              Libérez votre temps.
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed font-medium">Premier échange gratuit pour évaluer votre potentiel de productivité.</p>
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-6 rounded-[2rem] bg-white border border-gray-100 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
                <div className="bg-[#E0E7FF] p-4 rounded-2xl text-[#2A4EFA]"><Mail className="w-6 h-6" /></div>
                <div>
                    <div className="text-xs text-gray-500 font-black uppercase tracking-widest mb-1">Email</div>
                    <div className="text-[#111A4D] font-bold text-lg">hello@dhcompany.pro</div>
                </div>
            </div>
            <div className="flex items-center gap-4 p-6 rounded-[2rem] bg-white border border-gray-100 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
                <div className="bg-[#C1F4D8] p-4 rounded-2xl text-[#111A4D]"><Phone className="w-6 h-6" /></div>
                <div>
                    <div className="text-xs text-gray-500 font-black uppercase tracking-widest mb-1">Téléphone</div>
                    <div className="text-[#111A4D] font-bold text-lg">+32 465 55 71 09</div>
                </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[3rem] p-8 md:p-12 border border-gray-100 shadow-2xl">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-3xl font-black text-[#111A4D] mb-8 font-heading">Une question ?</h3>
              <div className="space-y-4">
                <input type="text" className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-[#2A4EFA] outline-none bg-[#FAFAFA]" placeholder="Nom" required />
                <input type="email" className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-[#2A4EFA] outline-none bg-[#FAFAFA]" placeholder="Email" required />
                <textarea className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-[#2A4EFA] outline-none bg-[#FAFAFA] h-32" placeholder="Message" required />
              </div>
              <Button type="submit" className="w-full py-5 text-xl font-black whitespace-nowrap" disabled={isLoading}>{isLoading ? <Loader2 className="animate-spin" /> : "Envoyer"}</Button>
            </form>
          ) : (
            <div className="text-center py-12">
              <CheckCircle2 className="w-16 h-16 text-[#C1F4D8] mx-auto mb-6" />
              <h3 className="text-3xl font-black text-[#111A4D] mb-2">Merci !</h3>
              <p className="text-gray-500 font-medium">Réponse sous 24h.</p>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};