class Wizard {
  constructor({name: name, bearded: bearded}) {
    this.name = name;
    this.isRested = true;
    this.bearded = bearded;
    this.castings = 0;
    if (this.bearded === undefined) {
      this.bearded = true;
    }
  }

incantation(phrase) {
  return phrase.toUpperCase();
}

cast() {
  this.castings += 1;
  if (this.castings >= 3) {
    this.isRested = false;
    return 'I SHALL NOT CAST!';
  }
  return 'MAGIC BULLET';
}

}




module.exports = Wizard;
