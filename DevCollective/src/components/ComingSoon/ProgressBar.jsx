import { motion } from "framer-motion";

export default function ProgressBar({
  progress = 42,
}) {
  return (
    <div className="w-full">

      <div className="mb-4 flex items-center justify-between">

        <p
          className="
            font-['IBM_Plex_Mono']
            text-xs
            uppercase
            tracking-[0.35em]
          "
        >
          BUILD PROGRESS
        </p>

        <span
          className="
            font-['IBM_Plex_Mono']
            font-bold
          "
        >
          {progress}%
        </span>

      </div>

      <div
        className="
          h-5
          overflow-hidden
          border-[4px]
          border-black
          bg-white
          shadow-[6px_6px_0_#000]
        "
      >

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{
            duration: 2,
            ease: "easeOut",
          }}
          className="
            h-full
            bg-gradient-to-r
            from-green-400
            via-blue-500
            to-yellow-300
          "
        />

      </div>

      <div className="mt-6 grid grid-cols-4 gap-4">

        {[
          "Landing",
          "Backend",
          "AI",
          "Launch",
        ].map((item, index) => (

          <motion.div
            key={item}
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.15,
            }}
            className="
              border-4
              border-black
              bg-white
              p-4
              text-center
              shadow-[5px_5px_0_#000]
            "
          >

            <div className="text-xl mb-2">

              {index === 0 && "✅"}
              {index === 1 && "⚙️"}
              {index === 2 && "🤖"}
              {index === 3 && "🚀"}

            </div>

            <p
              className="
                font-['IBM_Plex_Mono']
                text-[10px]
                uppercase
                tracking-[0.25em]
              "
            >
              {item}
            </p>

          </motion.div>

        ))}

      </div>

    </div>
  );
}
