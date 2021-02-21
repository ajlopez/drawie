
const drawie = require('..');

exports['create 3d point as object'] = function (test) {
    const point = drawie.point(1, 42, 144);
    
    test.ok(point);
    test.equal(typeof point, 'object');
};

exports['get coordinates from 3d point'] = function (test) {
    const point = drawie.point(1, 42, 144);
    
    test.equal(point.x(), 1);
    test.equal(point.y(), 42);
    test.equal(point.z(), 144);
};

exports['translate 3d point'] = function (test) {
    const point = drawie.point(1, 42, 144);
	const point2 = drawie.point(3, 4, 5);

	const result = point.translate(point2);
	
    test.equal(result.x(), 4);
    test.equal(result.y(), 46);
    test.equal(result.z(), 149);
};

exports['resize 3d point'] = function (test) {
    const point = drawie.point(1, 21, 72);

	const result = point.resize(2);
	
    test.equal(result.x(), 2);
    test.equal(result.y(), 42);
    test.equal(result.z(), 144);
};

exports['x resize 3d point'] = function (test) {
    const point = drawie.point(1, 42, 144);

	const result = point.xresize(2);
	
    test.equal(result.x(), 2);
    test.equal(result.y(), 42);
    test.equal(result.z(), 144);
};

exports['y resize 3d point'] = function (test) {
    const point = drawie.point(1, 21, 144);

	const result = point.yresize(2);
	
    test.equal(result.x(), 1);
    test.equal(result.y(), 42);
    test.equal(result.z(), 144);
};

exports['z resize 3d point'] = function (test) {
    const point = drawie.point(1, 42, 72);

	const result = point.zresize(2);
	
    test.equal(result.x(), 1);
    test.equal(result.y(), 42);
    test.equal(result.z(), 144);
};


exports['rotate point 0 degrees z axis'] = function (test) {
    const point = drawie.point(1, 42, 3);

	const result = point.zrotate(0);
	
    test.equal(result.x(), 1);
    test.equal(result.y(), 42);
    test.equal(result.z(), 3);
};

exports['rotate point 90 degrees z axis'] = function (test) {
    const point = drawie.point(1, 42, 3);

	const result = point.zrotate(90);
	
    test.equal(result.x(), -42);
    test.equal(result.y(), 1);
    test.equal(result.z(), 3);
};

exports['rotate point 180 degrees z axis'] = function (test) {
    const point = drawie.point(1, 42, 3);

	const result = point.zrotate(180);
	
    test.equal(result.x(), -1);
    test.equal(result.y(), -42);
    test.equal(result.z(), 3);
};

exports['rotate point 270 degrees z axis'] = function (test) {
    const point = drawie.point(1, 42, 3);

	const result = point.zrotate(270);
	
    test.equal(result.x(), 42);
    test.equal(result.y(), -1);
    test.equal(result.z(), 3);
};

exports['rotate point -90 degrees z axis'] = function (test) {
    const point = drawie.point(1, 42, 3);

	const result = point.zrotate(-90);
	
    test.equal(result.x(), 42);
    test.equal(result.y(), -1);
    test.equal(result.z(), 3);
};

exports['rotate point 45 degrees z axis'] = function (test) {
    const point = drawie.point(1, 1, 3);

	const result = point.zrotate(45);
	
	const cos = Math.cos(2 * Math.PI / 8);
	const sin = Math.sin(2 * Math.PI / 8);
	
	const x = point.x() * cos - point.y() * sin;
	const y = point.x() * sin + point.y() * cos;
	
    test.equal(result.x(), x);
    test.equal(result.y(), y);
    test.equal(result.z(), 3);
};
