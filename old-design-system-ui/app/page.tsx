import { ThemePreview } from '@/components/ThemePreview';

export default function Home() {
  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Overview</h1>
        <p className="text-lg text-muted max-w-3xl">
          Welcome to the Altitude Design System. This is your source of truth for UI primitives, semantic tokens, and components.
          Use the theme preview below to explore how our design tokens interact and scale.
        </p>
      </div>

      <ThemePreview />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        <div className="p-6 bg-white rounded-lg border border-border">
           <h3 className="font-bold text-lg mb-2">Design Principles</h3>
           <ul className="list-disc list-inside space-y-2 text-muted">
             <li>Modular and composable architecture</li>
             <li>Semantic naming for clear intent</li>
             <li>Accessible by default</li>
             <li>Responsive 8px grid system</li>
           </ul>
        </div>
        <div className="p-6 bg-white rounded-lg border border-border">
           <h3 className="font-bold text-lg mb-2">Resources</h3>
           <ul className="space-y-2 text-muted">
             <li><a href="#" className="text-brand hover:underline">Figma Library &rarr;</a></li>
             <li><a href="#" className="text-brand hover:underline">Github Repository &rarr;</a></li>
             <li><a href="#" className="text-brand hover:underline">Contributing Guidelines &rarr;</a></li>
           </ul>
        </div>
      </div>
    </div>
  );
}

