import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Heart } from 'lucide-react';
import { Link } from 'wouter';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Our Mission', href: '#mission' },
    { name: 'Initiatives', href: '#initiatives' },
    { name: 'Impact', href: '#impact' },
    { name: 'Stories', href: '#stories' },
    { name: 'Get Involved', href: '#get-involved' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/90 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Heart className="w-8 h-8 text-primary fill-primary" />
            <span className="font-serif font-bold text-xl text-foreground">
              Shree Krishn
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/5 rounded-full px-6">
                <a href="#volunteer">Volunteer</a>
              </Button>
              <Button asChild className="rounded-full px-6 bg-primary text-primary-foreground hover:bg-primary/90 shadow-md">
                <a href="#donate">Donate Now</a>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-lg animate-in slide-in-from-top-4">
          <div className="px-4 pt-2 pb-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-foreground py-2 border-b border-border/50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              <Button asChild variant="outline" className="w-full border-primary text-primary rounded-full">
                <a href="#volunteer" onClick={() => setMobileMenuOpen(false)}>Volunteer</a>
              </Button>
              <Button asChild className="w-full rounded-full bg-primary text-primary-foreground">
                <a href="#donate" onClick={() => setMobileMenuOpen(false)}>Donate Now</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
