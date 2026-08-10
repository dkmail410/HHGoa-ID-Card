import { useState } from 'react';
import { Download, RotateCcw, Loader2, Check } from 'lucide-react';
import { exportCardAsPng } from '../utils/exportCard';
import { shareToX } from '../utils/shareToX';

interface CardActionsProps {
  cardRef: React.RefObject<HTMLDivElement | null>;
  name: string;
  isReady: boolean;
  onReset: () => void;
}

export default function CardActions({
  cardRef,
  name,
  isReady,
  onReset,
}: CardActionsProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);
  const [downloadError, setDownloadError] = useState<string | null>(null);

  const handleDownload = async () => {
    if (!cardRef.current) return;
    setIsDownloading(true);
    setDownloadError(null);
    setDownloadComplete(false);

    try {
      await exportCardAsPng(cardRef.current, name);
      setDownloadComplete(true);
      setTimeout(() => setDownloadComplete(false), 3000);
    } catch (error) {
      console.error(error);
      setDownloadError(String(error) || 'Failed to generate image. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  const handleShare = () => {
    if (!downloadComplete) {
      handleDownload().then(() => {
        shareToX();
      });
    } else {
      shareToX();
    }
  };

  return (
    <div className="space-y-3">
      {/* Ready indicator */}
      {isReady && (
        <div className="animate-fade-in bg-[#FFE600] px-4 py-2.5 border-2 border-[#075932] shadow-[4px_4px_0px_0px_rgba(7,89,50,1)]">
          <p className="font-mono text-xs font-bold text-[#075932] uppercase tracking-widest">
            ✦ POSTER READY — DOWNLOAD BELOW
          </p>
        </div>
      )}

      {/* Download */}
      <button
        onClick={handleDownload}
        disabled={isDownloading}
        className="flex w-full items-center justify-center gap-3 bg-[#FFE600] px-5 py-4 font-mono text-sm font-bold uppercase tracking-widest text-[#075932] border-2 border-[#075932] shadow-[6px_6px_0px_0px_rgba(7,89,50,1)] transition-all hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_0px_rgba(7,89,50,1)] active:translate-y-0.5 active:shadow-[2px_2px_0px_0px_rgba(7,89,50,1)] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isDownloading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            GENERATING...
          </>
        ) : downloadComplete ? (
          <>
            <Check className="h-4 w-4" />
            DOWNLOADED ✓
          </>
        ) : (
          <>
            <Download className="h-4 w-4" />
            DOWNLOAD POSTER
          </>
        )}
      </button>

      {/* Share on X */}
      <button
        onClick={handleShare}
        className="flex w-full items-center justify-center gap-3 bg-[#FF0080] px-5 py-3.5 font-mono text-sm font-bold uppercase tracking-widest text-[#FDFBF7] border-2 border-[#075932] shadow-[4px_4px_0px_0px_rgba(7,89,50,1)] transition-all hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_0px_rgba(7,89,50,1)]"
      >
        SHARE ON X
      </button>

      {/* Reset */}
      <button
        onClick={onReset}
        className="flex w-full items-center justify-center gap-2 py-2 font-mono text-xs font-bold uppercase tracking-widest text-[#FDFBF7]/50 transition-colors hover:text-[#FFE600]"
      >
        <RotateCcw className="h-3 w-3" />
        START OVER
      </button>

      {/* Share instruction */}
      <div className="bg-[#FDFBF7] p-3 border-2 border-[#075932]">
        <p className="font-mono text-[10px] font-bold text-[#075932]/70 leading-relaxed text-center uppercase tracking-wider">
          X does not auto-attach images.
          <br />
          Attach the downloaded poster to your post manually.
        </p>
      </div>

      {/* Error */}
      {downloadError && (
        <div className="bg-[#FF0080] p-3 border-2 border-[#075932]">
          <p className="font-mono text-xs font-bold text-[#FDFBF7] uppercase text-center">
            {downloadError}
          </p>
        </div>
      )}
    </div>
  );
}
