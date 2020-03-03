#!/usr/bin/env node
/*
** EPITECH PROJECT, 2020
** do op
** File description:
** javascript
*/

function doOp(nb1, ope, nb2, cb) {
    let res = 0;

    switch (ope) {
        case '+':
            res = nb1 + nb2;
            break;
        case '-':
            res = nb1 - nb2;
            break;
        case '*':
            res = nb1 * nb2;
            break;
        case '/':
            res = nb1 / nb2;
            break;
        default:
            return null;
    }
    cb(res);
}

function func(res, err) {
    if (res === Infinity)
        console.error("Pas par 0");
    else if (isNaN(res))
        console.error("Pas un nombre");
    else
        console.log(res);
}

function main() {
    doOp('a', '/', 0, func);
}

main();
