let counter = 0;
class Counter{
    getInstance(){
        return this;
    }

    getCounter(){
        return counter;
    }

    increment(){
        return counter++;
    }

    decrement(){
        return counter--;
    }
}

const singletonCounter = Object.freeze(new Counter());
console.log(singletonCounter);
