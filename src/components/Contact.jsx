import { useState } from "react";
import SectionHeader from "./SectionHeader.jsx";
import { profile } from "../data/profile.js";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (data.success) {
        setSent(true);

        setForm({
          name: "",
          email: "",
          message: "",
        });

        setTimeout(() => {
          setSent(false);
        }, 4000);
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      alert("Server Error. Make sure your backend is running.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="scroll-mt-24 px-4 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="Get in touch"
          note="Have a project, a role, or just want to talk? Send me a message."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">

          {/* Contact Card */}

          <div className="rounded-xl border border-line bg-panel overflow-hidden">

            <div className="flex items-center gap-2 border-b border-line px-5 py-4">

              <span className="h-3 w-3 rounded-full bg-red-500"></span>

              <span className="h-3 w-3 rounded-full bg-yellow-400"></span>

              <span className="h-3 w-3 rounded-full bg-green-500"></span>

              <span className="ml-3 font-mono text-sm text-muted">
                contact.sh
              </span>

            </div>

            <div className="space-y-4 p-6 font-mono">

              <p className="text-muted">
                <span className="text-green-400">$</span> cat contact.sh
              </p>

              <p>
                <span className="text-yellow-400">EMAIL</span> =
                <a
                  href={`mailto:${profile.email}`}
                  className="ml-2 text-paper hover:text-teal"
                >
                  {profile.email}
                </a>
              </p>

              <p>
                <span className="text-yellow-400">PHONE</span> =
                <a
                  href={`tel:${profile.phone}`}
                  className="ml-2 text-paper hover:text-teal"
                >
                  {profile.phone}
                </a>
              </p>

              <p>
                <span className="text-yellow-400">LOCATION</span> =
                <span className="ml-2">{profile.location}</span>
              </p>

              <p>
                <span className="text-yellow-400">GITHUB</span> =
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="ml-2 hover:text-teal"
                >
                  {profile.github}
                </a>
              </p>

              <p>
                <span className="text-yellow-400">LINKEDIN</span> =
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="ml-2 hover:text-teal"
                >
                  {profile.linkedin}
                </a>
              </p>

            </div>

          </div>

          {/* Contact Form */}

          <form
            onSubmit={handleSubmit}
            className="rounded-xl border border-line bg-panel p-8"
          >
            <div className="space-y-5">

              <div>

                <label className="text-sm font-mono text-muted">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Lokesh Rawat"
                  required
                  className="mt-2 w-full rounded-lg border border-line bg-panel2 p-3 outline-none focus:border-yellow-400"
                />

              </div>

              <div>

                <label className="text-sm font-mono text-muted">
                  Your Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                  required
                  className="mt-2 w-full rounded-lg border border-line bg-panel2 p-3 outline-none focus:border-yellow-400"
                />

              </div>

              <div>

                <label className="text-sm font-mono text-muted">
                  Message
                </label>

                <textarea
                  rows="5"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  required
                  className="mt-2 w-full resize-none rounded-lg border border-line bg-panel2 p-3 outline-none focus:border-yellow-400"
                />

              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-amber px-5 py-3 font-semibold text-black transition hover:opacity-90 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message 🚀"}
              </button>

              {sent && (
                <div className="rounded-lg border border-green-600 bg-green-100 p-3 text-center text-green-700">
                  ✅ Your message has been sent successfully!
                </div>
              )}

            </div>
          </form>

        </div>
      </div>
    </section>
  );
}