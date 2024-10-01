//class?
//inheritance?
//constructor?
//abstract class?
//abstract keyword?
//super()?
//this keyword
//new class and change getcost()
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
var Phone = /** @class */ (function () {
    function Phone() {
    }
    Phone.prototype.getSpecialFeatures = function () {
        return "yeah!!!!!!!!!!! ".concat(this._name, " has a special feature");
    };
    return Phone;
}());
var Iphone = /** @class */ (function (_super) {
    __extends(Iphone, _super);
    function Iphone(name, cost, cameraMP) {
        var _this = _super.call(this) || this;
        _this._name = name;
        _this._cost = cost;
        _this._cameraMP = cameraMP;
        return _this;
    }
    Iphone.prototype.getname = function () {
        console.log(this._name);
    };
    Iphone.prototype.getcost = function () {
        console.log(this._cost * 5);
    };
    Iphone.prototype.getcameraMP = function () {
        console.log(this._cameraMP);
    };
    Iphone.prototype.iphonefunc = function () {
        console.log("aiyooo 😲 high price");
    };
    return Iphone;
}(Phone));
var iphone = new Iphone("iphone", 50000, 20);
iphone.getname();
iphone.getcost();
iphone.getcameraMP();
console.log(iphone.getSpecialFeatures());
iphone.iphonefunc();
