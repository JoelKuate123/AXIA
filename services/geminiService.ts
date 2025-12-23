
import { GoogleGenAI, Type } from "@google/genai";
import { AuditResult } from "../types";

export const generateBusinessAudit = async (businessType: string, goal: string): Promise<AuditResult[]> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const model = 'gemini-3-flash-preview';
    const prompt = `
      Act as a senior Productivity & AI consultant for the agency Axia.
      The client is a "${businessType}" looking to "${goal}".
      
      Suggest 3 specific, high-impact AI/Automation implementations to help them save time and boost productivity immediately.
      Avoid technical jargon. Focus on time regained and business efficiency.
      
      IMPORTANT: The output MUST be in FRENCH.
      
      Return the response in JSON format with a list of 3 items, each having:
      - title: Short punchy title (max 5 words) in French focusing on the solution.
      - description: 1-2 sentences explaining how it saves time in French.
      - impact: A projected time saving or productivity metric (e.g. "Gagnez 5h/semaine", "Traitement 10x plus rapide") in French.
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
    return [
      {
        title: "Automatisation de la Facturation",
        description: "Éliminez la saisie manuelle en extrayant les données de vos factures automatiquement vers votre logiciel comptable.",
        impact: "Gagnez 4h par semaine"
      },
      {
        title: "Assistant Support 24/7",
        description: "Répondez instantanément aux questions répétitives de vos clients sans intervention humaine.",
        impact: "80% de tickets en moins"
      },
      {
        title: "Tri Intelligent des Emails",
        description: "Catégorisez et priorisez vos emails entrants pour ne traiter que les urgences réelles.",
        impact: "Productivité x2"
      }
    ];
  }
};
