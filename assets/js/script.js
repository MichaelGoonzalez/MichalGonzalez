/* ==========================================
   PORTFOLIO — Maicol Stiven Alarcón González
   portfolio/assets/js/script.js
   ========================================== */

const translations = {
  nav_about: { en: 'About', es: 'Sobre Mí' },
  nav_skills: { en: 'Skills', es: 'Habilidades' },
  nav_projects: { en: 'Projects', es: 'Proyectos' },
  nav_services: { en: 'Services', es: 'Servicios' },
  nav_contact: { en: 'Contact', es: 'Contacto' },
  hero_badge: { en: 'Available for Work · Remote', es: 'Disponible para Trabajar · Remoto' },
  hero_greeting: { en: "Hi, I'm", es: 'Hola, soy' },
  hero_title: { en: 'Full Stack Developer & AI Integration Specialist', es: 'Full Stack Developer & Especialista en Integración de IA' },
  hero_location: { en: '📍 Neiva, Colombia · Open to Remote', es: '📍 Neiva, Colombia · Disponible Remoto' },
  hero_tagline: { en: 'I build modern web applications and AI-powered systems that solve real problems — from social impact sites to computer vision for industry.', es: 'Construyo aplicaciones web modernas y sistemas impulsados por IA que resuelven problemas reales — desde sitios de impacto social hasta visión artificial para la industria.' },
  hero_cta_projects: { en: '▶ View Projects', es: '▶ Ver Proyectos' },
  hero_cta_contact: { en: '✉ Contact', es: '✉ Contactar' },
  hero_stat_years: { en: 'Years Experience', es: 'Años de Experiencia' },
  hero_stat_projects: { en: 'Projects Delivered', es: 'Proyectos Entregados' },
  hero_stat_productivity: { en: 'AI Productivity Multiplier', es: 'Multiplicador de Productividad IA' },
  about_label: { en: 'About Me', es: 'Sobre Mí' },
  about_title: { en: 'Colombian Developer <br>Building at the Intersection of Web & AI', es: 'Desarrollador Colombiano <br>Construyendo en la Intersección de Web e IA' },
  about_p1: { en: "Colombian developer with 3+ years of experience working at the intersection of modern web development and applied artificial intelligence. I've built everything from social impact websites that amplify marginalized voices to computer vision systems that automate industrial logistics.", es: 'Desarrollador colombiano con más de 3 años de experiencia trabajando en la intersección entre el desarrollo web moderno y la inteligencia artificial aplicada. He construido desde sitios web con impacto social que amplifican voces marginadas hasta sistemas de visión por computadora que automatizan la logística industrial.' },
  about_p2: { en: "My differentiator: I multiply my productivity ×2 using AI agents throughout the development lifecycle. This lets me deliver real solutions to real problems — faster, without cutting corners. I don't just write code; I build systems that make a difference.", es: 'Mi diferencial: multiplico mi productividad ×2 usando agentes de IA durante todo el ciclo de desarrollo. Esto me permite entregar soluciones reales a problemas reales — más rápido, sin atajos. No solo escribo código; construyo sistemas que marcan la diferencia.' },
  about_p3: { en: 'Founder of SurLab Studio — a technology studio based in Neiva, Huila, Colombia. Because I believe the south of Colombia has world-class tech talent, and I am proving it with every project.', es: 'Fundador de SurLab Studio — un estudio de tecnología con sede en Neiva, Huila, Colombia. Porque creo que el sur de Colombia tiene talento tech de clase mundial, y lo demuestro con cada proyecto.' },
  about_h1_title: { en: 'Angular & Next.js', es: 'Angular y Next.js' },
  about_h1_desc: { en: '3+ years building production apps with Angular and Next.js — from SPAs to SEO-optimized static sites.', es: '3+ años construyendo apps de producción con Angular y Next.js — desde SPAs hasta sitios estáticos optimizados para SEO.' },
  about_h2_title: { en: 'Computer Vision & AI', es: 'Visión por Computadora e IA' },
  about_h2_desc: { en: 'YOLOv8, ByteTrack, active learning, multi-camera tracking, and AI agents integrated into real-world applications.', es: 'YOLOv8, ByteTrack, active learning, tracking multi-cámara y agentes de IA integrados en aplicaciones del mundo real.' },
  about_h3_title: { en: '×2 Productivity', es: 'Productividad ×2' },
  about_h3_desc: { en: 'AI-accelerated workflows powered by custom agents — I ship faster without sacrificing quality.', es: 'Flujos acelerados por IA impulsados por agentes personalizados — entrego más rápido sin sacrificar calidad.' },
  about_h4_title: { en: 'Global Vision', es: 'Visión Global' },
  about_h4_desc: { en: 'Colombian developer proving that world-class tech talent exists everywhere — from Neiva to the world.', es: 'Desarrollador colombiano demostrando que el talento tech de clase mundial existe en todas partes — desde Neiva para el mundo.' },
  skills_label: { en: 'Expertise', es: 'Experiencia' },
  skills_title: { en: 'Technical Skills', es: 'Habilidades Técnicas' },
  skills_desc: { en: 'A practical toolkit spanning frontend, backend, AI, and data — built from real projects that ship to production.', es: 'Un conjunto práctico de herramientas que abarca frontend, backend, IA y datos — construido desde proyectos reales que llegan a producción.' },
  skills_frontend: { en: 'Frontend', es: 'Frontend' },
  skills_backend: { en: 'Backend', es: 'Backend' },
  skills_ai: { en: 'AI & Computer Vision', es: 'IA y Visión Artificial' },
  skills_data: { en: 'Data & DevOps', es: 'Datos y DevOps' },
  projects_label: { en: 'Featured Work', es: 'Trabajo Destacado' },
  projects_title: { en: 'Projects', es: 'Proyectos' },
  projects_desc: { en: 'Real projects that solve real problems — from social impact websites to AI-powered computer vision systems.', es: 'Proyectos reales que resuelven problemas reales — desde sitios web de impacto social hasta sistemas de visión por computadora con IA.' },
  proj1_title: { en: 'Las Juanas Sur', es: 'Las Juanas Sur' },
  proj1_problem: { en: 'Impact: #1 on Google · Gender violence visibility', es: 'Impacto: #1 en Google · Visibilidad violencia de género' },
  proj1_desc: { en: 'Website for a feminist collective in Huila that maps and makes visible gender-based violence in the department. Ranks #1 on Google for its name. Distinctive visual design, SEO-optimized, fully responsive. A digital tool that amplifies marginalized voices.', es: 'Sitio web para una colectiva feminista del Huila que mapea y visibiliza las violencias de género en el departamento. Posiciona #1 en Google para su nombre. Diseño visual distintivo, SEO optimizado, completamente responsivo. Una herramienta digital que amplifica voces marginadas.' },
  proj1_demo: { en: 'Live Site →', es: 'Sitio Web →' },
  proj2_title: { en: 'IA-Tracking', es: 'IA-Tracking' },
  proj2_problem: { en: 'Impact: Real-time logistics automation', es: 'Impacto: Automatización logística en tiempo real' },
  proj2_desc: { en: 'Multi-camera computer vision system for package detection and tracking in logistics environments. Supports simultaneous RTSP streams, GPU batch processing, active learning for incremental retraining, and virtual line counting — all in real time using YOLOv8 and ByteTrack.', es: 'Sistema de visión por computadora multi-cámara para detección y seguimiento de paquetes en entornos logísticos. Soporta múltiples transmisiones RTSP simultáneas, procesamiento batch en GPU, active learning para re-entrenamiento incremental y conteo por líneas virtuales — todo en tiempo real usando YOLOv8 y ByteTrack.' },
  proj2_github: { en: 'GitHub →', es: 'GitHub →' },
  proj3_title: { en: 'Enterprise Solutions (NDA)', es: 'Proyectos Empresariales (NDA)' },
  proj3_problem: { en: 'Clients: Movistar Arena · Fenalco', es: 'Clientes: Movistar Arena · Fenalco' },
  proj3_desc: { en: 'Event management and enterprise systems for major Colombian clients including Movistar Arena and Fenalco, developed under contract with IPServices. Code under NDA — details available upon request.', es: 'Sistemas de gestión de eventos y soluciones empresariales para grandes clientes colombianos como Movistar Arena y Fenalco, desarrollados bajo contrato con IPServices. Código bajo NDA — detalles disponibles bajo solicitud.' },
  proj3_nda: { en: 'Private Contract', es: 'Contrato Privado' },
  services_label: { en: 'What I Offer', es: 'Lo Que Ofrezco' },
  services_title: { en: 'Services', es: 'Servicios' },
  services_desc: { en: 'From web development to AI-powered automation — I help businesses leverage technology to achieve more. Available for freelance, contract, and remote positions.', es: 'Desde desarrollo web hasta automatización con IA — ayudo a las empresas a aprovechar la tecnología para lograr más. Disponible para freelance, contrato y posiciones remotas.' },
  serv1_title: { en: 'Custom Web Development', es: 'Desarrollo Web a Medida' },
  serv1_desc: { en: 'Modern web applications built with Angular and Next.js, tailored to your business needs. From landing pages to enterprise platforms — production-ready, SEO-optimized, fully responsive.', es: 'Aplicaciones web modernas con Angular y Next.js, adaptadas a las necesidades de tu negocio. Desde landing pages hasta plataformas empresariales — listas para producción, optimizadas para SEO, completamente responsivas.' },
  serv2_title: { en: 'AI Integration', es: 'Integración de IA' },
  serv2_desc: { en: 'Integrate AI into your existing products — chatbots, intelligent agents, and automation powered by Gemini and OpenAI. I make your software smarter, not more complex.', es: 'Integra IA en tus productos existentes — chatbots, agentes inteligentes y automatización impulsados por Gemini y OpenAI. Hago tu software más inteligente, no más complejo.' },
  serv3_title: { en: 'Computer Vision Systems', es: 'Sistemas de Visión Artificial' },
  serv3_desc: { en: 'Custom vision systems for automation — object detection, tracking, and counting using YOLOv8 and deep learning. From logistics to industrial environments, I build systems that see.', es: 'Sistemas de visión personalizados para automatización — detección, seguimiento y conteo de objetos usando YOLOv8 y deep learning. Desde logística hasta entornos industriales, construyo sistemas que ven.' },
  serv4_title: { en: 'Technical Consulting', es: 'Consultoría Técnica' },
  serv4_desc: { en: 'Strategic advice on architecture, tech stack, and AI strategy. Helping teams make better technical decisions and build software that scales.', es: 'Asesoría estratégica en arquitectura, stack tecnológico y estrategia de IA. Ayudando a equipos a tomar mejores decisiones técnicas y construir software que escala.' },
  contact_label: { en: 'Get In Touch', es: 'Contáctame' },
  contact_title: { en: "Let's Work Together", es: 'Trabajemos Juntos' },
  contact_desc: { en: "Have a project in mind or just want to chat? Drop me a message and I'll get back to you within 24 hours.", es: '¿Tienes un proyecto en mente o solo quieres charlar? Envíame un mensaje y te responderé dentro de 24 horas.' },
  form_name: { en: 'Name', es: 'Nombre' },
  form_name_placeholder: { en: 'Your name', es: 'Tu nombre' },
  form_email: { en: 'Email', es: 'Correo' },
  form_email_placeholder: { en: 'your@email.com', es: 'tu@correo.com' },
  form_subject: { en: 'Subject', es: 'Asunto' },
  form_subject_placeholder: { en: 'What is this about?', es: '¿Sobre qué trata?' },
  form_message: { en: 'Message', es: 'Mensaje' },
  form_message_placeholder: { en: 'Tell me about your project...', es: 'Cuéntame sobre tu proyecto...' },
  form_submit: { en: 'Send Message →', es: 'Enviar Mensaje →' },
  contact_email_label: { en: 'Email', es: 'Correo' },
  contact_location_label: { en: 'Location', es: 'Ubicación' },
  contact_location: { en: 'Neiva, Colombia · Remote', es: 'Neiva, Colombia · Remoto' },
  contact_response_label: { en: 'Response Time', es: 'Tiempo de Respuesta' },
  contact_response: { en: 'Within 24 hours', es: 'Dentro de 24 horas' },
  contact_social: { en: 'Find me on', es: 'Encuéntrame en' },
  footer_rights: { en: 'All rights reserved.', es: 'Todos los derechos reservados.' },
  footer_top: { en: 'Back to Top ↑', es: 'Volver Arriba ↑' },
  hero_tag_terminal: { en: 'Full Stack Developer &amp; AI', es: 'Desarrollador Full Stack &amp; IA' },
  hero_desc: { en: 'Building solutions at the intersection of modern web development and applied artificial intelligence. From Neiva, for the world.', es: 'Construyo soluciones en la intersección del desarrollo web moderno y la inteligencia artificial aplicada. Desde Neiva, para el mundo.' },
  hero_music_label: { en: 'Currently building: IA-Tracking v2', es: 'Construyendo: IA-Tracking v2' }
};

