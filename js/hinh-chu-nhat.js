

let Rectangle = function (x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.getX = function () {
        return this.x;
    }
    this.getY = function () {
        return this.y;
    }
    this.getW = function () {
        return this.width;
    }
    this.getH = function () {
        return this.height;
    }
    this.getArea = function () {
        return this.width * this.height;
    }
    this.getPerimeter = function (){
        return (this.width + this.height)*2;
    }
    this.setX = function (x) {
        this.x = x;
    }
    this.setY = function (y) {
        this.y = y;
    }
    this.setW = function (width) {
        return this.width;
    }
    this.setH = function (height) {
        return this.height;
    }
}
let rectangle = new Rectangle(100, 110, 300, 150);

let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
    ctx.fillStyle = '#FF0000';
    ctx.fillRect(rectangle.getX(), rectangle.getY(), rectangle.getW(), rectangle.getH());
    ctx.fillText("Area = " + rectangle.getArea(), rectangle.getX()  , rectangle.getY()-1);
    ctx.fillText("perimeter = " + rectangle.getPerimeter(), rectangle.getX()+100, rectangle.getY()-1);
