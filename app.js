console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    if (count < 0) {
      console.log('Please provide a positive number.');
      return;
    }
  
    for (let i = 1; i <= count; i++) {
      if (i % 2 !== 0) {
        console.log(i);
      } else {
        // do nothing
      }
    }
  }

  printOdds(22);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");


function checkAge(userName, age) {
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
  
    if (age < 16) {
      console.log(belowSixteen);
    } else {
      console.log(aboveSixteen);
    }
  }

  checkAge(`lydia`, 13);

  // Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function checkQuadrant(x, y) {
    if (x === 0 && y === 0) {
      console.log('The point is at the origin.');
    } else if (x === 0) {
      console.log(`(${x}, ${y}) is on the x axis`);
    } else if (y === 0) {
      console.log(`(${x}, ${y}) is on the y axis`);
    } else if (x > 0 && y > 0) {
      console.log(`(${x}, ${y}) is in Quadrant 1`);
    } else if (x < 0 && y > 0) {
      console.log(`(${x}, ${y}) is in Quadrant 2`);
    } else if (x < 0 && y < 0) {
      console.log(`(${x}, ${y}) is in Quadrant 3`);
    } else if (x > 0 && y < 0) {
      console.log(`(${x}, ${y}) is in Quadrant 4`);
    }
  }

  checkQuadrant(0, 2);   
checkQuadrant(1, 2);  
checkQuadrant(-6, 18);  

 // Exercise 4 Section
 console.log("EXERCISE 4:\n==========\n");

 function checkTriangle(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a) {
      return 'Invalid triangle';
    }
  
    if (a === b && b === c) {
      return 'Equilateral triangle';
    } else if (a === b || b === c || a === c) {
      return 'Isosceles triangle';
    } else {
      return 'Scalene triangle';
    }
  }

console.log(checkTriangle(1, 2, 2));  
console.log(checkTriangle(1, 1, 2));  

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

function checkDataUsage(planLimit, day, usage) {
    let daysRemaining = 30 - day;
    let plannedDailyAverage = planLimit / 30;
    let actualDailyAverage = usage / day;
    let dataRemaining = planLimit - usage;
  
    console.log(`${day} days used, ${daysRemaining} days remaining`);
    console.log(`Average daily use: ${plannedDailyAverage.toFixed(3)} GB/day`);
  
    if (dataRemaining <= 0) {
      console.log(`You have run out of data with ${daysRemaining} days remaining in your plan.`);
      return;
    }
  
    if (actualDailyAverage > plannedDailyAverage) {
      let roundedActual = actualDailyAverage.toFixed(2);
      let projectedTotal = roundedActual * 30;
      let projectedExcess = (projectedTotal - planLimit).toFixed(1);
  
      console.log(`You are EXCEEDING your average daily use (${roundedActual} GB/day),`);
      console.log(`continuing this high usage, you'll exceed your data plan by`);
      console.log(`${projectedExcess} GB.`);
      console.log(`To stay below your data plan, use no more than ${(dataRemaining / daysRemaining).toFixed(2)} GB/day.`);
    } else if (actualDailyAverage < plannedDailyAverage) {
      console.log(`You are UNDER your average daily use (${actualDailyAverage.toFixed(2)} GB/day),`);
      console.log(`you can afford to use up to ${(dataRemaining / daysRemaining).toFixed(2)} GB/day for the rest of the month.`);
    } else {
      console.log(`You are RIGHT ON your average daily use (${actualDailyAverage.toFixed(2)} GB/day).`);
      console.log(`Continue using ${(dataRemaining / daysRemaining).toFixed(2)} GB/day to stay exactly on track.`);
    }
  }
  
  checkDataUsage(100, 15, 56);
