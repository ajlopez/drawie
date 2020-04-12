
const drawie = function() {
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
	
	Point.prototype.horizontalResize = function(ratio)
	{
		return new Point(this.x() * ratio, this.y());
	}
	
	Point.prototype.verticalResize = function(ratio)
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
	
	function Line(from, to, style) {
		this.from = function() { return from };
		this.to = function() { return to };
		this.style = function() { return style; };
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
	
	Line.prototype.horizontalResize = function(ratio) {
		return new Line(
			this.from().horizontalResize(ratio),			
			this.to().horizontalResize(ratio),
			this.style()
		);
	}
	
	Line.prototype.verticalResize = function(ratio) {
		return new Line(
			this.from().verticalResize(ratio),
			this.to().verticalResize(ratio),
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
	
	Line.prototype.draw = function(image) {
		image.drawLine(this.from().x(), this.from().y(), this.to().x(), this.to().y(), this.style());
	}
	
	Line.prototype.clone = function() {
		return new Line(this.from(), this.to(), this.style());
	}
	
	function Composite(elements, style) {
		if (!elements)
			elements = [];

		this.elements = function() { return elements; };
		this.style = function() { return style; };		
	}
		
	Composite.prototype.line = function (from, to) {
		this.add(new Line(from, to));
		return this;
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
		
	Composite.prototype.resize = function (ratio) {
		const newelements = [];
		const elems = this.elements();
			
		for (let n in elems)
			newelements.push(elems[n].resize(ratio));
				
		return new Composite(newelements, this.style());
	}
		
	Composite.prototype.horizontalResize = function (ratio) {
		const newelements = [];
		const elems = this.elements();
			
		for (let n in elems)
			newelements.push(elems[n].horizontalResize(ratio));
				
		return new Composite(newelements, this.style());
	}
		
	Composite.prototype.verticalResize = function (ratio) {
		const newelements = [];
		const elems = this.elements();
			
		for (let n in elems)
			newelements.push(elems[n].verticalResize(ratio));
				
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
	
	function Image(ctx) {
		let lastx = -1;
		let lasty = -1;
		
		function drawLine(x1, y1, x2, y2, style)
		{				
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
			if (style != null) {
				ctx.save();
				ctx.beginPath();
			}
		}
		
		function endDraw(style) 
		{
			if (style != null) {
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
		image: function (ctx) { return new Image(ctx); },
		composite: function (elements, style) { return new Composite(elements, style); },
		triangle: function (point1, point2, point3, style) { return new Triangle(point1, point2, point3, style); },
		rectangle: function (from, to, style) { return new Rectangle(from, to, style); },
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

