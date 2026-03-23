import { useEffect, useState } from "react";

export default function Hero() {
const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

useEffect(() => {
const interval = setInterval(() => {
const target = new Date("2026-10-17T12:00:00");
const now = new Date();
const diff = target - now;

```
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);

  setTime({ d, h, m, s });
}, 1000);

return () => clearInterval(interval);
```

}, []);

return ( <section className="text-center py-20 bg-gradient-to-r from-burgundy to-purple-900 text-white"> <h1 className="text-4xl sm:text-6xl font-serif mb-3">
Joanna <span className="text-gold">&</span> Vincent </h1>

```
  <p className="mb-6">October 17, 2026</p>

  <div className="flex justify-center gap-4 text-sm sm:text-lg">
    <div>{time.d}d</div>
    <div>{time.h}h</div>
    <div>{time.m}m</div>
    <div>{time.s}s</div>
  </div>
</section>
```

);
}
