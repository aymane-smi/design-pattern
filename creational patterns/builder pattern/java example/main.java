public class main {
    public static void main(String[] args){
        Director Director = new Director();
        CarBuilder carBuilder = new CarBuilder();
        Director.fastCar(carBuilder);
        Car sportCar = carBuilder.build();
        System.out.println(sportCar.toString());
    }
}
