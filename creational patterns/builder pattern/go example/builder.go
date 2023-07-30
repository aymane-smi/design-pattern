package main

type Builder interface{
	setDoor(int)
	setId(string)
	setEngine(string)
	setSpeed(int)
	build() Car
}