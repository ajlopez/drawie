
const drawie = require('..');

exports['create xfunction as object'] = function (test) {
	const fn = function (x) { return x * 2; };
    const from = 0;
    const to = 10;
	const step = 1;

    const xfunction = drawie.xfunction(fn, from, to, step, { color: "red" });
	
    test.ok(xfunction);
    test.equal(typeof xfunction, 'object');

    test.ok(xfunction.elements());
	test.ok(Array.isArray(xfunction.elements()));
	test.equal(xfunction.elements().length, 10);
	test.deepEqual(xfunction.style(), { color: "red" });
};

