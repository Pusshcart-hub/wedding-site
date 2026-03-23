export default function DressCode() {
return ( <section className="py-24 px-4 bg-gray-50"> <div className="max-w-4xl mx-auto text-center">


    <p className="uppercase tracking-[0.2em] text-xs text-rose-400 mb-2">
      Look & Feel
    </p>

    <h2 className="text-3xl sm:text-4xl font-serif text-burgundy mb-10">
      Motif & Dress Code
    </h2>

    <div className="grid sm:grid-cols-2 gap-6">

      {/* Motif */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <div className="text-3xl mb-3">🌹</div>
        <h3 className="font-serif text-xl text-burgundy mb-2">
          Our Motif
        </h3>
        <p className="italic text-gray-700 mb-3">
          Romantic Garden Elegance
        </p>
        <p className="text-sm text-gray-500">
          Inspired by florals, candlelight, and timeless romance.
        </p>

        <div className="flex justify-center gap-2 mt-4">
          <div className="w-6 h-6 rounded-full bg-[#6B1A2A]" />
          <div className="w-6 h-6 rounded-full bg-[#2D1B3D]" />
          <div className="w-6 h-6 rounded-full bg-[#C4857A]" />
          <div className="w-6 h-6 rounded-full bg-[#E8C5BC]" />
          <div className="w-6 h-6 rounded-full bg-[#C9A96E]" />
        </div>
      </div>

      {/* Dress Code */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <div className="text-3xl mb-3">👗</div>
        <h3 className="font-serif text-xl text-burgundy mb-2">
          Dress Code
        </h3>
        <p className="italic text-gray-700 mb-3">
          Formal / Black Tie
        </p>

        <ul className="text-sm text-gray-600 space-y-2 text-left">
          <li>✦ Ladies: Long gowns or formal dresses</li>
          <li>✦ Gentlemen: Suit or tuxedo</li>
          <li>✦ Avoid all-white / all-black</li>
          <li>✦ Comfortable shoes recommended</li>
        </ul>
      </div>

    </div>
  </div>
</section>

);
}
