// Code your solution in this file!
function returnFirstTwoDrivers(driver) {
    return driver.slice(0, 2); 
    // create a new array with the first two elements using slice
}

function returnLastTwoDrivers(driver) {
    return driver.slice(-2); 
    // Use slice with negative index to get the last two elements
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function (fare) {
      return fare * multiplier;
    };
  }

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, func) {
    return func(arrayOfDrivers);
  }