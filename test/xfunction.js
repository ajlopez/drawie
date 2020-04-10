
const drawie = require('..');

exports['create xfunction as object'] = function (test) {
	const fn = function (x) { return x * 2; };
    const from = 0;
    const to = 10;
	const step = 0.01;

    const xfunction = drawie.xfunction(fn, from, to, step, { color: "red" });
	
    test.ok(xfunction);
    test.equal(typeof xfunction, 'object');
};

