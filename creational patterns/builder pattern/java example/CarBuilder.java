public class CarBuilder implements Builder{
    private String id;
    private int door;
    private String engine;
    private int speed;
    @Override
    public CarBuilder speed(int speed) {
        this.speed = speed;
        return this;
    }

    @Override
    public CarBuilder door(int door) {
        this.door = door;
        return this;
    }

    @Override
    public CarBuilder engine(String engine) {
        this.engine = engine;
        return this;
    }

    @Override
    public CarBuilder id(String id) {
        this.id = id;
        return this;
    }

    public Car build(){
        return new Car(id, door, engine, speed);
    }
    
    
}
