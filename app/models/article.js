// Example model

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: String,
  author: String,
  genre: String,
  price: String,
  inStock: Boolean
});

BookSchema.virtual("date").get(() => this._id.getTimestamp());

mongoose.model("books", BookSchema);
