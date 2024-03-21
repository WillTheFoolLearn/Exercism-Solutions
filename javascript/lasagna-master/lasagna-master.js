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


export function cookingStatus(timer) {
    if (timer === 0) {
        return 'Lasagna is done.';
    }

    if (timer > 0) {
        return 'Not done, please wait.';
    }

    return 'You forgot to set the timer.'
}

export function preparationTime(layers, timePerLayer = 2) {
    return layers.length * timePerLayer;
}

export function quantities(layers) {
    let quantity = {noodles: 0, sauce: 0};

    for (let i = 0; i < layers.length; i++) {
        if (layers[i] === 'noodles') {
            quantity.noodles += 50;
        }
        if (layers[i] === 'sauce') {
            quantity.sauce += 0.2;
        }
    }

    return quantity;
}

export function addSecretIngredient(array1, array2) {
    array2.push(array1[array1.length-1]);
}

export function scaleRecipe(recipe, portions = 2) {
    let largeRecipe = {...recipe};

    for (let property in largeRecipe) {
        largeRecipe[property] = largeRecipe[property] * portions / 2
    }

    return largeRecipe;
}