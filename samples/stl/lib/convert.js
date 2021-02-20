
const drawie = require('../../..');

let indent = 0;

function addLine(text, line) {
    text += ' '.repeat(indent * 2) + line + '\r\n';
    
    return text;
}

function addVertex(text, vertex) {
    return addLine(text, 'vertex ' +
        vertex.x() + ' ' +
        vertex.y() + ' ' +
        vertex.z());               
}

function convert(element, name, text) {
    if (!text)
        text = '';
    
    if (name) {
        indent = 0;
        text = addLine(text, 'solid ' + name);
    }

    indent++;
    
    if (element)
        if (element.elements) {
            const elements = element.elements();
            const l = elements.length;
            
            if (elements[0].elements) 
                for (let k = 0; k < l; k++)
                    text = convert(elements[k], null, text);
            else {
                for (let k = 0; k < l - 1; k += 2) {
                    const p1 = elements[k];
                    const p2 = elements[(k + 1) % l];
                    const p3 = elements[(k + 2) % l];
                    
                    const triangle = drawie.triangle(p1, p2, p3);
                    
                    text = convert(triangle, null, text);
                }
            }
        }
        else {
            const normal = element.normal();
            
            text = addLine(text, 'facet normal ' 
                + normal.x() + ' ' 
                + normal.y() + ' '
                + normal.z());
                
            indent++;
            text = addVertex(text, element.v1());
            text = addVertex(text, element.v2());
            text = addVertex(text, element.v3());
            indent--;
                
            text = addLine(text, 'endfacet');
        }
    
    indent--;
    
    if (name)
        text = addLine(text, 'endsolid ' + name);
    
    return text;
}

module.exports = convert;

