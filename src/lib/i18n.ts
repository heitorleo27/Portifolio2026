export type Lang = "en" | "pt" | "es";

export const translations = {
  en: {
    nav: { home: "Home", about: "About", experience: "Experience", education: "Education", skills: "Skills", projects: "Projects", languages: "Languages", contact: "Contact" },
    hero: {
      greeting: "Hello, I'm",
      name: "Heitor Novaes",
      title: "QA Intern / Software Development Student",
      intro: "Hello, I'm Heitor. I work with software testing and I am learning more about QA and development.",
      cta: "Get in touch",
      ctaSecondary: "See my work",
      typing: ["QA Intern", "Software Testing", "Future QA Engineer"],
    },
    about: {
      title: "About Me",
      text: "I am a student of Systems Analysis and Development. I have experience with software testing and I enjoy working with technology. I like to learn new things and improve my skills every day.",
    },
    experience: {
      title: "Experience",
      present: "Present",
      achievement: "Achievement",
      jobs: [
        {
          role: "QA Intern",
          company: "Di2win Tecnologia",
          period: "Nov 2024 – Present",
          tasks: ["Test web applications and APIs", "Use Postman and browser DevTools", "Find bugs and report problems", "Work with developers in sprint cycles", "Help improve system quality"],
          achievement: "I found a serious problem in system testing that caused different results for the client. I helped fix the issue and the team solved the problem.",
        },
        {
          role: "Administrative Assistant",
          company: "E. Nunes Contábil",
          period: "2020 – 2024",
          tasks: ["Work with clients and documents", "Payroll and tax tasks", "Organized files and processes", "Helped move documents to cloud", "Improved system and workflow"],
        },
      ],
    },
    education: {
      title: "Education",
      items: [
        { course: "Systems Analysis and Development", school: "Senac", period: "2024 – 2026" },
        { course: "Business Administration", school: "IESO", period: "2016 – 2020" },
      ],
    },
    skills: {
      title: "Skills",
      technical: "Technical",
      soft: "Soft Skills",
      tech: ["HTML, CSS, JavaScript (basic/intermediate)", "Postman (API testing)", "Git and GitHub"],
      softList: ["Teamwork", "Fast learner", "Attention to detail", "Good communication"],
    },
    projects: {
  title: "Projects",
  items: [
    {
      title: "Highlight Project – Porto Digital Residency",
      description: "We developed a web solution for CESAR, a platform to support psycho-pedagogical activities. I worked on development support, testing, and project presentation.",
    },
    {
      title: "Integrative Projects – Senac College",
      description: "During the course, we receive real problems and work in teams to build web systems or apps, participating in all stages of the solution.",
    }
  ],
    },
    languages: {
      title: "Languages",
      items: [
        { name: "Portuguese", level: "Native" },
        { name: "English", level: "Intermediate" },
        { name: "Spanish", level: "Basic" },
      ],
    },
    contact: {
      title: "Contact",
      subtitle: "Let's talk! Feel free to reach out.",
      emailLabel: "Email",
    },
    footer: "Built with care by Heitor Novaes",
  },
  pt: {
    nav: { home: "Início", about: "Sobre", experience: "Experiência", education: "Educação", skills: "Habilidades", projects: "Projetos", languages: "Idiomas", contact: "Contato" },
    hero: {
      greeting: "Olá, eu sou",
      name: "Heitor Novaes",
      title: "Estagiário de QA / Estudante de Desenvolvimento de Software",
      intro: "Olá, eu sou Heitor. Trabalho com testes de software e estou aprendendo mais sobre QA e desenvolvimento.",
      cta: "Entre em contato",
      ctaSecondary: "Ver meu trabalho",
      typing: ["Estagiário de QA", "Testes de Software", "Futuro Engenheiro de QA"],
    },
    about: {
      title: "Sobre Mim",
      text: "Sou estudante de Análise e Desenvolvimento de Sistemas. Tenho experiência com testes de software e gosto de trabalhar com tecnologia. Gosto de aprender coisas novas e melhorar minhas habilidades todos os dias.",
    },
    experience: {
      title: "Experiência",
      present: "Atual",
      achievement: "Conquista",
      jobs: [
        {
          role: "Estagiário de QA",
          company: "Di2win Tecnologia",
          period: "Nov 2024 – Atual",
          tasks: ["Testar aplicações web e APIs", "Usar Postman e DevTools do navegador", "Encontrar bugs e reportar problemas", "Trabalhar com desenvolvedores em sprints", "Ajudar a melhorar a qualidade do sistema"],
          achievement: "Encontrei um problema sério em testes de sistema que causava resultados diferentes para o cliente. Ajudei a resolver e a equipe corrigiu o problema.",
        },
        {
          role: "Auxiliar Administrativo",
          company: "E. Nunes Contábil",
          period: "2020 – 2024",
          tasks: ["Trabalhar com clientes e documentos", "Folha de pagamento e tarefas fiscais", "Organizar arquivos e processos", "Ajudar a migrar documentos para a nuvem", "Melhorar sistema e fluxo de trabalho"],
        },
      ],
    },
    education: {
      title: "Educação",
      items: [
        { course: "Análise e Desenvolvimento de Sistemas", school: "Senac", period: "2024 – 2026" },
        { course: "Administração de Empresas", school: "IESO", period: "2016 – 2020" },
      ],
    },
    skills: {
      title: "Habilidades",
      technical: "Técnicas",
      soft: "Comportamentais",
      tech: ["HTML, CSS, JavaScript (básico/intermediário)", "Postman (testes de API)", "Git e GitHub"],
      softList: ["Trabalho em equipe", "Aprendizado rápido", "Atenção aos detalhes", "Boa comunicação"],
    },
    projects: {
  title: "Projetos",
  items: [
    {
      title: "Projeto destaque na residência do Porto Digital",
      description: "Desenvolvemos uma solução web para o CESAR, uma plataforma de apoio psicopedagógico, onde participei do desenvolvimento, testes e apresentação do projeto.",
    },
    {
      title: "Projetos Integradores na Faculdade Senac",
      description: "Ao longo do curso, recebemos temas e problemáticas reais para desenvolver soluções, participando ativamente da criação de sistemas web ou aplicativos.",
    }
  ],
    },
    languages: {
      title: "Idiomas",
      items: [
        { name: "Português", level: "Nativo" },
        { name: "Inglês", level: "Intermediário" },
        { name: "Espanhol", level: "Básico" },
      ],
    },
    contact: {
      title: "Contato",
      subtitle: "Vamos conversar! Sinta-se à vontade para entrar em contato.",
      emailLabel: "Email",
    },
    footer: "Feito com carinho por Heitor Novaes",
  },
  es: {
    nav: { home: "Inicio", about: "Sobre mí", experience: "Experiencia", education: "Educación", skills: "Habilidades", projects: "Proyectos", languages: "Idiomas", contact: "Contacto" },
    hero: {
      greeting: "Hola, soy",
      name: "Heitor Novaes",
      title: "Pasante de QA / Estudiante de Desarrollo de Software",
      intro: "Hola, soy Heitor. Trabajo con pruebas de software y estoy aprendiendo más sobre QA y desarrollo.",
      cta: "Contáctame",
      ctaSecondary: "Ver mi trabajo",
      typing: ["Pasante de QA", "Pruebas de Software", "Futuro Ingeniero de QA"],
    },
    about: {
      title: "Sobre Mí",
      text: "Soy estudiante de Análisis y Desarrollo de Sistemas. Tengo experiencia con pruebas de software y me gusta trabajar con tecnología. Me gusta aprender cosas nuevas y mejorar mis habilidades cada día.",
    },
    experience: {
      title: "Experiencia",
      present: "Actual",
      achievement: "Logro",
      jobs: [
        {
          role: "Pasante de QA",
          company: "Di2win Tecnologia",
          period: "Nov 2024 – Actual",
          tasks: ["Probar aplicaciones web y APIs", "Usar Postman y DevTools del navegador", "Encontrar errores y reportar problemas", "Trabajar con desarrolladores en sprints", "Ayudar a mejorar la calidad del sistema"],
          achievement: "Encontré un problema serio en pruebas que causaba resultados diferentes para el cliente. Ayudé a corregirlo y el equipo resolvió el problema.",
        },
        {
          role: "Asistente Administrativo",
          company: "E. Nunes Contábil",
          period: "2020 – 2024",
          tasks: ["Trabajar con clientes y documentos", "Nómina y tareas fiscales", "Organizar archivos y procesos", "Ayudar a migrar documentos a la nube", "Mejorar sistema y flujo de trabajo"],
        },
      ],
    },
    education: {
      title: "Educación",
      items: [
        { course: "Análisis y Desarrollo de Sistemas", school: "Senac", period: "2024 – 2026" },
        { course: "Administración de Empresas", school: "IESO", period: "2016 – 2020" },
      ],
    },
    skills: {
      title: "Habilidades",
      technical: "Técnicas",
      soft: "Blandas",
      tech: ["HTML, CSS, JavaScript (básico/intermedio)", "Postman (pruebas de API)", "Git y GitHub"],
      softList: ["Trabajo en equipo", "Aprendizaje rápido", "Atención al detalle", "Buena comunicación"],
    },
    projects: {
  title: "Proyectos",
  items: [
    {
      title: "Proyecto destacado – Residencia Porto Digital",
      description: "Desarrollamos una solución web para CESAR, una plataforma de apoyo psicopedagógico. Participé en el desarrollo, pruebas y presentación del proyecto.",
    },
    {
      title: "Proyectos Integradores – Facultad Senac",
      description: "Durante el curso, trabajamos con problemas reales para desarrollar soluciones, participando activamente en la creación de sistemas web o aplicaciones.",
    }
  ],
    },
    languages: {
      title: "Idiomas",
      items: [
        { name: "Portugués", level: "Nativo" },
        { name: "Inglés", level: "Intermedio" },
        { name: "Español", level: "Básico" },
      ],
    },
    contact: {
      title: "Contacto",
      subtitle: "¡Hablemos! No dudes en contactarme.",
      emailLabel: "Correo",
    },
    footer: "Hecho con cariño por Heitor Novaes",
  },
} as const;
