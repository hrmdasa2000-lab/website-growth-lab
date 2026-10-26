import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowUpRight, Code2, Globe2, Layers3, Zap, Menu, X, CheckCircle2, ExternalLink, Mail, Sparkles, MonitorSmartphone, Workflow, Gauge, ShieldCheck, Send, Copy, Check, Moon, Sun } from 'lucide-react';
import './styles.css';

const projects = [
  {
    number: '01', type: 'E-commerce concept', title: { en: 'Bicycle Store', fa: 'فروشگاه دوچرخه' },
    description: { en: 'A product-focused storefront concept designed to make browsing categories and discovering products straightforward.', fa: 'نمونه فروشگاه محصول‌محور با تمرکز بر مرور ساده دسته‌بندی‌ها و پیدا کردن سریع محصولات.' },
    tags: ['E-commerce', 'Responsive UI', 'Product discovery'], url: 'https://hrmdasa2000-lab.github.io/BycicleStore/', repo: 'https://github.com/hrmdasa2000-lab/BycicleStore', visual: 'bike'
  },
  {
    number: '02', type: 'Marketplace concept', title: { en: 'Motor Market', fa: 'موتور مارکت' },
    description: { en: 'A marketplace-style website concept that organizes listings and helps users scan product information more easily.', fa: 'نمونه سایت با ساختار مارکت‌پلیس برای مرتب‌سازی آگهی‌ها و خواناتر کردن اطلاعات محصولات.' },
    tags: ['Marketplace', 'UI structure', 'Responsive layout'], url: 'https://hrmdasa2000-lab.github.io/motorMarket/', repo: 'https://github.com/hrmdasa2000-lab/motorMarket', visual: 'motor'
  },
  {
    number: '03', type: 'Concept / in progress', title: { en: 'Business Growth Dashboard', fa: 'داشبورد رشد کسب‌وکار' },
    description: { en: 'A proposed dashboard direction for bringing key business signals, website activity, and practical next steps into one place.', fa: 'طرح مفهومی داشبوردی برای کنار هم آوردن شاخص‌های کسب‌وکار، فعالیت سایت و قدم‌های پیشنهادی بعدی.' },
    tags: ['Dashboard concept', 'Data clarity', 'AI-ready workflow'], url: null, repo: null, visual: 'dashboard'
  }
];

