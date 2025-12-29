
import React from 'react';
import ChatWindow from './components/ChatWindow';
import OrderJourney from './components/OrderJourney';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Navigation / Branding Bar */}
      <header className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              F
            </div>
            <h1 className="text-xl font-black text-slate-900 tracking-tight">
              Fresh<span className="text-emerald-600">Track</span>
              <span className="ml-2 px-2 py-0.5 bg-slate-100 text-slate-500 rounded text-[10px] uppercase font-bold tracking-widest">Support Portal</span>
            </h1>
          </div>
          
          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
            <a href="#" className="hover:text-emerald-600 transition-colors">Order History</a>
            <a href="#" className="hover:text-emerald-600 transition-colors">Help Center</a>
            <a href="#" className="text-emerald-600 font-bold">Logistics Bot</a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="text-sm text-slate-400 hover:text-slate-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
              </svg>
            </button>
            <div className="w-8 h-8 rounded-full bg-slate-200 border border-slate-300"></div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto w-full p-4 md:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 overflow-hidden">
        {/* Left Column: Visual Guide */}
        <section className="lg:col-span-7 xl:col-span-8 overflow-hidden h-full flex flex-col">
          <OrderJourney />
        </section>

        {/* Right Column: AI Chat */}
        <section className="lg:col-span-5 xl:col-span-4 h-[600px] lg:h-full flex flex-col">
          <ChatWindow />
        </section>
      </main>

      {/* Mobile Sticky CTA */}
      <div className="lg:hidden fixed bottom-4 left-4 right-4 z-50">
        <button className="w-full bg-emerald-600 text-white font-bold py-3 rounded-full shadow-2xl flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
          </svg>
          Chat with Logistics Support
        </button>
      </div>

      {/* Simple Footer Information */}
      <footer className="bg-white border-t border-slate-200 py-6 px-6 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <p>© 2025 FreshTrack Grocery Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Partner Stores</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
