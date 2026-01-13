import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      <div className="text-center animate-fade-in">
        <div className="w-16 h-16 border-4 border-navy-600 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Olukayode Jesudunsin Christiana
        </h1>
        <p className="text-gray-600 font-mono text-lg">
          21/52HJ155
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
