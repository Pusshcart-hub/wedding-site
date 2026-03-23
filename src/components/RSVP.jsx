import FadeIn from "./FadeIn";
import { useState } from "react";

export default function RSVP() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    attending: "yes",
    guests: 0,
    companion:"",
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
    try {
await fetch("https://script.google.com/macros/s/AKfycbx6iI_1CAlzVvBGPjuiocepPTqf_ZUwVuKzYmvkpfwBBHzlQO_2upjCUQf-iEh4kFMq/exec", {
method: "POST",
body: JSON.stringify(form),
});

alert("RSVP submitted successfully! 💌");

setForm({
  name: "",
  email: "",
  attending: "yes",
  guests: 1,
  message: ""
});

} catch (error) {
alert("Something went wrong. Please try again.");
}
  };

  return (
    <section id="rsvp" className="py-24 px-4 bg-gray-50">
      <FadeIn>
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
            className="w-full border border-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-burgundy/30"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-burgundy/30"
            required
          />

          <div className="flex justify-center gap-6 text-sm mb-2">
  <label className="flex items-center gap-2 cursor-pointer">
    <input
      type="radio"
      name="attending"
      value="yes"
      checked={form.attending === "yes"}
      onChange={handleChange}
      className="accent-burgundy"
    />
    Will attend
  </label>

  <label className="flex items-center gap-2 cursor-pointer">
    <input
      type="radio"
      name="attending"
      value="no"
      checked={form.attending === "no"}
      onChange={handleChange}
      className="accent-burgundy"
    />
    Cannot attend
  </label>
</div>

       {form.attending === "yes" && (
  <select
    name="guests"
    value={form.guests}
    onChange={handleChange}
    className="w-full border border-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-burgundy/30"
  >
    <option value="1">1 Guest</option>
    <option value="2">2 Guests</option>
  </select>
)}
{form.guests === "2" && (
          <input
            type="text"
            name="companion"
            placeholder="Name of Companion"
            value={form.companion}
            onChange={handleChange}
            className="w-full border border-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-burgundy/30"
            required
          />
  )}

          <textarea
            name="message"
            placeholder="Message (optional)"
            value={form.message}
            onChange={handleChange}
            className="w-full border border-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-burgundy/30"
          />

          <button
            type="submit"
            className="w-full bg-burgundy text-white py-3 rounded-lg hover:scale-[1.02] hover:opacity-90 transition duration-300 shadow-md"
          >
            Submit RSVP
          </button>

        </form>

      </div>
        </FadeIn>
    </section>
  );
}
