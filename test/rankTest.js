const rankTest = require('ava');
const {rating} = require('../src/rank')

const history = [
  {
    zone: 'east-indies',
    profit: 5,
  },{
    zone: 'west-indies',
    profit: 15,
  },{
    zone: 'china',
    profit: -2,
  },
  {
    zone: 'west-africa',
    profit: 7,
  },
  {
    zone: 'west-africa',
    profit: 3,
  },
  {
    zone: 'west-africa',
    profit: 7,
  },
  {
    zone: 'east-indies',
    profit: 6,
  },
  {
    zone: 'east-indies',
    profit: 9,
  },
  {
    zone: 'west-africa',
    profit: 5,
  },
  {
    zone: 'west-africa',
    profit: 7,
  },
  {
    zone: 'east-indies',
    profit: 7,
  },
  {
    zone: 'west-africa',
    profit: 7,
  },
  {
    zone: 'west-africa',
    profit: 7,
  },
  {
    zone: 'east-indies',
    profit: 7,
  },
  {
    zone: 'west-africa',
    profit: 7,
  },
  {
    zone: 'west-africa',
    profit: 7,
  },
  {
    zone: 'west-africa',
    profit: 7,
  },
  {
    zone: 'east-indies',
    profit: 7,
  },  
  {
    zone: 'china',
    profit: 7,
  }
];
rankTest('case 1 : voyage length is 10 zone is east-indies  and history without china history length <= 10', t => {
  const voyage = {
    zone: 'east-indies',
    length: 10,
  };

  const rank = rating(voyage,history.slice(3,history.length))
  t.is('A',rank)
});

rankTest('case 2 : voyage length is 10 zone is east-indies  and history without china history length <= 10', t => {
    const voyage = {
      zone: 'east-indies',
      length: 13,
    };
  
    const rank = rating(voyage,history.slice(0,history.length))
    t.is('B',rank)
});
rankTest('case 3', t => {
    const voyage = {
      zone: 'east-indies',
      length: 2,
    };
  
    const rank = rating(voyage,history.slice(0,18))
    t.is('A',rank)
});

  
