import FadeIn from "./FadeIn";
import { useState } from "react";
import { motion } from "framer-motion";

export default function RSVP() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submittedAttending, setSubmittedAttending] = useState("yes");

  const [form, setForm] = useState({
    name: "",
    email: "",
    attending: "yes",
    guests: "1",
    companion: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "attending" && value === "no") {
      setForm((prev) => ({
        ...prev,
        attending: value,
        guests: "1",
        companion: ""
      }));
      return;
    }

    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("https://script.google.com/macros/s/AKfycbx6iI_1CAlzVvBGPjuiocepPTqf_ZUwVuKzYmvkpfwBBHzlQO_2upjCUQf-iEh4kFMq/exec", {
        method: "POST",
        body: JSON.stringify(form),
      });

      setSubmittedAttending(form.attending);
      setSuccess(true);
      setForm({
        name: "",
        email: "",
        attending: "yes",
        guests: "1",
        companion: "",
        message: ""
      });

    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
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

          {!success && (
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
                <>
                  <p className="text-sm text-gray-500">Number of Guests</p>

                  <select
                    name="guests"
                    value={form.guests}
                    onChange={handleChange}
                    className="w-full border border-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-burgundy/30"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                  </select>
                </>
              )}

              {form.attending === "yes" && form.guests === "2" && (
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
                disabled={loading}
                className="w-full bg-burgundy text-white py-3 rounded-lg transition duration-300 shadow-md flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading && (
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                )}
                {loading ? "Submitting..." : "Submit RSVP"}
              </button>
            </form>
          )}

        </div>
      </FadeIn>

      {/* SUCCESS MODAL */}
      {success && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl shadow-xl p-8 max-w-sm w-full text-center"
          >
            {submittedAttending === "yes" ? (
              <>
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="text-2xl font-serif text-burgundy mb-4">
                  See You There!
                </h3>
                <p className="text-gray-600 mb-6">
                  We're so happy you'll be joining us. We can't wait to celebrate with you on October 17!
                  <a
                  href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Joanna+%26+Vincent+Wedding&dates=20261017T040000Z/20261017T130000Z&location=Santuario+de+San+Vicente+de+Paul,+Quezon+City"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full mb-3 px-6 py-2 border border-burgundy text-burgundy rounded-full text-sm hover:bg-burgundy hover:text-white transition duration-300"
                >
                  + Add to Calendar
                </a>
                </p>
              </>
              
            ) : (
              <>
                <div className="text-4xl mb-4">💌</div>
                <h3 className="text-2xl font-serif text-burgundy mb-4">
                  We'll Miss You
                </h3>
                <p className="text-gray-600 mb-6">
                  Thank you for letting us know. You'll be in our hearts on our special day.
                </p>
              </>
            )}

            <button
              onClick={() => setSuccess(false)}
              className="px-6 py-2 bg-burgundy text-white rounded-full hover:opacity-90 transition"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}