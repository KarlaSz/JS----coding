// IIFE - imieditly invoked function expresion, inaczej funkcja samowywolujaca sie
//kawalek kodu zgrupowany w 1 funkcje, dla przejrzystosci
//zeby nie zasmiecac globalnej przestrzeni zmiennej,a tylko lokalnie
//


(() => {
    console.log('hello')
})()

// zwykla funkcja 

function myFunction () {
    const name = 'karo'
    console.log('hello ' + name)
}

myFunction()

//iife funkcja 

const test = (
    function () {
    const name = 'karosz'
    console.log('hello ' + name)
    }()
)

console.log(test) //undified bo nic nie zwracam return