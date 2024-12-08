import React from 'react';
import { ExternalLink, Users, Boxes } from 'lucide-react';
import { Game } from '../types';
import { motion } from 'framer-motion';

interface GameCardProps {
  game: Game;
}

export const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <img
        src={game.imageUrl}
        alt={game.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{game.title}</h3>
        <p className="text-gray-600 mb-4">{game.description}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4" />
            <span>{game.players} players</span>
          </div>
          <div className="flex items-center space-x-2">
            <Boxes className="h-4 w-4" />
            <span>{game.assets} assets</span>
          </div>
        </div>
        
        <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition flex items-center justify-center space-x-2">
          <span>Play Now</span>
          <ExternalLink className="h-4 w-4" />
        </button>
      </div>
    </motion.div>
  );
};