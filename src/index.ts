import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import urlRoutes from "./routes/url.route";
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/", urlRoutes);

export default app;
