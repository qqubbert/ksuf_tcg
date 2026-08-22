import styles from "./Hand.module.css";

import { useState } from "react";

import { Card } from "@entities";
import { characterCards } from "@data";
import { type CardProps } from "@types";

export const Hand = ({}) => {
  const VISIBLE_COUNT = 9;
  const BUFFER = 1;

  const [activeId, setActiveId] = useState<string | null>(null);

  const [startIndex, setStartIndex] = useState(0);

  const ownedCards = characterCards.filter((card) => card.count > 0);
  const count = ownedCards.length;

  const [direction, setDirection] = useState<"left" | "right">("right");

  const handleWheel = (e: React.WheelEvent) => {
    if (ownedCards.length <= VISIBLE_COUNT) return;

    if (e.deltaY > 0) {
      setDirection("right");

      setStartIndex((prev) =>
        Math.min(prev + 1, ownedCards.length - VISIBLE_COUNT),
      );
    } else {
      setDirection("left");

      setStartIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  // динамический угол веера
  const maxAngle = Math.min(30, count * 2); // ограничение
  // const step = count > 1 ? maxAngle / (count - 1) : 0;

  // динамический сдвиг
  const offsetStep = Math.max(70, 120 - count * 5);

  const renderStart = Math.max(0, startIndex - BUFFER);
  const renderEnd = Math.min(
    ownedCards.length,
    startIndex + VISIBLE_COUNT + BUFFER,
  );

  const renderedCards = ownedCards.slice(renderStart, renderEnd);

  const hiddenLeft = startIndex;
  const hiddenRight = Math.max(
    0,
    ownedCards.length - (startIndex + VISIBLE_COUNT),
  );

  return (
    <>
      {(hiddenLeft > 0 || hiddenRight > 0) && (
        <div className={styles.hint}>
          {hiddenLeft > 0 && <span>← {hiddenLeft}</span>}
          {hiddenRight > 0 && <span>{hiddenRight} →</span>}
        </div>
      )}
      <div className={styles.hand} onWheel={handleWheel}>
        {renderedCards.map((card, localIndex) => {
          const index = renderStart + localIndex;

          const position = index - startIndex;

          const offsetFromCenter = position - (VISIBLE_COUNT - 1) / 2;

          const angle = offsetFromCenter * (maxAngle / VISIBLE_COUNT);

          const xOffset = offsetFromCenter * offsetStep;

          const center = (VISIBLE_COUNT - 1) / 2;

          const yOffset = Math.pow(offsetFromCenter / center, 2) * 20;

          const isBufferLeft = position < 0;
          const isBufferRight = position >= VISIBLE_COUNT;

          const animationClass =
            direction === "right"
              ? isBufferLeft
                ? styles.exitingLeft
                : isBufferRight
                  ? styles.enteringRight
                  : styles.visible
              : isBufferLeft
                ? styles.enteringLeft
                : isBufferRight
                  ? styles.exitingRight
                  : styles.visible;

          return (
            <div
              key={card.id}
              className={`${styles.cardWrapper} ${animationClass} ${activeId === card.id ? styles.active : ""}`}
              style={{
                transform: `
              translateX(${xOffset}px)
              translateY(${yOffset}px)
              rotate(${angle}deg)
            `,
              }}
              onMouseEnter={() => setActiveId(card.id)}
              onMouseLeave={() => setActiveId(null)}
            >
              <div className={styles.cardAnimation}>
                <Card data={card} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
