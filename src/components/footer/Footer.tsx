import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Mail } from 'lucide-react';
import { cn } from '@/utils/cn';
import { SocialLinks } from './SocialLinks';

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <Link to="/" className="flex items-center gap-2 group">
              <Shield className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
              <span className="text-xl font-bold text-white">ReviewPro+</span>
            </Link>
            <p className="mt-4 text-gray-400">
              Your go-to platform for AI-powered review management and reputation defense.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Services', 'Pricing', 'Roadmap', 'Blog', 'FAQ'].map((link) => (
                <li key={link}>
                  <Link 
                    to={`/${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:support@example.com" 
                  className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  support@example.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className={cn(
                  "w-full px-4 py-2 rounded-lg",
                  "bg-white/5 border border-white/10",
                  "text-white placeholder:text-gray-500",
                  "focus:outline-none focus:border-primary",
                  "transition-colors"
                )}
              />
              <button
                type="submit"
                className={cn(
                  "w-full px-4 py-2 rounded-lg",
                  "bg-primary text-black",
                  "hover:bg-primary/90",
                  "transition-colors"
                )}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-2 text-sm text-gray-400">
              <p>© {new Date().getFullYear()} Review Lawyers. All rights reserved.</p>
              <span className="hidden md:inline">•</span>
              <p className="text-primary hover:text-primary/80 transition-colors">
                Developed by MIS
              </p>
            </div>
            
            {/* Social Links */}
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
}