import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { SKILLS } from "../../../data/skills";
import { useStaggerAnimation } from "../../../lib/hooks";
import { viewVariants } from "../../../lib/motion";

export default function CoreSkills() {
  const scope = useStaggerAnimation(
    "div",
    { opacity: 0, scale: 1.1 },
    { opacity: 1, scale: 1 },
    0.05,
    0.5,
    true,
  );

  return (
    <section className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-8">
      <motion.aside
        variants={viewVariants}
        initial="initial"
        whileInView="visible"
        viewport={{ once: true }}
        className="textbox whitespace-pre-line"
      >
        <motion.div
          ref={scope}
          layoutId="tilegrid"
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8 lg:gap-10"
        >
          {SKILLS.map((icon) => (
            <motion.div
              key={icon.name}
              initial={{ opacity: 0, scale: 1.1 }}
              layoutId={icon.name}
              className="relative flex justify-center items-end"
            >
              <Icon
                aria-label={icon.name}
                icon={icon.icon}
                height="100%"
                width="100%"
                className="peer drop-shadow-md"
              />
              <div className="absolute hidden shadow-md peer-hover:flex pointer-events-none tooltip animate-tooltip">
                {icon.name}
              </div>
            </motion.div>
          ))}
        </motion.div>
        <p className="font-light text-4xl-sm sm:text-2xl-sm lg:text-base text-center mt-12">
          {`I'm experienced in fullstack development, multiple state management systems, and plenty of third-party libraries. In my free time, I hope to pick up another language or two and build something out of my comfort zone.
          \nI'm always open to something new, of course--learning is a life-long skill!`}
        </p>
      </motion.aside>
    </section>
  );
}
