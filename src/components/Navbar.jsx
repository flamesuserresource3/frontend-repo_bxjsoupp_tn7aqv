import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] md:w-[86%] lg:w-[74%]`}
    >
      <div
        className={`flex items-center justify-between rounded-2xl border backdrop-blur-xl px-4 md:px-6 py-3 transition-all ${
          scrolled
            ? 'bg-black/60 border-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]'
            : 'bg-black/30 border-white/10'
        }`}
      >
        <a href="#home" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400 text-white shadow-lg">
            <Rocket size={18} />
          </span>
          <div className="leading-none">
            <div className="text-white font-semibold tracking-tight">Python Dev</div>
            <div className="text-xs text-white/60">Portfolio</div>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm text-white/80 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 rounded-xl bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90 transition-colors"
        >
          Hire Me
        </a>
      </div>
    </motion.nav>
  );
}
