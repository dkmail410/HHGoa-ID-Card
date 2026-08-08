import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
}

export default function Hero({ onStart }: HeroProps) {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#075932] px-4 pt-16 sm:px-6">
      {/* Decorative Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden flex flex-col justify-center items-center">
        {/* Large Yellow Sun */}
        <div className="w-[90vw] h-[90vw] max-w-[800px] max-h-[800px] rounded-full bg-[#FFE600] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%]" />
        
        {/* Simple wavy lines for ocean at the bottom */}
        <div className="absolute bottom-0 left-0 w-full h-[25vh] bg-[#075932]" />
        <svg className="absolute bottom-[25vh] left-0 w-full h-12" preserveAspectRatio="none" viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 24C240 24 240 48 480 48C720 48 720 0 960 0C1200 0 1200 24 1440 24V48H0V24Z" fill="#FDFBF7" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full flex flex-col items-center text-center mt-[-5vh]">
        {/* Content */}
        <div className="animate-fade-in-up flex flex-col items-center">
          
          <div className="mb-6 inline-block font-mono text-sm font-bold tracking-widest text-[#075932] bg-[#FFE600] px-4 py-1.5 transform -rotate-2 border-2 border-[#075932] shadow-[4px_4px_0px_0px_rgba(7,89,50,1)]">
            28–31 OCT 2026
          </div>

          <div className="relative mb-6">
             <h1 className="font-serif text-[4.5rem] font-black leading-[0.85] text-[#FDFBF7] sm:text-[7rem] lg:text-[10rem] tracking-tighter uppercase drop-shadow-xl">
               HACKER
               <br />
               HOUSE
             </h1>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[3.5rem] sm:text-[6rem] lg:text-[8rem] text-[#FF0080] transform rotate-[-8deg] whitespace-nowrap" style={{ textShadow: '3px 3px 0px #FDFBF7, -3px -3px 0px #FDFBF7, 3px -3px 0px #FDFBF7, -3px 3px 0px #FDFBF7' }}>
               गोवा
             </div>
          </div>
          
          <h2 className="mt-4 mb-6 font-sans text-2xl sm:text-4xl font-bold uppercase text-[#075932] bg-[#FFE600] px-4 py-2 transform rotate-1 border-2 border-[#075932] shadow-[4px_4px_0px_0px_rgba(7,89,50,1)] tracking-widest">
            Make Your #FrameInGoa
          </h2>

          <p className="mb-10 max-w-lg text-lg sm:text-xl text-[#FDFBF7] font-medium font-sans">
            Drop your photo into the HH Goa '26 frame.
          </p>

          <button
            onClick={onStart}
            className="group relative inline-flex items-center gap-4 bg-[#FF0080] px-10 py-5 font-sans text-lg font-bold uppercase tracking-widest text-[#FDFBF7] transition-all hover:bg-[#d6006b] hover:-translate-y-1 border-2 border-[#075932] shadow-[8px_8px_0px_0px_rgba(7,89,50,1)] active:translate-y-1 active:shadow-[4px_4px_0px_0px_rgba(7,89,50,1)]"
          >
            MAKE MY FRAME
            <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
