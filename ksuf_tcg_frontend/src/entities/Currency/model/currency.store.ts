import { create } from "zustand";

type CurrencyState = {
  coins: number;

  addCoins: (amount: number) => void;
  spendCoins: (amount: number) => boolean;
  canAfford: (amount: number) => boolean;
};

export const useCurrencyStore = create<CurrencyState>((set, get) => ({
  coins: 1000,

  addCoins: (amount) => {
    if (amount <= 0) return;

    set((state) => ({
      coins: state.coins + amount,
    }));
  },

  spendCoins: (amount) => {
    if (amount <= 0 || !get().canAfford(amount)) {
      return false;
    }

    set((state) => ({
      coins: state.coins - amount,
    }));

    return true;
  },

  canAfford: (amount) => {
    return amount >= 0 && get().coins >= amount;
  },
}));