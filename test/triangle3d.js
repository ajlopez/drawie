
const drawie = require('..');

exports['create triangle as object'] = function (test) {
    const from = drawie.d3.point(1, 42, 0);
    const to = drawie.d3.point(2, 3, 0);
    const to2 = drawie.d3.point(3, 3, 0);

    const triangle = drawie.d3.triangle(from, to, to2);
	
    test.ok(triangle);
    test.equal(typeof triangle, 'object');
    test.ok(!drawie.is2d(triangle));
    
    test.equal(triangle.v1().x(), 1);
    test.equal(triangle.v1().y(), 42);
    test.equal(triangle.v1().z(), 0);
    
    test.equal(triangle.v2().x(), 2);
    test.equal(triangle.v2().y(), 3);
    test.equal(triangle.v2().z(), 0);
    
    test.equal(triangle.v3().x(), 3);
    test.equal(triangle.v3().y(), 3);
    test.equal(triangle.v3().z(), 0);
};

exports['get normal'] = function (test) {
    const from = drawie.d3.point(0, 0, 0);
    const to = drawie.d3.point(1, 0, 0);
    const to2 = drawie.d3.point(0, 1, 0);

    const triangle = drawie.d3.triangle(from, to, to2);
    
    const normal = triangle.normal();
    
    test.ok(normal);
    
    test.equal(normal.x(), 0);
    test.equal(normal.y(), 0);
    test.equal(normal.z(), 1);
};

exports['translate triangle'] = function (test) {
    const from = drawie.d3.point(1, 42, 0);
    const to = drawie.d3.point(2, 3, 0);
    const to2 = drawie.d3.point(3, 3, 0);

    const triangle = drawie.d3.triangle(from, to, to2)
        .translate(drawie.d3.point(1, 2, 3));
	
    test.ok(triangle);
    test.equal(typeof triangle, 'object');
    
    test.equal(triangle.v1().x(), 2);
    test.equal(triangle.v1().y(), 44);
    test.equal(triangle.v1().z(), 3);
    
    test.equal(triangle.v2().x(), 3);
    test.equal(triangle.v2().y(), 5);
    test.equal(triangle.v2().z(), 3);
    
    test.equal(triangle.v3().x(), 4);
    test.equal(triangle.v3().y(), 5);
    test.equal(triangle.v3().z(), 3);
};

exports['resize triangle'] = function (test) {
    const from = drawie.d3.point(1, 42, 0);
    const to = drawie.d3.point(2, 3, 0);
    const to2 = drawie.d3.point(3, 3, 0);

    const triangle = drawie.d3.triangle(from, to, to2).resize(2);
	
    test.ok(triangle);
    test.equal(typeof triangle, 'object');
    
    test.equal(triangle.v1().x(), 2);
    test.equal(triangle.v1().y(), 84);
    test.equal(triangle.v1().z(), 0);
    
    test.equal(triangle.v2().x(), 4);
    test.equal(triangle.v2().y(), 6);
    test.equal(triangle.v2().z(), 0);
    
    test.equal(triangle.v3().x(), 6);
    test.equal(triangle.v3().y(), 6);
    test.equal(triangle.v3().z(), 0);
};

exports['x resize triangle'] = function (test) {
    const from = drawie.d3.point(1, 42, 0);
    const to = drawie.d3.point(2, 3, 0);
    const to2 = drawie.d3.point(3, 3, 0);

    const triangle = drawie.d3.triangle(from, to, to2).xresize(2);
	
    test.ok(triangle);
    test.equal(typeof triangle, 'object');
    
    test.equal(triangle.v1().x(), 2);
    test.equal(triangle.v1().y(), 42);
    test.equal(triangle.v1().z(), 0);
    
    test.equal(triangle.v2().x(), 4);
    test.equal(triangle.v2().y(), 3);
    test.equal(triangle.v2().z(), 0);
    
    test.equal(triangle.v3().x(), 6);
    test.equal(triangle.v3().y(), 3);
    test.equal(triangle.v3().z(), 0);
};

