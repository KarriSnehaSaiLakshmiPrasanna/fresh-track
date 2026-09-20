# FreshTrack AI Assistant 🛒🚚
 An AI-powered customer support and logistics guidance portal for on-demand grocery delivery platforms, powered by Google Gemini.

## 📖 Overview

**FreshTrack AI Assistant** is a specialized full-stack application designed to give grocery customers real-time visibility into complex fulfillment workflows while providing an intelligent conversational support assistant.

Modern grocery delivery involves non-trivial logistics: temperature-controlled staging, out-of-stock substitutions, route optimization, and time-sensitive delivery windows. FreshTrack bridges customer expectations and supply-chain realities with:
1. **Interactive Order Journey Tracker**: Step-by-step visual exploration of every fulfillment phase from order placement to doorstep handover.
2. **AI Logistics Support Bot**: A tailored Gemini-driven assistant that explains grocery fulfillment policies, substitution mechanics, and tracking states without over-promising or altering live logistics data.



[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61dafb?logo=react)](https://react.dev/)
[![Express](https://img.shields.io/badge/Express-5-000000?logo=express)](https://expressjs.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![Google Gen AI](https://img.shields.io/badge/Google%20Gen%20AI-Gemini%203.5-4285f4?logo=google)](https://ai.google.dev/)

---


---

## ✨ Features

- **Interactive Order Journey Map**: Visual timeline depicting key fulfillment stages (*Order Placed*, *In-Store Picking*, *Cold Chain Packing*, *Driver Dispatched*, *Doorstep Delivery*).
- **Intelligent Customer Support Chat**: Conversational AI assistant calibrated to answer delivery queries, policy questions, substitution mechanics, and order flow explanations.
- **Secure Server-Side Architecture**: All calls to the Google Gemini API are proxied through an Express server, ensuring `GEMINI_API_KEY` remains secure and never exposed to the client browser.
- **Strict Guardrails**: The assistant's system instructions emphasize accurate domain knowledge, clear explanations of why substitutions occur, and safe boundaries (preventing unauthorized modifications or unrealistic promises).
- **Responsive Layout**: Designed with Tailwind CSS for seamless viewing on desktop, tablet, and mobile devices.

---

## 🛠️ Tech Stack

- **Frontend**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS](https://tailwindcss.com/), [Vite](https://vitejs.dev/)
- **Backend**: [Express 5](https://expressjs.com/), [tsx](https://github.com/privatenumber/tsx), [esbuild](https://esbuild.github.io/)
- **AI SDK**: [@google/genai](https://www.npmjs.com/package/@google/genai) (`gemini-3.5-flash`)

---

## 🏗️ Architecture

```text
┌───────────────────────────────┐
│     React 19 Client (SPA)     │
│   (ChatWindow, OrderJourney)  │
└──────────────┬────────────────┘
               │  POST /api/gemini
               ▼
┌───────────────────────────────┐
│       Express 5 Server        │
│   (server.ts + Vite dev mode) │
└──────────────┬────────────────┘
               │  @google/genai (server-side)
               ▼
┌───────────────────────────────┐
│   Google Gemini 3.5 Flash     │
└───────────────────────────────┘
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- [npm](https://www.npmjs.com/) or [bun](https://bun.sh/)
- A **Google Gemini API Key** (obtainable from [Google AI Studio](https://aistudio.google.com/))

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/freshtrack-ai-assistant.git
cd freshtrack-ai-assistant
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` or `.env.local` file in the root directory:

```bash
cp .env.example .env
```

Add your Gemini API key:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

### 4. Run the Development Server

```bash
npm run dev
```

The application will start on `http://localhost:3000`.

---

## 📦 Building for Production

To create an optimized production build:

```bash
npm run build
```

This compiles:
1. The static client-side React assets into the `dist/` directory via Vite.
2. The Express server into a bundled CommonJS file at `dist/server.cjs` via esbuild.

To start the production server:

```bash
npm start
```

---

## 📂 Project Structure

```text
├── components/
│   ├── ChatWindow.tsx        # Conversational UI with message history and quick prompts
│   └── OrderJourney.tsx      # Step-by-step interactive fulfillment timeline
├── App.tsx                   # Main layout container and navigation bar
├── geminiService.ts          # Server-side Gemini client & system instructions
├── index.html                # Entry HTML file
├── index.tsx                 # React DOM mount point
├── server.ts                 # Express API server with Vite middleware integration
├── types.ts                  # TypeScript interfaces (Message, OrderStage, etc.)
├── vite.config.ts            # Vite build configuration
├── tsconfig.json             # TypeScript compiler settings
├── package.json              # Dependencies and execution scripts
├── .env.example              # Sample environment variable template
└── README.md                 # Project documentation
```

---

## 🛡️ AI Persona & Guardrails

The assistant in `geminiService.ts` operates with specialized system prompts:
- **Clarity & Empathy**: Explains logistical reasons behind delivery delays or substitutions (e.g., fresh produce quality standards, temperature storage rules).
- **Integrity**: Transparently clarifies that it is an informational guide and directs users to store managers or customer service hotlines for financial refunds or physical address changes.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
