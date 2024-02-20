import { motion } from "framer-motion";
import Ball from "./Ball";
import { useState } from "react";

const Transition = () => {
  return (
    <>
      <motion.div
        // initial={{ y: -250 }}
        animate={{ y: [0, 100, 0] }}
        // animate={{ y: 250 }}
        transition={{
          delay: 1,
          // ease: "easeIn",
          repeat: Infinity,
          // type: "spring",
          // stiffness: 120,
          // duration: 1,
        }}
      >
        <Ball />
      </motion.div>
    </>
  );
};

export default Transition;
