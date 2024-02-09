// enum color{
//     red,pink,blue,black,yello,white
// }

// let x = color.blue;



class person{
    rollno : number;
    name : string;
    constructor(p:number, n:string){
        this.rollno = p;
        this.name = n;
    }
    showdetails(){
        console.log(this.name + " " + this.rollno);
    }

}

let data = new person(26,"ansh");
data.showdetails();