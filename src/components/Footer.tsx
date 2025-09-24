import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-corporate-gray text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              Job Nexus <span className="text-blue-400">India</span>
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner in finding the perfect IT career opportunities. 
              Connecting talent with innovation across India.
            </p>
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin size={16} />
              <span>Bangalore, Karnataka, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('#home')}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#jobs')}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Current Openings
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#resources')}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Resources
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#about')}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-blue-400" />
                <a 
                  href="mailto:hello@jobnexusindia.com"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  hello@jobnexusindia.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-blue-400" />
                <a 
                  href="mailto:support@jobnexusindia.com"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Technical Support
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>IT Job Placements</li>
              <li>Internship Programs</li>
              <li>Career Guidance</li>
              <li>Resume Building</li>
              <li>Interview Preparation</li>
              <li>Skill Development</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} Job Nexus India. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm">
              <a
                href="/terms-of-service"
                className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-1"
              >
                Terms of Service
                <ExternalLink size={12} />
              </a>
              <a
                href="/privacy-policy"
                className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-1"
              >
                Privacy Policy
                <ExternalLink size={12} />
              </a>
              <a
                href="mailto:fraud-alert@jobnexusindia.com"
                className="text-red-400 hover:text-red-300 transition-colors"
              >
                Report Fraud
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-4 pt-4 border-t border-gray-700">
            <p className="text-xs text-gray-500 text-center">
              Job Nexus India is a job portal platform. We verify employers to the best of our ability, 
              but job seekers are advised to exercise due diligence when applying for positions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;