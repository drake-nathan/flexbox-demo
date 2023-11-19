/* eslint-disable @next/next/no-img-element */
import { type Product } from "@/data/products";

import st from "./card.module.css";

type Props = {
  product: Product;
};

const Card = ({ product }: Props) => {
  return (
    <div className={st.outerContainer}>
      <div className={st.upperContainer}>
        <img src={product.image} alt={product.title} />
      </div>

      <div className={st.lowerContainer}>
        <div>{product.title}</div>
        <div>{product.category}</div>
        <div>${product.price}</div>
      </div>
    </div>
  );
};

export default Card;
