import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
}

export default function Hero({ onStart }: HeroProps) {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-4 pt-16 sm:px-6">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-orange-500/20 blur-[120px]" />
        <div className="absolute -bottom-40 left-0 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Left: Content */}
        <div className="animate-fade-in-up text-center lg:text-left">
          
          <div className="mb-4 inline-block rounded-full bg-orange-500/10 px-3 py-1 font-mono text-xs font-medium text-orange-400 ring-1 ring-orange-500/20">
            OFFICIAL ID GENERATOR
          </div>

          <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl">
            Hacker
            <br />
            House <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Goa</span>
          </h1>
          
          <p className="mb-8 max-w-lg text-lg text-white/60 mx-auto lg:mx-0">
            Create your official builder ID card for Hacker House Goa '26. Generate, download, and share it.
          </p>

          <button
            onClick={onStart}
            className="group relative inline-flex items-center gap-4 rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-black transition-all hover:bg-white/90 active:scale-95 shadow-lg"
          >
            CREATE ID CARD
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Right: Abstract Card Graphic */}
        <div className="animate-fade-in-up flex justify-center animation-delay-200 lg:justify-end">
           <div className="relative h-[400px] w-full max-w-[400px]">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-orange-500/20 to-amber-500/20 backdrop-blur-sm border border-white/10 shadow-2xl transform rotate-3 transition-transform hover:rotate-0 duration-500">
                  <div className="p-8 h-full flex flex-col">
                      <div className="h-16 w-16 rounded-lg bg-white/10 mb-auto"></div>
                      <div className="space-y-4">
                          <div className="h-4 w-3/4 rounded bg-white/20"></div>
                          <div className="h-4 w-1/2 rounded bg-white/10"></div>
                      </div>
                  </div>
              </div>
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-bl from-cyan-500/20 to-blue-500/20 transform -rotate-3 blur-sm"></div>
           </div>
        </div>
      </div>
    </section>
  );
}
