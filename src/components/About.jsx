import { useState } from "react";
import SectionReveal from "./SectionReveal";
import Eyebrow from "./Eyebrow";
import { about, profile } from "../data/profile";

export default function About() {
  const [imgFailed, setImgFailed] = useState(false);
  const hasImage = Boolean(profile.profileImage) && !imgFailed;

  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionReveal>
          <Eyebrow index="01">About</Eyebrow>
        </SectionReveal>

        <div className="grid md:grid-cols-[280px_1fr] gap-10 md:gap-16 items-start mt-8">
          <SectionReveal delay={0.05}>
            <div
              className="relative aspect-[4/5] rounded-[var(--radius-card)] overflow-hidden border"
              style={{
                borderColor: "var(--color-line)",
                background:
                  "linear-gradient(150deg, var(--color-surface) 0%, var(--color-surface-2) 100%)",
              }}
            >
              {hasImage ? (
                <img
                  src={profile.profileImage}
                  alt={profile.name}
                  onError={() => setImgFailed(true)}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-mono text-6xl text-[var(--color-line)]">
                    AY
                  </span>
                </div>
              )}
              <div
                className="absolute bottom-0 left-0 right-0 h-16"
                style={{
                  background:
                    "linear-gradient(to top, var(--color-ink) 0%, transparent 100%)",
                  opacity: 0.6,
                }}
              />
              <span className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--color-gold)]">
                IIT Patna
              </span>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <h2 className="text-[clamp(1.8rem,3.2vw,2.6rem)] font-medium text-[var(--color-grey-100)] leading-tight text-balance">
              Building software with the same precision competitive
              programming demands.
            </h2>
            <p className="mt-6 text-[var(--color-grey-400)] leading-relaxed max-w-2xl">
              {about.bio}
            </p>

            <div
              className="mt-8 rounded-[var(--radius-card)] border overflow-hidden"
              style={{
                borderColor: "var(--color-line)",
                background: "var(--color-surface)",
              }}
            >
              {about.points.map((point, i) => (
                <div
                  key={point}
                  className="flex items-start gap-4 px-6 py-4"
                  style={{
                    borderTop:
                      i === 0 ? "none" : "1px solid var(--color-line-soft)",
                  }}
                >
                  <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[var(--color-moss)]" />
                  <span className="text-sm text-[var(--color-grey-300)] leading-relaxed">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}