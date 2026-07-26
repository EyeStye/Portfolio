import { useState } from "react";
import emailjs from "@emailjs/browser";
import SectionReveal from "./SectionReveal";
import Eyebrow from "./Eyebrow";
import { profile } from "../data/profile";
import { FiGithub, FiLinkedin, FiMail, SiCodeforces, SiLeetcode } from "./Icons";

// Replace with your own EmailJS credentials: https://www.emailjs.com/
const EMAILJS_SERVICE_ID = "service_l4k9lxp";
const EMAILJS_TEMPLATE_ID = "template_p8qkkwr";
const EMAILJS_PUBLIC_KEY = "lDvC0kyMCk2FKUwpj";

const contactLinks = [
  { href: profile.socials.email, label: profile.email, icon: FiMail },
  { href: profile.socials.github, label: "GitHub", icon: FiGithub },
  { href: profile.socials.linkedin, label: "LinkedIn", icon: FiLinkedin },
  { href: profile.socials.codeforces, label: "Codeforces", icon: SiCodeforces },
  { href: profile.socials.leetcode, label: "LeetCode", icon: SiLeetcode },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      if (EMAILJS_SERVICE_ID.startsWith("YOUR_")) {
        // EmailJS not configured yet — simulate success so the UI stays functional in preview.
        await new Promise((r) => setTimeout(r, 700));
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
        return;
      }
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-28 md:py-36"
      style={{ background: "var(--color-charcoal)" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionReveal>
          <Eyebrow index="06">Contact</Eyebrow>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 mt-8">
          <SectionReveal delay={0.05}>
            <h2 className="text-[clamp(1.8rem,3.2vw,2.6rem)] font-medium text-[var(--color-grey-100)] leading-tight text-balance">
              Open to internship conversations and interesting problems.
            </h2>
            <p className="mt-5 text-[var(--color-grey-400)] leading-relaxed max-w-md">
              The fastest way to reach me is email. I typically reply within
              a day or two.
            </p>

            <div className="mt-10 space-y-1">
              {contactLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={label.includes("@") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="flex items-center gap-3 py-3 text-sm text-[var(--color-grey-300)] hover:text-[var(--color-moss-bright)] transition-colors"
                  style={{ borderBottom: "1px solid var(--color-line-soft)" }}
                >
                  <Icon size={16} className="text-[var(--color-grey-500)]" />
                  {label}
                </a>
              ))}
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-[var(--radius-card)] border p-7 md:p-8"
              style={{
                borderColor: "var(--color-line)",
                background: "var(--color-surface)",
              }}
            >
              <div className="space-y-5">
                <Field
                  label="Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <div>
                  <label className="block text-xs font-mono uppercase tracking-[0.15em] text-[var(--color-grey-500)] mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    className="w-full rounded-lg px-4 py-3 text-sm bg-transparent border resize-none outline-none transition-colors focus:border-[var(--color-moss)]"
                    style={{
                      borderColor: "var(--color-line)",
                      color: "var(--color-grey-100)",
                    }}
                    placeholder="Tell me a bit about the opportunity or idea..."
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-[var(--color-ink)] transition-opacity disabled:opacity-60"
                style={{ background: "var(--color-moss)" }}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "sent" && (
                <p className="mt-4 text-sm text-[var(--color-moss-bright)]">
                  Message sent — thank you. I'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="mt-4 text-sm text-[var(--color-gold-bright)]">
                  Something went wrong. Please email me directly instead.
                </p>
              )}
            </form>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", value, onChange, required }) {
  return (
    <div>
      <label className="block text-xs font-mono uppercase tracking-[0.15em] text-[var(--color-grey-500)] mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full rounded-lg px-4 py-3 text-sm bg-transparent border outline-none transition-colors focus:border-[var(--color-moss)]"
        style={{ borderColor: "var(--color-line)", color: "var(--color-grey-100)" }}
      />
    </div>
  );
}
