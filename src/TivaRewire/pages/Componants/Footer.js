import React from 'react';
import { Link } from 'react-router-dom';


function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[#70505055] font-sans dark:bg-gray-900 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Description */}
          <div className="flex flex-col">
            <p className="text-lg pb-3 text-black text-left text-wrap dark:text-white font-serif mt-1">
            Tiva Rewire has grown into a leading, diversified automotive group with a pan-India presence.
            </p>
          </div>
          {/* Connect With Us */}
          <div className="text-lg font-serif flex mr-14 flex-col">
            <p className="font-semibold text-gray-800 pr-10  font-serif ml-16  text-lg mb-4">Connect With Us</p>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <div className="ml-10 pl-10 text-lg font-serif">
                  <p className="text-gray-950 dark:text-gray-300 font-sans">+91 840894840</p>
                  <p className="text-gray-950 dark:text-gray-300 font-sans">+91 8007132800</p>
                  <p className="text-black dark:text-gray-300 font-sans">+91 8408863840</p>
                </div>
              </div>
            </div>
          </div>
          {/* Quick Links */}
          <div className="text-lg font-serif flex mr-14 flex-col">
            <p className="font-semibold text-gray-800 dark:text-white mb-4">Quick Links</p>
            <div className="flex flex-col space-y-2">
              <Link to="/" onClick={scrollToTop} className="text-black dark:text-gray-300 transition-colors duration-300 underline hover:cursor-pointer text-blue-500 hover:text-red-500 dark:hover:text-blue-400">Home</Link >
              <Link to="/aboutuspage" onClick={scrollToTop} className="text-black dark:text-gray-300 transition-colors duration-300 underline hover:cursor-pointer hover:text-red-500 text-blue-500 dark:hover:text-blue-400">About Us</Link >
              <Link to="/admission" onClick={scrollToTop} className="text-black dark:text-gray-300 transition-colors duration-300 underline hover:cursor-pointer hover:text-red-500 text-blue-500 dark:hover:text-blue-400">Scrap Your Vehicle</Link >
            </div>
          </div>
          {/* Visit Us */}
          <div className="flex flex-col">
            <p className="font-semibold font-serif text-gray-800 dark:text-white text-lg pr-14 mb-4">Visit Us</p>
            <div className="flex items-center">
              <div>
                <p className="text-left text-black dark:text-gray-300 align-middle pl-10 flex justify-end text-lg font-sans">
                TIVA MOTORS PVT LTD<br />
                2/2 MITROL - DEEGHOT ROAD VILLAGE,<br />
                DEEGHOT TEHSIL HODAL PALWAL (HARYANA),<br />
                HARYANA&nbsp; 121105
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-8 space-x-4">
        {/* Social media icons */}
        <img src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" width="30" height="30" alt="Facebook" />
        <img src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg" width="30" height="30" alt="Twitter" />
        <img src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" width="30" height="30" alt="Instagram" />
      </div>
      {/* Divider */}
      <hr className="my-6 border-gray-200 dark:border-gray-700" />
      {/* Copyright */}
      <div className="bg-[#3f3338] h-16 flex items-center justify-center">
        <p className="font-sans text-[#FFF6E7] text-center text-md">© {new Date().getFullYear()} Tiva Rewire. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
