// one interface can be extendd with another interface with the help of extending interface technique
var interface_class = /** @class */ (function () {
    function interface_class() {
        this.name = "ragu";
        this.age = 13;
        this.id = 222;
    }
    interface_class.prototype.get_value = function () {
        return ("".concat(this.age, ",").concat(this.name));
    };
    return interface_class;
}());
var Interface_class = new interface_class;
console.log(Interface_class.get_value());
