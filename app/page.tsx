import Products from "./components/products/Products";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>We&apos;re gonna put stuff here.</h1>
      <h4>And also probably here.</h4>
      <Products />
    </main>
  );
}
