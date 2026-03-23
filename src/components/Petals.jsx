export default function Petals() {
return ( <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
{[...Array(12)].map((_, i) => (
<span
key={i}
className="absolute w-3 h-3 bg-pink-300 opacity-70 rounded-full animate-float"
style={{
left: Math.random() * 100 + "%",
animationDuration: 6 + Math.random() * 5 + "s",
animationDelay: Math.random() * 5 + "s"
}}
/>
))} </div>
);
}
