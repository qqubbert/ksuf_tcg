export type rarityOptionType = { color: string; defaultPrice: number };

export type raritySettingsType = {
  common: rarityOptionType;
  rare: rarityOptionType;
  epic: rarityOptionType;
  legendary: rarityOptionType;
};

export const raritySettings = {
  common: {
    color: "120,120,120",
    defaultPrice: 50,
  },
  rare: {
    color: "80,140,255",
    defaultPrice: 100,
  },
  epic: {
    color: "180,80,255",
    defaultPrice: 250,
  },
  legendary: {
    color: "255,200,80",
    defaultPrice: 500,
  },
};
