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

rankTest('case 2 : voyage length is 13 zone is east-indies  and history without china history length <= 10', t => {
    const voyage = {
      zone: 'east-indies',
      length: 13,
    };
  
    const rank = rating(voyage,history.slice(3,history.length))
    t.is('B',rank)
});
rankTest('case 3 : voyage length is 10 zone is china  and history without china history length <= 10', t => {
    const voyage = {
      zone: 'china',
      length: 10,
    };
  
    const rank = rating(voyage,history.slice(3,history.length))
    t.is('A',rank)
});
rankTest('case 4 : voyage length is 13 zone is china  and history without china history length <= 10', t => {
  const voyage = {
    zone: 'china',
    length: 13,
  };

  const rank = rating(voyage,history.slice(3,12))
  t.is('B',rank)
});
rankTest('case 5 : voyage length is 19 zone is china  and history without china history length <= 10', t => {
  const voyage = {
    zone: 'china',
    length: 19,
  };

  const rank = rating(voyage,history.slice(3,12))
  t.is('B',rank)
});
rankTest('case 6 : voyage length is 19 zone is china  and history without china history length > 10', t => {
  const voyage = {
    zone: 'china',
    length: 19,
  };

  const rank = rating(voyage,history.slice(3,16))
  t.is('B',rank)
});
rankTest('case 7 : voyage length is 19 zone is china  and history have china history length is 9', t => {
  const voyage = {
    zone: 'china',
    length: 19,
  };

  const rank = rating(voyage,history.slice(0,9))
  t.is('B',rank)
});
rankTest('case 8 : voyage length is 19 zone is china  and history have china history length is 16', t => {
  const voyage = {
    zone: 'china',
    length: 19,
  };

  const rank = rating(voyage,history.slice(0,16))
  t.is('A',rank)
});
rankTest('case 9 : voyage length is 10 zone is china  and history have china history length is 16', t => {
  const voyage = {
    zone: 'china',
    length: 10,
  };

  const rank = rating(voyage,history.slice(0,16))
  t.is('A',rank)
});
rankTest('case 10 : voyage length is 16 zone is china  and history have china history length is 16', t => {
  const voyage = {
    zone: 'china',
    length: 16,
  };

  const rank = rating(voyage,history.slice(0,16))
  t.is('A',rank)
});
rankTest('case 11 : voyage length is 16 zone is east-indies  and history have china history length is 3', t => {
  const voyage = {
    zone: 'east-indies',
    length: 16,
  };

  const rank = rating(voyage,history.slice(3,3))
  t.is('B',rank)
});
rankTest('case 12 : voyage length is 16 zone is east-indies  and history have china history length is 3', t => {
  const voyage = {
    zone: 'east-indies',
    length: 16,
  };

  const rank = rating(voyage,history.slice(3,13))
  t.is('B',rank)
});
