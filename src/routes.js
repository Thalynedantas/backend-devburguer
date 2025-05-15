import { Router } from "express";
import multer from "multer";
import multerConfig from "./config/multer";
import authMiddleware from "./app/middlewares/auth";
import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import ProductsController from "./app/controllers/ProductsController";
import CategoryController from "./app/controllers/CategoryController";
import OrderController from "./app/controllers/OrderController";

const routes = new Router();

const upload = multer(multerConfig);

routes.post("/users", UserController.store);
routes.post("/session", SessionController.store);

routes.use(authMiddleware);
routes.post("/products", upload.single("file"), ProductsController.store);
routes.get("/products", ProductsController.index);
routes.put("/products/:id", upload.single("file"), ProductsController.update);


routes.post("/categories", CategoryController.store);
routes.get("/categories", CategoryController.index);

routes.post("/orders", OrderController.store);
routes.get("/orders", OrderController.index);
routes.put("/orders/:id", OrderController.update);


export default routes;
