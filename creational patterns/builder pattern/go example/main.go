package main

import "fmt"

func main(){
	testCarBuilder := newCarBuilder()

	carDirector := newDirector(*testCarBuilder)

	bugatti := carDirector.createBugatti()

	fmt.Printf("id:%s, engine:%s, doors:%d, speed:%d\n", bugatti.id, bugatti.engine, bugatti.door, bugatti.speed)

	lamborghini := carDirector.createLamborghini()

	fmt.Printf("id:%s, engine:%s, doors:%d, speed:%d\n", lamborghini.id, lamborghini.engine, lamborghini.door, lamborghini.speed)
}