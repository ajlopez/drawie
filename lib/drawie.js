
const drawie = function() {
    function clone(obj) {
        const newobj = {};
        
        // TODO deep clone?
        for (let n in obj)
            newobj[n] = obj[n];
        
        return newobj;
    }
    
	function Point(x, y) {
		this.x = function () { return x; };
        
		this.y = function () { return y; };
	}
	
	Point.prototype.translate = function(move) 
	{
		return new Point(this.x() + move.x(), this.y() + move.y());
	}
	
	Point.prototype.resize = function(ratio)
	{
		return new Point(this.x() * ratio, this.y() * ratio);
	}
	
	Point.prototype.hresize = function(ratio)
	{
		return new Point(this.x() * ratio, this.y());
	}
	
	Point.prototype.vresize = function(ratio)
	{
		return new Point(this.x(), this.y() * ratio);
	}
	
	Point.prototype.rotate = function(degrees)
	{
		if (degrees === 0)
			return this;
			
		if (degrees === 90)
			return new Point(-this.y(), this.x());
			
		if (degrees === 180)
			return new Point(-this.x(), -this.y());
			
		if (degrees === 270)
			return new Point(this.y(), -this.x());

		const radians = 2 * Math.PI / 360 * degrees;
		const cos = Math.cos(radians);
		const sin = Math.sin(radians);
		
        const newx = this.x() * cos
                        - this.y() * sin;

        const newy = this.x() * sin
                        + this.y() * cos;

        return new Point(newx, newy);
	}
	
	Point.prototype.mirror = function()
	{
        return new Point(-this.x(), -this.y());
	}
    
    function Text(x, y, text, style) {
        style = style ? clone(style) : {};

        this.x = function () { return x; };
        
        this.y = function () { return y; }
        
        this.text = function () { return text; }
        
        this.style = function () { return style; }
    }

	Text.prototype.clone = function() {
		return new Text(this.x(), this.y(), this.text(), this.style());
	}
	
	function Line(from, to, style) {
        style = style ? clone(style) : {};
        
		this.from = function() { return from };
        
		this.to = function() { return to };
        
		this.style = function(newstyle) {
            if (newstyle)
                return new Line(from, to, newstyle);
            
            return style;
        };
	}
	
	Line.prototype.translate = function(move) {
		return new Line(
			this.from().translate(move),
			this.to().translate(move),
			this.style()
		);
	}
	
	Line.prototype.resize = function(ratio) {
		return new Line(
			this.from().resize(ratio),
			this.to().resize(ratio),
			this.style()
		);
	}
	
	Line.prototype.hresize = function(ratio) {
		return new Line(
			this.from().hresize(ratio),			
			this.to().hresize(ratio),
			this.style()
		);
	}
	
	Line.prototype.vresize = function(ratio) {
		return new Line(
			this.from().vresize(ratio),
			this.to().vresize(ratio),
			this.style()
		);
	}
	
	Line.prototype.rotate = function(degrees) {
		return new Line(
			this.from().rotate(degrees),
			this.to().rotate(degrees),
			this.style()
		);
	}
	
	Line.prototype.mirror = function() {
		return new Line(
			this.from().mirror(),
			this.to().mirror(),
			this.style()
		);
	}

	Line.prototype.draw = function(image) {
		image.drawLine(this.from().x(), this.from().y(), this.to().x(), this.to().y(), this.style());
	}
	
	Line.prototype.clone = function() {
		return new Line(this.from(), this.to(), this.style());
	}
	
	function Composite(elements, style) {
        style = style ? clone(style) : {};
        elements = elements ? elements.slice() : [];

		this.elements = function() { return elements; };
        
		this.style = function(newstyle) {
            if (newstyle)
                return new Composite(elements, newstyle);
            
            return style; };
	}
		
	Composite.prototype.add = function (element) {
		this.elements().push(element);
	}
		
	Composite.prototype.draw = function (image) {
		image.beginDraw(this.style());
		
		const elems = this.elements();
		
		for (let n in elems)
			elems[n].draw(image);
			
		image.endDraw(this.style());
	}
		
	Composite.prototype.rotate = function (degrees) {
		const newelements = [];
		const elems = this.elements();
			
		for (let n in elems)
			newelements.push(elems[n].rotate(degrees));
				
		return new Composite(newelements, this.style());
	}
		
	Composite.prototype.mirror = function () {
		const newelements = [];
		const elems = this.elements();
			
		for (let n in elems)
			newelements.push(elems[n].mirror());
				
		return new Composite(newelements, this.style());
	}

	Composite.prototype.resize = function (ratio) {
		const newelements = [];
		const elems = this.elements();
			
		for (let n in elems)
			newelements.push(elems[n].resize(ratio));
				
		return new Composite(newelements, this.style());
	}
		
	Composite.prototype.hresize = function (ratio) {
		const newelements = [];
		const elems = this.elements();
			
		for (let n in elems)
			newelements.push(elems[n].hresize(ratio));
				
		return new Composite(newelements, this.style());
	}
		
	Composite.prototype.vresize = function (ratio) {
		const newelements = [];
		const elems = this.elements();
			
		for (let n in elems)
			newelements.push(elems[n].vresize(ratio));
				
		return new Composite(newelements, this.style());
	}
		
	Composite.prototype.translate = function (move) {
		const newelements = [];
		const elems = this.elements();
			
		for (let n in elems)
			newelements.push(elems[n].translate(move));
			
		return new Composite(newelements, this.style());
	}
		
	Composite.prototype.clone = function () {
		const newelements = [];
		const elems = this.elements();
			
		for (let n in elems)
			newelements.push(elems[n].clone());
				
		return new Composite(newelements, this.style());
	}
	
	function Triangle(point1, point2, point3, style) {
		Composite.prototype.constructor.call(
			this, 
			[new Line(point1, point2),
			new Line(point2, point3),
			new Line(point3, point1)],
			style
		);
	}
	
	Triangle.prototype = new Composite();
	Triangle.prototype.constructor = Triangle;
	
	function Rectangle(point1, point2, style) {
        if (typeof point1 === 'number' && typeof point2 === 'number') {
            const width = point1;
            const height = point2;
            
            point1 = new Point(-width / 2, height / 2);
            point2 = new Point(width / 2, - height / 2);
        }
        
        const point3 = new Point(point2.x(), point1.y());
        const point4 = new Point(point1.x(), point2.y());
        
		Composite.prototype.constructor.call(
			this, 
			[new Line(point1, point3),
			new Line(point3, point2),
			new Line(point2, point4),
            new Line(point4, point1)],
			style
		);
	}
	
	Rectangle.prototype = new Composite();
	Rectangle.prototype.constructor = Rectangle;
	
	function Square(size, style) {
        const point1 = new Point(-size/2, size/2);
        const point2 = new Point(size/2, size/2);
        const point3 = new Point(size/2, -size/2);
        const point4 = new Point(-size/2, -size/2);
        
		Composite.prototype.constructor.call(
			this, 
			[new Line(point1, point2),
			new Line(point2, point3),
			new Line(point3, point4),
            new Line(point4, point1)],
			style
		);
	}
	
	Square.prototype = new Composite();
	Square.prototype.constructor = Square;
	
	function Circle(radius, steps, style) {
        const point = new Point(radius, 0);
        
        const points = [];
        
        points.push(point);
        
        for (let k = 1; k < steps; k++) 
            points.push(point.rotate(360 / steps * k));
        
        const lines = [];
        
        for (let k = 0; k < points.length; k++)
            lines.push(new Line(points[k], points[(k + 1) % steps]));
        
		Composite.prototype.constructor.call(
			this, 
			lines,
			style
		);
	}
	
	Circle.prototype = new Composite();
	Circle.prototype.constructor = Circle;
	
	function XFunction(fn, from, to, step, style) {
		const lines = [];
		const points = [];
            
		for (let x = from; x <= to; x += step)
			points.push(new Point(x, fn(x)));
			
		for (let n = 0; n < points.length - 1; n++)
			lines.push(new Line(points[n], points[n+1]));
			
		Composite.prototype.constructor.call(
			this, 
			lines,
			style
		);
	}
	
	XFunction.prototype = new Composite();
	XFunction.prototype.constructor = XFunction;
	
	function YFunction(fn, from, to, step, style) {
		const lines = [];
		const points = [];
		
		for (let y = from; y <= to; y += step)
			points.push(new Point(fn(y), y));
			
		for (let n = 0; n < points.length - 1; n++)
			lines.push(new Line(points[n], points[n+1]));
			
		Composite.prototype.constructor.call(
			this, 
			lines,
			style
		);
	}
	
	YFunction.prototype = new Composite();
	YFunction.prototype.constructor = YFunction;
	
	function PointFunction(fn, from, to, step, style) {
		const lines = [];
		const points = [];
		
		for (let r = from; r <= to; r += step)
			points.push(fn(r));
			
		for (let n = 0; n < points.length - 1; n++)
			lines.push(new Line(points[n], points[n+1]));
			
		Composite.prototype.constructor.call(
			this, 
			lines,
			style
		);
	}
	
	PointFunction.prototype = new Composite();
	PointFunction.prototype.constructor = PointFunction;
	
	function Repeat(fn, element, ntimes, style) {
		const elements = [];
		
		for (let n = 0; n < ntimes; n++) 
		{
			elements.push(element);
			element = fn(element);
		}
			
		Composite.prototype.constructor.call(
			this, 
			elements,
			style
		);
	}
	
	Repeat.prototype = new Composite();
	Repeat.prototype.constructor = Repeat;
	
	function Sine(from, to, step, style) {
		XFunction.prototype.constructor.call(
			this, 
			Math.sin,
			from,
			to,
			step,
			style
		);
	}
	
	Sine.prototype = new XFunction();
	Sine.prototype.constructor = Sine;
	
	function Cosine(from, to, step, style) {
		XFunction.prototype.constructor.call(
			this, 
			Math.cos,
			from,
			to,
			step,
			style
		);
	}
	
	Cosine.prototype = new XFunction();
	Cosine.prototype.constructor = Cosine;
	
	function Image(ctx, xcenter, ycenter) {
		let lastx = -1;
		let lasty = -1;
		
		function drawLine(x1, y1, x2, y2, style)
		{				
            x1 = x1 + xcenter;
            x2 = x2 + xcenter;
            y1 = ycenter - y1;
            y2 = ycenter - y2;
            
			beginDraw(style);
			
			if (x1 != lastx || y1 != lasty)
				ctx.moveTo(x1, y1);
				
			ctx.lineTo(x2, y2);
			
			lastx = x2;
			lasty = y2;
			
			endDraw(style);
		}
		
		function beginDraw(style) 
		{
			if (typeof style === 'object' && Object.keys(style).length) {
				ctx.save();
				ctx.beginPath();
			}
		}
		
		function endDraw(style) 
		{
			if (typeof style === 'object' && Object.keys(style).length) {
				if (style.lineWidth != null)
					ctx.lineWidth = style.lineWidth;
					
				if (style.fillColor != null)
					ctx.fillStyle = style.fillColor;
					
				if (style.color != null)
					ctx.strokeStyle = style.color;
					
				if (style.fillColor != null)
					ctx.fill();
					
				if (style.color != null)
					ctx.stroke();
				
				ctx.restore();
			}
		}
		
		this.drawLine = drawLine;
		this.beginDraw = beginDraw;
		this.endDraw = endDraw;
	}
	
	return {
		point: function (x, y) { return new Point(x, y); },
		line: function (from, to, style) { return new Line(from, to, style); },
		text: function (x, y, text, style) { return new Text(x, y, text, style); },
		image: function (ctx, xcenter, ycenter) { return new Image(ctx, xcenter, ycenter); },
		composite: function (elements, style) { return new Composite(elements, style); },
		triangle: function (point1, point2, point3, style) { return new Triangle(point1, point2, point3, style); },
		rectangle: function (from, to, style) { return new Rectangle(from, to, style); },
		square: function (size, style) { return new Square(size, style); },
		circle: function (radius, steps, style) { return new Circle(radius, steps, style); },
		xfunction: function (fn, from, to, step, style) { return new XFunction(fn, from, to, step, style ); },
		yfunction: function (fn, from, to, step, style) { return new YFunction(fn, from, to, step, style ); },
		pfunction: function (fn, from, to, step, style) { return new PointFunction(fn, from, to, step, style ); },
		repeat: function (fn, element, ntimes, style) { return new Repeat(fn, element, ntimes, style); },
		sine: function (from, to, step, style) { return new Sine(from, to, step, style ); },
		cosine: function (from, to, step, style) { return new Cosine(from, to, step, style ); }
	}
}();

if (typeof module !== 'undefined' && module && module.exports)
    module.exports = drawie;
else if (typeof windows !== 'undefined')
	windows.ajdraw = drawie;


