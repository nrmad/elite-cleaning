"use client";

import { motion, Variants, Transition } from "framer-motion";
import { ReactNode } from "react";

interface MyProps {
  className?: string;
  children?: ReactNode;
  variants: Variants;
  transition?: Transition;
}

// initial={{ opacity: 0, x: 50 }}
// animate={{ opacity: 1, x: 0 }}
// transition={{ duration: 0.3 }}

const AnimateComponent = ({
  className = "",
  children,
  variants,
  transition = { type: "spring", bounce: 0, duration: 0.4 },
}: MyProps) => {
  // Variants for Container of words.
  // const container = {
  //     hidden: { opacity: 0 },
  //     visible: (i = 1) => ({
  //         opacity: 1,
  //         transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
  //     }),
  // };

  // Variants for each word.

  // const child = {
  //     visible: {
  //         opacity: 1,
  //         x: 0,
  //         transition: {
  //             type: "spring",
  //             damping: 12,
  //             stiffness: 100,
  //         },
  //     },
  //     hidden: {
  //         opacity: 0,
  //         x: 20,variants

  return (
    <motion.div
      className={className}
      style={{ overflow: "hidden", display: "flex" }}
      // variants={container}
      // initial="hidden"
      // animate="visible"

      whileInView="visible"
      viewport={{ once: true }}
      initial="start"
      animate="end"
      transition={transition}
      variants={variants}

      // initial={initial}
      // animate={animate}
      // transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default AnimateComponent;
