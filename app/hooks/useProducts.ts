import { useQuery } from "@tanstack/react-query";

import { fetchProducts, type Product } from "@/data/products";

export const useProducts = () => {
  const query = useQuery<Product[]>({
    queryFn: fetchProducts,
    queryKey: ["products"],
  });

  return query;
};
