
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

