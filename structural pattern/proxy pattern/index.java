class Proxy {
    class Person {
        private String name;
        private String nationality;
        private Boolean canModify;
    
        public Person(String name, String nationality, Boolean canModify){
            this.name = name;
            this.nationality = nationality;
            this.canModify = canModify;
        }
    
        public String getName(){
            return this.name;
        }
    
        public String getNationality(){
            return this.nationality;
        }
    
        public Boolean getCanModify(){
            return this.canModify;
        }
    
        public void setName(String name){
            this.name = name;
        }
    
        public void setNationality(String nationality){
            this.nationality = nationality;
        }
    
        public void setCanModify(Boolean canModify){
            this.canModify = canModify;
        }
    }
    
    class ProxyPerson{
        private Person person;
    
        public ProxyPerson(Person person){
            this.person = person;
        }
    
        public String getName(){
            System.out.println("getting the name of the person");
            return this.person.getName();
        }
    
        public String getNationality(){
            System.out.println("getting the nationality of the person");
            return this.person.getNationality();
        }
    
        public Boolean getCanModify(){
            System.out.println("getting the value of canModify of the person");
            return this.person.getCanModify();
        }
    
        public void setName(String name){
            System.out.println("setting the name of the person");
            this.person.setName(name);
        }
    
        public void setNationality(String nationality){
            System.out.println("setting the nationality of the person");
            this.setNationality(nationality);
        }
    
        public void setCanModify(Boolean canModify){
            if(!this.person.getCanModify())
            System.out.println(String.format("the person with the name %s cannot be modified!", this.person.getName()));
            else{
                System.out.println(String.format("set the prop(canModify) of %s with value:%b", this.person.getName(), canModify));
                this.person.setCanModify(canModify);
            }
        }
    }
}