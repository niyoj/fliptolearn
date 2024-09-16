import styles from "./FlipListItem.module.css";

export default function FlipListItem() {
  return (
    <div className={styles["flip_list_item"]}>
      <p className={styles["flip_list_item__title"]}>Dummy Title</p>
      <footer className={styles["flip_list_item__footer"]}>
        <p>Total cards: 1524</p>
        <p>Mastered: 80%</p>
      </footer>
    </div>
  );
}
