import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
        
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Your eCommerce Store. All rights reserved.</p>
        <div className="mt-4 flex justify-center">
          <a href="#" className="text-gray-400 hover:text-gray-300 mx-2">
            Terms of Use
          </a>
          <span className="text-gray-400">|</span>
          <a href="#" className="text-gray-400 hover:text-gray-300 mx-2">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
