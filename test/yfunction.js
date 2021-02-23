
const drawie = require('..');

exports['create yfunction as object'] = function (test) {
	const fn = function (y) { return y * 2; };
    const from = 0;
    const to = 10;
	const step = 1;
    const style = { color: "red" };

    const yfunction = drawie.yfunction(fn, from, to, step, style);
	
    test.ok(yfunction);
    test.equal(typeof yfunction, 'object');
    test.ok(drawie.is2d(yfunction));
    
    test.ok(yfunction.elements());
	test.ok(Array.isArray(yfunction.elements()));
	test.equal(yfunction.elements().length, 10);
	test.deepEqual(yfunction.style(), style);
    
    yfunction.style().color = "blue";
    
    test.deepEqual(yfunction.style(), { color: "blue" });
    test.deepEqual(style, { color: "red" });
};

exports['mirror yfunction'] = function (test) {
	const fn = function (y) { return y * 2; };
    const from = 0;
    const to = 10;
	const step = 1;
    const style = { color: "red" };

    const yfunction0 = drawie.yfunction(fn, from, to, step, style);
    const yfunction = yfunction0.mirror();
	
    test.ok(yfunction);
    test.equal(typeof yfunction, 'object');

    test.ok(yfunction.elements());
	test.ok(Array.isArray(yfunction.elements()));
	test.equal(yfunction.elements().length, 10);
	test.deepEqual(yfunction.style(), style);
    
    yfunction.style().color = "blue";
    
    test.deepEqual(yfunction.style(), { color: "blue" });
    test.deepEqual(style, { color: "red" });
    
    for (let k = 0; k < yfunction.elements().length; k++) {
        test.equal(-yfunction0.elements()[k].from().x(), yfunction.elements()[k].from().x());
        test.equal(-yfunction0.elements()[k].from().y(), yfunction.elements()[k].from().y());
        test.equal(-yfunction0.elements()[k].to().x(), yfunction.elements()[k].to().x());
        test.equal(-yfunction0.elements()[k].to().y(), yfunction.elements()[k].to().y());
    }
};

