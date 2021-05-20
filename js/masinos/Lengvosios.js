const TransportoPriemones = require('./TransportoPriemones');

class Lengvosios extends TransportoPriemones {
    constructor (name, steeringWheelPosition, seatCount, wheelCount) {
        super(name, steeringWheelPosition, seatCount, wheelCount);
        
    }
}

module.exports = Lengvosios;