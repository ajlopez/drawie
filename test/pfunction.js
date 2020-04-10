
const drawie = require('..');

exports['create pfunction as object'] = function (test) {
	const fn = function (n) { return drawie.point(n, n * 2); };
    const from = 0;
    const to = 10;
	const step = 0.01;

    const pfunction = drawie.pfunction(fn, from, to, step, { color: "red" });
	
    test.ok(pfunction);
    test.equal(typeof pfunction, 'object');
};

