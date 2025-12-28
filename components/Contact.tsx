
import React, { useState, useRef } from 'react';
import { Section } from './ui/Section';
import { SectionId } from '../types';
import { Button } from './ui/Button';
import { Mail, Phone, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Remplacez ces valeurs par vos IDs EmailJS
  const SERVICE_ID = 'service_default'; // Votre Service ID
  const TEMPLATE_ID = 'template_axia'; // Votre Template ID
  const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Votre Public Key (à mettre dans process.env idéalement)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsLoading(true);
    setError(null);

    try {
      // Envoi réel via EmailJS
      // Note: On utilise sendForm pour envoyer directement les données du formulaire
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );
      
      setSubmitted(true);
    } catch (err) {
      console.error("EmailJS Error:", err);
      setError("Une erreur est survenue lors de l'envoi. Veuillez réessayer ou nous contacter par téléphone.");
    } finally {
      setIsLoading(false);
    }
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
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-3xl font-black text-[#111A4D] mb-8 font-heading">Une question ?</h3>
              
              {error && (
                <div className="bg-red-50 text-red-600 p-4 rounded-2xl flex items-center gap-3 text-sm font-medium animate-fadeIn">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  {error}
                </div>
              )}

              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Nom complet</label>
                  <input 
                    name="from_name"
                    type="text" 
                    className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-[#2A4EFA] outline-none bg-[#FAFAFA] transition-all" 
                    placeholder="Ex: Jean Dupont" 
                    required 
                  />
                </div>
                
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Adresse Email</label>
                  <input 
                    name="reply_to"
                    type="email" 
                    className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-[#2A4EFA] outline-none bg-[#FAFAFA] transition-all" 
                    placeholder="jean@entreprise.com" 
                    required 
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Votre projet ou question</label>
                  <textarea 
                    name="message"
                    className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-[#2A4EFA] outline-none bg-[#FAFAFA] h-32 transition-all resize-none" 
                    placeholder="Décrivez brièvement vos besoins..." 
                    required 
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full py-5 text-xl font-black whitespace-nowrap" 
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center gap-3">
                    <Loader2 className="animate-spin w-6 h-6" /> Envoi en cours...
                  </span>
                ) : "Envoyer le message"}
              </Button>
              
              <p className="text-[10px] text-gray-400 text-center font-medium">
                En envoyant ce formulaire, vous acceptez notre politique de confidentialité.
              </p>
            </form>
          ) : (
            <div className="text-center py-12 animate-fadeIn">
              <div className="w-20 h-20 bg-[#C1F4D8] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <CheckCircle2 className="w-10 h-10 text-[#111A4D]" />
              </div>
              <h3 className="text-3xl font-black text-[#111A4D] mb-4">Message envoyé !</h3>
              <p className="text-gray-500 font-medium mb-8 leading-relaxed">
                Merci de nous avoir contactés. <br/>
                Un expert Axia reviendra vers vous sous 24h ouvrées.
              </p>
              <Button onClick={() => setSubmitted(false)} variant="outline" className="text-sm">
                Envoyer un autre message
              </Button>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};
