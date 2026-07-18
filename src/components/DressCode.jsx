import Typography from "./Typography";

export default function DressCode() {
  return (
    <section className="relative overflow-hidden py-24 px-4">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bg_motif.png"
          alt="Dress Code Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* OPTIONAL OVERLAY — helps text stay readable over the image */}
      <div className="absolute inset-0 bg-white/10 z-0"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">

        <p className="uppercase tracking-[0.2em] text-xs text-rose-400 mb-2">
          Look & Feel
        </p>

        <Typography
          as="p"
          variant="sectionTitle"
          className="!text-3xl sm:text-4xl text-cream mt-7 mb-10 drop-shadow-xl"
        >
          Theme & Dress Code
        </Typography>

        <div className="grid sm:grid-cols-2 gap-6">

          {/* Motif */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <div className="text-3xl mb-3">🌹</div>

            <Typography
              as="h2"
              variant="contextHead"
              className="!text-xl !md:text-lg !font-extrabold text-burgundy mb-2"
            >
              Our Theme
            </Typography>

            <Typography as="h3" variant="contextHead" className="mb-3">
              Modern Romantic Elegance
            </Typography>

            <p className="text-sm text-gray-500">
              <Typography as="h3" variant="context">
                We encourage our guests to dress according to the color palette below
              </Typography>
            </p>

            <div className="flex justify-center gap-2 mt-2">
              <img
                src="/dc_color.png"
                alt="Color Palette"
                className="h-14 object-contain"
              />
            </div>

            <p className="text-xs text-gray-500 mt-4 leading-relaxed">
              <Typography as="h3" variant="context">
                <span className="font-extrabold text-lbrown">Kindly note:</span> To
                our Principal Sponsors, Secondary Sponsors, and other members of the
                entourage, we request that you follow the designated color palette
                that was personally provided to you. We sincerely appreciate your
                cooperation and look forward to celebrating with you 🙂
              </Typography>
            </p>
          </div>

          {/* Dress Code */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <div className="text-3xl mb-3">👗</div>

            <Typography
              as="h2"
              variant="contextHead"
              className="!text-xl !md:text-lg !font-extrabold text-burgundy mb-2"
            >
              Dress Code
            </Typography>

            <Typography as="h3" variant="contextHead" className="mb-3">
              Semi formal
            </Typography>

            <ul className="text-sm text-gray-600 space-y-5 text-left mt-4">
              <li>
                <Typography as="h3" variant="context">
                  ✦ Ladies: Floor-length gown or a dress that falls below the knee
                </Typography>
              </li>
              <li>
                <Typography as="h3" variant="context">
                  ✦ Gentlemen: Suit or long sleeves with slacks
                </Typography>
              </li>
              <li className="italic mt-0 text-center">
                <Typography as="h3" variant="context">
                  (Please avoid white in your attire)
                </Typography>
              </li>
            </ul>
          </div>

        </div>

      </div>

    </section>
  );
}