
const drawie = require('../..');
const convert = require('./lib/convert');

const p1 = drawie.d3.point(0, 0, 0);
const p2 = drawie.d3.point(1, 0, 0);
const p3 = drawie.d3.point(1, 1, 0);
const p4 = drawie.d3.point(0, 1, 0);

const face1 = drawie.d3.polygon([ p1, p2, p3, p4 ]);
const top = face1.translate(drawie.d3.point(0, 0, 1));
const front = face1.xrotate(90);
const left = face1.yrotate(270);

const face2 = drawie.d3.polygon([ p1, p4, p3, p2 ]);
const bottom = face2;
const back = face2.xrotate(90).translate(drawie.d3.point(0, 1, 0));
const right = face2.yrotate(270).translate(drawie.d3.point(1, 0, 0));


const faces = [ top, front, left, bottom, back, right ]
const cube = drawie.composite(faces);

console.log(convert(cube, 'cube'));

