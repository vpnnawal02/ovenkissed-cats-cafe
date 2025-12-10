import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-black border-t border-gray-700 mt-24 text-gray-400">

            {/* Main Footer */}
            <div className="w-[90%] lg:w-[80%] mx-auto py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

                {/* Brand / About */}
                <div>
                    <h2 className="text-2xl font-bold text-white">
                        OvenKissed <span className="text-amber-700">Cats Cafe</span>
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed">
                        A warm, cozy café where handcrafted coffee meets gentle companionship.
                        Slow down, sip mindfully, and enjoy peaceful moments with our feline friends.
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-4 mt-6 text-lg">
                        <a href="#" className="hover:text-amber-600"><FaInstagram /></a>
                        <a href="#" className="hover:text-amber-600"><FaFacebookF /></a>
                        <a href="#" className="hover:text-amber-600"><FaTwitter /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-3">
                        <li><Link to="/" className="hover:text-amber-600">Home</Link></li>
                        <li><a href="#about" className="hover:text-amber-600">About</a></li>
                        <li><a href="#menu" className="hover:text-amber-600">Menu</a></li>
                        <li><a href="#reviews" className="hover:text-amber-600">Reviews</a></li>
                        <li><Link to="/cats" className="hover:text-amber-600">Meet Our Cats</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-3">
                            <FaMapMarkerAlt className="mt-1 text-amber-600" />
                            <span>Plot number 482, Block 14, Sunder Vihar, Paschim Vihar, Delhi, 110087</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaPhoneAlt className="text-amber-600" />
                            <span>+91 98765 43210</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaEnvelope className="text-amber-600" />
                            <span>hello@ovenkissedcafe.com</span>
                        </li>
                    </ul>
                </div>

                {/* Opening Hours */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Opening Hours</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Monday – Friday: <span className="text-white">9:00 AM – 9:00 PM</span></li>
                        <li>Saturday: <span className="text-white">10:00 AM – 10:00 PM</span></li>
                        <li>Sunday: <span className="text-white">10:00 AM – 8:00 PM</span></li>
                    </ul>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 py-6 text-center text-sm">
                © {new Date().getFullYear()} OvenKissed Cats Cafe. All rights reserved.
            </div>

        </footer>
    );
};

export default Footer;
