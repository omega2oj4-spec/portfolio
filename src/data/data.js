// ── All portfolio data lives here ──────────────────────────────────

export const navLinks = ['home', 'about', 'skills', 'projects', 'blog', 'contact']

export const techIcons = [
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',          alt: 'HTML5' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',             alt: 'CSS3' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', alt: 'JavaScript' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', alt: 'TypeScript' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',           alt: 'React' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',          alt: 'Node.js' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',               alt: 'Git' },
]

export const stats = [
  { icon: '📅', val: '4+',   label: 'Years Experience' },
  { icon: '💻', val: '50+',  label: 'Projects Completed' },
  { icon: '😊', val: '30+',  label: 'Happy Clients' },
  { icon: '🏆', val: '100%', label: 'Client Satisfaction' },
]

export const skills = [
  { name: 'HTML',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',           pct: 95 },
  { name: 'React.js',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',            pct: 85 },
  { name: 'Node.js',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',           pct: 80 },
  { name: 'CSS',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',              pct: 90 },
  { name: 'Next.js',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',           pct: 80 },
  { name: 'Tailwind',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', pct: 90 },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',   pct: 90 },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',   pct: 85 },
  { name: 'Git',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',                pct: 85 },
]

export const projects = [
  { 
    num: '01', 
    title: 'ArtMind AI',  
    desc: 'An innovative AI-powered application exploring the intersection of art and mind. It leverages cutting-edge machine learning models to generate stunning visuals from user prompts, offering a seamless and highly intuitive creative experience.', 
    color: '#2563EB',
    github: 'https://github.com/omega2oj4-spec/artmind-ai',
    live: 'https://artmind-ai-blond.vercel.app/',
    image: 'https://artmind-ai-1.onrender.com/api/paintings/proxy-image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1578301978018-3005759f48f7%3Fq%3D80%26w%3D600%26auto%3Dformat%26fit%3Dcrop'
  },
  { 
    num: '02', 
    title: 'NestFind',  
    desc: 'A modern real estate and property finding platform with a clean user interface. It features advanced search filters, interactive maps, and detailed property listings to help users find their dream homes effortlessly and securely.', 
    color: '#8b5cf6', 
    featured: true,
    github: 'https://github.com/omega2oj4-spec/NestFind',
    live: 'https://nest-find-iota.vercel.app/',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/024/685/666/small/attractive-and-modern-house-generative-ai-free-photo.jpg'
  },
  {
    num: '03',
    title: 'MealDrop',
    desc: 'A modern food delivery platform ensuring quick and seamless restaurant ordering. Designed for maximum convenience, it offers real-time order tracking, secure payment gateways, and personalized recommendations for a top-tier dining experience at home.',
    color: '#10b981',
    live: 'https://mealdrop-project.vercel.app/',
    image: 'https://t3.ftcdn.net/jpg/02/84/32/20/360_F_284322024_XczTKa13C1DuCtV8DoBzixQvdOyfxGKL.jpg'
  },
  {
    num: '04',
    title: 'Car Rental App',
    desc: 'A comprehensive car rental booking service with a sleek and intuitive user interface. It streamlines the reservation process with flexible dates, instant availability checks, and a wide variety of vehicles to suit any travel need.',
    color: '#f59e0b',
    live: 'https://car-rental-eight-pink.vercel.app/',
    image: 'https://media.istockphoto.com/id/467103541/photo/car-rental-sign.jpg?s=612x612&w=0&k=20&c=pjd-9j9Q2SttZHyARb7VEnWMRvA3XHgywGg7gwIq3vQ='
  }
]

export const blogs = [
  { tag: 'React',   title: 'Building Scalable React Apps with TypeScript', desc: 'Learn how to structure large-scale React apps using TypeScript for better maintainability.', color: '#6366f1' },
  { tag: 'CSS',     title: 'Mastering Tailwind CSS for Modern UI',          desc: 'A deep dive into Tailwind CSS utility classes and how to build beautiful interfaces fast.',   color: '#8b5cf6' },
  { tag: 'Node.js', title: 'REST API Best Practices with Node.js',          desc: 'Discover best practices for building robust REST APIs using Node.js and Express.',            color: '#06b6d4' },
]

export const socials = [
  { icon: '⌘',  label: 'GitHub',    href: '#' },
  { icon: 'in', label: 'LinkedIn',  href: '#' },
  { icon: '𝕏',  label: 'Twitter',   href: '#' },
  { icon: '◎',  label: 'Instagram', href: '#' },
]
