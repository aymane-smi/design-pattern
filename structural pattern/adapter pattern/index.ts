class User{
    private planUser: string;
    constructor(username: string, password: number){
        this.planUser = JSON.stringify({username, password});
    }

    public getUser(): string{ 
        return this.planUser;
    }
}

class UserAdapter extends User{
    constructor(username: string, password: number){
        super(username, password);
    }

    public getUserObj(): {
        username: string,
        password: number,
    } {
        return JSON.parse(this.getUser());
    }
}

class AuthUser{
    checkUser(user){
        if(user.password === 123 && user.username === "aymane")
            console.log(true);
        else
            console.log(false);
    }
}

let user:UserAdapter = new UserAdapter("aymane", 123);
let user2:UserAdapter = new UserAdapter("aymanee", 321);

let auth:AuthUser = new AuthUser();

auth.checkUser(user.getUserObj());
auth.checkUser(user2.getUserObj());


export{};