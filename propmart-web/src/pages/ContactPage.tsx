import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-6 text-lg">
        Have questions or need support? Feel free to reach out to us!
      </p>

      {/* Contact Form */}
      <form className="space-y-4 bg-white shadow rounded p-6">
        <div>
          <label className="block font-semibold mb-1">Name</label>
          <input
            type="text"
            className="w-full border rounded p-2"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Email</label>
          <input
            type="email"
            className="w-full border rounded p-2"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Message</label>
          <textarea
            className="w-full border rounded p-2"
            placeholder="Write your message..."
            rows={4}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>

      {/* Extra Contact Info */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Other Ways to Reach Us</h2>
        <p>
          Email: <span className="font-medium">support@propmart.com</span>
        </p>
        <p>
          Phone: <span className="font-medium">+977-9800000000</span>
        </p>
      </div>
    </div>
  );
};

export default Contact;
