import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import Eyebrow from "./Eyebrow";
import { cpStats, achievements, profile } from "../data/profile";
import { useCodeforcesStats } from "../hooks/useCodeforcesStats";
import { SiCodeforces, SiLeetcode, SiCodechef } from "./Icons";

const iconMap = {
  codeforces: SiCodeforces,
  leetcode: SiLeetcode,
  codechef: SiCodechef,
};

function titleCase(str) {
  if (!str) return "";
  return str
    .split(/[\s_]+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export default function CompetitiveProgramming() {
  const { data: cf, status: cfStatus } = useCodeforcesStats(
    profile.codeforcesHandle
  );

  return (
    <section
      id="competitive-programming"
      className="relative py-28 md:py-36"
      style={{ background: "var(--color-charcoal)" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionReveal>
          <Eyebrow index="02">Competitive Programming</Eyebrow>
        </SectionReveal>

        <SectionReveal delay={0.05}>
          <h2 className="text-[clamp(1.8rem,3.2vw,2.6rem)] font-medium text-[var(--color-grey-100)] mt-4 mb-12 text-balance">
            Ratings earned one contest at a time.
          </h2>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cpStats.map(({ platform, handle, rating, label, icon }, i) => {
            const Icon = iconMap[icon];
            const isCodeforces = icon === "codeforces";

            // For Codeforces, prefer live API data; fall back to static
            // profile.js values if the request hasn't resolved or fails.
            let displayRating = rating;
            let displayHandle = handle;
            let displayLabel = label;
            let peakRating = null;
            let isLive = false;

            if (isCodeforces && cfStatus === "success" && cf) {
              displayRating = cf.rating ?? cf.maxRating ?? rating;
              displayHandle = titleCase(cf.rank || cf.maxRank) || handle;
              displayLabel = cf.rating ? "Current Rating" : "Peak Rating";
              if (cf.maxRating && cf.rating && cf.rating !== cf.maxRating) {
                peakRating = cf.maxRating;
              }
              isLive = true;
            }

            const isLoading = isCodeforces && cfStatus === "loading";

            return (
              <SectionReveal key={platform} delay={0.08 * i}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="group relative rounded-[var(--radius-card)] border p-7 h-full overflow-hidden"
                  style={{
                    borderColor: "var(--color-line)",
                    background:
                      "linear-gradient(160deg, color-mix(in srgb, var(--color-surface) 92%, transparent) 0%, color-mix(in srgb, var(--color-surface-2) 85%, transparent) 100%)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 0%, color-mix(in srgb, var(--color-moss) 14%, transparent) 0%, transparent 60%)",
                    }}
                  />
                  <div className="relative flex items-center justify-between mb-8">
                    <Icon
                      size={22}
                      className="text-[var(--color-grey-500)] group-hover:text-[var(--color-moss-bright)] transition-colors"
                    />
                    <div className="flex items-center gap-2">
                      {isLive && (
                        <span
                          className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-moss-bright)]"
                          title={`Synced live from codeforces.com/profile/${profile.codeforcesHandle}`}
                        >
                          <motion.span
                            className="w-1.5 h-1.5 rounded-full bg-[var(--color-moss-bright)]"
                            animate={{ opacity: [1, 0.35, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          Live
                        </span>
                      )}
                      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-grey-500)]">
                        {displayHandle}
                      </span>
                    </div>
                  </div>
                  <div className="relative">
                    {isLoading ? (
                      <div
                        className="h-[2.6rem] w-28 rounded-md animate-pulse"
                        style={{ background: "var(--color-line-soft)" }}
                      />
                    ) : (
                      <div className="flex items-baseline gap-3">
                        <div className="font-mono font-tabular text-[clamp(2.4rem,4vw,3rem)] leading-none text-[var(--color-gold-bright)]">
                          {displayRating}
                        </div>
                        {peakRating && (
                          <div className="font-mono font-tabular text-sm text-[var(--color-moss-bright)]">
                            peak {peakRating}
                          </div>
                        )}
                      </div>
                    )}
                    <div className="mt-3 flex items-center gap-2 text-sm text-[var(--color-grey-400)]">
                      <span>{platform}</span>
                      <span className="text-[var(--color-line)]">/</span>
                      <span>{displayLabel}</span>
                    </div>
                  </div>
                </motion.div>
              </SectionReveal>
            );
          })}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
          {achievements.map((a, i) => (
            <SectionReveal key={a.label} delay={0.05 * i}>
              <div
                className="rounded-[var(--radius-card)] border px-6 py-6 h-full"
                style={{
                  borderColor: "var(--color-line)",
                  background: "var(--color-surface)",
                }}
              >
                <div className="font-mono font-tabular text-2xl text-[var(--color-moss-bright)]">
                  {a.value}
                </div>
                <div className="mt-2 text-xs text-[var(--color-grey-500)] leading-relaxed">
                  {a.label}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}