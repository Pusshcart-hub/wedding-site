import FadeIn from "./FadeIn";
import Typography from "./Typography";
export default function Story() {
  return (
  <section className="relative overflow-hidden py-24 px-4">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bg_story.png"
          alt="Dress Code Background"
          className="w-full h-full object-cover"
        />
      </div>

      <FadeIn>
        <div className="relative z-10 max-w-2xl mx-auto">

          {/* TEXT CONTAINER — opaque background for readability, starts from "Our Story" */}
          <div className="bg-blush/20 backdrop-blur-sm rounded-2xl px-6 py-8 sm:px-10 sm:py-10">

            <p className="uppercase tracking-[0.2em] text-xs text-rose-400 mb-9 text-center">
              Our Story
            </p>

            <Typography as="p" variant="sectionTitle" className="!text-3xl sm:text-4xl text-burgundy mt-4 text-center"> How It All Began</Typography>

            {/* Photo Collage */}
            <div className="relative mx-auto mb-12" style={{ width: '100%', maxWidth: 700, height: 400 }}>

              {/* Main center photo */}
              <div
                className="absolute rounded-sm overflow-hidden shadow-lg"
                style={{ width: '50%', height: 420, left: '50%', marginTop: -30, transform: 'translateX(-50%)', top: 30, zIndex: 2 }}
              >
                <img src="/gall1.jpg" alt="Us together" className="w-full h-full object-cover" />
              </div>

              {/* Left photo — grayscale, slightly rotated */}
              <div
                className="absolute rounded-sm overflow-hidden shadow-lg"
                style={{ width: '28%', aspectRatio: '3 / 4', left: '2%', top: 150, zIndex: 3, transform: 'rotate(-4deg)' }}
              >
                <img src="/storyLeft.jpg" alt="A quiet moment" className="w-full h-full object-cover" />
              </div>

              {/* Right photo — behind main */}
              <div
                className="absolute rounded-sm overflow-hidden shadow-lg"
                style={{ width: '28%', aspectRatio: '3 / 4', right: '2%', top: 45, zIndex: 3, transform: 'rotate(3deg)' }}
              >
                <img src="/storyRight.jpg" alt="Smiling together" className="w-full h-full object-cover" />
              </div>

            </div>

            <Typography as="p" variant="storyText" className="mb-4">
              It was a quiet autumn evening when their eyes first met across a crowded room.
              What started as a simple conversation turned into something neither of them expected.
           </Typography>
            <Typography as="p" variant="storyText" className="font-bold !text-xs mb-4 mt-4">Through laughter, adventures, and unforgettable moments, their love grew into a story
              worth celebrating — and this is just the beginning.</Typography>
              <Typography as="p" variant="storyText" className="mb-4">Through laughter, adventures, and unforgettable moments, their love grew into a story
              worth celebrating — and this is just the beginning.</Typography>
          
           <Typography as="p" variant="storyText" className="text-cream">Through laughter, adventures, and unforgettable moments, their love grew into a story
              worth celebrating — and this is just the beginning.</Typography>

          </div>

        </div>
      </FadeIn>
    </section>
  );
}