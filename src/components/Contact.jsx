import React from 'react'

const Contact = () => {
  return (
    <div className='mt-24'>
      <h3 className='pb-10'>Contact Page</h3>
      <div className="iframe_map">
      <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.432390200196!2d77.13789077503313!3d28.616800284795744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d032cd9a7a1bf%3A0xe86bb5eea50c3fd0!2sRam%20Dwara%20Mandir%2C%20Naraina!5e0!3m2!1sen!2sin!4v1693131048999!5m2!1sen!2sin"
  width="100%"
  height="450"
  style={{ border: '0' }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

      </div>
      <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md my-4">
      <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
      <form action="https://getform.io/f/9ad47b75-5e8c-4800-ab9a-37cf267d7120" method="POST">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            className="mt-1 px-4 py-2 w-full border rounded-md focus:ring focus:ring-indigo-200"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            className="mt-1 px-4 py-2 w-full border rounded-md focus:ring focus:ring-indigo-200"
            placeholder="you@example.com"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            rows="4"
            name="textarea"
            className="mt-1 px-4 py-2 w-full border rounded-md focus:ring focus:ring-indigo-200"
            placeholder="Your message..."
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200"
        >
          Send
        </button>
      </form>
    </div>
       
    </div>
  )
}

export default Contact