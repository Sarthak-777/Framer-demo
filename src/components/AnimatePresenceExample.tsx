import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const AnimatePresenceExample = () => {
  const [isVisible, setIsVisible] = React.useState(true);

  setTimeout(() => {
    setIsVisible(false);
  }, 2000);
  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.h2
            exit={{
              opacity: 0,
              x: -100,
            }}
            transition={{
              duration: 2,
            }}
          >
            Exit animation
          </motion.h2>
        )}
      </AnimatePresence>
    </>
  );
};

export default AnimatePresenceExample;
