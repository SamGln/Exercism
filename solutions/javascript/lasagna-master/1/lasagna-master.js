/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(timeRemaining) {
    if (timeRemaining === 0) {
        return "Lasagna is done."
    } else if(!timeRemaining) {
        return "You forgot to set the timer."
    } else {
        return "Not done, please wait."
    }
}

export function preparationTime(layers, averageTime = 2) {
    return layers.length * averageTime;
}

export function quantities(layers) {
    const sauceLayers = layers.filter(layer => layer === "sauce");
    const noodlesLayers = layers.filter(layer => layer === "noodles");
    return {
        sauce: sauceLayers.length * 0.2,
        noodles: noodlesLayers.length * 50
    }
}

export function addSecretIngredient(friendsList, myList) {
    const lastIngredient = friendsList[friendsList.length - 1];
    myList.push(lastIngredient);
}

export function scaleRecipe(recipe, part) {
    const nbr = part / 2;
    const result = {};

    for (const key in recipe) {
        result[key] = recipe[key] * nbr;
    }

    return result;
}
