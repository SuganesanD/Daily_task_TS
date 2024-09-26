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
//when there is a need that the derivd class should have the common behaviours that of the parent class then the abstract class is used.
// the abstract keyword is used to define the abstrat class
// inside the abstract class there can be abstract methods and properties
// when those methods and properties are declared as abstract then that methods and properties must be defined inside the derived class that extends the abstract class
var abstract_class = /** @class */ (function () {
    function abstract_class() {
    }
    return abstract_class;
}());
var derived_class = /** @class */ (function (_super) {
    __extends(derived_class, _super);
    function derived_class() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "ram";
        return _this;
    }
    return derived_class;
}(abstract_class));
var c1 = new derived_class();
console.log(c1.name);
//create a abstract class "animal" and extend that class in the classes named "cat","dog".
var animal = /** @class */ (function () {
    function animal() {
    }
    animal.prototype.getsound = function () {
        return "".concat(this.nam, " makes the sound");
    };
    return animal;
}());
var dog = /** @class */ (function (_super) {
    __extends(dog, _super);
    function dog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nam = "mani"; // the nam is the abstract property thus the name must be defined inside the derived class
        return _this;
    }
    return dog;
}(animal));
var cat = /** @class */ (function (_super) {
    __extends(cat, _super);
    function cat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nam = "sugar"; // the nam is the abstract property thus the name must be defined inside the derived class
        return _this;
    }
    return cat;
}(animal));
var c = new cat;
var d = new dog;
console.log(c.getsound());
console.log(d.getsound());
