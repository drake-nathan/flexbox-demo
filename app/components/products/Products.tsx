"use client";

import { useProducts } from "../../hooks/useProducts";
import Card from "./Card";
import styles from "./products.module.css";

const Products = () => {
  const { data, error } = useProducts();

  return (
    <div className={styles.grid}>
      {error && <p>{error.message}</p>}
      {data &&
        data.map((product) => <Card product={product} key={product.id} />)}
    </div>
  );
};

export default Products;
