
import { GoogleGenAI, Type } from "@google/genai";
import { AuditResult } from "../types";

export const generateBusinessAudit = async (businessType: string, goal: string): Promise<AuditResult[]> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const model = 'gemini-3-flash-preview';
    
    // Prompt plus direct et contraignant pour forcer la variation selon le 'goal'
    const prompt = `
      Tu es l'expert senior en automatisation IA de l'agence AXIA. 
      Ton client travaille dans le secteur suivant : "${businessType}".
      Sa priorité absolue actuelle est : "${goal}".
      
      TA MISSION :
      Suggère 3 solutions d'IA ou d'automatisation CONCRÈTES et DIFFÉRENTES qui répondent DIRECTEMENT à l'objectif "${goal}" dans le contexte de "${businessType}".
      
      RÈGLES STRICTES :
      1. Les solutions doivent être personnalisées pour le métier de "${businessType}".
      2. Le champ 'impact' doit être une métrique chiffrée crédible (ex: -70% de temps, +25% de conversion, etc.).
      3. Pas de jargon technique complexe.
      4. Tout le contenu doit être en FRANÇAIS.
      
      Format de sortie : JSON array de 3 objets.
      Chaque objet doit avoir :
      - title: Titre punchy (max 5 mots).
      - description: Explication claire de comment ça aide à atteindre l'objectif "${goal}".
      - impact: Métrique de succès.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              description: { type: Type.STRING },
              impact: { type: Type.STRING }
            },
            required: ["title", "description", "impact"]
          }
        }
      }
    });

    const text = response.text;
    if (!text) return [];
    
    return JSON.parse(text) as AuditResult[];
  } catch (error) {
    console.error("Audit Generation Error:", error);
    // Fallback intelligent en cas d'erreur API
    return [
      {
        title: "Automatisation Intelligente",
        description: `Solution personnalisée pour aider votre entreprise de ${businessType} à ${goal}.`,
        impact: "Gain de temps immédiat"
      },
      {
        title: "Optimisation des Flux",
        description: "Analyse et réduction des tâches répétitives pour libérer votre équipe.",
        impact: "Productivité +30%"
      },
      {
        title: "Système IA Sur-mesure",
        description: "Implémentation d'un agent dédié à la gestion de vos processus critiques.",
        impact: "ROI garanti < 6 mois"
      }
    ];
  }
};
