import { useState } from "react";

export default function RSVP(){
const [name,setName]=useState("");

const handleSubmit = (e) => {
e.preventDefault();
alert("RSVP submitted: " + name);
};

return ( <section id="rsvp" className="py-16 text-center"> <h2 className="text-3xl font-serif mb-4">RSVP</h2> <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
<input
className="w-full border p-3 rounded"
placeholder="Your name"
value={name}
onChange={(e)=>setName(e.target.value)}
/> <button className="w-full bg-burgundy text-white py-3 rounded">
Submit </button> </form> </section>
)
}
