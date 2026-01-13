import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCollections from './components/FeaturedCollections';
import Services from './components/Services';
// import SmartLibrarian from './components/SmartLibrarian';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 text-gray-900 font-sans">
      <Navbar />
      <main>
        <Hero />
        <FeaturedCollections />
        <Services />
        
        {/* CTA Section */}
        <section className="py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 glass-navy opacity-30 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Ready to Transform Your Research?
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              Join thousands of researchers and students using NexLibris for advanced discovery, collaboration, and knowledge creation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-navy-600 to-navy-700 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-200">
                Get Started Free
              </button>
              <button className="px-8 py-4 glass-effect text-navy-600 font-semibold rounded-xl hover:bg-white/80 transition-all duration-200">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </main>
      
      {/* <SmartLibrarian /> */}
      <Footer />
    </div>
  );
}

export default App;
