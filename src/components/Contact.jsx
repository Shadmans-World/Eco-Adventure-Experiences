import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Contact = () => {
  return (
    <section className="bg-white text-gray-800 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
        <p className="text-gray-600 mb-10">
          Have questions or need assistance? We’re here to help!
        </p>

        {/* Contact Information */}
        <div className="space-y-8 mb-10">
          <div className="flex flex-col items-center">
            <MdEmail className="text-green-500 text-3xl mb-2" />
            <p className="font-semibold">Email</p>
            <a
              href="mailto:info@ecoadventure.com"
              className="text-gray-600 hover:underline"
            >
              info@ecoadventure.com
            </a>
          </div>
          <div className="flex flex-col items-center">
            <MdPhone className="text-green-500 text-3xl mb-2" />
            <p className="font-semibold">Phone</p>
            <p className="text-gray-600">+1 234 567 890</p>
          </div>
          <div className="flex flex-col items-center">
            <MdLocationOn className="text-green-500 text-3xl mb-2" />
            <p className="font-semibold">Address</p>
            <p className="text-gray-600">123, Green Road, Block B, Dhanmondi, Dhaka 1209, Bangladesh</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-800 text-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
          <form className="text-black">
            <div className="mb-6">
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full p-3"
                required
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full p-3"
                required
              />
            </div>
            <div className="mb-6">
              <textarea
                placeholder="Your Message"
                className="textarea textarea-bordered w-full p-3"
                rows="5"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-600 w-full"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
