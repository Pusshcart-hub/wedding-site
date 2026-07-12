import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Typography from "/src/components/Typography";

export default function Hero() {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });
  const [expired, setExpired] = useState(false);

    useEffect(() => {
    const interval = setInterval(() => {
      const target = new Date("2026-10-17T12:00:00");
      const now = new Date();
      const diff = target - now;

      if (diff <= 0) {
        setExpired(true);
        setTime({ d: 0, h: 0, m: 0, s: 0 });
        clearInterval(interval);
        return;
      }

      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);

      setTime({ d, h, m, s });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen pt-20 flex flex-col items-center justify-center text-center px-4 text-white overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img
          src="/herobg.png"
          alt="Wedding"
          className="w-full h-full object-cover object-bottom"
        />
      </div>

      {/* BURGUNDY OVERLAY */}
      <div className="absolute inset-0 bg-burgundy/40 z-0"></div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-5xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >
          <Typography as="p" variant="names" className="mb-9 leading-none">the wedding</Typography>
          <Typography as="p" variant="label" className="mb-4">Joanna <span className="text-gold italic">&</span> Vincent</Typography>
          <Typography as="p" variant="label2" className="mb-10">OCTOBER 17, 2026</Typography>
          <Typography as="p" variant="heading" className="mb-5">FOREVER STARTS SOON</Typography>
        </motion.div>

        {/* COUNTDOWN */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex gap-3 sm:gap-6 flex-wrap justify-center"
        >
          {expired ? (
            <p className="text-white/80 italic text-lg">Today is the day! 🎉</p>
          ) : (
            [
              { label: "Days", value: time.d },
              { label: "Hours", value: time.h },
              { label: "Mins", value: time.m },
              { label: "Secs", value: time.s },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-3 rounded-lg min-w-[70px]"
              >
                <div className="text-2xl sm:text-3xl font-serif text-gold">
                  {item.value}
                </div>
                <div className="text-[10px] tracking-widest uppercase text-gray-300">
                  {item.label}
                </div>
              </div>
            ))
          )}
        </motion.div>

        {/* RSVP — pushed to the left */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8 w-full text-left pl-8 sm:pl-16"
        >
          <Typography as="h3" variant="note" className="mb-5 max-w-sm">
            Kindly RSVP on or before September 1, 2026, to ensure your spot on our special day
          </Typography>
  <a
    href="#rsvp"
    className="px-8 py-3 bg-burgundy text-white rounded-full text-sm tracking-widest uppercase hover:bg-burgundy/80 transition duration-300 shadow-lg"
  >
    RSVP Here
  </a>
</motion.div>

      </div>
    </section>
  );
}