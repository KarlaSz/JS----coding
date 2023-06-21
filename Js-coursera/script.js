//----->global zakres i lokalny

// let message = "in global";
// console.log("global: message = " + message);


// let a = function () {
//     let message = "inside a";
//     console.log("a: message = " + message);
// }

// function b() {
//     console.log("b: message = " + message);
// }

// a(); //funkcje trzeba wywolac zeby zobaczyc, ma zakres lokalny
// wewntrz bloku klamr funkcji i zmiennej a

// b(); //ma zakres globalny bo jest poza zakresem klamr i siega 
//najwyzszej zmiennej

//----->typy JS

//undified zmienna

// let x;
// console.log(x);


//-----> Best practice for {} style
// Curly brace on the same or next line...

// function a()
// {
//     return
//     {
//         name: "Karla"
//     };
// }

// function b() {
//     return {
//         name: "Karla"
//     };
// }

// console.log(a()); //wartosc return nic nie zwraca bo nie 
// // widzi nic zaraz po sobie, wiec klamry sa zle ulokowane
// // i w konsoli widac undified
// console.log(b());


//----->  For loop - petla

// let sum = 0;
// for (let i = 0; i <10; i++) {
//     sum = sum +i;
//     console.log(i);
// }

// console.log("sum of 0 through 9 is: " + sum);

// petla zaczyna sie od 0 i 0 jest mniejsze od 10 i zwiekszane
// jest za kazdy razem o 1, wiec zaczyna od 0 ,a konczy na 9
//bo 10 nie jest mniejsze od 10

//-----> Tworzenie obiektu New syntax

// let company = new Object; 
// company.name = "Facebook";
// company.ceo = new Object; 
// company.ceo.fistName = "Mark";

// console.log(company);
// console.log("Company CEO name is: " + company.ceo.fistName);
// console.log(company.ceo["fistName"]);
// console.log(company["name"]);

// let stockPropName = "stock of company"; company[stockPropName] = 110;
// console.log("Stock price is: " + company[stockPropName]);

//-----> Better way: object literal
//obiekt literal zawiera elemney w sobie i rozdzielone przecinkiem,a nie ;
//jest to szybsze i latwiejsze niz klasyczny object new syntax


// let facebook = {
//     name: "Facebook",
//     ceo: {
//         firstName: "Mark",
//         favColor: "blue",
//         surname: "Zuck"
//     },
//     "stock of company": 110
// };

// console.log(facebook);
// console.log(facebook.ceo.surname);



//------------------

//-----> Functions
// funckja sa obiektami ze specjalnymi wlasciwosciami 
// and first-class data types

// function multiply (x,y) {
//     return x * y;
// }

// console.log(multiply(5,3));

// multiply.version = "v.1.0.";
// console.log(multiply);
// console.log(multiply.toString());
// console.log(multiply.version);

// Function factory 

// function makeMultiplier(multiplier) {
//     var myFunc = function (x) {
//         return multiplier * x;
//     };

//     return myFunc;
// }

// var multiplyBy3 = makeMultiplier(3);
// console.log(multiplyBy3(10));
// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(100));

// //Passing functions as arguments 

// function doOperationOn(x, operation) {
//     return operation(x);
// }

// var result = doOperationOn(5, multiplyBy3);
// console.log(result);

// result = doOperationOn(100, doubleAll);
// console.log(result);

//-----> Arrays - tablice

// var array = new Array();
// array[0] = "Karo";
// array[1] = 2;
// array[2] = function (name) {
//     console.log("hello " + name );
// };
// array[3] = {Kurs: "html, css, js"};

// console.log(array);
// console.log(array[1]);
// array[2](array[0]);

//-----> Shorthand array

// var names = ["Karo", "Ela", "Figi"];
// console.log(names);


// for (var i = 0; i < names.length; i++) {
//     console.log("hello " + names[i]);
// }

// var names2 = ["Karo", "Ela", "Figi"];

// var myObj = {
//     name: "Karo",
//     courser: "html,css,js",
//     platform: "coursera"
// };

// for (var prop in myObj) {
//     console.log(prop + ": " + myObj[prop])
// }

//-----> 



