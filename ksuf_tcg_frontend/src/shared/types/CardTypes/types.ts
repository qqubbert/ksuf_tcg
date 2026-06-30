export type CardAbility = {
  id: string;
  icon: string; // позже можно заменить на SVG
  title: string;
};

export type CardProps = {
  id: string;
  name: string;
  description: string;
  image: string;

  hp?: number;
  attack?: number;

  abilities?: CardAbility[];

  rarity: "common" | "rare" | "epic" | "legendary";

  // isOwned: boolean;
  count: number;

  foilMask?: string;
  texture?: string;

  dustOpacity?: number;
};
