import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* base grid, evokes graph paper / problem-set grids */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-grey-500) 1px, transparent 1px), linear-gradient(90deg, var(--color-grey-500) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* soft moss gradient blob */}
      <motion.div
        className="absolute rounded-full blur-3xl"
        style={{
          width: 520,
          height: 520,
          left: "-8%",
          top: "-10%",
          background:
            "radial-gradient(circle, var(--color-moss-dim) 0%, transparent 70%)",
          opacity: 0.22,
        }}
        animate={{
          x: [0, 30, -10, 0],
          y: [0, 20, -20, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* soft gold gradient blob */}
      <motion.div
        className="absolute rounded-full blur-3xl"
        style={{
          width: 420,
          height: 420,
          right: "-6%",
          top: "10%",
          background:
            "radial-gradient(circle, var(--color-gold-dim) 0%, transparent 70%)",
          opacity: 0.14,
        }}
        animate={{
          x: [0, -20, 15, 0],
          y: [0, 25, -10, 0],
        }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* grey ambient wash */}
      <motion.div
        className="absolute rounded-full blur-3xl"
        style={{
          width: 600,
          height: 600,
          left: "30%",
          bottom: "-25%",
          background:
            "radial-gradient(circle, var(--color-grey-600) 0%, transparent 70%)",
          opacity: 0.12,
        }}
        animate={{
          x: [0, -15, 20, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* floating minimal markers - reference rating brackets, kept extremely subtle */}
      {[
        { top: "18%", left: "12%", label: "1470" },
        { top: "68%", left: "82%", label: "1886" },
        { top: "78%", left: "18%", label: "1624" },
      ].map((m, i) => (
        <motion.span
          key={m.label}
          className="absolute font-mono text-[11px] tracking-widest text-[var(--color-grey-600)]"
          style={{ top: m.top, left: m.left }}
          animate={{ opacity: [0.15, 0.4, 0.15], y: [0, -8, 0] }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.5,
          }}
        >
          {m.label}
        </motion.span>
      ))}

      {/* vignette to keep content legible */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, transparent 40%, var(--color-ink) 92%)",
        }}
      />
    </div>
  );
}
