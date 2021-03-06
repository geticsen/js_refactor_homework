function voyageRisk(voyage) {
  let result = 1;
  const riskZone = [
    'china',
    'east-indies',
  ];
  result += voyage.length > 4 ?2:0;
  result += voyage.length > 8 ?voyage.length - 8:0;
  result += riskZone.includes(voyage.zone)?4:0;
  return Math.max(result, 0);
}

function hasChina(history) {
  return history.some(v => 'china' === v.zone);
}

function captainHistoryRisk(voyage, history) {
  let result = 1;
  result += history.length < 5?4:0;
  result += history.filter(v => v.profit < 0).length;
  result -= voyageAndHistoryHasChina(voyage, history)?2:0;
  return Math.max(result, 0);
}

function voyageAndHistoryHasChina(voyage, history) {
  return (voyage.zone === 'china' && hasChina(history));
}

function voyageProfitFactor(voyage, history) {
  let result = 2;
  result += voyage.zone === 'china'?1:0;
  result += voyage.zone === 'east-indies'?1:0;

  if (voyageAndHistoryHasChina(voyage, history)) {
    result += 3;
    result += history.length>10?1:0;
    result +=voyage.length >12?1:0;
    result += voyage.length>18?-1:0;
  }else {
    result += history.length > 8?1:0;
    result += voyage.length > 14?-1:0;
  }
  return result;
}

function rating(voyage, history) {
  const vpf = voyageProfitFactor(voyage, history);
  const vr = voyageRisk(voyage);
  const chr = captainHistoryRisk(voyage, history);
  if (vpf * 3 > (vr + chr * 2)) {
    return 'A';
  }
  else {
    return 'B';
  }
}

module.exports = {
  rating
};