exports['y resize triangle'] = function (test) {
    const from = drawie.d3.point(1, 42, 0);
    const to = drawie.d3.point(2, 3, 0);
    const to2 = drawie.d3.point(3, 3, 0);

    const triangle = drawie.d3.triangle(from, to, to2).yresize(2);
	
    test.ok(triangle);
    test.equal(typeof triangle, 'object');
    
    test.equal(triangle.v1().x(), 1);
    test.equal(triangle.v1().y(), 84);
    test.equal(triangle.v1().z(), 0);
    
    test.equal(triangle.v2().x(), 2);
    test.equal(triangle.v2().y(), 6);
    test.equal(triangle.v2().z(), 0);
    
    test.equal(triangle.v3().x(), 3);
    test.equal(triangle.v3().y(), 6);
    test.equal(triangle.v3().z(), 0);
};

exports['z resize triangle'] = function (test) {
    const from = drawie.d3.point(1, 42, 1);
    const to = drawie.d3.point(2, 3, 1);
    const to2 = drawie.d3.point(3, 3, 1);

    const triangle = drawie.d3.triangle(from, to, to2).zresize(2);
	
    test.ok(triangle);
    test.equal(typeof triangle, 'object');
    
    test.equal(triangle.v1().x(), 1);
    test.equal(triangle.v1().y(), 42);
    test.equal(triangle.v1().z(), 2);
    
    test.equal(triangle.v2().x(), 2);
    test.equal(triangle.v2().y(), 3);
    test.equal(triangle.v2().z(), 2);
    
    test.equal(triangle.v3().x(), 3);
    test.equal(triangle.v3().y(), 3);
    test.equal(triangle.v3().z(), 2);
};

exports['z rotate triangle'] = function (test) {
    const from = drawie.d3.point(1, 42, 0);
    const to = drawie.d3.point(2, 3, 0);
    const to2 = drawie.d3.point(3, 3, 0);

    const triangle = drawie.d3.triangle(from, to, to2).zrotate(90);
	
    test.ok(triangle);
    test.equal(typeof triangle, 'object');
    
    test.equal(triangle.v1().x(), -42);
    test.equal(triangle.v1().y(), 1);
    test.equal(triangle.v1().z(), 0);
    
    test.equal(triangle.v2().x(), -3);
    test.equal(triangle.v2().y(), 2);
    test.equal(triangle.v2().z(), 0);
    
    test.equal(triangle.v3().x(), -3);
    test.equal(triangle.v3().y(), 3);
    test.equal(triangle.v3().z(), 0);
};

exports['y rotate triangle'] = function (test) {
    const from = drawie.d3.point(1, 42, 0);
    const to = drawie.d3.point(2, 3, 0);
    const to2 = drawie.d3.point(3, 3, 1);

    const triangle = drawie.d3.triangle(from, to, to2).yrotate(90);
	
    test.ok(triangle);
    test.equal(typeof triangle, 'object');
    
    test.equal(triangle.v1().x(), 0);
    test.equal(triangle.v1().y(), 42);
    test.equal(triangle.v1().z(), -1);
    
    test.equal(triangle.v2().x(), 0);
    test.equal(triangle.v2().y(), 3);
    test.equal(triangle.v2().z(), -2);
    
    test.equal(triangle.v3().x(), 1);
    test.equal(triangle.v3().y(), 3);
    test.equal(triangle.v3().z(), -3);
};

exports['x rotate triangle'] = function (test) {
    const from = drawie.d3.point(1, 42, 0);
    const to = drawie.d3.point(2, 3, 0);
    const to2 = drawie.d3.point(3, 3, 1);

    const triangle = drawie.d3.triangle(from, to, to2).xrotate(90);
	
    test.ok(triangle);
    test.equal(typeof triangle, 'object');
    
    test.equal(triangle.v1().x(), 1);
    test.equal(triangle.v1().y(), 0);
    test.equal(triangle.v1().z(), 42);
    
    test.equal(triangle.v2().x(), 2);
    test.equal(triangle.v2().y(), 0);
    test.equal(triangle.v2().z(), 3);
    
    test.equal(triangle.v3().x(), 3);
    test.equal(triangle.v3().y(), -1);
    test.equal(triangle.v3().z(), 3);
};

