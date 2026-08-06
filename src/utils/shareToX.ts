export function shareToX(): void {
  const caption = `Builder mode: ON 🌴⚡\n\nJust generated my HH Goa '26 Builder ID.\n\nSee you where builders meet the beach.\n\n#FrameInGoa`;

  const encodedText = encodeURIComponent(caption);
  const url = `https://twitter.com/intent/tweet?text=${encodedText}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}
