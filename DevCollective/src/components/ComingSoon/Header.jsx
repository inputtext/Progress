import { motion } from "framer-motion";

export default function Header() {
  return (
    <>
      {/* Build Log */}
      <div className="absolute left-8 top-8 z-40 font-['IBM_Plex_Mono']">
        <p className="text-sm font-bold tracking-[0.35em] uppercase ">
          BUILD LOG
        </p>

        <p className="mt-3 text-sm">v0.1.0</p>
      </div>

      {/* Center Status */}
      <div className="absolute left-1/2 top-8 z-40 flex -translate-x-1/2 items-center gap-4">

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
          }}
          className="h-4 w-4 rounded-full bg-red-500"
        />

        <span
          className="
          font-['IBM_Plex_Mono']
          text-sm
          font-bold
          tracking-[0.4em]
          uppercase
        "
        >
          BUILDING
        </span>
      </div>

      {/* Status */}
      <div className="absolute right-8 top-8 z-40 text-right font-['IBM_Plex_Mono']">

        <p className="text-sm font-bold tracking-[0.3em]">
          STATUS
        </p>

        <div className="mt-4 h-3 w-40 overflow-hidden border-2 border-black bg-white">

          <motion.div
            animate={{
              width: ["25%", "48%", "38%", "48%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="
              h-full
              bg-gradient-to-r
              from-green-400
              via-blue-500
              to-yellow-400
            "
          />

        </div>

        <p className="mt-3 text-xs tracking-[0.35em]">
          42%
        </p>

      </div>
    </>
  );
}
