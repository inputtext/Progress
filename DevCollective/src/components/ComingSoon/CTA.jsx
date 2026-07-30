import { motion } from "framer-motion";
import { FiArrowRight, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const socials = [
  {
    icon: FiGithub,
    url: "https://github.com/inputtext",
  },
  {
    icon: FiLinkedin,
    url: " https://www.linkedin.com/in/piyush-kanojiya-b78340358",
  },
  {
    icon: FiTwitter,
    url: "https://x.com/YOUR_USERNAME",
  },
];

export default function CTA() {
  return (
    <section className="relative z-20 px-6 py-28">

      <div
        className="
          mx-auto
          max-w-5xl
          border-[6px]
          border-black
          bg-yellow-200
          p-10
          md:p-16
          shadow-[14px_14px_0_#000]
        "
      >

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            text-center
            font-['Bebas_Neue']
            text-6xl
            md:text-8xl
            leading-none
          "
        >
          DON'T MISS
          <br />
          THE LAUNCH
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .2 }}
          viewport={{ once: true }}
          className="
            mx-auto
            mt-8
            max-w-2xl
            text-center
            text-lg
            text-neutral-700
            font-['Space_Grotesk']
          "
        >
          Be the first to experience DevCollective when we launch.
          Join the waitlist and we'll let you know the moment we're live.
        </motion.p>

        {/* Email */}

        <motion.form
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: .4 }}
          viewport={{ once: true }}
          className="
            mx-auto
            mt-12
            flex
            max-w-3xl
            flex-col
            gap-5
            md:flex-row
          "
        >

          <input
            type="email"
            placeholder="your@email.com"
            className="
              flex-1
              border-[5px]
              border-black
              bg-white
              px-6
              py-5
              text-lg
              outline-none
              shadow-[7px_7px_0_#000]
              font-['Space_Grotesk']
            "
          />

          <motion.button
            whileHover={{
              y: -4,
              scale: 1.02,
            }}
            whileTap={{
              scale: .95,
            }}
            className="
              flex
              items-center
              justify-center
              gap-3
              border-[5px]
              border-black
              bg-black
              px-10
              py-5
              text-white
              shadow-[7px_7px_0_#000]
              font-['IBM_Plex_Mono']
              uppercase
              tracking-[0.25em]
            "
          >
            Notify Me

            <FiArrowRight size={20} />
          </motion.button>

        </motion.form>

        {/* Social */}

        <div className="mt-14 flex justify-center gap-6">
  {socials.map((social, index) => {
    const Icon = social.icon;

    return (
      <motion.a
        key={index}
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -8, rotate: -6 }}
        whileTap={{ scale: 0.9 }}
        className="
          flex
          h-16
          w-16
          items-center
          justify-center
          border-[5px]
          border-black
          bg-white
          shadow-[6px_6px_0_#000]
        "
      >
        <Icon size={26} />
      </motion.a>
    );
  })}
</div>

        <p
          className="
            mt-10
            text-center
            font-['IBM_Plex_Mono']
            text-xs
            uppercase
            tracking-[0.35em]
          "
        >
          Building something students actually deserve.
        </p>

      </div>

    </section>
  );
}
