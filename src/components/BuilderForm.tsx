import { Shuffle, Pencil } from 'lucide-react';
import { stackOptions, getRandomTitle } from '../data/builderTitles';

interface BuilderFormProps {
  name: string;
  stack: string;
  builderTitle: string;
  onNameChange: (name: string) => void;
  onStackChange: (stack: string) => void;
  onTitleChange: (title: string) => void;
}

export default function BuilderForm({
  name,
  stack,
  builderTitle,
  onNameChange,
  onStackChange,
  onTitleChange,
}: BuilderFormProps) {
  const handleShuffle = () => {
    const currentStack = stack || 'Other';
    onTitleChange(getRandomTitle(currentStack));
  };

  return (
    <div className="space-y-6 bg-[#FDFBF7] p-6 border-2 border-[#075932] shadow-[8px_8px_0px_0px_rgba(5,59,33,0.8)] transform rotate-1">
      {/* Name */}
      <div className="space-y-2">
        <label
          htmlFor="builder-name"
          className="block font-mono text-xs font-bold tracking-widest text-[#075932] uppercase"
        >
          NAME
        </label>
        <input
          id="builder-name"
          type="text"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          placeholder="e.g. Akshay Singh"
          maxLength={40}
          className="w-full rounded-none border-2 border-[#075932] bg-white px-4 py-3 text-sm font-bold text-[#075932] placeholder-[#075932]/40 outline-none transition-all focus:border-[#FF0080] focus:shadow-[4px_4px_0px_0px_rgba(255,0,128,1)]"
        />
      </div>

      {/* Stack / Role */}
      <div className="space-y-2 mt-4">
        <label className="block font-mono text-xs font-bold tracking-widest text-[#075932] uppercase">
          STACK / ROLE
        </label>
        <div className="flex flex-wrap gap-2">
          {stackOptions.map((option) => (
            <button
              key={option}
              onClick={() => {
                onStackChange(option);
                if (!builderTitle || stack !== option) {
                  onTitleChange(getRandomTitle(option));
                }
              }}
              className={`px-3 py-1.5 font-mono text-xs font-bold transition-all duration-200 border-2 border-[#075932] uppercase ${
                stack === option
                  ? 'bg-[#FF0080] text-[#FDFBF7] shadow-[2px_2px_0px_0px_rgba(7,89,50,1)] translate-y-[-2px]'
                  : 'bg-white text-[#075932] hover:bg-[#FFE600] hover:shadow-[2px_2px_0px_0px_rgba(7,89,50,1)] hover:-translate-y-[1px]'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Builder Title */}
      {builderTitle && (
        <div className="animate-fade-in space-y-2 mt-4 pt-4 border-t-2 border-dashed border-[#075932]/30">
          <label
            htmlFor="builder-title"
            className="block font-mono text-xs font-bold tracking-widest text-[#075932] uppercase"
          >
            BUILDER CLASS
          </label>
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <input
                id="builder-title"
                type="text"
                value={builderTitle}
                onChange={(e) => onTitleChange(e.target.value)}
                maxLength={30}
                className="w-full rounded-none border-2 border-[#075932] bg-[#FFE600] px-4 py-3 pr-10 font-mono text-sm font-bold text-[#075932] uppercase outline-none transition-all focus:border-[#FF0080] focus:shadow-[4px_4px_0px_0px_rgba(255,0,128,1)]"
              />
              <Pencil className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#075932]" />
            </div>
            <button
              onClick={handleShuffle}
              className="flex h-[46px] w-[46px] flex-shrink-0 items-center justify-center border-2 border-[#075932] bg-white text-[#075932] transition-all hover:bg-[#FF0080] hover:text-[#FDFBF7] active:scale-95 shadow-[2px_2px_0px_0px_rgba(7,89,50,1)]"
              aria-label="Shuffle builder class"
              title="Shuffle class"
            >
              <Shuffle className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
