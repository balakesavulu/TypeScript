/**function types*/
// let first=()=>{
//     console.log('hello')
// }
// first()
// let second:Function
// second=()=>{
//     console.log('welcome')
// }
// second()
// function declare(){
//    console.log('hi')
// }
// declare()
// // function div(num5:number,num6:number)
// function div(num5:number,num6:number):number
// {
//    return num5/num6
// }
// console.log(div(6,3))
//     let anonmous=function(){
//    console.log('practice function')
// }
// anonmous()
// let addition=function (x:number,y:number):number
// {
//    return x+y
// }
// console.log(addition(6,3))
/*************function overloading****************************** */
// function overLoading(x:number,y:number):number;
// function overLoading(x:string,y:string):string;
// function overLoading(x:any,y:any):any{
// return x+y
// }
//    console.log(overLoading(10,20)) 
//    console.log(overLoading('wel','come')) 
/*********************parametrers types */
// parameters
// required parameters
// let sub=(num1:number,num2:number)=>{
//     return num1-num2
// }
// console.log(sub (20,5))
// // optional parameters
// let sum=(a:number,b:number,c?:number)=>{
//     if(c)
//     {
//         return a+b+c
//     }
//     else()=>{
//         return a+b
//     }
// }
// console.log(sum(10,20))
//  console.log(sum(10,20,30))
//  default parameters
// let sumOfNumber=(g:number,h:number,i:number=20)=>{
//    return g+h+i
// }
// console.log(sumOfNumber(10,20))
//  console.log(sumOfNumber(10,20,30))
// let sumOfNumbers=(i:number=20,g:number,h:number):number=>{
//    return i+g+h
// }
// console.log(sumOfNumbers(undefined,20,15))
/**********rest parameter */
function display(o) {
    var p = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        p[_i - 1] = arguments[_i];
    }
    return o + " " + p;
}
console.log(display('h', 'i'));
console.log(display('hello'));
console.log(display("welcome", "to", "typescript"));
