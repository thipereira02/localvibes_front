import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Sparkles, MapPin, Wine, Coffee, Music, Utensils } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-zinc-950 text-zinc-50 selection:bg-violet-500/30">
      
      {/* --- HEADER SIMPLES (Podemos mover para layout.tsx depois) --- */}
      <header className="w-full max-w-5xl flex justify-between items-center p-6">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
          <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(124,58,237,0.5)]">
            <MapPin className="w-5 h-5 text-white" />
          </div>
          <span>LocalVibes</span>
        </div>
        <nav className="flex gap-4">
          <Button variant="ghost" className="text-zinc-400 hover:text-white hover:bg-zinc-900">
            Login
          </Button>
          <Button className="bg-zinc-100 text-zinc-900 hover:bg-zinc-200 font-semibold">
            Criar Conta
          </Button>
        </nav>
      </header>

      {/* --- HERO SECTION (O CENTRO DA TELA) --- */}
      <section className="flex-1 flex flex-col items-center justify-center w-full max-w-3xl px-4 text-center space-y-8 -mt-20">
        
        {/* Título e Subtítulo */}
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
            Sua vibe, <br /> seu lugar.
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-xl mx-auto">
            Descubra bares, restaurantes e rolês que combinam perfeitamente com o seu momento.
          </p>
        </div>

        {/* Barra de Busca com IA */}
        <div className="w-full max-w-2xl relative group">
          {/* Efeito de brilho (Glow) atrás da busca */}
          <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-pink-600 rounded-full opacity-20 group-hover:opacity-50 blur transition duration-500"></div>
          
          <div className="relative flex items-center bg-zinc-900 rounded-full border border-zinc-800 shadow-2xl p-2">
            <Search className="ml-4 text-zinc-500 w-6 h-6" />
            
            <Input 
              className="flex-1 border-0 bg-transparent text-lg placeholder:text-zinc-600 focus-visible:ring-0 focus-visible:ring-offset-0 h-12"
              placeholder="Ex: Barzinho com jazz e drinks baratos..." 
            />
            
            <Button size="icon" className="rounded-full bg-violet-600 hover:bg-violet-700 shadow-[0_0_20px_rgba(124,58,237,0.3)] w-12 h-12 shrink-0">
              <Sparkles className="w-5 h-5 text-white" />
            </Button>
          </div>
        </div>

        {/* Chips de Sugestão (Vibes) */}
        <div className="flex flex-wrap justify-center gap-3 text-sm">
          <span className="text-zinc-500 py-1">Tente buscar:</span>
          
          <Badge variant="outline" className="px-3 py-1 border-zinc-800 bg-zinc-900/50 text-zinc-300 hover:bg-zinc-800 hover:text-white cursor-pointer transition-colors gap-1">
            <Wine className="w-3 h-3 text-pink-500" /> Romântico
          </Badge>
          
          <Badge variant="outline" className="px-3 py-1 border-zinc-800 bg-zinc-900/50 text-zinc-300 hover:bg-zinc-800 hover:text-white cursor-pointer transition-colors gap-1">
            <Utensils className="w-3 h-3 text-orange-500" /> Jantar
          </Badge>
          
          <Badge variant="outline" className="px-3 py-1 border-zinc-800 bg-zinc-900/50 text-zinc-300 hover:bg-zinc-800 hover:text-white cursor-pointer transition-colors gap-1">
            <Coffee className="w-3 h-3 text-yellow-500" /> Café & Trabalho
          </Badge>

          <Badge variant="outline" className="px-3 py-1 border-zinc-800 bg-zinc-900/50 text-zinc-300 hover:bg-zinc-800 hover:text-white cursor-pointer transition-colors gap-1">
            <Music className="w-3 h-3 text-violet-500" /> Ao Vivo
          </Badge>
        </div>

      </section>

      {/* --- FOOTER --- */}
      <footer className="w-full p-6 text-center text-zinc-600 text-sm">
        <p>© 2025 LocalVibes. Feito para explorar.</p>
      </footer>
    </main>
  );
}