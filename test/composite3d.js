
const drawie = require('..');

exports['create composite as object'] = function (test) {
    const from = drawie.point(1, 42, 0);
    const to = drawie.point(2, 3, 0);
    const to2 = drawie.point(3, 3, 0);

    const triangle = drawie.triangle(from, to, to2);
	
	const composite = drawie.composite([ triangle ]);
    
    test.ok(composite);
    test.equal(typeof composite, 'object');

    test.ok(composite.elements());
	test.ok(Array.isArray(composite.elements()));
	test.equal(composite.elements().length, 1);
    test.equal(composite.elements()[0].v1().x(), 1);
    test.equal(composite.elements()[0].v1().y(), 42);
    test.equal(composite.elements()[0].v1().z(), 0);
    
    test.equal(composite.elements()[0].v2().x(), 2);
    test.equal(composite.elements()[0].v2().y(), 3);
    test.equal(composite.elements()[0].v2().z(), 0);
    
    test.equal(composite.elements()[0].v3().x(), 3);
    test.equal(composite.elements()[0].v3().y(), 3);
    test.equal(composite.elements()[0].v3().z(), 0);
};

exports['translate composite'] = function (test) {
    const from = drawie.point(1, 42, 0);
    const to = drawie.point(2, 3, 0);
    const to2 = drawie.point(3, 3, 0);

    const triangle = drawie.triangle(from, to, to2);
	
	const composite = drawie.composite([ triangle ])
        .translate(drawie.point(1, 2, 3));
    
    test.ok(composite);
    test.equal(typeof composite, 'object');

    test.ok(composite.elements());
	test.ok(Array.isArray(composite.elements()));
	test.equal(composite.elements().length, 1);
    test.equal(composite.elements()[0].v1().x(), 2);
    test.equal(composite.elements()[0].v1().y(), 44);
    test.equal(composite.elements()[0].v1().z(), 3);
    
    test.equal(composite.elements()[0].v2().x(), 3);
    test.equal(composite.elements()[0].v2().y(), 5);
    test.equal(composite.elements()[0].v2().z(), 3);
    
    test.equal(composite.elements()[0].v3().x(), 4);
    test.equal(composite.elements()[0].v3().y(), 5);
    test.equal(composite.elements()[0].v3().z(), 3);
};