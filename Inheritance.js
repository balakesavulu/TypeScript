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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//      }
//      display():void{
//          console.log(this.eName)
//          console.log(this.eDepNo)
//      } 
// }
// let b=new B('ramesh',45)
// b.display()
/***********method overriding */
var MainProduct = /** @class */ (function () {
    function MainProduct() {
        this.price = 120;
    }
    MainProduct.prototype.amount = function () {
        return this.price;
    };
    return MainProduct;
}());
var serviceA = /** @class */ (function (_super) {
    __extends(serviceA, _super);
    function serviceA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    serviceA.prototype.amount = function () {
        return 140;
    };
    return serviceA;
}(MainProduct));
var serviceB = /** @class */ (function (_super) {
    __extends(serviceB, _super);
    function serviceB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    serviceB.prototype.amount = function () {
        return 150;
    };
    return serviceB;
}(MainProduct));
var servicea = new serviceA();
console.log(servicea.amount());
var serviceb = new serviceB();
console.log(serviceb.amount());
