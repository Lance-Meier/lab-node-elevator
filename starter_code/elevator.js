class Elevator {
  constructor(){
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.waitingList = [];
    this.passengers = [];
    this.requests = [];
    this.direction = "up";
  }

  start() { 
    this.interval = setInterval( () => this.update(),1000);
  }

  stop() { 
    clearInterval(this.interval);
  }
  update() {
    this.log();
   }
  _passengersEnter() { 
    this.waitingList.forEach(person => {
      if (person.originFloor === this.floor){
        this.passengers.push(person);
        this.requests.push(person.destinationFloor)
        console.log(`${person.name} has entered the elevator`);
        this.waitingList.splice(this.waitingList.indexOf(person), 1);
      }
    })
  }
  _passengersLeave() { 
    this.passengers.forEach(passenger => {
      if (passenger.destinationFloor === this.floor){
        console.log(`${passenger.name} has left the elevator`);
        this.passengers.splice(this.passengers.indexOf(passenger), 1);
      }
      return;
    })
  }
  floorUp() { 
    if(this.floor < this.MAXFLOOR){
      this.direction = "up";
      this.floor ++;
      this._passengersEnter()
      this._passengersLeave();
  } else {
    console.log("Already on the top floor");
    return false;
  }
}
  floorDown() { 
    if(this.floor > 0){
      this.direction = "down";
      this.floor --;
      this._passengersEnter();
      this._passengersLeave();
  } else {
    console.log("Already on the bottom floor");
    return false;
  }
}
  call(person) { 
    this.requests.push(person.originFloor);
    this.waitingList.push(person);
  }
  log() { 
    console.log(`Direction : ${this.direction} | Floor: ${this.floor}`);
    console.log(this.requests);
    console.log(this.passengers);
    console.log(this.waitingList)
  }
}

module.exports = Elevator;