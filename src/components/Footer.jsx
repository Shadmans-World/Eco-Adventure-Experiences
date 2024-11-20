import { FaFacebookF, FaTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa"; 
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 mt-10">
      <div className="container mx-auto px-4">
       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">BEAUTIFUL BANGLADESH</h2>
            <p className="text-gray-400">
              Explore the beauty of nature with our curated eco-friendly
              adventures. Discover, experience, and cherish the planet.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:underline hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline hover:text-gray-300">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:underline hover:text-gray-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:underline hover:text-gray-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact and Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center gap-2">
                <MdEmail className="text-lg" />
                <a
                  href="mailto:info@ecoadventure.com"
                  className="hover:underline"
                >
                  info@ecoadventure.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MdPhone className="text-lg" />
                +1 234 567 890
              </p>
              <p className="flex items-center gap-2">
                <MdLocationOn className="text-lg" />
                123, Green Road, Block B, Dhanmondi, Dhaka 1209, Bangladesh
              </p>
            </div>

            <div className="flex space-x-4 mt-4">
              {/* Social Media Icons */}
              <a
                href="https://www.facebook.com/shadman.shoumik.shaon/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200"
              >
                <FaFacebookF className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/ShadmanShaon99"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/shadman_ars/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/Shadmans-World"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/shadman-undefined-839b65291/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Eco Adventure. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
