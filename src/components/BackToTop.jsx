import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUp } from "./Icons";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.25 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-7 right-6 md:right-10 z-50 w-11 h-11 rounded-full flex items-center justify-center border border-[var(--color-line)] text-[var(--color-grey-300)] hover:text-[var(--color-moss-bright)] hover:border-[var(--color-moss-dim)] transition-colors"
          style={{
            background: "var(--color-surface)",
            backdropFilter: "blur(6px)",
          }}
        >
          <FiArrowUp size={16} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
