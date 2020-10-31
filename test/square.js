
const drawie = require('..');

exports['create square as object'] = function (test) {
    const style = { color: "red" };
    const size = 10;

    const square = drawie.square(size, style);
	
    test.ok(square);
    test.equal(typeof square, 'object');
    
    test.deepEqual(square.style(), style);
    
    test.ok(square.elements());
    test.equal(square.elements().length, 4);

    test.equal(square.elements()[0].from().x(), -5);
    test.equal(square.elements()[0].from().y(), 5);
    test.equal(square.elements()[0].to().x(), 5);
    test.equal(square.elements()[0].to().y(), 5);

    test.equal(square.elements()[1].from().x(), 5);
    test.equal(square.elements()[1].from().y(), 5);
    test.equal(square.elements()[1].to().x(), 5);
    test.equal(square.elements()[1].to().y(), -5);

    test.equal(square.elements()[2].from().x(), 5);
    test.equal(square.elements()[2].from().y(), -5);
    test.equal(square.elements()[2].to().x(), -5);
    test.equal(square.elements()[2].to().y(), -5);

    test.equal(square.elements()[3].from().x(), -5);
    test.equal(square.elements()[3].from().y(), -5);
    test.equal(square.elements()[3].to().x(), -5);
    test.equal(square.elements()[3].to().y(), 5);
};

exports['mirror square'] = function (test) {
    const style = { color: "red" };
    const size = 10;

    const square = drawie.square(size, style).mirror();
	
    test.ok(square);
    test.equal(typeof square, 'object');
    
    test.deepEqual(square.style(), style);
    
    test.ok(square.elements());
    test.equal(square.elements().length, 4);

    test.equal(square.elements()[0].from().x(), 5);
    test.equal(square.elements()[0].from().y(), -5);
    test.equal(square.elements()[0].to().x(), -5);
    test.equal(square.elements()[0].to().y(), -5);

    test.equal(square.elements()[1].from().x(), -5);
    test.equal(square.elements()[1].from().y(), -5);
    test.equal(square.elements()[1].to().x(), -5);
    test.equal(square.elements()[1].to().y(), 5);

    test.equal(square.elements()[2].from().x(), -5);
    test.equal(square.elements()[2].from().y(), 5);
    test.equal(square.elements()[2].to().x(), 5);
    test.equal(square.elements()[2].to().y(), 5);

    test.equal(square.elements()[3].from().x(), 5);
    test.equal(square.elements()[3].from().y(), 5);
    test.equal(square.elements()[3].to().x(), 5);
    test.equal(square.elements()[3].to().y(), -5);
};

