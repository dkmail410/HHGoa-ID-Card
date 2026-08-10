import { toPng } from 'html-to-image';

export async function exportCardAsPng(
  element: HTMLElement,
  name: string
): Promise<void> {
  try {
    const dataUrl = await toPng(element, {
      width: 1080,
      height: 1080,
      style: {
        transform: 'none',
        width: '1080px',
        height: '1080px',
      },
      quality: 1.0,
      pixelRatio: 1,
    });

    // Convert data URL to Blob to enforce filename across all browsers (like Edge/Safari)
    const res = await fetch(dataUrl);
    const blob = await res.blob();
    const blobUrl = URL.createObjectURL(blob);

    const link = document.createElement('a');
    const safeName = name.trim().replace(/\s+/g, '-') || 'Builder';
    link.download = `HH-Goa-2026-FrameInGoa-${safeName}.png`;
    link.href = blobUrl;
    
    // Append to body, click, and clean up
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(blobUrl);
  } catch (error) {
    console.error('Failed to generate image:', error);
    throw error;
  }
}
