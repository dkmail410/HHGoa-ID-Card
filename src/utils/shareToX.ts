export function shareToX(): void {
  const caption = `Framed for Goa 🌴\n\nHH Goa '26\n#FrameInGoa`;

  const encodedText = encodeURIComponent(caption);
  const url = `https://twitter.com/intent/tweet?text=${encodedText}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}
