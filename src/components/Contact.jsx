import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(String(data.get('subject') || 'Let\'s work together'));
    const body = encodeURIComponent(String(data.get('message') || 'Hi! I\'d love to discuss a project.'));
    window.location.href = `mailto:you@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-[92%] md:w-[86%] lg:w-[74%]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          Let’s build something great
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-2 text-white/70 max-w-2xl"
        >
          I’m available for freelance work, consulting, and full‑time opportunities.
        </motion.p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
          >
            <div className="grid gap-4">
              <input
                name="subject"
                placeholder="Subject"
                className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
              />
              <textarea
                name="message"
                placeholder="Your message"
                rows={5}
                className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
              />
            </div>
            <div className="mt-4 flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center rounded-xl bg-white text-black px-5 py-3 font-medium hover:bg-white/90 transition"
              >
                Send Email
              </button>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-4"
          >
            <a
              href="mailto:you@example.com"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-white backdrop-blur-xl hover:bg-white/10 transition"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-black"><Mail size={18} /></span>
              <div>
                <div className="font-semibold">Email</div>
                <div className="text-white/70 text-sm">you@example.com</div>
              </div>
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-white backdrop-blur-xl hover:bg-white/10 transition"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-black"><Github size={18} /></span>
              <div>
                <div className="font-semibold">GitHub</div>
                <div className="text-white/70 text-sm">github.com/yourhandle</div>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-white backdrop-blur-xl hover:bg-white/10 transition"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-black"><Linkedin size={18} /></span>
              <div>
                <div className="font-semibold">LinkedIn</div>
                <div className="text-white/70 text-sm">linkedin.com/in/yourhandle</div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
