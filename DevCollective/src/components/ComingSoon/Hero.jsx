import { motion } from "framer-motion";

export default function   Hero() {
  return (
    <section className="relative z-20 flex min-h-screen flex-col items-center justify-center px-6 text-center">

      {/* Live Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          mb-10
          inline-flex
          items-center
          gap-3
          rounded-full
          border-4
          border-black
          bg-white
          px-6
          py-3
          shadow-[6px_6px_0_#000]
        "
      >
        <div className="h-3 w-3 rounded-full bg-red-500 animate-pulse" />

        <span className="font-['IBM_Plex_Mono'] text-x flex flex-col gap-2 tracking-[0.35em] uppercase">
          BUILD IN PROGRESS
        </span>
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="
          font-['Bebas_Neue']
          uppercase
          leading-[0.82]
          tracking-tight
          text-6xl
          sm:text-7xl
          md:text-[9rem]
          lg:text-[11rem]
          xl:text-[13rem]
        "
      >
        WE'RE
        <br />
        BUILDING
        <br />
        THE FUTURE
        <br />
        OF STUDENT
        <br />
        COMMUNITIES.
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="
          mt-12
          max-w-3xl
          text-lg
          md:text-2xl
          leading-relaxed
          font-['Space_Grotesk']
          font-medium
          text-neutral-700
        "
      >
        DevCollective is building an ecosystem where students
        learn, collaborate, earn reputation, connect with mentors,
        and grow together.
      </motion.p>

      {/* Tags */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-12 flex flex-wrap justify-center gap-4"
      >
        {[
          "AI",
          "Community",
          "Projects",
          "Mentorship",
          "Leaderboard",
          "Roadmaps",
        ].map((item) => (
          <div
            key={item}
            className="
              border-4
              border-black
              bg-white
              px-5
              py-2
              shadow-[5px_5px_0_#000]
              font-['IBM_Plex_Mono']
              text-xs
              tracking-[0.25em]
              uppercase
            "
          >
            {item}
          </div>
        ))}
      </motion.div>

      {/* Decorative line */}
      <div className="mt-20 h-[5px] w-40 bg-black" />
    </section>
  );
}
