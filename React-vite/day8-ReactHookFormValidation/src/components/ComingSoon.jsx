import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ComingSoon() {
  const release = useMemo(() => new Date('2026-12-31T00:00:00'), []);

  const getTime = () => {
    const diff = release.getTime() - Date.now();
    if (diff <= 0) return null;
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff / 3600000) % 24),
      minutes: Math.floor((diff / 60000) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const i = setInterval(() => setTime(getTime()), 1000);
    return () => clearInterval(i);
  }, []);

  const Card = ({ value, label }) => (
    <div className="bg-white border-4 border-black shadow-[10px_10px_0_#000] p-5 w-32 md:w-40">
      <AnimatePresence mode="wait">
        <motion.div
          key={value}
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -15, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="text-5xl md:text-7xl font-black"
        >
          {String(value).padStart(2, '0')}
        </motion.div>
      </AnimatePresence>
      <div className="mt-2 text-xs font-black tracking-[0.25em]">{label}</div>
    </div>
  );

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#F5F5F5] text-black">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(to right,#000 1px,transparent 1px),linear-gradient(to bottom,#000 1px,transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Decorative shapes */}
      <div className="absolute left-8 top-24 w-52 h-52 border-4 border-black opacity-20" />
      <div className="absolute right-10 top-36 w-56 h-56 rounded-full border-4 border-black opacity-20" />
      <div className="absolute bottom-24 left-1/3 w-36 h-36 border-4 border-black rotate-12 opacity-20" />
      <div className="absolute text-8xl font-black opacity-10 left-10 bottom-32">
        ✕
      </div>
      <div className="absolute text-8xl font-black opacity-10 right-28 bottom-20">
        ✕
      </div>
      <div className="absolute right-1/3 top-24 text-7xl opacity-10">➜</div>

      {/* Tape */}
      <div className="absolute -right-24 top-10 rotate-45 bg-yellow-300 border-4 border-black px-24 py-2 font-black tracking-widest shadow-[8px_8px_0_#000]">
        UNDER CONSTRUCTION
      </div>

      {/* Labels */}
      <div className="absolute top-6 left-6 text-sm font-black">
        BUILD LOG
        <br />
        v0.1
      </div>
      <div className="absolute top-6 right-6 text-right text-sm font-black">
        STATUS
        <br />
        IN PROGRESS
      </div>
      <div className="absolute bottom-6 left-6 text-2xl font-black">2026</div>
      <div className="absolute bottom-6 right-6 text-xl font-black">
        DEVCOLLECTIVE
      </div>

      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 flex items-center gap-3 font-black tracking-[0.3em]">
          <span className="relative flex h-4 w-4">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500" />
            <span className="relative inline-flex h-4 w-4 rounded-full bg-red-500" />
          </span>
          BUILDING
        </div>

        <motion.h1
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="leading-none font-black uppercase text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
        >
          COMING
          <br />
          SOON.
        </motion.h1>

        <p className="mt-6 max-w-xl text-lg font-bold">
          We're building something worth waiting for.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          <div className="mb-5 text-sm font-black tracking-[0.35em]">
            RELEASE IN
          </div>

          {time ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              <Card value={time.days} label="DAYS" />
              <Card value={time.hours} label="HOURS" />
              <Card value={time.minutes} label="MINUTES" />
              <Card value={time.seconds} label="SECONDS" />
            </div>
          ) : (
            <div className="text-6xl font-black">NOW LIVE.</div>
          )}
        </motion.div>

        <motion.button
          whileHover={{ x: 8, y: 8 }}
          whileTap={{ scale: 0.96 }}
          className="mt-14 border-4 border-black bg-[#FDE047] px-10 py-5 text-xl font-black shadow-[10px_10px_0_#000] hover:shadow-none transition-shadow"
        >
          NOTIFY ME
        </motion.button>
      </main>
    </div>
  );
}
