
const drawie = require('..');

exports['create image as object'] = function (test) {
    const image = drawie.image({});
    
    test.ok(image);
    test.equal(typeof image, 'object');
};
