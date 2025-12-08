'use client';

import { useState, useEffect, useRef } from 'react';
import { RefreshCcw, Type, Ruler, Palette, Box } from 'lucide-react';

export function ThemePreview() {
  // State for controls
  const [brandColor, setBrandColor] = useState('#33EFAB');
  const [secondaryColor, setSecondaryColor] = useState('#340FA0');
  const [typeScale, setTypeScale] = useState<'ms' | 'mt'>('mt'); // Major Third is default
  
  const previewRef = useRef<HTMLDivElement>(null);

  // Apply changes to CSS variables within the preview scope
  useEffect(() => {
    if (!previewRef.current) return;
    const style = previewRef.current.style;

    // Update colors
    style.setProperty('--color-brand', brandColor);
    // Simple hover logic for demo
    style.setProperty('--color-brand-hover', brandColor); 
    style.setProperty('--color-secondary', secondaryColor);
    style.setProperty('--color-secondary-hover', secondaryColor);

    // Update typography scale mappings
    const scale = typeScale === 'ms' ? '--ms' : '--mt';
    
    style.setProperty('--font-size-caption', `var(--font-size-2xs${scale})`);
    style.setProperty('--font-size-label', `var(--font-size-xs${scale})`);
    style.setProperty('--font-size-body-small', `var(--font-size-sm${scale})`);
    style.setProperty('--font-size-body', `var(--font-size-md${scale})`);
    style.setProperty('--font-size-lead', `var(--font-size-lg${scale})`);
    style.setProperty('--font-size-h6', `var(--font-size-xl${scale})`);
    style.setProperty('--font-size-h5', `var(--font-size-2xl${scale})`);
    style.setProperty('--font-size-h4', `var(--font-size-3xl${scale})`);
    style.setProperty('--font-size-h3', `var(--font-size-4xl${scale})`);
    style.setProperty('--font-size-h2', `var(--font-size-5xl${scale})`);
    style.setProperty('--font-size-h1', `var(--font-size-6xl${scale})`);

  }, [brandColor, secondaryColor, typeScale]);

  const resetDefaults = () => {
    setBrandColor('#33EFAB');
    setSecondaryColor('#340FA0');
    setTypeScale('mt');
  };

  return (
    <div className="space-y-8">
      {/* Controls Panel */}
      <div className="p-6 bg-white rounded-xl border border-border shadow-sm space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <Palette className="w-5 h-5 text-brand" />
            Theme Customizer
          </h2>
          <button 
            onClick={resetDefaults}
            className="text-sm text-muted hover:text-foreground flex items-center gap-1"
          >
            <RefreshCcw className="w-3 h-3" /> Reset
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Colors */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-muted">Brand Colors</label>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Primary</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-muted">{brandColor}</span>
                  <input 
                    type="color" 
                    value={brandColor}
                    onChange={(e) => setBrandColor(e.target.value)}
                    className="w-8 h-8 rounded cursor-pointer border border-border"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Secondary</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-muted">{secondaryColor}</span>
                  <input 
                    type="color" 
                    value={secondaryColor}
                    onChange={(e) => setSecondaryColor(e.target.value)}
                    className="w-8 h-8 rounded cursor-pointer border border-border"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Typography */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-muted flex items-center gap-2">
              <Type className="w-4 h-4" /> Type Scale
            </label>
            <div className="flex items-center gap-2 p-1 bg-background rounded-lg border border-border">
              <button 
                onClick={() => setTypeScale('ms')}
                className={`flex-1 py-1.5 px-3 text-sm rounded-md transition-colors ${typeScale === 'ms' ? 'bg-white shadow-sm font-medium text-brand' : 'text-muted hover:text-foreground'}`}
              >
                Major Second (1.125)
              </button>
              <button 
                onClick={() => setTypeScale('mt')}
                className={`flex-1 py-1.5 px-3 text-sm rounded-md transition-colors ${typeScale === 'mt' ? 'bg-white shadow-sm font-medium text-brand' : 'text-muted hover:text-foreground'}`}
              >
                Major Third (1.25)
              </button>
            </div>
            <p className="text-xs text-muted">
              {typeScale === 'ms' ? 'Conservative scale, better for dashboards.' : 'Expressive scale, better for marketing.'}
            </p>
          </div>

           {/* Spacing / Layout - Placeholder for future controls */}
           <div className="space-y-3">
            <label className="text-sm font-medium text-muted flex items-center gap-2">
              <Ruler className="w-4 h-4" /> Density
            </label>
            <div className="text-sm text-muted italic">
              Global spacing controls coming soon. Currently using standard 8px grid.
            </div>
          </div>
        </div>
      </div>

      {/* Preview Area - Scoped Variables */}
      <div ref={previewRef} className="border border-border rounded-xl overflow-hidden shadow-lg bg-white">
        
        {/* Hero Section Preview */}
        <div className="bg-base text-white p-12 md:p-20 text-center space-y-6 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand to-secondary opacity-50"></div>
           <h1 className="font-bold text-5xl md:text-6xl tracking-tight" style={{ fontSize: 'var(--font-size-h1)' }}>
             Design with <span style={{ color: 'var(--color-brand)' }}>Altitude</span>
           </h1>
           <p className="max-w-2xl mx-auto text-gray-300" style={{ fontSize: 'var(--font-size-lead)' }}>
             A modular, accessible, and scalable design system for building modern web applications. 
             Powered by semantic tokens and a flexible 8px grid.
           </p>
           <div className="flex items-center justify-center gap-4 pt-4">
             <button className="px-6 py-3 rounded-md font-medium transition-all transform hover:-translate-y-0.5" 
               style={{ 
                 backgroundColor: 'var(--color-brand)', 
                 color: 'var(--color-text-on-brand)',
                 boxShadow: 'var(--shadow-button)'
               }}>
               Get Started
             </button>
             <button className="px-6 py-3 rounded-md font-medium border border-gray-600 hover:border-gray-400 transition-colors bg-transparent text-white">
               Read Documentation
             </button>
           </div>
        </div>

        {/* Content & Cards Preview */}
        <div className="p-8 md:p-12 bg-background space-y-16">
          
          {/* Text Content */}
          <section className="max-w-3xl mx-auto space-y-6">
             <h2 className="font-bold text-gray-900" style={{ fontSize: 'var(--font-size-h2)' }}>
               Semantic Typography
             </h2>
             <div className="space-y-4 text-gray-600" style={{ fontSize: 'var(--font-size-body)' }}>
               <p>
                 This paragraph uses the <code className="bg-gray-100 px-1 rounded text-sm">body</code> token. 
                 The scale adapts based on the selected type system (Major Second vs Major Third). 
                 Notice how the headings dynamically resize while maintaining harmonious proportions.
               </p>
               <p>
                 Our system uses a fluid typography approach with <code className="bg-gray-100 px-1 rounded text-sm">clamp()</code> functions, 
                 ensuring legibility across all device sizes from mobile to ultra-wide displays.
               </p>
             </div>
          </section>

          {/* Card Grid */}
          <section>
             <div className="flex items-center justify-between mb-8">
               <h3 className="font-bold text-gray-900" style={{ fontSize: 'var(--font-size-h3)' }}>
                 Components
               </h3>
               <a href="#" className="font-medium hover:underline" style={{ color: 'var(--color-brand-hover)' }}>View all components &rarr;</a>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {[1, 2, 3].map((i) => (
                 <div key={i} className="group bg-card rounded-xl border border-card-border p-6 transition-all duration-200 hover:-translate-y-1"
                   style={{ 
                     boxShadow: 'var(--shadow-card)',
                   }}
                   onMouseEnter={(e) => e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)'}
                   onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'var(--shadow-card)'}
                 >
                   <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center text-white"
                     style={{ backgroundColor: i === 2 ? 'var(--color-secondary)' : 'var(--color-brand)' }}
                   >
                     <Box className="w-6 h-6" />
                   </div>
                   <h4 className="font-bold mb-2 text-gray-900" style={{ fontSize: 'var(--font-size-h5)' }}>
                     Feature Card {i}
                   </h4>
                   <p className="text-muted mb-4" style={{ fontSize: 'var(--font-size-body-small)' }}>
                     This is a standard card component. It uses semantic tokens for background, borders, and shadows.
                   </p>
                   <span className="text-sm font-semibold" style={{ color: 'var(--color-brand-hover)' }}>Learn more</span>
                 </div>
               ))}
             </div>
          </section>

          {/* Form Elements */}
          <section className="max-w-xl mx-auto bg-white p-8 rounded-xl border border-border shadow-sm">
             <h3 className="font-bold mb-6 text-gray-900" style={{ fontSize: 'var(--font-size-h4)' }}>
               Interactive Inputs
             </h3>
             <form className="space-y-4">
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                 <input 
                   type="email" 
                   placeholder="you@example.com"
                   className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:border-transparent transition-shadow"
                   style={{ 
                     height: 'var(--size-10)',
                     borderColor: 'var(--color-border)',
                     '--tw-ring-color': 'var(--color-brand)'
                   } as any}
                 />
               </div>
               <div className="flex items-center gap-4 pt-2">
                 <button type="button" className="flex-1 font-medium rounded-md text-white transition-colors"
                   style={{ 
                     height: 'var(--size-10)',
                     backgroundColor: 'var(--color-secondary)',
                   }}>
                   Subscribe
                 </button>
                 <button type="button" className="flex-1 font-medium rounded-md transition-colors border border-gray-200 text-gray-600 hover:bg-gray-50"
                   style={{ height: 'var(--size-10)' }}>
                   Cancel
                 </button>
               </div>
             </form>
          </section>

        </div>
      </div>
    </div>
  );
}

