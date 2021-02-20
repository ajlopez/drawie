
const drawie = require('../..');
const convert = require('./lib/convert');

const p1 = drawie.point(0, 0, 0);
const p2 = drawie.point(1, 0, 0);
const p3 = drawie.point(0, 1, 0);

const triangle = drawie.triangle(p1, p2, p3);

console.log(convert(triangle, 'triangle'));

