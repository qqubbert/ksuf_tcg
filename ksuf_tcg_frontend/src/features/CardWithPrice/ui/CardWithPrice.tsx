import type { CardWithCountProps } from "@types";
import styles from "./CardWithPrice.module.css";

import { Card } from "@entities";

import { Button } from "@components";

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
  return (
    <div className={`${styles.cardWithPrice}`}>
      <Card data={data} />
      <Button parentStyles={styles.buyButton}>
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
    </div>
  );
};
