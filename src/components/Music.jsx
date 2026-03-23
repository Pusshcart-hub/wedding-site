import { useState } from "react";

export default function Music() {
const [playing, setPlaying] = useState(true);

const toggleMusic = () => {
if (!window.bgMusic) return;


if (playing) {
  window.bgMusic.pause();
} else {
  window.bgMusic.play();
}

setPlaying(!playing);


};

return ( <button
   onClick={toggleMusic}
   className="fixed bottom-20 right-4 z-50 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-md text-sm"
 >
{playing ? "Pause Music" : "Play Music"} </button>
);
}
