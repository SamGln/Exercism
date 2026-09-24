/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  let Pprice;
    if (pizza === 'Margherita') {
        Pprice = 7;
    } 
    if (pizza === 'Caprese') {
        Pprice = 9;
    } 
    if (pizza === 'Formaggio') {
        Pprice = 10;
    } 
    return Pprice + extrasPrice(extras);
}

function extrasPrice(extras) {
    if (extras.length == 0) {
        return 0;
    }

    const [first, ...rest] = extras;
    let price = 0;
    if (first === 'ExtraSauce') {
        price = 1;
    }
    if (first === 'ExtraToppings') {
        price = 2;
    }

    return price + extrasPrice(rest);

}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  return pizzaOrders.reduce(
    (result, order) => result + pizzaPrice(order.pizza, ...order.extras),
    0,
  );
}
