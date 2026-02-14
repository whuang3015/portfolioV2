import { ExternalLink, NavLink } from "../lib/types";

export const GITHUB = "https://github.com/whuang3015";
export const LINKEDIN = "https://www.linkedin.com/in/wilson-huang-39198039/";

// Nav bar transition scroll threshold
export const SCROLL_THRESHOLD = 200;

// Character limit for email contact message
export const MAX_CHARACTER_COUNT = 500;

export const NAV_LINKS: NavLink[] = [
  {
    name: "About",
    hash: "#about",
    icon: "mdi:home",
  },
  {
    name: "Skills",
    hash: "#skills",
    icon: "material-symbols:cognition",
  },
  {
    name: "Projects",
    hash: "#projects",
    icon: "fluent:window-wrench-24-filled",
  },
  {
    name: "Contact",
    hash: "#contact",
    icon: "mdi:mail",
  },
];

export const EXTERNAL_LINKS: ExternalLink[] = [
  {
    name: "LinkedIn",
    icon: "cib:linkedin",
    href: LINKEDIN,
  },
  {
    name: "GitHub",
    icon: "cib:github",
    href: GITHUB,
  },
];
