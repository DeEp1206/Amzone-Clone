import { Router } from "express";

import { getProducts } from "../controllers/ProductController.js";
const productRouter = Router();

productRouter.get("/", getProducts);

export default productRouter;
