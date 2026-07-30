import { motion } from "framer-motion";

export default function Decorations() {
  return (
    <>
      {/* Blueprint Grid */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(37,99,235,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Watermark */}
      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          text-[18rem]
          md:text-[24rem]
          font-['Bebas_Neue']
          opacity-[0.03]
          select-none
          pointer-events-none
          uppercase
          tracking-tight
        "
      >
        BUILD
      </div>

      {/* Square */}
      <motion.div
        animate={{
          y: [0, -25, 0],
          rotate: [0, 8, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
        }}
        className="
          absolute
          left-10
          top-28
          h-64
          w-64
          border-[5px]
          border-blue-500
          opacity-20
        "
      />

      {/* Circle */}
      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
        }}
        className="
          absolute
          right-16
          top-40
          h-72
          w-72
          rounded-full
          border-[5px]
          border-red-400
          opacity-20
        "
      />

      {/* Rotated Square */}
      <motion.div
        animate={{
          rotate: [12, -12, 12],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
        }}
        className="
          absolute
          bottom-32
          left-1/3
          h-40
          w-40
          rotate-12
          border-[5px]
          border-green-500
          opacity-20
        "
      />

      {/* Arrow */}
      <motion.div
        animate={{
          x: [0, 12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="
          absolute
          right-1/4
          top-32
          text-[8rem]
          text-blue-500
          opacity-10
          select-none
        "
      >
        ➜
      </motion.div>

      {/* X Bottom Left */}
      <motion.div
        animate={{
          rotate: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 7,
        }}
        className="
          absolute
          bottom-16
          left-12
          text-[8rem]
          font-black
          text-gray-400
          opacity-20
        "
      >
        ✕
      </motion.div>

      {/* X Bottom Right */}
      <motion.div
        animate={{
          rotate: [0, -8, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 9,
        }}
        className="
          absolute
          bottom-24
          right-16
          text-[9rem]
          font-black
          text-red-300
          opacity-20
        "
      >
        ✕
      </motion.div>
    </>
  );
}
