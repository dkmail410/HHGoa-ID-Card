import { useCallback, useRef, useState } from 'react';
import { Upload, ImageIcon, X } from 'lucide-react';
import { validateImageFile, createImageUrl } from '../utils/imageUtils';

interface PhotoUploaderProps {
  imageUrl: string | null;
  onImageChange: (url: string | null) => void;
}

export default function PhotoUploader({
  imageUrl,
  onImageChange,
}: PhotoUploaderProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback(
    async (file: File) => {
      setError(null);
      const validationError = validateImageFile(file);
      if (validationError) {
        setError(validationError);
        return;
      }

      try {
        const url = await createImageUrl(file);
        onImageChange(url);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : 'Failed to load image. Try JPG or PNG.'
        );
      }
    },
    [onImageChange]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const handleRemove = useCallback(() => {
    onImageChange(null);
    setError(null);
    if (inputRef.current) inputRef.current.value = '';
  }, [onImageChange]);

  if (imageUrl) {
    return (
      <div className="space-y-2">
        <label className="block text-xs font-medium tracking-wider text-white/40">
          YOUR PHOTO
        </label>
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
          <img
            src={imageUrl}
            alt="Uploaded photo"
            className="h-48 w-full object-cover"
          />
          <button
            onClick={handleRemove}
            className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white/70 backdrop-blur-sm transition-colors hover:bg-red-500/80 hover:text-white"
            aria-label="Remove photo"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <label className="block text-xs font-medium tracking-wider text-white/40">
        YOUR PHOTO
      </label>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => inputRef.current?.click()}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') inputRef.current?.click();
        }}
        aria-label="Upload photo"
        className={`flex cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed px-4 py-10 transition-all duration-300 ${
          isDragging
            ? 'border-orange-500 bg-orange-500/10'
            : 'border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]'
        }`}
      >
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-full transition-colors ${
            isDragging ? 'bg-orange-500/20' : 'bg-white/5'
          }`}
        >
          {isDragging ? (
            <Upload className="h-5 w-5 text-orange-400" />
          ) : (
            <ImageIcon className="h-5 w-5 text-white/30" />
          )}
        </div>
        <div className="text-center">
          <p className="text-sm font-medium text-white/60">
            {isDragging ? 'Drop it here' : 'Drop your photo here'}
          </p>
          <p className="mt-1 text-xs text-white/30">or choose a file</p>
        </div>
        <input
          ref={inputRef}
          type="file"
          accept="image/jpeg,image/jpg,image/png,image/webp,image/heic,image/heif,.heic,.heif"
          onChange={handleInputChange}
          className="hidden"
          aria-label="Upload photo file"
        />
      </div>
      {error && (
        <p className="mt-2 rounded-lg bg-red-500/10 px-3 py-2 text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
