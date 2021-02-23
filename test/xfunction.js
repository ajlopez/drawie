
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
    test.ok(drawie.is2d(xfunction));

    test.ok(xfunction.elements());
	test.ok(Array.isArray(xfunction.elements()));
	test.equal(xfunction.elements().length, 10);
	test.deepEqual(xfunction.style(), style);
    
    xfunction.style().color = "blue";
    
    test.deepEqual(xfunction.style(), { color: "blue" });
    test.deepEqual(style, { color: "red" });
};

exports['mirror xfunction'] = function (test) {
	const fn = function (x) { return x * 2; };
    const from = 0;
    const to = 10;
	const step = 1;
    const style = { color: "red" };

    const xfunction0 = drawie.xfunction(fn, from, to, step, style);
    const xfunction = xfunction0.mirror();
	
    test.ok(xfunction);
    test.equal(typeof xfunction, 'object');

    test.ok(xfunction.elements());
	test.ok(Array.isArray(xfunction.elements()));
	test.equal(xfunction.elements().length, 10);
	test.deepEqual(xfunction.style(), style);
    
    xfunction.style().color = "blue";
    
    test.deepEqual(xfunction.style(), { color: "blue" });
    test.deepEqual(style, { color: "red" });
    
    for (let k = 0; k < xfunction.elements().length; k++) {
        test.equal(-xfunction0.elements()[k].from().x(), xfunction.elements()[k].from().x());
        test.equal(-xfunction0.elements()[k].from().y(), xfunction.elements()[k].from().y());
        test.equal(-xfunction0.elements()[k].to().x(), xfunction.elements()[k].to().x());
        test.equal(-xfunction0.elements()[k].to().y(), xfunction.elements()[k].to().y());
    }
};

