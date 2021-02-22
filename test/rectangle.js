
const drawie = require('..');

exports['create rectangle as object'] = function (test) {
    const style = { color: "red" };
    const from = drawie.point(1, 42);
    const to = drawie.point(2, 3);

    const rectangle = drawie.rectangle(from, to, style);
	
    test.ok(rectangle);
    test.equal(typeof rectangle, 'object');
    test.ok(drawie.is2d(rectangle));
    
    test.deepEqual(rectangle.style(), style);
    
    rectangle.style().color = "blue";
    
    test.deepEqual(rectangle.style(), { color: "blue" });
    test.deepEqual(style, { color: "red" });
    
    test.ok(rectangle.elements());
    test.equal(rectangle.elements().length, 4);

    test.equal(rectangle.elements()[0].from().x(), 1);
    test.equal(rectangle.elements()[0].from().y(), 42);
    test.equal(rectangle.elements()[0].to().x(), 2);
    test.equal(rectangle.elements()[0].to().y(), 42);

    test.equal(rectangle.elements()[1].from().x(), 2);
    test.equal(rectangle.elements()[1].from().y(), 42);
    test.equal(rectangle.elements()[1].to().x(), 2);
    test.equal(rectangle.elements()[1].to().y(), 3);

    test.equal(rectangle.elements()[2].from().x(), 2);
    test.equal(rectangle.elements()[2].from().y(), 3);
    test.equal(rectangle.elements()[2].to().x(), 1);
    test.equal(rectangle.elements()[2].to().y(), 3);

    test.equal(rectangle.elements()[3].from().x(), 1);
    test.equal(rectangle.elements()[3].from().y(), 3);
    test.equal(rectangle.elements()[3].to().x(), 1);
    test.equal(rectangle.elements()[3].to().y(), 42);
};

exports['create rectangle using width and height'] = function (test) {
    const style = { color: "red" };
    const width = 100;
    const height = 50;

    const rectangle = drawie.rectangle(width, height, style);
	
    test.ok(rectangle);
    test.equal(typeof rectangle, 'object');
    
    test.deepEqual(rectangle.style(), style);
    
    test.ok(rectangle.elements());
    test.equal(rectangle.elements().length, 4);

    test.equal(rectangle.elements()[0].from().x(), -50);
    test.equal(rectangle.elements()[0].from().y(), 25);
    test.equal(rectangle.elements()[0].to().x(), 50);
    test.equal(rectangle.elements()[0].to().y(), 25);

    test.equal(rectangle.elements()[1].from().x(), 50);
    test.equal(rectangle.elements()[1].from().y(), 25);
    test.equal(rectangle.elements()[1].to().x(), 50);
    test.equal(rectangle.elements()[1].to().y(), -25);

    test.equal(rectangle.elements()[2].from().x(), 50);
    test.equal(rectangle.elements()[2].from().y(), -25);
    test.equal(rectangle.elements()[2].to().x(), -50);
    test.equal(rectangle.elements()[2].to().y(), -25);

    test.equal(rectangle.elements()[3].from().x(), -50);
    test.equal(rectangle.elements()[3].from().y(), -25);
    test.equal(rectangle.elements()[3].to().x(), -50);
    test.equal(rectangle.elements()[3].to().y(), 25);
};

exports['mirror rectangle'] = function (test) {
    const style = { color: "red" };
    const from = drawie.point(1, 42);
    const to = drawie.point(2, 3);

    const rectangle = drawie.rectangle(from, to, style).mirror();
	
    test.ok(rectangle);
    test.equal(typeof rectangle, 'object');
    
    test.deepEqual(rectangle.style(), style);
    
    rectangle.style().color = "blue";
    
    test.deepEqual(rectangle.style(), { color: "blue" });
    test.deepEqual(style, { color: "red" });
    
    test.ok(rectangle.elements());
    test.equal(rectangle.elements().length, 4);

    test.equal(rectangle.elements()[0].from().x(), -1);
    test.equal(rectangle.elements()[0].from().y(), -42);
    test.equal(rectangle.elements()[0].to().x(), -2);
    test.equal(rectangle.elements()[0].to().y(), -42);

    test.equal(rectangle.elements()[1].from().x(), -2);
    test.equal(rectangle.elements()[1].from().y(), -42);
    test.equal(rectangle.elements()[1].to().x(), -2);
    test.equal(rectangle.elements()[1].to().y(), -3);

    test.equal(rectangle.elements()[2].from().x(), -2);
    test.equal(rectangle.elements()[2].from().y(), -3);
    test.equal(rectangle.elements()[2].to().x(), -1);
    test.equal(rectangle.elements()[2].to().y(), -3);

    test.equal(rectangle.elements()[3].from().x(), -1);
    test.equal(rectangle.elements()[3].from().y(), -3);
    test.equal(rectangle.elements()[3].to().x(), -1);
    test.equal(rectangle.elements()[3].to().y(), -42);
};
