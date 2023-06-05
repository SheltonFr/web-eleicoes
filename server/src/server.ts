import "dotenv/config";
import express, { Express } from "express";
import cors from "cors";
import connectDatabase from "./database/db";
import Routes from "./routes";

const PORT: number = 3000 || process.env.PORT;
const app: Express = express();

app.use(cors({ origin: "*" }));

connectDatabase();
app.use("/api/", Routes);
app.listen(PORT, () => console.log("Server running on port " + PORT));
