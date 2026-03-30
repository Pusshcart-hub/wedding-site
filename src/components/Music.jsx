import { useState } from "react";
import { Play, Pause } from "lucide-react";

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
className="fixed bottom-20 right-4 z-50 bg-white/80 backdrop-blur p-3 rounded-full shadow-md hover:scale-110 transition"

>

{playing ? <Pause size={18} /> : <Play size={18} />} </button>

);
}
