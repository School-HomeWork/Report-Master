
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY;

export class TEKNOFESTAIService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: API_KEY! });
  }

  async rewriteSection(content: string, context: string, depth: 'Academic' | 'Technical' | 'Formal'): Promise<string> {
    const response = await this.ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: `
        You are an expert TEKNOFEST UAV report editor. 
        Rewrite the following content for the report section: "${context}".
        
        Rules:
        1. Tone must be strictly ${depth}.
        2. Use academic Turkish if the input is Turkish, otherwise professional English.
        3. Do not invent technical data, use [DATA MISSING] for unknown values.
        4. Focus on clarity and technical precision.
        5. Strictly follow official TEKNOFEST terminology.

        CONTENT TO REWRITE:
        ${content}
      `
    });
    return response.text || content;
  }

  async checkCompliance(content: string, sectionTitle: string, rules: string[]): Promise<{ isCompliant: boolean; feedback: string[] }> {
    const response = await this.ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `
        Analyze the following report section for TEKNOFEST compliance.
        Section: ${sectionTitle}
        Rules: ${rules.join(', ')}

        CONTENT:
        ${content}

        Return a JSON object with:
        {
          "isCompliant": boolean,
          "feedback": string[] // List of specific violations or improvement suggestions.
        }
      `,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            isCompliant: { type: Type.BOOLEAN },
            feedback: { type: Type.ARRAY, items: { type: Type.STRING } }
          }
        }
      }
    });
    
    try {
      return JSON.parse(response.text || '{}');
    } catch (e) {
      return { isCompliant: false, feedback: ["Failed to parse compliance check."] };
    }
  }

  async researchTechnicalInfo(query: string): Promise<{ summary: string; sources: { title: string; uri: string }[] }> {
    const response = await this.ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Find technical standards or official TEKNOFEST rules for: ${query}. Focus on 2025 regulations.`,
      config: {
        tools: [{ googleSearch: {} }]
      }
    });

    const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks?.map((chunk: any) => ({
      title: chunk.web?.title || 'Source',
      uri: chunk.web?.uri || '#'
    })) || [];

    return {
      summary: response.text || "No information found.",
      sources
    };
  }
}

export const aiService = new TEKNOFESTAIService();
