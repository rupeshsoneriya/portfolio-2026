import type { LucideIcon } from 'lucide-react';
import { WhatsappIcon } from '@/components/ui/WhatsappIcon';
import { Linkedin, Mail, MapPin, Phone, GraduationCap, Lightbulb, Code, Store, FileCode, Palette, PenTool, MonitorSmartphone, Briefcase } from 'lucide-react';

export type NavItem = {
  name: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
};

export const NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '/#home' },
  { name: 'About', href: '/#about' },
  // { name: 'Education', href: '/#education' }, // Removed
  // { name: 'Experience', href: '/#experience' }, // Removed
  { name: 'Portfolio', href: '/#portfolio' },
  { name: 'Contact', href: '/#contact' },
];

export type Project = {
  id: string;
  name: string;
  tech: string[];
  description: string;
  liveLink: string;
  image: string;
  imageHint: string;
};

export const PROJECTS_DATA: Project[] = [


{
id: "mdlz-connect",
name: "MDLZ Connect Worker Management System",
tech: [
"React.js",
"TypeScript",
"Redux Toolkit",
"OpenTelemetry",
],
description:
"Enterprise workforce and production management platform used for employee tracking, machinery monitoring, production workflows, and waste management. Built responsive dashboards, reusable components, and real-time operational monitoring features.",
liveLink: "https://www.worldwidegolfshops.com",
image: "/portfolio-images/mdlz-connect.png",
imageHint: "Worker Management Dashboard",
},

{
id: "worldwide-golf",
name: "Worldwide Golf Shop",
tech: [
"React.js",
"TypeScript",
"VTEX",
"REST API",
],
description:
"Large-scale eCommerce platform serving customers globally. Developed scalable frontend modules, integrated APIs, optimized performance, and enhanced user experience across desktop and mobile devices.",
liveLink: "#",
image: "/portfolio-images/worldwide-golf.png",
imageHint: "Worldwide Golf Shop",
},

{
id: "real-estate-platform",
name: "4see Analytics Real Estate Platform",
tech: [
"React.js",
"Redux Toolkit",
"REST API",
"Maps Integration",
],
description:
"Real estate management platform featuring property listings, advanced filtering, interactive maps, and inquiry management. Focused on responsive design, reusable UI components, and scalable frontend architecture.",
liveLink: "https://www.retransform.com/insightful-analytics/",
image: "/portfolio-images/real-estate.png",
imageHint: "Real Estate Platform",
},

{
id: "topline-media",
name: "Topline Media Group Admin Panel",
tech: [
"React.js",
"Firebase",
"Redux Toolkit",
],
description:
"Admin dashboard for managing user-generated content, images, videos, and downloads. Implemented authentication, media management, and Firebase integration for real-time data handling.",
liveLink: "#",
image: "/portfolio-images/top-line-media.png",
imageHint: "Admin Dashboard",
},

{
id: "leadership-thread",
name: "The Leadership Thread",
tech: [
"React.js",
"TypeScript",
"REST API",
],
description:
"Scalable content management platform supporting media uploads, downloads, user management, and secure authentication workflows. Built with reusable architecture for long-term maintainability.",
liveLink: "https://theleadershipthread.com",
image: "/portfolio-images/dental-system.png",
imageHint: "Leadership Thread Platform",
},


{
id: "life-saving-ambulance",
name: "Life Saving Ambulance",
tech: [
"Next.js",
"Material UI",
"SEO",
],
description:
"Healthcare service website built with Next.js and Material UI, focused on responsive design, performance optimization, and SEO best practices.",
liveLink: "https://www.lifesavingambulance.com/",
image: "/portfolio-images/life-Saving-ambulance.png",
imageHint: "Healthcare Website",
}
];


export type ContactInfoItem = {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
};

export const CONTACT_INFO: ContactInfoItem[] = [
  { icon: Phone, label: 'Phone', value: '+91 9630321053', href: 'tel:+919630321053' },
  { icon: Mail, label: 'Email', value: 'soneriyar@gmail.com', href: 'mailto:soneriyar@gmail.com' },
  { icon: MapPin, label: 'Address', value: 'Indore, Madhya Pradesh, India' },
];

export const SOCIAL_LINKS: NavItem[] = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/rupesh-soneriya-b6b262249/', icon: Linkedin },
    {
      name: "WhatsApp",
      href: "https://wa.me/919630321053",
      icon: WhatsappIcon, 
   },  
];

export type Skill = {
  name: string;
  icon: LucideIcon;
  level?: string;
  desc?: string;
};



export type EducationItem = {
  institution: string;
  degree: string;
  duration: string;
  grade: string;
  icon: LucideIcon;
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: 'Malwa institute of technology, Indore',
    degree: 'Bachelor of Technology - BTech,  Electronics & Communication',
    duration: '2019 - 2023',
    grade: '7.75 CGPA',
    icon: GraduationCap,
  },
 {
  institution: 'Govt Excellence H.S. School, Barnager',
  degree: 'PCM',
  duration: '2018 - 2019',
  grade: '62%',
  icon: GraduationCap,
}

];

export type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  locationType: string;
  description: string[];
  icon: LucideIcon;
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    company: 'Code Better',
    role: 'Trainee - Front-End Development',
    duration: '2023',
    locationType: 'On Site',
    description: [
      'Completed a 6-month intensive training program in modern frontend technologies.',
      'Learned advanced JavaScript, React.js, Redux Toolkit, and UI/UX principles.',
      'Built projects translating designs into responsive web applications.',
      'Gained experience debugging and optimizing frontend performance.'
    ],
    icon: GraduationCap
  },

  {
    company: 'Elicit Digital Pvt Ltd',
    role: 'Software Developer',
    duration: '08/2023 - 05/2025',
    locationType: 'On Site',
    description: [
      'Developed and maintained applications using React.js.',
      'Implemented reusable UI components and ensured code quality.',
      'Participated in architecture and design discussions.',
      'Collaborated with cross-functional teams to deliver projects on schedule.',
      'Applied test-driven development (TDD) practices in React Native projects.',
      'Optimized web pages for speed, performance, and scalability.'
    ],
    icon: Briefcase
  },

  {
    company: 'Indivibe Infotech Pvt Ltd',
    role: 'Shopify Developer',
    duration: '04/2022 - 05/2023',
    locationType: 'Freelancing',
    description: [
      'Led the design phase of Shopify development projects, working closely with clients to capture their vision.',
      'Translated Figma designs into pixel-perfect, responsive Shopify storefronts using HTML, SCSS, JavaScript, and Liquid.',
      'Customized themes and templates using HTML, CSS, JavaScript, and Shopify Liquid.',
      'Integrated third-party apps and APIs to extend store functionality, including product upsells, cart drawers, and custom pop-ups.',
      'Ensured cross-browser and cross-device compatibility through mobile-first design and thorough QA testing.',
      'Improved performance and load times by optimizing Liquid templates, reducing unnecessary scripts, and implementing lazy loading for assets.'
    ],
    icon: Briefcase
  }
];


export const SITE_TITLE = "Rupesh Soneriya | Shopify Developer";
export const SITE_DESCRIPTION = "Personal portfolio of Rupesh Soneriya, a passionate Shopify developer Setup high-performing custom Stores and e-commerce solutions.";

