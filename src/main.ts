import express, { Application, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import compression from "compression";
import router from "./products/fetch-products-byUser-Id";

const app: Application = express();
const PORT = 2000;

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(compression());

app.use('/src',router);
app.get("/", (_req: Request, res: Response) => {
  res.send("Server is On");
});

const start = () => {
  app.listen(PORT, () => {
    console.log(`App is live on http://localhost:${PORT}`);
  });
};

start();
