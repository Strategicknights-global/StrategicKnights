'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Team', href: '/team' },
  { label: 'Contact', href: '/contact' }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10' : 'bg-black/80 backdrop-blur-md',
        isOpen && 'bg-black'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link
            href="/"
            className="text-2xl font-bold flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <span className="gradient-text">Strategic Knights</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="gradient-text-colorful hover:opacity-80 transition-colors relative group text-sm font-medium"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            <Button 
              variant="default" 
              className="bg-white/10 hover:bg-white/20 gradient-text-colorful border border-white/20 hover:border-white/30 rounded-full px-6"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-white z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={cn(
            'md:hidden fixed inset-x-0 top-20 bg-black/95 transition-all duration-300 ease-in-out border-t border-white/10',
            isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
          )}
        >
          <div className="px-4 py-6 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleMobileNavClick}
                className="block px-4 py-3 text-lg font-semibold relative group"
              >
                <div className="relative z-10 bg-gradient-to-r from-[#ff6b6b] via-[#4ecdc4] to-[#45b7d1] bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                  {item.label}
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ff6b6b]/10 via-[#4ecdc4]/10 to-[#45b7d1]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            ))}
            <Button
              variant="default"
              onClick={handleMobileNavClick}
              className="w-full py-3 text-lg font-semibold rounded-full relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b6b]/20 via-[#4ecdc4]/20 to-[#45b7d1]/20 group-hover:from-[#ff6b6b]/30 group-hover:via-[#4ecdc4]/30 group-hover:to-[#45b7d1]/30 transition-colors duration-300"></div>
              <span className="relative z-10 bg-gradient-to-r from-[#ff6b6b] via-[#4ecdc4] to-[#45b7d1] bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                Get Started
              </span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}