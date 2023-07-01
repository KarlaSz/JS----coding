// funkcje-roznice.js

greet1() 

function greet1 () {
    console.log('hello karooo')
}

const greet2 = function() {
    console.log('hello karooo 2')
}

const greet3 = () => {
    console.log('hello karooo 3')
}


greet1()
greet2()
greet3()

// 1. function greet1 () {} wywolac ja moza z kazdego miejsca czyli pod lub nad zanim zostala zainicjalizowana czyli zdefiniowana
// grret2 i greet3 - dopiero po inizjalizacji czy po stworzeniu moza wywolac,czyli po 

// 2. greet1, greet2 tworzy kontekts
//  greet3 - nie tworzy kontekstu