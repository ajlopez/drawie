
const drawie = require('..');

exports['create triangle as object'] = function (test) {
    const from = drawie.point(1, 42, 0);
    const to = drawie.point(2, 3, 0);
    const to2 = drawie.point(3, 3, 0);

    const triangle = drawie.triangle(from, to, to2);
	
    test.ok(triangle);
    test.equal(typeof triangle, 'object');
    
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

