// || - operator logiczny OR / 'lub' //wartosci falszywe [null,undified, 0, NaN, '', -0]
// ?? - nulish coalescing operator //dziala tylko na [null, undified]



// let user;
// let userName = null
// // console.log(userName || 'podaj nazwe usera')

// console.log(userName ?? 'podaj nazwe usera')


let points = 0
console.log(points !== undefined ? points : 'wczytaj')
//dlugie sprawdzanie, ktore mozna skrocic dzieki ??

console.log(points ?? 'wczytaj')
//?? -jesli points nie jest null lub undefiend to wyswietl wartosc zmiennej


//kalkulator
const a = 1
const b = -1
let result

if(a && b ) {
    result = a + b
}

console.log(result ?? 'Podaj A i B')

