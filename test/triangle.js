
const drawie = require('..');

exports['create triangle as object'] = function (test) {
    const style = { color: "red" };
    const from = drawie.point(1, 42);
    const to = drawie.point(2, 3);
    const to2 = drawie.point(3, 3);

    const triangle = drawie.triangle(from, to, to2, style);
	
    test.ok(triangle);
    test.equal(typeof triangle, 'object');
    
    test.deepEqual(triangle.style(), style);
    
    triangle.style().color = "blue";
    
    test.deepEqual(triangle.style(), { color: "blue" });
    test.deepEqual(style, { color: "red" });
};
