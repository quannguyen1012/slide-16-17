let Temperature = function (C) {
    this.C = C;

    this.getF = function () {
        return this.C * 9 / 5 + 32;
    }
    this.getKenvin = function () {
        return this.C + 273.15;
    }
    this.setC = function (C) {
        this.C = C;
    }
}
let temperature = new Temperature(25);
document.write("Nhiệt dộ F =" + temperature.getF() + "<br>");
document.write("Nhiệt độ K =" + temperature.getKenvin());