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
        <h4>{product.title}</h4>
        <p>{product.category}</p>
        <p>${product.price}</p>
      </div>
    </div>
  );
};

export default Card;
