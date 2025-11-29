import type { Product } from "../entities/product";

let products: Product[] = [
  { id: 1, name: "Galaxy a36", description: "128gb", price: 1_400.99 },
  { id: 2, name: "Iphone 16e", description: "128gb", price: 3_600.3 },
  { id: 3, name: "Ideapad 3", description: "240gb 12gb RAM", price: 3_400.0 },
];

const setProducts = (newProduct: Product[]) => {
  products = newProduct;
};

export { products };
