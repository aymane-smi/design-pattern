package main

import "fmt"

type UserFactoryMethod interface {
	showRole()
}

type UserFactory interface {
	factoryMethod(string) UserFactoryMethod
}

type Client struct {
	username string
	role     string
}

func newClient(username string) *Client {
	return &Client{
		username: username,
		role:     "client",
	}
}

func (c *Client) factoryMethod(username string) *Client {
	return newClient(username)
}

func (c *Client) showRole() {
	fmt.Println("user role is:", c.role)
}

type Admin struct {
	username string
	role     string
}

func newAdmin(username string) *Admin {
	return &Admin{
		username: username,
		role:     "admin",
	}
}

func (a *Admin) factoryMethod(username string) *Admin {
	return newAdmin(username)
}

func (a *Admin) showRole() {
	fmt.Println("user role is:", a.role)
}

func main() {
	admin := newAdmin("")
	client := newClient("")
	admin.factoryMethod("admin").showRole()
	client.factoryMethod("client").showRole()
}
