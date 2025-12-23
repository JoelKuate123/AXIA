
import React from 'react';
import { SectionId, ViewType } from '../types';
import { Mail, Phone, MapPin, Linkedin, Facebook } from 'lucide-react';

interface FooterProps {
  setView: (view: ViewType) => void;
}

export const Footer: React.FC<FooterProps> = ({ setView }) => {
  const scrollTo = (id: string) => {
    setView('main');
    setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer className="bg-[#111A4D] text-white pt-24 pb-12 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2A4EFA] opacity-10 filter blur-[100px] -translate-x-1/4 translate-y-1/4" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-4 gap-16 relative z-10">
        <div className="col-span-1">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#2A4EFA] to-[#6366F1] flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-blue-500/20">
              A
            </div>
            <span className="font-heading font-bold text-3xl tracking-tight">Axia</span>
          </div>
          <p className="text-blue-200/70 text-lg leading-relaxed mb-8">
            L'agence qui réconcilie les PME avec l'IA pour libérer votre temps et automatiser votre croissance.
          </p>
          <div className="flex gap-4">
            <a 
              href="https://www.linkedin.com/company/digitalhousecompany/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#2A4EFA] transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://www.facebook.com/dhcompany.pro" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#2A4EFA] transition-all"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-xl mb-8 text-[#C1F4D8]">Navigation</h4>
          <ul className="space-y-4 text-blue-100/70 font-medium">
            <li><button onClick={() => scrollTo(SectionId.Home)} className="hover:text-white transition-colors">Accueil</button></li>
            <li><button onClick={() => scrollTo(SectionId.About)} className="hover:text-white transition-colors">À propos</button></li>
            <li><button onClick={() => scrollTo(SectionId.Services)} className="hover:text-white transition-colors">Expertises</button></li>
            <li><button onClick={() => scrollTo(SectionId.FAQ)} className="hover:text-white transition-colors">FAQ</button></li>
            <li><button onClick={() => scrollTo(SectionId.Contact)} className="hover:text-white transition-colors">Contact</button></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-xl mb-8 text-[#C1F4D8]">Légal</h4>
          <ul className="space-y-4 text-blue-100/70 font-medium">
            <li><button onClick={() => setView('mentions-legales')} className="hover:text-white transition-colors">Mentions Légales</button></li>
            <li><button onClick={() => setView('confidentialite')} className="hover:text-white transition-colors">Confidentialité</button></li>
            <li><button onClick={() => setView('cgv')} className="hover:text-white transition-colors">Conditions Générales</button></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-xl mb-8 text-[#C1F4D8]">Contact</h4>
          <ul className="space-y-6 text-blue-100/70">
            <li className="flex gap-3"><Mail className="w-5 h-5 text-[#2A4EFA]" /><span>hello@dhcompany.pro</span></li>
            <li className="flex gap-3"><Phone className="w-5 h-5 text-[#2A4EFA]" /><span>+32 465 55 71 09</span></li>
            <li className="flex gap-3"><MapPin className="w-5 h-5 text-[#2A4EFA]" /><span>Bruxelles, Belgique</span></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-20 pt-10 border-t border-white/5 text-center">
        <p className="text-blue-300/50 text-sm">
          © {new Date().getFullYear()} Axia Agency • DH COMPANY. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};
