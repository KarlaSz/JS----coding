//****operatory == vs === */

// Js to jezyk z dynamicznym typowaniem

// == // KOERACJA TYPOW  - zmiana typu jakiejs wartosci na inny
//typ np. ze stringu na number

// /* KOERCJA TYPOW*/ mechanizmy
// 1. 1 == 1                => return 1 === 1
// 2. null == undefined     => return true
// 3. undefined == null     => return true
// 4. 1 == '1'              => return 1 == Number('1')
// 5. '1' == 1              => return Number('1') ===1
// 6. true/false == 'hello'/cos   => return Number(true) == ...cos
// 7. ... == false          => return ... == Number(false)
// 8. '1'== Object()mp. [1,2,3]   => return '1' == ToPrimitive
// [1,2,3] == 1             => ...
// 10. return false jesli nic nie znajdzie powzyej


// wszystko w JS co nie jest typem prymitywnym to jest obiektem
// czyli np. liczba, string, boolean - to typy prymitywne,
// np. tablica to obiekt

// ---przyklady---
// [0,2].toString() - do obiektu prymitywnego
// '0,2'

// '0,2' == [0,2]
// false == {}
// false == 'object'
// 0 == 'object'
// 0 === NaN
// false == {}

// false == [] //[].toString()
// false == ''
// 0 == ''
// 0 === 0


// '1' => 1
// true => 1 
// false => 0

// nastepuje zmiana typu 
// np/ 

// '2' == 2
// true

// false == 0
// true

// === // IDENTYCZNE NP 2 === 2, sprawdza czy wartosci sa te same

// ---przyklady---
//sprawdzenie w console log
// 12 === 12
// true

// '2' === 2 //string do liczby
// false
// typeof '2'
// 'string'

// typeof 2
// 'number'
// true === 1
// false

// typeof true
// 'boolean' //wartosc logiczna


// dynamiczne typowanie zmiennych JS np.dynamiczne
// let a = 1
// ///
// a = 'hello'
// //
// a = '34'
//
//a = 5