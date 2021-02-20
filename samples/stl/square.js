
const drawie = require('../..');
const convert = require('./lib/convert');

const p1 = drawie.point(0, 0, 0);
const p2 = drawie.point(1, 0, 0);
const p3 = drawie.point(1, 1, 0);
const p4 = drawie.point(0, 1, 0);

const square = drawie.polygon([ p1, p2, p3, p4 ]);

console.log(convert(square, 'square'));

