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

        <Typography as="p" variant="sectionTitle" className="!text-3xl sm:text-4xl text-cream  mt-7 mb-10 drop-shadow-xl">
          Theme & Dress Code
        </Typography>

        <div className="grid sm:grid-cols-2 gap-6">

          {/* Motif */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <div className="text-3xl mb-3">🌹</div>
            <h3 className="font-serif text-xl text-burgundy mb-2">
              Our Theme
            </h3>
            <p className="italic text-gray-700 mb-3">
              <Typography as="h3" variant="contextHead">Modern Romantic Elegance</Typography>
            </p>
            <p className="text-sm text-gray-500">
             <Typography as="h3" variant="context"> We encourage our guests to dress according to the color palette below</Typography>
            </p>

            <div className="flex justify-center gap-2 mt-2">
            {/* <div className="w-6 h-6 rounded-full bg-[#6B1A2A]" />
              <div className="w-6 h-6 rounded-full bg-[#2D1B3D]" />
              <div className="w-6 h-6 rounded-full bg-[#C4857A]" />
              <div className="w-6 h-6 rounded-full bg-[#E8C5BC]" />
              <div className="w-6 h-6 rounded-full bg-[#C9A96E]" /> */} 
               <img
    src="/dc_color.png"
    alt="Color Palette"
    className="h-14 object-contain"
  />
            </div>
          </div>

          {/* Dress Code */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <div className="text-3xl mb-3">👗</div>
            <h3 className="font-serif text-xl text-burgundy mb-2">
              Dress Code
            </h3>
            
              <Typography as="h3" variant="contextHead" className="mb-3">Semi formal</Typography>
            

            <ul className="text-sm text-gray-600 space-y-2 text-left">
              <li><Typography as="h3" variant="context">✦ Ladies: Floor-length gown or a dress that falls below the knee </Typography></li>
              <li><Typography as="h3" variant="context">✦ Gentlemen: Suit or long sleeves with slacks</Typography></li>
              <li className="italic" mt-0 text-center><Typography as="h3" variant="context">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Please try to avoid white in your attire)</Typography></li>
            </ul>
          </div>

        </div>
      </div>

    </section>
  );
}