import React from 'react';
import { useState } from 'react';
import { Search, ArrowRight, Sparkles, BookOpen, ChevronDown } from 'lucide-react';
import Button from './Button';

const Hero: React.FC = () => {
  const [topic, setTopic] = useState('All Journals');
  const [year, setYear] = useState('2024');
  return (
    <div className="relative pt-32 pb-24 lg:pt-40 lg:pb-36 overflow-hidden">
      

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
         

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-gray-900 tracking-tight mb-8 leading-tight">
            The Future of 
            <span className="block bg-gradient-to-r from-navy-600 italic to-navy-700 bg-clip-text text-transparent">
              Knowledge Discovery
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
            Access millions of academic resources, rare manuscripts, and digital archives. Powered by AI-driven discovery and modern library science.
          </p>

            <div className="w-full max-w-3xl mx-auto mb-2">
      <div className="relative group rounded-3xl p-1 bg-blue-900  shadow-lg  transition-all duration-300">
        <div className="relative flex flex-col sm:flex-row items-center bg-white rounded-[20px] p-2 gap-2">
          
          {/* Filter 1: Journal/Topic */}
          <div className="flex-1 w-full sm:w-auto relative">
            <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-2xl transition-colors text-left group/btn">
              <div className="p-2  text-blue-900 rounded-lg transition-colors">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Source</span>
                <span className="text-gray-900 font-medium">{topic}</span>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-300 ml-auto" />
            </button>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-10 bg-gray-100"></div>

          {/* Filter 2: Year */}
          <div className="flex-1 w-full sm:w-auto relative">
            <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-2xl transition-colors text-left group/btn">
              <div className="p-2  text-blue-900 rounded-lg  transition-colors">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Published</span>
                <span className="text-gray-900 font-medium">{year}</span>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-300 ml-auto" />
            </button>
          </div>

          {/* Search Action */}
          <button className="w-full sm:w-auto px-8 py-4 bg-blue-900 text-white font-medium rounded-2xl shadow-lg transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2">
            <span>Filter</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>


          

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm font-medium text-gray-600">
            <span>Popular searches:</span>
            <div className="flex gap-2 flex-wrap justify-center">
              {['Research Ethics', 'Digital Archives', 'Data Science', 'Library Tech'].map(tag => (
                <a href="#" key={tag} className="px-3 py-1.5 glass-effect rounded-lg hover:bg-white/50 transition-all">
                  {tag}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
