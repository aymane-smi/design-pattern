package main

import "fmt"

type Shape interface{
	Clone() Shape
	GetInfo() string
}

type Circle struct{
	Radius int
}

func (c *Circle) Clone() Shape{
	return &Circle{Radius: c.Radius}
}

func (c *Circle) GetInfo() string{
	return fmt.Sprintf("===>%d\n", c.Radius)
}

func main(){
	c := &Circle{Radius: 5}

	cPrototype := c.Clone()

	cPrototype.(*Circle).Radius = 7

	fmt.Print(c.GetInfo())

	fmt.Print(cPrototype.GetInfo())
}