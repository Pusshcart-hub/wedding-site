import FadeIn from "./FadeIn";
import Typography from "./Typography";

export default function Venue() {
  return (
    <section id="venue" className="relative isolate py-20 px-4 bg-plum">
      <div className="absolute inset-0 bg-white/10 -z-10 pointer-events-none"></div>
      <FadeIn>
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.2em] text-xs text-rose-600">
            Location
          </p>

          <h2 className="text-3xl sm:text-4xl font-serif text-burgundy mb-6">
            
          </h2>
          <Typography as="h1" variant="sectionTitle" className="text-gold mb-10">Wedding Venue</Typography>

          <div className="bg-cream rounded-2xl shadow-lg p-6 sm:p-10 mb-10">
          <Typography as="h1" variant="label2" className="!text-4xl !sm:text-3xl text-burgundy mb-1 text-left !tracking-normal font-bold"> Ceremony</Typography>
           <Typography as="h1" variant="label2" className="!text-2xl sm:text-3xl !font-semibold text-burgundy mb-1 text-center !tracking-normal !font-extrabold"> Santuario de San Vicente de Paul: Shrine of the Poor</Typography>
           
            <Typography as ="p" variant="context" className="!text-base !text-semibold mb-4" >
              221 Tandang Sora Ave, Tandang Sora, Quezon City, 1116 Metro Manila
            </Typography>
           
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="relative w-full sm:w-1/2 h-[250px] sm:h-[300px] rounded-xl overflow-hidden shadow-md">
                <img
                  src="/santuario2.png" // put your image in /public
                  alt="Church"
                  className="w-full h-full object-cover"
                />

                {/* QR CODE — clickable, opens directions in new tab */}
                <a
                  href="/directions.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 left-3"
                >
                  <img
                    src="/qr.png"
                    alt="Scan for Directions"
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-md shadow-md cursor-pointer hover:opacity-90 transition-opacity"
                  />
                </a>

                {/* "Click me" label + arrow pointing at the QR */}
                <div className="absolute top-7 left-[76px] sm:left-[92px] flex items-center gap-1 pointer-events-none">
                  <span className="text-burgundy text-2xl leading-none rotate-[-20deg] drop-shadow-md" aria-hidden="true">
                    ↖
                  </span>
                  <span className="text-burgundy text-xs italic font-semibold drop-shadow-md whitespace-nowrap">
                    Click me
                  </span>
                </div>
              </div>

              {/* RIGHT: MAP */}
              <div className="w-full sm:w-1/2 h-[250px] sm:h-[300px] rounded-xl overflow-hidden shadow-md">
                <iframe
                  title="venue-map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.619712791783!2d121.03689427577447!3d14.677510075187769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b72ed39a4c2d%3A0xf6bec069ecd91cde!2s221%20Tandang%20Sora%20Ave%2C%20Tandang%20Sora%2C%20Quezon%20City%2C%201116%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1774275468633!5m2!1sen!2sph"
                  className="w-full h-full border-0"
                  loading="lazy"
                ></iframe>
              </div>
            </div>{" "}
            <Typography as="h1" variant="label2" className="!text-4xl !sm:text-3xl text-burgundy mb-1 text-left !tracking-normal font-bold mt-4">  Reception</Typography>
          
          <Typography as="h1" variant="label2" className="!text-2xl sm:text-3xl !font-semibold text-burgundy mb-1 text-center !tracking-normal !font-extrabold">   Bulwagang San Vicente</Typography>
          
             <Typography as ="p" variant="context" className="!text-base !text-semibold" >  Dinner and dancing to follow at Bulwagang San Vicente (Same location)</Typography>   
            
          </div>
        </div>
      </FadeIn>
    </section>
  );
}