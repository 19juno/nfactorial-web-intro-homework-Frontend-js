
/* first task */
const theBestRestaurant = {
    owner: "me",
    chef: "Yerkanat",
    address: "My kitchen",
    numberOfVisitors: 5,
    michelinStar: true,
    'phone': 7777777

};

console.log(theBestRestaurant) 

theBestRestaurant.chef = "Dinara"; 
console.log(theBestRestaurant.chef) 

delete theBestRestaurant["phone"];
console.log(theBestRestaurant)

theBestRestaurant.newPhone = 88888888;
console.log(theBestRestaurant['newPhone'])

theBestRestaurant.numberOfVisitors = null; 
console.log(theBestRestaurant['numberOfVisitors'])


/* second task*/
const vehicle = {};

vehicle.brandName = "Kia";
console.log(vehicle["brandName"])
vehicle.model = "Sportage";
console.log(vehicle)
vehicle.model = "Rio";
console.log(vehicle.model)
delete vehicle.model;
console.log(vehicle)

/* third task */
let salaries = {
	Aroo: 100,
	Dalida: 160,
	Samat: 130
}
let sum = salaries.Aroo + salaries.Dalida + salaries.Samat;
console.log(sum)

/* или второй вариант  */
let sum2 = 0;
for(let key in salaries) {
    if(salaries.hasOwnProperty) {
        sum2 += salaries[key];
    }
}
console.log(sum2)

