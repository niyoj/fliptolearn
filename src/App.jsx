import styles from "./App.module.css";
import FlipList from "./components/FlipList/FlipList";
import MiniDashboard from "./ui/MiniDashboard/MiniDashboard";

function App() {
  console.log("Hellow")
  return (
    <div className={styles["app"]}>
      <header className={styles["app__header"]}>
        <span className={styles["logo"]}>Flip To Learn</span>
        <MiniDashboard />
      </header>

      <main className={styles["app__main"]}>
        <h1>Flip Lists</h1>

        <FlipList />
      </main>

      <div className={styles["app__fab"]}>+</div>
    </div>
  );
}

export default App;
