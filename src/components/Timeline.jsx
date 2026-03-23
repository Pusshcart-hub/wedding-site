import { motion } from "framer-motion";

export default function Timeline() {
const events = [
{
date: "October 2022",
title: "The First Meeting",
desc: "A chance encounter that started everything."
},
{
date: "March 2023",
title: "First Trip Together",
desc: "A beautiful journey full of memories."
},
{
date: "November 2024",
title: "The Proposal",
desc: "A moment that changed everything forever."
},
{
date: "October 2026",
title: "The Wedding Day",
desc: "The beginning of our forever."
}
];

return ( <section id="timeline" className="py-24 px-4 bg-gray-50">
<motion.div
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
viewport={{ once: true }}
className="max-w-4xl mx-auto"
>

```
    <div className="text-center mb-12">
      <p className="uppercase tracking-[0.2em] text-xs text-rose-400 mb-2">
        Moments
      </p>

      <h2 className="text-3xl sm:text-4xl font-serif text-burgundy">
        Our Journey
      </h2>
    </div>

    <div className="space-y-6">
      {events.map((event, i) => (
        <div
          key={i}
          className="bg-white rounded-xl shadow-md p-6 text-center sm:text-left"
        >
          <p className="text-xs uppercase tracking-widest text-gold mb-2">
            {event.date}
          </p>

          <h3 className="text-xl font-serif text-burgundy mb-2">
            {event.title}
          </h3>

          <p className="text-gray-600 text-sm">
            {event.desc}
          </p>
        </div>
      ))}
    </div>

  </motion.div>
</section>


);
}
