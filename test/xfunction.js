
const drawie = require('..');

exports['create xfunction as object'] = function (test) {
	const fn = function (x) { return x * 2; };
    const from = 0;
    const to = 10;
	const step = 1;
    const style = { color: "red" };

    const xfunction = drawie.xfunction(fn, from, to, step, style);
	
    test.ok(xfunction);
    test.equal(typeof xfunction, 'object');

    test.ok(xfunction.elements());
	test.ok(Array.isArray(xfunction.elements()));
	test.equal(xfunction.elements().length, 10);
	test.deepEqual(xfunction.style(), style);
    
    xfunction.style().color = "blue";
    
    test.deepEqual(xfunction.style(), { color: "blue" });
    test.deepEqual(style, { color: "red" });
};

