class Person {
    private name: String;
    private nationality: String;
    private canModify: Boolean

    constructor(name: String, nationality: String, canModify: Boolean){
        this.name = name;
        this.nationality = nationality;
        this.canModify = canModify;
    }

    public getName(): String{
        return this.name;
    }

    public getNationality(): String{
        return this.nationality;
    }

    public getCanModify(): Boolean{
        return this.canModify;
    }

    public setName(name: String){
        this.name = name;
    }

    public setNationality(nationality: String){
        this.nationality = nationality;
    }

    public setCanModify(canModify: Boolean){
        this.canModify = canModify;
    }
}

class ProxyPerson{
    private person: Person;

    constructor(person: Person){
        this.person = person;
    }

    public getName(): String{
        console.log("getting the name of the person");
        return this.person.getName();
    }

    public getNationality(): String{
        console.log("getting the nationality of the person");
        return this.person.getNationality();
    }

    public getCanModify(): Boolean{
        console.log("getting the value of canModify of the person");
        return this.person.getCanModify();
    }

    public setName(name: String){
        console.log("setting the name of the person");
        this.person.setName(name);
    }

    public setNationality(nationality: String){
        console.log("setting the nationality of the person");
        this.setNationality(nationality);
    }

    public setCanModify(canModify: Boolean){
        if(!this.person.getCanModify())
        console.log(`the person with the name ${this.person.getName()} cannot be modified!`);
        else{
            console.log(`set the prop(canModify) of '${this.person.getName()} with value:${canModify}'`);
            this.person.setCanModify(canModify);
        }
    }
}


const tmp = new Person("aymane", "moroccan", false);

const tmp2 = new ProxyPerson(tmp);

tmp2.setCanModify(true);


export {}