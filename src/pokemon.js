#!/usr/bin/env node
/*
** EPITECH PROJECT, 2020
** pokemon.js
** File description:
** javascript
*/
const p = require('./pushIn.js');
const fs = require('fs');

function main() {
    const str = openFile();
    let obj = createObj();
    p.pushPokemon(obj, str);
    p.pushPotion(obj, str);
    p.pushBerry(obj, str);
    fs.writeFileSync(process.argv[3], JSON.stringify(obj), 'utf-8')
}

function createObj() {
    let obj = {
        game: {
            pokemon: [],
            bag: {
                berry: [],
                potion: [],
            }
        }
    };
    return (obj);
}

function openFile() {
    let file = fs.readFileSync(process.argv[2], 'utf-8');
    file = file.split("game").join("").split(":").join("").split("pokemon").join("").split(" ").join("").split('"').join("").split('\n').join(" ").split("=").join(" ").split(" ");
    return (file);
}

main();
