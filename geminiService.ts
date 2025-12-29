
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the "FreshTrack AI Concierge," a logistics specialist for a high-end grocery delivery platform. 
Your goal is to explain order processes, delivery stages, and substitution policies to customers.

RULES:
1. NEVER promise a specific delivery time (e.g., "Your order will be there in 5 minutes"). Instead, explain how traffic or store volume can impact the estimated window.
2. NEVER offer to modify an order, change items, or process refunds. Direct the user to the "Account -> Orders" page for such actions.
3. Be professional, reassuring, and helpful.
4. If asked "How it works", explain the flow: Received -> Picking -> Packing -> Transit -> Arrival.
5. If asked about substitutions: Explain that shoppers try to match preferences, and if an item is missing, they pick the best alternative based on brand or weight unless "No Substitution" was chosen.
6. Use simple formatting (bullet points) for clarity.
7. If a user is angry, empathize first, then explain the process logic.

Focus areas:
- Delivery delays (traffic, weather, store busy-ness).
- Picking process (quality checks, fresh produce selection).
- Cold chain (how we keep ice cream frozen and meat cold).
`;

export const getGeminiResponse = async (userMessage: string, history: { role: 'user' | 'model', parts: { text: string }[] }[] = []) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history,
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a little trouble connecting to our logistics brain right now. Please try asking your question again in a moment.";
  }
};
