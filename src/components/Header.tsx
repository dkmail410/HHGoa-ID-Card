import { Terminal } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="/" className="group flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-amber-400 shadow-lg shadow-orange-500/20 transition-shadow group-hover:shadow-orange-500/40">
            <Terminal className="h-4 w-4 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-wider text-white">
              HH GOA <span className="text-orange-400">'26</span>
            </span>
          </div>
        </a>
        <div className="flex items-center gap-3">
        </div>
      </div>
    </header>
  );
}
