
const drawie = require('..');

exports['create triangle as object'] = function (test) {
    const from = drawie.point(1, 42);
    const to = drawie.point(2, 3);
    const to2 = drawie.point(3, 3);

    const triangle = drawie.triangle(from, to, to2, { color: "red" });
	
    test.ok(triangle);
    test.equal(typeof triangle, 'object');
};
