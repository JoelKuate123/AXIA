
import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { Cookie, X, ShieldCheck } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà fait un choix
    const consent = localStorage.getItem('axia-cookie-consent');
    if (!consent) {
      // Petit délai pour l'effet visuel après le chargement
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('axia-cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('axia-cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-md z-[100] animate-slideUp">
      <div className="glass-card bg-white/95 backdrop-blur-xl border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[2rem] p-6 md:p-8 relative overflow-hidden">
        {/* Décoration subtile */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-[#C1F4D8]/20 rounded-bl-full -z-10" />
        
        <div className="flex items-start gap-4">
          <div className="bg-[#2A4EFA] p-3 rounded-2xl text-white shadow-lg shadow-blue-500/20">
            <Cookie className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-[#111A4D] font-bold font-heading text-lg">Respect de la vie privée</h4>
              <button onClick={() => setIsVisible(false)} className="text-gray-400 hover:text-[#111A4D] transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-gray-500 text-sm font-medium leading-relaxed mb-6">
              Axia utilise des cookies pour analyser votre navigation et améliorer votre expérience sur notre plateforme d'IA.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                onClick={handleAccept} 
                className="flex-1 py-3 text-xs md:text-sm font-bold whitespace-nowrap"
              >
                Tout accepter
              </Button>
              <Button 
                onClick={handleDecline} 
                variant="secondary" 
                className="flex-1 py-3 text-xs md:text-sm font-bold border-gray-100 whitespace-nowrap"
              >
                Refuser
              </Button>
            </div>
            <div className="mt-4 flex items-center justify-center gap-2">
              <ShieldCheck className="w-3 h-3 text-green-500" />
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Conforme RGPD</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
