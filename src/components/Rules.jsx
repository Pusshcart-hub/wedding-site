import Typography
 from "./Typography";
export default function Rules() {
const rules = [
{ icon: "📵", title: "Is it an unplugged event?", desc: "Feel free to capture memories from your seat. To help our photo and video team document every special moment, please keep the aisles and reception walkways clear and avoid blocking their line of sight 🤍" },
/*{ icon: "👶", title: "Adults Only", desc: "Unless stated on the message we have sent to you, this is an adult only ceremony and reception." },
{ icon: "👫", title: "Companion", desc: "Unless stated on the message we have sent to you, the invitation is only for you." },
{ icon: "⏰", title: "Be On Time", desc: "Arrive 15 minutes early." },
{ icon: "🥂", title: "Drink Responsibly", desc: "Please arrange safe transport or accomodation." },
{ icon: "🌿", title: "Eco-Friendly", desc: "No confetti or littering inside the church." },
{ icon: "💌", title: "RSVP Deadline", desc: "Please RSVP on or before (date)." },
*/
{ icon: "⛪", title: "Will the ceremony and reception be indoors or outdoors?", desc: "Our ceremony will take place inside the church. For your comfort, we recommend bringing a handheld or portable fan. The reception will be indoors, ensuring a comfortable celebration for everyone" },
{ icon: "👥", title: "Are Plus-Ones Allowed?", desc: "As much as we would love to celebrate with everyone, our guest list has been carefully planned in consideration of our venue capacity. Unless your invitation indicates two seats or is addressed to you and “a Guest,” we kindly ask that you attend solo. We appreciate your understanding and look forward to celebrating this special day with you." },
{ icon: "🚗", title: "Is Parking Available?", desc: "Ample parking is available within the vicinity of both the church and reception venue. We kindly encourage guests to arrive a little early to allow sufficient time for parking and settling in before the ceremony begins."},
{ icon: "🪑", title: "Will there be assigned seating at the reception?", desc: "Yes, place cards will be waiting for you at the reception. We've thoughtfully planned the seating to ensure you're seated with the people you know and enjoy celebrating with most."},
{ icon: "🎁", title: "Thinking of Giving a Gift?", desc: "The greatest gift is celebrating with you. For those who wish to give a little something extra, a monetary gift would be received with gratitude and love."},
{ icon: "🍷", title: "Will alcohol be served at the reception?", desc: "Absolutely! Our mobile bar will be ready to keep the drinks—and the good vibes—flowing. As we'll be celebrating at a church-affiliated venue, we simply ask everyone to sip responsibly and help us keep the atmosphere fun, respectful, and enjoyable for all."},
{ icon: "👶", title: "Are Kids Allowed?", desc: "As much as we adore the little ones, this day is strictly for the grown-ups. Thank you for understanding!" }
];

return ( <section className="py-24 px-4 bg-burgundy text-white"> <div className="max-w-4xl mx-auto text-center">


  
<Typography as="p" variant="sectionTitle" className="text-gold mb-10">Things to Know</Typography>
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
