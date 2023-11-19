import { z } from "zod";

// This is our zod schema. We use it to validate the data we get from the API.
// If the data doesn't match the schema, we throw an error.
// That way, we can be sure that the data we get from the API is what we expect.
// And now we can use the `Product` type in our code, and we know that it's correct.
const productSchema = z.object({
  category: z.string(),
  description: z.string(),
  id: z.number(),
  image: z.string(),
  price: z.number(),
  title: z.string(),
});

// This is how zod generates a type from our schema.
export type Product = z.infer<typeof productSchema>;

// This function fetches the products from the API.
export const fetchProducts = async (): Promise<Product[]> => {
  const url = "https://fakestoreapi.com/products";

  const res = await fetch(url);

  // I think it's important to annotate the type of `data` here as `unknown`.
  // This simply reminds me that I have no idea what I'm getting back from the API,
  // and that we need to validate it.
  const data: unknown = await res.json();

  // This is where our API data gets validated against our zod schema.
  // If it passes, get exactly the data we expect with no extra properties.
  // If it fails, it throws an error, which we can handle using React Query.
  return z.array(productSchema).parse(data);
};
