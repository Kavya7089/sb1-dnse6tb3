export interface Game {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  assets: number;
  players: number;
}

export interface Asset {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  rarity: string;
  transferable: boolean;
}