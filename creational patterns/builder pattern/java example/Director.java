public class Director {
    public void fastCar(CarBuilder car){
        car.id("sport").door(2).speed(300).engine("v10");
    }
    public void familyCar(CarBuilder car){
        car.id("family").door(4).speed(160).engine("v4");
    }
    
}
