import type { Cart } from "./cart";

type User = {
  id: number;
  name: string;
  cart: Cart;
};

export type { User };
