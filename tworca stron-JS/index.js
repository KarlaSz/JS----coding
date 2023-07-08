// co to sa indeksy i jak ich szukac

// const dogs = ['kajtek', 'max', 'spike', 'max', 'burek', 'bony']

const users = [
    {
        id: 'dj434',
        name: 'Kal',
        age: 45
    },
    {
        id: 'fg434',
        name: 'Hodor',
        age: 25
    },
    {
        id: '31dj434',
        name: 'Ben',
        age: 55
    }
]

// const index = dogs.indexOf('max')
// console.log(index)
// if (index === -1 ) {
//     console.log('nie ma takiego elem.')
// }

//indexof() leci od poczatku do konca
// jesli nie ma jakiegos elementu w tablicy to zwraca -1

// const index2 = dogs.lastIndexOf('max')
// console.log(index2)

// lastIndexOf() - leci od konca do poczatku

const index3 = users.findIndex(el => el.name === "Ben")
console.log(index3)

// findIndex() - dziala na tablicach obiektow,a nie na zwyklej tablicy

// index - nr elementu w tablicy i liczby w JS od 0 

// console.log(dogs[0])