
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 py-4 border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-center">
          <div className="flex-1 flex justify-start">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-resumate-blue font-playfair">ResuMate™</span>
            </Link>
          </div>
          
          <div className="flex-1 flex justify-center">
            <ul className="hidden md:flex space-x-8">
              <li><Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</Link></li>
              <li><Link to="/features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-blue-600 transition-colors">How It Works</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-blue-600 transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div className="flex-1 flex justify-end space-x-2">
            <Button variant="outline" className="hidden md:block">Log In</Button>
            <Link to="/resume-upload">
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white">Get Started</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
