//normal function

function Car(make,speed){
  this.speed = speed;
  this.make = make;
}

let bmw = new Car('bmw',120);
console.log(bmw);
Car.prototype.Accelerate = function(){
  this.speed+=10;
  console.log(`${this.make} is moving at ${this.speed}`);
}
bmw.Accelerate();
bmw.Accelerate();
//converting this to class
class Car{
  constructor(make,speed){
    this.make = make;
    this.speed = speed;
  }
  Accelerate(){
    this.speed +=10;
    console.log(`${this.make} is moving at ${this.speed}`);
  }
}

let BMW = new Car('BMW',120);
BMW.Accelerate();
BMW.Accelerate();
