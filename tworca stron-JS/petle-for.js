// ---- > petla zwykla 
// let i = 2; // ta zmienna nie ingeruje w petle

///

// for (let i = 0; i < 5; i++) {
//     console.log('step: ', i)
// }

// console.log('this is global i: ', i)

/// musi byc w nawiasie let zmienna okreslona bo inaczej
// bylaby zmienna inna pobiera z innej czesci kodu jesli by istniala gdzies wczesniej
// np.  wartosci ze zmiennej globalnej 
//ograniczamy zasieg i do bloku kodu 

//const nie uzywamy w petlu bo nie mozna edytowac wartosci nieoedytowalnej stalej


// ---- > roznice w petlan for (in) i for (of)


// for (in) - leci po polach/indeksach tj. 0, 1,a nie po wartosciach 
// - tylko po polach enumerowalnych
// -  sprawdza tez pola prototypow 

const employee = {
    boss: 'Michael',
    secretary: 'Pam'
}

// const names = ['Kevin', 'Oskar']

// for(const key in employee) {
//     console.log(key)
//     console.log(employee[key])
// }

// for(const key in names) {
//     console.log(key)
//     console.log(names[key])
// }

// to nie jest petla gdzie klucz (i) sie zmienia co chwile,wiec mozna uzyc const
// jesli nie potrzebuje let to uzywam const

//deskryptor - opis pewnych wartosci, opis tego co mozna z nimi zrobic
// enumarable wartosc true false wlacza lub wylacza wartoscs
// const desctriptior = Object
//     .getOwnPropertyDescriptor(employee, 'boss')


// Object.defineProperty(employee, 'ksiegowy', {
//     value: 'Karo', enumerable: true })

// console.log(desctriptior)

// for(const key in employee) {
//     console.log(key)
//     console.log(employee[key])
// }

//
// for(of) - leci po wartosciach
// - nie leci po polach iterowalnych  (obiekty nie sa iterowalne domyslnie)
// for of nie uzywamy na obiekcie tak jak wyzej

const names = ['Miki', 'Tom']

for(const value of names) {
    console.log(value)
}

for(const value of names[0]) {
    console.log(value)
}


//jak sprawdzi czy dana jest iterowalna
// funkcja, domyslny iterator

console.log(names[Symbol.iterator]) - // zwraca funkcje domyslna - iterator czyli jak ma sie zachowywac w petli
console.log(employee[Symbol.iterator]) // jako obiekt nie ma iteratora 
