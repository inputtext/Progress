import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import CountDownCard from "./CountDownCard";

export default function CountDown() {
  const release = useMemo(
    () => new Date("2026-12-31T00:00:00"),
    []
  );

  const getTime = () => {
    const diff = release.getTime() - Date.now();

    if (diff <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff / 3600000) % 24),
      minutes: Math.floor((diff / 60000) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const cards = [
    {
      value: time.days,
      label: "Days",
      color: "bg-yellow-200",
    },
    {
      value: time.hours,
      label: "Hours",
      color: "bg-blue-200",
    },
    {
      value: time.minutes,
      label: "Minutes",
      color: "bg-green-200",
    },
    {
      value: time.seconds,
      label: "Seconds",
      color: "bg-red-200",
    },
  ];

  return (
    <section className="relative z-20 px-6 pb-24">

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .4 }}
        className="mx-auto max-w-7xl"
      >

        {/* Heading */}

        <div className="mb-12 text-center">

          <p
            className="
            font-['IBM_Plex_Mono']
            text-sm
            uppercase
            tracking-[0.45em]
          "
          >
            Release In
          </p>

          <div className="mx-auto mt-5 h-[5px] w-32 bg-black" />

        </div>

        {/* Cards */}

        <div
          className="
            grid
            gap-8
            sm:grid-cols-2
            xl:grid-cols-4
          "
        >
          {cards.map((card) => (
            <CountDownCard
              key={card.label}
              value={card.value}
              label={card.label}
              color={card.color}
            />
          ))}
        </div>

        {/* Bottom Information */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            mt-20
            grid
            gap-8
            md:grid-cols-3
          "
        >

          <div className="border-[5px] border-black bg-white p-8 shadow-[10px_10px_0_#000]">

            <p className="font-['IBM_Plex_Mono'] text-xs tracking-[0.3em] uppercase">
              Platform
            </p>

            <h3 className="mt-4 text-3xl font-black">
              DevCollective
            </h3>

          </div>

          <div className="border-[5px] border-black bg-blue-200 p-8 shadow-[10px_10px_0_#000]">

            <p className="font-['IBM_Plex_Mono'] text-xs tracking-[0.3em] uppercase">
              Launch
            </p>

            <h3 className="mt-4 text-3xl font-black">
              Winter 2026
            </h3>

          </div>

          <div className="border-[5px] border-black bg-yellow-200 p-8 shadow-[10px_10px_0_#000]">

            <p className="font-['IBM_Plex_Mono'] text-xs tracking-[0.3em] uppercase">
              Status
            </p>

            <h3 className="mt-4 text-3xl font-black">
              In Progress
            </h3>

          </div>

        </motion.div>

      </motion.div>

    </section>
  );
}
