import express from "express";
import dotenv from "dotenv";
import connectToDb from "./lib/db.js";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messagesRoutes from "./routes/messages.routes.js";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messagesRoutes);

dotenv.config();
const PORT = process.env.PORT;

app.listen(5001, () => {
  console.log(`Server is now running on port ${PORT}`);
  connectToDb();
});
