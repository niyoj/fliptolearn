import styles from "./App.module.css";
import FlipList from "./components/FlipList/FlipList";
import MiniDashboard from "./ui/MiniDashboard/MiniDashboard";

const dummyFlipLists = [
  {
    title: "Title 1",
    cards: 1000,
    mastered: 250,
    top: true,
  },
  {
    title: "Title 2",
    cards: 2000,
    mastered: 1000,
  },
];

function App() {
  return (
    <div className={styles["app"]}>
      <header className={styles["app__header"]}>
        <span className={styles["logo"]}>Flip To Learn</span>
        <MiniDashboard />
      </header>

      <main className={styles["app__main"]}>
        <h1>Flip Lists</h1>

        <FlipList data={dummyFlipLists}/>
      </main>

      <div className={styles["app__fab"]}>+</div>
    </div>
  );
}

export default App;
