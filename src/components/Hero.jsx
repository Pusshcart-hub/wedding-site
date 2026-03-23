import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

useEffect(() => {
const interval = setInterval(() => {
const target = new Date("2026-10-17T12:00:00");
const now = new Date();
const diff = target - now;


  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);

  setTime({ d, h, m, s });
}, 1000);

return () => clearInterval(interval);


}, []);

return (

  <section className="min-h-screen pt-20 flex flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-burgundy via-purple-900 to-black text-white">


<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>

  <p className="uppercase tracking-[0.3em] text-xs text-gray-300 mb-4">
    Together Forever
  </p>

  <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-light mb-4 drop-shadow-[0_2px_10px_rgba(255,215,0,0.3)]">
    Joanna <span className="text-gold italic">&</span> Vincent
  </h1>

  <p className="text-lg sm:text-xl text-gray-300 mb-8 italic">
    October 17, 2026
  </p>

</motion.div>

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5, duration: 1 }}
  className="flex gap-3 sm:gap-6 flex-wrap justify-center"
>
  {[
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
  ))}
</motion.div>


  </section>
);
}
