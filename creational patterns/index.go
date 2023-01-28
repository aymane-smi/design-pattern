/*
there is 3 technic to apply singleton design in your go code:
	1 - by using mutex
	2 - by using once.do
	3 - by using the simple implementation
*/

/*
simple implementation
*/

package main

import (
	"sync"
)

type Counter struct{
	counter int
}

var Counter_ *Counter


func getInstance1() *Counter{
	if Counter_ == nil {
		Counter_ = &Counter{}
	}
	return Counter_
}

/*
using once.do
*/

var tmp *sync.Once

func getInstance2() *Counter{
	tmp.Do(func(){
		Counter_ = 	&Counter{}
	})
}


/*
using mutex
*/

var lock *sync.Mutex

func getInstance3() *Counter{
	lock.Lock()
	defer lock.Unlock()
	if Counter_ == nil{           //check if the Counter is nil
		lock.Lock()              // if not then lock 
		defer lock.Unlock()      
		if Counter_ == nil{      // recheck the Counter if nil .why because between the first if and the second one we may have the possibility that Counter get instanced 
			Counter_ = &Counter{}
		}
	}
	return Counter_
}