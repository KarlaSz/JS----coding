// callback czyli funkcja uzyta jako parametr w innej funkcji
// odwolanie do funkcji,ze jak skonczysz robic co robic to wez uruchom ta funkcje 

// uzycie callabcku do funkcji asynchornicnzych lub rozdzielenie kodu

// myCallback = function() {
//     console.log('this is callback')
// }

// function someFunction(callback) {
// //    console.log(param)
// callback()
// }

// const a = 'blabla'
// const logb = function() {
//     console.log('cos b')
// }

// //  w js kazda funkcja moze byc przechowywana w zmiennej

// someFunction(logb)

// function logA(){
//     console.log('a')
// }


//np. loga to asynchroniczna funckja

// function logA(){
//    setTimeout(() => {
//     console.log('a')

//     return 'this is from a'
//    }, 1000)
// }


// function logB(param){
//     console.log('b')
//     console.log(param)
// }

// const a = logA()
// logB(a)

//callbacki sa po to zeby miec pewnosc ze jakas funkcja zaczeka
// i wykona sie dopiero po np. wykonaniu logA wykonal sie logB


// function logA(callback){
//     setTimeout(() => {
//      console.log('a')
 
//      const someValue =  'this is from a'
//      callback(someValue)
//     }, 1000)
//  }
 
 
//  function logB(param){
//      console.log('b')
//      console.log(param)
//  }
 
//  logA(logB)


// inne funkcje callback

// funckja map bierze kazdy  element z tablicy i przeksztalca i zwraca

// const arr = [1, 3, 5].map(elem => {
//     return elem * 2
// })

// console.log(arr)

const arr = [1, 3, 5]

const multiply = elem => elem * 2
const add = elem  => elem + 23
const odd = elem  => elem - 1

const transformArray = (arr, callback) => {
    for (let i = 0; i < arr.length; i++ ) {
      arr[i] = callback  (arr[i] )
    }
}
//i++ - w kazdej petli zwiekszaj o 1 
transformArray(arr, odd)
console.log(arr)

//rozdzielone funkcje 