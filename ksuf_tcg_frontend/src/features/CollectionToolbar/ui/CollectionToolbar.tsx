import styles from "./CollectionToolbar.module.css";

type Props = {
  mode: "owned" | "other";
  setMode: (mode: "owned" | "other") => void;
  ownedCount: number;
  totalCount: number;
};

export const CollectionToolbar = ({
  mode,
  setMode,
  ownedCount,
  totalCount,
}: Props) => {
  return (
    <div className={styles.toolbar}>
      <button
        className={styles.button + " " + (mode === "owned" ? styles.selected : "")}
        onClick={() => setMode("owned")}
      >
        Owned
      </button>

      <button
        className={styles.button + " " + (mode === "other" ? styles.selected : "")}
        onClick={() => setMode("other")}
      >
        All
      </button>

      <span className={styles.count}>
        {ownedCount} / {totalCount}
      </span>
    </div>
  );
};