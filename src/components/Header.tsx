import React from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2, Wallet, Menu } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Gamepad2 className="h-8 w-8" />
            <span className="text-2xl font-bold">GameVerse</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/games" className="hover:text-purple-300 transition">Games</Link>
            <Link to="/marketplace" className="hover:text-purple-300 transition">Marketplace</Link>
            <Link to="/inventory" className="hover:text-purple-300 transition">My Assets</Link>
            <button className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition">
              <Wallet className="h-5 w-5" />
              <span>Connect Wallet</span>
            </button>
          </div>
          
          <button className="md:hidden">
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </div>
    </header>
  );
};