'use client';

import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail, User } from 'lucide-react';

const team = [
  {
    name: 'Sathish Kumar',
    role: 'CEO & Founder',
    bio: 'Visionary leader with expertise in digital transformation and business strategy.',
    social: {
      linkedin: 'https://www.linkedin.com/in/sathish-kumar-0683391b5/',
      twitter: 'https://x.com/i/flow/login?redirect_after_login=%2FSathish23902',
      email: 'smartsathish23902@gmail.com'
    }
  },
  {
    name: 'Loguhariharan P V',
    role: 'Creative Director',
    bio: 'A Young and talented creative director with a passion for innovative design solutions.',
    social: {
      linkedin: 'https://www.linkedin.com/in/loguhariharan-p-v-0b178a206/',
      twitter: '#',
      email: 'loguhariharan5300@gmail.com'
    }
  },
  {
    name: 'Srithar Jayakumar',
    role: 'Technical Lead',
    bio: 'Expert in full-stack development and emerging technologies.',
    social: {
      linkedin: 'https://www.linkedin.com/in/sritharj',
      twitter: 'https://x.com/srithar_j74915?t=1lbPGuGzUx9sFA0UFgoQ-A&s=08',
      email: 'sritharjayakumar21@gmail.com'
    }
  },
  {
    name: 'Arshad Ahmed A',
    role: 'UX/UI Lead',
    bio: 'User experience expert focused on creating intuitive and engaging interfaces.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'arshadahmed1908@gmail.com'
    }
  },
  {
    name: 'Kiruthika Senthil Kumar',
    role: 'Content Strategist',
    bio: 'Content expert specializing in SEO and engaging storytelling.',
    social: {
      linkedin: 'https://www.linkedin.com/in/kiruthika-senthilkumar-849532260',
      twitter: '#',
      email: 'kirtisanti@gmail.com'
    }
  }
];

export function TeamGrid() {
  return (
    <section className="py-20 bg-black/20 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-black/40 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center">
                    <User className="h-10 w-10 text-white/60" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold gradient-text-colorful mb-2 text-center">{member.name}</h3>
                <p className="text-white/80 mb-2 text-center">{member.role}</p>
                <p className="text-white/60 mb-4 text-center">{member.bio}</p>
                <div className="flex justify-center space-x-4">
                  <a href={member.social.linkedin} className="text-white/60 hover:text-white transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href={member.social.twitter} className="text-white/60 hover:text-white transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href={`mailto:${member.social.email}`} className="text-white/60 hover:text-white transition-colors">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}