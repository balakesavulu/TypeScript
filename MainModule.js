"use strict";
exports.__esModule = true;
exports.N = exports.M = exports.t = void 0;
exports.t = 'hi';
function M() {
    console.log('main module');
}
exports.M = M;
var N = /** @class */ (function () {
    function N() {
        var _this = this;
        this.sum3 = function () {
            return (_this.k + _this.l);
        };
    }
    return N;
}());
exports.N = N;
