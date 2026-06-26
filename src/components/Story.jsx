import FadeIn from "./FadeIn";
import Typography from "./Typography";
export default function Story() {
  return (
    <section id="story" className="py-24 px-4 text-center bg-cream">
      <FadeIn>
        <div className="max-w-2xl mx-auto">

          <p className="uppercase tracking-[0.2em] text-xs text-rose-400 mb-9">
            Our Story
          </p>

 <Typography as="p" variant="sectionTitle" className="!text-3xl sm:text-4xl text-burgundy mt-4"> How It All Began</Typography>
          {/* Photo Collage */}
          <div className="relative mx-auto mb-12" style={{ width: '100%', maxWidth: 700, height: 570 }}>

  {/* Main center photo */}
  <div
    className="absolute rounded-sm overflow-hidden shadow-lg"
    style={{ width: '50%', height: 420, left: '50%', marginTop: -30, transform: 'translateX(-50%)', top: 30, zIndex: 2 }}
  >
    <img src="/gall1.jpg" alt="Us together" className="w-full h-full object-cover" />
  </div>

  {/* Left photo — grayscale, slightly rotated */}
  <div
    className="absolute rounded-sm overflow-hidden shadow-lg grayscale"
    style={{ width: '35%', height: 255, left: '2%', top: 120, zIndex: 3, transform: 'rotate(-4deg)' }}
  >
    <img src="/gall2.jpg" alt="A quiet moment" className="w-full h-full object-cover" />
  </div>

  {/* Right photo — behind main */}
  <div
    className="absolute rounded-sm overflow-hidden shadow-lg"
    style={{ width: '30%', height: 210, right: '2%', top: 45, zIndex: 3, transform: 'rotate(3deg)' }}
  >
    <img src="/gall9.jpg" alt="Smiling together" className="w-full h-full object-cover" />
  </div>

</div>
          <p className="text-gray-600 leading-relaxed mb-4">
            It was a quiet autumn evening when their eyes first met across a crowded room.
            What started as a simple conversation turned into something neither of them expected.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Through laughter, adventures, and unforgettable moments, their love grew into a story
            worth celebrating — and this is just the beginning.
          </p>

        </div>
      </FadeIn>
    </section>
  );
}