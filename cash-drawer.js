// INTENTO FALLIDO XD
/* // mapping of all bills in cents
const BILL_LOOKUP = {
  PENNY: 1,
  NICKEL: 5,
  DIME: 10,
  QUARTER: 25,
  ONE: 100,
  FIVE: 500,
  TEN: 1000,
  TWENTY: 2000,
  FIFTY: 5000,
  "ONE HUNDRED": 10000
}


function checkCashRegister(price, cash, cid) {
  // amount of change due as cents for convenience sake
  let changeDue = cash - price
  let changeDueCents = changeDue * 100;
  // mapped the change in drawer array and added up the total amount of change needed, utilizing the lookup object, then filter the ones that are equal to 0
  const change = cid.reverse().map(([billName, amount]) => {
    let total = 0
    const billValue = BILL_LOOKUP[billName]
    let amountCents = amount * 100
    while (billValue <= changeDueCents && amountCents >= 0) {
      total += billValue
      changeDueCents -= billValue
      amountCents -= billValue
    }
    return [billName, total / 100]
  }).filter(([, amount]) => amount > 0)
  // sum up all the money in the cd as cents
  const availableMoney = cid.reduce((accumulator, bill) => {
    return accumulator + bill[1] * 100;
  }, 0)
  // give all the money available as change
  if (availableMoney === changeDueCents) {
    return {status: "CLOSED", change: cid}
  }
  let changeTotal = change.reduce((accumulator,[, amount]) =>{
    return accumulator + amount
  }, 0.00) 
  if (changeTotal < changeDue) {
    return {status: "INSUFFICIENT_FUNDS", change: []}
  }
  return {status: "OPEN", change: change}
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); */

function checkCashRegister(price, cash, cid) {
  const billAmount = [10000, 2000, 1000, 500, 100, 25, 10, 5, 1];
  function moneyTransaction(price, cash, cid) {
    let changeNeeded = (cash - price) * 100;
    let moneyProvided = [
      ["ONE HUNDRED", 0],
      ["TWENTY", 0],
      ["TEN", 0],
      ["FIVE", 0],
      ["ONE", 0],
      ["QUARTER", 0],
      ["DIME", 0],
      ["NICKEL", 0],
      ["PENNY", 0],
    ];
    let availableCash = [...cid]
      .reverse()
      .map((element) => [element[0], element[1] * 100]);
    let totalCash =
      availableCash.reduce((accumulator, bill) => accumulator + bill[1], 0) /
      100;
    if (totalCash === changeNeeded / 100) {
      return { status: "CLOSED", change: [...cid] };
    } else
      for (let i = 0; i < availableCash.length; i++) {
        while (billAmount[i] <= changeNeeded && availableCash[i][1] > 0) {
          moneyProvided[i][1] += billAmount[i];
          changeNeeded -= billAmount[i];
          availableCash[i][1] -= billAmount[i];
        }
      }
    let change = moneyProvided
      .map((element) => [element[0], element[1] / 100])
      .filter((element) => element[1] !== 0);
    let changeTotal = change.reduce(
      (accumulator, bill) => accumulator + bill[1],
      0
    );
    if (changeTotal < changeNeeded) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
    return { status: "OPEN", change };
  }
  let answer = moneyTransaction(price, cash, cid);
  return answer;
}
