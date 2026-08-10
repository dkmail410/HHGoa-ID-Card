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
        {/* === BACKGROUND LAYER === */}
        {/* Sun — large yellow semicircle rising from bottom of photo area */}
        <div
          className="absolute bg-[#FFE600]"
          style={{
            width: '700px',
            height: '700px',
            borderRadius: '50%',
            top: '120px',
            left: '190px',
          }}
        />

        {/* Sun rays — simple lines radiating from sun center */}
        <svg
          className="absolute"
          style={{ top: '120px', left: '190px', width: '700px', height: '350px' }}
          viewBox="0 0 700 350"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="350" y1="350" x2="350" y2="0" stroke="#FDFBF7" strokeWidth="2" opacity="0.3" />
          <line x1="350" y1="350" x2="180" y2="20" stroke="#FDFBF7" strokeWidth="2" opacity="0.25" />
          <line x1="350" y1="350" x2="520" y2="20" stroke="#FDFBF7" strokeWidth="2" opacity="0.25" />
          <line x1="350" y1="350" x2="50" y2="120" stroke="#FDFBF7" strokeWidth="2" opacity="0.2" />
          <line x1="350" y1="350" x2="650" y2="120" stroke="#FDFBF7" strokeWidth="2" opacity="0.2" />
        </svg>

        {/* === HEADER — HACKER HOUSE === */}
        <div
          className="absolute font-serif font-black uppercase text-[#FDFBF7] z-10 drop-shadow-xl"
          style={{
            top: '50px',
            left: '0',
            right: '0',
            fontSize: '120px',
            lineHeight: '0.85',
            letterSpacing: '-0.03em',
            textAlign: 'center',
          }}
        >
          HACKER
          <br />
          HOUSE
        </div>

        {/* गोवा — pink overlay on the header */}
        <div
          className="absolute font-serif text-[#FF0080] z-20"
          style={{
            top: '140px',
            left: '50%',
            transform: 'translateX(-50%) rotate(-8deg)',
            fontSize: '90px',
            textShadow: '3px 3px 0px #FDFBF7, -3px -3px 0px #FDFBF7, 3px -3px 0px #FDFBF7, -3px 3px 0px #FDFBF7',
          }}
        >
          गोवा
        </div>

        {/* === PHOTO — CAMPAIGN HERO === */}
        <div
          className="absolute bg-[#053b21] overflow-hidden z-10"
          style={{
            top: '260px',
            left: '90px',
            width: '560px',
            height: '560px',
            border: '8px solid #FDFBF7',
            transform: 'rotate(-2deg)',
          }}
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
              <span style={{ fontSize: '120px' }}>🌴</span>
            </div>
          )}
          {/* Subtle gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
        </div>

        {/* === BUILDER INFO — RIGHT SIDE === */}
        {/* Name sticker */}
        <div
          className="absolute z-30"
          style={{
            top: '340px',
            right: '60px',
            maxWidth: '380px',
            background: '#FFE600',
            border: '4px solid #075932',
            padding: '12px 24px',
            transform: 'rotate(2deg)',
            boxShadow: '8px 8px 0px 0px rgba(7,89,50,1)',
          }}
        >
          <div
            className="font-serif font-bold text-[#075932] leading-none capitalize"
            style={{ fontSize: '52px' }}
          >
            {displayName}
          </div>
          <div
            className="font-mono font-bold text-[#FF0080] uppercase tracking-widest"
            style={{
              fontSize: '20px',
              marginTop: '6px',
              borderTop: '2px solid rgba(7,89,50,0.2)',
              paddingTop: '6px',
            }}
          >
            {displayStack}
          </div>
        </div>

        {/* Builder class sticker */}
        <div
          className="absolute z-30"
          style={{
            top: '520px',
            right: '70px',
            background: '#FF0080',
            border: '4px solid #FDFBF7',
            padding: '6px 20px',
            transform: 'rotate(-3deg)',
          }}
        >
          <div
            className="font-sans font-black text-[#FDFBF7] uppercase tracking-widest whitespace-nowrap"
            style={{ fontSize: '24px' }}
          >
            {displayTitle}
          </div>
        </div>

        {/* === BOTTOM CAMPAIGN STRIP === */}
        <div
          className="absolute z-10"
          style={{
            bottom: '45px',
            left: '0',
            right: '0',
            padding: '0 60px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          {/* Left: Event info */}
          <div>
            <div
              className="font-sans font-black text-[#FFE600] uppercase tracking-widest bg-[#053b21] inline-block"
              style={{ fontSize: '28px', padding: '3px 12px', transform: 'rotate(1deg)' }}
            >
              HH GOA '26
            </div>
            <div
              className="font-mono font-bold text-[#FDFBF7] uppercase tracking-widest"
              style={{ fontSize: '18px', marginTop: '8px' }}
            >
              28–31 OCT 2026 · GOA, INDIA
            </div>
          </div>

          {/* Right: Hashtag + ID */}
          <div style={{ textAlign: 'right' }}>
            <div
              className="font-mono font-bold text-[#FF0080] bg-[#FDFBF7] inline-block"
              style={{ fontSize: '16px', padding: '2px 10px', transform: 'rotate(-1deg)' }}
            >
              #FrameInGoa
            </div>
            <div
              className="font-mono font-bold text-[#FDFBF7]/60 tracking-widest"
              style={{ fontSize: '14px', marginTop: '6px' }}
            >
              {builderId} · 2:47 PM STUDIO
            </div>
          </div>
        </div>

        {/* === WAVE DECORATION AT BOTTOM === */}
        <svg
          className="absolute z-0"
          style={{ bottom: '0', left: '0', width: '1080px', height: '100px' }}
          preserveAspectRatio="none"
          viewBox="0 0 1080 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 50C180 50 180 100 360 100C540 100 540 0 720 0C900 0 900 50 1080 50V100H0V50Z" fill="#053b21" opacity="0.25" />
          <path d="M0 70C180 70 180 100 360 100C540 100 540 40 720 40C900 40 900 70 1080 70V100H0V70Z" fill="#FDFBF7" opacity="0.06" />
        </svg>
      </div>
    );
  }
);

BuilderCard.displayName = 'BuilderCard';

export default BuilderCard;
