$(document).ready(function() {
  $("#editBook").on("show.bs.modal", function(event) {
    var button = $(event.relatedTarget);
    var bookId = button.data("bookid");
    var title = button.data("title");
    var author = button.data("author");
    var genre = button.data("genre");
    var price = button.data("price");
    var stock = button.data("stock");
    $("#book-id").val(bookId);
    $("#book-title").val(title);
    $("#book-genre").val(genre);
    $("#book-author").val(author);
    $("#book-price").val(price);
    $("#book-stock").val(stock);

    if (stock == "data-stock") {
      $(".stock-in").prop("checked", true);
    } else {
      $(".stock-out").prop("checked", true);
    }
  });
});
