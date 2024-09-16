import styles from "./App.module.css";
import MiniDashboard from "./ui/MiniDashboard/MiniDashboard";

function App() {
  return (
    <div className={styles["app"]}>
      <header className={styles["app__header"]}>
        <span className={styles["logo"]}>Flip To Learn</span>
        <MiniDashboard />
      </header>

      <main className={styles["app__main"]}>
        <h1>Flip Lists</h1>
      </main>
    </div>
  );
}

export default App;
