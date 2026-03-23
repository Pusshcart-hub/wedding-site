export default function Nav() {
return (
<>
{/* Top Nav (desktop + mobile) */}



    <div className="font-serif text-burgundy">
      J & V
    </div>

    <div className="hidden sm:flex gap-6 text-sm">
      <a href="#story" className="hover:text-burgundy">Story</a>
      <a href="#timeline" className="hover:text-burgundy">Timeline</a>
      <a href="#venue" className="hover:text-burgundy">Venue</a>
      <a href="#rsvp" className="hover:text-burgundy">RSVP</a>
    </div>

  </nav>

  {/* Bottom Nav (mobile only) */}
  <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur border-t flex justify-around py-2 text-xs sm:hidden">
    <a href="#story">Story</a>
    <a href="#timeline">Timeline</a>
    <a href="#venue">Venue</a>
    <a href="#rsvp">RSVP</a>
  </nav>
</>

);
}
