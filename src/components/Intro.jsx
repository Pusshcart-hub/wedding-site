import { motion } from "framer-motion";
import { useState } from "react";

export default function Intro({ onEnter }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (clicked) return;
    setClicked(true);

    const audio = new Audio("/test.mp3");
    audio.loop = true;
    audio.volume = 0.5;
    audio.play().catch(() => {});
    window.bgMusic = audio;

    // Give the flap animation a moment before entering
    setTimeout(() => {
      onEnter();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black text-white flex flex-col items-center justify-center text-center px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center"
      >
        <p className="uppercase tracking-[0.3em] text-xs text-gray-400 mb-4">
          You're Invited
        </p>

        <h1 className="text-4xl sm:text-6xl font-serif mb-10">
          Joanna & Vincent
        </h1>

        {/* Envelope */}
        <div
          className="relative select-none"
          style={{ width: 220, height: 160, cursor: clicked ? "default" : "pointer" }}
          onClick={handleClick}
        >
          <svg
            viewBox="0 0 220 160"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "100%", overflow: "visible" }}
          >
            {/* Envelope body */}
            <rect
              x="0" y="30" width="220" height="130"
              rx="6" ry="6"
              fill="#1a1a1a"
              stroke="#c9a96e"
              strokeWidth="1.5"
            />

            {/* Bottom left fold */}
            <polygon points="0,160 110,95 0,30" fill="#111" stroke="#c9a96e" strokeWidth="1" />
            {/* Bottom right fold */}
            <polygon points="220,160 110,95 220,30" fill="#111" stroke="#c9a96e" strokeWidth="1" />
            {/* Bottom flap */}
            <polygon points="0,160 110,95 220,160" fill="#161616" stroke="#c9a96e" strokeWidth="1" />

            {/* Top flap — animates open on click */}
            <motion.polygon
              points="0,30 110,95 220,30"
              fill="#1a1a1a"
              stroke="#c9a96e"
              strokeWidth="1.5"
              style={{ transformOrigin: "110px 30px" }}
              animate={clicked ? { rotateX: 180, opacity: 0.3 } : { rotateX: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            />

            {/* Wax seal */}
            <motion.g
              style={{ transformOrigin: "110px 90px" }}
              animate={clicked ? { opacity: 0, scale: 0.5 } : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <circle cx="110" cy="90" r="22" fill="#8b1a1a" stroke="#c9a96e" strokeWidth="1.5" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                const rad = (angle * Math.PI) / 180;
                return (
                  <line
                    key={i}
                    x1={110 + 12 * Math.cos(rad)} y1={90 + 12 * Math.sin(rad)}
                    x2={110 + 20 * Math.cos(rad)} y2={90 + 20 * Math.sin(rad)}
                    stroke="#c9a96e" strokeWidth="1"
                  />
                );
              })}
              <text
                x="110" y="94"
                textAnchor="middle"
                fontSize="10"
                fontFamily="Georgia, serif"
                fill="#c9a96e"
                letterSpacing="2"
                style={{ pointerEvents: "none" }}
              >
                J&V
              </text>
            </motion.g>
          </svg>

          {/* Hint */}
          <motion.p
            className="text-xs text-gray-500 mt-3 tracking-widest uppercase text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: clicked ? 0 : 1 }}
            transition={{ delay: clicked ? 0 : 1, duration: 0.8 }}
          >
            tap to enter
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}