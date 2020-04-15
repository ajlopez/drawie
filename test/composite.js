
const drawie = require('..');

exports['create composite as object'] = function (test) {
    const style = { color: "red" };
    const from = drawie.point(1, 42);
    const to = drawie.point(2, 3);
    const line = drawie.line(from, to, style);
	
	const composite = drawie.composite([line], style);
    
    test.ok(composite);
    test.equal(typeof composite, 'object');

    test.ok(composite.elements());
	test.ok(Array.isArray(composite.elements()));
	test.equal(composite.elements().length, 1);
	test.deepEqual(composite.style(), style);
	test.deepEqual(line.style(), style);
    
    composite.style().color = "blue";
    line.style().color = "yellow";
    
    test.deepEqual(style, { color : "red" });
	test.deepEqual(composite.style(), { color : "blue" });
	test.deepEqual(line.style(), { color : "yellow" });
};
