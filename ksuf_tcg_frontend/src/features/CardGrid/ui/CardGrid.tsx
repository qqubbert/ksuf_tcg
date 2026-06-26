import { Card } from "@entities/card";
import type { CardProps } from "@entities/card";
import styles from "./CardGrid.module.css";

type Props = {
  cards: CardProps[];
};

export const CardGrid = ({ cards }: Props) => {
  return (
    <div className={styles.grid}>
      {cards.map((card) => (
        <div key={card.id} className={styles.item}>
          <Card data={card} />
        </div>
      ))}
    </div>
  );
};