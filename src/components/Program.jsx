import Typography from "./Typography";

const events = [
  { date: "Oct 17", time: "12:30 PM", title: "Guest Arrival & Seating", desc: "Santuario de San Vicente de Paul" },
  { date: "Oct 17", time: "1:15 PM", title: "Wedding Ceremony", desc: "Exchange of vows & rings, Unity candle lighting" },
  { date: "Oct 17", time: "2:30 PM", title: "Photo Session", desc: "Bridal party and family portraits" },
  { date: "Oct 17", time: "3:00 PM", title: "Cocktail Hour & Socials", desc: "Drinks & Foods" },
  { date: "Oct 17", time: "3:15 PM", title: "Place Cards & Seating", desc: "Grand entrance of the newlyweds" },
  { date: "Oct 17", time: "4:15 PM", title: "Dinner Service", desc: "Buffet with Toasts" },
  { date: "Oct 17", time: "4:30 PM", title: "Program & Dinner", desc: "Games, Parents Dance, Messages" },
];

export default function Program() {
  return (
    <section
      id="program"
      className="py-24 px-4 flex flex-col justify-center items-center bg-[#f9f4f0] min-h-screen"
    >
      {/* ARCH — decorative cap only, no content */}
      <div
        style={{
          width: "210px",
          height: "105px",
          background: "#fff",
          borderRadius: "1000px 1000px 24px 24px",
        }}
      />

      {/* MAIN CARD — rectangle */}
      <div
        className="w-full pb-9"
        style={{  
          maxWidth: "420px",
          background: "#fff",
        }}
      >
        {/* HEADER */}
        <div className="text-center px-6 pt-6 pb-4">
          <Typography variant="label" className="text-[#c4897a] mb-1">
            October 17, 2026
          </Typography>
          <Typography
            as="p"
            variant="subHeader"
            className="!text-[#3a2a25] text-xs leading-snug mt-1 mb-2"
          >
            The Wedding Day
            <br />
            Schedule
          </Typography>
          <Typography variant="names2xl" className="!text-burgundy mt-1">
            Saturday
          </Typography>
        </div>

        {/* TIMELINE */}
        <div className="px-8 pt-6">
          {events.map((event, i) => (
            <div key={i} className="flex items-start gap-4">

              {/* DATE + TIME */}
              <div className="w-16 shrink-0 text-right pt-0.5">
                <Typography as="span" variant="timeStamp" className="block text-[#9b7060] text-[11px] not-italic tracking-wide">
                  {event.date}
                </Typography>
                <Typography as="span" variant="timeStamp" className="block text-[#9b7060] text-[11px] not-italic tracking-wide">
                  {event.time}
                </Typography>
              </div>

              {/* DOT + STEM */}
              <div className="flex flex-col items-center w-4 shrink-0">
                <div className="w-2 h-2 rounded-full mt-1 shrink-0" style={{ background: "#c4897a" }} />
                {i !== events.length - 1 && (
                  <div className="flex-1" style={{ width: "1.5px", minHeight: "36px", background: "#e8d5cc", margin: "4px 0" }} />
                )}
              </div>

              {/* CONTENT */}
              <div className={i !== events.length - 1 ? "pb-4 pt-0.5" : "pt-0.5"}>
                <Typography variant="eventTitle" className="text-[#3a2a25] text-[14px] font-semibold mb-0.5 not-italic">
                  {event.title}
                </Typography>
                <Typography variant="note" className="text-[#a08070] text-[12px]">
                  {event.desc}
                </Typography>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}