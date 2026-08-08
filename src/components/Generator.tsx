import { useState, useRef, useMemo, useCallback } from 'react';
import { ArrowLeft, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import PhotoUploader from './PhotoUploader';
import BuilderForm from './BuilderForm';
import BuilderCard from './BuilderCard';
import CardActions from './CardActions';
import { generateBuilderId } from '../data/builderTitles';

interface GeneratorProps {
  onBack: () => void;
}

export default function Generator({ onBack }: GeneratorProps) {
  const [name, setName] = useState('');
  const [stack, setStack] = useState('');
  const [builderTitle, setBuilderTitle] = useState('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [imageZoom, setImageZoom] = useState(1);

  const cardRef = useRef<HTMLDivElement>(null);
  const builderId = useMemo(() => generateBuilderId(), []);

  const isReady = !!(name.trim() && stack && builderTitle && imageUrl);

  const handleReset = useCallback(() => {
    setName('');
    setStack('');
    setBuilderTitle('');
    setImageUrl(null);
    setImagePosition({ x: 0, y: 0 });
    setImageZoom(1);
  }, []);

  const handleZoomIn = () => setImageZoom((z) => Math.min(z + 0.1, 2));
  const handleZoomOut = () => setImageZoom((z) => Math.max(z - 0.1, 1));
  const handleResetPosition = () => {
    setImagePosition({ x: 0, y: 0 });
    setImageZoom(1);
  };

  // Image position adjustment handlers
  const handlePositionUp = () =>
    setImagePosition((p) => ({ ...p, y: Math.max(p.y - 5, -50) }));
  const handlePositionDown = () =>
    setImagePosition((p) => ({ ...p, y: Math.min(p.y + 5, 50) }));
  const handlePositionLeft = () =>
    setImagePosition((p) => ({ ...p, x: Math.max(p.x - 5, -50) }));
  const handlePositionRight = () =>
    setImagePosition((p) => ({ ...p, x: Math.min(p.x + 5, 50) }));

  return (
    <section className="relative min-h-screen px-4 pt-24 pb-16 sm:px-6 bg-[#075932]">
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Back button */}
        <button
          onClick={onBack}
          className="mb-8 flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-widest text-[#FDFBF7] transition-colors hover:text-[#FFE600]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>

        <div className="grid gap-12 lg:grid-cols-[1fr,400px]">
          {/* LEFT: Form */}
          <div className="animate-fade-in space-y-6">
            <div>
              <h2 className="font-serif text-4xl font-black text-[#FDFBF7] sm:text-5xl uppercase tracking-tighter">
                Create your{' '}
                <span className="text-[#FF0080]">
                  Poster
                </span>
              </h2>
              <p className="mt-2 font-mono text-sm text-[#FDFBF7]/80">
                Fill in the details below to generate your custom pass.
              </p>
            </div>

            <PhotoUploader imageUrl={imageUrl} onImageChange={setImageUrl} />

            {/* Image adjustment controls */}
            {imageUrl && (
              <div className="animate-fade-in space-y-2 bg-[#FDFBF7] p-4 border-2 border-[#075932] shadow-[4px_4px_0px_0px_rgba(7,89,50,1)] transform -rotate-1">
                <label className="block font-mono text-xs font-bold tracking-widest text-[#075932] mb-2">
                  ADJUST PHOTO
                </label>
                <div className="flex flex-wrap items-center gap-2">
                  {/* Position controls */}
                  <div className="flex items-center gap-1 border-2 border-[#075932] bg-[#FDFBF7] p-1">
                    <button
                      onClick={handlePositionLeft}
                      className="flex h-7 w-7 items-center justify-center font-bold text-[#075932] transition-colors hover:bg-[#FFE600]"
                      aria-label="Move photo left"
                      title="Move left"
                    >
                      ←
                    </button>
                    <button
                      onClick={handlePositionUp}
                      className="flex h-7 w-7 items-center justify-center font-bold text-[#075932] transition-colors hover:bg-[#FFE600]"
                      aria-label="Move photo up"
                      title="Move up"
                    >
                      ↑
                    </button>
                    <button
                      onClick={handlePositionDown}
                      className="flex h-7 w-7 items-center justify-center font-bold text-[#075932] transition-colors hover:bg-[#FFE600]"
                      aria-label="Move photo down"
                      title="Move down"
                    >
                      ↓
                    </button>
                    <button
                      onClick={handlePositionRight}
                      className="flex h-7 w-7 items-center justify-center font-bold text-[#075932] transition-colors hover:bg-[#FFE600]"
                      aria-label="Move photo right"
                      title="Move right"
                    >
                      →
                    </button>
                  </div>

                  {/* Zoom controls */}
                  <div className="flex items-center gap-1 border-2 border-[#075932] bg-[#FDFBF7] p-1">
                    <button
                      onClick={handleZoomOut}
                      disabled={imageZoom <= 1}
                      className="flex h-7 w-7 items-center justify-center text-[#075932] transition-colors hover:bg-[#FFE600] disabled:opacity-30"
                      aria-label="Zoom out"
                      title="Zoom out"
                    >
                      <ZoomOut className="h-3.5 w-3.5" />
                    </button>
                    <span className="min-w-[3rem] text-center font-mono text-xs font-bold text-[#075932]">
                      {Math.round(imageZoom * 100)}%
                    </span>
                    <button
                      onClick={handleZoomIn}
                      disabled={imageZoom >= 2}
                      className="flex h-7 w-7 items-center justify-center text-[#075932] transition-colors hover:bg-[#FFE600] disabled:opacity-30"
                      aria-label="Zoom in"
                      title="Zoom in"
                    >
                      <ZoomIn className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  {/* Reset */}
                  <button
                    onClick={handleResetPosition}
                    className="flex h-9 items-center gap-1.5 border-2 border-[#075932] bg-[#FDFBF7] px-2.5 font-mono text-xs font-bold text-[#075932] transition-colors hover:bg-[#FFE600]"
                    aria-label="Reset photo position"
                    title="Reset position"
                  >
                    <RotateCcw className="h-3 w-3" />
                    RESET
                  </button>
                </div>
              </div>
            )}

            <BuilderForm
              name={name}
              stack={stack}
              builderTitle={builderTitle}
              onNameChange={setName}
              onStackChange={setStack}
              onTitleChange={setBuilderTitle}
            />

            {/* Validation hints */}
            {!isReady && (name || stack || imageUrl) && (
              <div className="bg-[#FFE600] px-4 py-3 border-2 border-[#075932] shadow-[4px_4px_0px_0px_rgba(7,89,50,1)] transform rotate-1">
                <p className="font-mono text-xs font-bold text-[#075932] uppercase">
                  {!imageUrl && '📸 Upload a photo • '}
                  {!name.trim() && '✍️ Enter your name • '}
                  {!stack && '🛠 Pick your stack'}
                </p>
              </div>
            )}

            {/* Actions (visible on mobile below card) */}
            <div className="lg:hidden">
              <CardActions
                cardRef={cardRef}
                name={name}
                isReady={isReady}
                onReset={handleReset}
              />
            </div>
          </div>

          {/* RIGHT: Card Preview + Actions */}
          <div className="animate-fade-in animation-delay-200">
            <div className="lg:sticky lg:top-24">
              <div className="mb-4">
                <h3 className="font-mono text-xs font-bold tracking-widest text-[#FDFBF7]/60">
                  LIVE PREVIEW
                </h3>
              </div>

              {/* Card Container */}
              <div className="relative mx-auto max-w-[400px] aspect-square" style={{ containerType: 'inline-size' }}>
                {/* Card */}
                <div className="relative overflow-hidden shadow-[12px_12px_0px_0px_rgba(5,59,33,1)] border-4 border-[#053b21] bg-[#0d7842] w-full h-full">
                  <div style={{ width: '1080px', height: '1080px', transform: 'scale(calc(100cqw / 1080))', transformOrigin: 'top left' }}>
                    <BuilderCard
                      ref={cardRef}
                      name={name}
                      stack={stack}
                      builderTitle={builderTitle}
                      imageUrl={imageUrl}
                      builderId={builderId}
                      imagePosition={imagePosition}
                      imageZoom={imageZoom}
                    />
                  </div>
                </div>
              </div>

              {/* Actions (desktop) */}
              <div className="mt-6 hidden lg:block">
                <CardActions
                  cardRef={cardRef}
                  name={name}
                  isReady={isReady}
                  onReset={handleReset}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
