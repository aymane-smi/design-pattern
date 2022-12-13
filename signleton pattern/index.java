package singleton_Pattern;

public class Singleton {
	private int counter = 0;
	private static Singleton instance = null;
	
	private Singleton() {
		try {
			Thread.sleep(1000);
		}catch(InterruptedException ex) {
			System.out.println("error");
		}
	}
	
	public int increment() {
		return ++counter;
	}
	
	public int decrement() {
		return --counter;
	}
	
	public static Singleton getInstance() {
		if(instance == null)
			instance = new Singleton();
		return instance;
	}
	
	public static void main(String args[]) {
		Singleton tmp1 = Singleton.getInstance();
		Singleton tmp2 = Singleton.getInstance();
		
		System.out.println(tmp1.increment());
		//1
		System.out.println(tmp2.increment());
		//2
	}
	
}
