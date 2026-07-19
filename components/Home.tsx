'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useState, useRef, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import {
  FaReact, FaGithub, FaTelegramPlane, FaInstagram, FaEnvelope,
} from 'react-icons/fa';
import {
  SiDotnet, SiTypescript, SiMongodb, SiPostgresql, SiTailwindcss, SiNextdotjs,
} from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';
import { useLang } from '@/contexts/LangContext';

const photoSrc = '/0_MatrixMe_1784277774437.jpg';

/* ── Typewriter ─────────────────────────────────────────── */
const useTypewriter = (texts: readonly string[], delay = 3000) => {
  const [index, setIndex] = useState(0);
  const [current, setCurrent] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = texts[index];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && current === full) {
      timeout = setTimeout(() => setDeleting(true), delay);
    } else if (deleting && current === '') {
      setDeleting(false);
      setIndex(i => (i + 1) % texts.length);
    } else {
      timeout = setTimeout(
        () => setCurrent(full.substring(0, current.length + (deleting ? -1 : 1))),
        deleting ? 40 : 80,
      );
    }
    return () => clearTimeout(timeout);
  }, [current, deleting, index, texts, delay]);

  return current;
};

/* ── Skill Bar ──────────────────────────────────────────── */
const SkillBar = ({ icon: Icon, name, progress, delay }: {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  progress: number;
  delay: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  return (
    <div ref={ref} className="glow-border bg-card p-5 flex flex-col gap-4 group cursor-default">
      <div className="flex items-center gap-3">
        <Icon className="text-2xl text-gray-400 group-hover:text-primary transition-colors" />
        <span className="text-white text-sm font-bold tracking-wide">{name}</span>
        <span className="ml-auto text-xs text-primary/60">{progress}%</span>
      </div>
      <div className="h-1.5 w-full bg-[#050705] relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 h-full bg-primary"
          style={{ boxShadow: '0 0 6px #39ff6a' }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${progress}%` } : { width: 0 }}
          transition={{ duration: 1.1, delay: delay * 0.08, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
};

/* ── Project Card ───────────────────────────────────────── */
const ProjectCard = ({
  title, desc, tags, view, github, index: i,
}: {
  title: string; desc: string; tags: readonly string[];
  view: string; github: string; index: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.5, delay: (i % 3) * 0.12, ease: 'easeOut' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="terminal-card border border-primary/20 hover:border-primary/80 transition-all duration-300 flex flex-col h-full group"
      style={{
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered ? '0 0 24px rgba(57,255,106,0.15), 0 12px 30px rgba(0,0,0,0.4)' : 'none',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
      }}
    >
      {/* Thumbnail */}
      <div className="h-40 border-b border-primary/20 bg-[#050705] relative overflow-hidden flex items-center justify-center p-4">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(57,255,106,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(57,255,106,0.1)_1px,transparent_1px)] bg-[size:10px_10px]" />
        {/* Animated scan line on hover */}
        {hovered && (
          <motion.div
            className="absolute left-0 right-0 h-px bg-primary/50"
            initial={{ top: 0 }}
            animate={{ top: '100%' }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
          />
        )}
        <span className="text-gray-600 font-mono text-xs z-10 text-center leading-relaxed">
          {'<'} {title.toLowerCase()} {'/>'}
          <br /><br />
          01001011 01100101 01111001
        </span>
        {/* Number label */}
        <span className="absolute top-2 right-3 text-primary/30 text-xs font-mono">
          {String(i + 1).padStart(2, '0')}
        </span>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-white font-bold text-xl mb-3 group-hover:text-primary transition-colors tracking-wide">
          {title}
        </h3>
        <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">{desc}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map(tag => (
            <span
              key={tag}
              className="text-xs text-primary border border-primary/30 px-2 py-1 rounded-full bg-primary/5 font-mono"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-auto">
          <button className="text-xs text-white border border-gray-600 hover:border-primary hover:text-primary px-3 py-1.5 transition-colors font-mono">
            {view}
          </button>
          <button className="text-xs text-white border border-gray-600 hover:border-primary hover:text-primary px-3 py-1.5 transition-colors font-mono flex items-center gap-1.5">
            <FaGithub className="text-sm" />{github}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

/* ── Main Page ──────────────────────────────────────────── */
export default function Home() {
  const { t } = useLang();
  const subtitle = useTypewriter(t.hero.subtitles);
  // Embla carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', dragFree: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo  = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => { emblaApi.off('select', onSelect); };
  }, [emblaApi]);

  return (
    <div className="flex flex-col text-sm md:text-base">

      {/* ── 1. HERO ─────────────────────────────────────────── */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-16 px-6 max-w-7xl mx-auto w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 w-full items-center">

          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start gap-6"
          >
            <span className="text-primary text-xs tracking-widest border border-primary/40 px-3 py-1 bg-primary/5 font-mono">
              {t.hero.badge}
            </span>

            <h1 className="text-5xl md:text-7xl font-bold leading-none tracking-tight">
              <span className="text-white block mb-2">Bohdan</span>
              <span className="text-primary glow-text">Hembatiuk</span>
            </h1>

            <div className="h-8 text-xl md:text-2xl text-gray-300 flex items-center font-mono">
              <span>{`> ${subtitle}`}</span>
              <span className="w-3 h-6 bg-primary ml-1 animate-pulse" />
            </div>

            <p className="text-gray-400 max-w-lg leading-relaxed">{t.hero.bio}</p>

            <div className="flex flex-wrap gap-4 mt-2">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-red-500 text-[#050705] font-bold px-8 py-3 rounded-full hover:bg-red-600 transition-colors shadow-[0_0_15px_rgba(239,68,68,0.5)] font-mono glow-text-red"
              >
                {t.hero.viewProjects}
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-blue-500 text-blue-400 px-8 py-3 rounded-full hover:bg-blue-500/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all font-mono glow-text-blue"
              >
                {t.hero.contact}
              </button>
            </div>

            <div className="flex gap-6 mt-6">
              <a
                href="https://github.com/W1ntermann"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary transition-all hover:scale-110 hover:drop-shadow-[0_0_8px_#39ff6a]"
                aria-label="GitHub"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="https://t.me/badan_badanowycz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary transition-all hover:scale-110 hover:drop-shadow-[0_0_8px_#39ff6a]"
                aria-label="Telegram"
              >
                <FaTelegramPlane className="text-2xl" />
              </a>
              <a
                href="https://instagram.com/bohdan_codes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary transition-all hover:scale-110 hover:drop-shadow-[0_0_8px_#39ff6a]"
                aria-label="Instagram"
              >
                <FaInstagram className="text-2xl" />
              </a>
            </div>
          </motion.div>

          {/* Right: Photo + Terminal card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex flex-col items-center gap-8"
          >
            {/* ── Photo frame ── */}
            <div className="relative w-full max-w-sm mx-auto">
              {/* Glow ring behind photo */}
              <div className="absolute -inset-1 bg-primary/20 blur-xl rounded-none" />

              {/* Main photo container */}
              <div className="relative border-2 border-primary/70 overflow-hidden"
                style={{ boxShadow: '0 0 30px rgba(57,255,106,0.25), inset 0 0 20px rgba(57,255,106,0.05)' }}
              >
                <img
                  src={photoSrc}
                  alt="Bohdan Hembatiuk"
                  className="w-full h-[340px] object-cover object-top"
                  style={{ filter: 'contrast(1.05) brightness(0.95)' }}
                />

                {/* Scanline overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.12) 3px, rgba(0,0,0,0.12) 4px)',
                  }}
                />

                {/* Bottom name bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-[#050705]/75 backdrop-blur-sm border-t border-primary/30 px-4 py-2 flex items-center justify-between">
                  <span className="text-primary text-xs font-mono glow-text-sm">Bohdan Hembatiuk</span>
                  <span className="text-gray-500 text-xs font-mono">Full Stack Dev</span>
                </div>
              </div>

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-primary" />
              <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-primary" />
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-primary" />
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-primary" />

              {/* Floating badge — top right */}
              <div
                className="absolute -top-4 -right-4 bg-[#050705] border border-primary/80 px-3 py-1.5 text-primary text-xs font-bold font-mono z-20"
                style={{ boxShadow: '0 0 10px rgba(57,255,106,0.35)' }}
              >
                2+ yrs exp
              </div>

              {/* Floating badge — bottom left */}
              <div
                className="absolute -bottom-4 -left-4 bg-[#050705] border border-primary/80 p-2.5 text-primary text-sm font-mono font-bold z-20"
                style={{ boxShadow: '0 0 10px rgba(57,255,106,0.35)' }}
              >
                {'< />'}
              </div>
            </div>

            {/* ── Terminal card ── */}
            <div className="terminal-card glow-border p-1 w-full max-w-sm">
              <div className="flex items-center gap-2 bg-[#050705]/50 p-2 border-b border-primary/20">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-primary/80" />
                <span className="text-gray-500 text-xs ml-2 font-mono">~/portfolio/profile.json</span>
              </div>
              <div className="p-5 text-xs text-gray-300 leading-relaxed font-mono">
                <span className="text-pink-400">const</span>{' '}
                <span className="text-blue-400">developer</span> = {'{'}<br />
                &nbsp;&nbsp;<span className="text-primary">"name"</span>:{' '}
                <span className="text-yellow-300">"Bohdan Hembatiuk"</span>,<br />
                &nbsp;&nbsp;<span className="text-primary">"role"</span>:{' '}
                <span className="text-yellow-300">"Full Stack Developer"</span>,<br />
                &nbsp;&nbsp;<span className="text-primary">"skills"</span>: [
                <span className="text-yellow-300">"C#"</span>,{' '}
                <span className="text-yellow-300">"React"</span>,{' '}
                <span className="text-yellow-300">"TS"</span>],<br />
                &nbsp;&nbsp;<span className="text-primary">"status"</span>:{' '}
                <span className="text-yellow-300">"Ready for new challenges"</span>,<br />
                &nbsp;&nbsp;<span className="text-primary">"coffee_level"</span>:{' '}
                <span className="text-orange-400">99.9</span><br />
                {'}'};
                <br /><br />
                <span className="text-gray-500">// Initialize system...</span><br />
                <span className="text-primary glow-text-sm">{`> developer.start()`}</span>
                <span className="animate-pulse">_</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. ABOUT ─────────────────────────────────────────── */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center py-20 px-6 max-w-7xl mx-auto w-full"
      >
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-primary text-2xl font-bold glow-text-sm font-mono">
              <span className="text-gray-500 mr-4">$</span>{t.about.cmd.replace('$ ', '')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 text-gray-300 space-y-6"
            >
              <p>{t.about.p1}</p>
              <p>
                {t.about.p2.split('C# / .NET')[0]}
                <span className="text-white font-bold">C# / .NET</span>
                {t.about.p2.split('C# / .NET')[1]?.split('React and Next.js')[0]}
                <span className="text-white font-bold">React and Next.js</span>
                {t.about.p2.split('React and Next.js')[1] ?? ''}
              </p>
              <p>{t.about.p3}</p>
              <div className="pt-4">
                <button className="border border-red-500 text-red-500 px-6 py-2 hover:bg-red-500 hover:text-[#050705] transition-colors font-mono">
                  {t.about.downloadCV}
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="terminal-card glow-border p-6 flex flex-col gap-4">
                <div className="border-b border-primary/20 pb-4 mb-2">
                  <h3 className="text-white font-bold text-lg font-mono">{t.about.cardTitle}</h3>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm font-mono">
                  <span className="text-gray-500 col-span-1">{t.about.labelName}</span>
                  <span className="text-gray-200 col-span-2">{t.about.name}</span>

                  <span className="text-gray-500 col-span-1">{t.about.labelRole}</span>
                  <span className="text-primary col-span-2">{t.about.role}</span>

                  <span className="text-gray-500 col-span-1">{t.about.labelLocation}</span>
                  <span className="text-gray-200 col-span-2">{t.about.location}</span>

                  <span className="text-gray-500 col-span-1">{t.about.labelEmail}</span>
                  <span className="text-gray-200 col-span-2">{t.about.email}</span>

                  <span className="text-gray-500 col-span-1 mt-4">{t.about.labelStatus}</span>
                  <div className="col-span-2 flex items-center gap-2 mt-4">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#39ff6a]" />
                    <span className="text-primary text-xs">{t.about.status}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. SKILLS ────────────────────────────────────────── */}
      <section
        id="skills"
        className="min-h-screen flex items-center justify-center py-20 px-6 max-w-7xl mx-auto w-full"
      >
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-primary text-2xl font-bold glow-text-sm font-mono">
              <span className="text-gray-500 mr-4">$</span>{t.skills.cmd.replace('$ ', '')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillBar icon={TbBrandCSharp} name="C#" progress={90} delay={1} />
            <SkillBar icon={SiDotnet} name=".NET" progress={85} delay={2} />
            <SkillBar icon={FaReact} name="React" progress={88} delay={3} />
            <SkillBar icon={SiNextdotjs} name="Next.js" progress={85} delay={4} />
            <SkillBar icon={SiTypescript} name="TypeScript" progress={90} delay={5} />
            <SkillBar icon={SiMongodb} name="MongoDB" progress={80} delay={6} />
            <SkillBar icon={SiPostgresql} name="PostgreSQL" progress={82} delay={7} />
            <SkillBar icon={SiTailwindcss} name="Tailwind CSS" progress={88} delay={8} />
          </div>
        </div>
      </section>

      {/* ── 4. PROJECTS ──────────────────────────────────────── */}
      <section id="projects" className="py-20 px-6 max-w-7xl mx-auto w-full">
        <div className="w-full">

          {/* Header row */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-10 flex items-center justify-between flex-wrap gap-4"
          >
            <h2 className="text-primary text-2xl font-bold glow-text-sm font-mono">
              <span className="text-gray-500 mr-4">$</span>{t.projects.cmd.replace('$ ', '')}
            </h2>
            {/* Counter */}
            <span className="text-gray-500 text-sm font-mono tabular-nums">
              <span className="text-primary">{String(selectedIndex + 1).padStart(2, '0')}</span>
              <span className="text-gray-700"> / </span>
              {String(t.projects.items.length).padStart(2, '0')}
            </span>
          </motion.div>

          {/* Embla viewport */}
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex -ml-6">
              {t.projects.items.map((project, i) => (
                <div
                  key={project.title}
                  className="flex-none pl-6 w-full md:w-1/2 lg:w-1/3"
                >
                  <ProjectCard
                    {...project}
                    view={t.projects.view}
                    github={t.projects.github}
                    index={i}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Controls row */}
          <div className="mt-8 flex items-center justify-between">

            {/* Prev / Next buttons */}
            <div className="flex gap-3">
              <button
                onClick={scrollPrev}
                className="group border border-blue-500/40 hover:border-blue-500 text-blue-400 font-mono text-sm px-5 py-2.5 transition-all duration-200 hover:bg-blue-500/10 hover:shadow-[0_0_14px_rgba(59,130,246,0.25)] active:scale-95"
              >
                <span className="group-hover:drop-shadow-[0_0_6px_#3b82f6] transition-all">
                  ← prev
                </span>
              </button>
              <button
                onClick={scrollNext}
                className="group border border-red-500/40 hover:border-red-500 text-red-500 font-mono text-sm px-5 py-2.5 transition-all duration-200 hover:bg-red-500/10 hover:shadow-[0_0_14px_rgba(239,68,68,0.25)] active:scale-95"
              >
                <span className="group-hover:drop-shadow-[0_0_6px_#ef4444] transition-all">
                  next →
                </span>
              </button>
            </div>

            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {scrollSnaps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  className="relative transition-all duration-300"
                  aria-label={`Go to project ${i + 1}`}
                >
                  {selectedIndex === i ? (
                    <span
                      className="block w-6 h-1.5 bg-primary"
                      style={{ boxShadow: '0 0 8px #39ff6a' }}
                    />
                  ) : (
                    <span className="block w-1.5 h-1.5 bg-gray-700 hover:bg-gray-500 transition-colors" />
                  )}
                </button>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── 5. CONTACT ───────────────────────────────────────── */}
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center py-20 px-6 max-w-7xl mx-auto w-full"
      >
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-primary text-2xl font-bold glow-text-sm font-mono">
              <span className="text-gray-500 mr-4">$</span>{t.contact.cmd.replace('$ ', '')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center gap-8"
            >
              <p className="text-gray-300 leading-relaxed">{t.contact.intro}</p>

              <div className="flex flex-col gap-6">
                <a href="mailto:bogdangembatyuk@gmail.com" className="flex items-center gap-4 group">
                  <div className="p-3 border border-primary/30 group-hover:border-primary group-hover:bg-primary/10 transition-colors">
                    <FaEnvelope className="text-primary text-xl" />
                  </div>
                  <span className="text-gray-300 group-hover:text-primary transition-colors font-mono text-sm">
                    {t.contact.emailLabel}
                  </span>
                </a>
                <a href="https://github.com/W1ntermann" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="p-3 border border-primary/30 group-hover:border-primary group-hover:bg-primary/10 transition-colors">
                    <FaGithub className="text-primary text-xl" />
                  </div>
                  <span className="text-gray-300 group-hover:text-primary transition-colors font-mono text-sm">
                    {t.contact.githubLabel}
                  </span>
                </a>
                <a href="https://t.me/badan_badanowycz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="p-3 border border-primary/30 group-hover:border-primary group-hover:bg-primary/10 transition-colors">
                    <FaTelegramPlane className="text-primary text-xl" />
                  </div>
                  <span className="text-gray-300 group-hover:text-primary transition-colors font-mono text-sm">
                    {t.contact.telegramLabel}
                  </span>
                </a>
                <a href="https://instagram.com/bohdan_codes" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="p-3 border border-primary/30 group-hover:border-primary group-hover:bg-primary/10 transition-colors">
                    <FaInstagram className="text-primary text-xl" />
                  </div>
                  <span className="text-gray-300 group-hover:text-primary transition-colors font-mono text-sm">
                    {t.contact.instagramLabel}
                  </span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <form className="terminal-card glow-border p-8 flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {([
                    [t.contact.labelName, 'text', t.contact.phName],
                    [t.contact.labelEmail, 'email', t.contact.phEmail],
                  ] as const).map(([label, type, ph]) => (
                    <div key={label} className="flex flex-col gap-2">
                      <label className="text-xs text-gray-400 font-mono">{label}</label>
                      <input
                        type={type}
                        placeholder={ph}
                        className="bg-[#050705] border border-primary/30 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary p-3 text-sm text-white font-mono"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-400 font-mono">{t.contact.labelSubject}</label>
                  <input
                    type="text"
                    placeholder={t.contact.phSubject}
                    className="bg-[#050705] border border-primary/30 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary p-3 text-sm text-white font-mono"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-400 font-mono">{t.contact.labelMessage}</label>
                  <textarea
                    rows={4}
                    placeholder={t.contact.phMessage}
                    className="bg-[#050705] border border-primary/30 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary p-3 text-sm text-white resize-none font-mono"
                  />
                </div>

                <button
                  type="button"
                  className="bg-primary text-[#050705] font-bold py-3 mt-2 hover:bg-primary/90 transition-colors shadow-[0_0_10px_rgba(57,255,106,0.3)] font-mono"
                >
                  {t.contact.send}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer className="border-t border-primary/20 py-8 mt-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-5 mb-6">
            <a
              href="https://github.com/W1ntermann"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub className="text-lg" />
            </a>
            <a
              href="https://t.me/badan_badanowycz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary transition-all hover:scale-110"
              aria-label="Telegram"
            >
              <FaTelegramPlane className="text-lg" />
            </a>
            <a
              href="https://instagram.com/bohdan_codes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary transition-all hover:scale-110"
              aria-label="Instagram"
            >
              <FaInstagram className="text-lg" />
            </a>
            <a
              href="mailto:bogdangembatyuk@gmail.com"
              className="text-gray-500 hover:text-primary transition-all hover:scale-110"
              aria-label="Email"
            >
              <FaEnvelope className="text-lg" />
            </a>
          </div>
          <p className="text-gray-600 text-xs font-mono">{t.footer.copy}</p>
          <p className="text-gray-700 text-[10px] mt-2 font-mono">{t.footer.shutdown}</p>
        </div>
      </footer>
    </div>
  );
}
