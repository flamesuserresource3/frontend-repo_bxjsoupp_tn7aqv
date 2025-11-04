import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden">
      {/* Background gradient accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-600/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex w-[92%] md:w-[86%] lg:w-[74%] flex-col-reverse lg:flex-row items-center gap-10 pt-28 pb-14 lg:pt-36">
        {/* Copy */}
        <div className="w-full lg:w-1/2">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
          >
            Hi, I’m <span className="bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent">a Python Developer</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-4 text-lg md:text-xl text-white/70 max-w-xl"
          >
            I craft scalable APIs, data pipelines, and machine learning systems. Passionate about clean code, performance, and delightful developer experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center rounded-xl bg-white text-black px-5 py-3 font-medium shadow-lg shadow-white/10 hover:scale-[1.02] active:scale-[0.99] transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-xl border border-white/20 px-5 py-3 text-white hover:bg-white/10 transition"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-8 flex items-center gap-3"
          >
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 text-white hover:bg-white/10 transition"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 text-white hover:bg-white/10 transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:you@example.com"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 text-white hover:bg-white/10 transition"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </div>

        {/* 3D Model */}
        <div className="relative w-full lg:w-1/2">
          <div className="relative h-[360px] sm:h-[420px] md:h-[520px] lg:h-[620px] w-full rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-transparent">
            <Spline
              scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />

            {/* Subtle glass gradient overlay to blend with theme */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
