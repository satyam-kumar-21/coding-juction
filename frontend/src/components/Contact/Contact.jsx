import React from 'react';

function Contact() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-4xl w-full  mx-auto flex">
        <div className="w-1/2 p-8 text-center"  style={{
            backgroundImage:
              "url('https://imgs.search.brave.com/uh6EsWDYpaCuuI7_UBFZAzSB7gLbb-t7JIkwNk9ZPi8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9y/ZWFyLXZpZXctcHJv/Z3JhbW1lci13b3Jr/aW5nLWFsbC1uaWdo/dC1sb25nXzEwOTgt/MTg2OTcuanBnP3Np/emU9NjI2JmV4dD1q/cGc')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          
            <h1 className="text-2xl font-bold mb-4">Get in Touch</h1>
          <p className="text-gray-600 mb-8">Have a question or want to learn more about our services? Drop us a message and we'll get back to you as soon as possible!</p>
       
        </div>
        <div className="w-1/2 p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4 text-center">Contact Us</h1>
          <form className="w-full max-w-lg mx-auto">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 mb-6">
                <label htmlFor="name" className="block text-gray-700 mb-2">Name:</label>
                <input type="text" id="name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="w-full px-3 mb-6">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email:</label>
                <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="w-full px-3 mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">Message:</label>
                <textarea id="message" name="message" rows="4" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
              </div>
            </div>
            <div className="flex justify-center">
              <button type="submit" className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
