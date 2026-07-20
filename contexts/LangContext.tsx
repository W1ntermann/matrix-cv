'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

export type Lang = 'en' | 'ua';

const translations = {
  en: {
    lang: 'UA',
    nav: ['01_Home', '02_About', '03_Skills', '04_Projects', '05_Contact'],
    hero: {
      badge: '[ Full Stack Developer ]',
      subtitles: ['C# / .NET Developer', 'React & Next.js Engineer', 'TypeScript Specialist'],
      bio: 'I build robust backend systems and precise frontend interfaces. Navigating the stack from raw database queries to pixel-perfect UI.',
      viewProjects: '[ View Projects ]',
      downloadCV: '[ Download CV ]',
      contact: '[ Contact ]',
    },
    about: {
      cmd: '$ whoami',
      p1: 'I am a passionate Full Stack Developer focused on building robust, scalable applications. With over 2 years of professional experience, I bridge the gap between elegant frontend interfaces and highly functional backend architectures.',
      p2: 'My expertise centers around the C# / .NET ecosystem for solid backend services, paired with React and Next.js for dynamic frontend experiences. I believe in typed strictness via TypeScript and writing maintainable, clean code.',
      p3: 'Whether designing REST APIs, modeling PostgreSQL databases, or crafting complex React state logic — I approach every problem with an engineering mindset.',
      downloadCV: '[ Download CV ]',
      cardTitle: 'System Identity',
      name: 'Bohdan Hembatiuk',
      role: 'Full Stack Developer',
      location: 'Ukraine',
      email: 'bogdangembatyuk@gmail.com',
      status: 'Open to Work',
      labelName: 'Name:',
      labelRole: 'Role:',
      labelLocation: 'Location:',
      labelEmail: 'Email:',
      labelStatus: 'Status:',
    },
    skills: {
      cmd: '$ stack --list',
    },
    projects: {
      cmd: '$ ls ./featured',
      view: '[ View ]',
      github: '[ GitHub ]',
      viewAll: '[ ls -a ./all-projects ]',
      showLess: '[ cd ./featured ]',
      items: [
        { title: 'StarquantumAI', desc: 'AI‑powered FinTech platform for real‑time financial analytics, portfolio optimization and algorithmic trading. Designed for institutional investors with enterprise‑grade data security and sub‑millisecond processing latency.', caption: 'FinTech AI Platform', tags: ['Next.js', 'TypeScript', 'AI', 'FinTech'], image: '/portfolio.png', viewUrl: 'https://www.starquantum.io/en', githubUrl: 'https://github.com/W1ntermann/shanti-site' },
        { title: 'Carpathia Invest', desc: 'Premium real estate investment platform specializing in Carpathian mountain properties. Features interactive 3D property tours, investment ROI calculators and a secure transaction gateway for high‑value acquisitions.', caption: 'Mountain Real Estate Investments', tags: ['React', 'TypeScript', 'PostgreSQL'], image: '/portfolio1.png', viewUrl: 'https://www.airy.com.ua/', githubUrl: 'https://github.com/W1ntermann/airy' },
        { title: 'MetalCraft Pro', desc: 'Comprehensive B2B platform for industrial metal processing services. Connects manufacturers with certified suppliers, streamlines RFQ workflows and provides real‑time order tracking across the supply chain.', caption: 'B2B Metal Processing Services', tags: ['Next.js', 'Tailwind', 'TypeScript'], image: '/portfolio2.png', viewUrl: 'https://www.armind.com.ua/', githubUrl: 'https://github.com/W1ntermann/metalmaster-site' },
        { title: 'ChemLine Industrial', desc: 'Corporate website and product catalog for chemical and coating equipment manufacturer. Showcases heavy‑duty industrial machinery with detailed technical specifications and multilingual product documentation.', caption: 'Chemical & Coating Equipment', tags: ['React', '.NET', 'MongoDB'], image: '/porffolio3.jpg', viewUrl: 'https://www.teonmix.com/', githubUrl: 'https://github.com/W1ntermann/teon-website' },
        { title: 'NoirEstate', desc: 'Atmospheric noir‑themed real estate agency website with cinematic visual storytelling. Blends dark aesthetics with high‑end property showcases, immersive gallery experiences and a discreet client inquiry system.', caption: 'Noir-Style Real Estate Agency', tags: ['Next.js', 'Framer Motion', 'Tailwind'], image: '/porrfolio4.png', viewUrl: 'https://real-estate-project-teal.vercel.app/', githubUrl: 'https://github.com/W1ntermann/real-estate-project' },
        { title: 'DentArt Clinic', desc: 'Modern dental clinic website with online appointment scheduling, doctor profiles and treatment galleries. Optimized for local SEO and patient conversion with a clean, trustworthy interface.', caption: 'Premium Dental Clinic Website', tags: ['Next.js', 'TypeScript', 'Tailwind'], image: '/portfolio5.png', viewUrl: 'https://dental-site-rose.vercel.app/', githubUrl: 'https://github.com/W1ntermann/dental-site' },
        { title: 'NexaDigital', desc: 'Corporate brand website for a digital agency startup. Highlights service offerings, case studies and team expertise through bold typography, animated statistics and a streamlined project inquiry pipeline.', caption: 'Corporate Site for Digital Agency', tags: ['Next.js', 'React', 'TypeScript'], image: '/portfolio6.png', viewUrl: 'https://landing-lemoners.vercel.app/', githubUrl: 'https://github.com/W1ntermann/landing-lemoners' },
        { title: 'AdPrime', desc: 'High‑conversion landing page for an advertising and growth marketing expert. Features client success stories, service packages and an integrated booking system for consultation calls.', caption: 'Advertising Expert Landing Page', tags: ['React', 'Next.js', 'Tailwind'], image: '/portfolio7.png', viewUrl: 'https://www.annalukina.top/', githubUrl: 'https://github.com/W1ntermann/hanna-s-site' },
        { title: 'AeroDrone Tech', desc: 'Specialized website for a manufacturer of tactical unmanned aerial systems. Presents product lineups, technical datasheets, and defense‑grade security compliance documentation.', caption: 'Tactical Unmanned Aerial Systems', tags: ['C#', '.NET', 'React', 'PostgreSQL'], image: '/portfolio8.png', viewUrl: 'https://drone-hub-site.vercel.app/', githubUrl: 'https://github.com/W1ntermann/drone-hub-site' },
        { title: 'Event Make Studio', desc: 'Comprehensive online studio for creating custom digital invitations and organizing celebrations. Features an intuitive invitation builder, event planning tools, and seamless guest management system.', caption: 'Online Invitations & Celebration Studio', tags: ['Next.js', 'TypeScript', 'Tailwind'], image: '/portfolio10.png', viewUrl: 'https://event-make-studio.vercel.app/', githubUrl: 'https://github.com/W1ntermann/event-make-studio' },
      ],
    },
    contact: {
      cmd: '$ send --message',
      intro: "Interested in working together or just want to say hi? My inbox is open. Let's build something exceptional.",
      labelName: '// Name',
      labelEmail: '// Email',
      labelSubject: '// Subject',
      labelMessage: '// Message',
      phName: 'John Doe',
      phEmail: 'john@example.com',
      phSubject: 'Job Opportunity',
      phMessage: "Hello, I'd like to discuss...",
      send: '[ Send Message ]',
      emailLabel: 'bogdangembatyuk@gmail.com',
      githubLabel: 'github.com/W1ntermann',
      telegramLabel: 't.me/badan_badanowycz',
      instagramLabel: 'instagram.com/bohdan_codes',
    },
    footer: {
      copy: '© 2026 Bohdan Hembatiuk — Built with React + TypeScript',
      shutdown: 'INITIALIZING SHUTDOWN SEQUENCE...',
    },
  },

  ua: {
    lang: 'EN',
    nav: ['01_Головна', '02_Про мене', '03_Навички', '04_Проєкти', '05_Контакт'],
    hero: {
      badge: '[ Full Stack Розробник ]',
      subtitles: ['C# / .NET Розробник', 'React & Next.js Інженер', 'TypeScript Спеціаліст'],
      bio: 'Я будую надійні серверні системи та точні фронтенд-інтерфейси. Від сирих запитів до бази даних до піксельно-ідеального UI.',
      viewProjects: '[ Переглянути Проєкти ]',
      downloadCV: '[ Завантажити CV ]',
      contact: '[ Контакт ]',
    },
    about: {
      cmd: '$ хто-я',
      p1: 'Я пристрасний Full Stack Розробник, зосереджений на створенні надійних і масштабованих застосунків. Маю понад 2 роки професійного досвіду.',
      p2: 'Моя спеціалізація — екосистема C# / .NET для серверних сервісів у поєднанні з React та Next.js для динамічних інтерфейсів. Вірю в строгу типізацію через TypeScript та чистий, підтримуваний код.',
      p3: 'Чи то проєктування REST API, моделювання баз даних PostgreSQL або складна логіка стану React — я підходжу до кожного завдання з інженерним мисленням.',
      downloadCV: '[ Завантажити CV ]',
      cardTitle: 'Ідентифікація Системи',
      name: 'Богдан Гембатюк',
      role: 'Full Stack Розробник',
      location: 'Україна',
      email: 'bogdangembatyuk@gmail.com',
      status: 'Відкритий до Роботи',
      labelName: "Ім'я:",
      labelRole: 'Посада:',
      labelLocation: 'Локація:',
      labelEmail: 'Email:',
      labelStatus: 'Статус:',
    },
    skills: {
      cmd: '$ стек --список',
    },
    projects: {
      cmd: '$ ls ./featured',
      view: '[ Переглянути ]',
      github: '[ GitHub ]',
      viewAll: '[ ls -a ./всі-проєкти ]',
      showLess: '[ cd ./featured ]',
      items: [
        { title: 'StarquantumAI', desc: 'AI‑платформа для фінансових технологій з аналітикою у реальному часі, оптимізацією портфелів та алгоритмічним трейдингом. Розроблена для інституційних інвесторів з корпоративною безпекою даних та субмілісекундною обробкою.', caption: 'FinTech AI Платформа', tags: ['Next.js', 'TypeScript', 'AI', 'FinTech'], image: '/portfolio.png', viewUrl: 'https://www.starquantum.io/en', githubUrl: 'https://github.com/W1ntermann/shanti-site' },
        { title: 'Carpathia Invest', desc: 'Преміальна інвестиційна платформа нерухомості в Карпатах. Інтерактивні 3D‑тури, калькулятори рентабельності інвестицій та захищений шлюз транзакцій для великих придбань.', caption: 'Інвестиції в Гірську Нерухомість', tags: ['React', 'TypeScript', 'PostgreSQL'], image: '/portfolio1.png', viewUrl: 'https://www.airy.com.ua/', githubUrl: 'https://github.com/W1ntermann/airy' },
        { title: 'MetalCraft Pro', desc: 'B2B платформа для послуг промислової обробки металу. Поєднує виробників із сертифікованими постачальниками, оптимізує RFQ‑процеси та забезпечує відстеження замовлень у реальному часі.', caption: 'B2B Обробка Металу', tags: ['Next.js', 'Tailwind', 'TypeScript'], image: '/portfolio2.png', viewUrl: 'https://www.armind.com.ua/', githubUrl: 'https://github.com/W1ntermann/metalmaster-site' },
        { title: 'ChemLine Industrial', desc: 'Корпоративний сайт і каталог продукції для виробника хімічного та лакофарбового обладнання. Демонструє важке промислове устаткування з детальними технічними специфікаціями та багатомовною документацією.', caption: 'Хімічне та Лакофарбове Обладнання', tags: ['React', '.NET', 'MongoDB'], image: '/porffolio3.jpg', viewUrl: 'https://www.teonmix.com/', githubUrl: 'https://github.com/W1ntermann/teon-website' },
        { title: 'NoirEstate', desc: 'Атмосферний сайт нуарної агенції нерухомості з кінематографічним візуальним стилем. Поєднує темну естетику з преміальними демонстраціями обʼєктів, занурювальними галереями та стриманою системою клієнтських запитів.', caption: 'Нуарна Агенція Нерухомості', tags: ['Next.js', 'Framer Motion', 'Tailwind'], image: '/porrfolio4.png', viewUrl: 'https://real-estate-project-teal.vercel.app/', githubUrl: 'https://github.com/W1ntermann/real-estate-project' },
        { title: 'DentArt Clinic', desc: 'Сайт сучасної стоматологічної клініки з онлайн‑записом, профілями лікарів і галереями лікування. Оптимізований для локального SEO та конверсії пацієнтів із чистим, надійним інтерфейсом.', caption: 'Сайт Преміум Стоматології', tags: ['Next.js', 'TypeScript', 'Tailwind'], image: '/portfolio5.png', viewUrl: 'https://dental-site-rose.vercel.app/', githubUrl: 'https://github.com/W1ntermann/dental-site' },
        { title: 'NexaDigital', desc: 'Корпоративний брендовий сайт для стартапу діджитал‑агенції. Підсвічує пропозиції послуг, кейси та експертизу команди через виразну типографіку, анімовану статистику та оптимізований pipeline запитів.', caption: 'Корпоративний Сайт Діджитал‑Агенції', tags: ['Next.js', 'React', 'TypeScript'], image: '/portfolio6.png', viewUrl: 'https://landing-lemoners.vercel.app/', githubUrl: 'https://github.com/W1ntermann/landing-lemoners' },
        { title: 'AdPrime', desc: 'Висококонверсійний лендінг для експерта з реклами та growth‑маркетингу. Містить історії успіху клієнтів, пакети послуг та інтегровану систему бронювання консультацій.', caption: 'Лендінг Експерта з Реклами', tags: ['React', 'Next.js', 'Tailwind'], image: '/portfolio7.png', viewUrl: 'https://www.annalukina.top/', githubUrl: 'https://github.com/W1ntermann/hanna-s-site' },
        { title: 'AeroDrone Tech', desc: 'Спеціалізований сайт виробника тактичних безпілотних авіаційних комплексів. Презентує лінійки продукції, технічну документацію та відповідність оборонним стандартам безпеки.', caption: 'Тактичні Безпілотні Системи', tags: ['C#', '.NET', 'React', 'PostgreSQL'], image: '/portfolio8.png', viewUrl: 'https://drone-hub-site.vercel.app/', githubUrl: 'https://github.com/W1ntermann/drone-hub-site' },
        { title: 'Event Make Studio', desc: 'Комплексна онлайн-студія для створення цифрових запрошень та організації свят. Інтуїтивний конструктор запрошень, інструменти планування подій та система керування гостями.', caption: 'Студія Онлайн Запрошень та Влаштування Свят', tags: ['Next.js', 'TypeScript', 'Tailwind'], image: '/portfolio10.png', viewUrl: 'https://event-make-studio.vercel.app/', githubUrl: 'https://github.com/W1ntermann/event-make-studio' },
      ],
    },
    contact: {
      cmd: '$ відправити --повідомлення',
      intro: 'Зацікавлені у співпраці або просто хочете привітатись? Мій поштовий ящик відкритий. Побудуємо щось виняткове разом.',
      labelName: "// Ім'я",
      labelEmail: '// Електронна пошта',
      labelSubject: '// Тема',
      labelMessage: '// Повідомлення',
      phName: 'Іван Іваненко',
      phEmail: 'ivan@example.com',
      phSubject: 'Пропозиція роботи',
      phMessage: 'Привіт, хотів би обговорити...',
      send: '[ Надіслати Повідомлення ]',
      emailLabel: 'bogdangembatyuk@gmail.com',
      githubLabel: 'github.com/W1ntermann',
      telegramLabel: 't.me/badan_badanowycz',
      instagramLabel: 'instagram.com/bohdan_codes',
    },
    footer: {
      copy: '© 2026 Богдан Гембатюк — Побудовано на React + TypeScript',
      shutdown: 'ІНІЦІАЛІЗАЦІЯ ПОСЛІДОВНОСТІ ЗАВЕРШЕННЯ...',
    },
  },
} as const;

export type Translations = typeof translations.en;

interface LangContextType {
  lang: Lang;
  t: Translations;
  toggleLang: () => void;
}

const LangContext = createContext<LangContextType>({
  lang: 'en',
  t: translations.en,
  toggleLang: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');
  const toggleLang = () => setLang(l => (l === 'en' ? 'ua' : 'en'));
  return (
    <LangContext.Provider value={{ lang, t: translations[lang] as Translations, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
