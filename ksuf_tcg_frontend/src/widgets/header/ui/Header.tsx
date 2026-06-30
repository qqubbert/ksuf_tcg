import styles from "./Header.module.css";

import { Link } from "react-router-dom";

export const Header = ({}) => {
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
          <div className={styles.money}>$55</div>
          <Link className={styles.pageLink + " " + styles.userInfo} to="/profile">
            <span className={styles.userName}>User4326</span>
            <img className={styles.userPic} src="/images/user.jpg" alt="" />
          </Link>
        </div>
      </div>
    </>
  );
};