const copy = {
  en: {
    navProjects: 'Projects', navServices: 'Services', navAbout: 'Approach', navContact: 'Contact',
    eyebrow: 'WEB DEVELOPMENT · OPTIMIZATION · PRACTICAL AI',
    hero1: 'Digital experiences', hero2: 'built to work.',
    intro: 'I build and improve websites that help small businesses explain what they offer, earn trust, and make the next step easier for their customers.',
    ctaProjects: 'Explore selected work', ctaContact: 'Let’s talk', availability: 'Open to freelance projects',
    mini1: 'Websites & landing pages', mini2: 'UX and performance improvements', mini3: 'Useful AI & automation',
    sectionLabel: 'SELECTED WORK', projectsTitle: 'Projects with a purpose.', projectsIntro: 'A few examples of how I think about structure, usability, and the details that make a website easier to use.',
    live: 'View live site', source: 'Source code', concept: 'Concept project',
    sectionServices: 'HOW I CAN HELP', servicesTitle: 'Make your website work harder.', servicesIntro: 'Practical improvements, chosen around your business goals — not technology for its own sake.',
    service1: 'Website design & development', service1d: 'Responsive business websites and landing pages with clear structure, accessible layouts, and a purposeful user journey.',
    service2: 'Website optimization', service2d: 'Reviewing navigation, mobile experience, page structure, and friction points — then prioritizing useful improvements.',
    service3: 'AI & workflow automation', service3d: 'Using AI tools and lightweight automation to reduce repetitive work and make everyday processes more manageable.',
    service4: 'UI and usability improvements', service4d: 'Making interfaces easier to understand, actions easier to find, and key information easier to scan.',
    sectionApproach: 'MY APPROACH', approachTitle: 'Clear thinking. Useful execution.', approachIntro: 'Good digital work is not just about making something look polished. It should solve a real problem and make the experience better for the people using it.',
    step1: 'Understand', step1d: 'Clarify the business goal, audience, and the main problem to solve.', step2: 'Plan', step2d: 'Choose a focused direction and prioritize what will make the biggest difference.', step3: 'Build', step3d: 'Create a responsive, maintainable solution and test the key interactions.', step4: 'Improve', step4d: 'Review the result and identify practical next improvements.',
    sectionAbout: 'A LITTLE ABOUT MY WORK', aboutTitle: 'Technology should make business simpler.', aboutText: 'My work spans website development, improving existing experiences, and exploring practical ways to connect websites with AI-powered workflows. I value clear communication, thoughtful details, and solutions that are maintainable after launch.',
    principle1: 'User-first decisions', principle2: 'Maintainable implementation', principle3: 'Practical over complicated',
    contactLabel: 'HAVE A PROJECT IN MIND?', contactTitle: 'Let’s make the next step clearer.', contactText: 'Tell me what you’re building or what is not working as well as it should. We can start with the problem and work toward a practical solution.',
    name: 'Your name', email: 'Your email', message: 'A little about your project', send: 'Prepare message', formNote: 'This demo form saves a draft in this browser only. It does not send or upload your information.', saved: 'Draft saved in this browser', copyEmail: 'Copy email', emailCopied: 'Email copied', footer: 'Built with care · Designed to be useful', backTop: 'Back to top',
    nameRequired: 'Please add your name.', emailRequired: 'Please enter a valid email address.', messageRequired: 'Please add a short message.',
    conceptNote: 'Concept only — not a live client project', noLive: 'Preview not published yet'
  },
  fa: {
    navProjects: 'نمونه‌کارها', navServices: 'خدمات', navAbout: 'رویکرد من', navContact: 'تماس',
    eyebrow: 'توسعه وب · بهینه‌سازی · هوش مصنوعی کاربردی',
    hero1: 'تجربه‌های دیجیتال', hero2: 'برای نتیجه بهتر.',
    intro: 'وب‌سایت‌هایی طراحی و بهبود می‌دهم که به کسب‌وکارهای کوچک کمک می‌کنند خدماتشان را بهتر معرفی کنند، اعتماد بسازند و مسیر اقدام مشتری را ساده‌تر کنند.',
    ctaProjects: 'دیدن نمونه‌کارها', ctaContact: 'گفت‌وگو کنیم', availability: 'آماده همکاری پروژه‌ای',
    mini1: 'طراحی سایت و لندینگ‌پیج', mini2: 'بهبود تجربه کاربری و عملکرد', mini3: 'هوش مصنوعی و اتوماسیون کاربردی',
    sectionLabel: 'نمونه‌کارهای منتخب', projectsTitle: 'پروژه‌هایی با هدف مشخص.', projectsIntro: 'چند نمونه از نگاه من به ساختار، کاربردپذیری و جزئیاتی که استفاده از سایت را ساده‌تر می‌کنند.',
    live: 'مشاهده سایت', source: 'کد پروژه', concept: 'طرح مفهومی',
    sectionServices: 'چطور می‌توانم کمک کنم', servicesTitle: 'از وب‌سایتت بهتر نتیجه بگیر.', servicesIntro: 'بهبودهای کاربردی بر اساس هدف کسب‌وکارت؛ نه استفاده از فناوری صرفاً برای پیچیده‌تر کردن کار.',
    service1: 'طراحی و توسعه وب‌سایت', service1d: 'طراحی سایت کسب‌وکار و لندینگ‌پیج واکنش‌گرا با ساختار روشن، چیدمان قابل‌استفاده و مسیر مشخص برای کاربر.',
    service2: 'بهینه‌سازی وب‌سایت', service2d: 'بررسی مسیرهای دسترسی، تجربه موبایل، ساختار صفحات و نقاط اصطکاک و سپس اولویت‌بندی اصلاحات مؤثر.',
    service3: 'هوش مصنوعی و اتوماسیون', service3d: 'استفاده از ابزارهای هوش مصنوعی و اتوماسیون سبک برای کاهش کارهای تکراری و ساده‌تر کردن فرایندها.',
    service4: 'بهبود رابط و تجربه کاربری', service4d: 'طراحی رابطی که فهم آن آسان‌تر باشد، اقدامات مهم بهتر دیده شوند و اطلاعات سریع‌تر قابل بررسی باشند.',
    sectionApproach: 'رویکرد کاری من', approachTitle: 'فکر روشن؛ اجرای کاربردی.', approachIntro: 'کار دیجیتال خوب فقط ظاهر مرتب نیست. باید مسئله‌ای واقعی را حل کند و تجربه افرادی را که از آن استفاده می‌کنند بهتر کند.',
    step1: 'شناخت', step1d: 'هدف کسب‌وکار، مخاطب و مسئله اصلی را مشخص می‌کنیم.', step2: 'برنامه‌ریزی', step2d: 'مسیر مناسب را انتخاب و کارهای پُرتأثیرتر را اولویت‌بندی می‌کنیم.', step3: 'اجرا', step3d: 'راهکاری واکنش‌گرا و قابل نگهداری می‌سازیم و تعاملات اصلی را آزمایش می‌کنیم.', step4: 'بهبود', step4d: 'نتیجه را بررسی می‌کنیم و قدم‌های بعدی را مشخص می‌کنیم.',
    sectionAbout: 'درباره کار من', aboutTitle: 'فناوری باید کار را ساده‌تر کند.', aboutText: 'حوزه کار من توسعه وب‌سایت، بهبود تجربه سایت‌های موجود و بررسی روش‌های کاربردی اتصال وب‌سایت به فرایندهای مبتنی بر هوش مصنوعی است. ارتباط شفاف، توجه به جزئیات و راهکارهای قابل نگهداری برایم اهمیت دارند.',
    principle1: 'تصمیم‌گیری با محوریت کاربر', principle2: 'پیاده‌سازی قابل نگهداری', principle3: 'کاربردی، نه پیچیده',
    contactLabel: 'پروژه‌ای در ذهن داری؟', contactTitle: 'قدم بعدی را روشن‌تر کنیم.', contactText: 'از کاری که می‌خواهی انجام بدهی یا مشکلی که در سایتت داری بگو. می‌توانیم از شناخت مسئله شروع کنیم و به راهکاری عملی برسیم.',
    name: 'نام شما', email: 'ایمیل شما', message: 'کمی درباره پروژه‌تان بنویسید', send: 'آماده‌سازی پیام', formNote: 'این فرم نمایشی، پیش‌نویس را فقط در مرورگر همین دستگاه ذخیره می‌کند؛ اطلاعات ارسال نمی‌شود.', saved: 'پیش‌نویس در همین مرورگر ذخیره شد', copyEmail: 'کپی ایمیل', emailCopied: 'ایمیل کپی شد', footer: 'با دقت ساخته شده؛ برای کاربرد واقعی', backTop: 'بازگشت به بالا',
    nameRequired: 'لطفاً نام خود را وارد کنید.', emailRequired: 'لطفاً یک ایمیل معتبر وارد کنید.', messageRequired: 'لطفاً توضیح کوتاهی درباره پروژه بنویسید.',
    conceptNote: 'طرح مفهومی؛ پروژه مشتری فعال نیست', noLive: 'پیش‌نمایش هنوز منتشر نشده'
  }
};

