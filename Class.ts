class Book {
    bType:string
   bName:string
   bPrice:number
   constructor(bookType:string,bookName:string,bookPrice:number)
   {
this.bType=bookType
this.bName=bookName
this.bPrice=bookPrice
   }
   displayData(bookType:string,bookName:string,bookPrice:number)
   {
this.bType=bookType
this.bName=bookName
this.bPrice=bookPrice
   }

   displayBookDetails():void{
     console.log(this.bType) 
     console.log(this.bName) 

     console.log(this.bPrice) 

   } 

}
// let book=new Book()

let book=new Book('fiction','lie',400)
// 
// 

// book.bType='fiction'
// book.bName='unknown'
// book.bPrice=400

// book.displayBookDetails()
// book.displayData("fiction","truth",300)
book.displayBookDetails()