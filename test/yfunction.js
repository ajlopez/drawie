
const drawie = require('..');

exports['create yfunction as object'] = function (test) {
	const fn = function (y) { return y * 2; };
    const from = 0;
    const to = 10;
	const step = 1;

    const yfunction = drawie.yfunction(fn, from, to, step, { color: "red" });
	
    test.ok(yfunction);
    test.equal(typeof yfunction, 'object');
    
    test.ok(yfunction.elements());
	test.ok(Array.isArray(yfunction.elements()));
	test.equal(yfunction.elements().length, 10);
	test.deepEqual(yfunction.style(), { color: "red" });
};
