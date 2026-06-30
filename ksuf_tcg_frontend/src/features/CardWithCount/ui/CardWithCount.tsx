import styles from "./CardWithCount.module.css";

import type { CardWithCountProps } from "@types";

import { Card } from "@entities";
// import { CardCountBadge } from "@shared/components";

type Props = {
  data: CardWithCountProps;
  mode?: "owned" | "other";
};

export const CardWithCount = ({ data, mode = "owned" }: Props) => {
  const MAX_LAYERS = 3;

  const isCollection = mode === "owned";

  const count = isCollection ? (data.count ?? 0) : 1;

  return (
    <div className={styles.cardWithCount}>
      <Card data={data} />

      {isCollection && count > 1 && (
        <>
          <div className={styles.stack}>
            {/* {Array.from({ length: Math.min(count, MAX_LAYERS) }).map((_, i) => ( */}
              <div
                // key={i}
                className={styles.layer}
                // style={{
                //   transform: `
                //     translate(${i * 3}px, ${-i * 3}px)
                //     rotate(${i * 1.5}deg)
                //     scale(${1 - i * 0.02})
                //   `,
                //   zIndex: i,
                // }}
              >
                <Card data={data} />
              </div>
            ))
            {/* } */}
          </div>

          {count > MAX_LAYERS && (
            <div className={styles.more}>+{count - MAX_LAYERS}</div>
          )}
        </>
      )}
    </div>
  );
};