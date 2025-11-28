import express from "express";
import { users } from "./src/user";
import { products } from "./src/product";

const app = express();

// Middleware
// Alega que o corpo do payload será um json
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (request, response) => {
  return response.status(201).send("Hello!");
});

app.get("/api/users", (request, response) => {
  return response.send(users);
});

app.get("/api/users/:id", (request, response) => {
  const id = parseInt(request.params.id);
  const user = users.filter((user) => user.id == id);

  if (isNaN(id)) return response.status(400).send("Invalid ID");
  if (!user) return response.status(404).send("ID not found");

  return response.send(user);
});

app.post("/api/users", (request, response) => {
  if (!request.body.name || !request.body.cart)
    return response.status(400).send("Some field was not founded!");

  users.push({
    id: (users[users.length - 1]?.id ?? 0) + 1,
    name: request.body.name,
    cart: request.body.cart,
  });

  return response.status(201).send(users);
});

app.get("/api/products", (request, response) => {
  return response.status(201).send(products);
});

app.get("/api/products/:id", (request, response) => {
  const id = parseInt(request.params?.id);
  if (isNaN(id)) return response.status(400).send("Invalid ID");

  const product = products.filter((product) => product.id == id);

  if (!product) return response.status(404).send("ID not found");

  return response.status(201).send(product);
});

app.put("/api/users/:id", (request, response) => {
  const id = parseInt(request.params?.id);

  if (isNaN(id)) return response.status(400).send("Invalid ID");
  if (!request.body.name) return response.status(400).send("Invalid name");

  const userIndex = users.findIndex((user) => user.id == id);

  users[userIndex] = {
    id: id,
    name: request.body.name,
    cart: request.body.cart,
  };

  return response.status(201).send(users);
});

app.post("/api/products", (request, response) => {
  if (!request.body.name || !request.body.description || !request.body.price)
    return response.status(400).send("Some field not find");
    
  products.push(
    {
      id: (products.length > 0 ? products[products.length - 1]?.id : 0)?? + 1,
      name: request.body.name,
      description: request.body.description,
      price: request.body.price
    }
  );
  
  return response.status(201).send(products);
});

app.listen(PORT, () => {
  console.log(`Run on http://localhost:${PORT}`);
});
