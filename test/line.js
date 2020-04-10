
const drawie = require('..');

exports['create line as object'] = function (test) {
    const from = drawie.point(1, 42);
    const to = drawie.point(2, 3);
    const line = drawie.line(from, to, { color: "red" });
    
    test.ok(line);
    test.equal(typeof line, 'object');
	
	test.equal(line.from().x(), 1);
	test.equal(line.from().y(), 42);
	
	test.equal(line.to().x(), 2);
	test.equal(line.to().y(), 3);
	
	test.deepEqual(line.style(), { color: "red" });
};

