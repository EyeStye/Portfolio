import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "../data/profile";
import { useActiveSection } from "../hooks/useActiveSection";
import { scrollToSection } from "../utils/scrollTo";
import { FiMenu, FiX, FiSun, FiMoon } from "./Icons";

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const ids = navLinks.map((l) => l.href.replace("#", ""));
  const active = useActiveSection(ids);

  const handleClick = (href) => {
    setOpen(false);
    scrollToSection(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className="absolute inset-0 backdrop-blur-md"
        style={{
          background:
            "linear-gradient(to bottom, color-mix(in srgb, var(--color-ink) 82%, transparent), transparent)",
        }}
      />
      <nav className="relative max-w-6xl mx-auto flex items-center justify-between px-6 md:px-10 py-5">
        <button
          onClick={() => handleClick("#home")}
          className="font-mono text-sm tracking-[0.15em] text-[var(--color-grey-100)] hover:text-[var(--color-moss-bright)] transition-colors"
        >
          AY<span className="text-[var(--color-gold)]">.</span>
        </button>

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = active === id;
            return (
              <li key={link.href}>
                <button
                  onClick={() => handleClick(link.href)}
                  className={`relative px-4 py-2 text-[13px] tracking-wide transition-colors rounded-full ${
                    isActive
                      ? "text-[var(--color-grey-100)]"
                      : "text-[var(--color-grey-400)] hover:text-[var(--color-grey-100)]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: "var(--color-surface-2)",
                        border: "1px solid var(--color-line)",
                      }}
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full border border-[var(--color-line)] text-[var(--color-grey-400)] hover:text-[var(--color-moss-bright)] hover:border-[var(--color-moss-dim)] transition-colors"
          >
            {theme === "dark" ? <FiSun size={15} /> : <FiMoon size={15} />}
          </button>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden flex items-center justify-center w-9 h-9 rounded-full border border-[var(--color-line)] text-[var(--color-grey-300)]"
          >
            {open ? <FiX size={16} /> : <FiMenu size={16} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden relative overflow-hidden"
            style={{
              background: "var(--color-surface)",
              borderBottom: "1px solid var(--color-line)",
            }}
          >
            <ul className="flex flex-col px-6 py-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className="w-full text-left py-3 text-sm text-[var(--color-grey-300)] hover:text-[var(--color-moss-bright)] transition-colors border-b border-[var(--color-line-soft)] last:border-none"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
