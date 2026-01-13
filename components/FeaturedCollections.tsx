import React, { useState } from 'react';
import { Book } from '../types';
import { Bookmark, ArrowRight, Star } from 'lucide-react';

const mockBooks: Book[] = [
  {
    id: '1',
    title: 'Information Architecture Essentials',
    author: 'Dr. Raheem S.A',
    category: 'Technology',
    year: 2017,
    coverUrl: '/information-architecture.png',
    available: true,
    abstract: 'Modern approaches to organizing and discovering digital information.'
  },
  {
    id: '2',
    title: 'Digital Preservation Methods',
    author: 'Prof. Marcus Rashford',
    category: 'Archival Science',
    year: 2020,
    coverUrl: '/digital-preservation.png',
    available: false,
    abstract: 'Best practices for preserving digital heritage and cultural memory.'
  },
  {
    id: '3',
    title: 'AI & Knowledge Systems',
    author: '',
    category: 'Research',
    year: 2024,
    coverUrl: '/ai.png',
    available: true,
    abstract: 'How artificial intelligence is transforming information retrieval.'
  },
  {
    id: '4',
    title: 'Future Libraries Design',
    author: 'Li Wei',
    category: 'Design',
    year: 2025,
    coverUrl: '/future.png',
    available: true,
    abstract: 'Designing modern spaces for research and collaboration.'
  }
];

const ImageWithLoader: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse"></div>
      )}
      <img 
        src={src} 
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transition: 'opacity 0.3s ease-in-out' }}
      />
    </>
  );
};

const FeaturedCollections: React.FC = () => {
  return (
    <section id="catalog" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-3">Featured Collections</h2>
            <p className="text-lg text-gray-600">Explore our curated selection of premier academic resources.</p>
          </div>
          <a href="#" className="hidden md:flex items-center px-6 py-3 glass-effect rounded-xl hover:bg-white/80 text-navy-600 font-medium transition-all group">
            View All <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockBooks.map((book) => (
            <div key={book.id} className="group relative">
              <div className="aspect-[2/3] w-full overflow-hidden rounded-2xl glass-effect shadow-lg hover:shadow-xl transition-all duration-300 relative">
                <ImageWithLoader src={book.coverUrl} alt={book.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute top-3 right-3">
                  <button className="p-2.5 glass-dark text-white rounded-full hover:bg-white/20 transition-all">
                    <Bookmark size={18} />
                  </button>
                </div>

                {!book.available && (
                  <div className="absolute bottom-0 left-0 right-0 glass-dark text-white text-xs py-2 text-center font-medium">
                    Check Out Coming Soon
                  </div>
                )}
              </div>

              <div className="mt-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-gray-900 group-hover:text-navy-600 transition-colors line-clamp-2">
                      <a href="#">{book.title}</a>
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">{book.author}</p>
                  </div>
                  {book.available && (
                    <Star size={16} className="text-navy-600 flex-shrink-0 mt-1" />
                  )}
                </div>

                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className="px-2 py-1 glass-navy text-navy-700 rounded-lg font-medium">{book.category}</span>
                  <span className="text-gray-400">{book.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <a href="#" className="inline-flex items-center px-6 py-3 glass-effect rounded-xl text-navy-600 font-medium">
            View All <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
