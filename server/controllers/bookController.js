import mongoose from "mongoose";
import { Book } from "../models/bookModel.js";

export const createBook = async (req, res) => {
  const { title, author, publishYear } = req.body;

  try {
    const book = await Book.create({ title, author, publishYear });
    res.status(200).json(book);
  } catch (err) {
    console.log(err);
  }
};

export const getAllbooks = async (req, res) => {
  try {
    const books = await Book.find({}).sort({ createdAt: -1 });
    res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const getBook = async (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ msg: "no post found" });

  try {
    const book = await Book.findById(id);
    if (!book) return res.status(404).json({ msg: "No book found" });
    res.status(200).json(book);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const deleteBook = async (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ msg: "no post found" });

  try {
    const book = await Book.findById(id);
    if (!book) return res.status(404).json({ msg: "No book found" });
    const deleteBook = await Book.findOneAndDelete({ _id: id });
    res.status(200).json(deleteBook);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const updateBook = async (req, res) => {
    const { id } = req.params;
    console.log(req.params);
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).json({ msg: "no post found" });
  
    try {
      const book = await Book.findById(id);
      if (!book) return res.status(404).json({ msg: "No book found" });
      const updateBook = await Book.findOneAndUpdate({ _id: id }, {...req.body});
      res.status(200).json(updateBook);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  };
