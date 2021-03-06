
const drawie = require('..');

exports['create triangle as object'] = function (test) {
    const style = { color: "red" };
    const from = drawie.point(1, 42);
    const to = drawie.point(2, 3);
    const to2 = drawie.point(3, 3);

    const triangle = drawie.triangle(from, to, to2, style);
	
    test.ok(triangle);
    test.equal(typeof triangle, 'object');
    test.ok(drawie.is2d(triangle));
    
    test.deepEqual(triangle.style(), style);
    
    triangle.style().color = "blue";
    
    test.deepEqual(triangle.style(), { color: "blue" });
    test.deepEqual(style, { color: "red" });
    
    test.ok(triangle.elements());
    test.equal(triangle.elements().length, 3);
    
    test.equal(triangle.elements()[0].from().x(), 1);
    test.equal(triangle.elements()[0].from().y(), 42);
    test.equal(triangle.elements()[0].to().x(), 2);
    test.equal(triangle.elements()[0].to().y(), 3);
    
    test.equal(triangle.elements()[1].from().x(), 2);
    test.equal(triangle.elements()[1].from().y(), 3);
    test.equal(triangle.elements()[1].to().x(), 3);
    test.equal(triangle.elements()[1].to().y(), 3);
    
    test.equal(triangle.elements()[2].from().x(), 3);
    test.equal(triangle.elements()[2].from().y(), 3);
    test.equal(triangle.elements()[2].to().x(), 1);
    test.equal(triangle.elements()[2].to().y(), 42);
};

exports['mirror triangle'] = function (test) {
    const style = { color: "red" };
    const from = drawie.point(1, 42);
    const to = drawie.point(2, 3);
    const to2 = drawie.point(3, 3);

    const triangle = drawie.triangle(from, to, to2, style).mirror();
	
    test.ok(triangle);
    test.equal(typeof triangle, 'object');
    
    test.deepEqual(triangle.style(), style);
    
    test.ok(triangle.elements());
    test.equal(triangle.elements().length, 3);
    
    test.equal(triangle.elements()[0].from().x(), -1);
    test.equal(triangle.elements()[0].from().y(), -42);
    test.equal(triangle.elements()[0].to().x(), -2);
    test.equal(triangle.elements()[0].to().y(), -3);
    
    test.equal(triangle.elements()[1].from().x(), -2);
    test.equal(triangle.elements()[1].from().y(), -3);
    test.equal(triangle.elements()[1].to().x(), -3);
    test.equal(triangle.elements()[1].to().y(), -3);
    
    test.equal(triangle.elements()[2].from().x(), -3);
    test.equal(triangle.elements()[2].from().y(), -3);
    test.equal(triangle.elements()[2].to().x(), -1);
    test.equal(triangle.elements()[2].to().y(), -42);
};

