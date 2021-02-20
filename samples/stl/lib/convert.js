
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
            
            for (let k = 0; k < l; k++)
                convert(elements[k], null, text);
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

