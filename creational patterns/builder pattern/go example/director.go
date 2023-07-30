package main

type director struct{
	builder carBuilder
}

func newDirector(builder carBuilder) *director{
	tmp := new(director)
	tmp.builder = builder
	return tmp
}

func (d *director) createBugatti() *Car{
	d.builder.setDoor(2)
	d.builder.setEngine("v12")
	d.builder.setId("cheron#1")
	d.builder.setSpeed(500)
	return d.builder.build()
}

func (d *director) createLamborghini() *Car{
	d.builder.setDoor(2)
	d.builder.setEngine("v8")
	d.builder.setId("avontador#1")
	d.builder.setSpeed(320)
	return d.builder.build()
}