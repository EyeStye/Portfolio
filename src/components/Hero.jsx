import { motion } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";
import { profile } from "../data/profile";
import { scrollToSection } from "../utils/scrollTo";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUpRight,
  SiCodeforces,
  SiLeetcode,
} from "./Icons";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const socialLinks = [
  { href: profile.socials.github, label: "GitHub", icon: FiGithub },
  { href: profile.socials.linkedin, label: "LinkedIn", icon: FiLinkedin },
  { href: profile.socials.codeforces, label: "Codeforces", icon: SiCodeforces },
  { href: profile.socials.leetcode, label: "LeetCode", icon: SiLeetcode },
  { href: profile.socials.email, label: "Email", icon: FiMail },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-20"
    >
      <AnimatedBackground />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 w-full"
      >
        <motion.p
          variants={item}
          className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-gold)] mb-6"
        >
          Available for Summer 2027 internships
        </motion.p>

        <motion.h1
          variants={item}
          className="text-balance font-medium leading-[1.02] text-[clamp(2.6rem,7vw,5.4rem)] text-[var(--color-grey-100)]"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-[clamp(1.05rem,2vw,1.35rem)] text-[var(--color-grey-300)] leading-relaxed"
        >
          {profile.role}
        </motion.p>

        <motion.p
          variants={item}
          className="mt-2 font-mono text-sm tracking-wide text-[var(--color-moss-bright)]"
        >
          {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <button
            onClick={() => scrollToSection("#projects")}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-[var(--color-ink)] transition-transform hover:-translate-y-0.5"
            style={{ background: "var(--color-moss)" }}
          >
            View Projects
            <FiArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border transition-colors hover:border-[var(--color-gold)] hover:text-[var(--color-gold-bright)]"
            style={{
              borderColor: "var(--color-line)",
              color: "var(--color-grey-300)",
            }}
          >
            Download Resume
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-14 flex flex-wrap items-center gap-5"
        >
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={label}
              className="flex items-center gap-2 text-[var(--color-grey-500)] hover:text-[var(--color-moss-bright)] transition-colors text-sm"
            >
              <Icon size={17} />
              <span className="hidden sm:inline">{label}</span>
            </a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--color-grey-600)]"
      >
        <span className="font-mono text-[10px] tracking-[0.25em] uppercase">
          Scroll
        </span>
        <motion.span
          className="w-px h-8"
          style={{ background: "var(--color-line)" }}
          animate={{ scaleY: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
