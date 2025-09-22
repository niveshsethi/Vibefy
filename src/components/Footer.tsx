import React from 'react';
import { motion } from 'framer-motion';
import { Music, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: 'Company',
      links: ['About', 'Jobs', 'For the Record', 'Investors', 'Vendor Insights'],
    },
    {
      title: 'Communities',
      links: ['For Artists', 'Developers', 'Advertising', 'Investors', 'Vendors'],
    },
    {
      title: 'Useful Links',
      links: ['Support', 'Mobile App', 'Free Mobile App', 'Consumer Rights'],
    },
  ];

  const socialIcons = [
    { icon: <Instagram className="w-5 h-5" />, href: '#' },
    { icon: <Twitter className="w-5 h-5" />, href: '#' },
    { icon: <Facebook className="w-5 h-5" />, href: '#' },
    { icon: <Youtube className="w-5 h-5" />, href: '#' },
  ];

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 mb-6"
            >
              <div className="relative">
                <Music className="h-8 w-8 text-green-400" />
                <motion.div
                  className="absolute inset-0 bg-green-400 rounded-full opacity-20"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <span className="text-white font-bold text-2xl">Vibeify</span>
            </motion.div>
            
            <p className="text-gray-400 mb-6 max-w-md">
              Experience music like never before with our revolutionary streaming platform. 
              Your soundtrack to life awaits.
            </p>

            <div className="flex space-x-4">
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-gray-400 hover:text-green-400 hover:bg-gray-800 transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, sectionIndex) => (
            <div key={section.title}>
              <h3 className="font-bold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li key={link}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5, color: '#10b981' }}
                      className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm"
                    >
                      {link}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex flex-wrap items-center space-x-6 mb-4 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-200">
              Legal
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-200">
              Privacy Center
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-200">
              Cookies
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-200">
              About Ads
            </a>
          </div>

          <div className="text-gray-400 text-sm">
            © 2025 Vibeify. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
