import './globals.css';
import type { Metadata } from 'next';
import { Sidebar } from '@/components/Sidebar';

export const metadata: Metadata = {
  title: 'Altitude Design System',
  description: 'Design system for Altitude Marketing',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-background text-foreground antialiased">
        <Sidebar />
        <main className="flex-1 overflow-y-auto transition-all duration-300 ease-in-out">
          <div className="container mx-auto px-8 py-8">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}

