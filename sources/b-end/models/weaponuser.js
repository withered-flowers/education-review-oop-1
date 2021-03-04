const Character = require('./character.js');

class SwordUser extends Character {
  constructor(name, element, weaponName, rank, skill) {
    super(name, element, 'Pedang', weaponName, rank);
    this.skill = skill;
  }

  showMe() {
    console.log(`Hi I'm Swordie ${this.name} with Skill ${this.skill}`);
  }
}

class SpearUser extends Character {
  constructor(name, element, weaponName, rank, skill) {
    super(name, element, 'Tombak', weaponName, rank);
    this.skill = skill;
  }

  showMe() {
    console.log(`Hi I'm Speardie ${this.name} with Skill ${this.skill}`);
  }
}

class BowUser extends Character {
  constructor(name, element, weaponName, rank, talent) {
    super(name, element, 'Panah', weaponName, rank);
    this.talent = talent;
  }

  showMe() {
    console.log(`Hi I'm Archer ${this.name} with Talent ${this.talent}`);
  }
}

class BookUser extends Character {
  constructor(name, element, weaponName, rank, talent) {
    super(name, element, 'Buku', weaponName, rank);
    this.talent = talent;
  }

  showMe() {
    console.log(`Hi I'm Nerdie ${this.name} with Talent ${this.talent}`);
  }
}

module.exports = {
  SwordUser,
  SpearUser,
  BowUser,
  BookUser
}