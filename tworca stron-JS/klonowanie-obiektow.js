 // klonuja sie wartosci prymitywne : boolen, string, numberm null, undified

 // wartosci obiektow, tablic nie sa prymitywne to dane klonuja sie identycznie
 //referencje sa takie same i jesli cos zostalo zmiennione w a to to samo bedzie w b , bo to sa te same obiekty bo to nie sa typy proste
 //w obiektach nie wsytepuja skopiowanie wartosci,a skopiowanie refrencji jakby 'szufladki' paniedzi i dwie zmiennie moga brac dane z tego samego


 const Jon = {
    name: 'Jon',
    skill: { name: 'piano', level: 4},
    sayHi: () => console.log('hi jony!'),
    date: new Date()
 }


 // spread operator - czyli rozproszenie elementów ktory wyciaga z Jona wszystkie dane i wrzucamy do pustego obiektu 
 

 // shall copy - plytka kopia, wypakowanie wartoscu {...Jon}, po skopiowane powierzchownie np. dla jednego poziomu

//  const Bob = {
//     ...Jon,
//     name: 'Bob' ,
//     skill: {name: Jon.skill.name, level: Jon.skill.level}
// } //deep copy -gleboka kopia, bo kopiuje wszystkie poziomy w glad tego obiektu, nie referencje,a wartosci

// //  Bob.name = 'Bobree'
// //  Bob.skill = {name: Jon.skill.name, level: Jon.skill.level}

//  Bob.skill.level = 10


const Bob = JSON.parse(JSON.stringify(Jon)) // Bob to Jsonowy string czyli zwykly tekst i trzeba go sprasowac na obiekt js, 
//Json nie przechowuje referencji oraz nie przechowuje funkcji i je wycina i wartosci niektorych obiektow np. daty i zmienia je na string
//Json nie przechowuje zlozonych typow

Bob.name = 'frank'
Bob.skill.level = 23

Jon
Bob

//gdy wartosc jest prymitywana to jest kopiowana/klonowana, zmiennej b jest nadawana ta sama wartosc co a 
//kopiowane sa wartosci tylko te pierwsze w prymitywnych danych
let a = 23
let b = a

a = 40

a
b

//kiedy co wybrac?

//jesli dane sa proste to mozemy uzyc Json
//jesli mamy funkcje to Json odpada bo je wycika to wtedy jest spread operator {...Jon}