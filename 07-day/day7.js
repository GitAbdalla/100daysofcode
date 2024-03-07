/* Constructor function */

function Car(manu,model,capacity,tech,tarque,color){

    this.manufactor = manu;
    this.model = model;
    this.motor_capacity = capacity;
    this.motor_tech = tech;
    this.motor_tarque = tarque;
    this.color = color;

    this.print_info= function(){
        let info =this.manufacturer + " " + this.model + "\n"
        + "Engine type:" + this.capacity + " "
        +this.tech + "," + this.power +"hp,"
        +this.tarque + "N.m" + "\n" +"color:" +this.color + "\n" 
        + "----------------------------"
        console.log(info);
    }
}

let honda= new Car("Honda","Civic","2000","natural aspiration",158,138,"red");

console.log(honda.motor_capacity);
