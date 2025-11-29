import type { User } from "../entities/user";

let users: User[] = [
  { 
    id: 1, 
    name: "joao", 
    cart: {
      productsId: [
        1,
      ],
    }
  },
  { 
    id: 2, 
    name: "marcos", 
    cart: {
      productsId: [
        3,
      ],
    }
  },
  { 
    id: 3, 
    name: "antonio", 
    cart: {
      productsId: [
        2,
        3,
      ],
    }
  },
];

const setUsers = (newProduct: User[]) => {
  users = newProduct;
};

export { users };