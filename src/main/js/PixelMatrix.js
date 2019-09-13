

class PixelMatrix {

    //mc:var _width;
    //mc:var _height;
    //mc:var _pixels;

    constructor(width, height) { //mc:function initialize(width, height) {
        this._width = width;
        this._height = height;
        this._pixels = new Array(width * height);

        this.clear(0);
    }

    /*mc:function*/ clear(color) {
        for (var i = 0; i < this._pixels.length; i++) { 
            this._pixels[i] = color;
        }
    }
    
    /*mc:function*/ getWidth() {
        return this.width;
    }

    /*mc:function*/ getHeight() {
        return this.height;
    }

    static /*mc:function*/ coordToIndex(width, height, x, y) {

        if (x < 0 || x > (width-1)) {
            return -1;
        }

        if (y < 0 || y > (height-1)) {
            return -1;
        }

        return y * width + x;
    }

    /*mc:function*/ putPixel(x, y, color) {
        var index = PixelMatrix.coordToIndex(this._width, this._height, x, y);
        this._pixels[index] = color;
    }
    
    /*mc:function*/ getPixel(x, y, color) {
        var index = PixelMatrix.coordToIndex(this._width, this._height, x, y);
        return this._pixels[index];
	}
    
    static /*mc:function*/ calculateSectionLength(length, sectionCount, sectionSpacing) {
        var totalSectionSpacing = sectionSpacing * sectionCount + sectionSpacing;
        return Math.round((length - totalSectionSpacing) / sectionCount);
    }

    static /*mc:function*/ upscalePixel(x, y, width, height, targetWidth, targetHeight, pixelSpacing) {
        
        var newPixelWidth = PixelMatrix.calculateSectionLength(targetWidth, width, pixelSpacing);
        var newPixelHeight = PixelMatrix.calculateSectionLength(targetHeight, height, pixelSpacing);

        var newX = (x * newPixelWidth) + (x * pixelSpacing) + pixelSpacing;
        var newY = (y * newPixelHeight) + (y * pixelSpacing) + pixelSpacing;

        return [newX, newY, newX + newPixelWidth, newY + newPixelHeight];
    }

}