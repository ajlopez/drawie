
const drawie = require('..');

exports['create line as object'] = function (test) {
    const style = { color: "red" };
    const from = drawie.point(1, 42);
    const to = drawie.point(2, 3);
    const line = drawie.line(from, to, style);
    
    test.ok(line);
    test.equal(typeof line, 'object');
	
	test.equal(line.from().x(), 1);
	test.equal(line.from().y(), 42);
	
	test.equal(line.to().x(), 2);
	test.equal(line.to().y(), 3);
	
    test.deepEqual(line.style(), style);
    
    line.style().color = "blue";
    
    test.deepEqual(line.style(), { color: "blue" });
    test.deepEqual(style, { color: "red" });
};

exports['line with new style'] = function (test) {
    const style = { color: "red" };
    const from = drawie.point(1, 42);
    const to = drawie.point(2, 3);
    const line = drawie.line(from, to, style);
	
    test.deepEqual(line.style(), style);
    
    const newstyle = { color: "blue" };
    const line2 = line.style(newstyle);
    
    test.ok(line2);
    test.deepEqual(line2.style(), newstyle);
	test.equal(line2.from().x(), 1);
	test.equal(line2.from().y(), 42);	
	test.equal(line2.to().x(), 2);
	test.equal(line2.to().y(), 3);

    test.deepEqual(line.style(), style);
};

exports['rotate line'] = function (test) {
    const from = drawie.point(1, 42);
    const to = drawie.point(2, 3);
    const line = drawie.line(from, to, { color: "red" });
    
    const line2 = line.rotate(90);
    
    test.ok(line2);
    test.equal(typeof line2, 'object');
	
	test.equal(line2.from().x(), -42);
	test.equal(line2.from().y(), 1);
	
	test.equal(line2.to().x(), -3);
	test.equal(line2.to().y(), 2);
	
	test.deepEqual(line2.style(), { color: "red" });
    
    line2.style().closed = true;
    
	test.deepEqual(line.style(), { color: "red" });
	test.deepEqual(line2.style(), { color: "red", closed: true });
};

exports['mirror line'] = function (test) {
    const from = drawie.point(1, 42);
    const to = drawie.point(2, 3);
    const line = drawie.line(from, to, { color: "red" });
    
    const line2 = line.mirror();
    
    test.ok(line2);
    test.equal(typeof line2, 'object');
	
	test.equal(line2.from().x(), -1);
	test.equal(line2.from().y(), -42);
	
	test.equal(line2.to().x(), -2);
	test.equal(line2.to().y(), -3);
	
	test.deepEqual(line2.style(), { color: "red" });
    
    line2.style().closed = true;
    
	test.deepEqual(line.style(), { color: "red" });
	test.deepEqual(line2.style(), { color: "red", closed: true });
};

