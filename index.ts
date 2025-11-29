import express from "express";
import * as users from "./src/api/users";
import * as products from "./src/api/products";

const app = express();

// Middleware
// Alega que o corpo do payload será um json
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (request, response) => {
  return response.status(201).send("Hello!");
});

app.get("/api/users", users.getUsers);
app.get("/api/users/:id", users.getUsersById);
app.post("/api/users", users.createUser);
app.put("/api/users/:id", users.changeUserById);
app.delete("/api/users/:id", users.deleteUserById);

app.get("/api/products", products.getProducts);
app.get("/api/products/:id", products.getProductsByid);
app.post("/api/products", products.createProduct);
app.put("/api/products/:id", products.changeProductById);
app.delete("/api/products:id", products.deleteProductById);

app.listen(PORT, () => {
  console.log(`Run on http://localhost:${PORT}`);
});
