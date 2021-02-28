
const drawie = require('../..');
const convert = require('./lib/convert');

const p1 = drawie.d3.point(0, 0, 0);
const p2 = drawie.d3.point(1, 0, 0);
const p3 = drawie.d3.point(1, 1, 0);
const p4 = drawie.d3.point(0, 1, 0);

const square = drawie.d3.polygon([ p1, p2, p3, p4 ]);

const squares = [];

for (let k = 0; k < 10; k++)
    for (let j = 0; j < 10; j++)
        squares.push(square.translate(drawie.d3.point(k * 2, j * 2, 0)));

console.log(convert(squares, 'squares'));

