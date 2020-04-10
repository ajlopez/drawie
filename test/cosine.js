
const drawie = require('..');

exports['create cosine as object'] = function (test) {
    const from = 0;
    const to = 10;
	const step = 0.01;

    const cosine = drawie.cosine(from, to, step, { color: "red" });
	
    test.ok(cosine);
    test.equal(typeof cosine, 'object');
};

