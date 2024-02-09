// enum color{
//     red,pink,blue,black,yello,white
// }
// let x = color.blue;
var person = /** @class */ (function () {
    function person(p, n) {
        this.rollno = p;
        this.name = n;
    }
    person.prototype.showdetails = function () {
        console.log(this.name + " " + this.rollno);
    };
    return person;
}());
var data = new person(26, "ansh");
data.showdetails();
