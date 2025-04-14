import { Router } from "express";
import multer from 'multer';
import multerConfig from './config/multer';
import UserController from './app/controllers/UserController';
import SessionController from "./app/controllers/SessionController";
import ProductsController from "./app/controllers/ProductsController";

const routes = new Router();

const upload = multer(multerConfig);

routes.post("/users", UserController.store);
routes.post('/session', SessionController.store);
routes.post('/products', upload.single('file'), ProductsController.store)

export default routes;
