'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-8 rounded-xl shadow-lg"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
      
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <MapPin className="w-6 h-6 text-olive-600 mt-1" />
          <div>
            <h3 className="font-semibold text-gray-900">Office Address</h3>
            <p className="text-gray-600">
              No.72, Vedimarundhu Ramasamy Street,<br />
              Nethimedu,<br />
              Salem - 636002.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Phone className="w-6 h-6 text-olive-600 mt-1" />
          <div>
            <h3 className="font-semibold text-gray-900">Phone</h3>
            <p className="text-gray-600">+91 96773 91118</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Mail className="w-6 h-6 text-olive-600 mt-1" />
          <div>
            <h3 className="font-semibold text-gray-900">Email</h3>
            <p className="text-gray-600">strategicknights.global@gmail.com</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Clock className="w-6 h-6 text-olive-600 mt-1" />
          <div>
            <h3 className="font-semibold text-gray-900">Business Hours</h3>
            <p className="text-gray-600">
              Monday - Friday: 9:30 AM - 6:00 PM<br />
              Saturday - Sunday: Closed
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-4">Connect With Us</h3>
        <p className="text-gray-600">
          Follow us on social media for updates and insights into digital marketing trends.
        </p>
      </div>
    </motion.div>
  );
}