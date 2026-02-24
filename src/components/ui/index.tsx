"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function TypedCommand({ text, delay = 0 }: { text: string; delay?: number }) {
  const reduce = useReducedMotion();
  if (reduce) return <span className="text-[var(--text-heading)]">{text}</span>;
  return (
    <span className="text-[var(--text-heading)]">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.02, delay: delay + i * 0.025 }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

export function TermLine({
  prompt = "$",
  command,
  children,
  delay = 0,
  dir,
}: {
  prompt?: string;
  command?: string;
  children?: ReactNode;
  delay?: number;
  dir?: string;
}) {
  return (
    <Reveal delay={delay}>
      <div className="group mb-5">
        {command !== undefined && (
          <p className="flex items-center gap-0 font-mono text-sm">
            {dir && <span className="mr-1 text-[var(--blue)]">{dir}</span>}
            <span className="mr-2 text-[var(--green)]">{prompt}</span>
            <TypedCommand text={command} delay={delay} />
          </p>
        )}
        {children && (
          <div className="mt-1.5 font-mono text-sm text-[var(--text-secondary)]">{children}</div>
        )}
      </div>
    </Reveal>
  );
}

export function SkillBar({ label, level }: { label: string; level: number }) {
  const filled = Math.round(level / 10);
  const empty = 10 - filled;
  return (
    <div className="flex items-center gap-3 text-xs">
      <span className="w-20 shrink-0 truncate text-[var(--yellow)]">{label}</span>
      <span className="text-[var(--green)]">{"█".repeat(filled)}</span>
      <span className="text-[var(--text-dim)]">{"░".repeat(empty)}</span>
      <span className="w-8 text-right text-[var(--text-muted)]">{level}%</span>
    </div>
  );
}

export function Divider() {
  return <div className="my-8 border-t border-dashed border-[var(--border-divider)]" />;
}

export function Cursor() {
  return (
    <Reveal delay={0.97}>
      <p className="mt-4 font-mono text-sm">
        <span className="text-[var(--green)]">$</span>{" "}
        <span className="inline-block h-4 w-2 animate-pulse bg-[var(--green)] align-middle" />
      </p>
    </Reveal>
  );
}
