import { Outlet } from '@tanstack/react-router';
import { Heart } from 'lucide-react';

export default function Layout() {
  const appIdentifier = typeof window !== 'undefined' 
    ? window.location.hostname 
    : 'indian-recipe-gallery';

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-saffron/20 via-transparent to-transparent" />
        <img
          src="/assets/generated/hero-banner.dim_1920x600.png"
          alt="Indian Cuisine Hero Banner"
          className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-2xl font-display">
            Rasoi<span className="text-saffron">Vidya</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-2 drop-shadow-lg font-light">
            Discover the art of Indian cooking through immersive video recipes
          </p>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-border/40 bg-card/30 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} RasoiVidya. All rights reserved.
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              Built with <Heart className="w-4 h-4 text-destructive fill-destructive" /> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(appIdentifier)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-saffron transition-colors font-medium"
              >
                caffeine.ai
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
