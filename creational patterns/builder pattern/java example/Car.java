public class Car {
    private String id;
    private int door;
    private String engine;
    private int speed;
    public Car(String id, int door, String engine, int speed){
        this.id = id;
        this.door = door;
        this.engine = engine;
        this.speed = speed;
    }
    // id
    public String getId(){
        return this.id;
    }
    public void setId(String id){
        this.id = id;
    }
    // door
    public int getDoor(){
        return this.door;
    }
    public void setDoor(int door){
        this.door = door;
    }
    // engine
    public String getEngine(){
        return this.engine;
    }
    public void setEngine(String engine){
        this.engine = engine;
    }
    // speed
    public int getSpeed(){
        return this.speed;
    }
    public void setSpeed(int speed){
        this.speed = speed;
    }
    @Override
    public String toString(){
        return "id:"+id+" door:"+door+" speed:"+speed+" engine:"+engine;
    }
}
