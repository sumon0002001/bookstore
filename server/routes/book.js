import express from "express";
import { createBook, getAllbooks, getBook, deleteBook,updateBook  } from "../controllers/bookController.js";

const router = express.Router();

router.post("/", createBook);
router.get("/", getAllbooks);
router.get("/:id", getBook );
router.delete("/:id", deleteBook)
router.patch("/:id", updateBook)

export default router;
