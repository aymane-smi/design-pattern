<?php
interface UserFactoryMethod
{
    public function showRole();
}

abstract class UserFactory
{
    public abstract function FactoryMethod($username);
}

class Client extends UserFactory implements UserFactoryMethod
{
    private $username;
    private $role;

    public function __construct($username = "")
    {
        $this->username = "test";
        $this->role = "client";
    }

    public function FactoryMethod($username)
    {
        return new self($username);
    }

    public function showRole()
    {
        echo "user role is:" . $this->role . "\n";
    }
}


class Admin extends UserFactory implements UserFactoryMethod
{
    private $username;
    private $role;

    public function __construct($username)
    {
        $this->username = $username;
        $this->role = "admin";
    }

    public function FactoryMethod($username)
    {
        return new self($username);
    }

    public function showRole()
    {
        echo "user role is:" . $this->role . "\n";
    }
}

class Test
{
}


$admin = new Admin("");
$client = new Client("");

($admin->FactoryMethod("admin"))->showRole();
($client->FactoryMethod("client"))->showRole();
