
const drawie = require('..');

exports['create text as object'] = function (test) {
    const style = { color: "red" };
    const text = drawie.text(10, 20, "Hello", style);;
    
    test.ok(text);
    test.equal(typeof text, 'object');
	
	test.equal(text.x(), 10);
	test.equal(text.y(), 20);
	test.equal(text.text(), 'Hello');
	
    test.deepEqual(text.style(), style);
};

