import { motion } from "framer-motion";

export default function ConstructionTape() {
  return (
    <motion.div
      animate={{
        x: [0, -25, 0],
        backgroundColor: [
          "#FFD93D",
          "#FBBF24",
          "#FFD93D",
        ],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        absolute
        -top-6
        -right-44
        rotate-45
        z-50
        border-[5px]
        border-black
        px-56
        py-4
        shadow-[10px_10px_0_#000]
        font-['IBM_Plex_Mono']
        font-bold
        uppercase
        tracking-[0.45em]
        text-black
        select-none
      "
    >
      UNDER CONSTRUCTION
    </motion.div>
  );
}
