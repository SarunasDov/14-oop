class Pet {
    constructor(name, fur) {
        this.name = name;
        this.furColor = fur;
        this.legsCount = 4;
        this.hasTale = true;
        this.voiceCount = 0;
        this.children = [];
        this.sound = 'miau au nom';
    }

    voice() {
        
        console.log(`${this.name}: ${this.sound}!! (${++this.voiceCount})`);
        
    }

    introduce() {
        
        console.log(`Hi, I am ${this.name}, my fur is ${this.furColor} an I speak like ${this.sound}!`);
    }

    childCount() {
        
        console.log(`${this.name} has ${this.children.length} children.`);
    }
}

module.exports = Pet;