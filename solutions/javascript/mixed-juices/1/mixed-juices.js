// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case "Pure Strawberry Joy":
        return 0.5;

    case "Energizer":
    case "Green Garden":
        return 1.5;
    
    case "Tropical Island":
        return 3;

    case "All or Nothing":
        return 5;
  
    default:
        return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  // let i = 0;
  // let total = 0;

  // while (total < wedgesNeeded && i < limes.length) {
  //   if (limes[i] === 'small') {
  //     total += 6;
  //   } else if (limes[i] === 'medium') {
  //     total += 8;
  //   } else if (limes[i] === 'large') {
  //     total += 10;
  //   }
  //   i++;

  
     let total = 0;
     let i = 0;
     let wedge = 0;

    while (total < wedgesNeeded && i < limes.length) {
        if (limes[i] == "small") {
            wedge = 6;
        }
        if (limes[i] == "medium") {
            wedge = 8;
        } 
        if (limes[i] == "large") {
            wedge = 10;
        }
        total += wedge;
        i++;
    }
    return i;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let i = 0;
    let minutestoMix = 0;
    while (timeLeft > 0) {
        minutestoMix = timeToMixJuice(orders[i]);
        timeLeft -= minutestoMix;
        i++;
    }

    orders.splice(0, i);
    return orders;
}
