var controllers = require("./app/controllers/");

module.exports = function(app) {
  // Home Route
  app.get("/", (req, res) => {
    res.render("home");
  });

  // Books Route
  app.get("/books", controllers.home.view);
  app.post("/books/add", controllers.home.addBook);
  app.post("/books/edit", controllers.home.updateBook);
  app.get("/books/delete/:id", controllers.home.deleteBook);

  app.use((req, res, next) => {
    var err = new Error("Not Found");
    err.status = 404;
    next(err);
  });

  if (app.get("env") === "development") {
    app.use((err, req, res, next) => {
      res.status(err.status || 500);
      res.render("error", {
        message: err.message,
        error: err,
        title: "error"
      });
    });
  }

  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render("error", {
      message: err.message,
      error: {},
      title: "error"
    });
  });
};
