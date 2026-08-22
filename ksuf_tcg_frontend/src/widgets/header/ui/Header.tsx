import styles from "./Header.module.css";

import { Link } from "react-router-dom";

import { useCurrencyStore } from "@entities";

export const Header = ({}) => {
  const { coins } = useCurrencyStore();

  return (
    <>
      <div className={styles.header}>
        <div className={styles.leftSide}>
          <Link className={styles.pageLink} to="/collection">
            <span>Collection</span>
          </Link>
          <Link className={styles.pageLink} to="/shop">
            <span>Shop</span>
          </Link>
          <Link className={styles.pageLink} to="/game">
            <span>Game</span>
          </Link>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.money}>${coins}</div>
          <Link
            className={styles.pageLink + " " + styles.userInfo}
            to="/profile"
          >
            <span className={styles.userName}>User4326</span>
            <img className={styles.userPic} src="/images/user.jpg" alt="" />
          </Link>
        </div>
      </div>
    </>
  );
};
