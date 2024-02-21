import { motion } from "framer-motion";

const Gesture = () => {
  return (
    <motion.div
      className="w-44 h-44 rounded-full bg-slate-800"
      //   drag
      //   whileDrag={{
      //     scale: 1.2,
      //     backgroundColor: "deepskyblue",
      //   }}
      //   dragConstraints={{
      //     top: -100,
      //     left: -100,
      //     right: 100,
      //     bottom: 100,
      //   }}
      //   dragSnapToOrigin
      //  onDragStart = {() => console.log("dragging")}
      //   onDragEnd = {() => console.log("drag ended")}
    />
  ); //drag
};

export default Gesture;
