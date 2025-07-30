const ContactUs = () => {
  return (
    <div className="p-10">
      <div className="bg-gradient-to-br h-full from-white to-green-50 rounded-3xl shadow-md p-10 flex flex-col md:flex-row items-center justify-between gap-10 w-full  mx-auto">
        <div className="flex-1 space-y-10 text-center md:text-left">
          <h2 className="text-3xl font-semibold text-green-600 mb-2">
            Success is a team Play, right?
            <span className=" font-semibold block text-blue-900 ">
              Let’s work Together!
            </span>
          </h2>

          <div>
            <p className="text-3xl font-bold text-blue-900">8109610302</p>
            <p className="text-gray-600">Need Help Urgently? Call Us!</p>
          </div>

          <div className="">
            <img
              src="https://em-content.zobj.net/thumbs/120/apple/354/rocket_1f680.png"
              alt="Rocket"
              className="w-20 h-20 mx-auto md:mx-0 animate-bounce"
            />
          </div>
        </div>

        <form className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <input
            type="text"
            placeholder="First Name"
            className="border border-green-300 rounded-lg px-4 py-3 outline-none"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border border-green-300 rounded-lg px-4 py-3 outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-green-300 rounded-lg px-4 py-3 outline-none col-span-1"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="border border-green-300 rounded-lg px-4 py-3 outline-none col-span-1"
          />
          <textarea
            placeholder="Message Box"
            rows="5"
            className="border border-green-300 rounded-lg px-4 py-3 outline-none md:col-span-2"
          />
          <div className="md:col-span-2 flex justify-end">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
