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
```
