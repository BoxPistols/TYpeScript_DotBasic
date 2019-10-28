// クラス
class User {
    constructor(protected _name: string) {
    }
    public sayHi(): void {
        console.log("hi! i am " + this._name);
    }
}

class AdminUser extends User{
    private _age: number;
    constructor(_name: string,  _age: number){
    super(_name);
    this._age = _age;  
    }
    public sayHi(): void {
        console.log("MyAge " + this._age);
        console.log("MyName " + this._name);
        super.sayHi();
    }
}

var bob = new AdminUser("Bob", 23);
bob.sayHi();