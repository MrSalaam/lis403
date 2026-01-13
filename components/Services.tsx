import React from 'react';
import { BookOpen, Users, Zap, Archive, Brain, Globe, ArrowRight } from 'lucide-react';

const servicesList = [
  {
    icon: Brain,
    title: "AI-Powered Research",
    description: "Discover connections between topics with our intelligent recommendation engine and semantic search."
  },
  {
    icon: Archive,
    title: "Digital Preservation",
    description: "Secure archival for rare manuscripts, media, and cultural heritage with advanced digitization."
  },
  {
    icon: Users,
    title: "Collaborative Spaces",
    description: "Modern workspaces with smart tools for research, group projects, and knowledge sharing."
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "Connect with libraries worldwide and access international research databases seamlessly."
  },
  {
    icon: Zap,
    title: "Citation Management",
    description: "Automatic citation generation, bibliography building, and research documentation tools."
  },
  {
    icon: BookOpen,
    title: "Expert Consultation",
    description: "Connect with subject specialists for personalized research guidance and support."
  }
];

const Services: React.FC = () => {
  return (
    <section id="research" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-80 h-80 glass-navy opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 glass-navy opacity-15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Powerful Features for Modern Research
          </h2>
          <p className="text-lg text-gray-600">
            Beyond traditional library services. Tools designed for today's researchers and academics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index} 
                className="glass-effect p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group border border-white/40 hover:border-navy-200"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy-500 to-navy-600 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <IconComponent size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">{service.description}</p>
                <a href="#" className="inline-flex items-center text-sm font-semibold text-navy-600 hover:text-navy-700 group/link">
                  Learn More <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
