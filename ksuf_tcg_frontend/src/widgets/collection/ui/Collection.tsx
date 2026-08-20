import { useMemo, useState } from "react";
import { characterCards } from "@shared/data";
// import type { CardProps } from "@entities/card";
import { CardGrid } from "@features/CardGrid";
import { CollectionToolbar } from "@features/CollectionToolbar";
import styles from "./Collection.module.css";

type CollectionMode = "owned" | "other";

type Props = {
  showToolbar?: boolean;
};

export const Collection = ({ showToolbar = false }: Props) => {
  // const [mode, setMode] = useState<CollectionMode>("owned");
  const [mode, setMode] = useState<CollectionMode>("other");

  const cards = useMemo(() => {
    return mode === "owned"
      ? characterCards.filter((c) => c.count > 0)
      : characterCards;
  }, [mode]);

  const ownedCount = characterCards.filter((c) => c.count > 0).length;

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

      <CardGrid cards={cards} mode={mode}/>
    </div>
  );
};