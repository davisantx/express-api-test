import { products, setProducts } from "../mock/products";
import { idIsNumber } from "../validation";

export function getProducts(request: any, response: any) {
  return response.status(201).send(products);
}

export function getProductsByid(request: any, response: any) {
  const id = idIsNumber(request.params?.id);
  if (!id) return response.status(400).send("Invalid ID");

  const product = products.filter((product) => product.id == id);

  if (product.length == 0) return response.status(404).send("ID not found");

  return response.status(201).send(product);
}

export function createProduct(request: any, response: any) {
  if (!request.body.name || !request.body.description || !request.body.price)
    return response.status(400).send("Some field has not found");

  products.push({
    id: (products.length > 0 ? products[products.length - 1]?.id : 0) ?? +1,
    name: request.body.name,
    description: request.body.description,
    price: request.body.price,
  });

  return response.status(201).send(products);
}

export function changeProductById(request: any, response: any) {
  const id = idIsNumber(request.params.id);

  if (!id) return response.status(400).send("Invalid ID");

  if (!request.body.name || !request.body.description || !request.body.price)
    return response.status(400).send("Invalid name");

  const userIndex = products.findIndex((user) => user.id == id);

  products[userIndex] = {
    id: id,
    name: request.body.name,
    description: request.body.description,
    price: request.body.price,
  };

  return response.status(201).send(products);
}

export function deleteProductById(request: any, response: any) {
  const id = idIsNumber(request.params.id);

  if (!id) return response.status(400).send("Invalid ID");

  const userIndex = products.findIndex((user) => user.id == id);

  setProducts(products.splice(userIndex, 1));

  return response.status(201).send(products);
}
