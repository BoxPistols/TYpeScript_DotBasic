// クラス
class User {
    constructor( name: string) {
        this.name = name;
            
    }
    public sayHi(): void {
        console.log("hi! i am " + this.name);
    }
}

class AdminUser extends User{
    private _age: number;
    constructor(name: string,  _age: number){
    super(name);
    this._age = _age;  
    }
    public sayHi(): void {
        console.log("MyAge " + this._age);
        console.log("MyName " + this.name);
        super.sayHi();
    }
}

var bob = new AdminUser("Bob", 23);
bob.sayHi();