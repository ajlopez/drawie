
const drawie = require('..');

exports['create composite as object'] = function (test) {
    const from = drawie.point(1, 42);
    const to = drawie.point(2, 3);
    const line = drawie.line(from, to, { color: "red" });
	
	const composite = drawie.composite([line], { color: "red" });
    
    test.ok(composite);
    test.equal(typeof composite, 'object');

    test.ok(composite.elements());
	test.ok(Array.isArray(composite.elements()));
	test.equal(composite.elements().length, 1);
	test.deepEqual(composite.style(), { color: "red" });
};
