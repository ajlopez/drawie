
const drawie = require('..');

exports['create rectangle as object'] = function (test) {
    const style = { color: "red" };
    const from = drawie.point(1, 42);
    const to = drawie.point(2, 3);

    const rectangle = drawie.rectangle(from, to, style);
	
    test.ok(rectangle);
    test.equal(typeof rectangle, 'object');
    
    test.deepEqual(rectangle.style(), style);
    
    rectangle.style().color = "blue";
    
    test.deepEqual(rectangle.style(), { color: "blue" });
    test.deepEqual(style, { color: "red" });
};
