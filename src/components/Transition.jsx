import { motion } from "framer-motion";

// Full-screen transition shown between Intro and Hero.
// Spins the monogram as a loading icon, then fades out and calls onDone().
export default function Transition({ onDone }) {
  return (
    <motion.div
      className="fixed inset-0 z-40 bg-black flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <motion.img
        src="/jv_mono.png"
        alt="Loading"
        style={{ width: 120, height: 120, objectFit: "contain" }}
        animate={{ rotateY: 360 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Fades whole screen to black, then calls onDone */}
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.5, ease: "easeIn" }}
        onAnimationComplete={onDone}
      />
    </motion.div>
  );
}