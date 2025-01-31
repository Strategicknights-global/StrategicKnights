import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Strategic Knights
            </h3>
            <p className="text-sm">
              Transforming businesses through innovative digital marketing
              solutions.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link href="https://www.facebook.com/share/162qYnA2ra/" className="hover:text-olive-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://x.com/strategicknits?t=75But44wEbNiCq1xmKH-gg&s=08" className="hover:text-olive-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://www.instagram.com/strategic_kni.ghts?igsh=MXA1ams2MnFrc3Fveg==" className="hover:text-olive-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://www.linkedin.com/in/strategicknights-global/" className="hover:text-olive-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-olive-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-olive-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-olive-500 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="hover:text-olive-500 transition-colors"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-olive-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>Website Design</li>
              <li>Digital Marketing</li>
              <li>SEO Optimization</li>
              <li>Social Media Management</li>
              <li>Content Strategy</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-olive-500" />
                <span>strategicknights.global@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-olive-500" />
                <span>+91 96773 91118</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-olive-500" />
                <span>No.72, Vedimarundhu Ramasamy Street,<br />Nethimedu,<br />Salem - 636002 </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center">
            <p>&copy; {new Date().getFullYear()} Strategic Knights. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}