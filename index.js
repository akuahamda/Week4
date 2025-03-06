//variable//
console.log("const is a keyword that is use to declare a variable whose value cannot be change");
console.log("let is a keyword that is use to declare a variable whose value can be change");


let num1 = 50;
let num2 = 25;
let result = num1 + num2;
console.log(result);

//Data types//
let name = "Hamda";
console.log(name);
let surName = "Mohammed";
console.log(surName);
let cityName = "Accra";
console.log(cityName);
let color = "Black";
console.log(color);
let message = "Hello";
console.log(message);

let num3 = 42;
console.log(num3);
let num4 = 10;
console.log(num4);
let num5 = 15;
console.log(num5);

let fruits = ["mango", "orange", "apple", "grapes", 'watermelon', "blackberry", "banana", "coconut", "cherry", "pineapple"];
console.log(fruits);

let user = {
    firstName : "Hamda",
    lastName : "Mohammed",
    gender : "female",
    emailAddress : "hamda@gmail.com",
    phoneNum : +45584555555
}
console.log(user);

console.log("boolean is a type of data types that returns either true or false");
console.log("Variables are containers for storing data");

//operators//
let num6 = 50 % 4;
console.log(num6);
console.log("the answer is 2 because the modulus sign is returning a reminder");

let num7 = 10 == 10;
console.log(num7);
console.log("true cuz 10 is equal to 10");

let num8 = "John" == "Jane";
console.log(num8);
console.log("this particular operator checks if the values are the same that why the answer is false");

let num9 = 300 > 3;
console.log(num9);
console.log("300 is greater than 3 so the answer is true");

let num10 = 21 > 21;
console.log(num10);
console.log("21 cant be greater than 21 they are the same");

let num11 = 16 >= 17;
console.log(num11);
console.log("16 is not greater than or equal to 17");

let num12 = 20 != 10;
console.log(num12);
console.log("the operator checks if the values are the same thats why the answer is true");

let num13 = 50 !== "10";
console.log(num13);
console.log("this operator checks both value and type and they are different one is a string and one is a number");

let num14 = 15 !== "15";
console.log(num14);
console.log("one is number and one is a string so they are not the same and the answer is true");

let num15 = 10 > 5 && 20 < 10;
console.log(num15);
console.log("one value is true and the other is false so the answer is false this operator checks if both values are true");

let num16 = 10 < 20;
console.log(num16);
console.log("10 is smaller than 20 so the anwser is true");

let num17 = 100000 > 1000;
console.log(num17);
console.log("the first value is greater than the second one so the answer true");

let num18 = "password123" === "password1234";
console.log(num18);
console.log("the answer is false cuz the operator checks for both value and type");

let num19 = "test" == "text";
console.log(num19);
console.log("this operator checks if both values are the same");