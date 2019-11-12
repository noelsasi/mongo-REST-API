var controllers = require("./app/controllers/");

module.exports = function(app) {
  // Home Route
  app.get("/", (req, res) => {
    res.send("Go to books route");
  });

  // Books Route
  app.get("/books", controllers.home.view);
  app.post("/books/add", controllers.home.addBook);
  app.post("/books/edit", controllers.home.updateBook);
  app.get("/books/delete/:id", controllers.home.deleteBook);
};
