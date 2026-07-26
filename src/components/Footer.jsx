import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer
      className="relative py-10"
      style={{ borderTop: "1px solid var(--color-line)" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-[var(--color-grey-600)]">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-xs text-[var(--color-grey-600)]">
          Built with React · Vite · Tailwind · Framer Motion
        </p>
      </div>
    </footer>
  );
}
