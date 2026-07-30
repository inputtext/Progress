import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative z-20 px-6 pb-12">

      <div
        className="
          mx-auto
          max-w-7xl
          border-[5px]
          border-black
          bg-white
          px-8
          py-8
          shadow-[10px_10px_0_#000]
        "
      >

        <div
          className="
            flex
            flex-col
            gap-8
            md:flex-row
            md:items-center
            md:justify-between
          "
        >

          {/* Left */}

          <div>

            <h3
              className="
                font-['Bebas_Neue']
                text-5xl
                leading-none
              "
            >
              DEVCOLLECTIVE
            </h3>

            <p
              className="
                mt-2
                font-['Space_Grotesk']
                text-neutral-600
              "
            >
              Building India's next student developer community.
            </p>

          </div>

          {/* Right */}

          <div
            className="
              flex
              flex-wrap
              gap-4
              font-['IBM_Plex_Mono']
              text-xs
              uppercase
              tracking-[0.3em]
            "
          >

            {[
              "About",
              "Community",
              "Roadmap",
              "GitHub",
              "Contact",
            ].map((item) => (

              <motion.a
                key={item}
                href="#"
                whileHover={{
                  y: -4,
                }}
                className="
                  border-[4px]
                  border-black
                  bg-yellow-200
                  px-5
                  py-3
                  shadow-[5px_5px_0_#000]
                "
              >
                {item}
              </motion.a>

            ))}

          </div>

        </div>

        {/* Divider */}

        <div className="my-8 h-[4px] w-full bg-black" />

        {/* Bottom */}

        <div
          className="
            flex
            flex-col
            gap-4
            text-sm
            md:flex-row
            md:items-center
            md:justify-between
          "
        >

          <p className="font-['IBM_Plex_Mono'] uppercase tracking-[0.25em]">
            © 2026 DEVCOLLECTIVE
          </p>

          <p
            className="
              font-['IBM_Plex_Mono']
              text-neutral-500
              uppercase
              tracking-[0.25em]
            "
          >
            Designed & Built with React + Tailwind + Framer Motion
          </p>

        </div>

      </div>

    </footer>
  );
}
