import Header from "./components/header/Header";
import Products from "./components/products/Products";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />

      <Products />
    </main>
  );
}
