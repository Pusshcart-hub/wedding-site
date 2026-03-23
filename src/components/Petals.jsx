export default function Petals() {
  const petalChars = ["🌸", "🌺", "🌹", "✦", "·"];

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-10">
      {[...Array(20)].map((_, i) => {
        const randomChar =
          petalChars[Math.floor(Math.random() * petalChars.length)];

        const size = Math.random() * 10 + 10;
        const left = Math.random() * 100;
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 10;

        return (
          <span
            key={i}
            className="absolute"
            style={{
              left: `${left}%`,
              fontSize: `${size}px`,
              animation: `fall ${duration}s linear infinite`,
              animationDelay: `${delay}s`,
            }}
          >
            {randomChar}
          </span>
        );
      })}
    </div>
  );
}