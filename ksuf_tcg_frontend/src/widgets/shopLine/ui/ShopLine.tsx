import styles from "./ShopLine.module.css";

import { type CardProps } from "@types";

import { CardWithPrice } from "@features";

import { raritySettings } from "@data";

import { getRandom } from "@utils";

type Props = {
  chars: CardProps[];
};

const PRICE_OFFSET_PERCENT = 10;

export const ShopLine = ({ chars }: Props) => {
  return (
    <div className={`${styles.shopLine}`}>
      {chars.map((card, index) => {
        const offsetDir = Math.random() > 0.5 ? 1 : -1;

        const price = Math.floor(
          raritySettings[card.rarity].defaultPrice *
            (1 + (getRandom(0, PRICE_OFFSET_PERCENT) / 100) * offsetDir),
        );

        return (
          <CardWithPrice
            key={`${card.id}-${index}`}
            data={card}
            price={price}
          />
        );
      })}
    </div>
  );
};
