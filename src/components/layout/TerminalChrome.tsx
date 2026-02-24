import { Reveal } from "@/components/ui";

interface TerminalChromeProps {
  tabs?: string[];
  activeTab?: number;
}

export function TerminalChrome({ tabs = [], activeTab = 0 }: TerminalChromeProps) {
  return (
    <Reveal>
      <div className="mb-1.5 flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
      </div>
      {tabs.length > 0 && (
        <div className="mb-6 flex items-center border-b border-[var(--border)]">
          {tabs.map((tab, i) => (
            <span
              key={tab}
              className={
                i === activeTab
                  ? "-mb-px rounded-t border-x border-t border-[var(--border-accent)] bg-[var(--bg-inset)] px-4 py-1.5 font-mono text-xs text-[var(--text-tab)]"
                  : "px-4 py-1.5 font-mono text-xs text-[var(--text-faint)]"
              }
            >
              {tab}
            </span>
          ))}
        </div>
      )}
    </Reveal>
  );
}
