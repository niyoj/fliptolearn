import styles from "./ProgressBar.module.css";

const getBarLength = (data) => {
  const items = [];
  const values = [];

  // extracting item name and value only
  for (const item in data) {
    items.push(item);
    values.push(data[item].value);
  }

  // values to percentage
  const total = values.reduce((acc, curr) => acc + curr);

  const values_in_percent = values.map(
    (val) => +((+val / total) * 100).toFixed(2),
  );

  return [items, values_in_percent];
};

export default function ProgressBar({ data }) {
  const [items, values] = getBarLength(data);

  return (
    <div className={styles["progress"]}>
      <div className={styles["progress_bar"]}>
        {items.map((item, index) => (
          <div
            className={styles["progress_bar__item"]}
            key={item}
            style={{
              backgroundColor: data[item]["color"] ?? "#000",
              width: `${values[index]}%`,
            }}
          />
        ))}
      </div>

      <div className={styles["legends"]}>
        {items.map((item) => (
          <div className={styles["legends__item"]} key={item}>
            <div
              className={styles["legends__item__color"]}
              style={{ backgroundColor: data[item]["color"] ?? "#000" }}
            />
            <span className={styles["legends__item__title"]}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
