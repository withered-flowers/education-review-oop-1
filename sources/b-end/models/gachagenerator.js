const fs = require('fs');
const { 
  SwordUser, 
  SpearUser,
  BowUser,
  BookUser
} = require('./weaponuser.js');


class GachaGenerator {
  constructor(iterator) {
    this.iterator = iterator;
    this._characterLists = this.generateList();
    this._results = this.generateRandomizer();
  }

  get characterLists() {
    return this._characterLists;
  }

  get results() {
    return this._results;
  }

  generateList() {
    let data = fs
      .readFileSync('./gacha.csv', 'utf8')
      .split('\n')
      .slice(1);

    let lists = [];    

    for(let i = 0; i < data.length; i++) {
      let eachData = data[i].split(',');
      let instance;

      // type on index 2
      if(eachData[2] === 'Pedang') {
        instance = new SwordUser(
          eachData[0], 
          eachData[1], 
          eachData[3], 
          eachData[4],
          eachData[5]
        );
      } else if(eachData[2] === 'Tombak') {
        instance = new SpearUser(
          eachData[0], 
          eachData[1], 
          eachData[3], 
          eachData[4],
          eachData[5]
        );
      } else if(eachData[2] === 'Panah') {
        instance = new BowUser(
          eachData[0], 
          eachData[1], 
          eachData[3], 
          eachData[4],
          eachData[5]
        );
      } else if(eachData[2] === 'Buku') {
        instance = new BookUser(
          eachData[0], 
          eachData[1], 
          eachData[3], 
          eachData[4],
          eachData[5]
        );
      }

      lists.push(instance);
    }

    return lists;
  }

  generateRandomizer() {
    let maxNumber = this._characterLists.length - 1;
    let results = [];

    for(let i = 0; i < this.iterator; i++) {
      let gachaNumber = Math.floor(Math.random() * maxNumber);

      results.push(this._characterLists[gachaNumber]);
    }

    return results;
  }
}

module.exports = GachaGenerator;