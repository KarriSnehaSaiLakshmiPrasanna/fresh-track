
import React from 'react';
import { ORDER_STAGES } from '../types';

const OrderJourney: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 h-full overflow-y-auto custom-scrollbar">
      <div className="mb-8">
        <h2 className="text-xl font-bold text-slate-800">The FreshTrack Journey</h2>
        <p className="text-sm text-slate-500 mt-1">Ever wonder what happens after you click "Order"?</p>
      </div>

      <div className="relative space-y-12">
        {/* Connection Line */}
        <div className="absolute left-[26px] top-6 bottom-6 w-[2px] bg-emerald-100 -z-0"></div>

        {ORDER_STAGES.map((stage, idx) => (
          <div key={stage.id} className="relative z-10 flex gap-6 group">
            <div className="flex-shrink-0 w-14 h-14 bg-white border-2 border-emerald-500 rounded-2xl flex items-center justify-center text-2xl shadow-md group-hover:scale-110 transition-transform">
              {stage.icon}
              <div className="absolute -top-2 -left-2 w-6 h-6 bg-emerald-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {idx + 1}
              </div>
            </div>
            
            <div className="flex-1">
              <h3 className="font-bold text-slate-800 text-lg group-hover:text-emerald-600 transition-colors">
                {stage.title}
              </h3>
              <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                {stage.description}
              </p>
              
              {stage.id === 'picking' && (
                <div className="mt-3 p-3 bg-blue-50 rounded-xl border border-blue-100">
                  <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider block mb-1">Pro Tip: Substitutions</span>
                  <p className="text-xs text-blue-700">
                    If an item is out of stock, we prioritize same-brand different sizes, then same-category high-rated brands.
                  </p>
                </div>
              )}

              {stage.id === 'transit' && (
                <div className="mt-3 p-3 bg-amber-50 rounded-xl border border-amber-100">
                  <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider block mb-1">Cold Chain Logic</span>
                  <p className="text-xs text-amber-700">
                    Your driver uses insulated bins and cold packs to ensure perishables stay at safe temperatures until they reach you.
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-5 rounded-2xl bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full -translate-y-16 translate-x-16 blur-3xl"></div>
        <h4 className="font-bold mb-2">Need to change something?</h4>
        <p className="text-xs text-slate-300 leading-relaxed mb-4">
          Once your order hits the "Picking" stage, our team is already in the aisles. Changes aren't possible after this point to ensure on-time delivery for everyone.
        </p>
        <button className="text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors underline decoration-dotted underline-offset-4">
          View Modification Policy →
        </button>
      </div>
    </div>
  );
};

export default OrderJourney;
