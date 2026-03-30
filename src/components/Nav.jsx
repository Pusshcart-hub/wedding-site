import { useEffect, useState } from "react";
import { Home, Heart, Calendar, MapPin, Mail, ScrollText } from "lucide-react";

export default function Nav() {
const [active, setActive] = useState("");

const links = [
{ id: "hero", icon: <Home size={18} /> },
{ id: "story", icon: <Heart size={18} /> },
{ id: "timeline", icon: <Calendar size={18} /> },
{ id: "program", icon: <ScrollText size={18} /> },
{ id: "venue", icon: <MapPin size={18} /> },
{ id: "rsvp", icon: <Mail size={18} /> },

];

useEffect(() => {
const handleScroll = () => {
const sections = ["hero", "story", "timeline","program","venue", "rsvp"];
let current = "";


  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      const rect = el.getBoundingClientRect();

  if (rect.top <= 150 && rect.bottom >= 150) {
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
? "text-burgundy scale-110"
: "text-gray-500 hover:text-burgundy transition duration-300";

return (
<>
{/* DESKTOP NAV */} 
<nav className="hidden md:flex fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b px-6 py-3 justify-between items-center">


    <div className="font-serif text-burgundy">
      J & V
    </div>

    <div className="flex gap-5">
      {links.map((link, i) => (
        <a
          key={i}
          href={`#${link.id}`}
          className={linkClass(link.id)}
        >
          {link.icon}
        </a>
      ))}
    </div>

  </nav>

  {/* MOBILE NAV */}
  <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur px-6 py-3 rounded-full shadow-lg flex gap-6 z-50">

    {links.map((link, i) => (
      <a
        key={i}
        href={`#${link.id}`}
        className={linkClass(link.id)}
      >
        {link.icon}
      </a>
    ))}

  </nav>
</>


);
}
