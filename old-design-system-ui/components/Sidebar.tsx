import Link from 'next/link';
import Image from 'next/image';
import { 
  LayoutDashboard, 
  BookOpen, 
  Layers, 
  Type, 
  Palette, 
  Component, 
  Box,
  Grid
} from 'lucide-react';

const navItems = [
  {
    section: 'Overview',
    items: [
      { name: 'Introduction', href: '/', icon: LayoutDashboard },
    ]
  },
  {
    section: 'Guidelines',
    items: [
      { name: 'Typography', href: '/guidelines/typography', icon: Type },
      { name: 'Colors', href: '/guidelines/colors', icon: Palette },
      { name: 'Layout', href: '/guidelines/layout', icon: Grid },
    ]
  },
  {
    section: 'Components',
    items: [
      { name: 'Buttons', href: '/components/buttons', icon: Component },
      { name: 'Cards', href: '/components/cards', icon: Box },
      { name: 'Inputs', href: '/components/inputs', icon: Layers },
    ]
  }
];

export function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-white border-r border-border flex flex-col shrink-0">
      <div className="p-6 border-b border-border">
        <div className="relative w-40 h-12">
           {/* Using the SVG directly or an Image component */}
           <Image 
             src="/logo.svg" 
             alt="Altitude Marketing" 
             fill
             className="object-contain object-left"
             priority
           />
        </div>
      </div>
      
      <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-8">
        {navItems.map((section) => (
          <div key={section.section}>
            <h3 className="mb-3 px-2 text-xs font-semibold text-muted uppercase tracking-wider">
              {section.section}
            </h3>
            <ul className="space-y-1">
              {section.items.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="flex items-center gap-3 px-2 py-2 text-sm font-medium text-foreground hover:bg-background hover:text-brand rounded-md transition-colors group"
                  >
                    <item.icon className="w-4 h-4 text-muted group-hover:text-brand transition-colors" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
      
      <div className="p-4 border-t border-border">
        <p className="text-xs text-muted text-center">
          v1.0.0
        </p>
      </div>
    </aside>
  );
}

