export default function Nav() {
return (
<> <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b px-6 py-3 flex justify-between items-center">


    <div className="font-serif text-burgundy">
      J & V
    </div>

    <div className="hidden sm:flex gap-6 text-sm">
      <a href="#story" className="hover:text-burgundy transition duration-300">Story</a>
      <a href="#timeline" className="hover:text-burgundy transition duration-300">Timeline</a>
      <a href="#venue" className="hover:text-burgundy transition duration-300">Venue</a>
      <a href="#rsvp" className="hover:text-burgundy transition duration-300">RSVP</a>
    </div>

  </nav>

  <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur border-t flex justify-around py-2 text-xs sm:hidden">
    <a href="#story" className="hover:text-burgundy transition duration-300">Story</a>
    <a href="#timeline" className="hover:text-burgundy transition duration-300">Timeline</a>
    <a href="#venue" className="hover:text-burgundy transition duration-300">Venue</a>
    <a href="#rsvp" className="hover:text-burgundy transition duration-300">RSVP</a>
  </nav>
</>


);
}
