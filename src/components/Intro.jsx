import { motion } from "framer-motion";

export default function Intro({ onEnter }) {
return (



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
      onClick={onEnter}
      className="mt-6 px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition duration-300"
    >
      Enter
    </button>
  </motion.div>

</div>

);
}
