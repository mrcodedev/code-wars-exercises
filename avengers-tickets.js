// The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

// Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?

// Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.

// Examples:
// tickets([25, 25, 50]) // => YES
// tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
// tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars
// Poder devolver el dinero según llega, el ticket vale 25 dolares

function tickets(peopleInLine) {
  let dol25 = 0;
  let dol50 = 0;

  for (let i = 0; i < peopleInLine.length; i++) {
    if (peopleInLine[i] == 25) {
      dol25 += 1;
    }
    if (peopleInLine[i] == 50) {
      dol50++;
      dol25 -= 1;
    }

    if (peopleInLine[i] == 100) {
      if (dol50 > 0 && dol25 > 0) {
        dol50 -= 1;
        dol25 -= 1;
      } else {
        dol25 -= 3;
      }
    }

    if (dol25 < 0 || dol50 < 0) {
      return 'NO';
    }
  }
  return 'YES';
}

console.log(tickets([25, 50, 50, 50]));

// Other optimal solutions

// function tickets(peopleInLine){
//   var bills = [100, 50, 25], canSell = "YES", bank = {"100": 0, "50": 0, "25": 0}, change;
//   peopleInLine.forEach(function(person){
//     bank[person]++;
//     change = person - 25;
//     bills.forEach(function(bill){
//       while (bank[bill] && change > 0 && change >= bill) {
//         change = change - bill;
//         bank[bill]--;
//       }
//     });
//     if (change > 0) canSell = "NO";
//   });
//   return canSell;
// }


// function Clerk(name) {
//   this.name = name;

//   this.money = {
//     25 : 0,
//     50 : 0,
//     100: 0
//   };

//   this.sell = function(element, index, array) {
//     this.money[element]++;

//     switch (element) {
//       case 25:
//         return true;
//       case 50:
//         this.money[25]--;
//         break;
//       case 100:
//         this.money[50] ? this.money[50]-- : this.money[25] -= 2;
//         this.money[25]--;
//         break;
//     }
//     return this.money[25] >= 0;
//   };
// }

// function tickets(peopleInLine){
//   var vasya = new Clerk("Vasya");
//   return peopleInLine.every(vasya.sell.bind(vasya)) ? "YES" : "NO";
// }