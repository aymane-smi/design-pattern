/*
as known the achieve rhe factory design pattern we should use both implementation and the inhertance in our case js is not an oop language 
so we gonna use js object instead of class instance
*/

const createUser = ({role, username})=>({
    role,
    username,
    showRole(){
        console.log("role of user:"+role);
    }
});

const client = createUser({role: "client", username: "client1"});

const admin = createUser({role: "client", username: "admin1"});

client.showRole()

admin.showRole()