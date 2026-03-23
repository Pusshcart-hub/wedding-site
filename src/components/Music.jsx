import { useRef, useState, useEffect } from "react";

export default function Music({ autoPlay }) {
const audioRef = useRef(null);
const [playing, setPlaying] = useState(false);

useEffect(() => {
if (autoPlay && audioRef.current) {
audioRef.current.play()
.then(() => setPlaying(true))
.catch(() => {});
}
}, [autoPlay]);

const toggleMusic = async () => {
try {
if (playing) {
audioRef.current.pause();
} else {
await audioRef.current.play();
}
setPlaying(!playing);
} catch (err) {
console.log("Playback blocked:", err);
}
};

return (
<>
{/* ✅ THIS WAS MISSING */}



  <button
    onClick={toggleMusic}
    className="fixed bottom-20 right-4 z-50 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-md text-sm"
  >
    {playing ? "Pause Music" : "Play Music"}
  </button>
</>

);
}
