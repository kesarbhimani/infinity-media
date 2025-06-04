'use client';

import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h3 className="font-playfair text-2xl mb-4">Infinity Media</h3>
            <p className="text-gray-600 mb-4">A choice of your creation.</p>
          </div>
          <div className="md:col-span-2 md:text-right">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-600 mb-2 flex items-center justify-start md:justify-end">
              <Mail className="mr-2 h-4 w-4 text-coral-600" />
              <a href="mailto:sahil.kakadiya@infinitymedia.co.in" className="text-coral-600 hover:underline">sahil.kakadiya@infinitymedia.co.in</a>
            </p>
            <p className="text-gray-600 mb-4 flex items-center justify-start md:justify-end">
              <Phone className="mr-2 h-4 w-4 text-coral-600" />
              <a href="tel:+919081884211" className="text-coral-600 hover:underline">+91 9081884211</a>
            </p>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Infinity Media. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;