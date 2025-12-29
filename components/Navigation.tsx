
import React, { useState, useEffect } from 'react';
import { SectionId, ViewType } from '../types';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';

interface NavigationProps {
  setView: (view: ViewType) => void;
  currentView: ViewType;
}

export const Navigation: React.FC<NavigationProps> = ({ setView, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: SectionId | 'audit-dedicated') => {
    if (id === 'audit-dedicated') {
      setView('audit-dedicated');
    } else {
      if (currentView !== 'main') {
        setView('main');
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'À Propos', id: SectionId.About },
    { label: 'Services', id: SectionId.Services },
    { label: 'FAQ', id: SectionId.FAQ },
    { label: 'Audit IA', id: 'audit-dedicated' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || currentView !== 'main' ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div 
          onClick={() => setView('main')} 
          className="cursor-pointer flex items-center gap-2 group"
        >
          <div className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-[#2A4EFA] flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/20">
            A
          </div>
          <span className={`font-heading font-bold text-lg md:text-xl tracking-tight text-[#111A4D]`}>
            Axia
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.id as any)}
              className="text-[#111A4D] hover:text-[#2A4EFA] font-bold text-sm transition-colors uppercase tracking-widest"
            >
              {link.label}
            </button>
          ))}
          <Button 
            variant="primary" 
            className="py-2 px-5 text-sm"
            onClick={() => window.open('https://meet.brevo.com/joelparfaitkuate/echanger-dun-projet', '_blank')}
          >
            Parlons IA
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-[#111A4D] hover:bg-gray-100 rounded-xl transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 p-8 flex flex-col gap-6 shadow-2xl animate-fadeIn h-[100vh]">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.id as any)}
              className="text-left text-[#111A4D] font-black text-lg uppercase tracking-widest border-b border-gray-50 pb-3"
            >
              {link.label}
            </button>
          ))}
          <Button 
            variant="primary" 
            className="w-full py-3 text-base"
            onClick={() => window.open('https://meet.brevo.com/joelparfaitkuate/echanger-dun-projet', '_blank')}
          >
            Parlons IA
          </Button>
        </div>
      )}
    </header>
  );
};
