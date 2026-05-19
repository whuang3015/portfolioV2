import { Icon } from "@iconify/react/dist/iconify.js";
import clsx from "clsx";
import { Skill } from "../../../lib/types";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { viewVariants } from "../../../lib/motion";
import { useStaggerAnimation } from "../../../lib/hooks";

type SubskillsProps = {
  children?: ReactNode;
  skillList: Skill[];
};

export default function Subskills({ children, skillList }: SubskillsProps) {
  const scope = useStaggerAnimation(
    "li",
    {},
    { opacity: 1, y: 0 },
    0.05,
    0.5,
    true,
  );
  return (
    <motion.section
      variants={viewVariants}
      initial="initial"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col items-center w-full py-14"
    >
      <h4 className="font-thin">{children}</h4>
      <motion.ul
        ref={scope}
        className="flex flex-wrap justify-center gap-x-6 gap-y-7 lg:gap-x-7 lg:gap-y-4"
      >
        {skillList.map((skill, i) => (
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            layoutId={skill.name + i}
            key={skill.name}
            className="w-full md:w-[48%] lg:w-[31%]"
          >
            <motion.a
              key={skill.name}
              target="blank"
              href={skill.link}
              className={clsx(
                "flex justify-center items-center w-full text-center btn truncate text-clip",
                {
                  "pointer-events-none": !skill.link,
                },
              )}
            >
              {skill.icon && (
                <span>
                  <Icon aria-label={skill.name} icon={skill.icon} />
                </span>
              )}
              {skill.name}
            </motion.a>
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
}
