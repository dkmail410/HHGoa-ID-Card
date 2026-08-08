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
      <div className="space-y-2 bg-[#FDFBF7] p-4 border-2 border-[#075932] shadow-[4px_4px_0px_0px_rgba(7,89,50,1)] transform rotate-1">
        <label className="block font-mono text-xs font-bold tracking-widest text-[#075932] uppercase">
          YOUR PHOTO
        </label>
        <div className="relative overflow-hidden border-2 border-[#075932] bg-white p-2 shadow-inner">
          <img
            src={imageUrl}
            alt="Uploaded photo"
            className="h-48 w-full object-cover border border-[#075932]/20"
          />
          <button
            onClick={handleRemove}
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center border-2 border-[#075932] bg-[#FF0080] text-white transition-colors hover:bg-red-600 shadow-[2px_2px_0px_0px_rgba(7,89,50,1)]"
            aria-label="Remove photo"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-2 bg-[#FDFBF7] p-4 border-2 border-[#075932] shadow-[4px_4px_0px_0px_rgba(7,89,50,1)] transform rotate-1">
      <label className="block font-mono text-xs font-bold tracking-widest text-[#075932] uppercase">
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
        className={`flex cursor-pointer flex-col items-center justify-center gap-3 border-2 border-dashed px-4 py-10 transition-all duration-300 ${
          isDragging
            ? 'border-[#FF0080] bg-[#FF0080]/10'
            : 'border-[#075932]/40 bg-white hover:border-[#075932] hover:bg-[#FFE600]/20'
        }`}
      >
        <div
          className={`flex h-12 w-12 items-center justify-center transition-colors border-2 border-[#075932] shadow-[2px_2px_0px_0px_rgba(7,89,50,1)] ${
            isDragging ? 'bg-[#FFE600]' : 'bg-[#FDFBF7]'
          }`}
        >
          {isDragging ? (
            <Upload className="h-5 w-5 text-[#075932]" />
          ) : (
            <ImageIcon className="h-5 w-5 text-[#075932]" />
          )}
        </div>
        <div className="text-center">
          <p className="font-mono text-sm font-bold text-[#075932]">
            {isDragging ? 'DROP IT HERE' : 'DROP YOUR PHOTO HERE'}
          </p>
          <p className="mt-1 font-mono text-xs text-[#075932]/60">OR CHOOSE A FILE</p>
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
