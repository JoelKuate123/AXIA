import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Sparkles, User, Bot } from 'lucide-react';
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { Button } from './ui/Button';

// Message Type
interface Message {
  role: 'user' | 'model';
  text: string;
}

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Bonjour ! Je suis l\'assistant d\'Axia. Comment puis-je vous aider à libérer votre temps aujourd\'hui ?' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [chatSession, setChatSession] = useState<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const BREVO_LINK = "https://meet.brevo.com/joelparfaitkuate/echanger-dun-projet";

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  useEffect(() => {
    if (isOpen && !chatSession) {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const newChat = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: `
            Tu es l'assistant virtuel expert d'Axia, agence marketing & IA pour PME.
            
            CONSIGNES STRICTES :
            1. Ne réponds qu'en utilisant les informations du site Axia.
            2. Ne cite aucune source externe. 
            3. OBJECTIF FINAL : Pousser l'utilisateur à prendre rendez-vous via ce lien Brevo : ${BREVO_LINK}.
            
            BASE DE CONNAISSANCES :
            - Processus Axia : Audit (24h), Stratégie/Dev sur mesure, Déploiement automatisé (7-10j), Suivi ROI et Formation équipes (tout niveau).
            - Services : Audit productivité, Développement d'outils personnalisés, Automatisation CRM/SAV, Formation continue.
            - Valeurs : Réconcilier les PME avec l'IA, gain de temps, ROI garanti, RGPD strict.
            - Contact : Bruxelles, +32 465557109, hello@dhcompany.pro.
            
            TON STYLE :
            - Rassurant, sans jargon technique. 
            - Réponses courtes (max 3 phrases).
            - Explique les étapes : Audit -> Stratégie -> Déploiement -> Formation.
            - Propose systématiquement le lien Brevo.
          `,
        },
      });
      setChatSession(newChat);
    }
  }, [isOpen, chatSession]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || !chatSession) return;

    const userMessage = inputText;
    setInputText('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    try {
      const result = await chatSession.sendMessageStream({ message: userMessage });
      
      let fullResponse = '';
      setMessages(prev => [...prev, { role: 'model', text: '' }]);
      
      for await (const chunk of result) {
        const c = chunk as GenerateContentResponse;
        const text = c.text;
        if (text) {
          fullResponse += text;
          setMessages(prev => {
            const newMessages = [...prev];
            const lastMsg = newMessages[newMessages.length - 1];
            if (lastMsg && lastMsg.role === 'model') {
              lastMsg.text = fullResponse;
            }
            return newMessages;
          });
        }
      }
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Une erreur est survenue. N'hésitez pas à nous appeler directement au +32 465557109." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center ${
          isOpen ? 'bg-gray-200 text-[#111A4D]' : 'bg-[#2A4EFA] text-white'
        }`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-7 h-7" />}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[90vw] md:w-[400px] h-[580px] bg-white rounded-3xl shadow-2xl border border-gray-100 flex flex-col z-50 animate-slideUp overflow-hidden">
          <div className="bg-[#111A4D] p-4 flex items-center gap-3 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#2A4EFA] rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2" />
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
              <Sparkles className="w-5 h-5 text-[#C1F4D8]" />
            </div>
            <div>
              <h3 className="font-bold text-white text-lg">Axia Assistant</h3>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-[#C1F4D8] rounded-full animate-pulse"></span>
                <span className="text-blue-200 text-xs">Expert Productivité</span>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#FAFAFA]">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${
                  msg.role === 'user' ? 'bg-[#E0E7FF] text-[#2A4EFA]' : 'bg-[#111A4D] text-white'
                }`}>
                  {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-[#2A4EFA] text-white rounded-tr-none'
                      : 'bg-white text-gray-700 border border-gray-100 shadow-sm rounded-tl-none'
                  }`}
                >
                  {msg.text}
                  {msg.role === 'model' && msg.text.includes(BREVO_LINK) && (
                    <a 
                      href={BREVO_LINK} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-3 block bg-[#C1F4D8] text-[#111A4D] font-bold py-2 px-3 rounded-lg text-center hover:bg-[#A3E8C1] transition-colors"
                    >
                      Prendre RDV
                    </a>
                  )}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex gap-3">
                 <div className="w-8 h-8 rounded-full bg-[#111A4D] flex-shrink-0 flex items-center justify-center text-white">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm flex items-center gap-1">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-gray-100">
            <div className="relative">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Votre question..."
                className="w-full pl-4 pr-12 py-3 bg-[#FAFAFA] border border-gray-200 rounded-xl focus:outline-none focus:border-[#2A4EFA] text-sm"
              />
              <button
                type="submit"
                disabled={!inputText.trim() || isTyping}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[#111A4D] text-white rounded-lg hover:bg-[#2A4EFA] disabled:opacity-50 transition-colors"
              >
                {isTyping ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};