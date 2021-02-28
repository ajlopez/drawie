
const drawie = require('..');

exports['create polygon as object'] = function (test) {
    const p1 = drawie.d3.point(0, 0, 0);
    const p2 = drawie.d3.point(1, 0, 0);
    const p3 = drawie.d3.point(1, 1, 0);
    const p4 = drawie.d3.point(0, 1, 0);

    const polygon = drawie.d3.polygon([ p1, p2, p3, p4 ]);
	
    test.ok(polygon);
    test.equal(typeof polygon, 'object');
    
    test.ok(polygon.elements());
    test.equal(polygon.elements().length, 4);
    
    test.equal(polygon.elements()[0].x(), 0);
    test.equal(polygon.elements()[0].y(), 0);
    test.equal(polygon.elements()[0].z(), 0);
    
    test.equal(polygon.elements()[1].x(), 1);
    test.equal(polygon.elements()[1].y(), 0);
    test.equal(polygon.elements()[1].z(), 0);
    
    test.equal(polygon.elements()[2].x(), 1);
    test.equal(polygon.elements()[2].y(), 1);
    test.equal(polygon.elements()[2].z(), 0);
    
    test.equal(polygon.elements()[3].x(), 0);
    test.equal(polygon.elements()[3].y(), 1);
    test.equal(polygon.elements()[3].z(), 0);
};

exports['translate polygon'] = function (test) {
    const p1 = drawie.d3.point(0, 0, 0);
    const p2 = drawie.d3.point(1, 0, 0);
    const p3 = drawie.d3.point(1, 1, 0);
    const p4 = drawie.d3.point(0, 1, 0);
    
    const pm = drawie.d3.point(1, 2, 3);

    const polygon = drawie.d3.polygon([ p1, p2, p3, p4 ]).translate(pm);
	
    test.ok(polygon);
    test.equal(typeof polygon, 'object');
    
    test.ok(polygon.elements());
    test.equal(polygon.elements().length, 4);
    
    test.equal(polygon.elements()[0].x(), 1);
    test.equal(polygon.elements()[0].y(), 2);
    test.equal(polygon.elements()[0].z(), 3);
    
    test.equal(polygon.elements()[1].x(), 2);
    test.equal(polygon.elements()[1].y(), 2);
    test.equal(polygon.elements()[1].z(), 3);
    
    test.equal(polygon.elements()[2].x(), 2);
    test.equal(polygon.elements()[2].y(), 3);
    test.equal(polygon.elements()[2].z(), 3);
    
    test.equal(polygon.elements()[3].x(), 1);
    test.equal(polygon.elements()[3].y(), 3);
    test.equal(polygon.elements()[3].z(), 3);
};

