
const drawie = require('..');

exports['create pfunction as object'] = function (test) {
	const fn = function (n) { return drawie.point(n, n * 2); };
    const from = 0;
    const to = 10;
	const step = 1;
    const style = { color: "red" };

    const pfunction = drawie.pfunction(fn, from, to, step, style);
	
    test.ok(pfunction);
    test.equal(typeof pfunction, 'object');
    test.ok(drawie.is2d(pfunction));
    
    test.ok(pfunction.elements());
	test.ok(Array.isArray(pfunction.elements()));
	test.equal(pfunction.elements().length, 10);
	test.deepEqual(pfunction.style(), style);
    
    pfunction.style().color = "blue";
    
    test.deepEqual(pfunction.style(), { color: "blue" });
    test.deepEqual(style, { color: "red" });
};

