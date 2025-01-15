"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_h9csx09", "template_nnviegq", form.current, {
      publicKey: "MElQ2xqBncjO033-R",
    });
    e.target.reset();
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <input
          className="w-full h-12 text-gray-600 placeholder-gray-400  shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          name="name"
          id="name"
          placeholder="Enter Name"
        />
        <input
          className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email"
        />
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          className="w-full h-32 text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 border border-gray-200 focus:outline-none pl-4 mb-10"
          id="message"
          placeholder="Type your message here..."
        ></textarea>
        <button
          type="submit"
          className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700 hover:bg-indigo-800 bg-indigo-600 shadow-sm"
        >
          Send
        </button>
      </form>
    </div>
  );
}
