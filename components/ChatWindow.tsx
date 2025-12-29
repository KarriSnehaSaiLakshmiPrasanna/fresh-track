
import React, { useState, useRef, useEffect } from 'react';
import { Message, MessageRole } from '../types';
import { getGeminiResponse } from '../geminiService';

const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: MessageRole.BOT,
      text: "Hi there! I'm your FreshTrack logistics guide. Curious about how we pick your avocados or how our delivery timing works? Ask me anything!",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: MessageRole.USER,
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Map history to Gemini format
    const history = messages.map(m => ({
      role: m.role === MessageRole.USER ? ('user' as const) : ('model' as const),
      parts: [{ text: m.text }]
    }));

    const responseText = await getGeminiResponse(input, history);
    
    setIsTyping(false);
    setMessages(prev => [...prev, {
      id: (Date.now() + 1).toString(),
      role: MessageRole.BOT,
      text: responseText || "I'm sorry, I couldn't process that.",
      timestamp: new Date()
    }]);
  };

  const quickQuestions = [
    "How are substitutions handled?",
    "Why is my order delayed?",
    "How do you keep items cold?",
    "What is the delivery flow?"
  ];

  return (
    <div className="flex flex-col h-full bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
      {/* Header */}
      <div className="bg-emerald-600 p-4 flex items-center gap-3">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl shadow-sm">
          🥑
        </div>
        <div>
          <h2 className="text-white font-bold leading-none">Logistics Guide</h2>
          <span className="text-emerald-100 text-xs flex items-center gap-1 mt-1">
            <span className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse"></span>
            Online & Ready to Help
          </span>
        </div>
      </div>

      {/* Messages */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-slate-50/50"
      >
        {messages.map((m) => (
          <div 
            key={m.id}
            className={`flex ${m.role === MessageRole.USER ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[85%] p-3 rounded-2xl shadow-sm text-sm ${
                m.role === MessageRole.USER 
                  ? 'bg-emerald-600 text-white rounded-tr-none' 
                  : 'bg-white text-slate-700 border border-slate-200 rounded-tl-none'
              }`}
            >
              <div className="whitespace-pre-wrap">{m.text}</div>
              <div className={`text-[10px] mt-1 opacity-70 ${m.role === MessageRole.USER ? 'text-emerald-50' : 'text-slate-400'}`}>
                {m.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white p-3 rounded-2xl border border-slate-200 rounded-tl-none shadow-sm flex gap-1">
              <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
              <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
              <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-4 bg-white border-t border-slate-100">
        {/* Quick Actions */}
        <div className="flex flex-wrap gap-2 mb-4">
          {quickQuestions.map((q) => (
            <button
              key={q}
              onClick={() => {
                setInput(q);
              }}
              className="text-[11px] px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-full hover:bg-emerald-100 transition-colors border border-emerald-100"
            >
              {q}
            </button>
          ))}
        </div>

        <div className="flex gap-2">
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about your order process..."
            className="flex-1 bg-slate-100 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all border border-transparent"
          />
          <button 
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center hover:bg-emerald-700 disabled:opacity-50 transition-colors shadow-lg shadow-emerald-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </button>
        </div>
        <p className="text-[10px] text-center text-slate-400 mt-2">
          AI generated responses. I cannot modify orders or promise exact times.
        </p>
      </div>
    </div>
  );
};

export default ChatWindow;
