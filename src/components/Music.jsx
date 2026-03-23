import { useRef, useState } from "react";

export default function Music() {
const audioRef = useRef(null);
const [playing, setPlaying] = useState(false);

const toggleMusic = () => {
if (playing) {
audioRef.current.pause();
} else {
audioRef.current.play();
}
setPlaying(!playing);
};

return (
<> <audio
     ref={audioRef}
     loop
     src="https://www.bensound.com/bensound-music/bensound-romantic.mp3"
   />

```
  <button
    onClick={toggleMusic}
    className="fixed bottom-20 right-4 z-50 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-md text-sm"
  >
    {playing ? "Pause Music" : "Play Music"}
  </button>
</>
```

);
}
