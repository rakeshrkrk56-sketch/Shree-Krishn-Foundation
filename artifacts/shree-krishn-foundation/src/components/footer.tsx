import { Heart, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Heart className="w-8 h-8 text-primary fill-primary" />
              <span className="font-serif font-bold text-2xl text-background">
                Shree Krishn Foundation
              </span>
            </div>
            <p className="text-background/70 max-w-sm text-lg leading-relaxed mb-8">
              A grassroots community organization dedicated to bringing dignity, care, and hope to those who need it most.
            </p>
            <div className="flex gap-4">
              {/* Social icons placeholder */}
              <div className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span className="font-bold text-sm">FB</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span className="font-bold text-sm">IG</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span className="font-bold text-sm">X</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-serif font-bold text-xl mb-6">Quick Links</h4>
            <ul className="space-y-4 text-background/70">
              <li><a href="#mission" className="hover:text-primary transition-colors">Our Mission</a></li>
              <li><a href="#initiatives" className="hover:text-primary transition-colors">Initiatives</a></li>
              <li><a href="#impact" className="hover:text-primary transition-colors">Impact</a></li>
              <li><a href="#stories" className="hover:text-primary transition-colors">Stories</a></li>
              <li><a href="#volunteer" className="hover:text-primary transition-colors">Volunteer</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-xl mb-6">Contact Us</h4>
            <ul className="space-y-4 text-background/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span>123 Seva Marg, Community District,<br />New Delhi, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>namaste@shreekrishn.org</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/50">
          <p>© {new Date().getFullYear()} Shree Krishn Foundation. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
