import FadeIn from "./FadeIn";
export default function Venue() {
  return (
    <section id="venue" className="py-20 px-4 bg-white">
      <FadeIn>
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.2em] text-xs text-rose-400 mb-2">
            Location
          </p>

          <h2 className="text-3xl sm:text-4xl font-serif text-burgundy mb-10">
            Wedding Venue
          </h2>

          <div className="bg-cream rounded-2xl shadow-lg p-6 sm:p-10 mb-10">
            <h3 className="text-xl sm:text-2xl font-serif text-burgundy mb-2">
              Santuario de San Vicente de Paul: Shrine of the Poor
            </h3>
            <p className="text-gray-600 mb-4">
              221 Tandang Sora Ave, Tandang Sora, Quezon City, 1116 Metro Manila
            </p>
            <p className="text-gray-500 text-sm">
              Ceremony and Reception will be held at the same location
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="w-full sm:w-1/2 h-[250px] sm:h-[300px] rounded-xl overflow-hidden shadow-md">
                <img
                  src="/santuario.png" // put your image in /public
                  alt="Church"
                  className="w-full h-full object-cover"
                />
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
          </div>
        </div>
      </FadeIn>
    </section>
  );
}