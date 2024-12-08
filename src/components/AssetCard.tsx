import React from 'react';
import { Asset } from '../types';
import { motion } from 'framer-motion';
import { Share2 } from 'lucide-react';

interface AssetCardProps {
  asset: Asset;
}

export const AssetCard: React.FC<AssetCardProps> = ({ asset }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <div className="relative">
        <img
          src={asset.imageUrl}
          alt={asset.name}
          className="w-full h-48 object-cover"
        />
        <span className={`absolute top-2 right-2 px-3 py-1 rounded-full text-xs font-semibold
          ${asset.rarity === 'Legendary' ? 'bg-yellow-400 text-yellow-900' :
            asset.rarity === 'Rare' ? 'bg-purple-400 text-purple-900' :
            'bg-blue-400 text-blue-900'}`}>
          {asset.rarity}
        </span>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{asset.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{asset.description}</p>
        
        <div className="flex justify-between items-center">
          {asset.transferable ? (
            <button className="flex items-center space-x-1 text-sm text-indigo-600 hover:text-indigo-800">
              <Share2 className="h-4 w-4" />
              <span>Transfer</span>
            </button>
          ) : (
            <span className="text-sm text-gray-500">Non-transferable</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};