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
        className="builder-card relative overflow-hidden shrink-0"
        style={{ width: '1080px', height: '1080px', background: '#075932' }}
      >
        {/* ============================================ */}
        {/* LAYER 1: SKY — deep green gradient */}
        {/* ============================================ */}
        <div
          className="absolute"
          style={{
            top: 0, left: 0, right: 0,
            height: '500px',
            background: 'linear-gradient(180deg, #064d2b 0%, #075932 50%, #0a6b3a 100%)',
          }}
        />

        {/* ============================================ */}
        {/* LAYER 2: SUN — large yellow semicircle */}
        {/* ============================================ */}
        <div
          className="absolute"
          style={{
            width: '300px', height: '300px', borderRadius: '50%',
            background: '#FFE600',
            top: '160px', left: '390px',
          }}
        />

        {/* Sun rays */}
        <svg
          className="absolute"
          style={{ top: '100px', left: '390px', width: '300px', height: '200px' }}
          viewBox="0 0 300 200" fill="none"
        >
          <line x1="150" y1="200" x2="150" y2="10" stroke="#FFE600" strokeWidth="2" opacity="0.35" />
          <line x1="150" y1="200" x2="70" y2="30" stroke="#FFE600" strokeWidth="2" opacity="0.25" />
          <line x1="150" y1="200" x2="230" y2="30" stroke="#FFE600" strokeWidth="2" opacity="0.25" />
          <line x1="150" y1="200" x2="15" y2="100" stroke="#FFE600" strokeWidth="1.5" opacity="0.18" />
          <line x1="150" y1="200" x2="285" y2="100" stroke="#FFE600" strokeWidth="1.5" opacity="0.18" />
        </svg>

        {/* ============================================ */}
        {/* LAYER 3: HILLS silhouette */}
        {/* ============================================ */}
        <svg
          className="absolute"
          style={{ top: '260px', left: 0, width: '1080px', height: '120px' }}
          viewBox="0 0 1080 120" preserveAspectRatio="none" fill="none"
        >
          <path
            d="M0 120 L0 80 Q80 30 180 65 Q260 30 360 55 Q440 15 540 50 Q620 25 700 55 Q780 20 870 50 Q940 30 1020 60 Q1060 45 1080 65 L1080 120Z"
            fill="#0a6b3a"
          />
        </svg>

        {/* ============================================ */}
        {/* LAYER 4: OCEAN — green with wave lines */}
        {/* ============================================ */}
        <div
          className="absolute"
          style={{
            top: '350px', left: 0, right: 0, height: '80px',
            background: 'linear-gradient(180deg, #0a6b3a 0%, #086036 50%, #075932 100%)',
          }}
        />

        {/* Sun reflection on water */}
        <div
          className="absolute"
          style={{
            width: '100px', height: '60px',
            background: 'linear-gradient(180deg, rgba(255,230,0,0.4) 0%, rgba(255,230,0,0) 100%)',
            top: '350px', left: '490px', borderRadius: '50%',
          }}
        />

        {/* Ocean wave lines */}
        <svg
          className="absolute"
          style={{ top: '350px', left: 0, width: '1080px', height: '80px' }}
          viewBox="0 0 1080 80" fill="none"
        >
          <path d="M0 20 Q30 10 60 20 Q90 30 120 20 Q150 10 180 20 Q210 30 240 20 Q270 10 300 20 Q330 30 360 20 Q390 10 420 20 Q450 30 480 20 Q510 10 540 20 Q570 30 600 20 Q630 10 660 20 Q690 30 720 20 Q750 10 780 20 Q810 30 840 20 Q870 10 900 20 Q930 30 960 20 Q990 10 1020 20 Q1050 30 1080 20" stroke="#FDFBF7" strokeWidth="2" opacity="0.25" />
          <path d="M-20 45 Q10 35 40 45 Q70 55 100 45 Q130 35 160 45 Q190 55 220 45 Q250 35 280 45 Q310 55 340 45 Q370 35 400 45 Q430 55 460 45 Q490 35 520 45 Q550 55 580 45 Q610 35 640 45 Q670 55 700 45 Q730 35 760 45 Q790 55 820 45 Q850 35 880 45 Q910 55 940 45 Q970 35 1000 45 Q1030 55 1060 45 Q1090 35 1100 45" stroke="#FDFBF7" strokeWidth="1.5" opacity="0.18" />
          <path d="M10 65 Q40 55 70 65 Q100 75 130 65 Q160 55 190 65 Q220 75 250 65 Q280 55 310 65 Q340 75 370 65 Q400 55 430 65 Q460 75 490 65 Q520 55 550 65 Q580 75 610 65 Q640 55 670 65 Q700 75 730 65 Q760 55 790 65 Q820 75 850 65 Q880 55 910 65 Q940 75 970 65 Q1000 55 1030 65 Q1060 75 1080 65" stroke="#FDFBF7" strokeWidth="1.5" opacity="0.12" />
        </svg>

        {/* Small boat silhouette */}
        <svg
          className="absolute"
          style={{ top: '340px', left: '130px', width: '40px', height: '25px' }}
          viewBox="0 0 40 25" fill="none"
        >
          <path d="M4 17 Q20 10 36 17" stroke="#FDFBF7" strokeWidth="1.5" opacity="0.35" />
          <line x1="20" y1="17" x2="20" y2="5" stroke="#FDFBF7" strokeWidth="1" opacity="0.35" />
          <path d="M20 5 L30 14 L20 12Z" fill="#FDFBF7" opacity="0.25" />
        </svg>

        {/* Birds */}
        <svg
          className="absolute"
          style={{ top: '120px', left: '260px', width: '80px', height: '30px' }}
          viewBox="0 0 80 30" fill="none"
        >
          <path d="M8 18 Q12 10 16 18" stroke="#FDFBF7" strokeWidth="1.5" opacity="0.35" />
          <path d="M28 12 Q32 5 36 12" stroke="#FDFBF7" strokeWidth="1.5" opacity="0.3" />
          <path d="M50 20 Q53 14 56 20" stroke="#FDFBF7" strokeWidth="1.5" opacity="0.25" />
        </svg>

        {/* ============================================ */}
        {/* LAYER 5: BEACH / SAND — scalloped edge */}
        {/* ============================================ */}
        <svg
          className="absolute"
          style={{ top: '410px', left: 0, width: '1080px', height: '40px' }}
          viewBox="0 0 1080 40" preserveAspectRatio="none" fill="none"
        >
          <path
            d="M0 0 Q100 18 220 8 Q340 0 460 12 Q580 4 700 10 Q820 18 940 6 Q1020 3 1080 10 L1080 40 L0 40Z"
            fill="#FDFBF7" opacity="0.92"
          />
          <path
            d="M0 8 Q100 24 220 14 Q340 6 460 18 Q580 10 700 16 Q820 24 940 12 Q1020 10 1080 16 L1080 40 L0 40Z"
            fill="#F5F0E5"
          />
        </svg>

        {/* Sand area */}
        <div
          className="absolute"
          style={{ top: '440px', left: 0, right: 0, bottom: 0, background: '#F5F0E5' }}
        />

        {/* ============================================ */}
        {/* LEFT PALM TREE — filled green (HH Goa style) */}
        {/* ============================================ */}
        <svg
          className="absolute"
          style={{ top: '20px', left: '-40px', width: '300px', height: '480px' }}
          viewBox="0 0 300 480" fill="none"
        >
          {/* Trunk */}
          <path d="M150 480 Q145 380 155 300 Q160 240 140 180" stroke="#0a6b3a" strokeWidth="14" />
          <path d="M150 480 Q145 380 155 300 Q160 240 140 180" stroke="#FFE600" strokeWidth="2.5" opacity="0.25" />
          {/* Coconuts */}
          <circle cx="140" cy="185" r="7" fill="#0a6b3a" />
          <circle cx="130" cy="190" r="6" fill="#064d2b" />
          <circle cx="152" cy="192" r="6" fill="#064d2b" />
          {/* Fronds */}
          <path d="M140 180 Q70 110 5 90 Q50 80 90 100 Q120 120 140 180" fill="#0a6b3a" />
          <path d="M140 180 Q50 130 10 150 Q45 125 80 135 Q120 150 140 180" fill="#086036" />
          <path d="M140 180 Q90 80 50 30 Q80 55 110 90 Q130 130 140 180" fill="#075932" />
          <path d="M140 180 Q190 80 230 40 Q210 75 180 120 Q155 155 140 180" fill="#0a6b3a" />
          <path d="M140 180 Q210 110 270 100 Q240 120 200 140 Q160 165 140 180" fill="#086036" />
          <path d="M140 180 Q230 150 290 160 Q250 155 200 160 Q165 170 140 180" fill="#075932" />
        </svg>

        {/* ============================================ */}
        {/* RIGHT PALM TREE — white line-art (HH Goa style) */}
        {/* ============================================ */}
        <svg
          className="absolute"
          style={{ top: '0px', right: '-25px', width: '280px', height: '460px' }}
          viewBox="0 0 280 460" fill="none"
        >
          <path d="M140 460 Q145 360 135 280 Q130 220 150 160" stroke="#FDFBF7" strokeWidth="3.5" opacity="0.5" />
          <path d="M150 160 Q220 80 270 60" stroke="#FDFBF7" strokeWidth="2.5" opacity="0.4" />
          <path d="M270 60 Q240 80 200 100 Q170 130 150 160" stroke="#FDFBF7" strokeWidth="1.5" opacity="0.3" />
          <path d="M150 160 Q230 110 275 115" stroke="#FDFBF7" strokeWidth="2.5" opacity="0.38" />
          <path d="M275 115 Q245 115 205 130 Q170 150 150 160" stroke="#FDFBF7" strokeWidth="1.5" opacity="0.28" />
          <path d="M150 160 Q90 70 40 30" stroke="#FDFBF7" strokeWidth="2.5" opacity="0.4" />
          <path d="M40 30 Q70 60 110 105 Q140 140 150 160" stroke="#FDFBF7" strokeWidth="1.5" opacity="0.3" />
          <path d="M150 160 Q60 110 10 120" stroke="#FDFBF7" strokeWidth="2.5" opacity="0.38" />
          <path d="M10 120 Q50 115 100 135 Q135 150 150 160" stroke="#FDFBF7" strokeWidth="1.5" opacity="0.28" />
          <path d="M150 160 Q190 60 210 15" stroke="#FDFBF7" strokeWidth="2.5" opacity="0.35" />
          <path d="M210 15 Q195 55 175 105 Q160 140 150 160" stroke="#FDFBF7" strokeWidth="1.5" opacity="0.25" />
        </svg>

        {/* ============================================ */}
        {/* LEFT GOA BUILDING — small illustrated house */}
        {/* ============================================ */}
        <svg
          className="absolute"
          style={{ top: '355px', left: '15px', width: '130px', height: '110px' }}
          viewBox="0 0 130 110" fill="none"
        >
          <rect x="12" y="42" width="106" height="68" fill="#FDFBF7" stroke="#075932" strokeWidth="2" />
          <path d="M4 44 L65 10 L126 44Z" fill="#075932" />
          <path d="M14 44 L65 18 L116 44Z" fill="none" stroke="#FDFBF7" strokeWidth="1" opacity="0.25" />
          <rect x="48" y="70" width="28" height="40" fill="#075932" rx="14" />
          <rect x="22" y="55" width="18" height="16" fill="#FFE600" stroke="#075932" strokeWidth="1.5" opacity="0.8" />
          <rect x="90" y="55" width="18" height="16" fill="#075932" stroke="#075932" strokeWidth="1.5" />
          <line x1="90" y1="63" x2="108" y2="63" stroke="#0a6b3a" strokeWidth="1" />
          <line x1="99" y1="55" x2="99" y2="71" stroke="#0a6b3a" strokeWidth="1" />
        </svg>

        {/* ============================================ */}
        {/* RIGHT GOA BUILDING — with pink shutters */}
        {/* ============================================ */}
        <svg
          className="absolute"
          style={{ top: '365px', right: '20px', width: '115px', height: '95px' }}
          viewBox="0 0 115 95" fill="none"
        >
          <rect x="8" y="32" width="98" height="63" fill="#FDFBF7" stroke="#075932" strokeWidth="2" />
          <path d="M0 35 L57 6 L115 35Z" fill="#075932" />
          <rect x="16" y="44" width="11" height="22" fill="#FF0080" opacity="0.75" />
          <rect x="32" y="44" width="11" height="22" fill="#FF0080" opacity="0.75" />
          <rect x="65" y="55" width="22" height="40" fill="#075932" rx="11" />
          <rect x="16" y="44" width="28" height="22" fill="none" stroke="#FFE600" strokeWidth="1.5" opacity="0.5" />
        </svg>

        {/* ============================================ */}
        {/* FOLIAGE — bushes flanking photo */}
        {/* ============================================ */}
        <svg
          className="absolute"
          style={{ top: '390px', left: '50px', width: '140px', height: '70px' }}
          viewBox="0 0 140 70" fill="none"
        >
          <ellipse cx="35" cy="45" rx="35" ry="25" fill="#0a6b3a" />
          <ellipse cx="70" cy="40" rx="40" ry="30" fill="#086036" />
          <ellipse cx="105" cy="45" rx="35" ry="25" fill="#075932" />
        </svg>
        <svg
          className="absolute"
          style={{ top: '395px', right: '40px', width: '120px', height: '60px' }}
          viewBox="0 0 120 60" fill="none"
        >
          <ellipse cx="30" cy="40" rx="30" ry="20" fill="#0a6b3a" />
          <ellipse cx="60" cy="35" rx="35" ry="25" fill="#086036" />
          <ellipse cx="90" cy="40" rx="30" ry="20" fill="#075932" />
        </svg>

        {/* ============================================ */}
        {/* HEADER: HH GOA '26 */}
        {/* ============================================ */}
        <div
          className="absolute z-30 font-mono font-bold uppercase"
          style={{
            top: '30px', left: '50%', transform: 'translateX(-50%)',
            fontSize: '15px', color: '#FFE600', letterSpacing: '0.4em',
          }}
        >
          HH GOA '26
        </div>

        {/* ============================================ */}
        {/* MAIN TYPOGRAPHY: HACKER + गोवा + HOUSE lockup */}
        {/* Matches official HH Goa logo treatment */}
        {/* ============================================ */}
        <div
          className="absolute z-30"
          style={{
            top: '46px', left: '50%', transform: 'translateX(-50%)',
            textAlign: 'center', whiteSpace: 'nowrap',
          }}
        >
          {/* HACKER */}
          <div
            className="font-serif font-black uppercase"
            style={{
              fontSize: '88px', lineHeight: '0.92', letterSpacing: '-0.03em',
              color: '#FFE600',
              textShadow: '2px 4px 16px rgba(0,0,0,0.3)',
            }}
          >
            HACKER
          </div>

          {/* गोवा — with pink blob background, positioned between HACKER and HOUSE */}
          <div
            style={{
              position: 'relative',
              display: 'inline-block',
              marginTop: '-22px',
              marginBottom: '-18px',
              zIndex: 40,
            }}
          >
            {/* Pink blob backdrop */}
            <div
              style={{
                position: 'absolute',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%) rotate(-4deg)',
                width: '140%', height: '110%',
                background: '#FF0080',
                borderRadius: '18px 22px 16px 20px',
              }}
            />
            <span
              className="font-serif font-black"
              style={{
                position: 'relative',
                fontSize: '56px', color: '#FFE600', lineHeight: 1,
                display: 'inline-block',
                transform: 'rotate(-4deg)',
                zIndex: 1,
              }}
            >
              गोवा
            </span>
          </div>

          {/* HOUSE */}
          <div
            className="font-serif font-black uppercase"
            style={{
              fontSize: '88px', lineHeight: '0.92', letterSpacing: '-0.03em',
              color: '#FFE600',
              textShadow: '2px 4px 16px rgba(0,0,0,0.3)',
            }}
          >
            HOUSE
          </div>
        </div>

        {/* ============================================ */}
        {/* PHOTO — the hero, integrated into scene */}
        {/* Sits bridging sky/ocean/sand layers */}
        {/* ============================================ */}
        <div
          className="absolute z-20 overflow-hidden"
          style={{
            top: '240px', left: '215px',
            width: '650px', height: '480px',
            border: '7px solid #FDFBF7',
            boxShadow: '0 6px 30px rgba(0,0,0,0.25)',
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
            <div
              className="w-full h-full flex flex-col items-center justify-center"
              style={{ background: '#053b21' }}
            >
              <span style={{ fontSize: '90px', opacity: 0.35 }}>🌴</span>
              <span
                className="font-mono uppercase tracking-widest"
                style={{ fontSize: '13px', color: '#FDFBF7', opacity: 0.35, marginTop: '10px' }}
              >
                Upload your photo
              </span>
            </div>
          )}
          {/* Bottom gradient for name readability */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.15) 25%, transparent 50%)',
            }}
          />
        </div>

        {/* ============================================ */}
        {/* PALM LEAF — overlapping top-left of photo */}
        {/* ============================================ */}
        <svg
          className="absolute z-25"
          style={{ top: '200px', left: '130px', width: '160px', height: '140px' }}
          viewBox="0 0 160 140" fill="none"
        >
          <path d="M150 130 Q90 70 25 15 Q55 35 75 60 Q95 90 150 130" fill="#0a6b3a" opacity="0.8" />
          <path d="M140 140 Q70 85 8 50 Q40 60 65 80 Q95 105 140 140" fill="#086036" opacity="0.7" />
          <path d="M150 130 Q90 70 25 15" stroke="#064d2b" strokeWidth="1.5" opacity="0.4" />
        </svg>

        {/* Palm leaf — top-right of photo */}
        <svg
          className="absolute z-25"
          style={{ top: '210px', right: '100px', width: '140px', height: '120px', transform: 'scaleX(-1)' }}
          viewBox="0 0 140 120" fill="none"
        >
          <path d="M130 110 Q75 60 15 10 Q45 25 65 50 Q85 80 130 110" fill="#0a6b3a" opacity="0.7" />
          <path d="M120 120 Q60 75 5 40 Q35 50 60 70 Q85 95 120 120" fill="#086036" opacity="0.6" />
        </svg>

        {/* ============================================ */}
        {/* NAME — overlaid on photo bottom-left */}
        {/* ============================================ */}
        <div
          className="absolute z-30"
          style={{ bottom: '380px', left: '238px' }}
        >
          <div
            className="font-serif font-black uppercase leading-none"
            style={{
              fontSize: '48px', color: '#FDFBF7',
              textShadow: '2px 3px 8px rgba(0,0,0,0.5)',
              maxWidth: '480px', lineHeight: '0.95',
            }}
          >
            {displayName}
          </div>
        </div>

        {/* ============================================ */}
        {/* ROLE — yellow tag, editorial sticker */}
        {/* ============================================ */}
        <div
          className="absolute z-30"
          style={{
            bottom: '356px', left: '238px',
            background: '#FFE600', padding: '3px 14px',
            transform: 'rotate(-1deg)',
          }}
        >
          <span
            className="font-mono font-bold uppercase tracking-widest"
            style={{ fontSize: '14px', color: '#075932' }}
          >
            {displayStack}
          </span>
        </div>

        {/* ============================================ */}
        {/* BUILDER TITLE — pink badge, slight rotation */}
        {/* ============================================ */}
        <div
          className="absolute z-30"
          style={{
            bottom: '356px', right: '230px',
            background: '#FF0080', padding: '3px 12px',
            transform: 'rotate(2deg)',
          }}
        >
          <span
            className="font-mono font-bold uppercase tracking-wider"
            style={{ fontSize: '13px', color: '#FDFBF7' }}
          >
            {displayTitle}
          </span>
        </div>

        {/* ============================================ */}
        {/* DECORATIVE BORDER — Indian floral pattern */}
        {/* Inspired by hhgoa.com green/pink ornament */}
        {/* ============================================ */}
        <svg
          className="absolute z-10"
          style={{ top: '438px', left: 0, width: '1080px', height: '20px' }}
          viewBox="0 0 1080 20" preserveAspectRatio="none" fill="none"
        >
          <rect x="0" y="0" width="1080" height="20" fill="#FF0080" opacity="0.75" />
          {Array.from({ length: 36 }, (_, i) => (
            <g key={i} transform={`translate(${i * 30}, 0)`}>
              <path d="M15 2 L20 10 L15 18 L10 10Z" fill="#0a6b3a" opacity="0.85" />
              <circle cx="15" cy="10" r="2.5" fill="#FFE600" opacity="0.65" />
            </g>
          ))}
          <line x1="0" y1="1" x2="1080" y2="1" stroke="#075932" strokeWidth="1.5" />
          <line x1="0" y1="19" x2="1080" y2="19" stroke="#075932" strokeWidth="1.5" />
        </svg>

        {/* ============================================ */}
        {/* LOWER SECTION: sand/cream area with accents */}
        {/* ============================================ */}

        {/* Surfboard — left */}
        <svg
          className="absolute z-10"
          style={{ top: '445px', left: '35px', width: '26px', height: '95px', transform: 'rotate(-12deg)' }}
          viewBox="0 0 26 95" fill="none"
        >
          <path d="M13 0 Q22 17 22 47 Q22 77 13 95 Q4 77 4 47 Q4 17 13 0Z" fill="#FFE600" stroke="#075932" strokeWidth="1.5" />
          <line x1="13" y1="12" x2="13" y2="82" stroke="#075932" strokeWidth="1" opacity="0.25" />
        </svg>

        {/* Beach umbrella — right */}
        <svg
          className="absolute z-10"
          style={{ top: '430px', right: '18px', width: '70px', height: '85px' }}
          viewBox="0 0 70 85" fill="none"
        >
          <line x1="35" y1="25" x2="35" y2="85" stroke="#075932" strokeWidth="2" />
          <path d="M4 27 Q35 -5 66 27Z" fill="#FFE600" stroke="#075932" strokeWidth="1.5" />
          <path d="M4 27 Q19 3 35 27" fill="#075932" opacity="0.12" />
          <path d="M35 27 Q51 3 66 27" fill="#075932" opacity="0.12" />
        </svg>

        {/* ============================================ */}
        {/* BOTTOM INFO — event metadata (editorial) */}
        {/* ============================================ */}

        {/* GOA, INDIA + date — left */}
        <div
          className="absolute z-20"
          style={{ bottom: '72px', left: '55px' }}
        >
          <div
            className="font-mono font-bold uppercase tracking-[0.2em]"
            style={{ fontSize: '17px', color: '#075932' }}
          >
            GOA, INDIA
          </div>
          <div
            className="font-mono font-bold uppercase tracking-[0.15em]"
            style={{ fontSize: '13px', color: '#075932', opacity: 0.55, marginTop: '3px' }}
          >
            28–31 OCT 2026
          </div>
        </div>

        {/* #FrameInGoa + ID — right */}
        <div
          className="absolute z-20"
          style={{ bottom: '72px', right: '55px', textAlign: 'right' }}
        >
          <div
            className="font-mono font-bold uppercase inline-block"
            style={{
              fontSize: '14px', color: '#FF0080',
              background: '#FDFBF7', padding: '2px 8px',
              border: '2px solid #FF0080',
            }}
          >
            #FrameInGoa
          </div>
          <div
            className="font-mono font-bold tracking-widest"
            style={{ fontSize: '10px', color: '#075932', opacity: 0.45, marginTop: '5px' }}
          >
            {builderId} · 2:47 PM STUDIO
          </div>
        </div>

        {/* ============================================ */}
        {/* GREEN FOOTER BAR */}
        {/* ============================================ */}
        <div
          className="absolute z-10"
          style={{ bottom: 0, left: 0, right: 0, height: '44px', background: '#075932' }}
        />

        {/* Wave scallop at top of footer */}
        <svg
          className="absolute z-10"
          style={{ bottom: '42px', left: 0, width: '1080px', height: '20px' }}
          viewBox="0 0 1080 20" preserveAspectRatio="none" fill="none"
        >
          <path
            d="M0 20 Q54 0 108 20 Q162 0 216 20 Q270 0 324 20 Q378 0 432 20 Q486 0 540 20 Q594 0 648 20 Q702 0 756 20 Q810 0 864 20 Q918 0 972 20 Q1026 0 1080 20"
            fill="#075932"
          />
        </svg>

        {/* Footer text */}
        <div
          className="absolute z-20 font-mono font-bold uppercase tracking-[0.35em]"
          style={{
            bottom: '12px', left: '50%', transform: 'translateX(-50%)',
            fontSize: '12px', color: '#FFE600', whiteSpace: 'nowrap',
          }}
        >
          HACKER HOUSE · GOA · 2026
        </div>

        {/* Pink scooter — HH Goa motif, bottom right of sand area */}
        <svg
          className="absolute z-15"
          style={{ bottom: '60px', right: '170px', width: '50px', height: '35px' }}
          viewBox="0 0 50 35" fill="none"
        >
          <ellipse cx="25" cy="18" rx="15" ry="8" fill="#FF0080" opacity="0.65" />
          <circle cx="12" cy="28" r="5" fill="none" stroke="#075932" strokeWidth="1.5" />
          <circle cx="38" cy="28" r="5" fill="none" stroke="#075932" strokeWidth="1.5" />
          <line x1="35" y1="18" x2="40" y2="6" stroke="#075932" strokeWidth="1.5" />
          <line x1="37" y1="6" x2="46" y2="6" stroke="#075932" strokeWidth="1.5" />
        </svg>
      </div>
    );
  }
);

BuilderCard.displayName = 'BuilderCard';

export default BuilderCard;
