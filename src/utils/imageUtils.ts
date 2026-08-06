export function validateImageFile(file: File): string | null {
  const validTypes = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp',
    'image/heic',
    'image/heif',
  ];

  if (!validTypes.includes(file.type) && !file.name.match(/\.(heic|heif)$/i)) {
    return 'That image format isn\'t supported yet. Try JPG, PNG, or WebP.';
  }

  // 20MB limit
  if (file.size > 20 * 1024 * 1024) {
    return 'That image is too large. Please use an image under 20MB.';
  }

  return null;
}

export function createImageUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    // For HEIC/HEIF, we'll attempt to load and fallback gracefully
    if (file.name.match(/\.(heic|heif)$/i)) {
      // Try loading the HEIC directly — modern browsers may support it
      const url = URL.createObjectURL(file);
      const img = new Image();
      img.onload = () => resolve(url);
      img.onerror = () => {
        URL.revokeObjectURL(url);
        reject(
          new Error(
            'HEIC format is not supported by your browser. Please convert to JPG or PNG.'
          )
        );
      };
      img.src = url;
      return;
    }

    const url = URL.createObjectURL(file);
    resolve(url);
  });
}
