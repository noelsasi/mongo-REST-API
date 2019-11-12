const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const books = mongoose.model("books");

module.exports = {
  view: function(req, res) {
    books.find((err, articles) => {
      if (err) return next(err);
      res.send({
        articles: articles
      });
    });
  },

  addBook: function(req, res) {
    console.log(req.body);
    var book1 = new books();
    book1.title = req.body.title;
    book1.author = req.body.author;
    book1.genre = req.body.genre;
    book1.price = req.body.price;
    book1.inStock = req.body.addStock;
    book1.save((err, data) => {
      if (!err) {
        console.log(data.title + "is saved to the Db");
        res.send({
          data: data
        });
      } else {
        console.log("epudu error ena.. chi thu");
      }
    });
  },

  updateBook: function(req, res) {
    var inStockVal = req.body.editStock;
    books.findOneAndUpdate(
      { _id: req.body.id },
      {
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        price: req.body.price,
        $set: { inStock: inStockVal }
      },
      // req.body,
      { new: true },
      (err, doc) => {
        if (!err) {
          res.send({
            doc: doc
          });
        } else {
          console.log("Malli error chi, siggu ledu ra niku..");
        }
      }
    );
  },

  deleteBook: function(req, res) {
    books.findByIdAndRemove(req.params.id, (err, doc) => {
      if (!err) {
        res.send({
          doc: doc
        });
      } else {
        console.log("Malli error chi, siggu ledu ra niku..");
      }
    });
  }
};
