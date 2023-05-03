class User{
    constructor(username, password){
        this.planUser = JSON.stringify({username, password});
    }

    getUser(){
        return this.planUser
    }
}

class UserAdapter extends User{
    constructor(username, password){
        super(username, password);
    }

    getUserObj(){
        return JSON.parse(this.planUser);
    }
}

class AuthService{
    checkUser(user){
        if(user.password === 123 && user.username === "aymane")
            console.log(true);
        else
            console.log(false);
    }
}

let user = new UserAdapter("aymane", 123);
let user2 = new UserAdapter("aymane", 321);

let auth = new AuthService();

auth.checkUser(user.getUserObj());
auth.checkUser(user2.getUserObj());