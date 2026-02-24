"use client";

import { profile } from "@/content/profile";
import { Header, Footer, TerminalChrome } from "@/components/layout";
import { TermLine, SkillBar, Divider, Cursor } from "@/components/ui";
import { getSocialLinks, asciiName } from "@/lib/helpers";

export default function HomePage() {
  const featuredProjects = profile.projects.filter((p) => p.featured);
  const otherProjects = profile.projects.filter((p) => !p.featured);
  const ascii = asciiName(profile.name);
  const socialLinks = getSocialLinks();

  const skillLevels: Record<string, number> = {
    Languages: 90,
    "Systems & Infra": 85,
    "Web & Mobile": 80,
    "Tools & Practices": 75,
  };

  return (
    <>
      <Header />
      <main
        id="main-content"
        className="mx-auto max-w-4xl px-5 pt-6 pb-16 sm:px-8 md:px-12 lg:px-16"
      >
        <TerminalChrome
          tabs={[profile.name.toLowerCase().replace(/\s/g, "-"), "projects", "career"]}
          activeTab={0}
        />

        {/* ── neofetch ── */}
        <TermLine command="neofetch" delay={0.05}>
          <div className="mt-2 flex flex-col gap-6 sm:flex-row sm:gap-10">
            <pre className="shrink-0 text-xs leading-snug text-[var(--green)] select-none sm:text-sm">
              {ascii.map((line, i) => (
                <span key={i}>
                  {line}
                  {"\n"}
                </span>
              ))}
            </pre>
            <div className="min-w-0 space-y-1 text-xs">
              <p>
                <span className="font-bold text-[var(--green)]">
                  {profile.name.toLowerCase().replace(/\s/g, "")}@world
                </span>
              </p>
              <p className="text-[var(--text-faint)]">{"─".repeat(28)}</p>
              <p>
                <span className="text-[var(--green)]">OS</span>
                <span className="text-[var(--text-muted)]">:</span> {profile.headline}
              </p>
              <p>
                <span className="text-[var(--green)]">Host</span>
                <span className="text-[var(--text-muted)]">:</span> {profile.location}
              </p>
              {profile.pronouns && (
                <p>
                  <span className="text-[var(--green)]">User</span>
                  <span className="text-[var(--text-muted)]">:</span> {profile.pronouns}
                </p>
              )}
              <p>
                <span className="text-[var(--green)]">Shell</span>
                <span className="text-[var(--text-muted)]">:</span> zsh 5.9
              </p>
              <p>
                <span className="text-[var(--green)]">Uptime</span>
                <span className="text-[var(--text-muted)]">:</span>{" "}
                {profile.education[0]?.period || "—"}
              </p>
              <p>
                <span className="text-[var(--green)]">Packages</span>
                <span className="text-[var(--text-muted)]">:</span>{" "}
                {profile.skills.reduce((a, g) => a + g.items.length, 0)} (brew)
              </p>
              <p>
                <span className="text-[var(--green)]">Projects</span>
                <span className="text-[var(--text-muted)]">:</span> {profile.projects.length} (
                {featuredProjects.length} featured)
              </p>
              <p className="pt-1">
                {[
                  "#ff5f57",
                  "#febc2e",
                  "#28c840",
                  "#3b82f6",
                  "#a78bfa",
                  "#f472b6",
                  "#22d3ee",
                  "#e7e5e4",
                ].map((c) => (
                  <span
                    key={c}
                    className="mr-0.5 inline-block h-3 w-3 rounded-sm"
                    style={{ backgroundColor: c }}
                  />
                ))}
              </p>
            </div>
          </div>
        </TermLine>

        <Divider />

        {/* ── man page: about ── */}
        <TermLine command={`man ${profile.name.split(" ")[0].toLowerCase()}`} delay={0.15}>
          <div className="mt-1 rounded border border-[var(--border)] bg-[var(--bg-card)] p-4">
            <p className="mb-3 text-xs tracking-widest text-[var(--text-heading)] uppercase">
              {profile.name.toUpperCase()}(1) &nbsp;&nbsp;&nbsp;&nbsp; User Manual
              &nbsp;&nbsp;&nbsp;&nbsp; {profile.name.toUpperCase()}(1)
            </p>
            <div className="space-y-3 text-xs leading-relaxed">
              <div>
                <p className="mb-0.5 font-bold text-[var(--text-heading)]">NAME</p>
                <p className="pl-6">
                  {profile.name} — {profile.headline}
                </p>
              </div>
              <div>
                <p className="mb-0.5 font-bold text-[var(--text-heading)]">SYNOPSIS</p>
                <p className="pl-6">
                  <span className="text-[var(--green)]">
                    {profile.name.split(" ")[0].toLowerCase()}
                  </span>{" "}
                  [--build | --research | --teach | --write]
                </p>
              </div>
              <div>
                <p className="mb-0.5 font-bold text-[var(--text-heading)]">DESCRIPTION</p>
                <p className="max-w-2xl pl-6">{profile.longBio || profile.shortBio}</p>
              </div>
              <div>
                <p className="mb-0.5 font-bold text-[var(--text-heading)]">OPTIONS</p>
                <div className="space-y-1.5 pl-6">
                  {profile.highlights.map((h) => (
                    <p key={h.label}>
                      <span className="text-[var(--yellow)]">
                        --{h.label.toLowerCase().replace(/\s/g, "-")}
                      </span>
                      <span className="text-[var(--text-muted)]">
                        {" ".repeat(Math.max(1, 18 - h.label.length))}
                      </span>
                      {h.description}
                    </p>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-0.5 font-bold text-[var(--text-heading)]">SEE ALSO</p>
                <p className="pl-6">
                  {socialLinks.map((l, i) => (
                    <span key={l.key}>
                      <a
                        href={l.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--blue)] hover:underline"
                      >
                        {l.key}(1)
                      </a>
                      {i < socialLinks.length - 1 && (
                        <span className="text-[var(--text-muted)]">, </span>
                      )}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </TermLine>

        <Divider />

        {/* ── Projects: ls + README ── */}
        <TermLine command="ls -la ~/projects/ --sort=featured" delay={0.25}>
          <div className="mt-1 overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="text-[var(--text-muted)]">
                  <td className="py-0.5 pr-3">permissions</td>
                  <td className="py-0.5 pr-3">size</td>
                  <td className="py-0.5 pr-3">modified</td>
                  <td className="py-0.5">name</td>
                </tr>
              </thead>
              <tbody>
                {profile.projects.map((p) => (
                  <tr key={p.slug}>
                    <td className="py-0.5 pr-3 text-[var(--text-muted)]">drwxr-xr-x</td>
                    <td className="py-0.5 pr-3 text-[var(--purple)]">{p.stack.length} deps</td>
                    <td className="py-0.5 pr-3 text-[var(--text-muted)]">
                      {p.period.split("—")[0].trim()}
                    </td>
                    <td className="py-0.5">
                      <span
                        className={
                          p.featured ? "font-bold text-[var(--blue)]" : "text-[var(--blue-muted)]"
                        }
                      >
                        {p.title.toLowerCase()}/
                      </span>
                      {p.featured && <span className="ml-2 text-[var(--yellow-muted)]">★</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TermLine>

        {featuredProjects.map((project, i) => (
          <TermLine
            key={project.slug}
            command={`cat ~/projects/${project.title.toLowerCase()}/README.md`}
            delay={0.32 + i * 0.06}
          >
            <div className="mt-1 rounded border border-[var(--border)] bg-[var(--bg-card)] p-4 transition-colors hover:border-[var(--border-accent)]">
              <div className="mb-1 flex items-start justify-between gap-4">
                <p className="text-sm font-bold text-[var(--text-heading)]">
                  <span className="mr-1 text-[var(--text-muted)]">#</span>
                  {project.title}
                </p>
                <div className="flex shrink-0 gap-2">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-[var(--blue)] hover:underline"
                    >
                      [{link.label}]
                    </a>
                  ))}
                </div>
              </div>
              <p className="mb-3 text-xs text-[var(--text-muted)]">
                {project.role} · {project.period}
              </p>
              <div className="mb-3 border-l-2 border-[var(--border-accent)] pl-3">
                <p className="text-xs leading-relaxed">{project.description}</p>
              </div>
              <div className="mb-3 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-[var(--border-badge)] bg-[var(--bg-inset)] px-1.5 py-0.5 font-mono text-[11px] text-[var(--yellow)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="space-y-1">
                {project.impact.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs">
                    <span className="shrink-0 text-[var(--green)]">[✓]</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </TermLine>
        ))}

        {otherProjects.length > 0 && (
          <TermLine command="find ~/projects/ -maxdepth 1 -not -name '*.featured'" delay={0.55}>
            <div className="mt-1 space-y-2">
              {otherProjects.map((project) => (
                <div
                  key={project.slug}
                  className="flex flex-col gap-1 text-xs sm:flex-row sm:items-baseline sm:gap-0"
                >
                  <span className="shrink-0 text-[var(--blue-muted)] sm:w-40">
                    ./{project.title.toLowerCase()}/
                  </span>
                  <span className="mx-2 hidden flex-1 border-b border-dotted border-[var(--border-badge)] text-[var(--text-dim)] sm:inline" />
                  <span className="truncate text-[var(--text-muted)]">
                    {project.description.slice(0, 80)}…
                  </span>
                </div>
              ))}
            </div>
          </TermLine>
        )}

        <Divider />

        {/* ── Experience: git log ── */}
        <TermLine command="git log --oneline --graph --all ~/.career/" delay={0.58}>
          <div className="mt-1 space-y-0.5">
            {profile.experience.map((exp, i) => {
              const hash = (0x1a2b3c + i * 0x4e5f6a).toString(16).slice(0, 7);
              const isFirst = i === 0;
              return (
                <div key={i}>
                  <p className="text-xs">
                    <span className="text-[var(--text-muted)]">{isFirst ? "* " : "│ "}</span>
                    <span className="text-[var(--yellow)]">{hash}</span>
                    <span className="font-medium text-[var(--text-heading)]"> {exp.title}</span>
                    <span className="text-[var(--text-muted)]"> @ {exp.org}</span>
                    {isFirst && <span className="ml-1 text-[var(--green)]">(HEAD)</span>}
                  </p>
                  <p className="pl-[14px] text-xs text-[var(--text-muted)]">{exp.period}</p>
                </div>
              );
            })}
          </div>
        </TermLine>

        {profile.experience.map((exp, i) => (
          <TermLine
            key={i}
            command={`git show --stat ${exp.org.toLowerCase().replace(/\s/g, "-")}`}
            delay={0.63 + i * 0.05}
          >
            <div className="mt-1 rounded border border-[var(--border)] bg-[var(--bg-card)] p-3">
              <p className="mb-0.5 text-xs">
                <span className="text-[var(--yellow)]">commit</span>
                <span className="text-[var(--text-muted)]"> {exp.title}</span>
              </p>
              <p className="mb-0.5 text-xs">
                <span className="text-[var(--yellow)]">Author:</span>
                <span>
                  {" "}
                  {profile.name} &lt;{profile.contact.email}&gt;
                </span>
              </p>
              <p className="mb-2 text-xs">
                <span className="text-[var(--yellow)]">Date:</span>
                <span className="text-[var(--text-muted)]"> {exp.period}</span>
              </p>
              <p className="mb-2 text-xs text-[var(--text-muted)]"> @ {exp.org}</p>
              <ul className="space-y-1">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs">
                    <span className="shrink-0 text-[var(--green-muted)]">+</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </TermLine>
        ))}

        <Divider />

        {/* ── Education: tree ── */}
        <TermLine command="tree ~/.education/" delay={0.78}>
          <div className="mt-1">
            <p className="text-xs text-[var(--blue)]">.education/</p>
            {profile.education.map((edu, i) => {
              const isLast = i === profile.education.length - 1;
              const prefix = isLast ? "└── " : "├── ";
              const childPrefix = isLast ? "    " : "│   ";
              return (
                <div key={i}>
                  <p className="text-xs">
                    <span className="text-[var(--text-muted)]">{prefix}</span>
                    <span className="text-[var(--blue)]">
                      {edu.school.replace(/University of /i, "").replace(/, .*/, "")}/
                    </span>
                  </p>
                  <p className="text-xs">
                    <span className="text-[var(--text-muted)]">{childPrefix}├── </span>
                    <span className="text-[var(--text-heading)]">{edu.degree}</span>
                    {edu.gpa && <span className="ml-2 text-[var(--green)]">[{edu.gpa}]</span>}
                  </p>
                  <p className="text-xs">
                    <span className="text-[var(--text-muted)]">{childPrefix}├── </span>
                    <span className="text-[var(--text-hover)]">{edu.period}</span>
                  </p>
                  {edu.details.map((d, j) => {
                    const dIsLast = j === edu.details.length - 1;
                    return (
                      <p key={j} className="text-xs">
                        <span className="text-[var(--text-muted)]">
                          {childPrefix}
                          {dIsLast ? "└── " : "├── "}
                        </span>
                        <span>{d}</span>
                      </p>
                    );
                  })}
                </div>
              );
            })}
            <p className="mt-1 text-xs text-[var(--text-muted)]">
              {profile.education.length} director{profile.education.length === 1 ? "y" : "ies"},{" "}
              {profile.education.reduce((a, e) => a + e.details.length + 2, 0)} files
            </p>
          </div>
        </TermLine>

        <Divider />

        {/* ── Skills: bar chart ── */}
        <TermLine command="./scripts/skills.sh --visualize" delay={0.83}>
          <div className="mt-2 space-y-4">
            {profile.skills.map((group) => (
              <div key={group.category}>
                <p className="mb-1.5 text-xs font-bold text-[var(--text-heading)]">
                  <span className="text-[var(--text-muted)]">## </span>
                  {group.category}
                </p>
                <div className="space-y-1 pl-1">
                  {group.items.map((item, j) => {
                    const level = Math.max(50, (skillLevels[group.category] || 75) - j * 5);
                    return <SkillBar key={item} label={item} level={level} />;
                  })}
                </div>
              </div>
            ))}
          </div>
        </TermLine>

        <Divider />

        {/* ── Awards: grep ── */}
        {profile.awards.length > 0 && (
          <TermLine command='grep -r "award\|honor\|recognition" ~/.achievements/' delay={0.88}>
            <div className="mt-1 space-y-1">
              {profile.awards.map((award, i) => (
                <p key={i} className="text-xs">
                  <span className="text-[var(--purple)]">.achievements/{award.year}/</span>
                  <span className="text-[var(--text-muted)]">:</span>
                  <span className="text-[var(--text-heading)]"> {award.title}</span>
                  <span className="text-[var(--text-muted)]"> — {award.org}</span>
                  {award.description && (
                    <span className="text-[var(--text-faint)]"> ({award.description})</span>
                  )}
                </p>
              ))}
            </div>
          </TermLine>
        )}

        {/* ── Now: crontab ── */}
        {profile.now && (
          <>
            <Divider />
            <TermLine command="crontab -l  # current activities" delay={0.91}>
              <div className="mt-1">
                <p className="mb-1.5 text-xs text-[var(--text-muted)]">
                  # Updated {profile.now.updated}
                </p>
                {profile.now.items.map((item, i) => (
                  <p key={i} className="text-xs">
                    <span className="text-[var(--text-muted)]">@daily </span>
                    <span>{item}</span>
                  </p>
                ))}
              </div>
            </TermLine>
          </>
        )}

        <Divider />

        {/* ── Contact: dotfile ── */}
        <TermLine command="cat ~/.dotfiles/contact.yml" delay={0.94}>
          <div className="mt-1 rounded border border-[var(--border)] bg-[var(--bg-card)] p-3">
            <p className="mb-2 text-xs text-[var(--text-muted)]"># How to reach me</p>
            <div className="space-y-1">
              <p className="text-xs">
                <span className="text-[var(--yellow)]">email</span>
                <span className="text-[var(--text-muted)]">: </span>
                <a
                  href={`mailto:${profile.contact.email}`}
                  className="text-[var(--blue)] hover:underline"
                >
                  {profile.contact.email}
                </a>
              </p>
              {socialLinks.map((link) => (
                <p key={link.key} className="text-xs">
                  <span className="text-[var(--yellow)]">{link.key}</span>
                  <span className="text-[var(--text-muted)]">: </span>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--blue)] hover:underline"
                  >
                    {link.url.replace(/^https?:\/\//, "")}
                  </a>
                </p>
              ))}
              <p className="text-xs">
                <span className="text-[var(--yellow)]">resume</span>
                <span className="text-[var(--text-muted)]">: </span>
                <a
                  href={profile.resumeFile}
                  download
                  className="text-[var(--green)] hover:underline"
                >
                  .{profile.resumeFile}
                </a>
              </p>
            </div>
          </div>
        </TermLine>

        <Cursor />
      </main>
      <Footer />
    </>
  );
}
