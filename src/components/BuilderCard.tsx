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
    const displayStack = stack || 'YOUR STACK';
    const displayTitle = builderTitle || 'Builder Title';

    return (
      <div
        ref={ref}
        className="builder-card relative aspect-square w-full sm:aspect-[4/3] bg-[#0d7842] flex items-center justify-center p-[8%]"
        style={{
          fontFamily: "'Courier New', Courier, monospace",
        }}
      >
        {/* The Paper Card */}
        <div className="relative w-full h-full bg-[#f4f4dc] rounded-lg shadow-2xl flex flex-col p-[6%] border-t-[8px] border-[#f4f4dc]">
          {/* Top Pin */}
          <div className="absolute -top-[12px] left-1/2 -translate-x-1/2 w-[24px] h-[24px] rounded-full bg-[#ff007f] shadow-sm border border-[#ff007f]/80 flex items-center justify-center">
            <div className="w-[8px] h-[8px] rounded-full bg-white/40"></div>
          </div>

          <div className="flex gap-[6%] h-full">
            {/* Left side: Photo */}
            <div className="w-[45%] h-full flex flex-col">
              <div
                className="relative w-full aspect-square bg-black/5 rounded-sm overflow-hidden mb-[4%] border border-black/10 shadow-inner"
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
                  <div className="w-full h-full flex items-center justify-center text-4xl opacity-20">
                    🌴
                  </div>
                )}
              </div>
              <div className="bg-[#ff007f] text-white text-center rounded-full font-bold uppercase tracking-widest mt-auto mb-[2%]"
                style={{ fontSize: 'clamp(8px, 2.5%, 12px)', padding: '4% 8%' }}
              >
                {displayStack}
              </div>
            </div>

            {/* Right side: Info */}
            <div className="flex-1 flex flex-col justify-center text-center items-center">
              <div 
                className="font-serif font-medium tracking-tight leading-none text-[#0d7842] mb-[4%]"
                style={{ fontSize: 'clamp(20px, 7%, 32px)' }}
              >
                {displayName}
              </div>
              
              <div
                className="font-mono text-black/60 mb-[8%]"
                style={{ fontSize: 'clamp(10px, 3.5%, 16px)' }}
              >
                {displayTitle}
              </div>

              <div className="h-[1px] w-full bg-black/10 mb-[8%]"></div>

              <div 
                className="font-bold text-black"
                style={{ fontSize: 'clamp(12px, 4%, 18px)' }}
              >
                {builderId}
              </div>
              <div 
                className="text-black/40 mt-[2%] uppercase tracking-widest"
                style={{ fontSize: 'clamp(8px, 2.5%, 12px)' }}
              >
                OCT 28-31, 2026
              </div>
            </div>
          </div>
          
          {/* Bottom Branding */}
          <div className="absolute bottom-[4%] left-0 right-0 flex justify-between px-[6%] items-end opacity-60">
             <div className="font-serif italic text-[#0d7842]" style={{ fontSize: 'clamp(10px, 3%, 14px)' }}>
               Hacker House Goa
             </div>
             <div className="font-mono" style={{ fontSize: 'clamp(8px, 2.5%, 12px)' }}>
               #FrameInGoa
             </div>
          </div>
        </div>
      </div>
    );
  }
);

BuilderCard.displayName = 'BuilderCard';

export default BuilderCard;
