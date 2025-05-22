import React from "react";

const ContactForm = () => {
  return (
    <div className="w-full lg:w-auto lg:max-w-lg mx-auto mt-10 p-6 dark:bg-gray-800 rounded-2xl shadow-md ">
      <h2 className="text-2xl font-semibold mb-4">Let&apos;s talk</h2>
      <form className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">First Name</label>
            <input
              type="text"
              name="firstName"
              className="text-gray-400 bg-white p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-mediu">Last Name</label>
            <input
              type="text"
              name="lastName"
              className="text-gray-400 bg-white p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            className="text-gray-400 bg-white p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Phone</label>
          <input
            type="tel"
            name="phone"
            className="text-gray-400 bg-white p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium ">Message</label>
          <textarea
            name="message"
            rows={4}
            className="text-gray-400 bg-white p-2 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-white cursor-pointer p-2 w-full text-black py-2 px-4 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
} 

export default ContactForm;