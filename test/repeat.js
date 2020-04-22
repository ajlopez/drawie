
const drawie = require('..');

exports['create repeat as object'] = function (test) {
	const fn = function (point) { return drawie.point(point.x() *2, point.y() / 2); };
	const point = drawie.point(10, 10);
    const ntimes = 100;

    const repeat = drawie.repeat(fn, point, ntimes, { color: "red" });
	
    test.ok(repeat);
    test.equal(typeof repeat, 'object');
    
    test.ok(repeat.elements());
    test.equal(repeat.elements().length, 100);
};

