import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Boxes, Users, Lock } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-purple-900 text-white">
      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Your Gaming Assets,
            <br />
            <span className="text-purple-400">Truly Yours</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience true ownership of your in-game items across multiple games.
            Trade, transfer, and use your assets in any compatible game.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg text-lg font-semibold transition">
              Explore Games
            </button>
            <button className="bg-transparent border-2 border-purple-400 hover:bg-purple-400/10 px-8 py-3 rounded-lg text-lg font-semibold transition">
              Connect Wallet
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6"
          >
            <Gamepad2 className="h-12 w-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Cross-Game Compatibility</h3>
            <p className="text-gray-300">Use your assets across multiple games and platforms</p>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6"
          >
            <Lock className="h-12 w-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">True Ownership</h3>
            <p className="text-gray-300">Your assets are truly yours, secured by blockchain technology</p>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6"
          >
            <Boxes className="h-12 w-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Asset Marketplace</h3>
            <p className="text-gray-300">Trade and transfer your assets with other players</p>
          </motion.div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Featured Games</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Game cards will be rendered here */}
          </div>
        </div>
      </main>
    </div>
  );
};