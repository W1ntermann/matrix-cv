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
        { title: 'EcommerceHub', desc: 'Full-stack e-commerce platform handling real-time inventory, orders, and payments at scale.', tags: ['C#', '.NET', 'React', 'PostgreSQL'] },
        { title: 'DevTasker', desc: 'Developer productivity app with real-time WebSocket updates and project tracking.', tags: ['Next.js', 'TypeScript', 'MongoDB'] },
        { title: 'APIForge', desc: 'REST API toolkit and automated documentation generator CLI with Swagger export.', tags: ['.NET', 'TypeScript', 'PostgreSQL'] },
        { title: 'ChatMatrix', desc: 'Real-time encrypted chat application with terminal-style UI and message rooms.', tags: ['React', 'TypeScript', 'MongoDB'] },
        { title: 'DataPulse', desc: 'Analytics dashboard for visualizing business KPIs and real-time metrics with charts.', tags: ['Next.js', '.NET', 'PostgreSQL'] },
        { title: 'AuthForge', desc: 'Secure authentication microservice with JWT, refresh tokens, and OAuth2 integration.', tags: ['C#', '.NET', 'PostgreSQL'] },
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
        { title: 'EcommerceHub', desc: 'Full-stack платформа електронної комерції з обробкою інвентаря, замовлень та платежів у реальному часі.', tags: ['C#', '.NET', 'React', 'PostgreSQL'] },
        { title: 'DevTasker', desc: 'Застосунок для продуктивності розробників з оновленнями WebSocket та відстеженням проєктів.', tags: ['Next.js', 'TypeScript', 'MongoDB'] },
        { title: 'APIForge', desc: 'Набір інструментів REST API та автоматичний генератор документації CLI з експортом Swagger.', tags: ['.NET', 'TypeScript', 'PostgreSQL'] },
        { title: 'ChatMatrix', desc: 'Зашифрований чат у реальному часі з термінальним інтерфейсом та кімнатами повідомлень.', tags: ['React', 'TypeScript', 'MongoDB'] },
        { title: 'DataPulse', desc: 'Аналітичний дашборд для візуалізації KPI та бізнес-метрик у реальному часі.', tags: ['Next.js', '.NET', 'PostgreSQL'] },
        { title: 'AuthForge', desc: 'Безпечний мікросервіс автентифікації з JWT, refresh-токенами та інтеграцією OAuth2.', tags: ['C#', '.NET', 'PostgreSQL'] },
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
