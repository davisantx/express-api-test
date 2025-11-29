import { idIsNumber } from "../validation";
import { users } from "../mock/users";

export function getUsers(request: any, response: any) {
  return response.send(users);
}

export function getUsersById(request: any, response: any) {
  const id = idIsNumber(request.params.id);
  const user = users.filter((user) => user.id == id);

  if (!id) return response.status(400).send("Invalid ID");
  if (user.length == 0) return response.status(404).send("ID not found");

  return response.send(user);
}

export function createUser(request: any, response: any) {
  if (!request.body.name || !request.body.cart)
    return response.status(400).send("Some field was not founded!");

  users.push({
    id: (users[users.length - 1]?.id ?? 0) + 1,
    name: request.body.name,
    cart: request.body.cart,
  });

  return response.status(201).send(users);
}

export function changeUserById(request: any, response: any) {
  const id = idIsNumber(request.params.id);
  const userIndex = users.findIndex((user) => user.id == id);

  if (!id) return response.status(400).send("Invalid ID");
  if (!request.body.name) return response.status(400).send("Invalid name");
  if (userIndex == -1) return response.status(404).send("ID not found");

  users[userIndex] = {
    id: id,
    name: request.body.name,
    cart: request.body.cart,
  };

  return response.status(201).send(users);
}

export function deleteUserById(request: any, response: any) {
  const id = idIsNumber(request.params.id);
  const userIndex = users.findIndex((user) => user.id == id);

  if (!id) return response.status(400).send("Invalid ID");
  if (userIndex == -1) return response.status(404).send("ID not found");

  users.splice(userIndex, 1);
  return response.status(201).send(users);
}
