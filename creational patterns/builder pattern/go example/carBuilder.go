package main

type carBuilder struct{
	car Car
}

func newCarBuilder() *carBuilder{
	return new(carBuilder)
}

func (cb *carBuilder) setDoor(door int){
	cb.car.door = door
}

func (cb *carBuilder) setId(id string){
	cb.car.id = id
}

func (cb *carBuilder) setEngine(engine string){
	cb.car.engine = engine
}

func (cb *carBuilder) setSpeed(speed int){
	cb.car.speed = speed
}

func (cb *carBuilder) build() *Car{
	return &cb.car
}