let currentLang = localStorage.getItem('lang') || 'en';

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang === 'en' ? 'en' : 'es';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[key] && translations[key][lang]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.value = translations[key][lang];
      } else {
        el.innerHTML = translations[key][lang];
      }
    }
  });

  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    const attrDef = el.dataset.i18nAttr;
    if (attrDef) {
      const [key, attr] = attrDef.split(':');
      if (translations[key] && translations[key][lang]) {
        el.setAttribute(attr, translations[key][lang]);
      }
    }
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

applyLanguage(currentLang);

document.getElementById('langToggle').addEventListener('click', e => {
  const btn = e.target.closest('.lang-btn');
  if (!btn) return;
  const lang = btn.dataset.lang;
  if (lang === currentLang) return;
  applyLanguage(lang);
});

const nav = document.getElementById('nav');
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  menuBtn.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuBtn.textContent = '☰';
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const btn = this.querySelector('.btn-submit');
  const originalText = btn.textContent;
  btn.textContent = currentLang === 'en' ? 'Sending...' : 'Enviando...';
  btn.disabled = true;
  fetch(this.action, { method: 'POST', body: new FormData(this), headers: { 'Accept': 'application/json' } })
    .then(r => {
      if (r.ok) {
        btn.textContent = currentLang === 'en' ? 'Sent! ✅' : '¡Enviado! ✅';
        this.reset();
        setTimeout(() => { btn.textContent = originalText; btn.disabled = false; }, 3000);
      } else {
        throw new Error('Network response was not ok.');
      }
    }).catch(() => {
      btn.textContent = 'Error ❌';
      setTimeout(() => { btn.textContent = originalText; btn.disabled = false; }, 3000);
    });
});
