//class?
//inheritance?
//constructor?
//abstract class?
//abstract keyword?
//super()?
//this keyword
//iphonefunc()
//create new class and change getcost()


abstract class Phone {
    abstract _name: string
    abstract _cost: number
    abstract _cameraMP: number

    abstract getname()

    abstract getcost()

    abstract getcameraMP()

    getSpecialFeatures(): string {
        return `yeah!!!!!!!!!!! ${this._name} has a special feature`
    }
}

class Iphone extends Phone {
    _name: string
    _cost: number
    _cameraMP: number
    constructor(
        name: string,
        cost: number,
        cameraMP: number) {
        super();
        this._name = name
        this._cost = cost
        this._cameraMP = cameraMP
    }
    
    getname() {
        console.log(this._name);    
    }

    getcost() {
        console.log(this._cost * 5);   
    }

    getcameraMP() {
        console.log(this._cameraMP);   
    }

    iphonefunc(){
        console.log("aiyooo 😲  high price");
        
    }
}

const iphone = new Iphone("iphone", 50000, 20);
iphone.getname();
iphone.getcost();
iphone.getcameraMP();
console.log(iphone.getSpecialFeatures());
iphone.iphonefunc();





