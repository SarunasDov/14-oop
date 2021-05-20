class TransportoPriemones {
    constructor(name, steeringWheelPosition, seatCount, wheelCount ) {
        this.name = name;
        this.steeringWheelPosition = steeringWheelPosition;
        this.seatCount = seatCount;
        this.wheelCount = wheelCount;
        this.engineIsOn = false;
    }

    
    turnOnTheEngine() {
        this.engineIsOn = true;
    }
    turnOfTheEngine() {
        this.engineIsOn = false;
    }
}

module.exports = TransportoPriemones;