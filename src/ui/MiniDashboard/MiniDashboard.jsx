import ProgressBar from "../../components/ProgressBar/ProgressBar";
import styles from "./style.module.css";

const dummy_progress_data = {
  mastered: {
    value: 1500,
    color: "var(--primary-color)",
  },
  unexplored: {
    value: 200,
    color: "#7C91AB",
  },
  progress: {
    value: 500,
    color: "var(--neutral-color)",
  },
};

export default function MiniDashboard() {
  return (
    <section className={styles["mini_dashboard"]}>
      <header>
        <h2>
          Hello <span>Niyoj!</span>
        </h2>
      </header>

      <ProgressBar data={dummy_progress_data} />

      <footer>
        <p>
          Accuracy: <span>80%</span>
        </p>
        <p>
          Daily Streak: <span>0 days</span>
        </p>
      </footer>
    </section>
  );
}
