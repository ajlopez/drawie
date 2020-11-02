
const drawie = require('..');

exports['create circle as object using radius and steps'] = function (test) {
    const style = { color: "red" };
    const radius = 3;
    const steps = 20;

    const circle = drawie.circle(radius, steps, style);
	
    test.ok(circle);
    test.equal(typeof circle, 'object');
    
    test.deepEqual(circle.style(), style);
    
    test.ok(circle.elements());
    test.equal(circle.elements().length, 20);

    test.equal(circle.elements()[0].from().x(), 3);
    test.equal(circle.elements()[0].from().y(), 0);

    test.equal(circle.elements()[5].from().x(), 0);
    test.equal(circle.elements()[5].from().y(), 3);

    test.equal(circle.elements()[10].from().x(), -3);
    test.equal(circle.elements()[10].from().y(), 0);

    test.equal(circle.elements()[15].from().x(), 0);
    test.equal(circle.elements()[15].from().y(), -3);

    test.equal(circle.elements()[19].to().x(), 3);
    test.equal(circle.elements()[19].to().y(), 0);
};

