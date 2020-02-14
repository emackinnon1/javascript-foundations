class Werewolf {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.human = true;
    this.wolf = false;
    this.isHungry = false;
    this.hasEaten = false;
    this.victims = [];
  }

  change() {
    this.human = !this.human;
    this.wolf = !this.wolf;
    this.isHungry = !this.isHungry;
  }

  eat(victim) {
    if (this.human === false) {
      this.human = true;
      this.victims.push(victim);
      this.hasEaten = !this.hasEaten;
      this.wolf = !this.wolf;
      victim.alive = !victim.alive;
    }
  }

}



module.exports = Werewolf
