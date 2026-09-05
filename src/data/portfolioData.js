// ─────────────────────────────────────────────────────────────
// Edit everything in this file to update the site's content.
// No component code needs to change.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Habib Hussaini',
  roles: ['Full Stack Developer', 'MERN Stack Developer', 'Frontend Developer'],
  tagline: 'I build clean, scalable and professional web applications using modern technologies.',
  location: 'Karachi, Pakistan',
  availability: 'Open to freelance & full-time roles',
  email: 'habib033hussaini@gmail.com',
  phone: '+92 370 3242401',
  resumeUrl: '/mycv.pdf',
  photo: '/assets/about.jpg',
  socials: [
    { label: 'GitHub', href: 'https://github.com/Hussainihabib', icon: 'Github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/habib-hussaini-a3b78839a/', icon: 'Linkedin' },
    { label: 'Facebook', href: 'https://www.facebook.com/habib.hussaini.54584', icon: 'Facebook' },
  ],
}

export const about = {
  photo: '/assets/about.jpg',
  role: 'MERN Stack Developer',
  paragraph1:
    'I am a dedicated MERN Stack Developer focused on building modern, scalable, and user-centric web applications. With strong hands-on experience in developing RESTful APIs and responsive front-end interfaces, I enjoy transforming ideas into efficient and reliable digital solutions.',
  paragraph2:
    'I have a strong interest in clean code, performance optimization, and modern development practices. I continuously work on improving my skills by exploring new technologies, building real-world projects, and learning from the developer community. I believe consistency, curiosity, and continuous improvement are key to creating impactful web experiences.',
  highlights: [
    'Building RESTful APIs and responsive front-end interfaces',
    'Focused on clean code and performance optimization',
    'Full MERN stack: React, Node.js, Express, MongoDB',
    'Continuously learning modern development practices',
  ],
}

export const skills = [
  {
    category: 'Frontend',
    description: 'Building responsive and interactive user interfaces using modern frontend technologies.',
    icon: 'MonitorSmartphone',
    items: ['React', 'HTML', 'CSS', 'Tailwind', 'Bootstrap', 'Material UI (MUI)', 'JavaScript'],
  },
  {
    category: 'Backend',
    description: 'Creating secure and scalable server-side applications and APIs.',
    icon: 'Server',
    items: ['Node.js', 'Express', 'REST API', 'JWT'],
  },
  {
    category: 'Database',
    description: 'Designing efficient databases focused on performance and reliability.',
    icon: 'Database',
    items: ['MySQL', 'SQL Server', 'Firebase', 'MongoDB'],
  },
  {
    category: 'Tools & Deployment',
    description: 'Tools and platforms used for version control, design, and deployment.',
    icon: 'GitBranch',
    items: ['Git', 'GitHub', 'Postman', 'VS Code', 'Figma', 'Vercel'],
  },
]

export const projects = [

  {
    title: 'EduPredict - Education Analytics',
    description:
      'An educational analytics and prediction platform that analyzes student data, attendance, academic performance, and other educational records to provide meaningful insights and predictive analytics.',
    image: '/assets/edupredict.png',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Python', 'FastAPI', 'PySpark', 'MongoDB'],
    liveUrl: 'https://education-analytic-prediction.vercel.app/',
    githubUrl: 'https://github.com/Hussainihabib',
  },

  {
    title: 'Al Hussaini Garments Store',
    description:
      'A full-stack MERN e-commerce platform for Al Hussaini Garments featuring product management, shopping cart, authentication, orders, wishlist, admin dashboard, and a modern responsive shopping experience.',
    image: '/assets/garments-store.png',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
    liveUrl: 'https://alhussaini-garments-store.vercel.app/',
    githubUrl: 'https://github.com/Hussainihabib',
  },

  {
    title: 'Spotify Web Clone',
    description:
      'A modern Spotify-inspired music streaming web application featuring a responsive interface, music library, playlists, album artwork, playback controls, and an interactive user experience.',
    image: '/assets/spotify.png',
    tags: ['React', 'Vite', 'JavaScript', 'CSS', 'Music Player'],
    liveUrl: 'https://spotify-web-clone-eight.vercel.app/',
    githubUrl: 'https://github.com/Hussainihabib',
  },

  // {
  //   title: 'AI Medical Assistant',
  //   description:
  //     'A MERN-based AI Medical Assistant designed to provide intelligent healthcare assistance through symptom analysis, AI-powered responses, patient information management, and a user-friendly medical dashboard.',
  //   image: '/assets/ai-medical-assistant.png',
  //   tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'MERN', 'AI'],
  //   liveUrl: '',
  //   githubUrl: 'https://github.com/Hussainihabib',
  // },
  {
    title: 'Al Hussaini Garments',
    description:
      'A responsive garments website built using HTML, CSS, and JavaScript, showcasing products, designs, and brand details with a clean and user-friendly interface.',
    image: '/assets/ecommerce.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://hussainihabib.github.io/HABIB-HUSSAINI/',
    githubUrl: 'https://github.com/Hussainihabib',
  },
  {
    title: 'Mern Fitness Tracker',
    description:
      'A full-stack MERN fitness tracker that helps users monitor workouts, track progress, and maintain a healthy lifestyle through a clean, responsive, and user-friendly interface.',
    image: '/assets/dashboard..png',
    tags: ['React + Vite', 'Express.js', 'MongoDB Atlas', 'Node.js', 'Material UI'],
    liveUrl: 'https://fitnesstracker-beta-five.vercel.app',
    githubUrl: 'https://github.com/Hussainihabib',
  },
  {
    title: 'Nexus Aquarium',
    description:
      'A responsive aquarium website built using HTML, CSS, JavaScript, and Bootstrap, designed to showcase aquatic products and services with a clean, modern interface.',
    image: '/assets/portfolio.png',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    liveUrl: 'https://hussainihabib.github.io/aquariuamweb/index.html',
    githubUrl: 'https://github.com/Hussainihabib',
  },
  {
    title: 'Watch Hub App',
    description:
      'A modern mobile app for exploring and purchasing premium watches, offering a smooth user experience with elegant designs and seamless shopping.',
    image: '/assets/watch.png',
    tags: ['Flutter', 'Firebase'],
    liveUrl: 'https://watchhubapp.vercel.app/',
    githubUrl: 'https://github.com/Hussainihabib',
  },
]

export const experience = [
  {
    type: 'education',
    title: 'Advanced Diploma in Software Engineering',
    org: 'Aptech Learning Pakistan',
    period: '2023 – 2026',
    description:
      'Completed an advanced professional diploma focused on software development, problem-solving skills, and modern web technologies.',
  },
  {
    type: 'education',
    title: 'Intermediate in Pre-Engineering',
    org: 'Govt. Superior Science College',
    period: '2020 – 2022',
    description:
      'Studied core Pre-Engineering subjects including Mathematics, Physics, and Chemistry to build a strong academic foundation.',
  },
  {
    type: 'education',
    title: 'Matriculation in Computer Science',
    org: 'Sun Rise Children Academy',
    period: 'Completed 2020',
    description:
      'Built a strong base in computer studies, logical thinking, and basic programming concepts.',
  },
]

export const contact = {
  cards: [
    { label: 'Email', value: profile.email, icon: 'Mail' },
    { label: 'Phone', value: profile.phone, icon: 'Phone' },
    { label: 'Location', value: profile.location, icon: 'MapPin' },
  ],
}

export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Portfolio', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]
