import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import Eyebrow from "./Eyebrow";
import { projects } from "../data/profile";
import { FiGithub, FiArrowUpRight, FiCode } from "./Icons";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-28 md:py-36"
      style={{ background: "var(--color-charcoal)" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionReveal>
          <Eyebrow index="04">Projects</Eyebrow>
        </SectionReveal>

        <SectionReveal delay={0.05}>
          <h2 className="text-[clamp(1.8rem,3.2vw,2.6rem)] font-medium text-[var(--color-grey-100)] mt-4 mb-12 text-balance">
            Systems-level work, built from first principles.
          </h2>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const isPlaceholder = project.status === "placeholder";
            return (
              <SectionReveal key={project.title} delay={0.08 * i}>
                <motion.div
                  whileHover={!isPlaceholder ? { y: -6 } : {}}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="relative rounded-[var(--radius-card)] border h-full flex flex-col"
                  style={{
                    borderColor: isPlaceholder
                      ? "var(--color-line-soft)"
                      : "var(--color-line)",
                    background: isPlaceholder
                      ? "transparent"
                      : "var(--color-surface)",
                    borderStyle: isPlaceholder ? "dashed" : "solid",
                  }}
                >
                  {isPlaceholder ? (
                    <div className="flex flex-col items-center justify-center flex-1 py-20 px-8 text-center">
                      <FiCode size={26} className="text-[var(--color-line)] mb-4" />
                      <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-grey-600)]">
                        Coming Soon
                      </p>
                      <p className="mt-3 text-sm text-[var(--color-grey-600)] max-w-xs">
                        {project.description}
                      </p>
                    </div>
                  ) : (
                    <div className="p-8 flex flex-col h-full">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <h3 className="text-lg font-medium text-[var(--color-grey-100)]">
                          {project.title}
                        </h3>
                        <span
                          className="flex-shrink-0 font-mono text-[11px] px-2.5 py-1 rounded-full border"
                          style={{
                            borderColor: "var(--color-line)",
                            color: "var(--color-moss-bright)",
                          }}
                        >
                          {project.tech}
                        </span>
                      </div>

                      <p className="text-sm text-[var(--color-grey-400)] leading-relaxed mb-6">
                        {project.description}
                      </p>

                      <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mb-8">
                        {project.features.map((f) => (
                          <li
                            key={f}
                            className="flex items-start gap-2 text-xs text-[var(--color-grey-500)]"
                          >
                            <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0 bg-[var(--color-gold)]" />
                            {f}
                          </li>
                        ))}
                      </ul>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-[var(--color-grey-200,var(--color-grey-100))] hover:text-[var(--color-moss-bright)] transition-colors w-fit"
                      >
                        <FiGithub size={16} />
                        GitHub Repository
                        <FiArrowUpRight size={14} />
                      </a>
                    </div>
                  )}
                </motion.div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
