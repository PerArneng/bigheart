
class Pixel {

    //mc:var _x;
    //mc:var _y;
    //mc:var _color;

    constructor(x, y, color) { //mc:function initialize(x, y, color) {
        this._x = x;
        this._y = y;
        this._color = color;
    }

    /*mc:function*/ getX() { return this._x; }
    /*mc:function*/ getY() { return this._y; }
    /*mc:function*/ getColor() { return this.color; }
}