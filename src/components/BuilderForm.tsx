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
    <div className="space-y-5">
      {/* Name */}
      <div className="space-y-2">
        <label
          htmlFor="builder-name"
          className="block text-xs font-medium tracking-wider text-white/40"
        >
          NAME
        </label>
        <input
          id="builder-name"
          type="text"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          placeholder="Akshay Singh"
          maxLength={40}
          className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all focus:border-orange-500/50 focus:bg-white/[0.05] focus:ring-1 focus:ring-orange-500/30"
        />
      </div>

      {/* Stack / Role */}
      <div className="space-y-2">
        <label className="block text-xs font-medium tracking-wider text-white/40">
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
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
                stack === option
                  ? 'border border-orange-500/50 bg-orange-500/15 text-orange-400 shadow-sm shadow-orange-500/10'
                  : 'border border-white/8 bg-white/[0.03] text-white/40 hover:border-white/15 hover:bg-white/[0.06] hover:text-white/60'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Builder Title */}
      {builderTitle && (
        <div className="animate-fade-in space-y-2">
          <label
            htmlFor="builder-title"
            className="block text-xs font-medium tracking-wider text-white/40"
          >
            BUILDER TITLE
          </label>
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <input
                id="builder-title"
                type="text"
                value={builderTitle}
                onChange={(e) => onTitleChange(e.target.value)}
                maxLength={30}
                className="w-full rounded-xl border border-orange-500/20 bg-orange-500/5 px-4 py-3 pr-10 text-sm font-medium text-orange-400 outline-none transition-all focus:border-orange-500/40 focus:ring-1 focus:ring-orange-500/20"
              />
              <Pencil className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-orange-400/40" />
            </div>
            <button
              onClick={handleShuffle}
              className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/40 transition-all hover:border-orange-500/30 hover:bg-orange-500/10 hover:text-orange-400 active:scale-95"
              aria-label="Shuffle builder title"
              title="Shuffle title"
            >
              <Shuffle className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
