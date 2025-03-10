import Link from 'next/link';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <>
      <hr className="border-t border-muted-foreground mb-12" />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Infinity Media</h3>
            <p className="text-muted-foreground">
              Choice of your creation
            </p>
          </div>

          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="#portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link href="#about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Services</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>
                  <a href="mailto:sahil.kakadiya@infinitymedia.co.in">sahil.kakadiya@infinitymedia.co.in</a>
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>
                  <a href="tel:+91 9081884211">+91 9081884211</a>
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="https://instagram.com" target="_blank" className="hover:text-primary transition-colors">
                <Instagram className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Infinity Media. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;