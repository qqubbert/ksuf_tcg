import styles from "./Page404.module.css";

export const Page404 = ({}) => {
  return (
    <div className={styles.page404 + " " + "page"}>
      <h1 className={styles.errNumber}>404</h1>
      <h3 className={styles.errText}>NOT FOUND</h3>
    </div>
  )
}