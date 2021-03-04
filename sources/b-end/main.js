const GachaGenerator = require('./models/gachagenerator.js');

let machine = new GachaGenerator(5);

for(let i = 0; i < machine.results.length; i++) {
  machine.results[i].showMe();
}

