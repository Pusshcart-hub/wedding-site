import { motion } from "framer-motion";

export default function Intro({ onEnter }) {
return ( <div className="fixed inset-0 z-50 bg-black text-white flex flex-col items-center justify-center text-center px-4">


  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <p className="uppercase tracking-[0.3em] text-xs text-gray-400 mb-4">
      You're Invited
    </p>

    <h1 className="text-4xl sm:text-6xl font-serif mb-6">
      Joanna & Vincent
    </h1>

    <button
     onClick={() => {
onEnter();
const audio = new Audio("https://www.bensound.com/bensound-music/bensound-romantic.mp3");
audio.loop = true;
audio.play().catch(() => {});
window.bgMusic = audio; // store globally
}}
className="mt-6 px-6 py-3 border border-white rounded-full hover hover transition duration-300"
    >
      Enter
    </button>
  </motion.div>

</div>


);
}
