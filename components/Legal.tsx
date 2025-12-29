
import React, { useEffect } from 'react';
import { ViewType } from '../types';
import { ArrowLeft } from 'lucide-react';
import { Button } from './ui/Button';

interface LegalProps {
  view: ViewType;
  setView: (view: ViewType) => void;
}

export const Legal: React.FC<LegalProps> = ({ view, setView }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const getContent = () => {
    switch (view) {
      case 'mentions-legales':
        return {
          title: "Mentions Légales",
          content: (
            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-bold mb-3 text-[#111A4D]">1. Éditeur du site</h3>
                <p>Le site internet Axia est édité par la société DH COMPANY, immatriculée à Bruxelles sous le numéro d'entreprise BE 0765.557.109.</p>
                <p>Siège social : Bruxelles, Belgique.</p>
                <p><strong>Fondateur : Kuate Joel Parfait</strong></p>
                <p>Directeur de la publication : Kuate Joel Parfait.</p>
              </section>
              <section>
                <h3 className="text-xl font-bold mb-3 text-[#111A4D]">2. Hébergement</h3>
                <p>Le site est hébergé par des services d'infrastructure cloud sécurisés conformes aux normes européennes.</p>
              </section>
              <section>
                <h3 className="text-xl font-bold mb-3 text-[#111A4D]">3. Contact</h3>
                <p>Email : hello@dhcompany.pro</p>
                <p>Téléphone : +32 465 55 71 09</p>
              </section>
            </div>
          )
        };
      case 'confidentialite':
        return {
          title: "Politique de Confidentialité",
          content: (
            <div className="space-y-6">
              <p>Chez Axia, nous prenons la protection de vos données personnelles très au sérieux. Cette politique détaille comment nous traitons vos informations conformément au RGPD.</p>
              <section>
                <h3 className="text-xl font-bold mb-3 text-[#111A4D]">Données collectées</h3>
                <p>Nous collectons les données que vous nous transmettez via le formulaire de contact (nom, email, message) et l'outil d'audit.</p>
              </section>
              <section>
                <h3 className="text-xl font-bold mb-3 text-[#111A4D]">Finalité</h3>
                <p>Vos données sont exclusivement utilisées pour répondre à vos demandes de services et améliorer nos recommandations. Elles ne sont jamais revendues à des tiers.</p>
              </section>
              <section>
                <h3 className="text-xl font-bold mb-3 text-[#111A4D]">Sécurité des Modèles</h3>
                <p>Les données saisies dans notre outil d'audit sont traitées de manière éphémère par nos algorithmes et ne sont pas utilisées pour l'entraînement public sans votre consentement explicite.</p>
              </section>
            </div>
          )
        };
      case 'cgv':
        return {
          title: "Conditions Générales de Vente",
          content: (
            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-bold mb-3 text-[#111A4D]">1. Objet</h3>
                <p>Les présentes CGV régissent les prestations de services fournies par Axia : Audits, Implémentations techniques et Formations.</p>
              </section>
              <section>
                <h3 className="text-xl font-bold mb-3 text-[#111A4D]">2. Prestations</h3>
                <p>Chaque mission fait l'objet d'un devis détaillé. L'accord du client par signature du devis vaut acceptation des présentes CGV.</p>
              </section>
              <section>
                <h3 className="text-xl font-bold mb-3 text-[#111A4D]">3. Tarifs et Paiement</h3>
                <p>Les tarifs sont exprimés en Euros (€) hors taxes. Les factures sont payables sous 15 jours à compter de la date d'émission.</p>
              </section>
              <section>
                <h3 className="text-xl font-bold mb-3 text-[#111A4D]">4. Propriété Intellectuelle</h3>
                <p>Le client conserve la propriété de ses données. Axia reste propriétaire des outils propriétaires développés, sauf cession de droits spécifiée.</p>
              </section>
            </div>
          )
        };
      default:
        return { title: "", content: null };
    }
  };

  const data = getContent();

  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
        <button onClick={() => setView('main')} className="flex items-center gap-2 text-[#2A4EFA] font-bold mb-8 hover:gap-3 transition-all"><ArrowLeft className="w-5 h-5" /> Retour</button>
        <h1 className="text-4xl font-bold text-[#111A4D] mb-8 font-heading">{data.title}</h1>
        <div className="text-gray-600 leading-relaxed">{data.content}</div>
        <div className="mt-12 pt-8 border-t border-gray-100"><Button onClick={() => setView('main')} variant="outline" className="whitespace-nowrap">Retour au site</Button></div>
      </div>
    </div>
  );
};
