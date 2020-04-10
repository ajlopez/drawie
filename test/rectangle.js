
const drawie = require('..');

exports['create rectangle as object'] = function (test) {
    const from = drawie.point(1, 42);
    const to = drawie.point(2, 3);

    const rectangle = drawie.rectangle(from, to, { color: "red" });
	
    test.ok(rectangle);
    test.equal(typeof rectangle, 'object');
};
