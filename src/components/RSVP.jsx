import { useState } from "react";

export default function RSVP() {
const [name, setName] = useState("");

return (

RSVP

  <input
    value={name}
    onChange={(e) => setName(e.target.value)}
    placeholder="Your name"
    className="border p-3 rounded"
  />
</section>

);
}
