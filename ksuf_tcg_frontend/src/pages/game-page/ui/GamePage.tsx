// import styles from "./GamePage.module.css";

import { Hand } from "@features";

export const GamePage = ({}) => {
  console.log("GAME PAGE MOUNTED");
  return (
    <div className={"page"}>
      <Hand />
    </div>
  );
};
