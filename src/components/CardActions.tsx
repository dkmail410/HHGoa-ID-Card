import { useState } from 'react';
import { Download, Share2, Loader2, Check, RotateCcw } from 'lucide-react';
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
    // If not downloaded yet, download first then share
    if (!downloadComplete) {
      handleDownload().then(() => {
        shareToX();
      });
    } else {
      shareToX();
    }
  };

  return (
    <div className="space-y-4">
      {/* Success message */}
      {isReady && (
        <div className="animate-fade-in border-l-4 border-white bg-white/5 px-4 py-3">
          <p className="text-sm font-medium text-white">
            ID GENERATED
          </p>
        </div>
      )}

      {/* Download */}
      <button
        onClick={handleDownload}
        disabled={isDownloading}
        className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-5 py-4 font-bold text-white shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isDownloading ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            PROCESSING...
          </>
        ) : downloadComplete ? (
          <>
            <Check className="h-5 w-5" />
            DOWNLOADED
          </>
        ) : (
          <>
            <Download className="h-5 w-5" />
            DOWNLOAD ID
          </>
        )}
      </button>

      {/* Share on X */}
      <button
        onClick={handleShare}
        className="flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4 font-bold text-white transition-all hover:bg-white/10"
      >
        <Share2 className="h-5 w-5" />
        SHARE ON X
      </button>

      {/* Reset */}
      <button
        onClick={onReset}
        className="flex w-full items-center justify-center gap-2 py-2 text-xs font-medium text-white/50 transition-colors hover:text-white"
      >
        <RotateCcw className="h-3 w-3" />
        START OVER
      </button>

      {/* Share instruction */}
      <div className="rounded-xl border border-white/5 bg-white/5 p-3 text-center">
        <p className="text-[10px] text-white/40 leading-relaxed">
          Note: X (Twitter) does not allow auto-attaching images.
          <br />
          Please manually attach the downloaded image to your post.
        </p>
      </div>

      {/* Error */}
      {downloadError && (
        <p className="border border-red-500/30 bg-red-500/10 p-3 text-center font-mono text-xs text-red-400 uppercase">
          {downloadError}
        </p>
      )}
    </div>
  );
}
