import { useState } from "react";
import Ball from "./Ball";
import { motion } from "framer-motion";

const XandY = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);
  return (
    <div>
      <motion.div
        // whileHover={{
        //   scale: 2,
        //   rotate: 360,
        // }}
        animate={{ x, y, rotate }}
        transition={{ type: "spring" }}
      >
        <Ball />
      </motion.div>
      <div className="mt-56 flex flex-col gap-5">
        <div className="flex">
          <p>x::</p>
          <input
            type="range"
            min={-250}
            max={250}
            value={x}
            onChange={(e) => setX(parseFloat(e.target.value) || 0)}
          />
        </div>
        <div className="flex">
          <p>y::</p>
          <input
            type="range"
            min={-250}
            max={250}
            value={y}
            onChange={(e) => setY(parseFloat(e.target.value) || 0)}
          />
        </div>
        <div className="flex">
          <p>rotate::</p>
          <input
            type="range"
            min={-250}
            max={250}
            value={rotate}
            onChange={(e) => setRotate(parseFloat(e.target.value) || 0)}
          />
        </div>
      </div>
    </div>
  );
};

export default XandY;
