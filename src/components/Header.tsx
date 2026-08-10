export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#053b21] bg-[#075932]">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="/" className="group flex items-center gap-2">
          <span className="font-mono text-xs font-bold tracking-widest text-[#FFE600] uppercase">
            2:47 PM STUDIO
          </span>
        </a>
        <div className="flex items-center gap-6">
          <span className="hidden sm:inline font-mono text-[10px] font-bold tracking-widest text-[#FDFBF7]/60 uppercase">
            GOA, INDIA · 28–31 OCT 2026
          </span>
          <a
            href="https://hacker-house-goa-2026.devfolio.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs font-bold tracking-widest text-[#FF0080] uppercase underline underline-offset-2 hover:text-[#FFE600] transition-colors"
          >
            APPLY
          </a>
        </div>
      </div>
    </header>
  );
}
