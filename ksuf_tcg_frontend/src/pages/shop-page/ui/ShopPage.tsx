import styles from "./ShopPage.module.css";

import { characterCards } from "@data";

import { getRandom } from "@utils";

const SHOP_CARDS_COUNT = 5;

import { ShopLine } from "@widgets";

export const ShopPage = () => {
  const chars = Array.from(
    { length: SHOP_CARDS_COUNT },
    () => characterCards[getRandom(0, characterCards.length - 1)],
  );

  return (
    <div className={`${styles.pageShop} page`}>
      <ShopLine chars={chars}/>
    </div>
  );
};
