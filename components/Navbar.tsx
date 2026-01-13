import React, { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';


const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-effect py-3 shadow-lg' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className=" ">
              <img src="/book.svg" alt="NexLibris Logo" width={24} height={24}  />
            </div>
            <span className="text-2xl font-display font-bold bg-gradient-to-r from-navy-700 to-navy-600 bg-clip-text text-transparent">
              NexLibris
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {['Catalog', 'Research', 'Archives', 'Events', 'About'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="px-4 py-2 text-gray-700 hover:text-navy-600 font-medium transition-colors duration-200 rounded-lg hover:glass-effect"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <button className="p-2.5 text-gray-600 hover:text-navy-600 hover:glass-effect rounded-lg transition-colors duration-200">
             
            </button>
            <button className="px-6 py-2.5 flex gap-2 bg-gradient-to-r from-navy-600 to-navy-700 text-white font-medium rounded-xl hover:shadow-lg transition-all duration-200 text-sm">
              <Search size={18} className="pt-1" /> Search
            </button>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-effect border-t border-white/20 absolute w-full mt-2 mx-4 rounded-2xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {['Catalog', 'Research', 'Archives', 'Events', 'About'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="block px-4 py-3 text-gray-700 hover:bg-white/50 rounded-lg font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="pt-4 mt-4 border-t border-white/20">
              <button className="w-full px-4 py-3 bg-gradient-to-r from-navy-600 to-navy-700 text-white rounded-lg font-medium">
                Search
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
