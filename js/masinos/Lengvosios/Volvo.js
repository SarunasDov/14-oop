const Lengvosios = require('../Lengvosios');

class Volvo extends Lengvosios {
    constructor (name, steeringWheelPosition, seatCount, wheelCount) {
        super(name, steeringWheelPosition, seatCount, wheelCount);
        
    }
}

module.exports = Volvo;