function App() {
  const [lang, setLang] = useState('en');
  const [theme, setTheme] = useState(() => { try { return localStorage.getItem('portfolio-theme') || 'dark'; } catch (_) { return 'dark'; } });
  const [mobileOpen, setMobileOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [formState, setFormState] = useState({ status: '', error: '' });
  const [copied, setCopied] = useState(false);
  const t = copy[lang];
  const isFa = lang === 'fa';
  function toggleTheme() { setTheme(current => { const next = current === 'dark' ? 'light' : 'dark'; try { localStorage.setItem('portfolio-theme', next); } catch (_) {} return next; }); }
  const emailAddress = 'hello@example.com'; // Replace with your professional email before publishing.

  function switchLanguage(next) {
    setLang(next);
    document.documentElement.lang = next;
    document.documentElement.dir = next === 'fa' ? 'rtl' : 'ltr';
  }
  function updateField(event) { setForm({ ...form, [event.target.name]: event.target.value }); setFormState({ status: '', error: '' }); }
  function submitForm(event) {
    event.preventDefault();
    if (!form.name.trim()) return setFormState({ status: '', error: t.nameRequired });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) return setFormState({ status: '', error: t.emailRequired });
    if (!form.message.trim()) return setFormState({ status: '', error: t.messageRequired });
    try { localStorage.setItem('portfolio-contact-draft', JSON.stringify({ ...form, savedAt: new Date().toISOString() })); } catch (_) { /* Browser storage may be disabled. */ }
    setFormState({ status: 'saved', error: '' });
  }
  async function copyEmail() {
    try { await navigator.clipboard.writeText(emailAddress); setCopied(true); setTimeout(() => setCopied(false), 1800); }
    catch (_) { window.location.href = `mailto:${emailAddress}`; }
  }

  return <div className={`site theme-${theme} ${isFa ? 'rtl' : ''}`}>
    <div className="topline"><span className="topline-dot" /> {t.availability}<span className="topline-right">{t.eyebrow}</span></div>
    <header className="header shell">
      <a className="brand" href="#top" aria-label="Home"><span className="brand-mark">D<span>.</span></span><span className="brand-text">DEV<span> / WEB + AI</span></span></a>
      <nav className={`nav ${mobileOpen ? 'nav-open' : ''}`}>
        <a href="#projects" onClick={() => setMobileOpen(false)}>{t.navProjects}</a><a href="#services" onClick={() => setMobileOpen(false)}>{t.navServices}</a><a href="#approach" onClick={() => setMobileOpen(false)}>{t.navAbout}</a><a href="#contact" onClick={() => setMobileOpen(false)}>{t.navContact}</a>
      </nav>
      <div className="header-actions"><button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={theme === 'dark' ? (isFa ? 'فعال کردن حالت روز' : 'Switch to light mode') : (isFa ? 'فعال کردن حالت شب' : 'Switch to dark mode')} title={theme === 'dark' ? (isFa ? 'حالت روز' : 'Light mode') : (isFa ? 'حالت شب' : 'Dark mode')}>{theme === 'dark' ? <Sun size={18}/> : <Moon size={18}/>}</button><div className="language-switch" aria-label="Choose language"><button className={lang === 'en' ? 'active' : ''} onClick={() => switchLanguage('en')}>EN</button><span>/</span><button className={lang === 'fa' ? 'active' : ''} onClick={() => switchLanguage('fa')}>فا</button></div><button className="menu-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation">{mobileOpen ? <X size={21}/> : <Menu size={21}/>}</button></div>
    </header>

    <main id="top">
      <section className="hero shell">
        <div className="hero-copy"><div className="eyebrow"><span className="eyebrow-line" />{t.eyebrow}</div><h1>{t.hero1}<br/><span>{t.hero2}</span></h1><p className="hero-intro">{t.intro}</p><div className="hero-actions"><a className="button button-primary" href="#projects">{t.ctaProjects}<ArrowDownRight size={17}/></a><a className="button button-quiet" href="#contact">{t.ctaContact}<ArrowUpRight size={17}/></a></div><div className="hero-proof"><div className="proof-avatars"><span>W</span><span>UX</span><span>AI</span></div><span>{isFa ? 'توسعه وب، تجربه کاربری و راهکارهای کاربردی' : 'Web, user experience & practical solutions'}</span></div></div>
        <div className="hero-art" aria-label="Abstract digital workspace illustration"><div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/><div className="art-core"><div className="core-top"><span/><span/><span/><b>studio / 01</b></div><div className="core-content"><div className="code-line short"/><div className="code-line medium"/><div className="code-line long"/><div className="code-line medium accent"/><div className="code-line short"/><div className="code-cursor"/></div><div className="core-footer"><span>BUILD</span><span>·</span><span>TEST</span><span>·</span><span>IMPROVE</span></div></div><div className="float-card float-card-top"><span className="float-icon purple"><Gauge size={17}/></span><span><b>UX / UI</b><small>Clearer journeys</small></span><i className="status-dot"/></div><div className="float-card float-card-bottom"><span className="float-icon green"><Zap size={17}/></span><span><b>AI workflow</b><small>Less repetitive work</small></span><ArrowUpRight size={15}/></div><div className="art-cross cross-a">+</div><div className="art-cross cross-b">+</div><div className="art-caption">IDEAS → INTERFACES → IMPACT</div></div>
        <div className="hero-bottom"><div className="hero-mini"><Code2 size={18}/><span>{t.mini1}</span></div><div className="hero-mini"><MonitorSmartphone size={18}/><span>{t.mini2}</span></div><div className="hero-mini"><Workflow size={18}/><span>{t.mini3}</span></div></div>
      </section>

      <section id="projects" className="section shell"><div className="section-head"><div><div className="section-label"><span>01</span>{t.sectionLabel}</div><h2>{t.projectsTitle}</h2></div><p>{t.projectsIntro}</p></div>
        <div className="projects-grid">{projects.map((project) => <article className={`project-card project-${project.visual}`} key={project.number}>
          <div className="project-visual">
            <div className="project-topline"><span>PROJECT / {project.number}</span><span className={project.visual === 'dashboard' ? 'concept-tag' : 'live-tag'}>{project.visual === 'dashboard' ? t.concept : 'LIVE SITE PREVIEW'}</span></div>
            {project.url ? <div className="live-preview">
              <iframe src={project.url} title={`${project.title.en} live website preview`} loading="lazy" tabIndex="-1" aria-hidden="true" />
              <a className="preview-open" href={project.url} target="_blank" rel="noreferrer">{t.live} <ExternalLink size={13}/></a>
            </div> : <div className="dash-mock"><div className="dash-sidebar"><div className="dash-logo">N<span>.</span></div><span className="dash-side-active">▦</span><span>◷</span><span>⌁</span><span>⚙</span></div><div className="dash-main"><div className="dash-title"><span>Business overview</span><b>↗</b></div><div className="dash-metrics"><div><small>VISITORS</small><b>2,480</b><i>↗ 12.8%</i></div><div><small>CONVERSION</small><b>3.6%</b><i>↗ 0.8%</i></div></div><div className="dash-chart"><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/></div><div className="dash-bottom"><span/><span/><span/></div></div><span className="concept-watermark">CONCEPT ONLY</span></div>}
          </div>
          <div className="project-info"><div className="project-meta"><span>{project.type}</span><span>{project.number} / 03</span></div><h3>{project.title[lang]}</h3><p>{project.description[lang]}</p><div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-links">{project.url ? <><a href={project.url} target="_blank" rel="noreferrer">{t.live}<ExternalLink size={14}/></a><a href={project.repo} target="_blank" rel="noreferrer">{t.source}<Code2 size={14}/></a></> : <span className="concept-note"><Sparkles size={14}/>{t.conceptNote}</span>}</div></div>
        </article>)}</div>
      </section>

      <section id="services" className="section section-muted"><div className="shell"><div className="section-head"><div><div className="section-label"><span>02</span>{t.sectionServices}</div><h2>{t.servicesTitle}</h2></div><p>{t.servicesIntro}</p></div><div className="services-grid">
        <article className="service-card"><div className="service-icon"><Globe2 size={21}/></div><span className="service-number">01</span><h3>{t.service1}</h3><p>{t.service1d}</p><div className="service-line"/></article>
        <article className="service-card"><div className="service-icon"><Gauge size={21}/></div><span className="service-number">02</span><h3>{t.service2}</h3><p>{t.service2d}</p><div className="service-line"/></article>
        <article className="service-card"><div className="service-icon"><Workflow size={21}/></div><span className="service-number">03</span><h3>{t.service3}</h3><p>{t.service3d}</p><div className="service-line"/></article>
        <article className="service-card"><div className="service-icon"><Layers3 size={21}/></div><span className="service-number">04</span><h3>{t.service4}</h3><p>{t.service4d}</p><div className="service-line"/></article>
      </div></div></section>

      <section id="approach" className="section shell"><div className="section-head"><div><div className="section-label"><span>03</span>{t.sectionApproach}</div><h2>{t.approachTitle}</h2></div><p>{t.approachIntro}</p></div><div className="process-grid">{[{n:'01',title:t.step1,desc:t.step1d,icon:<Layers3 size={20}/>},{n:'02',title:t.step2,desc:t.step2d,icon:<ShieldCheck size={20}/>},{n:'03',title:t.step3,desc:t.step3d,icon:<Code2 size={20}/>},{n:'04',title:t.step4,desc:t.step4d,icon:<Gauge size={20}/> }].map(item=><article className="process-step" key={item.n}><div className="process-top"><span>{item.n}</span>{item.icon}</div><h3>{item.title}</h3><p>{item.desc}</p></article>)}</div>
        <div className="about-band"><div className="about-symbol"><span>D.</span><i/><i/><i/></div><div className="about-content"><div className="section-label"><span>04</span>{t.sectionAbout}</div><h2>{t.aboutTitle}</h2><p>{t.aboutText}</p><div className="principles"><span><CheckCircle2 size={15}/>{t.principle1}</span><span><CheckCircle2 size={15}/>{t.principle2}</span><span><CheckCircle2 size={15}/>{t.principle3}</span></div></div></div>
      </section>

      <section id="contact" className="contact-section"><div className="shell contact-grid"><div className="contact-copy"><div className="section-label"><span>05</span>{t.contactLabel}</div><h2>{t.contactTitle}</h2><p>{t.contactText}</p><div className="contact-email"><div className="contact-email-icon"><Mail size={19}/></div><div><small>EMAIL</small><strong>{emailAddress}</strong></div><button onClick={copyEmail} aria-label={t.copyEmail}>{copied ? <Check size={17}/> : <Copy size={17}/>}</button></div><span className="email-hint">{copied ? t.emailCopied : t.copyEmail}</span></div>
        <form className="contact-form" onSubmit={submitForm} noValidate><div className="form-heading"><span>{isFa ? 'شروع یک گفت‌وگوی کاری' : 'START A CONVERSATION'}</span><Send size={18}/></div><label>{t.name}<input name="name" value={form.name} onChange={updateField} placeholder={isFa ? 'نام' : 'Jane Smith'} autoComplete="name"/></label><label>{t.email}<input name="email" type="email" value={form.email} onChange={updateField} placeholder="you@company.com" autoComplete="email"/></label><label>{t.message}<textarea name="message" value={form.message} onChange={updateField} placeholder={isFa ? 'چه چیزی را می‌خواهید بسازید یا بهتر کنید؟' : 'What would you like to build or improve?'} rows="4"/></label>{formState.error && <p className="form-error" role="alert">{formState.error}</p>}{formState.status === 'saved' && <p className="form-success" role="status"><CheckCircle2 size={16}/>{t.saved}</p>}<button className="button button-primary form-submit" type="submit">{t.send}<ArrowUpRight size={17}/></button><p className="form-note">{t.formNote}</p></form>
      </div></section>
    </main>
    <footer className="footer shell"><a className="brand" href="#top"><span className="brand-mark">D<span>.</span></span><span className="brand-text">DEV<span> / WEB + AI</span></span></a><p>{t.footer} <span>© {new Date().getFullYear()}</span></p><a href="#top" className="back-top">{t.backTop}<ArrowUpRight size={14}/></a></footer>
  </div>;
}

createRoot(document.getElementById('root')).render(<App />);
