// class A{
// eName:String
// // eid:string
//  constructor(eName:string){
// this.eName=eName
//  }
// }
// class B extends A
// {
//    eDepNo:number
//    constructor(eName:string,eDepNo:number)
//    {
//        super(eName)
//     this.eDepNo=eDepNo

//      }
//      display():void{
//          console.log(this.eName)
//          console.log(this.eDepNo)
//      } 
// }

// let b=new B('ramesh',45)
// b.display()
/***********method overriding */
class MainProduct{
    price:number=120
    amount():number{
        return this.price
    }
}
class serviceA extends MainProduct
{

    amount():number{
return 140
    }
}
class serviceB extends MainProduct
{

    amount():number{
return 150
    }
}
let servicea=new serviceA()
console.log(servicea.amount())
let serviceb=new serviceB()
console.log(serviceb.amount())



