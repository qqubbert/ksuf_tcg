import type { CardWithCountProps } from "@types";
import styles from "./CardWithPrice.module.css";

import { Card } from "@entities";

import { Button } from "@components";

import { useCurrencyStore } from "@entities";

import { characterCards } from "@shared/data";
import { useState } from "react";

export type CardWithPriceProps = {
  data: CardWithCountProps;
  price: number;
  discount?: number;
};

export const CardWithPrice = ({
  data,
  price,
  discount,
}: CardWithPriceProps) => {
  const [isPurchased, setIsPurchased] = useState(false);

  const { spendCoins } = useCurrencyStore();

  let cardInCollection = characterCards.find((el) => el.id === data.id);

  const handlePurchase = () => {
    spendCoins(price);

    setIsPurchased(true);

    if (cardInCollection) {
      cardInCollection.count++;
    }
  };

  return (
    <div className={`${styles.cardWithPrice}`}>
      {!isPurchased && (
        <>
          <Card data={data} />
          {cardInCollection && cardInCollection.count > 0 ? (
            <span className={styles.collectionCountText}>
              You have{" "}
              <span className={styles.collectionCount}>
                {cardInCollection?.count}
              </span>{" "}
              in collection
            </span>
          ) : (
            <span className={styles.collectionCountText}></span>
          )}
          <Button parentStyles={styles.buyButton} onClick={handlePurchase}>
            <span>Buy</span>
            <div className={`${styles.priceContainer}`}>
              <span className={styles.price}>${price}</span>
              {discount && discount > 0 && (
                <>
                  <span className={styles.discount}>
                    <span>$</span>
                    <span>{price * (1 - discount / 100)}</span>
                  </span>
                </>
              )}
            </div>
          </Button>
        </>
      )}
      {isPurchased &&
        <span className={styles.purchased}>Purchased!</span>
      }
    </div>
  );
};
