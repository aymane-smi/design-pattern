interface UserFactoryMethod {
    public void showRole();
}

abstract class UserFactory {
    abstract UserFactoryMethod factoryMethod(String username);
}

class Client extends UserFactory implements UserFactoryMethod {
    private String username;
    private String role;

    public Client(String username) {
        this.username = username;
        this.role = "client";
    }

    public UserFactoryMethod factoryMethod(String username) {
        return new Client(username);
    }

    public void showRole() {
        System.out.println("user role is:" + this.role);
    }
}

class Admin extends UserFactory implements UserFactoryMethod {
    private String username;
    private String role;

    public Admin(String username) {
        this.username = username;
        this.role = "admin";
    }

    public UserFactoryMethod factoryMethod(String username) {
        return new Admin(username);
    }

    public void showRole() {
        System.out.println("user role is:" + this.role);
    }
}

public class index {
    public static void main(String[] args) {
        Admin admin = new Admin("");
        Client client = new Client("");

        admin.factoryMethod("admin").showRole();
        client.factoryMethod("client").showRole();
    }
}