import React from 'react';

const Tips = () => {
    return (
        <div className="bg-base-100 min-h-screen">
            {/* --- Qurbani Tips Section (Grid Style) --- */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-extrabold text-slate-800 mb-4">Essential Qurbani Tips</h2>
      <p className="text-slate-600">Key guidelines to ensure a healthy and valid sacrifice.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Tip 1: Health Check */}
      <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-primary/30 transition-colors shadow-sm">
        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-4">1. Healthy Animal Check</h3>
        <p className="text-slate-600 leading-relaxed">
          The animal should have bright eyes, a moist nose, and an active temperament. Check for a smooth coat and steady walking pattern[cite: 1].
        </p>
      </div>

      {/* Tip 2: Age Requirements */}
      <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-secondary/30 transition-colors shadow-sm">
        <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 text-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-4">2. Age Requirements</h3>
        <p className="text-slate-600 leading-relaxed">
          For cows and buffaloes, the animal must be at least 2 years old. For goats and sheep, they must be at least 1 year old[cite: 1].
        </p>
      </div>

      {/* Tip 3: Care & Feeding */}
      <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-accent/30 transition-colors shadow-sm">
        <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 text-accent">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-4">3. Care & Feeding</h3>
        <p className="text-slate-600 leading-relaxed">
          Provide plenty of fresh water and natural green grass. Avoid overfeeding with heavy processed grains before the sacrifice[cite: 1].
        </p>
      </div>
    </div>
  </div>
</section>
        </div>
    );
};

export default Tips;