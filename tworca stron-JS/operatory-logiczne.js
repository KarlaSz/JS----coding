// ... && ... - (and) wszystkie warunki musza byc spelnione 

// const a = true && true // true
// const b = false && true // false
// const c = true && false // false
// const d = false && false // false

// ... || ... - (or) conajmniej jeden "or" warunek musi byc spelniony

// const a = true || true // true
// const b = false || true // true
// const c = true || false // true
// const d = false || false // false


// operatory zwracaja nam wartosc ostatniego parametru na ktorej sie zatrzymal 

// true / false
// truthy / falsy 

// wszystkie przypadki sa prawdze (truthy), to taka ktora da sie przekonwertowac na true 
// oprocz kilka wyjatkow, ktore sa falszywe (falsy)
// - null
// - NaN
// - 0
// - '', ""
// - undified

//np. Boolean(null) - zwraca false, Boolean(2) lub Boolean('hello') - zwraca true 

const loggedUser = {
    name: 'John'
}
const userName = loggedUser.name
console.log(userName)