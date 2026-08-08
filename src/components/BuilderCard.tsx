import { forwardRef } from 'react';

interface BuilderCardProps {
  name: string;
  stack: string;
  builderTitle: string;
  imageUrl: string | null;
  builderId: string;
  imagePosition: { x: number; y: number };
  imageZoom: number;
}

const BuilderCard = forwardRef<HTMLDivElement, BuilderCardProps>(
  (
    { name, stack, builderTitle, imageUrl, builderId, imagePosition, imageZoom },
    ref
  ) => {
    const displayName = name || 'YOUR NAME';
    const displayStack = stack || 'STACK / ROLE';
    const displayTitle = builderTitle || 'BUILDER CLASS';

    return (
      <div
        ref={ref}
        className="builder-card relative overflow-hidden bg-[#075932] shrink-0"
        style={{ width: '1080px', height: '1080px' }}
      >
        {/* Background Elements */}
        {/* Big Yellow Sun */}
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[70%] h-[70%] bg-[#FFE600] rounded-full opacity-90" />
        
        {/* Wavy lines in background */}
        <svg className="absolute bottom-[20%] left-0 w-full h-[15%]" preserveAspectRatio="none" viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 75C240 75 240 150 480 150C720 150 720 0 960 0C1200 0 1200 75 1440 75V150H0V75Z" fill="#053b21" opacity="0.3" />
            <path d="M0 100C240 100 240 150 480 150C720 150 720 50 960 50C1200 50 1200 100 1440 100V150H0V100Z" fill="#FDFBF7" opacity="0.1" />
        </svg>

        {/* Photo Container */}
        <div 
          className="absolute top-[22%] left-1/2 -translate-x-1/2 w-[55%] h-[55%] border-[#FDFBF7] shadow-2xl bg-[#053b21] overflow-hidden transform -rotate-2"
          style={{ borderWidth: '9px' }}
        >
           {imageUrl ? (
              <img
                src={imageUrl}
                alt={`${displayName}'s photo`}
                className="absolute w-full h-full object-cover"
                style={{
                  objectPosition: `${50 + imagePosition.x}% ${50 + imagePosition.y}%`,
                  transform: `scale(${imageZoom})`,
                }}
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center opacity-40">
                <span style={{ fontSize: '130px' }}>🌴</span>
              </div>
            )}
            
            {/* Overlay Gradient for photo depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        </div>

        {/* Typography - Main Campaign Headers */}
        <div 
          className="absolute top-[6%] left-[6%] font-serif font-black leading-[0.85] text-[#FDFBF7] tracking-tighter uppercase drop-shadow-xl z-10"
          style={{ fontSize: '119px' }}
        >
           HACKER
           <br />
           HOUSE
        </div>
        
        {/* Pink Goa Script */}
        <div 
          className="absolute top-[18%] left-[8%] font-serif text-[#FF0080] transform -rotate-12 z-20" 
          style={{ fontSize: '108px', textShadow: '4px 4px 0px #FDFBF7, -4px -4px 0px #FDFBF7, 4px -4px 0px #FDFBF7, -4px 4px 0px #FDFBF7' }}
        >
           गोवा
        </div>

        {/* Builder Info Overlay - Notice Board Style Stickers */}
        <div 
          className="absolute bottom-[28%] right-[8%] bg-[#FFE600] border-[#075932] transform rotate-3 z-30 flex flex-col items-end"
          style={{ 
            padding: '11px 22px',
            borderWidth: '4px',
            boxShadow: '9px 9px 0px 0px rgba(7,89,50,1)' 
          }}
        >
           <div 
             className="font-serif font-bold text-[#075932] leading-none text-right capitalize whitespace-nowrap"
             style={{ fontSize: '59px' }}
           >
             {displayName}
           </div>
           <div 
             className="font-mono font-bold text-[#FF0080] uppercase tracking-widest w-full text-right border-[#075932]/20"
             style={{ 
               fontSize: '24px',
               marginTop: '5px',
               borderTopWidth: '2px',
               paddingTop: '5px'
             }}
           >
             {displayStack}
           </div>
        </div>

        <div 
          className="absolute bottom-[35%] left-[6%] bg-[#FF0080] border-[#FDFBF7] shadow-xl transform -rotate-6 z-30"
          style={{ padding: '5px 22px', borderWidth: '4px' }}
        >
           <div 
             className="font-sans font-black text-[#FDFBF7] uppercase tracking-widest whitespace-nowrap"
             style={{ fontSize: '27px' }}
           >
             {displayTitle}
           </div>
        </div>

        {/* Bottom Campaign Footer */}
        <div className="absolute bottom-[5%] left-0 w-full flex justify-between items-end px-[8%] z-10">
           <div className="flex flex-col" style={{ gap: '5px' }}>
              <div 
                className="font-sans font-black text-[#FFE600] uppercase tracking-widest bg-[#053b21] self-start transform rotate-1"
                style={{ fontSize: '32px', padding: '2px 11px' }}
              >
                HH GOA '26
              </div>
              <div 
                className="font-mono font-bold text-[#FDFBF7] uppercase tracking-widest"
                style={{ fontSize: '24px', marginTop: '5px' }}
              >
                28–31 OCT 2026 • GOA, INDIA
              </div>
           </div>
           
           <div className="flex flex-col items-end text-right" style={{ gap: '5px' }}>
              <div 
                className="font-mono font-bold text-[#FF0080] bg-[#FDFBF7] shadow-lg transform -rotate-2"
                style={{ fontSize: '19px', padding: '2px 11px' }}
              >
                #FrameInGoa
              </div>
              <div 
                className="font-mono font-bold text-[#FDFBF7]/80 tracking-widest"
                style={{ fontSize: '19px', marginTop: '5px' }}
              >
                ID: {builderId} • 2:47 PM STUDIO
              </div>
           </div>
        </div>

        {/* Small Decorative Palm/Sun Graphics at bottom */}
        <div className="absolute bottom-[10%] left-[45%] opacity-80 z-0">
           <svg style={{ width: '86px', height: '86px' }} viewBox="0 0 24 24" fill="none" stroke="#FFE600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
             <circle cx="12" cy="12" r="5"></circle>
             <line x1="12" y1="1" x2="12" y2="3"></line>
             <line x1="12" y1="21" x2="12" y2="23"></line>
             <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
             <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
             <line x1="1" y1="12" x2="3" y2="12"></line>
             <line x1="21" y1="12" x2="23" y2="12"></line>
             <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
             <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
           </svg>
        </div>

      </div>
    );
  }
);

BuilderCard.displayName = 'BuilderCard';

export default BuilderCard;
