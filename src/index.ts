import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import urlRoute from "./routes/url.route";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/", urlRoute);

// Health check
app.get("/health", (_req, res) => {
  res.json({ success: true, message: "Server is running" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
