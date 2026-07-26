import SectionReveal from "./SectionReveal";
import Eyebrow from "./Eyebrow";
import { education, timeline } from "../data/profile";

export default function EducationTimeline() {
  return (
    <section id="education" className="relative py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionReveal>
          <Eyebrow index="05">Education</Eyebrow>
        </SectionReveal>

        <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16 mt-8">
          <SectionReveal delay={0.05}>
            <div
              className="rounded-[var(--radius-card)] border p-8 sticky top-28"
              style={{
                borderColor: "var(--color-line)",
                background: "var(--color-surface)",
              }}
            >
              <h3 className="text-lg font-medium text-[var(--color-grey-100)] leading-snug">
                {education.institute}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-grey-400)]">
                {education.degree}
              </p>
              <div
                className="mt-6 pt-6 flex items-center justify-between"
                style={{ borderTop: "1px solid var(--color-line-soft)" }}
              >
                <span className="font-mono text-xs text-[var(--color-grey-500)]">
                  {education.duration}
                </span>
                <span className="font-mono text-sm text-[var(--color-gold-bright)]">
                  CPI {education.cpi}
                </span>
              </div>
            </div>
          </SectionReveal>

          <div className="relative pl-8">
            <div
              className="absolute left-[7px] top-2 bottom-2 w-px"
              style={{ background: "var(--color-line)" }}
            />
            <div className="space-y-10">
              {timeline.map((entry, i) => (
                <SectionReveal key={entry.title} delay={0.08 * i}>
                  <div className="relative">
                    <span
                      className="absolute -left-8 top-1.5 w-3.5 h-3.5 rounded-full border-2"
                      style={{
                        borderColor: "var(--color-moss)",
                        background: "var(--color-ink)",
                      }}
                    />
                    <span className="font-mono text-xs tracking-widest text-[var(--color-gold)]">
                      {entry.year}
                    </span>
                    <h4 className="mt-1 text-base font-medium text-[var(--color-grey-100)]">
                      {entry.title}
                    </h4>
                    <p className="mt-1.5 text-sm text-[var(--color-grey-500)] leading-relaxed max-w-md">
                      {entry.description}
                    </p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
