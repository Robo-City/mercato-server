import { Router } from "express";
import { ProductsCollection } from "./collection";

const productsRouter = Router();

const productscollection = new ProductsCollection();

productsRouter.post("/create", productscollection.Create);
productsRouter.get("/all", productscollection.GetAll);
productsRouter.get("/:id", productscollection.GetById);
productsRouter.put("/update/:id", ProductsCollection.Update);
productsRouter.delete("/delete/:id", productscollection.Delete);


export default productsRouter;