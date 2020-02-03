class Wizard {
  constructor({name: name, bearded: bearded}) {
    this.name = name;
    this.bearded = bearded
    if (this.bearded === undefined) {
      this.bearded = true;
    }
  }

incantation(phrase) {
  
}

}




module.exports = Wizard;
