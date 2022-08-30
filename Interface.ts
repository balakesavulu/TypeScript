/****interface implementation using class */
interface UserName{
uName:string
logInUserName():void
}
interface PassWord extends UserName{
    password:string
    logInPassWord():void
}
class Login implements PassWord
{ 
    uName:string='user'
    password:string='user123'
    logInUserName() :void{
        console.log(this.uName)
    }
 logInPassWord():void{
    console.log(this.password
    )
 }
}
let login=new Login()
login.logInUserName()
login.logInPassWord()
/****interface implementation as a type */
interface Mobile{
    mName:string
     mCost:number
     pay:()=>void
}
let mob:Mobile
mob={
    mName:'realme',
     mCost:15000,
     pay:()=>console.log('payment is done')
    
}
console.log(mob.mName)
console.log(mob.mCost)
mob.pay()





