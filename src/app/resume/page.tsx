"use client";

import { profile } from "@/content/profile";
import { Header, Footer, TerminalChrome } from "@/components/layout";
import { TermLine, Cursor } from "@/components/ui";

export default function ResumePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="mx-auto max-w-4xl px-5 py-12 sm:px-8 md:px-12 lg:px-16">
        <TerminalChrome tabs={["resume"]} activeTab={0} />

        {/* Download command */}
        <TermLine command="cat ~/resume/README.md" delay={0.05}>
          <div className="mt-1 rounded border border-[var(--border)] bg-[var(--bg-card)] p-5">
            <p className="mb-1 text-sm font-bold text-[var(--text-heading)]">
              <span className="text-[var(--text-muted)]">#</span> {profile.name} — Resume
            </p>
            <p className="mb-5 text-xs leading-relaxed text-[var(--text-secondary)]">
              {profile.shortBio}
            </p>
            <a
              href={profile.resumeFile}
              download
              className="inline-flex items-center gap-2 rounded border border-[var(--green-border)] bg-[var(--green-bg)] px-5 py-2.5 font-mono text-sm text-[var(--green)] transition-colors hover:bg-[var(--green-bg-hover)]"
            >
              ↓ Download resume.pdf
            </a>
          </div>
        </TermLine>

        {/* PDF Embed */}
        <TermLine command="open resume.pdf" delay={0.15}>
          <div className="mt-1 overflow-hidden rounded border border-[var(--border)]">
            <div className="flex aspect-[8.5/11] items-center justify-center bg-[var(--bg-card)]">
              <object data={profile.resumeFile} type="application/pdf" className="h-full w-full">
                <div className="p-8 text-center">
                  <p className="mb-4 text-sm text-[var(--text-muted)]">
                    <span className="text-[var(--yellow)]">[warn]</span> PDF preview not supported
                    in this terminal.
                  </p>
                  <a
                    href={profile.resumeFile}
                    download
                    className="inline-flex items-center gap-2 rounded border border-[var(--green-border)] bg-[var(--green-bg)] px-4 py-2 text-xs text-[var(--green)] transition-colors hover:bg-[var(--green-bg-hover)]"
                  >
                    ↓ Download instead
                  </a>
                </div>
              </object>
            </div>
          </div>
        </TermLine>

        {/* Quick summary */}
        <TermLine command="cat resume.summary.yml" delay={0.25}>
          <div className="mt-1 space-y-4 rounded border border-[var(--border)] bg-[var(--bg-card)] p-4 text-xs">
            <div>
              <p className="mb-1.5 font-bold text-[var(--text-heading)]">
                <span className="text-[var(--text-muted)]"># </span>education
              </p>
              {profile.education.map((edu, i) => (
                <div key={i} className="mb-2 ml-2">
                  <p>
                    <span className="text-[var(--yellow)]">degree</span>
                    <span className="text-[var(--text-muted)]">: </span>
                    {edu.degree}
                  </p>
                  <p>
                    <span className="text-[var(--yellow)]">school</span>
                    <span className="text-[var(--text-muted)]">: </span>
                    {edu.school}
                  </p>
                  <p>
                    <span className="text-[var(--yellow)]">period</span>
                    <span className="text-[var(--text-muted)]">: </span>
                    <span className="text-[var(--text-hover)]">{edu.period}</span>
                  </p>
                  {edu.gpa && (
                    <p>
                      <span className="text-[var(--yellow)]">gpa</span>
                      <span className="text-[var(--text-muted)]">: </span>
                      <span className="text-[var(--green)]">{edu.gpa}</span>
                    </p>
                  )}
                </div>
              ))}
            </div>
            <div>
              <p className="mb-1.5 font-bold text-[var(--text-heading)]">
                <span className="text-[var(--text-muted)]"># </span>experience
              </p>
              {profile.experience.map((exp, i) => (
                <div key={i} className="mb-2 ml-2">
                  <p>
                    <span className="text-[var(--yellow)]">title</span>
                    <span className="text-[var(--text-muted)]">: </span>
                    {exp.title}
                  </p>
                  <p>
                    <span className="text-[var(--yellow)]">org</span>
                    <span className="text-[var(--text-muted)]">: </span>
                    {exp.org}
                  </p>
                  <p>
                    <span className="text-[var(--yellow)]">period</span>
                    <span className="text-[var(--text-muted)]">: </span>
                    <span className="text-[var(--text-hover)]">{exp.period}</span>
                  </p>
                </div>
              ))}
            </div>
            <div>
              <p className="mb-1.5 font-bold text-[var(--text-heading)]">
                <span className="text-[var(--text-muted)]"># </span>skills
              </p>
              {profile.skills.map((group) => (
                <p key={group.category} className="ml-2">
                  <span className="text-[var(--yellow)]">
                    {group.category.toLowerCase().replace(/\s+/g, "_")}
                  </span>
                  <span className="text-[var(--text-muted)]">: </span>
                  <span className="text-[var(--text-secondary)]">[{group.items.join(", ")}]</span>
                </p>
              ))}
            </div>
          </div>
        </TermLine>

        <Cursor />
      </main>
      <Footer />
    </>
  );
}
