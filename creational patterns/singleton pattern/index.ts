class Singleton{
    private counter:number = 0;
    public static instance: Singleton| null = null;

    private constructor(){}

    public static getInstance():Singleton{
        if(Singleton.instance === null)
            Singleton.instance = new Singleton();
        return Singleton.instance;
    }

    public increment():number{
        return ++(this.counter);
    }

    public decrement():number{
        return --(this.counter);
    }
}


let tmp1 = Singleton.getInstance();
let tmp2 = Singleton.getInstance();

console.log(tmp1.increment());
//1
console.log(tmp2.increment());
//2