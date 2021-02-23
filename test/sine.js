
const drawie = require('..');

exports['create sine as object'] = function (test) {
    const style = { color: "red" };
    const from = 0;
    const to = 10;
	const step = 0.01;

    const sine = drawie.sine(from, to, step, style);
	
    test.ok(sine);
    test.equal(typeof sine, 'object');
    test.ok(drawie.is2d(sine));
    
    test.deepEqual(sine.style(), style);
    
    sine.style().color = "blue";
    
    test.deepEqual(sine.style(), { color: "blue" });
    test.deepEqual(style, { color: "red" });
};

