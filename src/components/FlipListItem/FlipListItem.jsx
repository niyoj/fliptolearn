import styles from "./FlipListItem.module.css";

export default function FlipListItem({
  title,
  cards,
  mastered,
  isTop = false,
}) {
  return (
    <div
      className={`${styles["flip_list_item"]} ${!isTop || styles["flip_list_item--top"]}`}
    >
      <p className={styles["flip_list_item__title"]}>{title}</p>
      <footer className={styles["flip_list_item__footer"]}>
        <p>Total cards: {cards}</p>
        <p>Mastered: {((mastered / cards) * 100).toFixed(2) ?? 0.00}%</p>
      </footer>
    </div>
  );
}
