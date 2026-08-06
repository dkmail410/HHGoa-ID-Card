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
    <section className="relative min-h-screen px-4 pt-24 pb-16 sm:px-6 bg-[#0a0a0f]">
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-orange-500/20 blur-[120px]" />
        <div className="absolute -bottom-40 left-0 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Back button */}
        <button
          onClick={onBack}
          className="mb-8 flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>

        <div className="grid gap-12 lg:grid-cols-[1fr,400px]">
          {/* LEFT: Form */}
          <div className="animate-fade-in space-y-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Create your{' '}
                <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                  Builder ID
                </span>
              </h2>
              <p className="mt-2 text-sm text-white/60">
                Fill in the details below to generate your custom pass.
              </p>
            </div>

            <PhotoUploader imageUrl={imageUrl} onImageChange={setImageUrl} />

            {/* Image adjustment controls */}
            {imageUrl && (
              <div className="animate-fade-in space-y-2">
                <label className="block text-xs font-medium tracking-wider text-white/40">
                  ADJUST PHOTO
                </label>
                <div className="flex flex-wrap items-center gap-2">
                  {/* Position controls */}
                  <div className="flex items-center gap-1 rounded-lg border border-white/8 bg-white/[0.02] p-1">
                    <button
                      onClick={handlePositionLeft}
                      className="flex h-7 w-7 items-center justify-center rounded text-white/40 transition-colors hover:bg-white/10 hover:text-white/70"
                      aria-label="Move photo left"
                      title="Move left"
                    >
                      ←
                    </button>
                    <button
                      onClick={handlePositionUp}
                      className="flex h-7 w-7 items-center justify-center rounded text-white/40 transition-colors hover:bg-white/10 hover:text-white/70"
                      aria-label="Move photo up"
                      title="Move up"
                    >
                      ↑
                    </button>
                    <button
                      onClick={handlePositionDown}
                      className="flex h-7 w-7 items-center justify-center rounded text-white/40 transition-colors hover:bg-white/10 hover:text-white/70"
                      aria-label="Move photo down"
                      title="Move down"
                    >
                      ↓
                    </button>
                    <button
                      onClick={handlePositionRight}
                      className="flex h-7 w-7 items-center justify-center rounded text-white/40 transition-colors hover:bg-white/10 hover:text-white/70"
                      aria-label="Move photo right"
                      title="Move right"
                    >
                      →
                    </button>
                  </div>

                  {/* Zoom controls */}
                  <div className="flex items-center gap-1 rounded-lg border border-white/8 bg-white/[0.02] p-1">
                    <button
                      onClick={handleZoomOut}
                      disabled={imageZoom <= 1}
                      className="flex h-7 w-7 items-center justify-center rounded text-white/40 transition-colors hover:bg-white/10 hover:text-white/70 disabled:opacity-30"
                      aria-label="Zoom out"
                      title="Zoom out"
                    >
                      <ZoomOut className="h-3.5 w-3.5" />
                    </button>
                    <span className="min-w-[3rem] text-center text-xs text-white/30">
                      {Math.round(imageZoom * 100)}%
                    </span>
                    <button
                      onClick={handleZoomIn}
                      disabled={imageZoom >= 2}
                      className="flex h-7 w-7 items-center justify-center rounded text-white/40 transition-colors hover:bg-white/10 hover:text-white/70 disabled:opacity-30"
                      aria-label="Zoom in"
                      title="Zoom in"
                    >
                      <ZoomIn className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  {/* Reset */}
                  <button
                    onClick={handleResetPosition}
                    className="flex h-9 items-center gap-1.5 rounded-lg border border-white/8 bg-white/[0.02] px-2.5 text-xs text-white/30 transition-colors hover:bg-white/[0.05] hover:text-white/50"
                    aria-label="Reset photo position"
                    title="Reset position"
                  >
                    <RotateCcw className="h-3 w-3" />
                    Reset
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
              <div className="rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3">
                <p className="text-xs text-white/30">
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
                <h3 className="text-xs font-medium tracking-wider text-white/30">
                  LIVE PREVIEW
                </h3>
              </div>

              {/* Card Container */}
              <div className="relative mx-auto max-w-[400px]">
                {/* Glow */}
                <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-orange-500/15 via-amber-500/5 to-cyan-500/5 blur-xl" />

                {/* Card */}
                <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
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
