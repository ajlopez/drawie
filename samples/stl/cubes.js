
const drawie = require('../..');
const convert = require('./lib/convert');

const p1 = drawie.point(0, 0, 0);
const p2 = drawie.point(1, 0, 0);
const p3 = drawie.point(1, 1, 0);
const p4 = drawie.point(0, 1, 0);

const face1 = drawie.polygon([ p1, p2, p3, p4 ]);
const top = face1.translate(drawie.point(0, 0, 1));
const front = face1.xrotate(90);
const left = face1.yrotate(270);

const face2 = drawie.polygon([ p1, p4, p3, p2 ]);
const bottom = face2;
const back = face2.xrotate(90).translate(drawie.point(0, 1, 0));
const right = face2.yrotate(270).translate(drawie.point(1, 0, 0));


const faces = [ top, front, left, bottom, back, right ]
const cube = drawie.composite(faces);

const cubes = [];

for (let k = 0; k < 10; k++)
    for (let j = 0; j < 10; j++)
        for (let i = 0; i < 10; i++)
            cubes.push(cube.translate(drawie.point(k * 2, j * 2, i * 2)));

console.log(convert(cubes, 'cubes'));

