
const drawie = require('..');

exports['create point as object'] = function (test) {
    const point = drawie.point(1, 42);
    
    test.ok(point);
    test.equal(typeof point, 'object');
};

exports['point is 2d'] = function (test) {
    const point = drawie.point(1, 42);
    
    test.ok(drawie.is2d(point));
};

exports['get coordinates from point'] = function (test) {
    const point = drawie.point(1, 42);
    
    test.equal(point.x(), 1);
    test.equal(point.y(), 42);
};

exports['translate point'] = function (test) {
    const point = drawie.point(1, 42);
	const point2 = drawie.point(3, 4);

	const result = point.translate(point2);
	
    test.equal(result.x(), 4);
    test.equal(result.y(), 46);
};

exports['resize point'] = function (test) {
    const point = drawie.point(1, 21);

	const result = point.resize(2);
	
    test.equal(result.x(), 2);
    test.equal(result.y(), 42);
};

exports['horizontal resize point'] = function (test) {
    const point = drawie.point(1, 42);

	const result = point.hresize(2);
	
    test.equal(result.x(), 2);
    test.equal(result.y(), 42);
};

exports['vertical resize point'] = function (test) {
    const point = drawie.point(1, 21);

	const result = point.vresize(2);
	
    test.equal(result.x(), 1);
    test.equal(result.y(), 42);
};

exports['mirror point'] = function (test) {
    const point = drawie.point(1, 42);

	const result = point.mirror();
	
    test.equal(result.x(), -1);
    test.equal(result.y(), -42);
};

exports['rotate point 0 degrees'] = function (test) {
    const point = drawie.point(1, 42);

	const result = point.rotate(0);
	
    test.equal(result.x(), 1);
    test.equal(result.y(), 42);
};

exports['rotate point 90 degrees'] = function (test) {
    const point = drawie.point(1, 42);

	const result = point.rotate(90);
	
    test.equal(result.x(), -42);
    test.equal(result.y(), 1);
};

exports['rotate point 180 degrees'] = function (test) {
    const point = drawie.point(1, 42);

	const result = point.rotate(180);
	
    test.equal(result.x(), -1);
    test.equal(result.y(), -42);
};

exports['rotate point 270 degrees'] = function (test) {
    const point = drawie.point(1, 42);

	const result = point.rotate(270);
	
    test.equal(result.x(), 42);
    test.equal(result.y(), -1);
};

exports['rotate point 45 degrees'] = function (test) {
    const point = drawie.point(1, 1);

	const result = point.rotate(45);
	
	const cos = Math.cos(2 * Math.PI / 8);
	const sin = Math.sin(2 * Math.PI / 8);
	
	const x = point.x() * cos - point.y() * sin;
	const y = point.x() * sin + point.y() * cos;
	
    test.equal(result.x(), x);
    test.equal(result.y(), y);
};
