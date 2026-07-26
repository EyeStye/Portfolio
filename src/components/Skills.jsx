import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import Eyebrow from "./Eyebrow";
import { skills } from "../data/profile";

const categoryMeta = {
  Languages: { code: "LANG" },
  "Frameworks & Technologies": { code: "STACK" },
  "Tools & Platforms": { code: "OPS" },
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionReveal>
          <Eyebrow index="03">Skills</Eyebrow>
        </SectionReveal>

        <SectionReveal delay={0.05}>
          <h2 className="text-[clamp(1.8rem,3.2vw,2.6rem)] font-medium text-[var(--color-grey-100)] mt-4 mb-12 text-balance">
            A toolkit built for both contests and production.
          </h2>
        </SectionReveal>

        <div className="grid md:grid-cols-3 gap-5">
          {Object.entries(skills).map(([category, list], colIdx) => (
            <SectionReveal key={category} delay={0.08 * colIdx}>
              <div
                className="rounded-[var(--radius-card)] border p-7 h-full"
                style={{
                  borderColor: "var(--color-line)",
                  background: "var(--color-surface)",
                }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm font-medium text-[var(--color-grey-200,var(--color-grey-100))]">
                    {category}
                  </h3>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-[var(--color-gold)]">
                    {categoryMeta[category]?.code}
                  </span>
                </div>

                <ul className="space-y-4">
                  {list.map((skill, i) => (
                    <li key={skill}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm text-[var(--color-grey-300)]">
                          {skill}
                        </span>
                      </div>
                      <div
                        className="h-[3px] rounded-full overflow-hidden"
                        style={{ background: "var(--color-line-soft)" }}
                      >
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true, margin: "-40px" }}
                          transition={{
                            duration: 1,
                            delay: 0.1 + i * 0.06,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          style={{
                            transformOrigin: "left",
                            height: "100%",
                            width: `${85 - i * 4}%`,
                            background:
                              "linear-gradient(90deg, var(--color-moss-dim), var(--color-moss-bright))",
                          }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
