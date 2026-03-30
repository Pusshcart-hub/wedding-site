export default function Program() {
  const events = [
    {
      time: "12:30 PM",
      title: "Guest Arrival & Seating",
      desc: "Santuario de San Vicente de Paul",
    },
    {
      time: "1:30 PM",
      title: "Wedding Ceremony",
      desc: "Exchange of vows & rings, Unity candle lighting",
    },
    {
      time: "2:30 PM",
      title: "Photo Session",
      desc: "Bridal party and family portraits",
    },
    {
      time: "3:00 PM",
      title: "Cocktail Hour",
      desc: "Drinks & Foods",
    },
    {
      time: "3:15 PM",
      title: "Place cards and seating",
      desc: "Grand entrance of the newlyweds",
    },
    {
      time: "6:30 PM",
      title: "Dinner Service",
      desc: "3-course plated dinner with toasts",
    },
    {
      time: "8:00 PM",
      title: "First Dance & Cake Cutting",
      desc: "First dance as a married couple",
    },
    {
      time: "8:30 PM",
      title: "Open Dance Floor",
      desc: "Live band, photo booth, and fun",
    },
  ];

  return (
    <section id="program" className="py-24 px-4 text-center bg-cream py-24 px-4">
      <div className="max-w-3xl mx-auto">
        {/* HEADER */}
        <div className="bg-burgundy text-white px-6 py-4 rounded-t-xl font-serif text-lg">
          October 17, 2026 — Full Day Programme
        </div>

        {/* LIST */}
        <div className="overflow-hidden rounded-b-xl shadow-md">
          {events.map((event, i) => (
            <div
              key={i}
              className={`flex gap-6 px-6 py-5 border-b border-gray-300/50 hover:bg-rose-50 transition duration-300 ${
                i % 2 === 0 ? "bg-gray-100" : "bg-gray-50"
              }`}
            >
              {/* TIMELINE INDICATOR */}
              <div className="flex flex-col items-center">
                <div className="w-2 h-2 bg-burgundy rounded-full z-10"></div>
                {/* LINE (not for last item) */}
                {i !== events.length - 1 && (
                  <div className="w-[2px] flex-1 bg-gray-300"></div>
                )}
              </div>

              {/* TIME */}
              <div className="w-24 text-burgundy font-semibold">
                {event.time}
              </div>

              {/* DETAILS */}
              <div>
                <h4 className="font-medium text-gray-900">{event.title}</h4>
                <p className="text-sm text-gray-500 mt-1">{event.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
