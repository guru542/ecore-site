import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false); // ⭐ THIS WAS MISSING


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("https://ecore-backend.onrender.com/contact
", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } else {
      alert("Failed to send message.");
    }
  } catch (error) {
    console.error(error);
    alert("Server error. Try again later.");
  }
};

  return (
    <section id="contact" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

        {/* LEFT SIDE INFO */}
        <div data-aos="fade-right">
          <h3 className="text-4xl font-bold mb-6">Let’s Talk About Your Project</h3>
          <p className="text-gray-600 mb-8 text-lg">
            Have an idea or need a digital solution? Reach out and our team will get back to you quickly.
          </p>

          <div className="space-y-6 text-gray-700">
            <div className="flex items-center gap-4">
              <Mail className="text-blue-600" />
              <span>contact@yourcompany.com</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-blue-600" />
              <span>+1 (234) 567-890</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-blue-600" />
              <span>New York, USA</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
       {success ? (
  <div className="bg-white p-10 rounded-2xl shadow-lg text-center" data-aos="fade-left">
    <h4 className="text-2xl font-semibold text-green-600 mb-4">
      🎉 Message Sent Successfully!
    </h4>
    <p className="text-gray-600 mb-6">
      Thanks for reaching out. Our team will get back to you shortly.
    </p>
    <button
      onClick={() => setSuccess(false)}
      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
    >
      Send Another Message
    </button>
  </div>
) : (
  <form
    onSubmit={handleSubmit}
    className="bg-white p-10 rounded-2xl shadow-lg space-y-6"
    data-aos="fade-left"
  >
    <div>
      <label className="block mb-2 font-medium">Full Name</label>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="John Doe"
        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
    </div>

    <div>
      <label className="block mb-2 font-medium">Email Address</label>
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="you@example.com"
        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
    </div>

    <div>
      <label className="block mb-2 font-medium">Message</label>
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        rows="5"
        placeholder="Tell us about your project..."
        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      ></textarea>
    </div>

    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition"
    >
      Send Message
    </button>
  </form>
)}

      </div>
    </section>
  );
};

export default Contact;
