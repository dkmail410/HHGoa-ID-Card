import heic2any from 'heic2any';

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

export async function createImageUrl(file: File): Promise<string> {
  // If it's a HEIC/HEIF image, convert it to JPEG using heic2any
  if (file.type === 'image/heic' || file.type === 'image/heif' || file.name.match(/\.(heic|heif)$/i)) {
    try {
      const convertedBlob = await heic2any({
        blob: file,
        toType: 'image/jpeg',
        quality: 0.8
      });
      // heic2any can return an array of blobs if it's an animation, handle both
      const blob = Array.isArray(convertedBlob) ? convertedBlob[0] : convertedBlob;
      return URL.createObjectURL(blob);
    } catch (err) {
      console.error('HEIC conversion failed:', err);
      throw new Error('Failed to convert HEIC image. Please try a JPG or PNG instead.');
    }
  }

  // For other formats, create object URL directly
  return URL.createObjectURL(file);
}
