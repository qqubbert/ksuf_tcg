import { useMemo, useState } from "react";
import { characterCards } from "@shared/data";
// import type { CardProps } from "@entities/card";
import { CardGrid } from "@features/CardGrid";
import { CollectionToolbar } from "@features/CollectionToolbar";
import styles from "./Collection.module.css";

type CollectionMode = "owned" | "all";

type Props = {
  showToolbar?: boolean;
};

export const Collection = ({ showToolbar = true }: Props) => {
  const [mode, setMode] = useState<CollectionMode>("owned");

  const cards = useMemo(() => {
    return mode === "owned"
      ? characterCards.filter((c) => c.isOwned)
      : characterCards;
  }, [mode]);

  const ownedCount = characterCards.filter((c) => c.isOwned).length;

  return (
    <div className={styles.wrapper}>
      {showToolbar && (
        <CollectionToolbar
          mode={mode}
          setMode={setMode}
          ownedCount={ownedCount}
          totalCount={characterCards.length}
        />
      )}

      <CardGrid cards={cards} />
    </div>
  );
};