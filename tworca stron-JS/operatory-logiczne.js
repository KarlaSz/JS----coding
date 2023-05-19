// ... && ... - wszystkie warunki musza byc spelnione 

const a = true && true // true
const b = false && true // false
const c = true && false // false
const d = false && false // false

// ... || ... - conajmniej jeden "or" warunek musi byc spelniony

const a = true || true // true
const b = false || true // true
const c = true || false // true
const d = false || false // false

// zwracaja nam wartosc ostatniego parametru