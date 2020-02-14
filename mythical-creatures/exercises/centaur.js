class Centaur {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.actions = 0;
  }

  shoot() {
    this.actions += 1;
    if (this.actions > 2) {
      this.cranky = true;
      return 'NO!';
    }
    return 'Twang!!!';
  }

  run() {
    this.actions += 1;
    if (this.actions > 2) {
      this.cranky = true;
    }
    return 'Clop clop clop clop!!!';
  }

  sleep() {
    if (this.standing === true) {
      return 'NO!';
    }
  }
}

module.exports = Centaur
