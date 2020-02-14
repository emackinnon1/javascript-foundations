var Person = require('../exercises/person');
class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }

  stare(victim) {
    this.statues.push(victim);
    if (this.statues.length > 3) {
      var unstoned = this.statues.shift();
      unstoned.stoned = false;
    }
    victim.stoned = true;
  }

}

module.exports = Medusa;
