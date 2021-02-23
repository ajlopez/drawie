
const drawie = require('..');

exports['create composite as object'] = function (test) {
    const style = { color: "red" };
    const from = drawie.point(1, 42);
    const to = drawie.point(2, 3);
    const line = drawie.line(from, to, style);
	
	const composite = drawie.composite([line], style);
    
    test.ok(composite);
    test.equal(typeof composite, 'object');
    test.ok(drawie.is2d(composite));

    test.ok(composite.elements());
	test.ok(Array.isArray(composite.elements()));
	test.equal(composite.elements().length, 1);
	test.deepEqual(composite.style(), style);
	test.deepEqual(line.style(), style);
    test.equal(line.from().x(), 1);
    test.equal(line.from().y(), 42);
    test.equal(line.to().x(), 2);
    test.equal(line.to().y(), 3);
    
    composite.style().color = "blue";
    line.style().color = "yellow";
    
    test.deepEqual(style, { color : "red" });
	test.deepEqual(composite.style(), { color : "blue" });
	test.deepEqual(line.style(), { color : "yellow" });
};

exports['resize composite'] = function (test) {
    const style = { color: "red" };
    const from = drawie.point(1, 42);
    const to = drawie.point(2, 3);
    const line = drawie.line(from, to, style);
	
	const composite = drawie.composite([line], style).resize(2);
    
    test.ok(composite);
    test.equal(typeof composite, 'object');

    test.ok(composite.elements());
	test.ok(Array.isArray(composite.elements()));
	test.equal(composite.elements().length, 1);
	test.deepEqual(composite.style(), style);
	test.deepEqual(composite.elements()[0].style(), style);
    test.equal(composite.elements()[0].from().x(), 2);
    test.equal(composite.elements()[0].from().y(), 84);
    test.equal(composite.elements()[0].to().x(), 4);
    test.equal(composite.elements()[0].to().y(), 6);
};

exports['vertical resize composite'] = function (test) {
    const style = { color: "red" };
    const from = drawie.point(1, 42);
    const to = drawie.point(2, 3);
    const line = drawie.line(from, to, style);
	
	const composite = drawie.composite([line], style).vresize(2);
    
    test.ok(composite);
    test.equal(typeof composite, 'object');

    test.ok(composite.elements());
	test.ok(Array.isArray(composite.elements()));
	test.equal(composite.elements().length, 1);
	test.deepEqual(composite.style(), style);
	test.deepEqual(composite.elements()[0].style(), style);
    test.equal(composite.elements()[0].from().x(), 1);
    test.equal(composite.elements()[0].from().y(), 84);
    test.equal(composite.elements()[0].to().x(), 2);
    test.equal(composite.elements()[0].to().y(), 6);
};

exports['horizontal resize composite'] = function (test) {
    const style = { color: "red" };
    const from = drawie.point(1, 42);
    const to = drawie.point(2, 3);
    const line = drawie.line(from, to, style);
	
	const composite = drawie.composite([line], style).hresize(2);
    
    test.ok(composite);
    test.equal(typeof composite, 'object');

    test.ok(composite.elements());
	test.ok(Array.isArray(composite.elements()));
	test.equal(composite.elements().length, 1);
	test.deepEqual(composite.style(), style);
	test.deepEqual(composite.elements()[0].style(), style);
    test.equal(composite.elements()[0].from().x(), 2);
    test.equal(composite.elements()[0].from().y(), 42);
    test.equal(composite.elements()[0].to().x(), 4);
    test.equal(composite.elements()[0].to().y(), 3);
};

exports['composite with new style'] = function (test) {
    const style = { color: "red" };
    const from = drawie.point(1, 42);
    const to = drawie.point(2, 3);
    const line = drawie.line(from, to);
	
	const composite = drawie.composite([line], style);

    const newstyle = { color: "blue" };
    
    const composite2 = composite.style(newstyle);
    
    test.ok(composite2);
    test.equal(typeof composite2, 'object');

    test.ok(composite2.elements());
	test.ok(Array.isArray(composite2.elements()));
	test.equal(composite2.elements().length, 1);
	test.deepEqual(composite2.style(), newstyle);
    
	test.deepEqual(composite.style(), style);
};

exports['mirror composite'] = function (test) {
    const style = { color: "red" };
    const from = drawie.point(1, 42);
    const to = drawie.point(2, 3);
    const line = drawie.line(from, to, style);
	
	const composite = drawie.composite([line], style).mirror();
    
    test.ok(composite);
    test.equal(typeof composite, 'object');

    test.ok(composite.elements());
	test.ok(Array.isArray(composite.elements()));
	test.equal(composite.elements().length, 1);
	test.deepEqual(composite.style(), style);
	test.deepEqual(line.style(), style);
    
    test.equal(composite.elements()[0].from().x(), -1);
    test.equal(composite.elements()[0].from().y(), -42);
    test.equal(composite.elements()[0].to().x(), -2);
    test.equal(composite.elements()[0].to().y(), -3);
};
