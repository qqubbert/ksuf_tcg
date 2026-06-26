import styles from "./CollectionToolbar.module.css";

type Props = {
  mode: "owned" | "all";
  setMode: (mode: "owned" | "all") => void;
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
        className={styles.button + " " + (mode === "all" ? styles.selected : "")}
        onClick={() => setMode("all")}
      >
        All
      </button>

      <span className={styles.count}>
        {ownedCount} / {totalCount}
      </span>
    </div>
  );
};