import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/bitLogo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const options = {
    key: "rzp_test_HJG5Rtuy8Xh2NB",
    amount: "100", //  = INR 1
    name: "Acme shop",
    description: "some description",
    image: "https://cdn.razorpay.com/logos/7K3b6d18wHwKzL_medium.png",
    handler: function (response) {
      alert(response.razorpay_payment_id);
    },
    prefill: {
      name: "Gaurav",
      contact: "9999999999",
      email: "demo@demo.com",
    },
    notes: {
      address: "some address",
    },
    theme: {
      color: "#F37254",
      hide_topbar: false,
    },
  };

  const openPayModal = (options) => {
    var rzp1 = new window.Razorpay(options);
    rzp1.open();
  };
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="p-4 mx-auto  relative  flex items-center  justify-around">
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="h-10 md:w-auto w-32" />
        </div>


        <ul className="hidden lg:flex space-x-6 items-center font-medium text-blue-900">
          <li>
            <a href="#">Home</a>
          </li>
          <li className="relative group">
            <button className="flex items-center gap-1">
              About us <span className="text-xs">▼</span>
            </button>

            <ul className="absolute left-0 top-full bg-white border rounded shadow-md w-40  hidden group-hover:block">
              <li className="hover:bg-gray-100 px-4 py-2">
                <a href="#">Who We Are</a>
              </li>
              <li className="hover:bg-gray-100 px-4 py-2">
                <a href="#">Careers</a>
              </li>
              <li className="hover:bg-gray-100 px-4 py-2">
                <a href="#">Case Studies</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Industries</a>
          </li>
          <li>
            <a href="#">Technologies</a>
          </li>
          <li>
            <a href="#">Our Blog</a>
          </li>
          <li className="">
            <button
              onClick={() => openPayModal(options)}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-full"
            >
              Get in Touch
            </button>
          </li>
        </ul>
        <div className="lg:hidden block">
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-full">
            Get in Touch
          </button>
        </div>

        {isOpen && (
          <ul className="md:hidden  p-2 left-8 absolute top-16 w-1/2   bg-white space-y-3 font-medium text-blue-900">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <button
                onClick={() => setAboutDropdown(!aboutDropdown)}
                className="flex items-center gap-1"
              >
                About us <span className="text-xs">▼</span>
              </button>
              {aboutDropdown && (
                <ul className="pl-4 space-y-2 mt-1">
                  <li>
                    <a href="#">Who We Are</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Case Studies</a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Industries</a>
            </li>
            <li>
              <a href="#">Technologies</a>
            </li>
            <li>
              <a href="#">Our Blog</a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
