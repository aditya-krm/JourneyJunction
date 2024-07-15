import express from "express";
import dotenv from "dotenv";
import connectToDatabase from "./db/connectToMongoDB.js";
import authRouter from "./routes/authRouter.js";

dotenv.config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/api", (req, res) => {
  res.send("Hello World");
});

app.use("/api/auth", authRouter);

app.listen(PORT, () => {
  connectToDatabase();
  console.log("Server is running on http://localhost:3000");
});
