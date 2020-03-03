function pushPotion(obj, res) {
    let j = 0;
    let i = 0;

    for (let item in res) {
        if (res[item] === "potion") {
            j = item;
            break;
        }
    }
    for (j; j < res.length; j++) {
        if (res[j] === "name") {
            let tabBerry = {
                name: res[j+1],
                effect: res[j+2],
            };
            obj.game.bag.potion[i] = tabBerry;
            i+=1;
        }
    }
}

function pushBerry(obj, res) {
    let i = 0;
    let j = 0;

    for (let item in res) {
        if (res[item] === "potion") {
            j = item;
            break;
        }
    }
    for (let item = 0; item < j; item+=1) {
        if (res[item] === "effect") {
            let tabPotion = {
                name: res[item-1],
                effect: res[item+1],
            };
            obj.game.bag.berry[i] = tabPotion;
            i+=1;
        }
    }
}

function pushPokemon(obj, res) {
    let i = 0;

    for (let item = 0; item < res.length; item+=1) {
        if (res[item] === "type") {
            let tabPokemon = {
                name: res[item - 1],
                type: res[item + 1],
                level: res[item + 3],
                hp: res[item + 5],
                hasEvolution: res[item + 7],
                hasEvolved: res[item + 9],
            };
            obj.game.pokemon[i] = tabPokemon;
            i+=1;
        }
    }
}

module.exports = {
    pushBerry, pushPotion, pushPokemon,
};
