export default function Rules() {
const rules = [
{ icon: "📵", title: "Unplugged Ceremony", desc: "Please keep phones away during ceremony." },
{ icon: "👶", title: "Adults Only", desc: "Reception is for adults only." },
{ icon: "⏰", title: "Be On Time", desc: "Arrive 15 minutes early." },
{ icon: "🥂", title: "Drink Responsibly", desc: "Please arrange safe transport." },
{ icon: "🌿", title: "Eco-Friendly", desc: "No confetti or littering." },
{ icon: "💌", title: "RSVP Deadline", desc: "Please RSVP on time." },
];

return ( <section className="py-24 px-4 bg-burgundy text-white"> <div className="max-w-4xl mx-auto text-center">


    <p className="uppercase tracking-[0.2em] text-xs text-rose-200 mb-2">
      Please Note
    </p>

    <h2 className="text-3xl sm:text-4xl font-serif mb-10">
      House Rules
    </h2>

    <div className="grid sm:grid-cols-2 gap-4">
      {rules.map((rule, i) => (
        <div
          key={i}
          className="bg-white/10 p-4 rounded-xl text-left flex items-start gap-3"
>
  {/* ICON */}
  <div className="text-1xl mt-1">
    {rule.icon}
  </div>

  {/* TEXT BLOCK */}
  <div>
    <h4 className="font-semibold">
      {rule.title}
    </h4>

    <p className="text-sm text-white/80 mt-1">
      {rule.desc}
    </p>
  </div></div>
      ))}
    </div>

  </div>
</section>


);
}
