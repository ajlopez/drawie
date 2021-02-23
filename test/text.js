
const drawie = require('..');

exports['create text as object'] = function (test) {
    const style = { color: "red" };
    const text = drawie.text(10, 20, "Hello", style);;
    
    test.ok(text);
    test.equal(typeof text, 'object');
    test.ok(drawie.is2d(text));
	
	test.equal(text.x(), 10);
	test.equal(text.y(), 20);
	test.equal(text.text(), 'Hello');
	
    test.deepEqual(text.style(), style);
    
    text.style().color = "blue";
    
    test.deepEqual(text.style(), { color: "blue" });
    test.deepEqual(style, { color: "red" });
};

exports['clone text'] = function (test) {
    const style = { color: "red" };
    const original = drawie.text(10, 20, "Hello", style);;
    const text = original.clone();
    
    test.ok(text);
    test.equal(typeof text, 'object');
    test.ok(text !== original);
	
	test.equal(text.x(), 10);
	test.equal(text.y(), 20);
	test.equal(text.text(), 'Hello');
	
    test.deepEqual(text.style(), style);
    
    text.style().color = "blue";
    
    test.deepEqual(text.style(), { color: "blue" });
    test.deepEqual(style, { color: "red" });
};

