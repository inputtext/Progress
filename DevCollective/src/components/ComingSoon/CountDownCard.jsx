import { motion, AnimatePresence } from "framer-motion";

export default function CountDownCard({
  value,
  label,
  color = "bg-white",
}) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        rotate: -1,
      }}
      whileTap={{
        scale: 0.96,
      }}
      className={`
        relative
        overflow-hidden
        border-[5px]
        border-black
        ${color}
        p-8
        shadow-[12px_12px_0_#000]
        transition-all
        duration-300
      `}
    >
      {/* Top Accent */}
      <div className="absolute left-0 top-0 h-3 w-full bg-black" />

      {/* Number */}
      <AnimatePresence mode="wait">
        <motion.div
          key={value}
          initial={{
            y: 25,
            opacity: 0,
            rotateX: -90,
          }}
          animate={{
            y: 0,
            opacity: 1,
            rotateX: 0,
          }}
          exit={{
            y: -25,
            opacity: 0,
            rotateX: 90,
          }}
          transition={{
            duration: 0.25,
          }}
          className="
            mt-6
            text-center
            font-['Bebas_Neue']
            text-7xl
            md:text-8xl
            leading-none
            text-black
          "
        >
          {String(value).padStart(2, "0")}
        </motion.div>
      </AnimatePresence>

      {/* Divider */}
      <div className="mx-auto mt-5 h-[4px] w-14 bg-black" />

      {/* Label */}
      <p
        className="
          mt-5
          text-center
          font-['IBM_Plex_Mono']
          text-xs
          font-bold
          tracking-[0.35em]
          uppercase
        "
      >
        {label}
      </p>

      {/* Corner Dot */}
      <div className="absolute right-3 top-3 h-3 w-3 rounded-full bg-black" />
    </motion.div>
  );
}
