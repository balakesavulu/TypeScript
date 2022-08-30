var Login = /** @class */ (function () {
    function Login() {
        this.uName = 'user';
        this.password = 'user123';
    }
    Login.prototype.logInUserName = function () {
        console.log(this.uName);
    };
    Login.prototype.logInPassWord = function () {
        console.log(this.password);
    };
    return Login;
}());
var login = new Login();
login.logInUserName();
login.logInPassWord();
var mob;
mob = {
    mName: 'realme',
    mCost: 15000,
    pay: function () { return console.log('payment is done'); }
};
console.log(mob.mName);
console.log(mob.mCost);
mob.pay();
