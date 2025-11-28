import type { Cart } from "./cart";

type User = {
  id: number;
  name: string;
  cart: Cart;
};

const users: User[] = [
  { 
    id: 1, 
    name: "joao", 
    cart: {
      productsId: [
        1,
        2,
        3,
      ],
    }
  },
  { 
    id: 2, 
    name: "marcos", 
    cart: {
      productsId: [
        1,
        2,
        3,
      ],
    }
  },
  { 
    id: 3, 
    name: "antonio", 
    cart: {
      productsId: [
        1,
        2,
        3,
      ],
    }
  },
];

export { users };
