import React from 'react';
import { Mail, Phone, MapPin, Twitter, Linkedin, Github, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900"></div>
      
      {/* Glassmorphic elements */}
      <div className="absolute top-20 right-20 w-96 h-96 glass-navy opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 glass-navy opacity-10 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-br from-blue-400 to-navy-600 p-2.5 rounded-xl text-white shadow-lg">
                  <img src="/book.svg" alt="NexLibris Logo" width={24} height={24} />
                </div>
                <span className="text-3xl font-display font-bold text-white">
                  NexLibris
                </span>
              </div>
              <p className="text-blue-100/70 leading-relaxed mb-8 text-sm max-w-sm">
                A modern digital library platform designed for researchers, students, and knowledge seekers. Bridging traditional archival science with cutting-edge technology.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="p-2.5 glass-navy text-blue-200 hover:text-white rounded-lg transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="p-2.5 glass-navy text-blue-200 hover:text-white rounded-lg transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="p-2.5 glass-navy text-blue-200 hover:text-white rounded-lg transition-colors">
                  <Github size={20} />
                </a>
              </div>
            </div>

            {/* Explore */}
            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Explore</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors flex items-center group">
                  Catalog Search <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors flex items-center group">
                  Research Databases <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors flex items-center group">
                  Digital Archives <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors flex items-center group">
                  Collections <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Services</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors flex items-center group">
                  Research Support <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors flex items-center group">
                  Room Booking <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors flex items-center group">
                  Citation Tools <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors flex items-center group">
                  Workshops <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Contact</h4>
              <ul className="space-y-4 text-sm text-blue-100">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="flex-shrink-0 mt-0.5 text-blue-300" />
                  <span>Dept. of Library and Info Sceince</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="flex-shrink-0 text-blue-300" />
                  <span>+234123456780</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="flex-shrink-0 text-blue-300" />
                  <span>hello@lis.edu</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 pt-8">
            <div className="text-center">
              <p className="text-xl font-semibold text-white bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent mb-2">
                Designed by Olukayode Jesudunsin Christiana
              </p>
              <p className="text-lg text-blue-100/80 font-medium">
                21/52HJ155 
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
