import styles from "./Hand.module.css";

import { useState } from "react";

import { Card } from "@entities";
import { characterCards } from "@shared/data";
import { type CardProps } from "@shared/types";

export const Hand = ({}) => {
  const VISIBLE_COUNT = 9;

  const [activeId, setActiveId] = useState<string | null>(null);

  const [startIndex, setStartIndex] = useState(0);

  const ownedCards = characterCards.filter((card) => card.count > 0);
  const count = ownedCards.length;

  const visibleCards = ownedCards.slice(startIndex, startIndex + VISIBLE_COUNT);
  const hiddenLeft = startIndex;
  const hiddenRight = Math.max(
    0,
    ownedCards.length - (startIndex + VISIBLE_COUNT),
  );

  const handleWheel = (e: React.WheelEvent) => {
    if (ownedCards.length <= VISIBLE_COUNT) return;

    if (e.deltaY > 0) {
      setStartIndex((prev) =>
        Math.min(prev + 1, ownedCards.length - VISIBLE_COUNT),
      );
    } else {
      setStartIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  // динамический угол веера
  const maxAngle = Math.min(30, count * 2); // ограничение
  // const step = count > 1 ? maxAngle / (count - 1) : 0;

  // динамический сдвиг
  const offsetStep = Math.max(70, 120 - count * 5);

  return (
    <>
      {(hiddenLeft > 0 || hiddenRight > 0) && (
        <div className={styles.hint}>
          {hiddenLeft > 0 && <span>← {hiddenLeft}</span>}
          {hiddenRight > 0 && <span>{hiddenRight} →</span>}
        </div>
      )}
      <div className={styles.hand} onWheel={handleWheel}>
        {visibleCards.map((card: CardProps, index: number) => {
          const isActive = activeId === card.id;

          const offsetFromCenter = index - (visibleCards.length - 1) / 2;

          const angle = offsetFromCenter * (maxAngle / VISIBLE_COUNT);

          const xOffset = (index - visibleCards.length / 2) * offsetStep;

          // максимум подъёма краёв
          const center = (visibleCards.length - 1) / 2;

          const arcHeight = 20;

          const yOffset = Math.pow(offsetFromCenter / center, 2) * arcHeight;

          return (
            <div
              key={card.id}
              className={styles.cardWrapper}
              style={{
                transform: `
                translateX(${xOffset}px)
                translateY(${yOffset}px)
                rotate(${angle}deg)
                translateY(${isActive ? -35 : 0}px)
                scale(${isActive ? 1.08 : 1})
              `,
                zIndex: isActive ? 1000 : index,
              }}
              onMouseEnter={() => setActiveId(card.id)}
              onMouseLeave={() => setActiveId(null)}
            >
              <Card data={card} />
            </div>
          );
        })}
      </div>
    </>
  );
};
