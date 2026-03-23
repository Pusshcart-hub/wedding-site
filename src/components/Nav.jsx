import { useEffect, useState } from "react";

export default function Nav() {
const [active, setActive] = useState("");

useEffect(() => {
const handleScroll = () => {
const sections = ["story", "timeline", "venue", "rsvp"];


  let current = "";

  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.offsetTop - 120;
      if (window.scrollY >= top) {
        current = id;
      }
    }
  });

  setActive(current);
};

window.addEventListener("scroll", handleScroll);
return () => window.removeEventListener("scroll", handleScroll);


}, []);

const linkClass = (id) =>
active === id
? "text-burgundy font-semibold"
: "text-gray-600 hover:text-burgundy transition duration-300";

return (
<> <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b px-6 py-3 flex justify-between items-center">


    <div className="font-serif text-burgundy">
      J & V
    </div>

    <div className="hidden sm:flex gap-6 text-sm">
      <a href="#story" className={linkClass("story")}>Story</a>
      <a href="#timeline" className={linkClass("timeline")}>Timeline</a>
      <a href="#venue" className={linkClass("venue")}>Venue</a>
      <a href="#rsvp" className={linkClass("rsvp")}>RSVP</a>
    </div>

  </nav>

  <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur border-t flex justify-around py-2 text-xs sm:hidden">
    <a href="#story" className={linkClass("story")}>Story</a>
    <a href="#timeline" className={linkClass("timeline")}>Timeline</a>
    <a href="#venue" className={linkClass("venue")}>Venue</a>
    <a href="#rsvp" className={linkClass("rsvp")}>RSVP</a>
  </nav>
</>


);
}
