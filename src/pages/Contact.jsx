import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-linear-to-r from-[#17143A] to-[#2E2A61] flex items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-10">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-white mb-10">
          Get in Touch with{" "}
          <span className="text-red-400">Zaptro</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Side */}
          <div className="text-white">
            <h2 className="text-2xl font-semibold mb-3">
              Contact Info
            </h2>

            <p className="text-gray-300 mb-8 leading-7">
              Have a question or need support? We're here to help
              you with your electronics journey.
            </p>

            <div className="space-y-4">
              <p className="flex items-center gap-3">
                📍
                <span>
                  <strong>Address:</strong> sector 21, Sitapura,
                  Jaipur, India
                </span>
              </p>

              <p className="flex items-center gap-3">
                📧
                <span>
                  <strong>Email:</strong> support@zaptro.com
                </span>
              </p>

              <p className="flex items-center gap-3">
                📞
                <span>
                  <strong>Phone:</strong> +91 8690444916
                </span>
              </p>
            </div>
          </div>

          {/* Right Side */}
          <form className="space-y-6">
            <div>
              <label className="text-white font-medium block mb-2">
                Your Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full rounded-lg bg-white text-gray-700 px-4 py-3 outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <div>
              <label className="text-white font-medium block mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full rounded-lg bg-white text-gray-700 px-4 py-3 outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <div>
              <label className="text-white font-medium block mb-2">
                Your Message
              </label>

              <textarea
                rows="5"
                placeholder="Type your message..."
                className="w-full rounded-lg bg-[#7A78A2]/40 border border-white/20 text-white px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-pink-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold text-white bg-linear-to-r from-red-500 to-purple-500 hover:scale-[1.02] transition duration-300"
            >
              Send Message 🚀
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;