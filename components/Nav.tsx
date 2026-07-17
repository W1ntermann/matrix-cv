'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '@/contexts/LangContext';
import Logo from '@/components/Logo';

const SECTION_IDS = ['home', 'about', 'skills', 'projects', 'contact'];

export default function Nav() {
  const { t, toggleLang } = useLang();
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  /* ── Scroll spy ─────────────────────────────────────────── */
  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTION_IDS[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(SECTION_IDS[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Lock body scroll when menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#050705]/85 backdrop-blur-md border-b border-[#39ff6a]/20">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => scrollTo('home')}
            className="flex items-center select-none flex-shrink-0"
          >
            <Logo height={42} />
          </motion.button>

          {/* ── Desktop nav (lg+) ─────────────────────────── */}
          <nav className="hidden lg:flex items-center gap-8">
            {t.nav.map((label, i) => (
              <motion.button
                key={SECTION_IDS[i]}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => scrollTo(SECTION_IDS[i])}
                className={`text-sm tracking-wider transition-colors duration-300 relative py-2 font-mono ${
                  activeSection === SECTION_IDS[i]
                    ? 'text-[#39ff6a]'
                    : 'text-gray-400 hover:text-[#39ff6a]'
                }`}
              >
                {label}
                {activeSection === SECTION_IDS[i] && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#39ff6a]"
                    style={{ boxShadow: '0 0 8px #39ff6a' }}
                  />
                )}
              </motion.button>
            ))}

            {/* Language toggle */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              onClick={toggleLang}
              className="border border-[#39ff6a]/50 text-[#39ff6a] text-xs px-3 py-1.5 font-bold font-mono tracking-widest hover:bg-[#39ff6a]/10 hover:border-[#39ff6a] transition-all duration-200 hover:shadow-[0_0_8px_rgba(57,255,106,0.3)]"
            >
              {t.lang}
            </motion.button>
          </nav>

          {/* ── Mobile / tablet right side (below lg) ───────── */}
          <div className="lg:hidden flex items-center gap-3">
            {/* Language toggle */}
            <button
              onClick={toggleLang}
              className="border border-[#39ff6a]/50 text-[#39ff6a] text-xs px-2.5 py-1 font-bold font-mono tracking-widest hover:bg-[#39ff6a]/10 transition-all"
            >
              {t.lang}
            </button>

            {/* Hamburger button */}
            <button
              onClick={() => setMenuOpen(o => !o)}
              className="w-9 h-9 flex flex-col items-center justify-center gap-[5px] group"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={menuOpen
                  ? { rotate: 45, y: 7, backgroundColor: '#39ff6a' }
                  : { rotate: 0, y: 0, backgroundColor: '#39ff6a' }
                }
                transition={{ duration: 0.25 }}
                className="block w-6 h-0.5 bg-[#39ff6a] origin-center"
                style={{ boxShadow: '0 0 4px #39ff6a' }}
              />
              <motion.span
                animate={menuOpen
                  ? { opacity: 0, scaleX: 0 }
                  : { opacity: 1, scaleX: 1 }
                }
                transition={{ duration: 0.2 }}
                className="block w-6 h-0.5 bg-[#39ff6a]"
                style={{ boxShadow: '0 0 4px #39ff6a' }}
              />
              <motion.span
                animate={menuOpen
                  ? { rotate: -45, y: -7, backgroundColor: '#39ff6a' }
                  : { rotate: 0, y: 0, backgroundColor: '#39ff6a' }
                }
                transition={{ duration: 0.25 }}
                className="block w-6 h-0.5 bg-[#39ff6a] origin-center"
                style={{ boxShadow: '0 0 4px #39ff6a' }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile fullscreen overlay ────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-[#050705]/60 backdrop-blur-sm lg:hidden"
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: [0.25, 0, 0.25, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-[#050705] border-l border-[#39ff6a]/25 flex flex-col lg:hidden"
              style={{ boxShadow: '-8px 0 40px rgba(57,255,106,0.08)' }}
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 h-16 border-b border-[#39ff6a]/15">
                <div className="flex items-center gap-3">
                  <Logo height={32} />
                  <span className="text-[#39ff6a] font-mono text-sm font-bold glow-text-sm">
                    Bohdan.dev
                  </span>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-500 hover:text-[#39ff6a] transition-colors font-mono text-lg leading-none"
                  aria-label="Close menu"
                >
                  ×
                </button>
              </div>

              {/* Scanline accent */}
              <div
                className="h-px w-full"
                style={{ background: 'linear-gradient(to right, transparent, #39ff6a55, transparent)' }}
              />

              {/* Nav items */}
              <nav className="flex flex-col px-6 pt-8 gap-1 flex-1">
                {t.nav.map((label, i) => (
                  <motion.button
                    key={SECTION_IDS[i]}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.07, duration: 0.3 }}
                    onClick={() => scrollTo(SECTION_IDS[i])}
                    className={`group flex items-center gap-4 py-4 text-left border-b border-[#39ff6a]/8 last:border-0 transition-colors duration-200 ${
                      activeSection === SECTION_IDS[i]
                        ? 'text-[#39ff6a]'
                        : 'text-gray-400 hover:text-[#39ff6a]'
                    }`}
                  >
                    {/* Active indicator line */}
                    <span
                      className="w-1 h-6 flex-shrink-0 transition-all duration-300"
                      style={
                        activeSection === SECTION_IDS[i]
                          ? { background: '#39ff6a', boxShadow: '0 0 8px #39ff6a' }
                          : { background: 'transparent' }
                      }
                    />
                    <span className="font-mono text-base tracking-widest">{label}</span>

                    {/* Arrow on hover */}
                    <span className="ml-auto text-[#39ff6a]/0 group-hover:text-[#39ff6a]/60 transition-colors duration-200 font-mono text-xs">
                      →
                    </span>
                  </motion.button>
                ))}
              </nav>

              {/* Footer */}
              <div className="px-6 pb-8">
                <div
                  className="h-px w-full mb-6"
                  style={{ background: 'linear-gradient(to right, transparent, #39ff6a30, transparent)' }}
                />
                <p className="text-gray-700 text-[10px] font-mono text-center">
                  SYSTEM_ONLINE :: v2.0.26
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
