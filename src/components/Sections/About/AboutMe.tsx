import { motion } from "framer-motion";
import { viewVariants } from "../../../lib/motion";

export default function AboutMe() {
  return (
    <motion.article
      variants={viewVariants}
      initial="initial"
      whileInView={{
        y: 0,
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
        delay: 1.3,
      }}
      viewport={{ once: true }}
    >
      <motion.h2
        variants={viewVariants}
        initial="initial"
        animate="visible"
        layoutId="about-me"
        className="relative gradient-text tracking-wide font-semibold text-center top-16 md:top-[3.3rem] lg:top-[3.5rem] lg:left-7 lg:text-left uppercase drop-shadow-md z-10"
      >
        About me
      </motion.h2>
      <p className="font-light textbox whitespace-pre-wrap">
        {`Before I made the switch into software engineering I was a wearer of many hats--salesman, data analyst, community manager, and a few more. With each role, there was always one connecting thread: leveraging technology to solve those problems programmatically.
            \nOver time I picked up more and more coding skills to the point where my thirst for knowledge could no longer be ignored. I made the leap, tackled a 1,000-hour bootcamp, and landed a dream role at `}
        <span className="text-[#ff00bf] font-bold">
          <a href="https://www.lyft.com/">Lyft</a>
        </span>
        {` working on the Organic Traffic Team. I was able to work on everything from legacy code to the most modern stack. I was also a regular  contributor to Lyft’s internal design system and part of the Frontend Developer Experience group.
            \nUnfortunately, in 2023 our entire team was affected by layoffs. Since then, I've pursued a few personal projects, traveled, and skilled up my technical chops. For my next role, I'm looking for a place where we can use software to better people's lives in a meaningful way. `}
        {
          <span>
            <button
              onClick={() => (window.location.hash = "#contact")}
              className="font-semibold text-sky-500"
            >
              Contact me
            </button>
          </span>
        }
        {` if you'd like to chat!`}
      </p>
    </motion.article>
  );
}
