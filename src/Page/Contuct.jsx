import { useState } from "react";

const Contuct = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      name,
      email,
      subject,
      message,
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 ">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row bg-white shadow-2xl shadow-black rounded-lg p-8">
        <div className="lg:w-1/2 lg:pr-8">
          <h2 className="text-3xl font-bold text-center lg:text-left mb-6">
            Contact Us
          </h2>
          <p className="text-center lg:text-left mb-6">
            We would love to hear from you! Whether you have a question about
            our services, pricing, need a demo, or anything else, our team is
            ready to answer all your questions.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                rows="4"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn bg-indigo-500 text-white hover:bg-indigo-600 w-full py-2 rounded-md"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="lg:w-1/2  bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded">
          <div className=" lg:pl-8 mt-8 lg:mt-0">
            <h2 className="text-3xl font-bold text-center lg:text-left mb-6">
              Get in Touch
            </h2>
            <p className="text-center font-semibold lg:text-left mb-6">
              At MovieFlix, we are always excited to connect with our users. If
              you have any feedback, questions, or just want to say hello, feel
              free to reach out. Our team is here to assist you and ensure you
              have the best experience possible.
            </p>
            <p className="text-center lg:text-left mb-6">
              Email: support@movieflix.com
            </p>
            <p className="text-center lg:text-left mb-6">
              Phone: (123) 456-7890
            </p>
            <p className="text-center lg:text-left">
              Address: 123 MovieFlix Blvd, Suite 100, Movie City, MC 12345
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contuct;
