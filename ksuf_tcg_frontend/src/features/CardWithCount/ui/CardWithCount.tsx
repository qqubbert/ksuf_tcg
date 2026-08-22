import styles from "./CardWithCount.module.css";

import type { CardWithCountProps } from "@types";

import { Card } from "@entities";
// import { CardCountBadge } from "@shared/components";

import { memo } from "react";

type Props = {
  data: CardWithCountProps;
  mode?: "owned" | "other";
};

export const CardWithCount = memo(({ data, mode = "owned" }: Props) => {
  const MAX_LAYERS = 3;

  const isCollection = mode === "owned";

  const count = isCollection ? (data.count ?? 0) : 1;

  const cardStack = Array.from({ length: Math.min(count, MAX_LAYERS) });

  const MIN_DARKNESS = 0.3;

  return (
    <div className={styles.cardWithCount}>
      {isCollection && count > 1 ? (
        <>
          <div className={styles.stack}>
            {cardStack.map((_, i) => {
              const darkIntensity =
                MIN_DARKNESS +
                (1 - MIN_DARKNESS) * (i / (cardStack.length - 1));
              return (
                <div
                  key={i}
                  className={styles.layer}
                  style={{
                    transform: `
                    translate(${i * 3}px, ${i * 3}px)
                    rotate(${i * 1}deg)
                    
                  `,
                    zIndex: i,
                  }}
                >
                  <Card
                    data={data}
                    enableVFX={i === cardStack.length - 1}
                    enableDarkerEffect={i !== cardStack.length - 1}
                    darkIntensity={darkIntensity}
                    useMouseEffect={i === cardStack.length - 1}
                  />
                </div>
              );
            })}
          </div>

          {count > 1 && (
            <div className={styles.more}>x{count}</div>
          )}
        </>
      ) : (
        <Card data={data} />
      )}
    </div>
  );
});
