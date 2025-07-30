import Logo from "../assets/bitLogo.svg";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white py-12 rounded-t-[100px] px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
      
        <div>
          <img
            src={Logo}
            alt="BitTwoByte Logo"
            className="h-10 mb-4"
          />
          <div className="flex items-start gap-2 text-gray-700 text-sm mb-2">
            <Mail size={16} className="mt-0.5" />
            <span>contact@bittwobyte.com</span>
          </div>
          <div className="flex items-start gap-2 text-gray-700 text-sm">
            <MapPin size={16} className="mt-0.5" />
            <span>
              H85H+J9W, Janta College Rd, <br />
              Anantpur, Arun Nagar, Rewa, Ajgarha, <br />
              Madhya Pradesh 486002
            </span>
          </div>

          <div className="flex gap-3 mt-4">
            <a href="#" className="text-blue-700">
              <FaLinkedinIn size={20} />
            </a>
            <a href="#" className="text-blue-600">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-black">
              <FaXTwitter size={20} />
            </a>
            <a href="#" className="text-pink-600">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-red-600">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

    
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4">ABOUT US</h4>
          <ul className="space-y-3 text-sm text-gray-700">
            <li>Who We Are</li>
            <li>FAQ</li>
            <li>Blogs</li>
            <li>Careers</li>
            <li>Case Studies</li>
            <li>Office Locations</li>
          </ul>
        </div>

      
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4">SERVICES</h4>
          <ul className="space-y-3 text-sm text-gray-700">
            <li>Data Analytics</li>
            <li>Data Engineering</li>
            <li>Data Governance</li>
            <li>Data Science</li>
            <li>SCM</li>
            <li>Cloud</li>
          </ul>
        </div>

       
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4">JOIN COMMUNITY</h4>
          <form className="space-y-4">
            <div className="flex items-center bg-gray-100 rounded-lg overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 text-sm text-gray-700 bg-transparent outline-none"
              />
              <button
                type="submit"
                className="bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-blue-600 hover:text-white transition rounded-r-lg"
              >
                Sign up
              </button>
            </div>
            <div className="flex items-start gap-2 text-xs text-gray-600">
              <input type="checkbox" className="mt-1" />
              <label>
                I'm okay with getting emails and having that activity tracked to
                improve my experience.
              </label>
            </div>
          </form>
        </div>
      </div>

      <hr className="my-8 border-gray-200" />
      <p className="text-center text-sm text-gray-600">
        BitTwoByte Technologies Pvt. Ltd. © 2025. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
