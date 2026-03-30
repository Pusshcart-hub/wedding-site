import { motion } from "framer-motion";

// Full-screen transition shown between Intro and Hero.
// Plays a wax-seal bloom + petal unfurl, then calls onDone() to unmount.
export default function Transition({ onDone }) {
  return (
    <motion.div
      className="fixed inset-0 z-40 bg-black flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      onAnimationComplete={() => {
        // Safety: parent handles the real timing via setTimeout
      }}
    >
      <svg
        viewBox="0 0 200 200"
        width="220"
        height="220"
        xmlns="http://www.w3.org/2000/svg"
        overflow="visible"
      >
        {/* Radiating lines — expand outward */}
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i / 16) * 360;
          const rad = (angle * Math.PI) / 180;
          return (
            <motion.line
              key={i}
              x1={100 + 28 * Math.cos(rad)}
              y1={100 + 28 * Math.sin(rad)}
              x2={100 + 28 * Math.cos(rad)}
              y2={100 + 28 * Math.sin(rad)}
              stroke="#c9a96e"
              strokeWidth="1"
              animate={{
                x2: 100 + 80 * Math.cos(rad),
                y2: 100 + 80 * Math.sin(rad),
                opacity: [0, 0.7, 0],
              }}
              transition={{
                duration: 1.2,
                delay: 0.2,
                ease: "easeOut",
              }}
            />
          );
        })}

        {/* Outer ring — fades in then out */}
        <motion.circle
          cx="100" cy="100" r="70"
          fill="none"
          stroke="#c9a96e"
          strokeWidth="0.8"
          strokeDasharray="4 6"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: [0, 0.5, 0], scale: [0.5, 1.1, 1.3] }}
          transition={{ duration: 1.4, delay: 0.1, ease: "easeOut" }}
          style={{ transformOrigin: "100px 100px" }}
        />

        {/* Seal body — scales up */}
        <motion.circle
          cx="100" cy="100" r="40"
          fill="#6B1A2A"
          stroke="#c9a96e"
          strokeWidth="1.5"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.15, 1], opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ transformOrigin: "100px 100px" }}
        />

        {/* Seal spokes */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          return (
            <motion.line
              key={i}
              x1={100 + 22 * Math.cos(rad)}
              y1={100 + 22 * Math.sin(rad)}
              x2={100 + 36 * Math.cos(rad)}
              y2={100 + 36 * Math.sin(rad)}
              stroke="#c9a96e"
              strokeWidth="1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.04, duration: 0.3 }}
            />
          );
        })}

        {/* Initials */}
        <motion.text
          x="100" y="105"
          textAnchor="middle"
          fontSize="16"
          fontFamily="Georgia, serif"
          fill="#c9a96e"
          letterSpacing="3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          style={{ pointerEvents: "none" }}
        >
          J&V
        </motion.text>

        {/* Whole seal fades out */}
        <motion.circle
          cx="100" cy="100" r="100"
          fill="black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.5, ease: "easeIn" }}
          onAnimationComplete={onDone}
        />
      </svg>
    </motion.div>
  );
}
