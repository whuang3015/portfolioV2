import { Project } from "../lib/types";
import personalPortfolio from "../assets/personal_portfolio.png";
import fashionHunters from "../assets/fashion_hunters_app.png";
import lyftRev from "../assets/lyft_rev.png";

export const PROJECTS: Project[] = [
  {
    name: "Fashion Hunters App",
    image: fashionHunters,
    href: "https://fashionhunters.app",
    description:
      "Fashion Hunters is a platform for Monster Hunter Wilds players to share gear loadouts they've created with the community. It is my proudest work and best demonstrates my latest skillset in software development. I'm adding more features to it day-by-day!",
    tags: [
      "NextJS",
      "Cloudflare R2",
      "Prisma ORM",
      "Supabase",
      "Zod",
      "Tanstack Query",
      "BetterAuth",
      "Typescript",
      "TailwindCSS",
      "ShadCN UI",
      "Vercel",
    ],
  },
  {
    name: "This Portfolio",
    image: personalPortfolio,
    github: "https://github.com/PotatoAim11518/portfolioV2",
    href: "https://www.wilsonhuang.dev",
    description:
      "This is the most recent version of my personal portfolio site and wills serve to store some side projects and showcase my frontend skillset. It makes use of Framer Motion and TailwindCSS for some interesting animations and interactions that I'm quite proud of. I'm actively improving things under-the-hood based on React best-practices.",
    tags: ["React", "TailwindCSS", "Framer Motion", "EmailJS"],
  },
  {
    name: "Lyft Rev Blog",
    image: lyftRev,
    href: "https://www.lyft.com/rev",
    description:
      "Lyft’s Rev Blog is a publication space that allows the Lyft Brand Journalism team to reach new audiences. I was one of two owners for building this project, and primarily contributed to the main REV Blog landing page. Development included both leveraging and contributing to Lyft's component library. It was an awesome feeling deploying this into the world and seeing people engage with it!",
    tags: ["React", "Context API", "Contentful CMS"],
  },
];
