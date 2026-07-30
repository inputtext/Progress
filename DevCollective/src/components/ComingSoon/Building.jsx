import { motion } from "framer-motion";
import ProgressBar from "./ProgressBar";

const milestones = [
  {
    title: "Landing Page",
    status: "Completed",
    color: "bg-green-300",
  },
  {
    title: "Authentication",
    status: "In Progress",
    color: "bg-yellow-300",
  },
  {
    title: "Student Dashboard",
    status: "In Progress",
    color: "bg-blue-300",
  },
  {
    title: "Mentorship System",
    status: "Queued",
    color: "bg-pink-300",
  },
  {
    title: "Leaderboard",
    status: "Queued",
    color: "bg-orange-300",
  },
  {
    title: "AI Features",
    status: "Planning",
    color: "bg-purple-300",
  },
];

export default function Building() {
  return (
    <section className="relative z-20 px-6 py-24">

      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p
            className="
              font-['IBM_Plex_Mono']
              text-sm
              tracking-[0.4em]
              uppercase
            "
          >
            Development Timeline
          </p>

          <h2
            className="
              mt-4
              font-['Bebas_Neue']
              text-6xl
              md:text-8xl
              leading-none
            "
          >
            BUILD STATUS
          </h2>
        </motion.div>

        <ProgressBar progress={42} />

        <div className="mt-20 space-y-6">

          {milestones.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
              whileHover={{
                x: 8,
              }}
              className="
                flex
                flex-col
                gap-5
                md:flex-row
                md:items-center
                md:justify-between
                border-[5px]
                border-black
                bg-white
                p-6
                shadow-[8px_8px_0_#000]
              "
            >

              <div className="flex items-center gap-5">

                <div
                  className={`
                    h-16
                    w-16
                    border-[4px]
                    border-black
                    ${item.color}
                    flex
                    items-center
                    justify-center
                    text-2xl
                  `}
                >
                  {index + 1}
                </div>

                <div>

                  <h3
                    className="
                      font-['Space_Grotesk']
                      text-2xl
                      font-bold
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      font-['IBM_Plex_Mono']
                      text-xs
                      tracking-[0.3em]
                      uppercase
                    "
                  >
                    Module #{String(index + 1).padStart(2, "0")}
                  </p>

                </div>

              </div>

              <div
                className={`
                  border-[4px]
                  border-black
                  ${item.color}
                  px-6
                  py-3
                  shadow-[4px_4px_0_#000]
                `}
              >
                <p
                  className="
                    font-['IBM_Plex_Mono']
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.3em]
                  "
                >
                  {item.status}
                </p>
              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}   
