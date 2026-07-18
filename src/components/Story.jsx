import FadeIn from "./FadeIn";
import Typography from "./Typography";
export default function Story() {
  return (
  <section id="story"  className="relative overflow-hidden py-24 px-4">

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
          <div className="bg-plum/20 backdrop-blur-sm rounded-2xl px-6 py-8 sm:px-10 sm:py-10">

            <p className="uppercase tracking-[0.2em] text-xs text-rose-600 mb-9 text-center">
              Our Story
            </p>

            <Typography as="p" variant="sectionTitle" className="!text-3xl sm:text-4xl text-b1 mt-4 text-center"> How It All Began</Typography>

            {/* Photo Collage */}
            <div
              className="relative mx-auto mb-0 sm:mb-4 h-[230px] sm:h-[370px]"
              style={{ width: '100%', maxWidth: 700 }}
            >

              {/* Main center photo */}
              <div
                className="absolute rounded-sm overflow-hidden shadow-lg"
                style={{ width: '60%', aspectRatio: '3/2', left: '50%', transform: 'translateX(-50%)', top: '17%', zIndex: 2 }}
              >
                <img src="/storyMid.jpeg" alt="Us together" className="w-full h-full object-contain" />
              </div>

              {/* Left photo — grayscale, slightly rotated */}
              <div
                className="absolute rounded-sm overflow-hidden shadow-lg"
                style={{ width: '28%', aspectRatio: '3 / 4', left: '2%', top: '37%', zIndex: 3, transform: 'rotate(-4deg)' }}
              >
                <img src="/storyLeft.jpg" alt="A quiet moment" className="w-full h-full object-cover" />
              </div>

              {/* Right photo — behind main */}
              <div
                className="absolute rounded-sm overflow-hidden shadow-lg"
                style={{ width: '28%', aspectRatio: '3 / 4', right: '2%', top: '11%', zIndex: 3, transform: 'rotate(3deg)' }}
              >
                <img src="/storyRight.jpg" alt="Smiling together" className="w-full h-full object-cover" />
              </div>

            </div>

          
           <Typography as="p" variant="storyText" className="text-cream font-bold">Our story began in 2020, at a time when the world stood still. While uncertainty filled each day and everyone was learning to navigate life during the pandemic, we found something unexpected in one another—a sense of comfort, genuine connection, and a reason to smile amidst the chaos.What started as simple conversations gradually became the brightest part of our days, reminding us that even in the most uncertain seasons, beautiful beginnings are possible.</Typography>
           
           <Typography as="p" variant="storyText" className="text-cream font-bold mt-5">Later that same year, we chose each other and officially began our journey as a couple. Since then, our story has been shaped by countless conversations, shared dreams, quiet moments, and adventures that brought us closer with every passing year.Looking back, we're grateful that our paths crossed when they did. What began during one of the world's most challenging times has become the greatest blessing of our lives, and now, we're excited to begin our next chapter together. </Typography>
           
          </div>

        </div>
      </FadeIn>
    </section>
  );
}