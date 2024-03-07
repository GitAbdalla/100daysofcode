/* SIMPLE Object*/

function create_car(manufacturer , model , capacity, tech , power ,  tarque ,color){

    let car = {
        manufacturer : manufacturer,
        model : model,
        capacity : capacity,
        tech : tech ,
        power : power,
        tarque : tarque,
        color: color,

        print_info : function(){
            
            let info = this.manufacturer + " " + this.model + "\n"
            + "Engine type:" + this.capacity + " "
            +this.tech + "," + this.power +"hp,"
            +this.tarque + "N.m" + "\n" +"color:" +this.color + "\n" 
            + "----------------------------"
            console.log(info);

        }
    }

    return car;
}

let malibu = create_car("chevrolet","malibu",1500,"turbo",163,250,"cherry red");
let fusion = create_car("ford","fusion", 1500 ,"turbo", 181, 250,"Alto blue");
let avalon = create_car("Toyota","Avalon", 2500,"",205,186,"wind chill pearl");

fusion.print_info();
malibu.print_info();
avalon.print_info();