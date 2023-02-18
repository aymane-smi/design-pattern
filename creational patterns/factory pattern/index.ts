/*
    decalring an interface that contain the definition of our factory method
*/

interface UserFactoryMethod{
    showRole(): void
}


abstract class UserFactory{


    /*
        abstract method responsable for creating a new instance 
    */
    public abstract FactoryMethod(username:string):(Client | Admin);
}


class Client extends UserFactory implements UserFactoryMethod{
    private username:string;
    private role:string;

    public constructor(username:string){
        super();
        this.role = "client";
        this.username = username;
    }

    //override

    public FactoryMethod(username:string): Client {
        return new Client(username);
    }

    //override

    public showRole(): void {
        console.log("role of user:"+this.role);
    }
}


class Admin extends UserFactory implements UserFactoryMethod{

    private username:string;
    private role:string;

    public constructor(username:string){
        super();
        this.role = "admin";
        this.username = username;
    }

    //override

    public FactoryMethod(username:string): Admin {
        return new Admin(username);
    }

    public showRole(): void {
        console.log("role of user:"+this.role);
    }
}


let adminFactory = new Admin("");

let clientFactory = new Client("");

//get new instance of admin
adminFactory.FactoryMethod("admin1").showRole();

//get new instance of client
clientFactory.FactoryMethod("client1").showRole();
