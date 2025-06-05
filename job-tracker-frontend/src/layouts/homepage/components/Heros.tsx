import styles from "./Heros.module.css";

export const Heros = () => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>Your Job Search Starts Here</h1>
      <p className={styles.subtitle}>Track, manage, and win your dream job.</p>
    </div>
  );
};
