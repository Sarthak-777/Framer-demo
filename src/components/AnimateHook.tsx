import { useAnimate, usePresence } from "framer-motion";
import { useEffect } from "react";

const AnimateHook = () => {
  const [isPresent, safeToRemove] = usePresence();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (isPresent) {
      const enterAnimation = async () => {
        animate(
          scope.current,
          { opacity: [0, 1] },
          {
            duration: 2,
            delay: 1,
            repeat: Infinity,
          }
        );
      };
      enterAnimation();
    } else {
      const exitAnimation = async () => {
        animate(
          scope.current,
          { opacity: 0 },
          {
            duration: 0.5,
          }
        );
        await new Promise((resolve) => setTimeout(resolve, 500));
        safeToRemove();
      };
      exitAnimation();
    }
  }, []);

  return <div ref={scope} className="rounded w-36 h-36 bg-slate-800"></div>;
};

export default AnimateHook;
