import { Portfolio } from './../components/portfolio/index';
import { MenuItems, PortfolioItems } from "@/types";

export const menuItems: MenuItems[] = [
  {
    id: 1,
    link: "#home",
    title: "Home",
  },
  {
    id: 2,
    link: "#about",
    title: "About me",
  },
  {
    id: 3,
    link: "#skills",
    title: "Skills",
  },
  {
    id: 4,
    link: "#portfolio",
    title: "Portfolio",
  },
  {
    id: 5,
    link: "#contacts",
    title: "Contacts",
  },
];

export const portfolioItems: PortfolioItems[] = [
  {
    id: 1,
    link: "https://mexanik.vercel.app/",
    title: "Online fashion store - Homepage",
    desc: "React, Sass",
    image: '/portfolioImage/portfolio1.jpg'
  },
  {
    id: 2,
    link: "https://mexanik.vercel.app/",
    title: "Reebok Store - Concept",
    desc: "Nextjs, Tailwind",
    image: '/portfolioImage/portfolio2.jpg'
  },
  {
    id: 3,
    link: "https://mexanik.vercel.app/",
    title: "Braun Landing Page - Concept",
    desc: "React, Tailwind, TypeScript",
    image: '/portfolioImage/portfolio3.jpg'
  },

]
