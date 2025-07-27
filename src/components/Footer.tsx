import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-4 mt-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-gray-500">
          created by{' '}
          <a 
            href="https://www.tailorweb.site" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#1A4199] hover:text-blue-800 underline font-medium transition-colors"
          >
            tailor web
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;