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
          src="/bg_hero.png"
          alt="Wedding"
          className="w-full h-full object-cover object-bottom"
        />
      </div>
 {/*<div className="absolute inset-0 bg-plum/20 z-0"></div>
      {/* CENTERED CONTENT — Name, Countdown, Heading */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-5xl">
  <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-10 sm:px-12 sm:py-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >
          <Typography as="p" variant="names" className="!text-4xl sm:!text-6xl mb-6 sm:mb-9 leading-none text-burgundy">The wedding</Typography>
          <Typography as="p" variant="label" className="!text-sm sm:!text-base mb-3 sm:mb-4 !font-bold !text-gold drop-shadow-xl">Joanna <span className="text-gold font-bold italic">&</span> Vincent</Typography>
          <Typography as="p" variant="label2" className="!text-xs sm:!text-sm mb-6 sm:mb-10 !font-bold !text-gold drop-shadow-xl">OCTOBER 17, 2026</Typography>
          <Typography as="p" variant="heading" className="!text-2xl sm:!text-4xl mb-4 sm:mb-5 text-plum2 font-bold">FOREVER STARTS SOON</Typography>
        </motion.div>

        {/* COUNTDOWN */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex gap-2 sm:gap-6 flex-wrap justify-center"
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
                className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-2 sm:px-4 sm:py-3 rounded-lg min-w-[56px] sm:min-w-[70px]"
              >
                <div className="text-lg sm:text-3xl font-serif text-gold">
                  {item.value}
                </div>
                <div className="text-[9px] sm:text-[10px] tracking-widest uppercase text-lbrown">
                  {item.label}
                </div>
              </div>
            ))
          )}
        </motion.div>

      

      <div className="relative z-10 w-full max-w-5xl mt-1 sm:mt-2 flex justify-center">
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="max-w-sm text-center"
  >
    <Typography as="h3" variant="note" className="!text-xs sm:!text-sm text-lbrown drop-shadow-lg">
      Kindly RSVP on or before September 1, 2026, to ensure your spot on our special day
    </Typography>

    <motion.a
      href="#rsvp"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className="inline-block mt-2 px-6 py-2 sm:px-8 sm:py-3 bg-gold text-white rounded-full text-xs sm:text-sm tracking-widest uppercase hover:bg-gold/80 transition duration-300 shadow-lg"
    >
      RSVP Here
    </motion.a>
  </motion.div>
</div>
</div>
</div>

    </section>
  );
}