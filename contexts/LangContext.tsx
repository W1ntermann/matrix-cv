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
        { title: 'EcommerceHub', desc: 'Full‑stack e‑commerce platform for real‑time inventory, orders and payments. Production-ready: payment gateway integration, DB transactions for data integrity, automated tests and CI/CD pipelines for reliable releases.', caption: 'AI for modern finance', tags: ['C#', '.NET', 'React', 'PostgreSQL'], image: '/portfolio.png' },
        { title: 'DevTasker', desc: 'Developer productivity app with real‑time WebSocket updates and project tracking. Built for teams with role-based access, Dockerized deployments and end‑to‑end tests to ensure predictable collaboration workflows.', caption: 'Team task tracker', tags: ['Next.js', 'TypeScript', 'MongoDB'], image: '/portfolio1.png' },
        { title: 'APIForge', desc: 'REST API toolkit and CLI generator that produces OpenAPI/Swagger specs. Focused on contract-first design, automated contract tests and CI validation to keep integrations stable.', caption: 'Contract‑first REST APIs', tags: ['.NET', 'TypeScript', 'PostgreSQL'], image: '/portfolio2.png' },
        { title: 'ChatMatrix', desc: 'Real‑time encrypted chat with a terminal-style UI and message rooms. Prioritizes privacy with end‑to‑end encryption, message persistence and performance-tested delivery.', caption: 'Encrypted chat', tags: ['React', 'TypeScript', 'MongoDB'], image: '/porffolio3.jpg' },
        { title: 'DataPulse', desc: 'Analytics dashboard for visualizing KPIs and streaming metrics. Implements secure access controls, efficient aggregations and caching for responsive dashboards under load.', caption: 'Live business metrics', tags: ['Next.js', '.NET', 'PostgreSQL'], image: '/porrfolio4.png' },
        { title: 'AuthForge', desc: 'Authentication microservice with JWT, refresh tokens and OAuth2 support. Designed for secure integrations, token revocation, and includes unit tests and security checks.', caption: 'Secure authentication', tags: ['C#', '.NET', 'PostgreSQL'], image: '/portfolio5.png' },
        { title: 'PixelForge', desc: 'Design→code platform transforming Figma into production Next.js components with AI assistance. Produces accessible components, style-consistent outputs and integrates with CI for visual/regression checks.', caption: 'Design → Code', tags: ['Next.js', 'React', 'TypeScript', 'Tailwind'], image: '/portfolio6.png' },
        { title: 'CloudNest', desc: 'Serverless SaaS boilerplate with multi-tenant isolation, Stripe billing and edge-ready APIs. Emphasizes tenant data separation, automated deployments and observability for live systems.', caption: 'Serverless SaaS', tags: ['Next.js', 'React', 'PostgreSQL', 'Stripe'], image: '/portfolio7.png' },
        { title: 'CodeSage', desc: 'AI-assisted code review tool that analyzes PR diffs and suggests improvements. Integrates with GitHub workflows, provides deterministic suggestions and runs within controlled CI environments.', caption: 'AI for code review', tags: ['Next.js', 'TypeScript', 'OpenAI', 'React'], image: '/portfolio8.png' },
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
        { title: 'EcommerceHub', desc: 'Full‑stack платформа електронної комерції для управління інвентарем, замовленнями та платежами у реальному часі. Продакшен‑готова: інтеграція платіжних шлюзів, транзакційна цілісність даних, автоматичні тести та CI/CD для стабільних релізів.', caption: 'AI для сучасних фінансів', tags: ['C#', '.NET', 'React', 'PostgreSQL'], image: '/portfolio.png' },
        { title: 'DevTasker', desc: 'Застосунок для продуктивності розробників з WebSocket‑оновленнями та відстеженням проєктів. Підтримує ролі та доступ, Docker‑деплой та end‑to‑end тести для надійної командної роботи.', caption: 'Командний таск‑трекер', tags: ['Next.js', 'TypeScript', 'MongoDB'], image: '/portfolio1.png' },
        { title: 'APIForge', desc: 'Набір інструментів для створення REST API та CLI‑генератор документації з OpenAPI/Swagger. Орієнтований на contract‑first розробку, автоматизовані тести контрактів та перевірки в CI.', caption: 'Контрактні REST API', tags: ['.NET', 'TypeScript', 'PostgreSQL'], image: '/portfolio2.png' },
        { title: 'ChatMatrix', desc: 'Зашифрований чат у реальному часі з термінальним інтерфейсом і кімнатами. Пріоритет — приватність: end‑to‑end шифрування, збереження повідомлень та тестування продуктивності.', caption: 'Зашифрований чат', tags: ['React', 'TypeScript', 'MongoDB'], image: '/porffolio3.jpg' },
        { title: 'DataPulse', desc: 'Аналітичний дашборд для візуалізації KPI та стримінгових метрик. Забезпечує безпечний доступ, оптимізовані агрегати та кешування для чутливих інтерфейсів під навантаженням.', caption: 'Живі бізнес‑метрики', tags: ['Next.js', '.NET', 'PostgreSQL'], image: '/porrfolio4.png' },
        { title: 'AuthForge', desc: 'Мікросервіс автентифікації з JWT, refresh‑токенами та підтримкою OAuth2. Розроблений для безпечної інтеграції зі сервісами, має тести та механізми відкликання токенів.', caption: 'Серйозна автентифікація', tags: ['C#', '.NET', 'PostgreSQL'], image: '/portfolio5.png' },
        { title: 'PixelForge', desc: 'Платформа «дизайн→код», що перетворює Figma у production Next.js компоненти із підтримкою ШІ. Генерує доступні компоненти, зберігає стилі та інтегрується в CI для регресійних перевірок.', caption: 'Дизайн → Код', tags: ['Next.js', 'React', 'TypeScript', 'Tailwind'], image: '/portfolio6.png' },
        { title: 'CloudNest', desc: 'Безсерверний SaaS‑шаблон з ізоляцією tenants, білінгом Stripe та edge‑API. Наголошує на розподілі даних, автоматичних деплойментах та моніторингу для живих систем.', caption: 'Serverless SaaS', tags: ['Next.js', 'React', 'PostgreSQL', 'Stripe'], image: '/portfolio7.png' },
        { title: 'CodeSage', desc: 'AI‑асистент для код‑ревʼю, що аналізує PR‑дифи та пропонує покращення. Інтегрується в GitHub‑workflows, надає детерміністичні підказки та працює в контрольованому CI‑оточенні.', caption: 'AI для код‑ревʼю', tags: ['Next.js', 'TypeScript', 'OpenAI', 'React'], image: '/portfolio8.png' },
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
