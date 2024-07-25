import { Router } from "express";
import { ChatinboxCollection } from "./Collection";

const chatinboxRouter = Router();
const chatinboxCollection = new ChatinboxCollection();

chatinboxRouter.post("/create", chatinboxCollection.Create.bind(chatinboxCollection));
chatinboxRouter.get("/all", chatinboxCollection.GetAll.bind(chatinboxCollection));
chatinboxRouter.get("/:id", chatinboxCollection.GetById.bind(chatinboxCollection));
chatinboxRouter.put("/update/:id", chatinboxCollection.Update.bind(chatinboxCollection));
chatinboxRouter.delete("/delete/:id", chatinboxCollection.Delete.bind(chatinboxCollection));

export default chatinboxRouter;
