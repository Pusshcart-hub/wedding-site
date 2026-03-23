import { useState } from "react";

export default function RSVP() {
  const [form, setForm] = useState({
    name: "",
    attending: "yes",
    guests: 1,
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("RSVP submitted! Thank you, " + form.name);
  };

  return (
    <section id="rsvp" className="py-24 px-4 bg-gray-50">
      <div className="max-w-xl mx-auto text-center">

        <p className="uppercase tracking-[0.2em] text-xs text-rose-400 mb-2">
          Join Us
        </p>

        <h2 className="text-3xl sm:text-4xl font-serif text-burgundy mb-10">
          RSVP
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 sm:p-8 rounded-2xl shadow-md space-y-4"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          />

          <select
            name="attending"
            value={form.attending}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          >
            <option value="yes">Will attend</option>
            <option value="no">Cannot attend</option>
          </select>

          <input
            type="number"
            name="guests"
            min="1"
            value={form.guests}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            name="message"
            placeholder="Message (optional)"
            value={form.message}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-burgundy text-white py-3 rounded-lg hover:scale-[1.02] hover:opacity-90 transition duration-300 shadow-md"
          >
            Submit RSVP
          </button>

        </form>

      </div>
    </section>
  );
}
