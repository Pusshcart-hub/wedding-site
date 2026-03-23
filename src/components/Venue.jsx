import FadeIn from "./FadeIn";
export default function Venue() {
return ( <section id="venue" className="py-20 px-4 bg-white"> <div className="max-w-5xl mx-auto text-center">
<FadeIn>

    <p className="uppercase tracking-[0.2em] text-xs text-rose-400 mb-2">
      Location
    </p>

    <h2 className="text-3xl sm:text-4xl font-serif text-burgundy mb-10">
      Wedding Venue
    </h2>

    <div className="bg-cream rounded-2xl shadow-lg p-6 sm:p-10 mb-10">
      <h3 className="text-xl sm:text-2xl font-serif text-burgundy mb-2">
        The Grand Garden Pavilion
      </h3>

      <p className="text-gray-600 mb-4">
        123 Elegant Street, Quezon City, Philippines
      </p>

      <p className="text-gray-500 text-sm">
        Ceremony and Reception will be held at the same location
      </p>
    </div>

    <div className="w-full h-[300px] sm:h-[400px] rounded-xl overflow-hidden shadow-md">
      <iframe
        title="venue-map"
        src="https://www.google.com/maps?q=Quezon+City&output=embed"
        className="w-full h-full border-0"
        loading="lazy"
      ></iframe>
    </div>

  </div>
    </FadeIn>
</section>


);
}
