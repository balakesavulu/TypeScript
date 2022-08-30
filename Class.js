var Book = /** @class */ (function () {
    function Book(bookType, bookName, bookPrice) {
        this.bType = bookType;
        this.bName = bookName;
        this.bPrice = bookPrice;
    }
    Book.prototype.displayData = function (bookType, bookName, bookPrice) {
        this.bType = bookType;
        this.bName = bookName;
        this.bPrice = bookPrice;
    };
    Book.prototype.displayBookDetails = function () {
        console.log(this.bType);
        console.log(this.bName);
        console.log(this.bPrice);
    };
    return Book;
}());
// let book=new Book()
var book = new Book('fiction', 'lie', 400);
// 
// 
// book.bType='fiction'
// book.bName='unknown'
// book.bPrice=400
// book.displayBookDetails()
// book.displayData("fiction","truth",300)
book.displayBookDetails();
