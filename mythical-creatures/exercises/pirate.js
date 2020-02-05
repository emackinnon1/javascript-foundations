class Hobbit {
  constructor(name, job) {
    this.name = name;
    this.job = job;
    this.castings = 0;
    if (!this.job) {
      this.job = 'Scallywag';
    }
    this.heinousActs = 0;
    this.cursed = false;
    this.booty = 0;
  }

  commitHeinousAct() {
    this.heinousActs += 1;
    if (this.heinousActs === 3) {
      this.cursed = true;
    }
  }

  robShip() {
    this.booty = 100;
    return 'YAARRR!';
  }

}





module.exports = Hobbit;
