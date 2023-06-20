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