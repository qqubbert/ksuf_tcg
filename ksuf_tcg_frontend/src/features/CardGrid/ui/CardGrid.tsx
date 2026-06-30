import { CardWithCount } from "@features";
import type { CardWithCountProps } from "@types";
import styles from "./CardGrid.module.css";

type Props = {
  cards: CardWithCountProps[];
  mode?: "owned" | "other";
};

export const CardGrid = ({ cards, mode = "other" }: Props) => {
  return (
    <div className={styles.grid}>
      {cards.map((card) => (
        <div key={card.id} className={styles.item}>
          <CardWithCount data={card} mode={mode}/>
        </div>
      ))}
    </div>
  );
};