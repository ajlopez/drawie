
const drawie = require('..');

exports['create sine as object'] = function (test) {
    const from = 0;
    const to = 10;
	const step = 0.01;

    const sine = drawie.sine(from, to, step, { color: "red" });
	
    test.ok(sine);
    test.equal(typeof sine, 'object');
};

