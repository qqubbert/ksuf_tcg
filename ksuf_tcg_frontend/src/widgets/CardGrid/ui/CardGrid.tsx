import { useWindowVirtualizer } from "@tanstack/react-virtual";
import { useRef } from "react";
import { CardWithCount } from "@features";
import type { CardWithCountProps } from "@types";
import { useElementWidth } from "@hooks";
import styles from "./CardGrid.module.css";

type Props = {
  cards: CardWithCountProps[];
  mode?: "owned" | "other";
};

const CARD_MIN_WIDTH = 260;
const GAP = 8;
const ROW_HEIGHT = 410;

export const CardGrid = ({
  cards,
  mode = "other",
}: Props) => {
  const parentRef = useRef<HTMLDivElement>(null);

  const width = useElementWidth(parentRef);

  const columnCount = Math.min(6, Math.max(
    1,
    Math.floor(
      (width + GAP) /
        (CARD_MIN_WIDTH + GAP),
    ),
  ));

  const rowCount = Math.ceil(
    cards.length / columnCount,
  );

  const rowVirtualizer = useWindowVirtualizer({
    count: rowCount,
    estimateSize: () => ROW_HEIGHT,
    overscan: 1,
    scrollMargin: 16,
  });

  return (
    <div
      ref={parentRef}
      className={styles.viewport}
    >
      <div
        className={styles.grid}
        style={{
          height: rowVirtualizer.getTotalSize(),
        }}
      >
        {rowVirtualizer
          .getVirtualItems()
          .map((virtualRow) => {
            const startIndex =
              virtualRow.index * columnCount;

            const rowCards = cards.slice(
              startIndex,
              startIndex + columnCount,
            );

            return (
              <div
                key={virtualRow.key}
                className={styles.row}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  transform: `translateY(${virtualRow.start}px)`,
                }}
              >
                {rowCards.map((card) => (
                  <div
                    key={card.id}
                    className={styles.item}
                  >
                    <CardWithCount
                      data={card}
                      mode={mode}
                    />
                  </div>
                ))}
              </div>
            );
          })}
      </div>
    </div>
  );
};