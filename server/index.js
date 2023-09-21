import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import bookRoutes from "./routes/book.js";

import cors from "cors";
const app = express();
const router = express.Router();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("server is ok");
});

// const PORT = 8000;
app.use("/books", bookRoutes);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App is connected to database");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} `);
});
