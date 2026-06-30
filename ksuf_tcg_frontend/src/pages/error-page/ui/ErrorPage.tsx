import styles from "./ErrorPage.module.css";

export const ErrorPage = ({}) => {
  return (
    <div className={styles.errPage + " " + "page"}>
      <h1 className={styles.errNumber}>500</h1>
      <h3 className={styles.errText}>ERROR</h3>
    </div>
  )
}