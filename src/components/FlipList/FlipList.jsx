import FlipListItem from "../FlipListItem/FlipListItem";
import styles from "./FlipList.module.css";

export default function FlipList({ data }) {
  return (
    <>
      {data.map((item, index) => (
        <FlipListItem
          key={index}
          cards={item.cards}
          mastered={item.mastered}
          title={item.title}
          isTop={item.top ?? false}
        />
      ))}
    </>
  );
}
