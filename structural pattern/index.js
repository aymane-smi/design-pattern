const person = {
    name: "aymane",
    nationality: "moroccan",
    canModify: false
}

const personProxy = new Proxy(person, {
    get : (obj, prop)=>{
        console.log(`the value of the prop ${prop} is: ${obj[prop]}`);
    },
    set : (obj, prop, value)=>{
        if(prop === "canModify" && !obj[prop])
            console.log(`the person with the name ${obj["name"]} cannot be modified!`);
        else
            console.log(`set the prop(${prop} of '${obj['name']} with value:${value}')`);
    }
});

//we can use Reflect object provided by js

/*
const personProxy = new Proxy(person, {
    get : (obj, prop)=>{
        console.log(`the value of the prop ${prop} is: ${Reflect.get(obj, prop)}`);
    },
    set : (obj, prop, value)=>{
        if(prop === "canModify" && !obj[prop])
            console.log(`the person with the name ${obj["name"]} cannot be modified!`);
        else{
            console.log(`set the prop(${prop} of '${obj['name']} with value:${value}')`);
            return Reflect.set(obj, prop, value);
        } 
    }
});
*/