import { useState } from "react";
import SectionHeader from "./SectionHeader.jsx";
import { profile } from "../data/profile.js";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3000";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

const initialStatus = {
  state: "idle",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState(initialStatus);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    if (form.name.trim().length < 2) {
      return "Name must be at least 2 characters.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      return "Please enter a valid email.";
    }

    if (form.message.trim().length < 5) {
      return "Message must be at least 5 characters.";
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validate();

    if (error) {
      setStatus({
        state: "error",
        message: error,
      });
      return;
    }

    setStatus({
      state: "loading",
      message: "",
    });

    try {
      const response = await fetch(`${API_URL}/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to send message.");
      }

      setForm(initialForm);

      setStatus({
        state: "success",
        message: "Message sent successfully!",
      });
    } catch (err) {
      setStatus({
        state: "error",
        message: err.message || "Server Error",
      });
    }
  };

  return (
    <section
      id="contact"
      className="border-b border-line px-5 py-16 sm:px-8"
    >
      <div className="mx-auto max-w-5xl">

        <SectionHeader
          index="05"
          filename="contact.sh"
          title="Get In Touch"
        />

        <div className="grid gap-8 lg:grid-cols-5">

          {/* Left Card */}

          <div className="lg:col-span-2">
            <div className="rounded-lg border border-line bg-panel p-5 font-mono text-sm">

              <p className="text-muted">
                # Reach Me
              </p>

              <p className="mt-4">
                <span className="text-yellow-400">
                  EMAIL
                </span>

                <br />

                <a
                  href={`mailto:${profile.email}`}
                  className="text-teal underline"
                >
                  {profile.email}
                </a>
              </p>

              <p className="mt-4">
                <span className="text-yellow-400">
                  PHONE
                </span>

                <br />

                {profile.phone}
              </p>

              <p className="mt-4">
                <span className="text-yellow-400">
                  LOCATION
                </span>

                <br />

                {profile.location}
              </p>

              <p className="mt-4">
                <span className="text-yellow-400">
                  GITHUB
                </span>

                <br />

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-paper hover:text-amber"
                >
                  {profile.github}
                </a>
              </p>

              <p className="mt-4">
                <span className="text-yellow-400">
                  LINKEDIN
                </span>

                <br />

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-paper hover:text-amber"
                >
                  {profile.linkedin}
                </a>
              </p>

            </div>
          </div>

          {/* Right Form */}

          <div className="lg:col-span-3">

            <div className="overflow-hidden rounded-lg border border-line bg-panel">

              <div className="flex items-center gap-2 border-b border-line bg-panel2 px-4 py-3">

                <span className="h-2.5 w-2.5 rounded-full bg-red-500"></span>

                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400"></span>

                <span className="h-2.5 w-2.5 rounded-full bg-green-500"></span>

                <span className="ml-3 font-mono text-xs text-muted">
                  send-message.sh
                </span>

              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-4 p-5"
              >

                <div>

                  <label className="block text-xs font-mono text-muted mb-1">
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Lokesh Rawat"
                    className="w-full rounded-md border border-line bg-panel2 px-3 py-3 outline-none focus:border-yellow-400"
                  />

                </div>

                <div>

                  <label className="block text-xs font-mono text-muted mb-1">
                    Your Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="example@gmail.com"
                    className="w-full rounded-md border border-line bg-panel2 px-3 py-3 outline-none focus:border-yellow-400"
                  />

                </div>

                <div>

                  <label className="block text-xs font-mono text-muted mb-1">
                    Message
                  </label>

                  <textarea
                    rows={5}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    className="w-full resize-none rounded-md border border-line bg-panel2 px-3 py-3 outline-none focus:border-yellow-400"
                  />

                </div>

                <button
                  type="submit"
                  disabled={status.state === "loading"}
                  className="w-full rounded-md bg-amber px-5 py-3 font-semibold text-black hover:opacity-90 disabled:opacity-50"
                >
                  {status.state === "loading"
                    ? "Sending..."
                    : "Send Message 🚀"}
                </button>

                {status.state === "success" && (
                  <div className="rounded-md border border-green-500 bg-green-100 p-3 text-green-700">
                    ✅ {status.message}
                  </div>
                )}

                {status.state === "error" && (
                  <div className="rounded-md border border-red-500 bg-red-100 p-3 text-red-700">
                    ❌ {status.message}
                  </div>
                )}

              </form>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}